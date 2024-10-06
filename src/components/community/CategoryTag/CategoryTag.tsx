import { vars } from '@styles/theme.css';
import * as styles from './CategoryTag.css';

const categoryTextStyle = [
	{ categoryNm: '함께타요', color: vars.colors.primary.B400, backgroundColor: vars.colors.primary.B50 },
	{ categoryNm: '공지', color: vars.colors.feedback.LR200, backgroundColor: vars.colors.grayscale.W },
	{ categoryNm: '불편신고', color: vars.colors.feedback.LR400, backgroundColor: vars.colors.feedback.LR25 },
	{ categoryNm: '기타', color: vars.colors.grayscale.G75, backgroundColor: vars.colors.grayscale.G500 }
];

const CategoryTag = ({ categoryNm }: { categoryNm: string }) => {
	const getCategoryColor = (categoryNm: string) => {
		const { color, backgroundColor } =
			categoryTextStyle.find(item => item.categoryNm === categoryNm) || categoryTextStyle[0];
		return { color, backgroundColor };
	};
	return (
		<div className={styles.cardCategory} style={getCategoryColor(categoryNm)}>
			{categoryNm}
		</div>
	);
};

export default CategoryTag;
