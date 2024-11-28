"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFormInputs } from "../types/auth";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { validationRules } from "./validationRules";
import { authenticateUser } from "@/services/userService";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    trigger,
  } = useForm<LoginFormInputs>();

  const [serverError, setServerError] = useState<string | null>(null);

  const {
    required: emailRequired,
    pattern: { value: emailPattern, message: emailPatternMessage },
  } = validationRules.email;

  const {
    required: passwordRequired,
    minLength: { value: passwordMinLength, message: passwordMinLengthMessage },
  } = validationRules.password;

  const onSubmit = async (data: LoginFormInputs) => {
    setServerError(null);

    const response = await authenticateUser(data);

    if (!response.success) {
      setServerError(response.message || "Invalid credentials.");
      return;
    }

    console.log("Logged in successfully, token:", response.token);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center space-y-6 max-w-md bg-transparent h-full justify-center"
    >
      <h1 className="text-lg font-light text-white text-center">
        We love having you back
      </h1>

      {serverError && (
        <p className="text-base text-main font-normal mt-1">{serverError}</p>
      )}

      {/* Email */}
      <div className="w-full">
        <Input
          type="email"
          placeholder="Email"
          fullWidth
          size="lg"
          isClearable
          className=" text-white"
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

      {/* Password */}
      <div className="w-full">
        <Input
          type="password"
          placeholder="Password"
          fullWidth
          size="lg"
          isClearable
          className=" text-white "

          onFocusChange={(isFocused) => {
            if (!isFocused) {
              trigger("password");
            }
          }}
          classNames={{ errorMessage: " text-base text-main font-normal mt-1", inputWrapper: "rounded-none rounded-t-md" }}
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

      {/* Submit Button */}
      <Button
        type="submit"
        fullWidth
        size="lg"
        className="bg-yellow-500 text-black hover:bg-yellow-600 transition-colors"
        isLoading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Logging in..." : "Continue"}
      </Button>


    </form>
  );
};

export default LoginForm;
