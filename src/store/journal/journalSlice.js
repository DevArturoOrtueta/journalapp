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

        },
        updateNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        }
    }
});

export const {addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, savingNotes} = journalSlice.actions;