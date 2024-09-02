import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';

import * as styles from './OverlayView.css';

type CreatePortalParameters = Parameters<typeof createPortal>;

type PortalBaseProps = {
	children: CreatePortalParameters[0];
	container?: CreatePortalParameters[1];
	portalKey?: CreatePortalParameters[2];
};

type PortalProps = PortalBaseProps & {
	showOverlay?: boolean;
};

export default function OverlayView({
	children,
	container = document.body,
	portalKey,
	showOverlay = false
}: PortalProps) {
	return createPortal(
		<AnimatePresence>
			{showOverlay && (
				<motion.div
					id="overlay"
					className={styles.container}
					initial={{ y: '100%' }}
					animate={{ y: 0 }}
					exit={{ y: '100%' }}
					transition={{ type: 'spring', stiffness: 300, damping: 30 }}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>,
		container,
		portalKey
	);
}
