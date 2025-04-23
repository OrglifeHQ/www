"use client";

import React from "react";
import { easeIn, motion } from "framer-motion";

const BouncingUp: React.FC = () => {
    return (
        <motion.div
            className="absolute bottom-4 hidden h-16 w-12 items-center justify-center rounded-full bg-white max-md:flex"
            animate={{ y: [0, -15, 0] }}
            transition={{
                repeat: Infinity,
                easings: [easeIn],
                duration: 1,
                ease: "easeInOut",
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height={24}
                fill="black"
            >
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
        </motion.div>
    );
};

export default BouncingUp;
