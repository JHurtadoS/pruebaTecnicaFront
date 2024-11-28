"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFormInputs } from "../types/auth";
import { Button } from "@nextui-org/button";
import { Input, Spacer } from "@nextui-org/react";
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
      className="space-y-4 max-w-md mx-auto bg-gray-100 p-4 rounded-md shadow-md"
    >
      <h1 className="text-2xl font-bold text-center text-primary">Login</h1>

      {serverError && <p className="text-red-500 text-center">{serverError}</p>}

      {/* Email */}
      <div>
        <Input
          type="email"
          label="Correo Electrónico"
          placeholder="Introduce tu correo electrónico"
          fullWidth
          isClearable
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

      <Spacer y={1} />

      {/* Password */}
      <div>
        <Input
          type="password"
          label="Contraseña"
          placeholder="Introduce tu contraseña"
          fullWidth
          isClearable
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

      <Spacer y={1.5} />

      <Button
        type="submit"
        fullWidth
        color="primary"
        isLoading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
