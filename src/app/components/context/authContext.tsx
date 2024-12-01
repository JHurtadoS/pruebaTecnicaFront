/* eslint-disable no-unused-vars */
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { loginUser } from "@/services/authApi";


type User = {
    id: string;
    email: string;
    accessToken: string;
};


type SessionContextProps = {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isLoggedIn: boolean;
    addUser: (id: string, email: string, accessToken: string) => void;
};


const SessionContext = createContext<SessionContextProps | undefined>(undefined);


export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const isLoggedIn = !!user;


    const login = async (email: string, password: string): Promise<boolean> => {
        try {
            const response = await loginUser(email, password);
            setUser({
                id: response.user.id,
                email: response.user.email,
                accessToken: response.accessToken,
            });


            localStorage.setItem(
                "user",
                JSON.stringify({
                    id: response.user.id,
                    email: response.user.email,
                    accessToken: response.accessToken,
                })
            );

            return true;
        } catch (error) {
            console.error("Login error:", error);
            return false;
        }
    };


    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };


    const addUser = (id: string, email: string, accessToken: string) => {
        const newUser = { id, email, accessToken };
        setUser(newUser);


        localStorage.setItem("user", JSON.stringify(newUser));
    };


    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <SessionContext.Provider value={{ user, login, logout, isLoggedIn, addUser }}>
            {children}
        </SessionContext.Provider>
    );
};


export const useSession = (): SessionContextProps => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error("useSession must be used within a SessionProvider");
    }
    return context;
};
