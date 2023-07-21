import { async } from "@firebase/util"
import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { loadNotes } from "../../helper"
import { addNewEmptyNote, setActiveNote, savingNotes, setNotes, setSaving, updateNote } from "./journalSlice"

export const startNewNote = () => {
    return async( dispatch, getState) => {

        dispatch(savingNotes())
        
        const {uid} = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);
        
        newNote.id = newDoc.id

        dispatch(addNewEmptyNote(newNote));
        
        dispatch(setActiveNote(newNote))
       
    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {
        const {uid} = getState().auth;

        if(!uid) throw new Error('No existe uid del usuario');

        const notes = await loadNotes(uid);

        dispatch(setNotes(notes))
        
    }
}

export const startSaveNote = () => {
    return async(dispatch, getState) => {

        dispatch(setSaving());
        const {uid} = getState().auth;
        const {active:note} = getState().journal;
        const noteToFireStore = {
            ...note
        }

        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, {merge: true}) //el merge hace que se fusione con los campos que ya existe, osea que si no existe un campo lo agregue

        dispatch(updateNote(note))
    }
}