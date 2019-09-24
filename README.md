# ⚛️ react-pretty-drawer
Simple and pretty React drawer component. View [demo](https://shilza.github.io/react-pretty-drawer/)
## 📦 Install
The easiest way to use react-pretty-drawer is to install it from npm and include it in your React build process

`$ npm install --save react-pretty-drawer`  

`$ yarn add react-pretty-drawer`

## Features
- [x] Open-close animation
- [x] Closable dialog
- [x] Available for customization

## Usage
```javascript
import React, {useState} from 'react';
import * as ReactDOM from "react-dom";
import {Drawer} from 'react-pretty-drawer';

const Example = () => {
    let [visible, setIsVisible] = useState(false);

    const closeDrawer = () => setIsVisible(false);
    const openDrawer = () => setIsVisible(true);

    return (
        <>
            <Drawer
                visible={visible}
                onClose={closeDrawer}
            >
                <div>Drawer body</div>
            </Drawer>
            <button onClick={openDrawer}>Open</button>
        </>
    );
};

ReactDOM.render(<Example />, document.getElementById("root"));
```
## API
| Props  | Description  | Type | Default |
| :------------: |:-----------:| :-----:|:--------:|
| closable     | Whether show or not the close button on top right of the Drawer dialog| boolean | false |
| mask     | Whether to show mask or not        |   boolean | true |
| maskStyle | Style for Drawer`s mask  |  object | rgba(0, 0, 0, 0.3) |
| visible | Whether the Drawer dialog is visible or not |  boolean | false |
| height | Height of the Drawer dialog  |  string  number | 256px 100%|
| width | Width of the Drawer dialog |  string number | 256px 100% |
| placement | The placement of the Drawer  | 'top'  'right'  'bottom'  'left' | 'left' |
| onClose | Specify a callback that will be called when a user clicks mask or close button |  function | - |
| zIndex | The `z-index` of the Drawer.  |  number | 1000 |
| style | The `style` of the body wrapper.  |  object | - |
| className | The `class` of the body wrapper.  |  string | - |
## License
MIT
