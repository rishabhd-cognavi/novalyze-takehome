import React from "react";
import { motion } from "motion/react";
import Header from "../components/layout/Header";
import PdfViewer from "../components/home/PdfViewer";
import ChatBox from "../components/home/ChatBox";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col h-[88.46vh] grow bg-slate-100 dark:bg-gray-background-dark">
        <div className="grid grid-cols-4 gap-4 w-full h-full">
          <div className="col-span-1 h-full overflow-auto">
            <ChatBox />
          </div>
          <div className="col-span-3 h-full overflow-auto">
            <PdfViewer />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
