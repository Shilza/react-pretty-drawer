import React, { useEffect, useState } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from '../Drawer/drawer.module.css';
import leftTransitions from './leftTransitions.module.css';
import rightTransitions from './rightTransitions.module.css';
import topTransitions from './topTransitions.module.css';
import bottomTransitions from './bottomTransitions.module.css';
import CloseButton from '../CloseButton/CloseButton';

const getClassNameByPlacement = (placement: string) => {
    switch (placement) {
        case 'top':
            return styles.topContainer;
        case 'right':
            return styles.rightContainer;
        case 'bottom':
            return styles.bottomContainer;
        case 'left':
            return styles.leftContainer;
        default:
            return styles.leftContainer;
    }
};

const getTransitionByPlacement = (placement: string) => {
    switch (placement) {
        case 'top':
            return topTransitions;
        case 'right':
            return rightTransitions;
        case 'bottom':
            return bottomTransitions;
        case 'left':
            return leftTransitions;
        default:
            return leftTransitions;
    }
};

const getWidthByPlacement = (placement: string) => {
    switch (placement) {
        case 'top':
            return '100%';
        case 'right':
            return '256px';
        case 'bottom':
            return '100%';
        case 'left':
            return '256px';
        default:
            return '256px';
    }
};

const getHeightByPlacement = (placement: string) => {
    switch (placement) {
        case 'top':
            return '256px';
        case 'right':
            return '100%';
        case 'bottom':
            return '256px';
        case 'left':
            return '100%';
        default:
            return '100%';
    }
};

type PropTypes = {
    children: Element,
    isOpen: boolean,
    placement: string,
    width: string | number,
    height: string | number,
    closable: boolean,
    onClose: () => mixed
};

const Transition = ({
    children,
    isOpen,
    placement = 'left',
    width,
    height,
    closable,
    onClose
}: PropTypes) => {
    const [childrenVisible, setChildrenVisible] = useState(false);

    useEffect(() => {
        setChildrenVisible(true);
    }, []);

    const contentWidth = width || getWidthByPlacement(placement);
    const contentHeight = height || getHeightByPlacement(placement);

    return (
        <ReactCSSTransitionGroup
            transitionName={getTransitionByPlacement(placement)}
            transitionAppearTimeout={300}
            transitionLeaveTimeout={400}
            className={styles.transitionContainer}
        >
            {childrenVisible && isOpen && (
                <div
                    className={getClassNameByPlacement(placement)}
                    style={{
                        width: contentWidth,
                        height: contentHeight
                    }}
                >
                    {closable && <CloseButton onClose={onClose}/>}
                    {children}
                </div>
            )}
        </ReactCSSTransitionGroup>
    );
};

export default React.memo(Transition);
