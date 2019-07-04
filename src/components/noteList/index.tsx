import * as React from 'react'

import { INote } from '../../appConfigs/libs/noteActionType';

import Text from '../../atoms/text'
import Button from '../../atoms/button'

import './styles.css'

interface IStateLocal{
}

interface IPropsLocal{
  notes: Array<INote>,
  onDelete: (noteId:string) => void,
  onEdit: (noteId: string) => void
}

class NoteList extends React.Component<IPropsLocal, IStateLocal>{
  static defaultProps = {
    notes: [],
  }

  render(){
    const {notes, onDelete, onEdit} = this.props;

    return(
      <div className="noteListContainer">
        {notes.map(note => (
          <div key={note.id} className="noteItem">
            <Text content={note.title} />
            <Button
              handleClick={ () => {
                onEdit(`${note.id}`);
              }}            
            > 
              Edit 
            </Button>
            <Button 
              handleClick={ () => {
                onDelete(`${note.id}`);
              }}
            > 
              Delete 
            </Button>
          </div>
        ))}
      </div>
    );
  }
}

export default NoteList
