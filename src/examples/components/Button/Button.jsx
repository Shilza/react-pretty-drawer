import React from "react";
import styles from './button.module.css';

const Button = ({children, onClick}) => (
    <button onClick={onClick} className={styles.materialButton}>{children}</button>
);

export default Button;