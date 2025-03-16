import { motion } from "motion/react";

export function MessageBox({
  sender,
  message,
}: {
  sender: string;
  message: string;
}) {
  return (
    <motion.div
      className={` ${
        sender === "user" ? "justify-end text-right" : "justify-start text-left"
      }`}
      initial={{ x: sender === "user" ? 100 : -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50 }}>
      <div
        className={`${
          sender === "user" ? "bg-primary text-white" : "bg-gray-200 text-black"
        } p-2 rounded-md inline-block z-10 relative`}>
        {message}
      </div>
    </motion.div>
  );
}
