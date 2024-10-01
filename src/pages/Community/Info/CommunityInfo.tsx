import React, { useRef, useState } from 'react';
import { Icon, Input } from '../../../components/common';
import * as styles from './CommunityInfo.css';
import CategoryTag from '../../../components/community/CategoryTag/CategoryTag';
import TextareaAutosize from 'react-textarea-autosize';

const postMockData = {
	postId: 1,
	title: '고덕역에서 택시 함께 타실분?',
	content:
		'퇴근버스는 왜 5시 반에 출발하는건지 궁금합니다.<br/>5시 마을버스 줄이 너무 길어요.퇴근버스는 왜 5시 반에 출발하는건지 궁금합니다.<br/>5시 마을버스 줄이 너무 길어요.<br/>',
	topYn: 'Y',
	commentYn: 'Y',
	secretYn: 'Y',
	categoryId: 1,
	categoryNm: '함께타요',
	readCnt: 120,
	commentCnt: 1,
	writer: {
		name: '민경환',
		email: 'hwan901014@gmail.com',
		userId: 1,
		profileUrl: 'https://lh3.googleusercontent.com/ogw/AF2bZygvz8Bd0JpLDXa2_Zuo-jkneMG7O1Eg5G45IzdhWYv2UOI=s164-c-mo'
	}
};

const CommunityInfo = () => {
	const lineBreak = (lines = '') => {
		return lines.split('<br/>').map((line, i) => <div key={i}>{line}</div>);
	};
	return (
		<div className={styles.InfoContainer}>
			<div className={styles.headerContainer}>
				<CategoryTag categoryNm={postMockData.categoryNm} />
				<div className={styles.headerTitle}>{postMockData.title}</div>
				<div className={styles.writerProfile}>
					<img className={styles.profileImg} src={postMockData.writer.profileUrl} alt={postMockData.writer.name} />
					<div className={styles.profileCenterField}>
						<div className={styles.profileName}>{postMockData.writer.name}</div>
						<div className={styles.profileDate}>2024.08.14 14:20</div>
					</div>
					<div className={styles.profileView}>
						<Icon name={'view_s'} /> {postMockData.readCnt}
					</div>
				</div>
			</div>
			<div className={styles.contentContainer}>{lineBreak(postMockData.content)}</div>
			<div>
				<div className={styles.commentHeader}>
					<div className={styles.commentCnt}>
						<Icon name={'comment_m'} />
						{postMockData.commentCnt}
					</div>
					<div className={styles.commentSort}>
						<div>등록순</div>
						<div>최신순</div>
					</div>
				</div>
				<div className={styles.commentInputDiv}>
					<TextareaAutosize maxRows={5} minRows={1} className={styles.commentInput} placeholder="댓글 작성" />
				</div>
			</div>
		</div>
	);
};

export default CommunityInfo;
