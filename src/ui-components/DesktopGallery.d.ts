/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
import { NavBarProps } from "./NavBar";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DesktopGalleryOverridesProps = {
    DesktopGallery?: PrimitiveOverrideProps<ViewProps>;
    ImageCollection?: PrimitiveOverrideProps<ViewProps>;
    list?: PrimitiveOverrideProps<ViewProps>;
    NavBar?: NavBarProps;
} & EscapeHatchProps;
export declare type DesktopGalleryProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DesktopGalleryOverridesProps | undefined | null;
}>;
export default function DesktopGallery(props: DesktopGalleryProps): React.ReactElement;
