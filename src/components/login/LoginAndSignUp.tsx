import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";

export default function LoginAndSignUp() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="max-w-md w-full rounded-xl bg-white p-6 shadow-md"
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      style={{ perspective: 1000 }}
      layout>
      <AnimatePresence mode="wait">
        {isFlipped ? (
          <motion.div
            key="signup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="transform rotate-y-180 delay-75"
            layout>
            <SignUpForm handleLoginClick={handleFlip} />
          </motion.div>
        ) : (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            layout>
            <LoginForm handleRegisterClick={handleFlip} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
