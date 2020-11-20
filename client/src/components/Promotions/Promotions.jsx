import React from 'react';
import styles from './Promotions.module.css'
import { Row, Col } from 'antd'

const Promotions = (props) => {

	const data = [
		{
			img: "https://cdn.tgdd.vn/Products/Images/42/220522/Feature/samsung-galaxy-note-20-ultra-km-720x333.jpg"
		},
		{
			img: "https://cdn.tgdd.vn/Products/Images/42/220522/Feature/samsung-galaxy-note-20-ultra-km-720x333.jpg"
		},
		{
			img: "https://cdn.tgdd.vn/Products/Images/42/220522/Feature/samsung-galaxy-note-20-ultra-km-720x333.jpg"
		},
	]
	return (
		<Row justify="space-between" align="middle">
			{data.map((data, i) => (
				<Col key={i}>
					<img
						className={styles.img}
						alt="img"
						src={data.img}
					></img>
				</Col>
			))}
		</Row>
	)
}

export default Promotions;