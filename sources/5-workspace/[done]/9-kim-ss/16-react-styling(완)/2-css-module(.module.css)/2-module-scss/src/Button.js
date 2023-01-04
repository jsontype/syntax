import React from "react";
import styles from "./Button.module.scss";

export default function Button() {
  return (
    <div>
      <button className={styles.primary}>확인</button>
      <button className={styles.secondary}>확인</button>
    </div>
  );
}
