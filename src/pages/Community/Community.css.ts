import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const headerContainer = style({
	borderBottom: `1px solid ${vars.colors.grayscale.G50}`,
	justifyContent: 'space-between',
	display: 'flex'
});

export const buttonContainer = style({
	display: 'flex',
	alignItems: 'center',
	margin: '16px',
	flexGrow: 1,
	gap: '8px',
	overflow: 'auto'
});

export const button = style({
	padding: '8px 16px',
	borderRadius: '20px',
	border: `1px solid ${vars.colors.grayscale.G100}`,
	backgroundColor: vars.colors.grayscale.W,
	fontSize: vars.typography.fontSize.r,
	cursor: 'pointer',
	whiteSpace: 'nowrap',
	transition: 'background-color 0.3s',
	':hover': {
		backgroundColor: vars.colors.grayscale.G200,
		color: vars.colors.grayscale.W
	}
});

export const selectedButton = style({
	backgroundColor: vars.colors.grayscale.G400,
	color: vars.colors.grayscale.W
});

export const searchIcon = style({
	width: '63px',
	borderLeft: `1px solid ${vars.colors.grayscale.G50}`,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
});

export const noticeContainer = style({
	backgroundColor: vars.colors.grayscale.G50,
	height: '46px',
	display: 'flex',
	alignItems: 'center',
	padding: '12px 20px'
});

export const noticeIcon = style({
	width: '37px',
	height: '22px',
	backgroundColor: vars.colors.feedback.LR200,
	padding: '2px',
	borderRadius: '4px',
	color: vars.colors.grayscale.W,
	fontSize: vars.typography.fontSize.s,
	lineHeight: vars.typography.lineHeight.s,
	textAlign: 'center',
	alignContent: 'center',
	marginRight: '8px'
});

export const noticeContent = style({
	color: vars.colors.grayscale.G700,
	fontSize: vars.typography.fontSize.r,
	lineHeight: vars.typography.lineHeight.r,
	fontWeight: '500',
	flexGrow: '1',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	display: 'inline-block'
});

export const noticeDate = style({
	marginLeft: '20px',
	fontSize: vars.typography.fontSize.s,
	lineHeight: vars.typography.lineHeight.s,
	color: '#878787'
});
