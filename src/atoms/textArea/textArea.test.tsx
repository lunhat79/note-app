import React from 'react';
import { mount } from 'enzyme';

import TextArea from './index';

describe('Full Rendering on Pure component', () => {
  const wrapper = mount(<TextArea className="textClass" />);

  it('renders without crashing', () => {
    expect(true).toEqual(true);
  });

  it('Render with classname', () => {    
    expect(wrapper.find('textarea.textClass')).toHaveLength(1);
  });
});
