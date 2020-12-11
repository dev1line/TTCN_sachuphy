import React from 'react'
import { Card, Avatar } from 'antd';

export default function Cards(props) {
	const { Meta } = Card;
	return (
		<div>
			<Card style={{ width: 300, marginTop: 16 }} >
				<Meta
					avatar={
						<Avatar src={props.img} />
					}
					title={props.name}
					description={props.des}
				/>
			</Card>
		</div>
	)
}