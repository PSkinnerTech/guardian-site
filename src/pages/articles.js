import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import Announcement from "../../public/images/articles/Announcement.png";
import HackathonWin from "../../public/images/articles/HackathonWin.png";

import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
        sm:flex-col
        "
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Winners of the Developer DAO | Streamr mini-hackathon</title>
        <meta
          name="description"
          content="Explore top projects from Developer DAO | Streamr mini-hackathon, featuring decentralized air quality, earthquake monitoring & secure file sharing."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Our Articles and Special Mentions"
            className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
          "
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={Announcement}
              title="Winners of the Developer DAO | Streamr mini-hackathon"
              time="5 min read"
              summary="Explore top projects from Developer DAO | Streamr mini-hackathon, featuring decentralized air quality, earthquake monitoring & secure file sharing."
              link="https://blog.streamr.network/winners-of-the-developer-dao-streamr-mini-hackathon/"
            />

            <FeaturedArticle
              img={HackathonWin}
              title="From Volcano Ashes to Victory: My 72-Hour Hackathon Journey Creating AirGuardian"
              time="10 min read"
              summary="Join a developer's exciting journey to win first place in a Streamr Hackathon, creating AirGuardian, a decentralized air quality monitoring system, and the valuable lessons learned."
              link="https://blog.patrickskinner.tech/from-volcano-ashes-to-victory-my-72-hour-hackathon-journey-creating-airguardian"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul className="flex flex-col items-center relative">
            <Article
              title="AirGuardian: Revolutionizing Air Quality Monitoring with Decentralized Technology"
              img={HackathonWin}
              date="April 1, 2023"
              link="https://blog.patrickskinner.tech/airguardian-revolutionizing-air-quality-monitoring-with-decentralized-technology"
            />
            {/* <Article
              title="silky smooth scrolling in reactjs: a step-by-step guide for react developers"
              img={article4}
              date="January 30, 2023"
              link="https://devdreaming.com/blogs/smooth-scrolling-in-react-js"
            />
            <Article
              title="creating an efficient modal component in react using hooks and portals"
              img={article5}
              date="January 29, 2023"
              link="https://devdreaming.com/blogs/create-efficient-modal-react-portals"
            />
            <Article
              title="build a fabulous todo list app with react, redux and framer-motion"
              img={article6}
              date="January 28, 2023"
              link="https://devdreaming.com/blogs/build-react-redux-framer-motion-todo-app"
            />
            <Article
              title="redux simplified: a beginner's guide for web developers"
              img={article7}
              date="January 31, 2023"
              link="https://devdreaming.com/blogs/redux-simply-explained"
            />
            <Article
              title="what is higher order component (hoc) in react?"
              date="January 4, 2023"
              img={article8}
              link="https://devdreaming.com/blogs/higher-order-component-hoc-react"
            /> */}
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
