import { Menu } from '../_private';
import * as styles from './Menubar.css';

type MenuBarProps = {
	menus: [string, string];
	selectedMenu: string;
	onMenuSelect: (id: string) => void;
};

export default function Menubar({ menus, onMenuSelect, selectedMenu }: MenuBarProps) {
	return (
		<ul className={styles.container}>
			{menus.map(menu => (
				<Menu key={menu} isActive={menu === selectedMenu} label={menu} onClick={() => onMenuSelect(menu)} />
			))}
		</ul>
	);
}
