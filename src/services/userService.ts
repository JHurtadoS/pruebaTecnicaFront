import { LoginFormInputs } from "@/app/components/types/auth";
import { axiosPublic } from "../utils/axios";

export const authenticateUser = async (
  data: LoginFormInputs,
): Promise<{ success: boolean; token?: string; message?: string }> => {
  try {
    const response = await axiosPublic.post("/auth/login", data);

    if (response.status === 200) {
      const { token } = response.data;
      return { success: true, token };
    }

    return { success: false, message: "Authentication failed." };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while logging in.",
    };
  }
};

export const registerUser = async (
  email: string
): Promise<{ success: boolean; message?: string }> => {
  try {
    const response = await axiosPublic.post("/auth/register", { email });

    if (response.status === 201) {
      return { success: true, message: "Registration successful. Check your email for confirmation." };
    }

    return { success: false, message: "Registration failed." };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);

    return {
      success: false,
      message: error.response?.data?.message || "An error occurred while registering.",
    };
  }
};