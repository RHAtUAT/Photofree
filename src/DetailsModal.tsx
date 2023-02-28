import React, { useState } from "react";

interface DetailsProps {
  onClose: () => void;
  url: string;
  alt: string;
  uploadDate: Date;
  size: string
}

const Details: React.FC<DetailsProps> = ({ onClose, url, alt, uploadDate, size }) => {
  const [showDetails, setShowDetails] = useState(true);

  const closeModal = () => {
    setShowDetails(false);
    onClose();
  };

  const detailsModalStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '20px',
    maxWidth: '500px',
    maxHeight: '80%',
    overflow: 'auto',
    zIndex: 10002
  };

  const closeButtonStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    border: 'none',
    cursor: 'pointer',
    color: '#000000',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    position: 'relative',
    top: '15px',
    right: '15px',
    zIndex: 10006
  };

  const modalOverlayStyle: React.CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10001,
  };

  if (!showDetails) {
    return null;
  }

  return (
    <div style={modalOverlayStyle}>
      <div style={detailsModalStyle}>
        <button style={closeButtonStyle} onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path fill="#333" d="M14.85 12l5.74-5.74a1 1 0 1 0-1.41-1.41L13.44 10.6l-5.74-5.74a1 1 0 1 0-1.41 1.41L12.03 12l-5.74 5.74a1 1 0 0 0 1.41 1.41L13.44 13.4l5.74 5.74a1 1 0 1 0 1.41-1.41L14.85 12z"/>
          </svg>
        </button>
        <h2>Details</h2>
        <p>Image URL:</p>
        <div style={{ overflow: "scroll", maxHeight: "100px", maxWidth: "100%", border: "1px solid #ccc", padding: "5px"}}>
          <p style={{ textAlign: "left"}}>{url}</p>
        </div>
        <p>Filename: {alt}</p>
        <p>Size: {size}</p>
        <p>Upload Date: {uploadDate.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Details;