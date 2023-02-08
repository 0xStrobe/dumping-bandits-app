import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Lore from "../components/lore";
import Play from "../components/play";
import Landing from "../components/landing";
import MyBandits from "../components/myBandits";
import Rules from "../components/rules";
import React, { useState } from "react";
import Link from "next/link";
import WelcomeSign from "../icons/welcomeSign";
import Mountain from "../icons/mountain";
import PalmRight from "../icons/palmRight";
import PalmLeft from "../icons/palmLeft";

export default function Home() {
  return (
    <div className="w-full h-screen min-h-[750px] overflow-hidden app-gradient">
      <Head>
        <title>The Dumping Bandits of Cantofornia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full overflow-hidden">
        <div className="absolute inset-0 z-50 flex justify-between top-6 left-20 right-20">
          <Link href="/">
            <div className="relative mt-2 text-lg text-brand-green">
              DUMPING BANDITS
            </div>
          </Link>
          <Link href="/game">
            <div className="relative mt-2 text-lg text-brand-green">PLAY</div>
          </Link>
        </div>
        <div className="flex justify-center h-full">
          <div className="absolute max-w-[800px] w-full left-12 bottom-0">
            <PalmLeft />
          </div>
          <div className="absolute max-w-[800px] w-full -right-36 bottom-0">
            <PalmRight />
          </div>
          <div className="absolute max-w-[600px] w-full -left-6 bottom-0">
            <Mountain />
          </div>
          <div className="absolute w-full h-full max-w-[550px] flex items-end">
            <div className="w-[111px] h-[140px] absolute bottom-[532px] z-50 right-16">
              <Image src="/images/brentdog.png" fill />
            </div>
            <WelcomeSign className="" />
          </div>
        </div>
      </div>
    </div>
  );
}