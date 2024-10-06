import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const container = style({
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	borderRadius: '4px',
	position: 'relative',
	backgroundColor: vars.colors.grayscale.G25
});

export const input = style({
	padding: '14px 16px',
	boxSizing: 'border-box',
	outline: 'none',
	border: 'none',
	borderRadius: '4px',
	backgroundColor: 'transparent',
	fontSize: vars.typography.fontSize.m,
	lineHeight: vars.typography.lineHeight.m,
	fontWeight: vars.typography.fontWeight.regular,
	fontFamily: vars.typography.fontFamily,
	color: vars.colors.grayscale.G700,
	transition: 'all 150ms',
	':hover': {
		boxShadow: `inset 0px 0px 1px ${vars.colors.grayscale.G75}`
	},
	':disabled': {
		color: vars.colors.grayscale.G25
	},
	'::placeholder': {
		color: vars.colors.grayscale.G300
	}
});
