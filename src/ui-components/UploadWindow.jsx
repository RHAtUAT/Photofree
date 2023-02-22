/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import CloseButton from "./CloseButton";
import { Flex, Text, View } from "@aws-amplify/ui-react";




export default function UploadWindow(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="950px"
      height="635px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UploadWindow")}
      {...rest}
    >
      <CloseButton
        display="flex"
        gap="0"
        position="absolute"
        top="5px"
        right="5px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        button="Default"
        {...getOverrideProps(overrides, "CloseButton")}
      ></CloseButton>
      <Flex
        gap="10px"
        direction="column"
        width="950px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="48px"
        left="0px"
        borderRadius="20px"
        right="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 420")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "WindowText")}
        >
          <Text
            fontSize="32px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.17px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Upload Images to your gallery"
            {...getOverrideProps(overrides, "Upload Images to your gallery")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="535px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "UploadAreaFrame")}
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
            borderRadius="20px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(248,248,248,1)"
            {...getOverrideProps(overrides, "UploadArea")}
          ></View>
        </Flex>
      </Flex>
    </View>
  );
}
