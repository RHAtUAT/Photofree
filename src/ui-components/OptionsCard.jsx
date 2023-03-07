/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function OptionsCard(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="column"
      width="unset"
      height="102px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="20px"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "OptionsCard")}
      {...rest}
    >
      <Button
        borderRadius="21px"
        shrink="0"
        alignSelf="stretch"
        size="default"
        isDisabled={false}
        variation="default"
        children="Edit Profile"
        {...getOverrideProps(overrides, "DetailsButton")}
      ></Button>
      <Button
        borderRadius="20px"
        shrink="0"
        alignSelf="stretch"
        backgroundColor="rgba(0,85,102,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Sign Out"
        {...getOverrideProps(overrides, "SignOutButton")}
      ></Button>
    </Flex>
  );
}
