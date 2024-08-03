import { globalFontFace } from '@vanilla-extract/css';

import PretendardExtraLightTTF from '../assets/fonts/Pretendard-ExtraLight.ttf';
import PretendardExtraLightWOFF from '../assets/fonts/Pretendard-ExtraLight.woff';
import PretendardExtraLightWOFF2 from '../assets/fonts/Pretendard-ExtraLight.woff2';
import PretendardLightTTF from '../assets/fonts/Pretendard-Light.ttf';
import PretendardLightWOFF from '../assets/fonts/Pretendard-Light.woff';
import PretendardLightWOFF2 from '../assets/fonts/Pretendard-Light.woff2';
import PretendardRegularTTF from '../assets/fonts/Pretendard-Regular.ttf';
import PretendardRegularWOFF from '../assets/fonts/Pretendard-Regular.woff';
import PretendardRegularWOFF2 from '../assets/fonts/Pretendard-Regular.woff2';
import { fontFamilyList } from './themes/typography';

type Font = {
	name: string;
	ttf: string;
	woff: string;
	woff2: string;
	weight: number;
};

const [pretendard] = fontFamilyList;

const fontFaces: Font[] = [
	{
		name: 'Pretendard Variable ExtraLight',
		ttf: PretendardExtraLightTTF,
		woff: PretendardExtraLightWOFF,
		woff2: PretendardExtraLightWOFF2,
		weight: 300
	},
	{
		name: 'Pretendard Variable Light',
		ttf: PretendardLightTTF,
		woff: PretendardLightWOFF,
		woff2: PretendardLightWOFF2,
		weight: 400
	},
	{
		name: 'Pretendard Variable Regular',
		ttf: PretendardRegularTTF,
		woff: PretendardRegularWOFF,
		woff2: PretendardRegularWOFF2,
		weight: 700
	}
];

globalFontFace(
	pretendard,
	fontFaces.map(({ name, ttf, weight, woff, woff2 }) => ({
		src: `
      local("${name}"),
      url(${woff2}) format('woff2'),
      url(${woff}) format('woff'),
      url(${ttf}) format('truetype')
    `,
		fontDisplay: 'optional',
		fontWeight: weight,
		fontStyle: 'normal'
	}))
);
