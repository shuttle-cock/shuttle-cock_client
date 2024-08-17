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

globalStyle('#root *', {
	fontFamily: vars.typography.fontFamily,
	fontSize: vars.typography.fontSize.l,
	lineHeight: vars.typography.lineHeight.l
});

globalStyle('#root', {
	width: 'inherit',
	maxWidth: '440px',
	background: vars.colors.grayscale.W
});

globalStyle('a', {
	textDecoration: 'none',
	color: 'inherit'
});
