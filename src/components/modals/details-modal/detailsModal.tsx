import React, { useState } from "react";
import "./detailsModal.css";

interface DetailsProps {
  onClose: () => void;
  url: string;
  alt: string;
  uploadDate: Date;
  size: string;
}

const Details: React.FC<DetailsProps> = ({ onClose, url, alt, uploadDate, size }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="details-modal">
        <button className="close-button" onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path fill="#333" d="M14.85 12l5.74-5.74a1 1 0 1 0-1.41-1.41L13.44 10.6l-5.74-5.74a1 1 0 1 0-1.41 1.41L12.03 12l-5.74 5.74a1 1 0 0 0 1.41 1.41L13.44 13.4l5.74 5.74a1 1 0 1 0 1.41-1.41L14.85 12z"/>
          </svg>
        </button>
        <h2>Details</h2>
        <p>Image URL:</p>
        <div className="url-container">
          <p>{url}</p>
        </div>
        <p>Filename: {alt}</p>
        <p>Size: {size}</p>
        <p>Upload Date: {uploadDate.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Details;