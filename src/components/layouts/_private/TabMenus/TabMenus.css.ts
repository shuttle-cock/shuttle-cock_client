import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const container = style({
	width: '100%',
	display: 'flex',
	backgroundColor: vars.colors.grayscale.W,
	borderTopWidth: '1px',
	borderTopStyle: 'solid',
	borderTopColor: vars.colors.grayscale.G50
});
