/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="37px"
      direction="row"
      width="1920px"
      height="65px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="10px 32px 10px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBar")}
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
        <Flex
          gap="37px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="-5.5px"
          left="1px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "LeftSection")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="5px"
            padding="8px 15px 8px 15px"
            backgroundColor="rgba(222,222,222,0)"
            {...getOverrideProps(overrides, "BrandButton")}
          >
            <View
              width="35px"
              height="35px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "logo")}
            >
              <Icon
                width="35px"
                height="35px"
                viewBox={{ minX: 0, minY: 0, width: 35, height: 35 }}
                paths={[
                  {
                    d: "M16.6225 1.60573C17.0017 0.911797 17.9983 0.911796 18.3775 1.60573L21.6361 7.56857C21.8416 7.94456 22.2638 8.14786 22.6859 8.07409L29.3795 6.90401C30.1585 6.76785 30.7799 7.547 30.4738 8.27615L27.8435 14.5416C27.6777 14.9367 27.782 15.3935 28.1028 15.6775L33.191 20.1813C33.7832 20.7054 33.5614 21.677 32.8005 21.8923L26.262 23.7424C25.8498 23.8591 25.5576 24.2254 25.5356 24.6533L25.1869 31.4395C25.1463 32.2293 24.2484 32.6617 23.6057 32.201L18.0825 28.2425C17.7343 27.9929 17.2657 27.9929 16.9175 28.2425L11.3943 32.201C10.7516 32.6617 9.85371 32.2293 9.81312 31.4395L9.46437 24.6533C9.44238 24.2254 9.15024 23.8591 8.73796 23.7424L2.19949 21.8923C1.43858 21.677 1.21682 20.7054 1.80896 20.1813L6.8972 15.6775C7.21803 15.3935 7.3223 14.9367 7.15645 14.5416L4.52624 8.27615C4.22014 7.547 4.8415 6.76785 5.62048 6.90401L12.3141 8.07409C12.7362 8.14786 13.1584 7.94456 13.3639 7.56857L16.6225 1.60573Z",
                    fill: "rgba(0,85,102,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="calc(50% - 17.5px - 0px)"
                left="0px"
                {...getOverrideProps(overrides, "Back")}
              ></Icon>
              <Icon
                width="25px"
                height="25px"
                viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
                paths={[
                  {
                    d: "M11.6225 1.60573C12.0017 0.911796 12.9983 0.911796 13.3775 1.60573L15.3562 5.22643C15.5617 5.60242 15.9838 5.80572 16.4059 5.73194L20.4704 5.02146C21.2493 4.8853 21.8707 5.66445 21.5646 6.3936L19.9675 10.1981C19.8017 10.5931 19.9059 11.05 20.2268 11.3339L23.3164 14.0687C23.9085 14.5928 23.6868 15.5644 22.9259 15.7797L18.9556 16.9031C18.5434 17.0198 18.2512 17.3861 18.2292 17.814L18.0175 21.9347C17.9769 22.7244 17.079 23.1568 16.4362 22.6961L13.0825 20.2925C12.7343 20.0429 12.2657 20.0429 11.9175 20.2925L8.56376 22.6961C7.92101 23.1568 7.02313 22.7244 6.98254 21.9347L6.77078 17.814C6.74879 17.3861 6.45664 17.0198 6.04436 16.9031L2.07413 15.7797C1.31322 15.5644 1.09146 14.5928 1.6836 14.0687L4.77323 11.3339C5.09407 11.05 5.19834 10.5931 5.03249 10.1981L3.43539 6.3936C3.1293 5.66445 3.75065 4.8853 4.52963 5.02146L8.5941 5.73194C9.01617 5.80572 9.43834 5.60242 9.64381 5.22643L11.6225 1.60573Z",
                    fill: "rgba(4,125,149,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="5px"
                left="5px"
                {...getOverrideProps(overrides, "Front")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="32px"
              fontWeight="500"
              color="rgba(13,26,38,1)"
              lineHeight="40px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Photofree"
              {...getOverrideProps(overrides, "label")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="32px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          position="absolute"
          top="0px"
          right="1px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "RightSection")}
        >
          <Button
            width="106px"
            height="40px"
            borderRadius="50px"
            shrink="0"
            backgroundColor="rgba(0,85,102,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Upload"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
          <Image
            width="45px"
            height="45px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "Image")}
          ></Image>
        </Flex>
      </View>
    </Flex>
  );
}
