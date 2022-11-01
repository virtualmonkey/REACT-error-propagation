import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../containers/App';
import {store} from '../store';
import { Provider } from 'react-redux';

test('ExpressionDisplay must be in document', () => {
    render(<Provider store={store}>
        <App />
    </Provider>);

    expect(screen.getByRole("ExpressionDisplay")).toBeInTheDocument()
});

test('ExpressionField must be in document', () => {
    render(<Provider store={store}>
        <App />
    </Provider>);

    expect(screen.getByRole("ExpressionField")).toBeInTheDocument()
});

test('ExpressionResult must be in document', () => {
    render(<Provider store={store}>
        <App />
    </Provider>);

    expect(screen.getByRole("ExpressionResult")).toBeInTheDocument()
});
