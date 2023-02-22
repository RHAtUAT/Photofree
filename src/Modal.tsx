import React, { useState, useEffect, MouseEventHandler } from "react";
import { View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import { UploadWindow } from "./ui-components";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '20px',
    zIndex: 1000,
    borderRadius: '20px'
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

interface ModalProps {
    open: boolean;
    children?: React.ReactNode;
    onClose: MouseEventHandler;
}

export default function Modal({open, children, onClose}: ModalProps) {
    
    const [isOpen, setIsOpen] = useState(false)

    if (!open) return null;

    return (
        <>
            <View style={OVERLAY_STYLES} />
            <View style={MODAL_STYLES}>
                <UploadWindow>
                {children}
                </UploadWindow>
            </View>
        </>
    );
}