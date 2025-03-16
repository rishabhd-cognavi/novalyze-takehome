import { FaGithub, FaGoogle, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CompanyIcon from "../../img/icon.png";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  handleRegisterClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function LoginForm({ handleRegisterClick }: LoginFormProps) {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignIn = () => {
    navigate("/");
  };
  const handleForgetPassword = () => {
    navigate("/forget-password");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-full" style={{ backfaceVisibility: "hidden" }}>
      <div className="flex flex-col items-center justify-center">
        <img src={CompanyIcon} className="mb-5 h-12 w-12" alt="company icon" />
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Welcome to Login
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Login to your account to continue
        </p>
      </div>

      <form className="mt-4" onSubmit={handleSignIn}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            required
            className="w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              required
              className="w-full rounded-md border border-gray-300 p-2"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5 text-gray-500"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="flex justify-end">
            <button
              className="text-primary mt-2 inline-block text-sm"
              onClick={handleForgetPassword}
            >
              Forgot Password?
            </button>
          </div>
        </div>
        <button className="bg-primary w-full rounded-md p-2 text-white hover:bg-purple-700">
          Login
        </button>
      </form>

      <>
        <div className="relative my-10 border-b border-gray-200">
          <span className="absolute -bottom-[.7rem] left-1/2 -translate-x-1/2 transform bg-white px-2 text-sm text-gray-500">
            Or login with
          </span>
        </div>

        <div className="mt-4 mb-5 grid grid-cols-3 justify-between gap-5">
          <button
            className="flex items-center justify-center rounded-md bg-gray-100 p-2 px-6 hover:bg-gray-400"
            onClick={handleForgetPassword}
          >
            <FaXTwitter />
          </button>
          <button
            className="flex items-center justify-center rounded-md bg-gray-100 p-2 px-6 hover:bg-gray-400"
            onClick={handleForgetPassword}
          >
            <FaGoogle />
          </button>
          <button
            className="flex items-center justify-center rounded-md bg-gray-100 p-2 px-6 hover:bg-gray-400"
            onClick={handleForgetPassword}
          >
            <FaGithub />
          </button>
        </div>
      </>

      <p className="text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <a href="#" className="text-primary" onClick={handleRegisterClick}>
          Register
        </a>
      </p>
    </div>
  );
}
