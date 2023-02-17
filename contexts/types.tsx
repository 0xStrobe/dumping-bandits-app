import { BigNumber } from "ethers";

export type OwnerToken = {
  tokenId: BigNumber;
  roundId: BigNumber;
  prizePoolSize: BigNumber;
  prizeRank: BigNumber;
};

export type GameContextType = {
  roundId: BigNumber;
  currentTokenIds: BigNumber[];
  roundParticipants: BigNumber;
  roundStartedAt: BigNumber;
  price: BigNumber;
  currentOwnerTokens: OwnerToken[];
  currentPot: string;
  roundEndsAt: BigNumber;
};
