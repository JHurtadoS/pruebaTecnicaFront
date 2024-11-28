"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { validationRules } from "./validationRules";
import { registerUser } from "@/services/userService";

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, touchedFields },
        trigger,
    } = useForm<{ email: string }>();

    const [serverError, setServerError] = useState<string | null>(null);

    const {
        required: emailRequired,
        pattern: { value: emailPattern, message: emailPatternMessage },
    } = validationRules.email;

    const onSubmit = async ({ email }: { email: string }) => {
        setServerError(null);

        const response = await registerUser(email);

        if (!response.success) {
            setServerError(response.message || "Error while registering.");
            return;
        }

        console.log("Registration successful:", response);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center space-y-6 max-w-md bg-transparent h-full justify-center"
        >



            {serverError && (
                <p className="text-base text-main font-normal mt-1">{serverError}</p>
            )}

            {/* Email Field */}
            <div className="w-full">
                <Input
                    type="email"
                    placeholder="Enter your Email"
                    fullWidth
                    size="lg"
                    isClearable
                    classNames={{ errorMessage: " text-base text-main font-normal mt-1", inputWrapper: "rounded-none rounded-t-md" }}

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

            {/* Submit Button */}
            <Button
                type="submit"
                fullWidth
                size="lg"
                className="bg-yellow-500 text-black hover:bg-yellow-600 transition-colors"
                isLoading={isSubmitting}
                disabled={isSubmitting}
            >
                {isSubmitting ? "Registering..." : "Register with your Email"}
            </Button>

            {/* Footer Text */}

        </form>
    );
};

export default SignUpForm;
