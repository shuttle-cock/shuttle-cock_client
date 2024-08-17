import { style } from '@vanilla-extract/css';

export const container = style({
	width: '100%',
	height: '100%',
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'center'
});

export const content = style({
	width: '100%',
	height: '100%',
	overflowY: 'auto'
});
