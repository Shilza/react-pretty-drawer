import React from 'react';
import styles from './radio.module.css';

const Radio = ({labelText, value, id, onChange, checked, children}) => (
    <div className={styles.materialRadio}>
        <input id={id} type="radio" value={value} onChange={onChange} checked={checked}/>
        <label htmlFor={id}>
            <span>{children}</span>
        </label>
    </div>
);

export default Radio;