import React, { useState } from 'react';
import './modal.css';

export interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOverlayClick = () => {
    setShowModal(!isOpen);
    if (onClose != undefined) {onClose()};  
  };

  console.log("showModal:" + showModal);

  return (
    <>
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={handleOverlayClick} />
      <div className={`modal ${isOpen ? 'show' : ''}`}>
        {children}
      </div>
    </>
  );
};

export default Modal;