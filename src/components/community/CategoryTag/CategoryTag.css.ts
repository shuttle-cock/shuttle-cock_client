import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const cardCategory = style({
	backgroundColor: vars.colors.primary.B50,
	color: vars.colors.primary.B400,
	fontSize: vars.typography.fontSize.s,
	lineHeight: vars.typography.lineHeight.s,
	minWidth: '22px',
	maxWidth: '42px',
	height: '18px',
	padding: '2px 8px',
	borderRadius: '4px',
	marginBottom: '8px'
});
