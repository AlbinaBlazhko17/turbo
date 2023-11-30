import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { MouseEventHandler } from 'react';
import Portal from '../Portal/Portal';
import { createContainer } from '@utils/createContainer';
import CloseButton from '@assets/icons/close_button.svg';
import { setStateActionType } from '@/customTypes/react.types';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './modalWindow.module.scss';

const MODAL_CONTAINER_ID = 'modal-container-id';

type Props = {
	title: string;
	onClose?: () => void;
	children: React.ReactNode | React.ReactNode[];
	isSliderInteracting: boolean;
	setIsSliderInteracting: setStateActionType<boolean>;
	isModalActive: boolean;
};

function ModalWindow(props: Props) {
	const { title, onClose, children, isSliderInteracting, setIsSliderInteracting, isModalActive } = props;

	const rootRef = useRef<HTMLDivElement>(null);
	const [isMounted, setMounted] = useState(false);

	useEffect(() => {
		createContainer({ id: MODAL_CONTAINER_ID });
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleWrapperClick = (event: MouseEvent) => {
			const { target } = event;
			setIsSliderInteracting(false);
			if (target instanceof Node && rootRef.current === target && !isSliderInteracting) {
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
	}, [isSliderInteracting, onClose]);

	const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = useCallback(() => {
		onClose?.();
	}, [onClose]);

	return (
		<Portal id={`modal-container-id`}>
			<AnimatePresence>
				{isModalActive && isMounted && (
					<motion.div
						className={styles.wrap}
						ref={rootRef}
						data-testid="wrap"
						transition={{
							type: 'spring',
							duration: 0.3,
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<motion.div
							transition={{
								type: 'spring',
								duration: 0.3,
								stiffness: 300,
								damping: 30,
							}}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0 }}
							className={styles.content}
						>
							<button
								type="button"
								className={styles.closeButton}
								onClick={handleClose}
								data-testid="modal-close-button"
							>
								<img src={CloseButton} alt="close" />
							</button>
							<p className={styles.title}>{title}</p>
							{children}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</Portal>
	);
}

export default ModalWindow;
