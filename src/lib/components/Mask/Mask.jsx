import React from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import transitions from "./transitions.module.css";
import styles from './mask.module.css';

const Mask = ({isOpen, style, onClose}) => (
    <ReactCSSTransitionGroup
        transitionName={transitions}
        transitionLeaveTimeout={400}
    >
        {
            isOpen && <div id="mask" data-testid="mask" className={styles.mask} style={style} onClick={onClose}/>
        }
    </ReactCSSTransitionGroup>
);

export default React.memo(Mask);
