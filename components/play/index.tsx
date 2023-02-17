import React, { useState, useContext } from "react";
import CantoPlay from "../../icons/cantoPlay";
import CantoPlayBg from "../../icons/cantoPlayBg";
import CantoCoin from "../../icons/cantoCoin";
import { GameContext } from "../../contexts/gameContext";
import ArrowLeft from "../../icons/arrowLeft";
import ArrowRight from "../../icons/arrowRight";
import { ethers, BigNumber } from "ethers";
import {
  useDumpingBanditsParticipate,
  usePrepareDumpingBanditsParticipate,
} from "../../hooks/useDumpingBandits";

const Play = () => {
  const [insertCoin, setInsertCoin] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const [roundNumber, setRoundNumber] = useState<number>(1);
  const [roundPot, setRoundPot] = useState<string>("0");
  const [entries, setEntries] = useState<string[]>(["1", "2"]);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    roundId,
    roundParticipants,
    roundStartedAt,
    price,
    currentPot,
    roundEndsAt,
  } = useContext(GameContext);

  const { config: participateConfig } = usePrepareDumpingBanditsParticipate({
    address: "0xdb844ecAd8D439f655194c6b246b277E864DED6A",
    overrides: {
      value: ethers.utils.parseEther("0.01"),
    },
  });

  const { write: executeParticipate } =
    useDumpingBanditsParticipate(participateConfig);

  const handlePlay = () => {
    if (!loading) {
      setLoading(true);
      setInsertCoin(true);
      setTimeout(() => {
        setInsertCoin(false);
        setLoading(false);
        executeParticipate?.();
      }, 2000);
    }
  };

  if (roundId && roundParticipants && price && currentPot && roundStartedAt) {
    console.log("roundId", roundId.toString());
    console.log("roundParticipants", roundParticipants.toString());
    console.log("price", price.toString());
    console.log("currentPot", currentPot.toString());
    console.log("roundStartedAt", roundStartedAt.toString());
    console.log("roundEndsAt", roundEndsAt.toString());
  }

  console.log(ethers.utils.parseEther(currentPot.toString()));
  return (
    <div className="w-full min-h-[546px] h-full">
      <div className="flex items-start justify-center w-full h-full">
        <div className="flex justify-between w-full h-full min-h-full py-12">
          <div className="w-1/2">
            <div className="flex items-center flex-start">
              <button className="bg-brand-green/0 p-1 mr-1">
                <ArrowLeft className="w-6 h-6 text-brand-green" />
              </button>
              <button className="bg-brand-green/0 p-1 mr-1">
                <ArrowRight className="w-6 h-6 text-brand-green" />
              </button>
              <div className="text-brand-green text-xl">
                Round {roundId && roundId.toString()}
              </div>
            </div>
            <div className="mt-12">
              <div className="text-brand-green mb-4">Total Prize Pool:</div>
              <h2 className="text-brand-green text-6xl">
                {currentPot && currentPot} CANTO
              </h2>
            </div>
            <div className="mt-8">
              <div className="text-brand-green mb-4">Your Entries</div>
              <div className="flex items-start justify-start gap-6">
                {entries.length > 0
                  ? entries.map((entry: string) => {
                      return (
                        <div className="text-brand-green py-4 px-2 border border-brand-green w-24 h-36 flex items-center justify-center text-3xl">
                          <div>?</div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="relative w-[276px] h-[348px]">
              {insertCoin && (
                <div className="absolute z-20 w-[200px] h-[200px] top-20 animation-insert-coin">
                  <CantoCoin />
                </div>
              )}
              <div
                className="absolute w-[276px] cursor-pointer"
                onClick={handlePlay}
              >
                <CantoPlayBg className="absolute top-0 right-0 z-10" />
                <CantoPlay className="absolute top-0 right-0 z-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
