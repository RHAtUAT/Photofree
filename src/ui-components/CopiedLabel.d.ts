/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CopiedLabelOverridesProps = {
    CopiedLabel?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    CopiedText?: PrimitiveOverrideProps<TextProps>;
    Triangle?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CopiedLabelProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CopiedLabelOverridesProps | undefined | null;
}>;
export default function CopiedLabel(props: CopiedLabelProps): React.ReactElement;
