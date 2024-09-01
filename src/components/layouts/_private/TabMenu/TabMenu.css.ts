import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '4px',
	cursor: 'pointer',
	padding: '8px 0 22px',
	boxSizing: 'border-box'
});

export const transition = style({
	transition: 'all 100ms'
});

globalStyle(`${transition} path`, {
	transition: 'all 100ms'
});
