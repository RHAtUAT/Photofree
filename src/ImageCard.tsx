import { useState } from "react";
import { S3ProviderListOutputItem } from "@aws-amplify/storage";
import { Card, Flex, Heading, Image } from "@aws-amplify/ui-react";
import ImageModal from "./ImageModal";

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

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Card
        lineHeight="small"
        borderRadius="10px"
        boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
        backgroundColor={"#FFFFFF"}
        onClick={() => setIsOpen(!isOpen)}
        style={{cursor: "pointer"}}
      >
      <Flex
        gap="xxs"
        direction="column"
        style={{ height: '100%' }}
      >
        <Image
          alt={imageKeys[index]?.key}
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
            {imageKeys[index]?.key}
          </Heading>
        </Flex>
      </Flex>
      </Card>
      {isOpen && (
        <ImageModal
          isOpen={isOpen}
          src={item}
          alt={imageKeys[index]?.key ?? ""}
          onClose={handleClose}
          size={(imageKeys[index]?.size ?? "").toString()+ "kb"}
          key={imageKeys[index]?.key ?? ""}
        />
      )}
    </>
  );
}