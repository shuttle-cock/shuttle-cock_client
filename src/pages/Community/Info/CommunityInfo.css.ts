import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const InfoContainer = style({
	display: 'flex',
	flexDirection: 'column',
	height: '100%'
});

export const headerContainer = style({
	borderBottom: `1px solid ${vars.colors.grayscale.G50}`,
	// display: 'flex',
	margin: '12px 20px'
});

export const headerTitle = style({
	fontSize: vars.typography.fontSize.xl,
	lineHeight: vars.typography.lineHeight.xl,
	fontWeight: vars.typography.fontWeight.medium
});

export const writerProfile = style({
	display: 'flex',
	margin: '16px 0',
	alignItems: 'center',
	height: '36px'
});

export const profileImg = style({
	width: '40px',
	height: '40px',
	borderRadius: '50%'
});

export const profileCenterField = style({
	marginLeft: '12px',
	flexGrow: '1'
});

export const profileName = style({
	fontSize: vars.typography.fontSize.s,
	lineHeight: vars.typography.lineHeight.s,
	fontWeight: vars.typography.fontWeight.medium,
	color: vars.colors.grayscale.G700
});

export const profileDate = style({
	fontSize: vars.typography.fontSize.s,
	lineHeight: vars.typography.lineHeight.s,
	fontWeight: vars.typography.fontWeight.regular,
	color: vars.colors.grayscale.G300
});

export const profileView = style({
	fontSize: vars.typography.fontSize.s,
	lineHeight: vars.typography.lineHeight.s,
	fontWeight: vars.typography.fontWeight.regular,
	color: vars.colors.grayscale.G300,
	height: '100%',
	display: 'flex',
	alignItems: 'end'
});

export const contentContainer = style({
	fontSize: vars.typography.fontSize.m,
	lineHeight: vars.typography.lineHeight.m,
	fontWeight: vars.typography.fontWeight.regular,
	color: vars.colors.grayscale.G400,
	margin: '20px',
	flexGrow: 1,
	display: 'flex',
	flexDirection: 'column',
	overflowY: 'auto'
});

export const commentHeader = style({
	backgroundColor: vars.colors.grayscale.G25,
	height: '24px',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '8px 20px'
});

export const commentCnt = style({
	fontSize: vars.typography.fontSize.r,
	lineHeight: vars.typography.lineHeight.r,
	fontWeight: vars.typography.fontWeight.regular,
	color: vars.colors.grayscale.G300,
	display: 'flex',
	alignItems: 'center'
});

export const commentSort = style({
	display: 'flex',
	fontSize: vars.typography.fontSize.s,
	lineHeight: vars.typography.lineHeight.s,
	fontWeight: vars.typography.fontWeight.medium,
	color: vars.colors.grayscale.G300,
	gap: '15px'
});

export const commentInputDiv = style({
	padding: '12px 20px 20px 18px',
	display: 'flex'
});

export const commentInput = style({
	padding: '12px 16px',
	width: '100%',
	fontSize: vars.typography.fontSize.r,
	lineHeight: vars.typography.lineHeight.r,
	fontWeight: vars.typography.fontWeight.regular,
	borderRadius: '8px',
	border: 'none',
	backgroundColor: '#f8f8f8',
	color: '#666',
	resize: 'none',
	outline: 'none',
	overflow: 'hidden',
	'::placeholder': {
		color: '#aaa'
	},
	':focus': {
		borderColor: '#ccc'
	}
});
