/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ImagePreviewOverridesProps = {
    ImagePreview?: PrimitiveOverrideProps<ViewProps>;
    ImagePlaceholder?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<FlexProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
    Interaction?: PrimitiveOverrideProps<FlexProps>;
    "Copy Link"?: PrimitiveOverrideProps<FlexProps>;
    Group36562770?: PrimitiveOverrideProps<ViewProps>;
    Vector36562771?: PrimitiveOverrideProps<IconProps>;
    Vector36562772?: PrimitiveOverrideProps<IconProps>;
    Details?: PrimitiveOverrideProps<FlexProps>;
    Group36562709?: PrimitiveOverrideProps<ViewProps>;
    Vector36562710?: PrimitiveOverrideProps<IconProps>;
    Vector36562711?: PrimitiveOverrideProps<IconProps>;
    Vector36562712?: PrimitiveOverrideProps<IconProps>;
    Vector36562713?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ImagePreviewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ImagePreviewOverridesProps | undefined | null;
}>;
export default function ImagePreview(props: ImagePreviewProps): React.ReactElement;
