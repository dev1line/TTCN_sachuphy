import React from "react";
import styles from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={styles.gooey}>
      <span className={styles.dot}></span>
      <div className={styles.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
