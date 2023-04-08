import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Inspired By a{" "}
          <a
            href="https://streamr.network"
            className="underline
            underline-offset-2
            "
            target={"_blank"}
          >
            <span className="text-primary dark:text-primary text-2xl px-2">
              Streamr
            </span>
          </a>
          Hackathon. Born from
          <a
            href="https://developerdao.com"
            className="underline
            underline-offset-2
            "
            target={"_blank"}
          >
            <span className="text-primary dark:text-primary text-2xl px-2">
              Developer DAO
            </span>
          </a>
        </div>
        <Link
          href="https://twitter.com/PSkinnertech"
          target={"_blank"}
          className="underline
            underline-offset-2
            "
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
