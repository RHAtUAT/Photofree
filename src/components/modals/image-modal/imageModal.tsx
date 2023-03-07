import React, { useState } from 'react';
import Modal from '../modal/modal';
import DetailsModal from '../details-modal/detailsModal';
import "@aws-amplify/ui-react/styles.css";
import "./imageModal.css";
import { generatePresignedUrl } from '../../../generateUrl';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  size: string;
}

const ImageModal = ({ isOpen, onClose, src, alt, size }: ImageModalProps) => {

  const [copied, setCopied] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const copyLink = async () => {
    const url = await generatePresignedUrl(src);
    navigator.clipboard.writeText(url); // Only runs if an HTTPS connection is established
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
        <div className="image-modal-container">
          <img src={src} alt={alt} className="image-modal" />
          <div className="button-container">
            <button className="button-style" onClick={copyLink}>
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
            <button className="button-style" onClick={openDetails}>
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
          uploadDate={new Date()} // TODO: Get actual upload date
          size={size}
        />
      )}
    </>
  );
};

export default ImageModal;