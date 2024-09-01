import { useState } from 'react';

import { Icon, OverlayView } from '../../../common';
import MoreMenu from '../MoreMenu';
import * as styles from './Header.css';
import logo from '/logo.png';

export default function Header() {
	const [showOverlay, setShowOverlay] = useState(false);

	const handleMoreMenuOpen = () => {
		setShowOverlay(true);
	};

	const handleMoreMenuClose = () => {
		setShowOverlay(false);
	};

	return (
		<>
			<header className={styles.container}>
				<img src={logo} alt="Logo" className={styles.logo} />
				<Icon name="more_l" className={styles.moreIcon} onClick={handleMoreMenuOpen} />
			</header>
			<OverlayView showOverlay={showOverlay}>
				<MoreMenu onClose={handleMoreMenuClose} />
			</OverlayView>
		</>
	);
}
