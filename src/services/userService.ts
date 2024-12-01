import { axiosPublic } from "../utils/axios";


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