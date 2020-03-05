import React from 'react';
import ReactDOM from 'react-dom';
import ListText from '../listText';
import { BrowserRouter } from 'react-router-dom';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <ListText />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer.create(<BrowserRouter>
    <ListText />
  </BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});