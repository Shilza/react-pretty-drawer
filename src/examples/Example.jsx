import React, {useState} from 'react';
import styles from './example.module.css';
import Drawer from '../lib/components/Drawer/Drawer';
import Button from './components/Button/Button';
import Radio from './components/Radio/Radio';
import Checkbox from './components/Checkbox/Checkbox';

const Example = () => {

    let [visible, setIsVisible] = useState(false);
    let [placement, setPlacement] = useState(false);
    let [closable, setClosable] = useState(false);
    let [mask, setIsMask] = useState(true);

    const closeDrawer = () => setIsVisible(false);
    const openDrawer = () => setIsVisible(true);
    const onChange = event => setPlacement(event.target.value);

    return (
        <div className={styles.mainContainer}>
            <Drawer
                visible={visible}
                onClose={closeDrawer}
                placement={placement}
                closable={closable}
                mask={mask}
            >
                <div>Drawer body</div>
            </Drawer>
            <h2>
                react-pretty-drawer
            </h2>
            <div className={styles.content}>
                <div className={styles.inlineContainer}>
                    <Radio id="radio-top" value="top" onChange={onChange} checked={placement === 'top'}>
                        top
                    </Radio>
                    <Radio id="radio-right" value="right" onChange={onChange} checked={placement === 'right'}>
                        right
                    </Radio>
                    <Radio id="radio-bottom" value="bottom" onChange={onChange} checked={placement === 'bottom'}>
                        bottom
                    </Radio>
                    <Radio id="radio-left" value="left" onChange={onChange} checked={placement === 'left'}>
                        left
                    </Radio>

                    <Button onClick={openDrawer}>{visible ? "Close" : "Open"}</Button>
                </div>
                <div className={styles.inlineContainer}>
                    <Checkbox id="closable" onChange={() => setClosable(!closable)} checked={closable}>
                        Closable
                    </Checkbox>
                    <Checkbox id="mask" onChange={() => setIsMask(!mask)} checked={mask}>
                        Mask
                    </Checkbox>
                </div>
                <a
                    href="https://github.com/Shilza/react-pretty-drawer/blob/master/src/examples/Example.jsx"
                    target="_blank"
                    rel="noopener noreferrer"
                >Code</a>
            </div>
        </div>
    );
};

export default Example;
