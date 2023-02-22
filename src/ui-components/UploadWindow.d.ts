/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CloseButtonProps } from "./CloseButton";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UploadWindowOverridesProps = {
    UploadWindow?: PrimitiveOverrideProps<ViewProps>;
    CloseButton?: CloseButtonProps;
    "Frame 420"?: PrimitiveOverrideProps<FlexProps>;
    WindowText?: PrimitiveOverrideProps<FlexProps>;
    "Upload Images to your gallery"?: PrimitiveOverrideProps<TextProps>;
    UploadAreaFrame?: PrimitiveOverrideProps<FlexProps>;
    UploadArea?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type UploadWindowProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UploadWindowOverridesProps | undefined | null;
}>;
export default function UploadWindow(props: UploadWindowProps): React.ReactElement;
