/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, View } from "@aws-amplify/ui-react";
export default function ImagePreview(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="480px"
      height="550px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ImagePreview")}
      {...rest}
    >
      <View
        width="451.3px"
        height="457.49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2.4%"
        bottom="14.42%"
        left="3.09%"
        right="2.89%"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(248,248,248,1)"
        {...getOverrideProps(overrides, "ImagePlaceholder")}
      ></View>
      <Flex
        gap="10px"
        direction="column"
        width="480px"
        height="550px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        bottom="0px"
        left="0px"
        right="0px"
        borderRadius="20px"
        padding="10px 10px 5px 10px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card")}
      >
        <Image
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
          boxShadow="0px 10px 15px rgba(0.7647058963775635, 0.7254902124404907, 0.686274528503418, 0.6299999952316284)"
          borderRadius="12px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "Image")}
        ></Image>
        <Flex
          gap="380px"
          direction="row"
          width="455px"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="10px 0px 10px 0px"
          backgroundColor="rgba(255,255,255,0)"
          {...getOverrideProps(overrides, "Interaction")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="32px"
            height="32px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Copy Link")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="32px"
              height="32px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group36562770")}
            >
              <Icon
                width="26.03px"
                height="20.51px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 26.034423828125,
                  height: 20.5128173828125,
                }}
                paths={[
                  {
                    d: "M16.7364 20.5128L13.0172 20.5128C12.4073 20.5128 11.9014 19.9549 11.9014 19.2821C11.9014 18.6092 12.4073 18.0513 13.0172 18.0513L16.7364 18.0513C20.6341 18.0513 23.8029 14.5559 23.8029 10.2564C23.8029 5.95692 20.6341 2.46154 16.7364 2.46154L9.298 2.46154C5.40028 2.46154 2.23152 5.95692 2.23152 10.2564C2.23152 12.0615 2.81172 13.8174 3.85309 15.2123C4.23989 15.7374 4.18038 16.5087 3.70432 16.9518C3.22827 17.3785 2.52906 17.3128 2.12738 16.7877C0.758717 14.9497 0 12.6359 0 10.2564C0 4.59487 4.1655 0 9.298 0L16.7364 0C21.8689 0 26.0344 4.59487 26.0344 10.2564C26.0344 15.9179 21.8689 20.5128 16.7364 20.5128Z",
                    fill: "rgba(13,26,38,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="35.9%"
                left="0%"
                right="18.64%"
                {...getOverrideProps(overrides, "Vector36562771")}
              ></Icon>
              <Icon
                width="26.05px"
                height="20.51px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 26.04931640625,
                  height: 20.5128173828125,
                }}
                paths={[
                  {
                    d: "M16.7364 20.5128L9.298 20.5128C4.1655 20.5128 0 15.9179 0 10.2564C0 4.59487 4.1655 0 9.298 0L13.0172 0C13.6271 0 14.133 0.557949 14.133 1.23077C14.133 1.90359 13.6271 2.46154 13.0172 2.46154L9.298 2.46154C5.40028 2.46154 2.23152 5.95692 2.23152 10.2564C2.23152 14.5559 5.40028 18.0513 9.298 18.0513L16.7364 18.0513C20.6341 18.0513 23.8029 14.5559 23.8029 10.2564C23.8029 8.45128 23.2227 6.69538 22.1813 5.30051C21.7945 4.77538 21.854 4.0041 22.3301 3.56103C22.8061 3.11795 23.5053 3.2 23.907 3.72513C25.2906 5.56308 26.0493 7.87692 26.0493 10.2564C26.0344 15.9179 21.8689 20.5128 16.7364 20.5128Z",
                    fill: "rgba(13,26,38,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="35.9%"
                bottom="0%"
                left="18.6%"
                right="0%"
                {...getOverrideProps(overrides, "Vector36562772")}
              ></Icon>
            </View>
          </Flex>
          <Flex
            padding="0px 0px 0px 0px"
            width="32.03px"
            height="32px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Details")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="32.03px"
              height="32px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group36562709")}
            >
              <Icon
                width="32.03px"
                height="32px"
                viewBox={{ minX: 0, minY: 0, width: 32.025390625, height: 32 }}
                paths={[
                  {
                    d: "M20.4814 32L11.544 32C3.45577 32 0 28.547 0 20.4651L0 11.5349C0 3.45302 3.45577 0 11.544 0L20.4814 0C28.5696 0 32.0254 3.45302 32.0254 11.5349L32.0254 20.4651C32.0254 28.547 28.5696 32 20.4814 32ZM11.544 2.23256C4.6772 2.23256 2.23433 4.67349 2.23433 11.5349L2.23433 20.4651C2.23433 27.3265 4.6772 29.7674 11.544 29.7674L20.4814 29.7674C27.3482 29.7674 29.7911 27.3265 29.7911 20.4651L29.7911 11.5349C29.7911 4.67349 27.3482 2.23256 20.4814 2.23256L11.544 2.23256Z",
                    fill: "rgba(13,26,38,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector36562710")}
              ></Icon>
              <Icon
                width="2.98px"
                height="2.98px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 2.97900390625,
                  height: 2.97674560546875,
                }}
                paths={[
                  {
                    d: "M1.48955 2.97674C0.655404 2.97674 0 2.30698 0 1.48837C0 0.669767 0.670299 0 1.48955 0C2.30881 0 2.97911 0.669767 2.97911 1.48837C2.97911 2.30698 2.3237 2.97674 1.48955 2.97674Z",
                    fill: "rgba(13,26,38,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="45.35%"
                bottom="45.35%"
                left="45.35%"
                right="45.35%"
                {...getOverrideProps(overrides, "Vector36562711")}
              ></Icon>
              <Icon
                width="2.98px"
                height="2.98px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 2.97900390625,
                  height: 2.97674560546875,
                }}
                paths={[
                  {
                    d: "M1.48955 2.97674C0.655404 2.97674 0 2.30698 0 1.48837C0 0.669767 0.670299 0 1.48955 0C2.30881 0 2.97911 0.669767 2.97911 1.48837C2.97911 2.30698 2.3237 2.97674 1.48955 2.97674Z",
                    fill: "rgba(13,26,38,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="45.35%"
                bottom="45.35%"
                left="63.95%"
                right="26.74%"
                {...getOverrideProps(overrides, "Vector36562712")}
              ></Icon>
              <Icon
                width="2.98px"
                height="2.98px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 2.97900390625,
                  height: 2.97674560546875,
                }}
                paths={[
                  {
                    d: "M1.48955 2.97674C0.655404 2.97674 0 2.30698 0 1.48837C0 0.669767 0.670299 0 1.48955 0C2.30881 0 2.97911 0.669767 2.97911 1.48837C2.97911 2.30698 2.3237 2.97674 1.48955 2.97674Z",
                    fill: "rgba(13,26,38,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="45.35%"
                bottom="45.35%"
                left="26.74%"
                right="63.95%"
                {...getOverrideProps(overrides, "Vector36562713")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
