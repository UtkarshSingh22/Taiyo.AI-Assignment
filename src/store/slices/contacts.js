import { createSlice } from "@reduxjs/toolkit";

// Creating a contacts slice
const contactSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        // reducers for adding, deleting and editing contacts
        addContact(state, action) {
            return [...state, ...action.payload];
        },
        removeContact(state, action) {
            const contactIdToRemove = action.payload;
            return state.filter((contact) => contact.id !== contactIdToRemove);
        },
        editContact(state, action) {
            const editedContact = action.payload;
            return state.map((contact) =>
                contact.id === editedContact.id ? editedContact : contact
            );
        },
        default(state) {
            return state;
        },
    },
});

export const contactsActions = contactSlice.actions;

export default contactSlice.reducer;
