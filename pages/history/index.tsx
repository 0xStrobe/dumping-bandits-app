import { GameContext } from "../../contexts/gameContext";
import { useContext, useEffect } from "react";
import Layout from "../../components/layout";

const History = () => {
  const {
    roundId,
    allOwnerTokens,
    currentOwnerTokens,
    currentPot,
    roundStuck,
    roundStartedAt,
  } = useContext(GameContext);

  useEffect(() => {
    console.log("allOwnerTokens", allOwnerTokens);
  }, [allOwnerTokens]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex px-4 gap-4 text-brand-green">
        <div className="w-1/4">Token ID:</div>
        <div className="w-1/4">Round ID:</div>
        <div className="w-1/4">Prize Pool Size:</div>
        <div className="w-1/4">Prize Rank:</div>
      </div>
      {allOwnerTokens
        ? allOwnerTokens.map((token) => {
            return (
              <div
                key={token.tokenId.toString()}
                className="flex text-brand-green px-4 py-4 border border-brand-green gap-4 mb-2"
              >
                <div className="w-1/4">{token.tokenId.toString()}</div>
                <div className="w-1/4">{token.roundId.toString()}</div>
                <div className="w-1/4">{token.prizePoolSize.toString()}</div>
                <div className="w-1/4">
                  {token.prizeRank.toString().slice(0, 10)}
                </div>
              </div>
            );
          })
        : null}
      <h1>History</h1>
    </div>
  );
};

export default History;

History.getLayout = function getLayout(history) {
  return <Layout>{history}</Layout>;
};
