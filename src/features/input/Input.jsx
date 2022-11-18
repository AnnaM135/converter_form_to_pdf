import React from "react";
import styles from "./Input.module.css";

export function Input({ labelName, value, handleChange, name, type = "text", bgColor }) {
  return (
    <label className={styles.label_text}>
      {labelName}
      <input
        className={styles.inp}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        style={{backgroundColor: bgColor}}
      />
    </label>
  );
}
