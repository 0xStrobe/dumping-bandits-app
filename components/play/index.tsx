import React, { useState } from "react";
import CantoPlay from "../../icons/cantoPlay";
import CantoPlayBg from "../../icons/cantoPlayBg";
import CantoCoin from "../../icons/cantoCoin";

const Play = () => {
  const [insertCoin, setInsertCoin] = useState<boolean>(false);

  const toggleCoin = () => {
    setInsertCoin(true);
    setTimeout(() => {
      setInsertCoin(false);
    }, 2000);
  };

  const [playing, setPlaying] = useState<boolean>(false);
  const [roundNumber, setRoundNumber] = useState<number>(1);
  const [roundPot, setRoundPot] = useState<string>("0");
  const [entries, setEntries] = useState<string[]>(["1", "2"]);

  return (
    <div className="w-full min-h-[546px] h-full">
      <div className="flex items-start justify-center w-full h-full pt-10">
        <div className="flex justify-between w-full h-full min-h-full py-12">
          <div className="w-1/2">
            <div className="flex items-center flex-start">
              <button className="bg-brand-green p-1 mr-1">back</button>
              <button className="bg-brand-green p-1 mr-1">forward</button>
              <div className="text-brand-green text-xl">
                Round {roundNumber}
              </div>
            </div>
            <div className="mt-12">
              <div className="text-brand-green mb-4">Total Prize Pool:</div>
              <h2 className="text-brand-green text-6xl">{roundPot} CANTO</h2>
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
                onClick={toggleCoin}
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
