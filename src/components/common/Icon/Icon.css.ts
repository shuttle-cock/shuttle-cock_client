import { globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../../styles/theme.css';

Object.entries(vars.colors.primary).forEach(([key, value]) => {
	globalStyle(`.icon-primary-${key} path`, { fill: value });
	globalStyle(`.icon-primary-${key} circle`, { stroke: value });
});

Object.entries(vars.colors.secondary).forEach(([key, value]) => {
	globalStyle(`.icon-secondary-${key} path`, { fill: value });
	globalStyle(`.icon-secondary-${key} circle`, { stroke: value });
});

Object.entries(vars.colors.feedback).forEach(([key, value]) => {
	globalStyle(`.icon-feedback-${key} path`, { fill: value });
	globalStyle(`.icon-feedback-${key} circle`, { stroke: value });
});

Object.entries(vars.colors.grayscale).forEach(([key, value]) => {
	globalStyle(`.icon-grayscale-${key} path`, { fill: value });
	globalStyle(`.icon-grayscale-${key} circle`, { stroke: value });
});

// Recipe로 variant 스타일 정의
export const iconVariants = recipe({
	variants: {
		color: {
			'primary.B25': 'icon-primary-B25',
			'primary.B50': 'icon-primary-B50',
			'primary.B75': 'icon-primary-B75',
			'primary.B100': 'icon-primary-B100',
			'primary.B200': 'icon-primary-B200',
			'primary.B300': 'icon-primary-B300',
			'primary.B400': 'icon-primary-B400',
			'primary.B500': 'icon-primary-B500',
			'primary.B600': 'icon-primary-B600',
			'primary.B700': 'icon-primary-B700',
			'primary.B800': 'icon-primary-B800',
			'primary.B900': 'icon-primary-B900',
			'secondary.GB25': 'icon-secondary-GB25',
			'secondary.GB50': 'icon-secondary-GB50',
			'secondary.GB75': 'icon-secondary-GB75',
			'secondary.GB100': 'icon-secondary-GB100',
			'secondary.GB200': 'icon-secondary-GB200',
			'secondary.GB300': 'icon-secondary-GB300',
			'secondary.GB400': 'icon-secondary-GB400',
			'secondary.GB500': 'icon-secondary-GB500',
			'secondary.GB600': 'icon-secondary-GB600',
			'secondary.GB700': 'icon-secondary-GB700',
			'secondary.GB800': 'icon-secondary-GB800',
			'secondary.GB900': 'icon-secondary-GB900',
			'feedback.LR25': 'icon-feedback-LR25',
			'feedback.LR50': 'icon-feedback-LR50',
			'feedback.LR75': 'icon-feedback-LR75',
			'feedback.LR100': 'icon-feedback-LR100',
			'feedback.LR200': 'icon-feedback-LR200',
			'feedback.LR300': 'icon-feedback-LR300',
			'feedback.LR400': 'icon-feedback-LR400',
			'feedback.LR500': 'icon-feedback-LR500',
			'feedback.LR600': 'icon-feedback-LR600',
			'feedback.LR700': 'icon-feedback-LR700',
			'feedback.LR800': 'icon-feedback-LR800',
			'feedback.LR900': 'icon-feedback-LR900',
			'feedback.LY25': 'icon-feedback-LY25',
			'feedback.LY50': 'icon-feedback-LY50',
			'feedback.LY75': 'icon-feedback-LY75',
			'feedback.LY100': 'icon-feedback-LY100',
			'feedback.LY200': 'icon-feedback-LY200',
			'feedback.LY300': 'icon-feedback-LY300',
			'feedback.LY400': 'icon-feedback-LY400',
			'feedback.LY500': 'icon-feedback-LY500',
			'feedback.LY600': 'icon-feedback-LY600',
			'feedback.LY700': 'icon-feedback-LY700',
			'feedback.LY800': 'icon-feedback-LY800',
			'feedback.LY900': 'icon-feedback-LY900',
			'feedback.LG25': 'icon-feedback-LG25',
			'feedback.LG50': 'icon-feedback-LG50',
			'feedback.LG75': 'icon-feedback-LG75',
			'feedback.LG100': 'icon-feedback-LG100',
			'feedback.LG200': 'icon-feedback-LG200',
			'feedback.LG300': 'icon-feedback-LG300',
			'feedback.LG400': 'icon-feedback-LG400',
			'feedback.LG500': 'icon-feedback-LG500',
			'feedback.LG600': 'icon-feedback-LG600',
			'feedback.LG700': 'icon-feedback-LG700',
			'feedback.LG800': 'icon-feedback-LG800',
			'feedback.LG900': 'icon-feedback-LG900',
			'grayscale.G25': 'icon-grayscale-G25',
			'grayscale.G50': 'icon-grayscale-G50',
			'grayscale.G75': 'icon-grayscale-G75',
			'grayscale.G100': 'icon-grayscale-G100',
			'grayscale.G200': 'icon-grayscale-G200',
			'grayscale.G300': 'icon-grayscale-G300',
			'grayscale.G400': 'icon-grayscale-G400',
			'grayscale.G500': 'icon-grayscale-G500',
			'grayscale.G600': 'icon-grayscale-G600',
			'grayscale.G700': 'icon-grayscale-G700',
			'grayscale.G800': 'icon-grayscale-G800',
			'grayscale.G900': 'icon-grayscale-G900',
			'grayscale.W': 'icon-grayscale-W',
			'grayscale.B': 'icon-grayscale-B'
		}
	}
});
