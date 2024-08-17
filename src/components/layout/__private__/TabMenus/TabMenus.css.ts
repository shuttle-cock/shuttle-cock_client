import { style } from '@vanilla-extract/css';
import { vars } from '../../../../styles/theme.css';

export const tabMenu = style({
	width: '100%',
	display: 'flex',
	backgroundColor: vars.colors.grayscale.W
});

export const tabMenuItem = style({
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '4px',
	cursor: 'pointer'
});
