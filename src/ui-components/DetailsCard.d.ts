/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DetailsCardOverridesProps = {
    DetailsCard?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    CloseButton?: PrimitiveOverrideProps<ButtonProps>;
    Details?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    DateUploaded?: PrimitiveOverrideProps<TextProps>;
    Resolution?: PrimitiveOverrideProps<TextProps>;
    FileSize?: PrimitiveOverrideProps<TextProps>;
    FileName?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DetailsCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DetailsCardOverridesProps | undefined | null;
}>;
export default function DetailsCard(props: DetailsCardProps): React.ReactElement;
