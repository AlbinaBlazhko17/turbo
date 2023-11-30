import { useEffect, useState } from 'react';
import { getAllPhotos } from '@/utils/dataForGallery';
import { IDataForPhotos } from '@/interfaces/IDataForGallery';
import ModalWindowForImage from '@/components/ModalWindowForImage/ModalWindowForImage';
import cn from 'classnames';

import style from './galleryPage.module.scss';

function GalleryPage() {
	const [photos, setPhotos] = useState<IDataForPhotos[][] | null>([]);
	const [limit, setLimit] = useState<number>(20);
	const [offset, setOffset] = useState<number>(0);
	const [modalActive, setModalActive] = useState<boolean>(false);
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		(async () => {
			try {
				const data = await getAllPhotos(offset, limit);
				const dataAfterTransform = [];
				if (data) {
					for (let i = 0; i < data.length; i += 5) {
						dataAfterTransform.push(data.slice(i, i + 5));
					}
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

	return (
		<>
			<h2>Gallery Page</h2>
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
										<img src={photo.url} alt={photo.title} />
									</div>
								))}
							</div>
						))}
				</div>
			</section>
			<ModalWindowForImage
				counter={counter}
				setCounter={setCounter}
				photos={photos}
				onClose={handleModalClose}
				isModalActive={modalActive}
			/>
		</>
	);
}

export default GalleryPage;
