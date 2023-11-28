import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const PORTAL_ERROR_MSG =
	'There is no portal container in markup. Please add portal container with proper id attribute.';

function Portal({ id, children }: { id: string; children: ReactNode }) {
	const [container, setContainer] = useState<HTMLElement>();
	useEffect(() => {
		if (id) {
			const portalContainer = document.getElementById(id);

			if (!portalContainer) {
				throw new Error(PORTAL_ERROR_MSG);
			}

			setContainer(portalContainer);
		}
	}, [id]);

	return container ? createPortal(children, container) : null;
}

export default Portal;
