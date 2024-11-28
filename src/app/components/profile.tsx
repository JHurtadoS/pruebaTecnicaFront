"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { UserIcon } from "@heroicons/react/24/solid";

export const Profile = () => {
    const { status } = useSession();
    const router = useRouter();

    const isAuthenticated = status === "authenticated";

    const handleProfileClick = () => {
        if (isAuthenticated) {
            router.push("/profile");
        } else {
            signIn();
        }
    };

    const handleSignOut = async () => {
        if (isAuthenticated) {
            await signOut();
        }
    };

    const handleAction = (key: React.Key) => {
        switch (key) {
            case "profile":
                handleProfileClick();
                break;
            case "logout":
                handleSignOut();
                break;
            default:
                console.log("Unknown action");
        }
    };

    return (
        <Popover placement="bottom-end" showArrow offset={10}>
            <PopoverTrigger>
                <button
                    // onClick={handleProfileClick}
                    className={`p-1 rounded-full border-2 border-white ${isAuthenticated ? "bg-green-500" : ""}  transition-transform`}
                >
                    <UserIcon className="w-8 h-8 text-white translate-y-[7px]" />
                </button>
            </PopoverTrigger>

            <PopoverContent className="p-0" >
                {/* <div className="px-4 py-2 w-[180px]">

                </div> */}
                <Listbox
                    aria-label="Profile actions"
                    onAction={(key) => handleAction(key)}
                    className="w-full p-0 min-w-32 min-h-32"
                >
                    {isAuthenticated ? (
                        <>
                            <ListboxItem className="text-black hover:!rounded-none h-10 p-0 hover:!bg-transparent
                             hover:!text-main text-center transition-colors" key="profile">Profile</ListboxItem>
                            <ListboxItem key="logout" className="text-black hover:!rounded-none h-10 p-0 hover:!bg-transparent
                             hover:!text-main text-center transition-colors" color="danger">
                                Logout
                            </ListboxItem>
                        </>
                    ) : (
                        <ListboxItem key="profile"
                            className=" text-black hover:!rounded-none h-10 p-0 hover:!bg-transparent
                             hover:!text-main text-center transition-colors" >
                            <span className=" font-medium">Identificate</span>
                        </ListboxItem>
                    )}
                </Listbox>
            </PopoverContent>
        </Popover>
    );
};

export default Profile;
