import {INote} from './noteActionType'

export default class Note implements INote {
  id: string | '';
  title: string | '';
  content: string | '';
  description: string | '';

  constructor(data: any) {
    this.id = data && data.id ? data.id : '';
    this.title = data && data.title ? data.title : '';
    this.content = data && data.content ? data.content : '';
    this.description = data && data.description ? data.description : '';
  }
}


