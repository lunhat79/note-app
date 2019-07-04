import * as React from 'react'
// import PropTypes from 'prop-types'
import { History } from 'history';
import { connect } from 'react-redux';

import { INote, IStoreState } from '../../appConfigs/libs/noteActionType';
import {
  getListNote,
  deleteNote,
} from '../../appConfigs/libs/noteAction'

import Button from '../../atoms/button'
import NoteList from '../../components/noteList'

import './styles.css'

interface IStateLocal{
}

interface IStateToProp {
  error: string | undefined,
  listNote: Array<INote>,
}

interface IDispatchToProp {
  getListNote: () => Promise<void>,
  deleteNote: (noteId: string ) => Promise<void>
}

interface IPropLocal{
  history: History
}

type IProps = IStateToProp & IDispatchToProp & IPropLocal

class NoteListPage extends React.Component<IProps, IStateLocal> {
  
  // static propTypes = {
  //   error: PropTypes.string,
  //   listNote: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  //   getListNote: PropTypes.func.isRequired,
  // }

  static defaultProps = {
    error: '',
    listNote: [],
  }

  isServerCall:boolean = false;  

  componentDidMount(){
    this.getData();
  }

  componentWillReceiveProps(nextProp: IStateToProp){
    const {error} = this.props;
    if(!error && nextProp.error){
      console.log(nextProp.error);
    }
  }

  getData = ():void => {
    this.props.getListNote();
  }

  handleDeleteNode = (nodeId: string) => {
    const {deleteNote, getListNote} = this.props
    if(this.isServerCall) return;

    this.isServerCall = true
    deleteNote(nodeId)
    .then(() => {
      getListNote()
      .then(()=>{
        this.isServerCall = false;
      });  
    });
  }

  handleEdit = (nodeId: string) => {
    const {history} = this.props;
    history.push(`/detail/${nodeId}`);
  }

  handleNew = () =>{
    const {history} = this.props;
    history.push('/detail');
  }

  render(){
    const {listNote} = this.props;
    return(
      <React.Fragment>
        <div className="buttonContent">
          <Button  
            handleClick={this.handleNew}
          > 
            New Note 
          </Button>
        </div>
        <NoteList notes={listNote} onDelete={this.handleDeleteNode} onEdit={this.handleEdit}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  error: state.error,
  listNote: state.listNote,
});


const mapDispatchToProps = {
  getListNote,
  deleteNote,
};

/**
 * If we specify strong type it cause error, the Store state and component prop must be the same to avoid error
 * This is so unacceptable. 
 * => Have to use connect without type declare. :-(
 */
// export default connect<IStateToProp, IDispatchToProp >(mapStateToProps, mapDispatchToProps)(NoteListPage)
export default connect(mapStateToProps, mapDispatchToProps)(NoteListPage);
export { NoteListPage as PureNoteListPage };

