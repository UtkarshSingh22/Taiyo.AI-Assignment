import React from "react";
import { useSelector } from "react-redux";
import { ContactItems } from "../../contacts.model";
import ContactItem from "./ContactItem";

const ContactsList: React.FC = () => {
    // Fetching contacts from redux state
    const contactsState = useSelector(
        (state: { contacts: ContactItems[] }) => state.contacts
    );

    return (
        <div className="mt-4">
            {!contactsState.length && (
                <div className="text-gray-600">
                    No contacts found. Please add contacts from the "Create
                    Contact" button.
                </div>
            )}
            <ul className="mt-4 space-y-2">
                {contactsState.length !== 0 &&
                    contactsState.map((item) => (
                        <ContactItem key={item.id} item={item} />
                    ))}
            </ul>
        </div>
    );
};

export default ContactsList;
