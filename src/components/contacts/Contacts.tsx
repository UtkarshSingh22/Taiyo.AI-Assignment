import React, { useState } from "react";
import AddContactForm from "./AddContactForm";
import ContactsList from "./ContactsList";

// Component which renders the contacts
const Contacts: React.FC = () => {
    // State for handling modal open/close
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

    return (
        <div className="min-h-screen bg-gray-100 py-8 mx-4">
            <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-semibold mb-4">Contacts Page</h1>
                <button
                    onClick={() => setIsFormOpen((prevState) => !prevState)}
                    className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                >
                    Create Contact
                </button>
                <AddContactForm
                    isModalOpen={isFormOpen}
                    onModalClose={() => setIsFormOpen(false)}
                />
                <ContactsList />
            </div>
        </div>
    );
};

export default Contacts;
