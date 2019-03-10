import React from 'react';
import styles from './checkbox.module.css';

const Checkbox = ({onChange, id, checked, children}) => (
    <div className={styles.materialCheckbox}>
        <input id={id} type="checkbox" onChange={onChange} checked={checked}/>
            <label htmlFor={id}>
                <span>{children}</span>
            </label>
    </div>
);

export default Checkbox;