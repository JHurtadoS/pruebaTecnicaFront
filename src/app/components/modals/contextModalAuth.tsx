"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface ModalContentProps {
    rightTitle?: string;
    rightDescription?: string;
    rightImage?: string;
    children?: ReactNode;
}

interface ModalContextProps {
    isOpen: boolean;
    // eslint-disable-next-line no-unused-vars
    openModal: (content: ModalContentProps) => void;
    closeModal: () => void;
    content: ModalContentProps | null;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<ModalContentProps | null>(null);

    const openModal = (content: ModalContentProps) => {
        setContent(content);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setContent(null);
    };

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, content }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

