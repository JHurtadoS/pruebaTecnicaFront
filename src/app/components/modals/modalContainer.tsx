"use client";

import React, { useState, useEffect } from "react";
import ModalLayout from "./modalAuth";
import { useModal } from "./contextModalAuth";
import LoginForm from "../forms/Login";
import SignUpForm from "../forms/SignUp";
import { useSession } from "../context/authContext";

const ModalContainer: React.FC = () => {
    const { isOpen, closeModal } = useModal();
    const { isLoggedIn } = useSession();
    const [isLogin, setIsLogin] = useState(true);

    const loginConfig = {
        rightTitle: "Welcome Back!",
        rightDescription: "Log in to continue enjoying our services.",
        rightImage: "/images/login_image.webp",
    };

    const signUpConfig = {
        rightTitle: "Join Us!",
        rightDescription: "Sign up to access exclusive content and features.",
        rightImage: "/images/register_image.webp",
    };

    const dynamicConfig = isLogin ? loginConfig : signUpConfig;

    const handleSwitch = (loginMode: boolean) => {
        setIsLogin(loginMode);
    };

    useEffect(() => {
        if (isLoggedIn) {
            closeModal();
        }
    }, [isLoggedIn, closeModal]);

    if (!isOpen) return null;

    return (
        <ModalLayout
            isOpen={isOpen}
            isLogin={isLogin}
            rightTitle={dynamicConfig.rightTitle}
            rightDescription={dynamicConfig.rightDescription}
            rightImage={dynamicConfig.rightImage}
            onClose={closeModal}
            onSwitch={handleSwitch}
        >
            {isLogin ? <LoginForm /> : <SignUpForm />}
        </ModalLayout>
    );
};

export default ModalContainer;
