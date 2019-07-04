import * as NoteActionType from './noteActionType';

const initialState:NoteActionType.IStoreState = {
  error: undefined,
  listNote: [],
  note: undefined,
  addedNote: undefined,
  updatedNote: undefined,
}

export default function (state: NoteActionType.IStoreState = initialState 
  , action: NoteActionType.INoteAction)
  : NoteActionType.IStoreState
{
  switch (action.type) {
    case NoteActionType.NOTE_GET_ALL: 
      return {
        ...state,
        listNote: action.listNote,
        error: action.error,
      };
    case NoteActionType.NOTE_GET_BY_ID: 
      return {
        ...state,
        note: action.note,
        error: action.error,
      };
    case NoteActionType.NOTE_ADDED: 
      return {
        ...state,
        addedNote: action.addedNote,
        error: action.error,
      };
    case NoteActionType.NOTE_UPDATED: 
      return {
        ...state,
        updatedNote: action.updatedNote,
        error: action.error,
      };
    case NoteActionType.NOTE_DELETED: 
      return {
        ...state,
       error: action.error,
      };
    default:
      return {
          ...state
      };
  }
};
