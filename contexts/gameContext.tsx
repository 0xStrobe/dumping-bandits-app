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
  useDumpingBanditsPrice,
} from "../hooks/useDumpingBandits";
import { BigNumber, ethers } from "ethers";
import { useAccount } from "wagmi";

type GameContextType = {
  roundId: BigNumber;
  roundParticipants: BigNumber;
  roundStartedAt: BigNumber;
  price: BigNumber;
  currentPot: BigNumber;
  roundEndsAt: BigNumber;
};

export const GameContext = createContext({
  roundId: BigNumber.from(1),
  roundParticipants: BigNumber.from(0),
  roundStartedAt: BigNumber.from(0),
  price: BigNumber.from(0),
  currentPot: BigNumber.from(0),
  roundEndsAt: BigNumber.from(0),
} as GameContextType);

export const GameProvider = ({ children }) => {
  const [currentPot, setCurrentPot] = useState<BigNumber>(BigNumber.from(0));
  const [roundEndsAt, setRoundEndsAt] = useState<BigNumber>(BigNumber.from(0));

  const { address } = useAccount();
  const { data: roundId } = useDumpingBanditsRoundId({
    address: "0x56874d970645C753Ba3d9A078D2cB08d2fBe566a",
  });
  const { data: roundParticipants } = useDumpingBanditsRoundParticipants({
    address: "0x56874d970645C753Ba3d9A078D2cB08d2fBe566a",
  });
  const { data: roundStartedAt } = useDumpingBanditsRoundStartedAt({
    address: "0x56874d970645C753Ba3d9A078D2cB08d2fBe566a",
  });
  const { data: price } = useDumpingBanditsPrice({
    address: "0x56874d970645C753Ba3d9A078D2cB08d2fBe566a",
  });

  useEffect(() => {
    if (price && roundParticipants) {
      setCurrentPot(price.mul(roundParticipants));
    }
  }, [price, roundParticipants]);

  useEffect(() => {
    if (roundStartedAt) {
      setRoundEndsAt(roundStartedAt.add(ethers.BigNumber.from(900)));
    }
  }, [roundStartedAt]);

  // useEffect(() => {
  //   // get user info for current round - currentEntries
  // }, [address]);

  // for historical purposes:

  // const { data: lastRoundLastTokenId } = useDumpingBanditsLastRoundLastTokenId({
  //   address: "0x56874d970645C753Ba3d9A078D2cB08d2fBe566a",
  // });
  // lastRoundLastTokenId &&
  //   console.log("last token id", lastRoundLastTokenId.toString());

  // const { data: rounds } = useDumpingBanditsRounds({
  //   address: "0x56874d970645C753Ba3d9A078D2cB08d2fBe566a",
  //   args: [BigNumber.from(0)],
  // });
  // rounds && console.log("rounds", rounds);

  return (
    <GameContext.Provider
      value={{
        roundId,
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
