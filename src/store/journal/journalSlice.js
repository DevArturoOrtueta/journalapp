import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 12345456,
        //     imageUrls: [],
        // }
    },
    reducers: {
        savingNotes: (state) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, action) => {
            state.isSaving = false;
            state.notes.push(action.payload);
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setSaving: (state) => {
            state.isSaving = true;
            //TODO: mensaje de error
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id){
                    return action.payload;
                }
                return note;
            })
        },
        deleteNoteById: (state, action) => {

        }
    }
});

export const {addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, savingNotes} = journalSlice.actions;