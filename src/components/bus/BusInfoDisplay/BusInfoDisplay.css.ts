import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';

export const container = style({
	borderWidth: '1px',
	borderStyle: 'solid',
	borderColor: vars.colors.grayscale.G50,
	borderLeft: 'none',
	borderRight: 'none',
	backgroundColor: vars.colors.grayscale.G25,
	padding: '28px 0 24px',
	boxSizing: 'border-box',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
});

export const busLabel = style({
	fontSize: vars.typography.fontSize.s,
	lineHeight: vars.typography.lineHeight.s,
	fontWeight: vars.typography.fontWeight.regular,
	color: vars.colors.grayscale.G500
});

export const timeLeftContent = style({
	display: 'flex',
	alignItems: 'center',
	gap: '4px'
});

export const timeLeftText = style({
	fontSize: vars.typography.fontSize.xxl,
	lineHeight: vars.typography.lineHeight.xxl,
	fontWeight: vars.typography.fontWeight.bold,
	color: vars.colors.primary.B400
});

export const departureLocationContent = style({
	display: 'flex',
	alignItems: 'center',
	gap: '4px',
	padding: '6px 12px',
	boxSizing: 'border-box',
	borderRadius: '999px',
	borderWidth: '1px',
	borderStyle: 'solid',
	borderColor: vars.colors.grayscale.G75,
	marginTop: '12px'
});

export const departureLocationText = style({
	fontSize: vars.typography.fontSize.s,
	lineHeight: vars.typography.lineHeight.s,
	color: vars.colors.grayscale.G500
});
