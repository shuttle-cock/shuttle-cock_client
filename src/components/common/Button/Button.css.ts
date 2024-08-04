import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../../styles/theme.css';

export const buttonBase = style({
	border: 'none',
	borderRadius: '4px',
	cursor: 'pointer',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontFamily: vars.typography.fontFamily,
	fontWeight: vars.typography.fontWeight.regular,
	transition: '150ms',
	':disabled': {
		cursor: 'not-allowed'
	}
});

export const buttonVariants = recipe({
	base: buttonBase,
	variants: {
		color: {
			primary: {
				backgroundColor: vars.colors.primary.B400,
				color: vars.colors.grayscale.W,
				':hover': { backgroundColor: vars.colors.primary.B600 },
				':disabled': { backgroundColor: vars.colors.primary.B75 }
			},
			gray: {
				backgroundColor: vars.colors.grayscale.G75,
				color: vars.colors.grayscale.G700,
				':hover': { backgroundColor: vars.colors.grayscale.G100 },
				':disabled': { backgroundColor: vars.colors.grayscale.G75, color: vars.colors.grayscale.G300 }
			}
		},
		variant: {
			filled: {},
			outline: {
				backgroundColor: 'transparent',
				border: '1px solid',
				':hover': { backgroundColor: 'transparent' },
				':disabled': { backgroundColor: 'transparent' }
			},
			text: {
				backgroundColor: 'transparent',
				border: 'none',
				':hover': { backgroundColor: 'transparent' },
				':disabled': { backgroundColor: 'transparent' }
			}
		},
		size: {
			L: { height: '52px', padding: '14px 24px', fontSize: '16px', lineHeight: '24px' },
			M: { height: '40px', padding: '8px 16px', fontSize: '16px', lineHeight: '24px' },
			S: { height: '32px', padding: '8px 8px', fontSize: '14px', lineHeight: '16px' }
		}
	},
	compoundVariants: [
		{
			variants: { color: 'primary', variant: 'outline' },
			style: {
				borderColor: vars.colors.primary.B400,
				color: vars.colors.primary.B400,
				':hover': {
					borderColor: vars.colors.primary.B600,
					color: vars.colors.primary.B600
				},
				':disabled': {
					borderColor: vars.colors.primary.B75,
					color: vars.colors.primary.B75
				}
			}
		},
		{
			variants: { color: 'gray', variant: 'outline' },
			style: {
				borderColor: vars.colors.grayscale.G200,
				color: vars.colors.grayscale.G700,
				':hover': {
					borderColor: vars.colors.grayscale.G400,
					color: vars.colors.grayscale.G700
				},
				':disabled': {
					borderColor: vars.colors.grayscale.G100,
					color: vars.colors.grayscale.G200
				}
			}
		},
		{
			variants: { color: 'primary', variant: 'text' },
			style: {
				color: vars.colors.primary.B400,
				':hover': { color: vars.colors.primary.B600, textDecoration: 'underline' },
				':disabled': { color: vars.colors.primary.B75 }
			}
		},
		{
			variants: { color: 'gray', variant: 'text' },
			style: {
				color: vars.colors.grayscale.G400,
				':hover': { color: vars.colors.grayscale.G600, textDecoration: 'underline' },
				':disabled': { color: vars.colors.grayscale.G200 }
			}
		}
	],
	defaultVariants: {
		color: 'primary',
		variant: 'filled',
		size: 'M'
	}
});
