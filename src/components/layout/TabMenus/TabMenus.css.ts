import { style } from '@vanilla-extract/css';

export const tabMenu = style({
	position: 'absolute',
	bottom: '0',
	left: '50%',
	transform: 'translateX(-50%)',
	width: '100%',
	display: 'flex'
});

export const tabMenuItem = style({
	width: 'calc(100% / 3)',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '4px',
	cursor: 'pointer'
});
