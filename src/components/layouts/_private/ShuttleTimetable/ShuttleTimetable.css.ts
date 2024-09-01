import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../../../styles/theme.css';

export const container = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '11px'
});

export const routesContainer = style({
	width: '100%',
	display: 'flex'
});

export const routeContent = style({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	border: `1px solid ${vars.colors.grayscale.G75}`,
	borderRight: 'none',
	overflow: 'hidden',

	':first-of-type': {
		borderTopLeftRadius: '4px'
	},

	':last-of-type': {
		borderTopRightRadius: '4px',
		borderRight: `1px solid ${vars.colors.grayscale.G75}`
	}
});

export const routeHeader = style({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '0.5px',
	padding: '5px 0 5.5px',
	boxSizing: 'border-box',
	backgroundColor: vars.colors.grayscale.G25
});

export const directionText = style({
	borderTop: `1px solid ${vars.colors.grayscale.G75}`,
	paddingTop: '3.5px'
});

export const timeItem = style({
	borderTop: `1px solid ${vars.colors.grayscale.G75}`,
	display: 'flex',
	gap: '4px',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '7.5px 0',
	boxSizing: 'border-box'
});

export const timeText = style({
	width: '70px',
	textAlign: 'end',
	display: 'inline-block',
	whiteSpace: 'pre-wrap',
	position: 'relative'
});

export const badgeBase = style({
	padding: '2px 4px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '999px',
	fontSize: vars.typography.fontSize.xs,
	lineHeight: vars.typography.lineHeight.xs,
	color: vars.colors.grayscale.W,
	position: 'absolute',
	top: '3px',
	left: '-30px'
});

export const timeBadge = recipe({
	base: badgeBase,
	variants: {
		color: {
			primary: {
				backgroundColor: vars.colors.primary.B300
			},
			gray: {
				backgroundColor: vars.colors.grayscale.G500
			}
		}
	}
});
