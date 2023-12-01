import Button from '@/components/Button/Button';
import ModalWindowForImage from '@/components/ModalWindowForImage/ModalWindowForImage';
import { IDataForPhotos } from '@/interfaces/IDataForGallery';
import { getAllPhotos } from '@/utils/dataForGallery';
import ArrowIcon from '@assets/icons/sort-arrow.svg';
import SpinnerIcon from '@assets/icons/spinner.svg';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import style from './galleryPage.module.scss';

function GalleryPage() {
	const [photos, setPhotos] = useState<IDataForPhotos[][] | null>([]);
	const [limit, setLimit] = useState<number>(20);
	const [modalActive, setModalActive] = useState<boolean>(false);
	const [counter, setCounter] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(true);
	const arrowRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const main = document.querySelector('main');
		const arrow = document.querySelector(`.${style.gallery__arrow}`);
		function handleArrowOpacity() {
			if (main) {
				if (main.scrollTop > 500) {
					arrow.style.opacity = `${main.scrollTop / 1000}`;
				} else {
					arrow.style.opacity = `0`;
				}
			}
		}

		if (main) {
			main.addEventListener('scroll', handleArrowOpacity);
		}

		return () => {
			if (main) {
				main.removeEventListener('scroll', handleArrowOpacity);
			}
		};
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const data = await getAllPhotos(0, limit);
				const dataAfterTransform = [];
				if (data) {
					for (let i = 0; i < data.length; i += 5) {
						dataAfterTransform.push(data.slice(i, i + 5));
					}
					setLoading(false);
				}
				setPhotos(dataAfterTransform);
			} catch (err) {
				console.log(err);
			}
		})();
	}, [limit]);

	const getImageClasses = (index: number) => {
		switch (index % 5) {
			case 0:
				return style.gallery__img_first_half_row;
			case 1:
				return style.gallery__img_second_half_row;
			case 2:
				return style.gallery__img_full_row;
			case 3:
				return style.gallery__img_third_column;
			case 4:
				return style.gallery__img_fifth;
			default:
				return '';
		}
	};

	function handleClickOnImage(index: number) {
		setCounter(index);
		setModalActive(true);
	}

	function handleModalClose() {
		setModalActive(false);
	}

	if (loading) {
		return (
			<div className={style.gallery__spinner}>
				<img src={SpinnerIcon} alt="spinner" />
			</div>
		);
	}

	function goToTop() {
		const main = document.querySelector('main');
		main?.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	return (
		<div>
			<h1 className={style.gallery__subheader}>Gallery Page</h1>
			<section>
				<div className={style.gallery}>
					{photos &&
						photos.map((photos, index) => (
							<div key={index} className={style.gallery__wrapper}>
								{photos.map((photo, i) => (
									<div
										key={photo.id}
										className={cn(style.gallery__img, getImageClasses(i))}
										onClick={() => handleClickOnImage(photo.counter)}
									>
										<LazyLoadImage src={photo.url} alt={photo.title} />
									</div>
								))}
							</div>
						))}
				</div>
				<div className={style.gallery__button}>
					<Button appearance="filled" onClick={() => setLimit(limit + 20)}>
						Load more
					</Button>
				</div>
			</section>
			<ModalWindowForImage
				counter={counter}
				setCounter={setCounter}
				photos={photos}
				onClose={handleModalClose}
				isModalActive={modalActive}
			/>
			<div className={style.gallery__arrow} onClick={goToTop} ref={arrowRef}>
				<img src={ArrowIcon} alt="arrow" />
			</div>
		</div>
	);
}

export default GalleryPage;
