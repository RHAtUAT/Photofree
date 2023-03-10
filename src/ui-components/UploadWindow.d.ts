/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UploadWindowOverridesProps = {
    UploadWindow?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    CloseButton?: PrimitiveOverrideProps<ButtonProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    UploadSection?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type UploadWindowProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: UploadWindowOverridesProps | undefined | null;
}>;
export default function UploadWindow(props: UploadWindowProps): React.ReactElement;
