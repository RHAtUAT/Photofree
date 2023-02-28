import {
  FileUploader,
  Collection,
  withAuthenticator,
  useAuthenticator,
  Button,
  ThemeProvider,
  View
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import "./index.css";
import { Storage } from "aws-amplify";
import { S3ProviderListOutputItem } from "@aws-amplify/storage";
import { ImageCard } from "./ImageCard";
import { NavBar, UploadWindow } from "./ui-components";
import { UploadTheme as uploadTheme } from "./UploadTheme";
import Modal from "./Modal";
import React, { useState, useEffect } from 'react';

function App() {

  //#region File Uploading
  const [imageKeys, setImageKeys] = useState<S3ProviderListOutputItem[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const { signOut } = useAuthenticator(context => [context.signOut]);

  const fetchImages = async () => {
    const { results } = await Storage.list("", { level: "private" });
    setImageKeys(results);
    const s3Images = await Promise.all(
      results.map(
        async image => await Storage.get(image.key!, { level: "private" })
      )
    );
    setImages(s3Images);
  };
  useEffect(() => {
    fetchImages();
  }, []);

  const onSuccess = (event: { key: string }) => {
    fetchImages();
  };
  //#endregion

  //#region Upload Window
  const toggleUploadWindow = () => {
    setUploadWindow(!isUploadOpen);
  }

  const UploadElement = (
    <ThemeProvider theme={uploadTheme}>
      <FileUploader
        accessLevel="private"
        acceptedFileTypes={["image/*"]}
        variation="drop"
        onSuccess={onSuccess}
      />
    </ThemeProvider>
  );

  const UploadPopup = (
    <UploadWindow
      overrides={{
        CloseButton: { onClick: toggleUploadWindow },
        UploadSection: { children: UploadElement }
      }} />
  );

  const [isUploadOpen, setUploadWindow] = useState(false);
  //#endregion

  //#region Options
  const toggleEditProfileWindow = () => {
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
        backgroundColor={"rgba(0,85,102,1)"}
        width={"100%"}
        onClick={signOut}
        marginBottom={"10px"}
        color={"#ffffff"}>
        Sign Out
      </Button>
    </>
  );

  const backgroundStyle: React.CSSProperties = {
    margin: '0',
    padding: '0',
    height: '100vh',
    width: '60vw',
    left: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    position: 'absolute',
  };

  const [isEditProfileWindowOpen, setEditProfileWindow] = useState(false);
  //#endregion

  return (

    <>
      <View style={backgroundStyle} />
      <NavBar className="NavBar"
        overrides={{
          Button: { onClick: toggleUploadWindow },
          DropdownMenu: { children: OptionsDropdown }
        }} />
      <Modal
        isOpen={isUploadOpen}
        children={(UploadPopup)}
        onClose={toggleUploadWindow}
      />
      <Collection
        style={{ zIndex: 1 }}
        items={images}
        type="grid"
        padding="2rem"
        // boxShadow="0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
        maxWidth="1100px"
        margin="100px auto"
        backgroundColor={"transparent"}
        justifyContent="center"
        templateColumns={{
          base: "minmax(0, 500px)",
          medium: "repeat(2, minmax(0, 1fr))",
          large: "repeat(3, minmax(0, 1fr))"
        }}
        gap="small"
      >
        {(item, index) => (
          <ImageCard
            key={index}
            imageKeys={imageKeys}
            item={item}
            index={index}
          />
        )}
      </Collection>
    </>
  );
}
export default withAuthenticator(App);