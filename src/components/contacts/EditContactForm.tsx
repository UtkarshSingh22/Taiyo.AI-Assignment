import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { contactsActions } from "../../store/slices/contacts";
import { ContactItems } from "../../contacts.model";
import Modal from "../modal/Modal";

interface ContactItemProps {
    item: ContactItems;
    isModalOpen: boolean;
    onModalClose: () => void;
}

// Component for rendering form for editing contacts
const EditContactForm: React.FC<ContactItemProps> = ({
    item,
    isModalOpen,
    onModalClose,
}) => {
    const dispatch = useDispatch();

    // States for input handling
    const [firstName, setFirstName] = useState<string>(item.firstName);
    const [lastName, setLastName] = useState<string>(item.lastName);
    const [selectedOption, setSelectedOption] = useState<string>(item.status);

    const handleRadioChange = (event: { target: { value: string } }) => {
        setSelectedOption(event.target.value);
    };

    // Function for handling form submit
    const editContactHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const newContact = {
            id: item.id,
            firstName,
            lastName,
            status: selectedOption,
        };

        // Dispatch an array containing the new contact object
        dispatch(contactsActions.editContact(newContact));

        // Clear the form fields after submitting
        setFirstName("");
        setLastName("");
        setSelectedOption("active");
        onModalClose();
    };

    return (
        <Modal isOpen={isModalOpen} onClose={onModalClose}>
            <h2 className="text-xl font-semibold mb-4">Edit contact</h2>
            <form onSubmit={editContactHandler}>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block font-semibold">
                        First Name
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-red-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block font-semibold">
                        Last Name
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-red-500"
                    />
                </div>
                <div className="my-4">
                    <p className="font-semibold mb-2">Status</p>
                    <div className="flex space-x-2">
                        <label htmlFor="active" className="flex items-center">
                            <input
                                type="radio"
                                id="active"
                                name="status"
                                value="active"
                                checked={selectedOption === "active"}
                                onChange={handleRadioChange}
                                className="mr-2"
                            />
                            Active
                        </label>
                        <label htmlFor="inactive" className="flex items-center">
                            <input
                                type="radio"
                                id="inactive"
                                name="status"
                                value="inactive"
                                checked={selectedOption === "inactive"}
                                onChange={handleRadioChange}
                                className="mr-2"
                            />
                            Inactive
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                >
                    Save Contact
                </button>
            </form>
        </Modal>
    );
};

export default EditContactForm;
