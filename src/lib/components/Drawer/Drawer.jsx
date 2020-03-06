import React, {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import Transition from '../Transition/Transition';
import Mask from '../Mask/Mask';
import delay from '../util/delay';
import {withErrorHandler} from '../util/errorHandler';
import styles from './drawer.module.css';

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
                    style,
                    className,
                    closable = false
                }) => {

    const computedMaskStyle = mask
        ? maskStyle
        : {backgroundColor: 'transparent'};

    const [transitionOpen, setTransitionOpen] = useState(true);

    useEffect(() => {
        setTransitionOpen(true);
    }, [visible]);

    useEffect(() => {
        if (visible)
            document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "visible";
        };
    }, [visible]);

    const closeDrawer = () => {
        setTransitionOpen(false);
        delay(400).then(() => {
            onClose && onClose();
        });
    };

    return createPortal(
        <>
            {visible && (
                <div
                    data-testid="drawer"
                    className={styles.drawerContainer}
                    role="dialog"
                    style={{zIndex}}
                >
                    <Mask isOpen={transitionOpen} style={computedMaskStyle} onClose={closeDrawer}/>
                    <Transition
                        isOpen={transitionOpen}
                        placement={placement}
                        width={width}
                        height={height}
                        closable={closable}
                        style={style}
                        className={className}
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
