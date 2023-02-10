import React, { useState } from "react";
import CantoPlay from "../../icons/cantoPlay";
import CantoPlayBg from "../../icons/cantoPlayBg";
import CantoCoin from "../../icons/cantoCoin";

const Play = () => {
  const [insertCoin, setInsertCoin] = useState(false);

  const toggleCoin = () => {
    setInsertCoin(true);
    setTimeout(() => {
      setInsertCoin(false);
    }, 2000);
  };
  return (
    <div className="w-full min-h-[546px] h-full">
      <div className="flex items-start justify-center w-full h-full pt-10">
        <div className="flex justify-between w-full h-full min-h-full p-12 bg-brand-black">
          <h1 className="text-brand-green">Want to play a game?</h1>
          <div className="relative w-[276px] h-[348px]">
            {insertCoin && (
              <div className="absolute z-20 w-[200px] h-[200px] top-20 animation-insert-coin">
                <CantoCoin />
              </div>
            )}
            <div
              className="absolute w-[276px] cursor-pointer"
              onClick={toggleCoin}>
              <CantoPlayBg className="absolute top-0 right-0 z-10" />
              <CantoPlay className="absolute top-0 right-0 z-30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
