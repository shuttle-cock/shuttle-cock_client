import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../../styles/theme.css';

export const textBase = style({
	fontFamily: vars.typography.fontFamily
});

export const textVariants = recipe({
	base: textBase,
	variants: {
		color: {
			'primary.B25': { color: vars.colors.primary.B25 },
			'primary.B50': { color: vars.colors.primary.B50 },
			'primary.B75': { color: vars.colors.primary.B75 },
			'primary.B100': { color: vars.colors.primary.B100 },
			'primary.B200': { color: vars.colors.primary.B200 },
			'primary.B300': { color: vars.colors.primary.B300 },
			'primary.B400': { color: vars.colors.primary.B400 },
			'primary.B500': { color: vars.colors.primary.B500 },
			'primary.B600': { color: vars.colors.primary.B600 },
			'primary.B700': { color: vars.colors.primary.B700 },
			'primary.B800': { color: vars.colors.primary.B800 },
			'primary.B900': { color: vars.colors.primary.B900 },
			'secondary.GB25': { color: vars.colors.secondary.GB25 },
			'secondary.GB50': { color: vars.colors.secondary.GB50 },
			'secondary.GB75': { color: vars.colors.secondary.GB75 },
			'secondary.GB100': { color: vars.colors.secondary.GB100 },
			'secondary.GB200': { color: vars.colors.secondary.GB200 },
			'secondary.GB300': { color: vars.colors.secondary.GB300 },
			'secondary.GB400': { color: vars.colors.secondary.GB400 },
			'secondary.GB500': { color: vars.colors.secondary.GB500 },
			'secondary.GB600': { color: vars.colors.secondary.GB600 },
			'secondary.GB700': { color: vars.colors.secondary.GB700 },
			'secondary.GB800': { color: vars.colors.secondary.GB800 },
			'secondary.GB900': { color: vars.colors.secondary.GB900 },
			'feedback.LR25': { color: vars.colors.feedback.LR25 },
			'feedback.LR50': { color: vars.colors.feedback.LR50 },
			'feedback.LR75': { color: vars.colors.feedback.LR75 },
			'feedback.LR100': { color: vars.colors.feedback.LR100 },
			'feedback.LR200': { color: vars.colors.feedback.LR200 },
			'feedback.LR300': { color: vars.colors.feedback.LR300 },
			'feedback.LR400': { color: vars.colors.feedback.LR400 },
			'feedback.LR500': { color: vars.colors.feedback.LR500 },
			'feedback.LR600': { color: vars.colors.feedback.LR600 },
			'feedback.LR700': { color: vars.colors.feedback.LR700 },
			'feedback.LR800': { color: vars.colors.feedback.LR800 },
			'feedback.LR900': { color: vars.colors.feedback.LR900 },
			'feedback.LY25': { color: vars.colors.feedback.LY25 },
			'feedback.LY50': { color: vars.colors.feedback.LY50 },
			'feedback.LY75': { color: vars.colors.feedback.LY75 },
			'feedback.LY100': { color: vars.colors.feedback.LY100 },
			'feedback.LY200': { color: vars.colors.feedback.LY200 },
			'feedback.LY300': { color: vars.colors.feedback.LY300 },
			'feedback.LY400': { color: vars.colors.feedback.LY400 },
			'feedback.LY500': { color: vars.colors.feedback.LY500 },
			'feedback.LY600': { color: vars.colors.feedback.LY600 },
			'feedback.LY700': { color: vars.colors.feedback.LY700 },
			'feedback.LY800': { color: vars.colors.feedback.LY800 },
			'feedback.LY900': { color: vars.colors.feedback.LY900 },
			'feedback.LG25': { color: vars.colors.feedback.LG25 },
			'feedback.LG50': { color: vars.colors.feedback.LG50 },
			'feedback.LG75': { color: vars.colors.feedback.LG75 },
			'feedback.LG100': { color: vars.colors.feedback.LG100 },
			'feedback.LG200': { color: vars.colors.feedback.LG200 },
			'feedback.LG300': { color: vars.colors.feedback.LG300 },
			'feedback.LG400': { color: vars.colors.feedback.LG400 },
			'feedback.LG500': { color: vars.colors.feedback.LG500 },
			'feedback.LG600': { color: vars.colors.feedback.LG600 },
			'feedback.LG700': { color: vars.colors.feedback.LG700 },
			'feedback.LG800': { color: vars.colors.feedback.LG800 },
			'feedback.LG900': { color: vars.colors.feedback.LG900 },
			'grayscale.G25': { color: vars.colors.grayscale.G25 },
			'grayscale.G50': { color: vars.colors.grayscale.G50 },
			'grayscale.G75': { color: vars.colors.grayscale.G75 },
			'grayscale.G100': { color: vars.colors.grayscale.G100 },
			'grayscale.G200': { color: vars.colors.grayscale.G200 },
			'grayscale.G300': { color: vars.colors.grayscale.G300 },
			'grayscale.G400': { color: vars.colors.grayscale.G400 },
			'grayscale.G500': { color: vars.colors.grayscale.G500 },
			'grayscale.G600': { color: vars.colors.grayscale.G600 },
			'grayscale.G700': { color: vars.colors.grayscale.G700 },
			'grayscale.G800': { color: vars.colors.grayscale.G800 },
			'grayscale.G900': { color: vars.colors.grayscale.G900 },
			'grayscale.W': { color: vars.colors.grayscale.W },
			'grayscale.B': { color: vars.colors.grayscale.B }
		},
		noWrap: {
			true: {
				whiteSpace: 'nowrap',
				overflow: 'hidden',
				textOverflow: 'ellipsis'
			}
		},
		size: {
			xxxl: {
				fontSize: vars.typography.fontSize.xxxl,
				lineHeight: vars.typography.lineHeight.xxxl
			},
			xxl: {
				fontSize: vars.typography.fontSize.xxl,
				lineHeight: vars.typography.lineHeight.xxl
			},
			xl: {
				fontSize: vars.typography.fontSize.xl,
				lineHeight: vars.typography.lineHeight.xl
			},
			l: {
				fontSize: vars.typography.fontSize.l,
				lineHeight: vars.typography.lineHeight.l
			},
			m: {
				fontSize: vars.typography.fontSize.m,
				lineHeight: vars.typography.lineHeight.m
			},
			r: {
				fontSize: vars.typography.fontSize.r,
				lineHeight: vars.typography.lineHeight.r
			},
			s: {
				fontSize: vars.typography.fontSize.s,
				lineHeight: vars.typography.lineHeight.s
			},
			xs: {
				fontSize: vars.typography.fontSize.xs,
				lineHeight: vars.typography.lineHeight.xs
			}
		},
		weight: {
			bold: {
				fontWeight: vars.typography.fontWeight.bold
			},
			medium: {
				fontWeight: vars.typography.fontWeight.medium
			},
			regular: {
				fontWeight: vars.typography.fontWeight.regular
			}
		}
	},
	defaultVariants: {
		color: 'grayscale.G900',
		size: 'r',
		weight: 'regular'
	}
});
