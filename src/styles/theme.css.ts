import { createGlobalTheme } from '@vanilla-extract/css';

import { colors } from './themes/colors';
import { typography } from './themes/typography';

export const vars = createGlobalTheme(':root', {
	colors,
	typography
});
