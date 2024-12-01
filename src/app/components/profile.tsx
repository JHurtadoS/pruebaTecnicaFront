"use client";

import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent, Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { UserIcon } from "@heroicons/react/24/solid";
import { useModal } from "./modals/contextModalAuth";
import { modalContentLogin } from "./modals/modalData";
import { useSession } from "./context/authContext";
import { useRouter } from "next/navigation";

export const Profile: React.FC = () => {
    const { isLoggedIn, logout } = useSession();
    const { openModal } = useModal();
    const [isPopoverOpen, setPopoverOpen] = useState(false);
    const router = useRouter();

    const handleProfileClick = () => {
        setPopoverOpen(false);
        openModal(modalContentLogin);
    };

    const handleSignOut = () => {
        if (isLoggedIn) {
            logout();
            setPopoverOpen(false);
            router.refresh()
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
        <Popover
            isOpen={isPopoverOpen}
            onOpenChange={(open) => setPopoverOpen(open)}
            placement="bottom-end"
            showArrow
            offset={10}
        >
            <PopoverTrigger>
                <button
                    className={`p-1 rounded-full border-2 border-white ${isLoggedIn ? "bg-main" : ""} transition-transform`}
                >
                    <UserIcon className="w-8 h-8 text-white translate-y-[7px]" />
                </button>
            </PopoverTrigger>

            <PopoverContent className="p-0">
                <Listbox
                    aria-label="Profile actions"
                    onAction={(key) => handleAction(key)}
                    className="w-full p-0 min-w-32 min-h-32"
                >
                    {isLoggedIn ? (
                        <ListboxSection >
                            <ListboxItem
                                key="profileLogged"
                                className="text-black hover:!rounded-none h-10 p-0 hover:!bg-transparent hover:!text-main text-center transition-colors"
                            >
                                <span>Welcome </span>
                            </ListboxItem>


                            <ListboxItem
                                key="logout"
                                className="text-black hover:!rounded-none h-10 p-0 hover:!bg-transparent hover:!text-main text-center transition-colors"
                                onClick={handleSignOut}
                            >
                                Cerrar sesion
                            </ListboxItem>
                        </ListboxSection>

                    ) : (
                        <ListboxItem
                            key="profile"
                            className="text-black hover:!rounded-none h-10 p-0 hover:!bg-transparent hover:!text-main text-center transition-colors"
                            onClick={handleProfileClick}
                        >
                            <span className="font-medium">Identifícate</span>
                        </ListboxItem>
                    )}
                </Listbox>
            </PopoverContent>
        </Popover>
    );
};

export default Profile;
