import { globalStyle } from '@vanilla-extract/css';

import './text.css';
import { vars } from './theme.css';

globalStyle('body', {
	color: vars.colors.grayscale.B,
	backgroundColor: vars.colors.primary.B25,
	width: '100dvw',
	height: '100dvh',
	touchAction: 'none',
	display: 'flex',
	justifyContent: 'center'
});

globalStyle('#root, #overlay', {
	width: 'inherit',
	maxWidth: '440px',
	background: vars.colors.grayscale.W
});

globalStyle('body, #root', {
	fontFamily: vars.typography.fontFamily,
	fontSize: vars.typography.fontSize.l,
	lineHeight: vars.typography.lineHeight.l
});

globalStyle('a', {
	textDecoration: 'none',
	color: 'inherit'
});

globalStyle('::-webkit-scrollbar', {
	width: '15px'
});

globalStyle('::-webkit-scrollbar-thumb', {
	background: vars.colors.grayscale.G100,
	backgroundClip: 'content-box',
	borderRadius: '16px',
	border: '5px solid transparent'
});
