import AnimatedText from "@/components/AnimatedText";
// import Education from "@/components/Education";
// import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
// import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import PatrickSkinner from "../../public/images/profile/PatrickSkinner.png";
import TonyKipkemboi from "../../public/images/profile/TonyKipkemboi.jpeg";
import { motion } from "framer-motion";
import {
  TwitterIcon,
  // DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  // PinterestIcon,
  // SunIcon,
  // MoonIcon,
} from "../components/Icons";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>
          Guardian: Decentralized Air Quality & Seismic Activity Monitoring
        </title>
        <meta
          name="description"
          content="Introducing Guardian, a cutting-edge decentralized system that revolutionizes air quality monitoring and seismic activity detection. By leveraging IoT devices, advanced sensors, and Web3 technologies, Guardian creates a community-driven solution that empowers individuals to take control of their environment. Our innovative platform combines real-time data collection, user-friendly visualization, and widespread accessibility to create safer, healthier communities worldwide. Join the Guardian network and contribute to a more informed, proactive approach to environmental and seismic risk management."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 py-10">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Patrick Skinner <br></br>Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Patrick Skinner, a former paratrooper medic, mass
                casualty coordinator, and now a full-stack engineer specializing
                in frontend, web3, and IoT development. My passion for creating
                innovative solutions to real-world problems led me to co-found
                Guardian. I've seen firsthand the devastating effects of
                insufficient early warning systems during my time coordinating
                mass casualty efforts in Haiti following the earthquake.
              </p>

              <p className="my-4 font-medium">
                With Guardian, I am committed to leveraging my experience and
                technical expertise to create a safer, healthier world by
                revolutionizing air quality monitoring and seismic activity
                detection.
              </p>

              <div className="flex items-center justify-center flex-wrap">
                <motion.a
                  href="https://twitter.com/PSkinnertech"
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mr-3"
                >
                  <TwitterIcon />
                </motion.a>
                <motion.a
                  href="https://github.com/PSkinnerTech"
                  target={"_blank"}
                  className="w-6 mx-3"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GithubIcon />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/patrickaskinner"
                  target={"_blank"}
                  className="w-6 mx-3"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkedInIcon />
                </motion.a>
              </div>
            </div>

            <div
              className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark
bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={PatrickSkinner}
                alt="Codebucks"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            {/* <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={7} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  Years of Entrepreneurship
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={24} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  years of dev experience
                </h2>
              </div>
            </div> */}
          </div>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 py-10">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Tony Kipkemboi<br></br>Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Tony Kipkemboi, a former U.S. Army Medical Laboratory
                Technician turned software engineer with a passion for coding
                and developer relations. My seven years of military service,
                including working at a military research institute (USAMRIID) in
                Genomics, sparked my interest in coding as I interacted with
                Bioinformaticians who used Python to analyze genomic data. After
                transitioning from the military, I pursued a Masters in Computer
                and Information Technology at the University of Pennsylvania and
                took on roles as a Data Engineer at Merck & Co., Bloomberg L.P.,
                and Booz Allen Hamilton.
              </p>

              <p className="my-4 font-medium">
                In late 2021, I started a YouTube channel where I create
                blockchain and python tutorials, write articles, and give talks
                at coding workshops. I am passionate about breaking down
                technical concepts into digestible bits for newcomers and have
                found immense satisfaction in sharing my knowledge and
                experiences through written and video formats. Now, as a
                co-founder of Guardian, I aim to use my technical expertise and
                developer relations skills to create a positive impact in the
                world of air quality monitoring and seismic activity detection.
              </p>

              <div className="flex items-center justify-center flex-wrap">
                <motion.a
                  href="https://twitter.com/tonykipkemboi"
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mr-3"
                >
                  <TwitterIcon />
                </motion.a>
                <motion.a
                  href="https://github.com/tonykipkemboi"
                  target={"_blank"}
                  className="w-6 mx-3"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GithubIcon />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/tonykipkemboi/"
                  target={"_blank"}
                  className="w-6 mx-3"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkedInIcon />
                </motion.a>
              </div>
            </div>

            <div
              className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark
bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={TonyKipkemboi}
                alt="Codebucks"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            {/* <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={7} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  Years of Entrepreneurship
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={24} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  years of dev experience
                </h2>
              </div>
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
