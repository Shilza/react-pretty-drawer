import React from 'react';
import styles from './mask.module.css';

const Mask = ({ style, onClose }) => (
    <div id="mask" data-testid="mask" className={styles.mask} style={style} onClick={onClose} />
);

export default React.memo(Mask);
