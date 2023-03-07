import {
  FileUploader,
  Collection,
  withAuthenticator,
  ThemeProvider,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import "./index.css";
import { Storage } from "aws-amplify";
import { S3ProviderListOutputItem } from "@aws-amplify/storage";
import { ImageCard } from "./ImageCard";
import {UploadWindow } from "./ui-components";
import Navbar from "./components/navbar/navbar";
import { UploadTheme as uploadTheme } from "./UploadTheme";
import Modal from "./components/modals/modal/modal";
import React, { useState, useEffect } from 'react';
import UploadModal from "./components/modals/upload-modal/uploadModal";

function App() {

  //#region File Uploading
  const [imageKeys, setImageKeys] = useState<S3ProviderListOutputItem[]>([]);
  const [images, setImages] = useState<string[]>([]);

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

  const [isUploadOpen, setUploadWindow] = useState(false);
  //#endregion

  const backgroundStyle: React.CSSProperties = {
    margin: '0',
    padding: '0',
    height: '100vh',
    width: '60vw',
    left: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    backgroundColor: '#f4f4f4',
    position: 'absolute',
  };
  return (

    <>
      <Navbar
        logo="https://via.placeholder.com/30"
        profileImage="https://via.placeholder.com/30"
        />
      <UploadModal/>
      <div style={backgroundStyle}>
      <Collection
        items={images}
        
        type="grid"
        padding="2rem"
        maxWidth="1100px"
        margin="100px auto"
        backgroundColor={"black"}
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
      </div>
    </>
  );
}
export default withAuthenticator(App);