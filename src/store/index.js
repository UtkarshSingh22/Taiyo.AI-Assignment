import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./slices/contacts";

// Configuring a redux store
const store = configureStore({
    reducer: { contacts: contactsReducer },
});

export default store;
