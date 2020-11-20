import React from 'react';
import styles from './Shopping.module.css'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'

const Shopping = (props) => {
	return (
		<div>
			<Row justify="space-around" align="middle" className={styles.shopping}>
				<Col offset={1}></Col>
				<p className={styles.content}>
					What are you still waiting for? Choose your own lovely laptop now!
      	</p>
				<Link to="/product">
					<Button className={styles.btn}>SHOPPING NOW</Button>
				</Link>
				<Col offset={1}></Col>
			</Row>
		</div>
	)
}

export default Shopping;