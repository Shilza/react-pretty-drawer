import React from 'react';
import styles from './closeButton.module.css';

const CloseButton = ({ onClose }) => (
    <div role="button" className={styles.closeIcon} onClick={onClose} />
);

export default React.memo(CloseButton);
