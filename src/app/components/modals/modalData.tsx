import { ModalContentProps } from "./contextModalAuth";

export const modalContentLogin: ModalContentProps = {
    rightTitle: "Welcome Back!",
    rightDescription: "Log in to access your account and enjoy test.",
    rightImage: "/images/login_image.webp",
    children: (
        <div className="flex flex-col items-center gap-4">
            {/* Aquí integras el formulario de login */}
            <p className="text-white font-medium">We love having you back</p>
            <form className="flex flex-col gap-3 w-full max-w-sm">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none"
                />
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-400 transition"
                >
                    Log In
                </button>
            </form>
            <p className="text-sm text-gray-400">
                For any questions, reach out to <span className="text-yellow-500">support@quickbetmovies.com</span>
            </p>
        </div>
    ),
};

export const modalContentRegister: ModalContentProps = {
    rightTitle: "Join QuickBet Movies!",
    rightDescription: "Sign up to unlock a universe of cinematic delights!",
    rightImage: "/images/register_image.webp",
    children: (
        <div className="flex flex-col items-center gap-4">
            {/* Aquí integras el formulario de registro */}
            <p className="text-white font-medium">Create your account</p>
            <form className="flex flex-col gap-3 w-full max-w-sm">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none"
                />
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-400 transition"
                >
                    Sign Up
                </button>
            </form>
            <p className="text-sm text-gray-400">
                Already have an account?{" "}
                <span className="text-yellow-500 cursor-pointer hover:underline">
                    Log in here
                </span>
            </p>
        </div>
    ),
};
