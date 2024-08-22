import { useEffect, useState } from 'react';
import Icon from '../../common/Icon';
import * as styles from './NotificationBar.css';

interface IPost {
	id: number;
	type: string;
	title: string;
}

const posts: IPost[] = [
	{
		id: 1,
		type: '공지',
		title: '셔틀 미운행'
	},
	{
		id: 2,
		type: '공지',
		title: '셔틀 시간 변경'
	}
];

export default function NotificationBar() {
	const [showingPost, setShowingPost] = useState<IPost>(posts[0]);

	useEffect(() => {
		const id = setInterval(() => {
			const currentIndex = posts.findIndex(post => post.id === showingPost?.id);
			setShowingPost(posts[currentIndex + 1] || posts[0]);
		}, 6000);
		return () => {
			clearInterval(id);
		};
	}, [showingPost]);

	return (
		<div className={styles.container}>
			<a href="/" className={styles.link}>
				<Icon name="announcement_m" className={styles.announce} />
				<div className={styles.title}>{showingPost?.type}</div>
				<div className={styles.content}>{showingPost?.title}</div>
				<Icon name="arrow_forward_right_l" className={styles.forward} />
			</a>
		</div>
	);
}
