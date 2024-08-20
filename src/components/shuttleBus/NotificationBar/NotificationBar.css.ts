import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';

export const container = style({
	position: 'absolute',
	top: '12px',
	width: '90%',
	maxWidth: '400px',
	height: '40px',
	padding: '8px',
	boxSizing: 'border-box',
	borderRadius: '8px',
	boxShadow: '0px 0px 6px 0px #56585933',
	background: vars.colors.grayscale.W,
	zIndex: 700
});

export const link = style({
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	height: '100%'
});

export const title = style({
	height: '100%',
	width: '10%',
	fontFamily: vars.typography.fontFamily[0],
	fontSize: vars.typography.fontSize.r,
	fontWeight: vars.typography.fontWeight.regular,
	lineHeight: vars.typography.lineHeight.r,
	color: vars.colors.grayscale.G500,
	margin: '0 4px',
	alignContent: 'center'
});

export const content = style({
	height: '100%',
	fontSize: vars.typography.fontSize.r,
	fontWeight: vars.typography.fontWeight.bold,
	lineHeight: vars.typography.lineHeight.r,
	color: vars.colors.grayscale.G800,
	margin: '0 8px',
	width: '69%',
	alignContent: 'center'
});

export const announce = style({
	width: '9%'
});

export const forward = style({
	width: '12%'
});

export const button = style({});
