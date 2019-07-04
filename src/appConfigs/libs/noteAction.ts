
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';

import * as NoteActionType from './noteActionType';
import * as apiCall from  './apiCall'

export const getListNote = () : ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return (dispatchToReducer : ThunkDispatch<{}, {}, AnyAction>) : Promise<void> => {
    return new Promise((resolve, reject) => {
      apiCall.getListNote()
      .then(result => {
        dispatchToReducer({
          type: NoteActionType.NOTE_GET_ALL,
          listNote: result,
          error: ''
        });
        resolve();
      })
      .catch( error =>  {
        dispatchToReducer({
          type: NoteActionType.NOTE_GET_ALL,
          listNote: [],
          error: error
        });
        reject();
      });
    });
  }
} 

export const getNoteById = (noteId: string) : ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return (dispatchToReducer : ThunkDispatch<{}, {}, AnyAction>) : Promise<void> => {
    return new Promise((resolve, reject) => {
      apiCall.getNoteById(noteId)
      .then(result => {
        dispatchToReducer({
          type: NoteActionType.NOTE_GET_BY_ID,
          note: result,
          error: ''
        });
        resolve();
      })
      .catch(error => {
        dispatchToReducer({
          type: NoteActionType.NOTE_GET_BY_ID,
          note: undefined,
          error: error
        });
        reject();
      })
    });
  }
}

export const addNote = (note: NoteActionType.INote) : ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return (dispatchToReducer : ThunkDispatch<{}, {}, AnyAction>) : Promise<void> => {
    return new Promise((resolve, reject) => {
      apiCall.addNote(note)
      .then(result => {
        dispatchToReducer({
          type: NoteActionType.NOTE_ADDED,
          note: result,
          error: ''
        });
        resolve();
      })
      .catch(error =>{
        dispatchToReducer({
          type: NoteActionType.NOTE_ADDED,
          note: undefined,
          error: error
        });
        reject();
      });
    });
  };
}

export const updateNote = (note: NoteActionType.INote) : ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return (dispatchToReducer : ThunkDispatch<{}, {}, AnyAction>) : Promise<void> => {
    return new Promise((resolve, reject) => {
      apiCall.updateNote(note)
      .then(result => {
        dispatchToReducer({
          type: NoteActionType.NOTE_UPDATED,
          note: result,
          error: ''
        });
        resolve();
      })
      .catch(error => {
        dispatchToReducer({
          type: NoteActionType.NOTE_UPDATED,
          note: undefined,
          error: error
        });
        reject();
      });
    });
  };
}
   
export const deleteNote = (noteId: string) : ThunkAction<Promise<void>, {}, {}, AnyAction> => {
 return (dispatchToReducer : ThunkDispatch<{}, {}, AnyAction>) : Promise<void> => {
    return new Promise((resolve, reject) => {
      apiCall.deleteNote(noteId)
      .then(() => {
        dispatchToReducer({
          type: NoteActionType.NOTE_DELETED,
          error: ''
        });
        resolve();
      })
      .catch(error => {           
        dispatchToReducer({
          type: NoteActionType.NOTE_DELETED,
          error: error
        });
        reject();
      });
    });
  };
}