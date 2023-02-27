import React, { useState } from 'react';
import Modal from './Modal';
import DetailsModal from './DetailsModal';
import "@aws-amplify/ui-react/styles.css";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  size: string;
}

const ImageModal = ({ isOpen, onClose, src: imageUrl, alt, size }: ImageModalProps) => {
  const modalStyle: React.CSSProperties = {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // backgroundColor: '#FFFFFF',
    // borderRadius: '20px',
    // padding: '20px',
    // height: 'auto',  // set height to auto to match the height of the image
    // width: 'auto',   // set width to auto to match the width of the image
    // maxWidth: 'calc(100% - 20px)',  // subtract 20px to account for padding
    // maxHeight: 'calc(100% - 20px)',  // subtract 20px to account for padding
    // overflow: 'hidden',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    alignContent: 'center'
  };

  const buttonContainer: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#007AFF',
    fontWeight: 'bold',
  };

  const [copied, setCopied] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(imageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openDetails = () => {
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div style={modalStyle}>
          <img src={imageUrl} alt={alt} style={imageStyle} />
          <div style={buttonContainer}>
            <button style={buttonStyle} onClick={copyLink}>
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
            <button style={buttonStyle} onClick={openDetails}>
              Details
            </button>
          </div>
        </div>
      </Modal>
      {showDetails && (
        <DetailsModal
          imageUrl={imageUrl}
          alt={alt}
          onClose={closeDetails}
          uploadDate={new Date} //TODO get actual upload date
          size={size}
        />
      )}
    </>
  );
};

export default ImageModal;