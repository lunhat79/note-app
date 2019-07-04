
export const NOTE_GET_ALL = 'NOTE_GET_ALL_ACTION';
export const NOTE_GET_BY_ID = 'NOTE_GET_BY_ID_ACTION';
export const NOTE_ADDED = 'NOTE_ADDED_ACTION';
export const NOTE_UPDATED = 'NOTE_UPDATED_ACTION';
export const NOTE_DELETED = 'NOTE_DELETED_ACTION';

export interface INote{
  id?: string;
  title: string | '';
  content: string | '';
  description: string | '';
}

export interface IStoreState{
  error : string | undefined,
  listNote: Array<INote>,
  note: INote | undefined,
  addedNote:  INote | undefined,
  updatedNote: INote | undefined,
};

export interface INoteAction extends IStoreState{
  type: typeof NOTE_GET_ALL | typeof NOTE_GET_BY_ID | typeof NOTE_ADDED | typeof NOTE_UPDATED | typeof NOTE_DELETED
};

