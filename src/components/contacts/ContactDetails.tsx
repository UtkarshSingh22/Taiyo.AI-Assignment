import React from "react";
import Modal from "../modal/Modal";
import { ContactItems } from "../../contacts.model";

interface ContacDetailsProps {
    isModalOpen: boolean;
    onModalClose: () => void;
    item: ContactItems;
}

// component for showing details of a contact
const ContactDetails: React.FC<ContacDetailsProps> = ({
    isModalOpen,
    onModalClose,
    item,
}) => {
    return (
        <Modal isOpen={isModalOpen} onClose={onModalClose}>
            <h2 className="text-xl font-semibold mb-4">Contact details</h2>
            <div className="flex justify-between">
                <div className="flex">
                    <p className="text-lg font-semibold">{item.firstName}</p>
                    &nbsp;
                    <p className="text-lg font-semibold">{item.lastName}</p>
                </div>
                <p className="text-lg bg-red-500 rounded text-white px-2 py-1">
                    {item.status}
                </p>
            </div>
        </Modal>
    );
};

export default ContactDetails;
