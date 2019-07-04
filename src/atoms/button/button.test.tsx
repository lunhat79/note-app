import React from 'react';
import { mount } from 'enzyme';

import Button from './index';

describe('Full Rendering on Pure component', () => {
  const props = {
    handleClick: jest.fn(),
  };
  const wrapper = mount(<Button {...props}> Add </Button>);

  it('renders without crashing', () => {
    expect(true).toEqual(true);
  });

  it('Clickable', () => {
    wrapper.find('button').simulate('click');
    expect(props.handleClick).toHaveBeenCalled()
  });
});
