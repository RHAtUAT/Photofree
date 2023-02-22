/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
import NavBar from "./NavBar";
export default function DesktopGallery(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="1080px"
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
      <View
        width="1116px"
        height="1649px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-65px"
        bottom="-504px"
        left="calc(50% - 558px - 0px)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "ImageCollection")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="0px"
        height="0px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="852.71px"
        left="978.25px"
        {...getOverrideProps(overrides, "list")}
      ></View>
      <NavBar
        display="flex"
        gap="37px"
        direction="row"
        width="1920px"
        height="68px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBar")}
      ></NavBar>
    </View>
  );
}
