import React, {useState} from 'react';
import {createPortal} from 'react-dom';
import styles from './drawer.module.css';
import Transition from '../Transition/Transition';
import Mask from '../Mask/Mask';
import delay from "../util/delay";

const Drawer = ({
                    onClose = () => {},
                    children,
                    visible,
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
            onClose();
            setTransitionOpen(true);
        });
    };

    const closeByCoverClick = (event) => {
        const {id} = event.target;
        if (id === 'mask')
            closeDrawer();
    };

    const computedMaskStyle = mask
        ? maskStyle
        : {backgroundColor: 'transparent'};

    return createPortal(
        <>
            {visible && (
                <div
                    className={styles.drawerContainer}
                    role="dialog"
                    onClick={closeByCoverClick}
                    style={{zIndex}}
                >
                    <Mask style={computedMaskStyle}/>
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

export default Drawer;
