"use client";

import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
} from "@nextui-org/react";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

type ModalLayoutProps = {
    isOpen: boolean;
    isLogin: boolean;
    rightImage: string;
    rightTitle: string;
    rightDescription: string;
    children: React.ReactNode;
    onClose: () => void;
    // eslint-disable-next-line no-unused-vars
    onSwitch: (isLogin: boolean) => void;
};

const ModalLayout: React.FC<ModalLayoutProps> = ({
    isOpen,
    isLogin,
    rightImage,
    rightTitle,
    rightDescription,
    children,
    onClose,
    onSwitch,
}) => {
    console.log(isOpen)
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={(state) => !state && onClose()}
            placement="center"
            backdrop="blur"
            size="5xl"
            classNames={{
                wrapper: `fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-md transition-opacity ${isOpen ? "opacity-100" : "opacity-0"
                    }`,
                base: "flex items-center justify-center",
                closeButton: "hidden"
            }}
        >
            <ModalContent className="flex flex-col md:flex-row h-[700px] shadow-lg bg-neutral-100/10">

                <div className="w-full md:w-1/2   flex flex-col justify-between p-8 relative h-full">

                    <ModalHeader className="absolute top-4 left-4">
                        <button
                            className="flex items-center gap-2 text-white hover:text-gray-300"
                            onClick={onClose}
                        >
                            <ArrowLeftIcon className="w-5 h-5" />
                            Back
                        </button>
                    </ModalHeader>


                    <div className="flex flex-col justify-center items-center gap-6 h-full">

                        <div className="flex mt-10 bg-neutral-900 rounded-xl">
                            <Button
                                color={isLogin ? "primary" : "default"}
                                onPress={() => onSwitch(true)}
                                className={` w-28 py-6 ${isLogin ? "bg-yellow-500" : "bg-neutral-800"} text-white`}
                            >
                                Log In
                            </Button>
                            <Button
                                color={!isLogin ? "primary" : "default"}
                                onPress={() => onSwitch(false)}
                                className={`w-28 py-6 ${!isLogin ? "bg-yellow-500" : "bg-neutral-800"} text-white`}
                            >
                                Sign Up
                            </Button>
                        </div>


                        <ModalBody className="text-center">
                            <>
                                {children}
                                <p className="text-sm text-white/50 text-center">
                                    For any questions, reach out to{" "}
                                    <a
                                        href="mailto:support@Quickbetdmovies.com"
                                        className="text-yellow-400 underline"
                                    >
                                        support@Quickbetdmovies.com
                                    </a>
                                </p>
                            </>
                        </ModalBody>

                    </div>
                </div>

                <div className="hidden md:flex w-1/2 bg-neutral-900 p-6 flex-col items-center justify-center text-center h-[95%] mr-4 rounded-r-lg">

                    <h2 className="text-xl font-bold text-white mt-6 mb-2">{rightTitle}</h2>
                    <p className="text-gray-400">{rightDescription}</p>

                    <Image
                        src={rightImage}
                        alt="Right Side Illustration"
                        width={400}
                        height={400}
                        style={{ objectFit: "contain", width: "400px", height: "400px" }}
                        className="rounded-lg"
                    />
                </div>
            </ModalContent>
        </Modal>
    );
};

export default ModalLayout;

