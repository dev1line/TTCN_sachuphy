import React from "react";
import styles from "./styles.module.css";
import { Row, Button } from "antd";
import {Link} from 'react-router-dom';

const Shopping = (props) => {
  return (
    <Row className={styles.shopping}>
      <p>
        What are you still waiting for? Choose your own lovely laptop now!
      </p>
      <Link to="/product">
        <Button className={styles.btn}>SHOPPING NOW</Button>
      </Link>
    </Row>
  );
};

export default Shopping;
