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
import { OwnerToken, GameContextType } from "./types";

export const GameContext = createContext({
  roundId: BigNumber.from(1),
  currentTokenIds: [],
  currentOwnerTokens: [],
  allOwnerTokens: [],
  roundParticipants: BigNumber.from(0),
  roundStartedAt: BigNumber.from(0),
  roundStuck: false,
  setRoundStuck: () => undefined,
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
  const [allOwnerTokens, setAllOwnerTokens] = useState<OwnerToken[]>([]);

  const [roundStuck, setRoundStuck] = useState<boolean>(false);
  const { address } = useAccount();

  const { data: roundId } = useDumpingBanditsRoundId({
    address: "0x2c146750FD8462492b6A8448Bbe80cBe0499a8b5",
    watch: true,
  });

  const { data: roundParticipants } = useDumpingBanditsRoundParticipants({
    address: "0x2c146750FD8462492b6A8448Bbe80cBe0499a8b5",
    watch: true,
  });

  const { data: roundStartedAt } = useDumpingBanditsRoundStartedAt({
    address: "0x2c146750FD8462492b6A8448Bbe80cBe0499a8b5",
    watch: true,
  });

  const { data: price } = useDumpingBanditsPrice({
    address: "0x2c146750FD8462492b6A8448Bbe80cBe0499a8b5",
  });

  const { data: ownerTokens } = useDumpingBanditsGetOwnerTokens({
    address: "0x2c146750FD8462492b6A8448Bbe80cBe0499a8b5",
    watch: true,
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
    } else {
      setRoundEndsAt(ethers.BigNumber.from(900));
    }
  }, [roundStartedAt, roundId]);

  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime((prevTime) => prevTime + 1); // <-- Change this line!
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const now = Math.floor(Date.now() / 1000);
    if (now > roundEndsAt?.toNumber() && roundParticipants?.toNumber() >= 4) {
      console.log("now > ends at");
      setRoundStuck(true);
    } else {
      console.log("now < ends at");
      setRoundStuck(false);
    }
  }, [time]);

  useEffect(() => {
    if (ownerTokens) {
      setAllOwnerTokens(
        ownerTokens.map((token) => {
          return token;
        })
      );

      let filtered = ownerTokens.filter((tokenId) => {
        const tokenRoundId = tokenId.roundId;
        if (tokenRoundId.eq(roundId)) {
          return true;
        }
      });
      setCurrentOwnerTokens(filtered);
    }
  }, [ownerTokens, roundId]);

  return (
    <GameContext.Provider
      value={{
        roundId,
        currentTokenIds,
        roundParticipants,
        roundStartedAt,
        price,
        roundStuck,
        setRoundStuck,
        currentPot,
        allOwnerTokens,
        currentOwnerTokens,
        roundEndsAt,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
