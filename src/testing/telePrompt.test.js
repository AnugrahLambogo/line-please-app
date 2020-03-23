import React from 'react';
import ReactDOM from 'react-dom'
import TelePrompt from '../components/teleprompt'
import renderer from 'react-test-renderer'

describe('TelePrompt component', () =>{
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TelePrompt />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('TelePrompt renders the UI as expected', () => {
    const tree = renderer
                .create(<TelePrompt />)
                .toJSON();
    expect(tree).toMatchSnapshot();
});

})