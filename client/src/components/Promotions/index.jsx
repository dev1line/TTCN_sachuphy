import React from 'react';
import { Row, Col } from 'antd'

const Promotions = (props) => {
	return (
		<Row
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				flexWrap: "nowrap",
			}}
		>
			<Col>
				<img
					className="imgBanner"
					alt="img"
					src="https://cdn.tgdd.vn/Products/Images/42/220522/Feature/samsung-galaxy-note-20-ultra-km-720x333.jpg"
				></img>
			</Col>
			<Col>
				<img
					className="imgBanner"
					alt="img"
					src="https://cdn.tgdd.vn/Products/Images/42/220522/Feature/samsung-galaxy-note-20-ultra-km-720x333.jpg"
				></img>
			</Col>
			<Col>
				<img
					className="imgBanner"
					alt="img"
					src="https://cdn.tgdd.vn/Products/Images/42/220522/Feature/samsung-galaxy-note-20-ultra-km-720x333.jpg"
				></img>
			</Col>
		</Row>
	)
}

export default Promotions;