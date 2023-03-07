/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
export default function UploadWindow(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="13px"
      direction="column"
      width="955px"
      height="652px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="20px"
      padding="15px 15px 15px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UploadWindow")}
      {...rest}
    >
      <View
        width="unset"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Button
          position="absolute"
          borderRadius="11px"
          top="-1px"
          right="-1px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor="rgba(255,255,255,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="X"
          {...getOverrideProps(overrides, "CloseButton")}
        ></Button>
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.17px"
          width="925px"
          height="36px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="57px"
          left="0px"
          right="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Upload Images to your gallery"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <View
          width="925px"
          height="514px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="108px"
          bottom="0px"
          left="0px"
          right="0px"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(239,240,240,1)"
          {...getOverrideProps(overrides, "UploadSection")}
        ></View>
      </View>
    </Flex>
  );
}
