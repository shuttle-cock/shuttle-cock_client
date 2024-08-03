import { globalStyle } from '@vanilla-extract/css';

import './text.css';
import { vars } from './theme.css';

globalStyle('body', {
	color: vars.colors.grayscale.B,
	backgroundColor: vars.colors.grayscale.W
});

globalStyle('#root *', {
	fontFamily: vars.typography.fontFamily,
	fontSize: vars.typography.fontSize.l,
	lineHeight: vars.typography.lineHeight.l
});

globalStyle('a', {
	textDecoration: 'none',
	color: 'inherit'
});
