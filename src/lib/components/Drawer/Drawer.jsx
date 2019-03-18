import React, {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import styles from './drawer.module.css';
import Transition from '../Transition/Transition';
import Mask from '../Mask/Mask';
import delay from '../util/delay';
import {withErrorHandler} from '../util/errorHandler';

const Drawer = ({
                    onClose,
                    children,
                    visible = false,
                    placement,
                    width,
                    height,
                    mask = true,
                    maskStyle = {backgroundColor: 'rgba(0, 0, 0, 0.3)'},
                    zIndex = 1000,
                    closable = false
                }) => {
    const [transitionOpen, setTransitionOpen] = useState(true);

    const closeDrawer = () => {
        setTransitionOpen(false);
        delay(400).then(() => {
            onClose && onClose();
        });
    };

    useEffect(() => {
        setTransitionOpen(true);
    }, [visible]);

    const computedMaskStyle = mask
        ? maskStyle
        : {backgroundColor: 'transparent'};

    return createPortal(
        <>
            {visible && (
                <div
                    data-testid="drawer"
                    className={styles.drawerContainer}
                    role="dialog"
                    style={{zIndex}}
                >
                    <Mask style={computedMaskStyle} onClose={closeDrawer}/>
                    <Transition
                        isOpen={transitionOpen}
                        placement={placement}
                        width={width}
                        height={height}
                        closable={closable}
                        onClose={closeDrawer}
                    >
                        {children}
                    </Transition>
                </div>
            )}
        </>,
        document.body
    );
};

export default withErrorHandler(Drawer);
