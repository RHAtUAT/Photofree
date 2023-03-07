import { Button, useAuthenticator } from '@aws-amplify/ui-react';
import React, { useState } from 'react';
import DropdownMenu from '../dropdowns/dropdownMenu';
import UploadModal from '../modals/upload-modal/uploadModal';
import "./navbar.css"

interface NavbarProps {
  logo?: string;
  onLogoClick?: () => void;
  profileImage?: string;
  onProfileClick?: () => void;
  style?: React.CSSProperties;
}

const Navbar: React.FC<NavbarProps> = ({
  logo,
  onLogoClick,
  profileImage,
  onProfileClick,
  style,
}) => {

  const { signOut } = useAuthenticator(context => [context.signOut]);
    
  const [isEditProfileWindowOpen, setEditProfileWindow] = useState(false);
  const toggleEditProfileWindow = () => {
    setEditProfileWindow(!isEditProfileWindowOpen);
  }

  const [isUploadModalOpen, setUploadModal] = useState(false);
  const toggleUploadModal = () => {
    setEditProfileWindow(!isEditProfileWindowOpen);
  }

  const OptionsDropdown = (
    <>
      <Button
        display={"block"}
        width={"100%"}
        onClick={toggleEditProfileWindow}
        marginBottom={"10px"}>
        Edit Profile
      </Button>
      <Button
        display={"block"}
        backgroundColor={'brand.primary.100'}
        width={"100%"}
        onClick={signOut}
        color={'background.primary'}>
        Sign Out
      </Button>
    </>
  );

  const toggleElement = (
    <img
    src={profileImage}
    alt="profile"
    className="navbar-profile-image" />
  )

  return (
    <nav className="navbar" style={style}>
      <div className="navbar-left">
        <img
          src={logo}
          alt="logo"
          className="navbar-logo"
          onClick={onLogoClick}
        />
      </div>
      <div className="navbar-right">
        <button className="navbar-upload" onClick={toggleUploadModal}>
          Upload
        </button>
        <UploadModal />
        <div className="navbar-profile" onClick={onProfileClick}>
          <DropdownMenu toggleElement={toggleElement} children={OptionsDropdown} />
        </div> 
      </div>
    </nav>
  );
};

export default Navbar;