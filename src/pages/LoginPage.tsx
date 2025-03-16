import React from "react";
import LoginAndSignUp from "../components/login/LoginAndSignUp";
import { useTheme } from "../context/ThemeContext";
import { FaMoon } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";

const Login: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* <Header /> */}
      <div className="relative flex h-screen items-center justify-center bg-slate-100  dark:bg-gray-background-dark">
        <div className="absolute top-0 right-0 m-10">
          <button
            onClick={toggleTheme}
            className="bg-zinc-500 dark:bg-zinc-200 p-2 rounded shadow-md dark:shadow-amber-500/50 shadow-sky-500/50">
            {theme === "light" ? (
              <FaMoon className="size-5" />
            ) : (
              <MdSunny className="size-5" />
            )}
          </button>
        </div>
        <LoginAndSignUp />
      </div>
    </>
  );
};

export default Login;
