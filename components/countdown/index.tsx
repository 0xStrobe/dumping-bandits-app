import { useContext, useState, useEffect } from "react";
import { GameContext } from "../../contexts/gameContext";
import {
  useDumpingBanditsFinalizeRound,
  usePrepareDumpingBanditsFinalizeRound,
} from "../../hooks/useDumpingBandits";

const Countdown = () => {
  const { roundEndsAt, roundStartedAt, roundId } = useContext(GameContext);
  const [countdown, setCountdown] = useState("");

  const calcCountdown = () => {
    if (roundEndsAt.toNumber() !== 0) {
      const now = Math.floor(Date.now() / 1000);
      if (now > roundEndsAt.toNumber()) {
        setCountdown("Over");
        return;
      }
      const diff = roundEndsAt.toNumber() - now;
      const minutes = Math.floor(diff / 60);
      let seconds = diff % 60;
      let formattedSeconds = `0${seconds}`;
      if (String(seconds).length === 1) {
        formattedSeconds = `0${seconds}`;
      } else {
        formattedSeconds = String(seconds);
      }
      setCountdown(`${minutes}:${formattedSeconds}`);
    }
  };

  // Third Attempts
  useEffect(() => {
    setInterval(() => calcCountdown(), 1000);
  }, []);

  return roundStartedAt.toNumber() === 0 ? (
    <div>Round {roundId.toNumber() + 1} is ready to start</div>
  ) : (
    <div>{countdown}</div>
  );
};

export default Countdown;
