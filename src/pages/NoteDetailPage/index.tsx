import * as React from 'react'
// import PropTypes from 'prop-types'
import { History } from 'history';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { INote, IStoreState } from '../../appConfigs/libs/noteActionType';
import {
  getNoteById,
  addNote,
  updateNote
} from '../../appConfigs/libs/noteAction'

import Button from '../../atoms/button'
import Input from '../../atoms/input'
import Text from '../../atoms/text'
import TextArea from '../../atoms/textArea'

import './styles.css'

interface IStateLocal{
  noteId: string | undefined,
}

interface IStateToProp {
  error: string | undefined,
  note: INote | undefined,
}

interface IDispatchToProp {
  getNoteById: (noteId: string) => void,
  addNote: (note: INote ) => Promise<void>
  updateNote: (note: INote ) => Promise<void>
}

type TParams =  { params: {noteId: string }};
interface IPropLocal{
  history: History,
  match: TParams
}

type IProps = IStateToProp & IDispatchToProp & IPropLocal

class NoteDetailPage extends React.Component<IProps, IStateLocal> {
 
  static defaultProps = {
    error: '',
    listNote: [],
  }

  constructor(props: IProps){
    super(props);
    this.state={
      noteId:'',
    }
  }

  componentDidMount(){
    const {match, getNoteById} = this.props;
    this.setState({noteId : match.params.noteId})
    if(match.params.noteId)
      getNoteById(match.params.noteId);    
  }

  handleBack = ()=>{
    const {history} = this.props;
    history.push('/');
  }

  handleAdd = (note:INote) => {
    const { addNote } = this.props

    addNote({...note})
    .then(() => {
      this.handleBack();
    });
  }

  handleUpdate = (note: INote) => {
    const { updateNote } = this.props
    const { noteId } = this.state;

    updateNote({...note, id:noteId})
    .then(() => {
      this.handleBack();
    });
  }

  render(){
    const {noteId} = this.state
    const {note} = this.props;

    const initValues = noteId && note 
    ? note 
    : {
        id: undefined,
        title: 'New note',
        content: '',
        description: '',
      };

    return(
      <React.Fragment>
        <div className="buttonContent">
          <Button  
            handleClick={this.handleBack}
          > 
            Back to List
          </Button>
        </div>
        <div className="formContent">
          <Formik
            enableReinitialize
            initialValues={ initValues }
            validate={(values) => {
              let errors = {};
              if (!values.title) {
                errors = {...errors, title: 'Required'};
              }
              if(!values.content){
                errors={...errors, content: 'Required'};
              }
              return errors;
            }}
            onSubmit={(values, actions) => {
              if(noteId){
                this.handleUpdate(values)
              }else{
                this.handleAdd(values);
              }
              actions.resetForm()
            }}
          >
            {({ errors, values, handleSubmit, handleChange}) => (
              <form onSubmit={handleSubmit}>
                <Text content="TITLE" className="formItem" />
                <Input 
                  type='text' 
                  name='title' 
                  className="formItem" 
                  value={values.title} 
                  handleChange={handleChange}
                  isError={!!errors.title}
                />
                <Text content="CONTENT" className="formItem" />
                <Input 
                  type='text' 
                  name='content' 
                  className="formItem" 
                  value={values.content} 
                  handleChange={handleChange}
                  isError={!!errors.content}
                />
                <Text content="DESCRIPTION" className="formItem" />
                <TextArea 
                  name='description' 
                  className="formItem" 
                  value={values.description} 
                  handleChange={handleChange}
                />

                <Button
                  type="submit"
                  className="formItem"
                >
                  {noteId ? 'Update' : "Add"}
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  error: state.error,
  note: state.note,
});

const mapDispatchToProps = {
  getNoteById,
  addNote,
  updateNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetailPage);
export { NoteDetailPage as PureNoteDetailPage };

