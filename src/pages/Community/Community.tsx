import { useState } from 'react';
import * as styles from './Community.css';
import Icon from '../../components/common/Icon';
import PostCard from '../../components/community/PostCard/PostCard';
import { vars } from '../../styles/theme.css';
import FloatingButton from '../../components/community/FloatingButton/FloatingButton';
import { useNavigate } from 'react-router-dom';

const postMockData = [
	{
		postId: 1,
		title: '고덕역에서 택시 함께 타실분?',
		content: 'cotent1',
		topYn: 'Y',
		commentYn: 'Y',
		secretYn: 'Y',
		categoryId: 1,
		categoryNm: '함께타요',
		readCnt: 120
	},
	{
		postId: 2,
		title: '퇴근버스는 왜 5시 반에 출발하나요?',
		content: 'cotent2',
		topYn: 'Y',
		commentYn: 'Y',
		secretYn: 'Y',
		categoryId: 2,
		categoryNm: '불편신고',
		readCnt: 20
	}
];

export default function Community() {
	const [selected, setSelected] = useState('all');
	const navigate = useNavigate();

	const onClick = (id: number) => {
		navigate(`/community/info/${id}`);
	};

	return (
		<div>
			<div className={styles.headerContainer}>
				<div className={styles.buttonContainer}>
					{['전체', '공지', '함께타요', '불편신고'].map(label => (
						<button
							key={label}
							className={`${styles.button} ${selected === label ? styles.selectedButton : ''}`}
							onClick={() => setSelected(label)}
						>
							{label}
						</button>
					))}
				</div>
				<div className={styles.searchIcon}>
					<Icon name="search_l" />
				</div>
			</div>
			<div className={styles.noticeContainer}>
				<div className={styles.noticeIcon}>공지</div>
				<div className={styles.noticeContent}>8월 16일 셔틀버스 미운영 안내</div>
				<div className={styles.noticeDate}>24.08.10</div>
			</div>
			<div>
				{postMockData.map(data => {
					return <PostCard {...data} onClick={() => onClick(data.postId)} />;
				})}
			</div>
			<FloatingButton
				onClick={() => console.log('click')}
				icon={<Icon name="writing_m" />}
				backgroundColor={vars.colors.primary.B400}
				position={{ bottom: '160px' }}
			/>
			<FloatingButton
				onClick={() => console.log('click')}
				icon={<Icon name="arrow_up_m" />}
				backgroundColor={vars.colors.grayscale.G300}
				position={{ bottom: '96px' }}
			/>
		</div>
	);
}
