import React from "react";
import "./Modal.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>
                    x
                </button>
                {children}
            </div>
        </>
    );
};

export default Modal;
