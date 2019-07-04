import React from 'react';
import { mount } from 'enzyme';

import NoteList from './index';

const props = {
  notes: [
    {
      "id": "1",
      "createdAt": "2019-07-03T13:31:39.596Z",
      "title": "title 1",
      "content": "content 1",
      "description": "description 1"
    },
    {
      "id": "2",
      "createdAt": "2019-07-03T06:25:05.979Z",
      "title": "New note",
      "content": "eerwerwer",
      "description": ""
    }
  ],
  onDelete: jest.fn(),
  onEdit: jest.fn(),
};

describe('Full Rendering on Pure component', () => {
  const wrapper = mount(<NoteList {...props} />);

  it('renders note data ', () => {
    expect(wrapper.find('div.noteItem')).toHaveLength(2);
  });

  it('Edit, Delete button work', () => {    
    wrapper.find('button').first().simulate('click');
    expect(props.onEdit).toHaveBeenCalled()

    wrapper.find('button').last().simulate('click');
    expect(props.onDelete).toHaveBeenCalled()
  });

});
