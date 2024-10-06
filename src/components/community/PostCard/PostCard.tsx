import { Icon } from '@components/common';
import { vars } from '@styles/theme.css';
import CategoryTag from '../CategoryTag';
import * as styles from './PostCard.css';

interface IProps {
	title: string;
	secretYn: string;
	categoryNm: string;
	readCnt: number;
	onClick?: () => void;
}

const categoryTextStyle = [
	{ categoryNm: '함께타요', color: vars.colors.primary.B400, backgroundColor: vars.colors.primary.B50 },
	{ categoryNm: '공지', color: vars.colors.feedback.LR200, backgroundColor: vars.colors.grayscale.W },
	{ categoryNm: '불편신고', color: vars.colors.feedback.LR400, backgroundColor: vars.colors.feedback.LR25 },
	{ categoryNm: '기타', color: vars.colors.grayscale.G75, backgroundColor: vars.colors.grayscale.G500 }
];

const PostCard = ({ title, secretYn, categoryNm, readCnt, onClick }: IProps) => {
	const getCategoryColor = (categoryNm: string) => {
		const { color, backgroundColor } =
			categoryTextStyle.find(item => item.categoryNm === categoryNm) || categoryTextStyle[0];
		return { color, backgroundColor };
	};
	return (
		<div className={styles.cardContainer} onClick={onClick}>
			<CategoryTag categoryNm={categoryNm} />
			{secretYn === 'Y' ? (
				<div className={styles.cardTitle}>
					<Icon name="lock_s" />
					{title}
				</div>
			) : (
				<div className={styles.cardTitle}>{title}</div>
			)}
			<div className={styles.cardFooter}>
				<div>24분전</div>
				<div className={styles.cardFooterRightSection}>
					<Icon name="view_s" />
					{readCnt}
				</div>
			</div>
		</div>
	);
};

export default PostCard;
