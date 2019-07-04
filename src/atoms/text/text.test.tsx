import React from 'react';
import { mount } from 'enzyme';

import Text from './index';

describe('Full Rendering on Pure component', () => {
  const wrapper = mount(<Text className="textClass" content="Here My Text"/>);

  it('renders without crashing', () => {
    expect(true).toEqual(true);
  });

  it('Render with classname', () => {    
    expect(wrapper.find('p.textClass')).toHaveLength(1);
  });
});
