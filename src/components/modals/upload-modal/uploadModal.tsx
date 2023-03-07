import { FileUploader } from "@aws-amplify/ui-react";
import { S3ProviderListOutputItem } from "@aws-amplify/storage";
import { useEffect, useState } from "react";
import { UploadWindow } from "../../../ui-components";
import { Storage } from "aws-amplify";
import Modal from "../modal/modal";

const UploadModal = () => {
  const [imageKeys, setImageKeys] = useState<S3ProviderListOutputItem[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchImages = async () => {
    const { results } = await Storage.list("", { level: "private" });
    setImageKeys(results);
    const s3Images = await Promise.all(
      results.map(
        async (image) => await Storage.get(image.key!, { level: "private" })
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

  const toggleUploadWindow = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
      setIsOpen(false);
  };

  const UploadWindow = 
     (
      <div
        style={{
            width: "500px",
            height: "500px",
            background: "white",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
        }}
      >
        <div
          style={{
            background: "lightblue",
            padding: "10px",
            borderRadius: "20px 20px 0 0",
            textAlign: "center",
            fontSize: "24px",
        }}
        >
          Upload your images!
        </div>
        <div style={{ padding: "20px" }}>
          {/* Your content here */}
        </div>
      </div>
    );

  const UploadElement = (
    <FileUploader
      accessLevel="private"
      acceptedFileTypes={["image/*"]}
      variation="drop"
      onSuccess={onSuccess}
    />
  );


  return (
    <Modal
    isOpen={isOpen}
    children={UploadWindow}
    onClose={toggleUploadWindow}
  />
  );
};

export default UploadModal;