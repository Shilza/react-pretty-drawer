import React from "react";
import Drawer from "./Drawer";
import {render, fireEvent, cleanup, wait} from 'react-testing-library'
import 'jest-dom/extend-expect'

afterEach(cleanup);

describe('Drawer component', () => {

    it('drawer is visible', () => {
        const {queryByTestId} = render(<Drawer visible/>);
        expect(queryByTestId('drawer')).not.toBeNull();
    });

    it('drawer render with invisible mask', () => {
        const {queryByTestId} = render(<Drawer visible mask={false}/>);
        expect(queryByTestId('mask')).toHaveStyle('background-color: transparent');
    });

    it('drawer\'s mask has custom style', () => {
        const maskStyle = {
            backgroundColor: 'red',
            opacity: 0.3
        };

        const {queryByTestId} = render(<Drawer visible maskStyle={maskStyle}/>);
        expect(queryByTestId('mask')).toHaveStyle(`
          backgroundColor: 'red';
          opacity: 0.3;
        `);
    });

    it('closing drawer by click on mask', async () => {
        const {getByTestId, queryByTestId} = render(<Drawer visible/>);

        fireEvent.click(getByTestId('mask'));

        await wait(() => expect(queryByTestId('drawerBodyWrapper')).toBeNull());
    });

    it('closing drawer by click on close button', async () => {
        const {getByTestId, queryByTestId} = render(<Drawer visible closable/>);

        fireEvent.click(getByTestId('closeButton'));

        await wait(() => expect(queryByTestId('drawerBodyWrapper')).toBeNull());
    });
});