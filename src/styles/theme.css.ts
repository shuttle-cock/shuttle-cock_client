import { createGlobalTheme } from '@vanilla-extract/css';
import { colors, typography } from './themes';

export const vars = createGlobalTheme(':root', {
	colors,
	typography
});
