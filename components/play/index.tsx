import React, { useState, useContext } from "react";
import CantoPlay from "../../icons/cantoPlay";
import CantoPlayBg from "../../icons/cantoPlayBg";
import CantoCoin from "../../icons/cantoCoin";
import { GameContext } from "../../contexts/gameContext";
import ArrowLeft from "../../icons/arrowLeft";
import ArrowRight from "../../icons/arrowRight";
import { ethers, BigNumber } from "ethers";
import {
  useDumpingBanditsFinalizeRound,
  useDumpingBanditsParticipate,
  usePrepareDumpingBanditsFinalizeRound,
  usePrepareDumpingBanditsParticipate,
} from "../../hooks/useDumpingBandits";
import { OwnerToken } from "../../contexts/types";
import Countdown from "../countdown";
import { toast } from "react-toastify";

const Play = () => {
  const [insertCoin, setInsertCoin] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const [roundNumber, setRoundNumber] = useState<number>(1);
  const [roundPot, setRoundPot] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(false);
  const {
    roundId,
    currentOwnerTokens,
    currentPot,
    roundStuck,
    roundStartedAt,
  } = useContext(GameContext);

  const { config: participateConfig } = usePrepareDumpingBanditsParticipate({
    address: "0x2c146750FD8462492b6A8448Bbe80cBe0499a8b5",
    overrides: {
      value: ethers.utils.parseEther("0.02"),
    },
  });
  const {
    write: executeParticipate,
    data: participateData,
    isLoading: participateLoading,
    isSuccess: participateSuccess,
  } = useDumpingBanditsParticipate(participateConfig);

  const handlePlay = () => {
    if (!loading) {
      setLoading(true);
      setInsertCoin(true);
      setTimeout(() => {
        setInsertCoin(false);
        toast.loading("Loading...");
        setLoading(false);
        executeParticipate?.();
      }, 2000);
    }
  };

  const { config: finalizeConfig } = usePrepareDumpingBanditsFinalizeRound({
    address: "0x2c146750FD8462492b6A8448Bbe80cBe0499a8b5",
  });

  const { write: executeFinalizeRound } =
    useDumpingBanditsFinalizeRound(finalizeConfig);

  return (
    <div className="w-full min-h-[546px] h-full pt-6">
      <div className="w-full h-full">
        <div className="w-full flex flex-col items-center gap-3">
          <div className="text-brand-green text-2xl flex gap-2">
            {roundStartedAt?.toNumber() === 0 ? null : (
              <div>Round {roundId && roundId.toString()}</div>
            )}
            <Countdown />
          </div>
        </div>
        <div className="flex justify-between w-full h-full min-h-full py-12">
          <div className="w-1/3">
            <div className="mt-12">
              <div className="text-brand-green mb-4">Total Prize Pool:</div>
              <h2 className="text-brand-green text-6xl">
                {currentPot && currentPot} CANTO
              </h2>
            </div>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            {roundStuck ? (
              <div className="w-72 border border-brand-green px-4 py-12 text-center">
                <p className="text-brand-green text-center mb-4">
                  In order to decide the winners and start the next round, one
                  person must finalize this round.
                </p>
                <button
                  onClick={() => {
                    toast.loading("Loading...");
                    executeFinalizeRound?.();
                  }}
                  className="border-brand-green text-brand-green p-4 border"
                >
                  Finalize the round
                </button>
              </div>
            ) : (
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
            )}
          </div>
          <div className="mt-8 w-1/3">
            <div className="text-brand-green mb-4">Your Entries</div>
            <div className="flex items-start justify-start gap-6">
              {currentOwnerTokens.length > 0
                ? currentOwnerTokens.map((token: OwnerToken) => {
                    return (
                      <div
                        key={token.tokenId.toString()}
                        className="text-brand-green py-4 px-2 border border-brand-green w-24 h-36 flex items-center justify-center text-3xl"
                      >
                        <div>?</div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
