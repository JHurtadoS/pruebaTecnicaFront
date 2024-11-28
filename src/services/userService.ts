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
