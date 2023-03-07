import { useState } from "react";
import { S3ProviderListOutputItem } from "@aws-amplify/storage";
import { Card, Flex, Heading, Image } from "@aws-amplify/ui-react";
import ImageModal from "./components/modals/image-modal/imageModal";

export function ImageCard({
  item,
  index,
  imageKeys,
}: {
  index: number;
  item: string;
  imageKeys: S3ProviderListOutputItem[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  
  console.log("open:" + isOpen)
  const handleClose = () => {
    setIsOpen(false);
  };
  
  let filename = imageKeys[index]?.key 
  if (filename == undefined) filename = "None";

  return (
    <>
      <Card
        lineHeight="small"
        borderRadius="10px"
        boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
        backgroundColor={"#FFFFFF"}
        onClick={() => setIsOpen(true)}
        style={{cursor: "pointer"}}
      >
      <Flex
        gap="xxs"
        direction="column"
        style={{ height: '100%' }}
      >
        <Image
          alt={filename}
          width="300"
          height="300"
          src={item}
          sizes="50vw"
          borderRadius="10px"
          objectFit="contain"
        />
        <Flex
          alignItems="flex-end"
          style={{ flexGrow: 1 }}
        >
          <Heading
            position="relative"
            level={5}
            isTruncated={true}
          >
            {filename.replace(/\.[^/.]+$/, "")}
          </Heading>
        </Flex>
      </Flex>
      </Card>
        <ImageModal
          isOpen={isOpen}
          src={item}
          alt={filename}
          onClose={handleClose}
          size={(imageKeys[index]?.size ?? "0").toString()+ "kb"}
          key={filename}
        />
    </>
  );
}