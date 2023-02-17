import { useContext, useState, useEffect } from "react";
import { GameContext } from "../../contexts/gameContext";
import {
  useDumpingBanditsFinalizeRound,
  usePrepareDumpingBanditsFinalizeRound,
} from "../../hooks/useDumpingBandits";

const Countdown = () => {
  const { roundEndsAt, roundStartedAt } = useContext(GameContext);
  const [countdown, setCountdown] = useState("0");
  const calcCountdown = () => {
    if (roundEndsAt) {
      if (roundEndsAt.toNumber() > Math.floor(Date.now() / 1000)) {
        setCountdown("Round Over");
        return;
      }
      const now = Math.floor(Date.now() / 1000);
      const diff = roundEndsAt.toNumber() - now;
      const minutes = Math.floor(diff / 60);
      const seconds = diff % 60;
      setCountdown(`${minutes}:${seconds}`);
    }
  };

  const { config: finalizeConfig } = usePrepareDumpingBanditsFinalizeRound({
    address: "0x272A9c5fcAa92318615EC75e2fE16CFD35D83ff6",
  });

  useEffect(() => {
    calcCountdown();
  }, []);

  const { write: executeFinalizeRound } =
    useDumpingBanditsFinalizeRound(finalizeConfig);

  return (
    <div>
      {roundEndsAt && roundEndsAt.toNumber() > Math.floor(Date.now() / 1000) ? (
        <button
          onClick={() => {
            executeFinalizeRound?.();
          }}
          className="border-brand-green text-brand-green p-4 border"
        >
          Finalize the round
        </button>
      ) : (
        countdown
      )}
    </div>
  );
};

export default Countdown;
