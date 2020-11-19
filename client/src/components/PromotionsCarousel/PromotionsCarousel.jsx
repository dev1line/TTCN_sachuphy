import React from 'react';
import styles from './styles.module.css'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const PromotionsCarousel = (props) => {

	const carousel = React.createRef()
	const handlePrev = (e) => {
		carousel.current.prev()
	}
	const handleNext = (e) => {
		carousel.current.next()
	}

	return (
		<div className={styles.container}>
			<LeftOutlined className={styles.left} onClick={handlePrev} />
			<Carousel autoplay ref={carousel} className={styles.carousel} dots={{className: styles['dots']}}>
				<div>
					<img alt="" src="https://cdn.tgdd.vn/2020/11/banner/reno4-800-300-800x300-2.png" className={styles.img} />
				</div>
				<div>
					<img alt="" src="https://cdn.tgdd.vn/2020/11/banner/reno4-800-300-800x300-2.png" className={styles.img} />
				</div>
				<div>
					<img alt="" src="https://cdn.tgdd.vn/2020/11/banner/reno4-800-300-800x300-2.png" className={styles.img} />
				</div>
			</Carousel>
			<RightOutlined className={styles.right} onClick={handleNext} />
		</div>
	)
}

export default PromotionsCarousel;
