import { createContainer } from '@/utils/createContainer';
import { useState, useEffect, MouseEventHandler, useCallback, useRef } from 'react';
import Portal from '../Portal/Portal';
import { motion } from 'framer-motion';
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
	const rootRef = useRef<HTMLDivElement>(null);

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

	function handleNextImage() {
		if (counter - 1 >= 0) {
			const nextImage = flatImages.find((item) => item.counter === counter - 1);
			setCounter(counter - 1);
			setCurrentImage(nextImage || null);
		}
	}

	function handlePrevImage() {
		if (counter + 1 < flatImages.length) {
			const prevImage = flatImages.find((item) => item.counter === counter + 1);
			setCounter(counter + 1);
			setCurrentImage(prevImage || null);
		}
	}

	const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = useCallback(() => {
		onClose?.();
	}, [onClose]);
	return (
		<Portal id={'image'}>
			{isModalActive && isMounted && (
				<motion.div ref={rootRef} className={style['gallery-modal']}>
					<button
						type="button"
						className={cn(style['gallery-modal__button'], style['gallery-modal__button_close'])}
						onClick={handleClose}
						data-testid="modal-close-button"
					>
						<img src={CloseButton} alt="close" />
					</button>
					<motion.div className={style['gallery-modal__content']}>
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

						<div className={style['gallery-modal__img']}>
							<motion.img src={currentImage?.url} alt={currentImage?.title} />
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
					<div className={style['gallery-modal__strip']}>
						<div className={style['gallery-modal__strip__wrapper']}>
							{flatImages.map((item) => (
								<div
									key={item.id}
									className={cn(
										style['gallery-modal__strip__item'],
										counter === item.counter && style['gallery-modal__strip__item_active'],
									)}
								>
									<img src={item.url} alt={item.title} />
								</div>
							))}
						</div>
					</div>
				</motion.div>
			)}
		</Portal>
	);
}

export default ModalWindowForImage;
