import {INote} from './noteActionType'
import Note from './noteModel'

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

const API_BASEURL = 'http://5d1bf861dd81710014e88b3c.mockapi.io/api';

export const getListNote = ():Promise< Array<Note>> => {
  const option = {
    method: 'GET',
    headers: headers,
  };
  return new Promise((resolve, reject) =>
    fetch(
      `${API_BASEURL}/notes`,
      option
    )
    .then(response => {
      response
      .json()
      .then((data: any[]) => {
        const listNote: Array<Note> = [];
        data.forEach(el => {
          listNote.push(new Note(el))
        });
        resolve(listNote);
      })    
    })
    .catch(error => {           
      reject("Get notes error.");
    })
  );
}

export const getNoteById = (noteId: string):Promise<Note> => {
  const option = {
    method: 'GET',
    headers: headers,
  };

  return new Promise((resolve, reject) =>
    fetch(
      `${API_BASEURL}/notes/${noteId}`,
      option
    )
    .then(response => {
      response
      .json()
      .then((data:object) => {
        const note: Note = new Note(data);
        resolve(note);
      })
    })
    .catch(error => {           
      reject("Get note error.");
    })
  );
}

export const addNote = (data: INote):Promise<Note> => {
  const note: Note = new Note(data);
  const option = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(note)
  };

  return new Promise((resolve, reject) =>
    fetch(
      `${API_BASEURL}/notes`,
      option
    )
    .then(response => {
      response
      .json()
      .then(data => {
        const note = new Note(data);
        resolve(note);
      })
    })
    .catch(error => {           
      reject("Add note error.");
    })
  );
}

export const updateNote = (note: INote):Promise<Note> => {
  const option = {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(note)
  };

  return new Promise((resolve, reject) =>
    fetch(
      `${API_BASEURL}/notes/${note.id}`,
      option
    )
    .then(response => {
      response
      .json()
      .then(data => {
        const note: Note = new Note(data);
        resolve(note);
      })
    })
    .catch(error => {           
      reject("Update note error.");
    })
  );
}

export const deleteNote = (noteId: string): Promise<void> => {
  const option = {
    method: 'DELETE',
    headers: headers,
  };

  return new Promise((resolve, reject) =>
    fetch(
      `${API_BASEURL}/notes/${noteId}`,
      option
    )
    .then(response => {
      resolve();
    })
    .catch(error => {           
      reject("Delete note error.");
    })
  );
}