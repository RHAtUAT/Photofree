/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";

export default function CloseButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Close: {}, CloseButton: {} },
      variantValues: { button: "Default" },
    },
  ];

  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-end"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="10px"
      padding="12px 12px 12px 12px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      onClick={() => alert('📸 Say cheese!')}
      {...getOverrideProps(overrides, "CloseButton")}
      {...rest}
    >
      <Button
        width="24px"
        height="24px"
        src="public\favicon.ico"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="contain"
        {...getOverrideProps(overrides, "Close")}
      ></Button>
    </Flex>
  );
}
