import React, { useState } from 'react';
import Modal from './Modal';
import DetailsModal from './DetailsModal';
import "@aws-amplify/ui-react/styles.css";
import { generatePresignedUrl } from './generateUrl';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  size: string;
}

const ImageModal = ({ isOpen, onClose, src, alt, size }: ImageModalProps) => {

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

  const copyLink = async () => {
    const url = await generatePresignedUrl(src);
    navigator.clipboard.writeText(url);
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
        <div>
          <img src={src} alt={alt} style={imageStyle} />
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
          url={src}
          alt={alt}
          onClose={closeDetails}
          uploadDate={new Date} // TODO: Get actual upload date
          size={size}
        />
      )}
    </>
  );
};

export default ImageModal;