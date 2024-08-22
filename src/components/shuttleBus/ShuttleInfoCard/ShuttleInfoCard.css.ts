import { ComplexStyleRule, style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';

export const container = style({
	position: 'absolute',
	bottom: '30px',
	height: '146px',
	width: '90%',
	maxWidth: '400px',
	boxShadow: '0px 0px 10px 0px #56585940',
	borderRadius: '8px',
	zIndex: 700
});

const boxStyle: ComplexStyleRule = {
	width: '100%',
	margin: 'auto',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'absolute',
	boxSizing: 'border-box'
};

export const boxContent = style({
	...boxStyle,
	flexDirection: 'column',
	top: 0,
	height: '112px',
	borderRadius: '8px 8px 0 0',
	background: vars.colors.grayscale.W
});

export const boxFooter = style({
	...boxStyle,
	margin: 'auto',
	height: '34px',
	background: vars.colors.primary.B200,
	borderRadius: '0 0 8px 8px',
	top: '110px',
	fontFamily: vars.typography.fontFamily[0],
	fontSize: vars.typography.fontSize.s,
	fontWeight: vars.typography.fontWeight.regular,
	lineHeight: vars.typography.lineHeight.s,
	color: vars.colors.grayscale.W
});

export const chip = style({
	display: 'inline-block',
	width: '69px',
	height: '18px',
	color: vars.colors.grayscale.G500,
	fontFamily: vars.typography.fontFamily[0],
	fontSize: vars.typography.fontSize.s,
	fontWeight: vars.typography.fontWeight.regular,
	lineHeight: vars.typography.lineHeight.s,
	border: `1px solid ${vars.colors.grayscale.G75}`,
	borderRadius: '25px',
	top: '16px',
	padding: '2px 12px 2px 12px',
	margin: '16px auto 8px auto'
});

export const title = style({
	// width: '101px',
	height: '32px',
	color: vars.colors.primary.B400,
	fontFamily: vars.typography.fontFamily[0],
	fontSize: vars.typography.fontSize.xxxl,
	fontWeight: vars.typography.fontWeight.bold,
	lineHeight: vars.typography.lineHeight.xxxl
});

export const subTitle = style({
	color: vars.colors.grayscale.G600,
	fontFamily: vars.typography.fontFamily[0],
	fontSize: vars.typography.fontSize.r,
	fontWeight: vars.typography.fontWeight.medium,
	lineHeight: vars.typography.lineHeight.r,
	margin: '1px auto 11px auto'
});

export const icon = style({
	marginRight: '4px',
	verticalAlign: 'top'
});
