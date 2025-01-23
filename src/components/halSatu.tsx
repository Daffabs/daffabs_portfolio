import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HalSatu = () => {
    return (
        <section className="h-screen flex items-center container ">
            <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
            <h1 className="text-white mb-4 text-2xl sm:text-7xl lg:leading-normal font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-dark-3">
                Hello, I&apos;m{" "}
                </span>
                <br />
                    <TypeAnimation
                    sequence={[
                        "Daffa Bagus S P",
                        1000,
                        "Web Developer",
                        1000,
                        "Frontend Developer",
                        1000,
                        "UI/UX Designer",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
            </h1>
            <div>
                <Link
                href="mailto:daffabagus1933@gmail.com"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-dark-4 to-dark-2 hover:bg-slate-200 text-dark-1 font-bold"
                >
                Hire Me
                </Link>
                <Link
                href="/CV_DAFFA BAGUS SYACH PUTRA.pdf"
                download
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-dark-4 to-dark-2 hover:bg-slate-800 text-white mt-3 font-bold"
                >
                <span className="block bg-dark-1 hover:bg-slate-800 rounded-full px-5 py-2">
                    Download CV
                </span>
                </Link>
            </div>
            </motion.div>
          <div className="w-[300px] h-[300px]
          lg:w-[550px] lg:h-[550px] relative overflow-hidden col-span-4 place-self-center mt-4 lg:mt-0"> 
            <Image
              src="/images/ppo.svg"
              alt="hero image"
              className="absolute inset-0 w-full h-full object-cover" 
              width={400} 
              height={400} 
            />
          </div>
            </div>
        </section>
    );
};

export default HalSatu