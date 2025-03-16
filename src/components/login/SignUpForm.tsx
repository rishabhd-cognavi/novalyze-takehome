import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CompanyIcon from "../../img/icon.png";
import { AnimatePresence, motion } from "motion/react";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

interface SignUpFormProps {
  handleLoginClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ handleLoginClick }) => {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: "",
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isVisible, setisVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setisVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isVisible]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    setisVisible((prev) => !prev);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative w-full" style={{ backfaceVisibility: "hidden" }}>
      <div className="flex justify-center flex-col items-center">
        <img src={CompanyIcon} className="w-12 h-12 mb-5" alt="company icon" />
        <h2 className="text-2xl text-center font-bold text-gray-900">
          Welcome to Signup
        </h2>
        <p className="text-center text-gray-500 text-sm mt-2">
          Create your account to continue
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300  p-2"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300  p-2"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300  p-2"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500">
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-5 bg-primary text-white py-2 px-4 rounded-lg hover:bg-purple-700">
          Sign Up
        </button>
      </form>

      <p className="text-center text-gray-500 text-sm mt-10">
        Already have an account?{" "}
        <a href="#" className="text-primary" onClick={handleLoginClick}>
          Login
        </a>
      </p>
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: 0 }}
            className="w-md h-10 bg-green-300 text-green-700 absolute -top-20 -right-6 rounded p-2 text-center"
            key="box">
            Successfully Created New User
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { SignUpForm };
