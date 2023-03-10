/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function CloseButton(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CloseButton")}
      {...rest}
    >
      <Button
        borderRadius="11px"
        shrink="0"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        backgroundColor="rgba(255,255,255,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="X"
        {...getOverrideProps(overrides, "CloseButton36822874")}
      ></Button>
    </Flex>
  );
}
