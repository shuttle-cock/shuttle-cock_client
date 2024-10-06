import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const cardContainer = style({
	height: '92px',
	padding: '12px 20px',
	borderBottom: `1px solid ${vars.colors.grayscale.G50}`,
	cursor: 'pointer',
	':hover': {
		backgroundColor: vars.colors.primary.B25
	}
});

export const cardTitle = style({
	fontSize: vars.typography.fontSize.r,
	lineHeight: vars.typography.lineHeight.r,
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	// display: 'inline-block',
	maxWidth: '100%',
	display: 'flex',
	alignItems: 'center'
});

export const cardFooter = style({
	display: 'flex',
	marginTop: '12px',
	justifyContent: 'space-between',
	fontSize: vars.typography.fontSize.s,
	lineHeight: vars.typography.lineHeight.s,
	color: vars.colors.grayscale.G300
});

export const cardFooterRightSection = style({
	display: 'flex',
	alignContent: 'center'
});
