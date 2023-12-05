import { FC, PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal: FC<PropsWithChildren<{ id: string; children: ReactNode }>> = ({ id, children }) => {
	const [container, setContainer] = useState<HTMLElement | null>();
	useEffect(() => {
		if (id) {
			const portalContainer = document.getElementById(id);
			if (!document.getElementById(id)) {
				const portalContainer = document.createElement('div');
				portalContainer.setAttribute('id', id);
				document.body.appendChild(portalContainer);
			}

			setContainer(portalContainer);
		}
	}, [id]);
	return container ? createPortal(children, container) : null;
};

export default Portal;
