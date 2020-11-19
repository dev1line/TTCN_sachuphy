import React from "react";
import styles from "./styles.module.css";
import { Row, Col } from "antd";

const Promotions = (props) => {
  return (
    <div className={styles.promotions}>
      <div>
        <img
          className={styles.img}
          alt=""
          src="https://cdn.tgdd.vn/Products/Images/42/220522/Feature/samsung-galaxy-note-20-ultra-km-720x333.jpg"
        ></img>
      </div>
      <div>
        <img
          className={styles.img}
          alt=""
          src="https://cdn.tgdd.vn/Products/Images/42/220522/Feature/samsung-galaxy-note-20-ultra-km-720x333.jpg"
        ></img>
      </div>
      <div>
        <img
          className={styles.img}
          alt=""
          src="https://cdn.tgdd.vn/Products/Images/42/220522/Feature/samsung-galaxy-note-20-ultra-km-720x333.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Promotions;
