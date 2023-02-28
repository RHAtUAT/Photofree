import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, className, style, children }: ModalProps) => {
  const overlayStyles: React.CSSProperties = {
    position: 'fixed',
    display: isOpen ? 'block' : 'none',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '0px',
    zIndex: 9999,
  };

  const modalStyles: React.CSSProperties = {
    position: 'fixed',
    display: isOpen ? 'block' : 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '20px',
    zIndex: 10000,
    ...style,
  };

  return (
    <>
      <div style={overlayStyles} className={className} onClick={onClose} />
      <div style={modalStyles} className={className}>
        {children}
      </div>
    </>
  );
};

export default Modal;