import { style } from '@vanilla-extract/css';
import { vars } from '../../../../styles/theme.css';

export const container = style({
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '30px 20px',
	boxSizing: 'border-box',
	backgroundColor: vars.colors.grayscale.G25
});

export const userInfo = style({
	display: 'flex',
	gap: '8px'
});

export const userAvatar = style({
	width: '40px',
	height: '40px',
	borderRadius: '999px'
});

export const userInfoTextGroup = style({
	display: 'flex',
	flexDirection: 'column'
});
