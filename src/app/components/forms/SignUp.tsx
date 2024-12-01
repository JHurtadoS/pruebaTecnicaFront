"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { validationRules } from "./validationRules";
import { registerUser } from "@/services/authApi";
import { useSession } from "../context/authContext";

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, touchedFields },
        trigger,
    } = useForm<{ email: string; password: string }>();

    const { login } = useSession();
    const [serverError, setServerError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const {
        required: emailRequired,
        pattern: { value: emailPattern, message: emailPatternMessage },
    } = validationRules.email;

    const {
        required: passwordRequired,
        minLength: { value: passwordMinLength, message: passwordMinLengthMessage },
    } = validationRules.password;

    const onSubmit = async ({ email, password }: { email: string; password: string }) => {
        setServerError(null);
        setSuccessMessage(null);

        try {
            const response = await registerUser(email, password);
            console.log(response)
            if (!(response.status === 200 || response.status === 201)) {
                setServerError("Error while registering.");
                return;
            }

            setSuccessMessage("Registration successful! Logging you in...");


            const loggedIn = await login(email, password);

            if (!loggedIn) {
                setServerError("Failed to log in after registration.");
            }
        } catch (error) {
            console.error(error)
            setServerError("An unexpected error occurred.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center space-y-6 max-w-md bg-transparent h-full justify-center"
        >
            {serverError && (
                <p className="text-base text-red-500 font-normal mt-1">{serverError}</p>
            )}

            {successMessage && (
                <p className="text-base text-green-500 font-normal mt-1">{successMessage}</p>
            )}


            <div className="w-full">
                <Input
                    type="email"
                    placeholder="Enter your Email"
                    fullWidth
                    size="lg"
                    isClearable
                    classNames={{
                        errorMessage: "text-base text-main font-normal mt-1",
                        inputWrapper: "rounded-none rounded-t-md",
                    }}
                    onFocusChange={(isFocused) => {
                        if (!isFocused) {
                            trigger("email");
                        }
                    }}
                    {...register("email", {
                        required: emailRequired,
                        validate: (value) =>
                            value && !emailPattern.test(value)
                                ? emailPatternMessage
                                : undefined,
                    })}
                    errorMessage={
                        touchedFields.email && errors.email
                            ? errors.email.message
                            : undefined
                    }
                    isInvalid={touchedFields.email && errors.email ? true : false}
                />
            </div>


            <div className="w-full">
                <Input
                    type="password"
                    placeholder="Enter your Password"
                    fullWidth
                    size="lg"
                    isClearable
                    classNames={{
                        errorMessage: "text-base text-main font-normal mt-1",
                        inputWrapper: "rounded-none rounded-t-md",
                    }}
                    onFocusChange={(isFocused) => {
                        if (!isFocused) {
                            trigger("password");
                        }
                    }}
                    {...register("password", {
                        required: passwordRequired,
                        validate: (value) =>
                            value && value.length < passwordMinLength
                                ? passwordMinLengthMessage
                                : undefined,
                    })}
                    errorMessage={
                        touchedFields.password && errors.password
                            ? errors.password.message
                            : undefined
                    }
                    isInvalid={touchedFields.password && errors.password ? true : false}
                />
            </div>


            <Button
                type="submit"
                fullWidth
                size="lg"
                className="bg-yellow-500 text-black hover:bg-yellow-600 transition-colors"
                isLoading={isSubmitting}
                disabled={isSubmitting}
            >
                {isSubmitting ? "Registering..." : "Register"}
            </Button>
        </form>
    );
};

export default SignUpForm;
