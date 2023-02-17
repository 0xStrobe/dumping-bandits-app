import { useContext, createContext, useState, useEffect } from "react";
import {
  useBanditTreasury,
  useDumpingBanditsName,
  useDumpingBanditsTokenUri,
  useDumpingBanditsLastRoundLastTokenId,
  useDumpingBanditsRoundId,
  useDumpingBanditsRoundStartedAt,
  useDumpingBanditsRounds,
  useDumpingBanditsRoundParticipants,
  useDumpingBanditsGetOwnerTokenIds,
  useDumpingBanditsPrice,
  useDumpingBanditsTokenIdRound,
  useDumpingBanditsGetOwnerTokens,
} from "../hooks/useDumpingBandits";
import { BigNumber, ethers } from "ethers";
import { useAccount } from "wagmi";

type GameContextType = {
  roundId: BigNumber;
  currentTokenIds: BigNumber[];
  roundParticipants: BigNumber;
  roundStartedAt: BigNumber;
  price: BigNumber;
  currentPot: string;
  roundEndsAt: BigNumber;
};

type OwnerToken = {
  tokenId: BigNumber;
  roundId: BigNumber;
  prizePoolSize: BigNumber;
  prizeRank: BigNumber;
};

export const GameContext = createContext({
  roundId: BigNumber.from(1),
  currentTokenIds: [],
  roundParticipants: BigNumber.from(0),
  roundStartedAt: BigNumber.from(0),
  price: BigNumber.from(0),
  currentPot: "0",
  roundEndsAt: BigNumber.from(0),
} as GameContextType);

export const GameProvider = ({ children }) => {
  const [currentPot, setCurrentPot] = useState<string>("0");
  const [roundEndsAt, setRoundEndsAt] = useState<BigNumber>(BigNumber.from(0));
  const [currentTokenIds, setCurrentTokenIds] = useState<BigNumber[]>([]);
  const [currentOwnerTokens, setCurrentOwnerTokens] = useState<OwnerToken[]>(
    []
  );

  const { address } = useAccount();
  const { data: roundId } = useDumpingBanditsRoundId({
    address: "0x272A9c5fcAa92318615EC75e2fE16CFD35D83ff6",
  });
  const { data: roundParticipants } = useDumpingBanditsRoundParticipants({
    address: "0x272A9c5fcAa92318615EC75e2fE16CFD35D83ff6",
  });
  const { data: roundStartedAt } = useDumpingBanditsRoundStartedAt({
    address: "0x272A9c5fcAa92318615EC75e2fE16CFD35D83ff6",
  });
  const { data: price } = useDumpingBanditsPrice({
    address: "0x272A9c5fcAa92318615EC75e2fE16CFD35D83ff6",
  });

  const { data: ownerTokenIds } = useDumpingBanditsGetOwnerTokenIds({
    address: "0x272A9c5fcAa92318615EC75e2fE16CFD35D83ff6",
    args: [address],
  });

  const { data: ownerTokens } = useDumpingBanditsGetOwnerTokens({
    address: "0x272A9c5fcAa92318615EC75e2fE16CFD35D83ff6",
    args: [address],
  });

  useEffect(() => {
    if (price && roundParticipants) {
      setCurrentPot(ethers.utils.formatEther(price.mul(roundParticipants)));
    }
  }, [price, roundParticipants]);

  useEffect(() => {
    if (roundStartedAt) {
      setRoundEndsAt(roundStartedAt.add(ethers.BigNumber.from(900)));
    }
  }, [roundStartedAt]);

  // useEffect(() => {

  // }, [])
  // if (ownerTokenIds) {
  //   let filtered = ownerTokenIds.filter((tokenId) => {
  //     const { data: tokenRoundId } = useDumpingBanditsTokenIdRound({
  //       address: "0x272A9c5fcAa92318615EC75e2fE16CFD35D83ff6",
  //       args: [tokenId],
  //     });
  //     if (tokenRoundId === roundId) {
  //       return true;
  //     }
  //   });
  //   setCurrentTokenIds(filtered);
  // }

  return (
    <GameContext.Provider
      value={{
        roundId,
        currentTokenIds,
        roundParticipants,
        roundStartedAt,
        price,
        currentPot,
        roundEndsAt,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
