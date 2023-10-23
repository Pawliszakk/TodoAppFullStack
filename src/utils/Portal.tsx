import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
	children: ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
	const [mounted, setMounted] = useState(false);

	const portalRoot = document.getElementById('overlay-root');

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);
	return mounted ? createPortal(children, portalRoot!) : null;
};

export default Portal;
