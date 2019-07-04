import React from 'react';
import { mount } from 'enzyme';

import Input from './index';

describe('Full Rendering on Pure component', () => {
  const wrapper = mount(<Input type="text" isError/>);

  it('renders without crashing', () => {
    expect(true).toEqual(true);
  });

  it('Render with error classname', () => {    
    expect(wrapper.find('input.inputError')).toHaveLength(1);
  });
});
