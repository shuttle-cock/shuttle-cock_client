import Icon from '../../common/Icon';
import * as styles from './ShuttleInfoCard.css';

type ShuttleInfoCardProps = {};

export default function ShuttleInfoCard({}: ShuttleInfoCardProps) {
	return (
		<div className={styles.container}>
			<div className={styles.boxContent}>
				<span className={styles.chip}>다음 셔틀 안내</span>
				<p className={styles.title}>
					<Icon name="shuttle_bus_m" color="primary.B300" />
					3분 전
				</p>
				<p className={styles.subTitle}>오전 8시 20분 출발 예정</p>
			</div>
			<div className={styles.boxFooter}>
				<Icon name="location_s" className={styles.icon} />
				고덕역 → 지식산업센터
			</div>
		</div>
	);
}
