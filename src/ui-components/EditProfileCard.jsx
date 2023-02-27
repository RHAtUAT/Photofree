/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Flex,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function EditProfileCard(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="580px"
      height="535px"
      justifyContent="flex-start"
      alignItems="flex-end"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="20px"
      padding="15px 15px 15px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "EditProfileCard")}
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
          borderRadius="10px"
          padding="7px 15px 7px 15px"
          top="0px"
          right="0px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor="rgba(255,255,255,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="X"
          {...getOverrideProps(overrides, "CloseButton")}
        ></Button>
        <View
          width="530px"
          height="375px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="56px"
          bottom="74px"
          left="10px"
          right="10px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ProfileSection")}
        >
          <Text
            fontFamily="Inter"
            fontSize="36px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="437px"
            height="30px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit Profile"
            {...getOverrideProps(overrides, "Edit Profile")}
          ></Text>
          <Divider
            width="530px"
            position="absolute"
            top="44px"
            left="0px"
            right="0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider29766917")}
          ></Divider>
          <Flex
            gap="16px"
            direction="row"
            width="530px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            position="absolute"
            top="69px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Profile")}
          >
            <Image
              width="96px"
              height="96px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              borderRadius="160px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "image")}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="22px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              textDecoration="underline"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Upload New Image"
              {...getOverrideProps(overrides, "UploadImage")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="530px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="189px"
            left="0px"
            right="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Forms")}
          >
            <TextField
              label="Name"
              placeholder="John Doe"
              width="unset"
              shrink="0"
              alignSelf="stretch"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "NameField")}
            ></TextField>
            <TextField
              label="Email"
              placeholder="john.doe@awsamplify.com"
              width="unset"
              shrink="0"
              alignSelf="stretch"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "EmailField")}
            ></TextField>
          </Flex>
          <Divider
            width="530px"
            position="absolute"
            top="373px"
            left="0px"
            right="0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider29766925")}
          ></Divider>
        </View>
        <Button
          position="absolute"
          borderRadius="30px"
          bottom="0px"
          left="0px"
          backgroundColor="rgba(0,85,102,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          {...getOverrideProps(overrides, "SaveButon")}
        ></Button>
      </View>
    </Flex>
  );
}
