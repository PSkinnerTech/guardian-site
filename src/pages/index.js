import AnimatedText from "@/components/AnimatedText";
// import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/images/profile/hero-image.png";
import GuardianBlue from "../../public/images/svgs/GuardianBlue.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Guardian: Decentralized Air Quality and Seismic Activity Monitoring
        </title>
        <meta
          name="description"
          content="Guardian: Protecting communities with decentralized air quality monitoring and seismic activity detection. Stay informed and prepared with real-time data."
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start">
        <Layout className="pt-0 md:pt-16 sm:pt-16">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={HeroImage}
                alt="CodeBucks"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Revolutionizing Early Detection Technology"
                className="!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
                "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Guardian is a cutting-edge decentralized system that monitors
                air quality and detects seismic activity in real-time,
                empowering communities to protect their environment and respond
                proactively to potential hazards.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://v2.akord.com/public/vaults/active/M2hZy25EoD133W9PeNYsI3x_MwllS_uZy7l0Xbxmdjc/gallery#public/95a34f1a-1286-4370-8974-c8d14eeef793"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >
                  Whitepaper <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:me@patrickskinner.tech"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        {/* <HireMe /> */}
        <div className="absolute right-8 bottom-8 inline-block w-20 md:hidden">
          <Image src={GuardianBlue} alt="Codebucks" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
