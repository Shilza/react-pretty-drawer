import React from "react";
import Transition from "./Transition";
import {render, cleanup} from 'react-testing-library'
import 'jest-dom/extend-expect'

afterEach(cleanup);

describe('Transition component', () => {

    it('has CloseButton', () => {
        const {queryByTestId} = render(<Transition isOpen closable/>);
        expect(queryByTestId('closeButton')).not.toBeNull();
    });

    it('has correct style for default(left) placement', () => {
        const {getByTestId} = render(<Transition isOpen closable/>);
        expect(getByTestId('drawerBodyWrapper')).toHaveStyle(`
            height: 100%;
            width: 256px;
        `);
    });

    it('has correct style for right placement', () => {
        const {getByTestId} = render(<Transition isOpen placement='right'/>);
        expect(getByTestId('drawerBodyWrapper')).toHaveStyle(`
            height: 100%;
            width: 256px;
        `);
    });

    it('has correct style for bottom placement', () => {
        const {getByTestId} = render(<Transition isOpen placement='bottom'/>);
        expect(getByTestId('drawerBodyWrapper')).toHaveStyle(`
            height: 256px;
            width: 100%;
        `);
    });

    it('has correct style for top placement', () => {
        const {getByTestId} = render(<Transition isOpen placement='top'/>);
        expect(getByTestId('drawerBodyWrapper')).toHaveStyle(`
            height: 256px;
            width: 100%;
        `);
    });

    it('custom width property for wrapper', () => {
        const {getByTestId} = render(<Transition isOpen width={100}/>);
        expect(getByTestId('drawerBodyWrapper')).toHaveStyle(`width: 100px;`);
    });

    it('custom height property for wrapper', () => {
        const {getByTestId} = render(<Transition isOpen height={100}/>);
        expect(getByTestId('drawerBodyWrapper')).toHaveStyle(`height: 100px;`);
    })
});