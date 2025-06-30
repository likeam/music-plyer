import React, { ReactNode } from "react";

type RC = {
  children: ReactNode;
  sidebar: ReactNode;
  songs: ReactNode;
  player: ReactNode;
};

const MusicLayout = ({ children, sidebar, songs, player }: RC) => {
  return (
    <div className="flex">
      {sidebar}
      <div className=" flex-1 p-6">
        {songs}
        {player}
      </div>
      {children}
    </div>
  );
};

export default MusicLayout;
