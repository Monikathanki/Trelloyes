import React from 'react';
import ReactDom from 'react-dom';
import App from './Card'
import Card from './Card';

it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');

    // render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<Card />, div);

    // clean up code
    ReactDOM.unmountComponentAtNode(div);
});