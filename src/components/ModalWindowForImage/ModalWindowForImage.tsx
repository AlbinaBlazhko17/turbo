import { createContainer } from '@/utils/createContainer';
import { useState, useEffect, MouseEventHandler, useCallback, useRef } from 'react';
import Portal from '../Portal/Portal';
import { AnimatePresence, motion } from 'framer-motion';
import CloseButton from '@assets/icons/close_button_white.svg';
import cn from 'classnames';
import ArrowIcon from '@assets/icons/sort-arrow.svg';
import { IDataForPhotos } from '@/interfaces/IDataForGallery';
import { setStateActionType } from '@/customTypes/react.types';

import style from './modalWindowForImage.module.scss';

const MODAL_CONTAINER_ID = 'image';

function ModalWindowForImage({
	onClose,
	isModalActive,
	photos,
	counter,
	setCounter,
}: {
	onClose?: () => void;
	isModalActive: boolean;
	photos: IDataForPhotos[][] | null;
	counter: number;
	setCounter: setStateActionType<number>;
}) {
	const [isMounted, setMounted] = useState(false);
	const [flatImages, setFlatImages] = useState<IDataForPhotos[]>([]);
	const [currentImage, setCurrentImage] = useState<IDataForPhotos | null>(null);
	const [click, setClick] = useState<'next' | 'prev' | undefined>(undefined);
	const rootRef = useRef<HTMLDivElement>(null);
	const smallGalleryRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (photos) {
			const flatArray = [].concat(...photos);
			setFlatImages(flatArray);
		}
	}, [photos]);

	useEffect(() => {
		createContainer({ id: MODAL_CONTAINER_ID });
		setMounted(true);
		const image = flatImages.find((item) => item.counter === counter);
		setCurrentImage(image || null);
	}, [counter, flatImages]);

	useEffect(() => {
		const handleWrapperClick = (event: MouseEvent) => {
			const { target } = event;
			if (target instanceof Node && rootRef.current === target) {
				onClose?.();
			}
		};
		const handleEscapePress = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose?.();
			}
		};
		window.addEventListener('click', handleWrapperClick);
		window.addEventListener('keydown', handleEscapePress);

		return () => {
			window.removeEventListener('click', handleWrapperClick);
			window.removeEventListener('keydown', handleEscapePress);
		};
	}, [onClose]);

	function handleNextImage(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.stopPropagation();
		if (counter - 1 >= 0) {
			const nextImage = flatImages.find((item) => item.counter === counter - 1);
			setClick('prev');
			setCounter(counter - 1);
			setCurrentImage(nextImage || null);
		}
	}

	function handlePrevImage(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.stopPropagation();
		if (counter + 1 < flatImages.length) {
			const prevImage = flatImages.find((item) => item.counter === counter + 1);
			setClick('next');
			setCounter(counter + 1);
			setCurrentImage(prevImage || null);
		}
	}

	function handleImageClick(index: number) {
		smallGalleryRef.current?.scrollTo({
			left: index * 100,
			behavior: 'smooth',
		});
		setCounter(index);
		const image = flatImages.find((item) => item.counter === index);
		setCurrentImage(image || null);
	}

	function handlePreventPropagation(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.stopPropagation();
	}

	const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = useCallback(() => {
		onClose?.();
	}, [onClose]);

	return (
		<Portal id={'image'}>
			<AnimatePresence>
				{isModalActive && isMounted && (
					<motion.div
						ref={rootRef}
						className={style['gallery-modal']}
						transition={{
							type: 'spring',
							duration: 0.3,
							stiffness: 300,
							damping: 30,
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						{/* <button
							type="button"
							className={cn(style['gallery-modal__button'], style['gallery-modal__button_close'])}
							onClick={handleClose}
							data-testid="modal-close-button"
						>
							<img src={CloseButton} alt="close" />
						</button> */}
						<motion.div className={style['gallery-modal__content']} onClick={handleClose}>
							<button
								className={cn(
									style['gallery-modal__button'],
									style['gallery-modal__button__arrow'],
									style['gallery-modal__button__arrow_prev'],
								)}
								onClick={handleNextImage}
							>
								<img src={ArrowIcon} alt="arrow" />
							</button>

							<div className={style['gallery-modal__img']} onClick={handlePreventPropagation}>
								<motion.img
									src={currentImage?.url}
									alt={currentImage?.title}
									key={counter}
									initial="initialState"
									animate="animateState"
									transition={{
										type: 'tween',
										duration: 0.5,
									}}
									variants={{
										initialState: {
											opacity: 0,
											x:
												click === 'next'
													? '100%'
													: typeof click === 'undefined'
													  ? '0%'
													  : '-100%',
										},
										animateState: {
											opacity: 1,
											x: '0',
										},
									}}
								/>
							</div>
							<button
								className={cn(
									style['gallery-modal__button'],
									style['gallery-modal__button__arrow'],
									style['gallery-modal__button__arrow_next'],
								)}
								onClick={handlePrevImage}
							>
								<img src={ArrowIcon} alt="arrow" />
							</button>
						</motion.div>
						<div className={style['gallery-modal__strip']} ref={smallGalleryRef}>
							<div className={style['gallery-modal__strip__wrapper']}>
								{flatImages.map((item) => (
									<div
										key={item.id}
										className={cn(
											style['gallery-modal__strip__item'],
											counter === item.counter && style['gallery-modal__strip__item_active'],
										)}
										onClick={() => handleImageClick(item.counter)}
									>
										<img src={item.url} alt={item.title} />
									</div>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</Portal>
	);
}

export default ModalWindowForImage;
