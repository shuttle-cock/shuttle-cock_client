import { style } from '@vanilla-extract/css';
import { vars } from '../../../../styles/theme.css';

export const item = style({
	position: 'relative',
	width: '100%',
	cursor: 'pointer',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '14px 0 10px',
	boxSizing: 'border-box',
	fontSize: vars.typography.fontSize.m,
	fontWeight: vars.typography.fontWeight.regular,
	color: vars.colors.grayscale.G400,
	transition: 'all 200ms'
});

export const active = style({
	fontWeight: vars.typography.fontWeight.bold,
	color: vars.colors.grayscale.G700
});

export const underline = style({
	position: 'absolute',
	bottom: '0',
	left: '0',
	right: '0',
	height: '2px',
	backgroundColor: vars.colors.grayscale.G700,
	verticalAlign: 'center'
});
