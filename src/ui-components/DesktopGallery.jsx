/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavBar from "./NavBar";
import { Flex, View } from "@aws-amplify/ui-react";
export default function DesktopGallery(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="862px"
      height="635px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DesktopGallery")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="862px"
        height="635px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="0px"
        bottom="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <View
          width="unset"
          height="65px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "NavBarContainer")}
        >
          <NavBar
            display="flex"
            gap="37px"
            direction="row"
            width="862px"
            height="65px"
            justifyContent="flex-start"
            alignItems="center"
            position="absolute"
            top="0px"
            left="0px"
            right="0px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            padding="10px 32px 10px 32px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "NavBar")}
          ></NavBar>
        </View>
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
          {...getOverrideProps(overrides, "BackgroundContainer")}
        >
          <View
            width="362px"
            height="570px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="570px"
            bottom="-570px"
            left="250px"
            right="250px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(239,240,240,1)"
            {...getOverrideProps(overrides, "Background")}
          ></View>
        </View>
      </Flex>
    </View>
  );
}
