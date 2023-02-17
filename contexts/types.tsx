import { BigNumber } from "ethers";
import { Dispatch, SetStateAction } from "react";

export type OwnerToken = {
  tokenId: BigNumber;
  roundId: BigNumber;
  prizePoolSize: BigNumber;
  prizeRank: BigNumber;
};

export type GameContextType = {
  roundId: BigNumber;
  currentTokenIds: BigNumber[];
  allOwnerTokens: OwnerToken[];
  roundParticipants: BigNumber;
  roundStartedAt: BigNumber;
  roundStuck: boolean;
  setRoundStuck: Dispatch<SetStateAction<boolean>>;
  price: BigNumber;
  currentOwnerTokens: OwnerToken[];
  currentPot: string;
  roundEndsAt: BigNumber;
};
