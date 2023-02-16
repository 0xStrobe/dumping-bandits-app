import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Lore from "../components/lore";
import Play from "../components/play";
import Landing from "../components/landing";
import MyBandits from "../components/myBandits";
import Rules from "../components/rules";
import React, { useState } from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useBanditTreasury, useDumpingBanditsName } from "../hooks/useDumpingBandits";

interface Page {
  name: string;
  component: React.ReactNode;
}

export default function Home() {
  const [roundNumber, setRoundNumber] = useState<number>(1);
  const [activePage, setActivePage] = useState<string>("Play");
  const [pages, setPages] = useState<Page[]>([
    {
      name: "Play",
      component: <Play />,
    },
    {
      name: "Rules",
      component: <Rules />,
    },
    {
      name: "Lore",
      component: <Lore />,
    },
    {
      name: "My Bandits",
      component: <MyBandits />,
    },
  ]);

  const { data, error } = useDumpingBanditsName({
    address: "0x56874d970645C753Ba3d9A078D2cB08d2fBe566a",
  });
  console.log(data);

  return (
    <div className="w-full min-h-screen app-gradient">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full px-20 pt-8 pb-8">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <div className="relative mt-2 text-lg text-brand-green">DUMPING BANDITS</div>
          </Link>
          <ConnectButton />
        </div>
        <div className="pl-5">
          {pages.map((page: Page) => {
            return (
              <div key={page.name}>
                <div className="relative mt-2 text-lg text-brand-green">
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setActivePage(page.name);
                    }}
                  >
                    {page.name === "Play" ? `Play – Round ${roundNumber}` : page.name}
                  </div>
                  {activePage === page.name && (
                    <div className="absolute flex items-center justify-center w-4 h-4 rounded-full bg-brand-green/20 -left-5 top-1.5 animate-pulse">
                      <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                    </div>
                  )}
                </div>
                <div className={`h-0 ${activePage === page.name && "h-auto"}`}></div>
                {activePage === page.name && page.component}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
