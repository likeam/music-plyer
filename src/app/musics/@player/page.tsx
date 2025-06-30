import React from "react";
import { LuPause, LuPlay, LuSkipBack, LuSkipForward } from "react-icons/lu";

const Player = () => {
  return (
    <div className=" fixed bottom-0 left-[35%] w-[40rem] bg-[#171717] p-4 flex items-center justify-between text-white">
      <div className=" w-16 h-16 bg-gray-700 rounded-md"></div>
      <div className=" flex items-center gap-6">
        <LuSkipBack
          size={24}
          className=" cursor-pointer hover:text-white transition-colors"
        />
        <LuPlay
          size={24}
          className=" cursor-pointer hover:text-white transition-colors"
        />
        <LuPause
          size={24}
          className=" cursor-pointer hover:text-white transition-colors"
        />
        <LuSkipForward
          size={24}
          className=" cursor-pointer hover:text-white transition-colors"
        />
      </div>
      <div className="flex items-center gap-4 text-gray-400">
        <span>2:21</span>
        <div className=" relative w-64 h-1 bg-gray-700 rounded-md">
          <div
            className=" absolute top-0 left-0 h-1 bg-white rounded-md"
            style={{ width: "50%" }}
          />
          <input
            type="range"
            className=" absolute top-0 left-0 w-full h-1 bg-transparent cursor-pointer"
          />
        </div>
        <span>3:1</span>
      </div>
    </div>
  );
};

export default Player;
