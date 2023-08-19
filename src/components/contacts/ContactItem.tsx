import React, { useState } from "react";
import { ContactItems } from "../../contacts.model";
import { useDispatch } from "react-redux";
import { contactsActions } from "../../store/slices/contacts";
import EditContactForm from "./EditContactForm";
import ContactDetails from "./ContactDetails";

interface ContactItemProps {
    item: ContactItems;
}

const ContactItem: React.FC<ContactItemProps> = ({ item }) => {
    const dispatch = useDispatch();

    // State for modal open/close handling
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    // Function for deleting contact
    const deleteContactHandler = () => {
        dispatch(contactsActions.removeContact(item.id));
    };

    const name = `${item.firstName} ${item.lastName} - ${item.status}`;

    return (
        <li className="border-b py-3 px-1 flex justify-between items-center">
            <p className="text-xl font-semibold w-11/12">{name}</p>
            <div className="flex-col justify-center items-center gap-2">
                <button
                    onClick={() => setIsDetailsOpen((prevState) => !prevState)}
                    className="text-blue-500 hover:underline mr-2"
                >
                    Details
                </button>
                <button
                    onClick={() => setIsFormOpen((prevState) => !prevState)}
                    className="text-blue-500 hover:underline mr-2"
                >
                    Edit
                </button>
                <button
                    onClick={deleteContactHandler}
                    className="text-red-500 hover:underline"
                >
                    Delete
                </button>
            </div>
            {isFormOpen && (
                <EditContactForm
                    item={item}
                    isModalOpen={isFormOpen}
                    onModalClose={() => setIsFormOpen(false)}
                />
            )}
            {isDetailsOpen && (
                <ContactDetails
                    item={item}
                    isModalOpen={isDetailsOpen}
                    onModalClose={() => setIsDetailsOpen(false)}
                />
            )}
        </li>
    );
};

export default ContactItem;
