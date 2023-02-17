import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Lore from "../../../components/lore";
import Play from "../../../components/play";
import Landing from "../../../components/landing";
import MyBandits from "../../../components/myBandits";
import Rules from "../../../components/rules";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import {
  useDumpingBanditsParticipate,
  usePrepareDumpingBanditsParticipate,
} from "../../../hooks/useDumpingBandits";
import { BigNumber, ethers } from "ethers";
import { GameContext } from "../../../contexts/gameContext";
import Layout from "../../../components/layout";

interface Page {
  name: string;
  component: React.ReactNode;
}

export default function Home() {
  const [roundNumber, setRoundNumber] = useState<number>(1);

  return <Play />;
}

Home.getLayout = function getLayout(rules) {
  return <Layout>{rules}</Layout>;
};
