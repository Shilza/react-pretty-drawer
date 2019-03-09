import React from 'react';
import styles from './mask.module.css';

const Mask = ({ style }) => (
    <div id="mask" className={styles.mask} style={style} />
);

export default React.memo(Mask);
