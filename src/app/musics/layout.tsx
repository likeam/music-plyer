import React, { ReactNode } from "react";

type RC = {
  children: ReactNode;
  sidebar: ReactNode;
};

const MusicLayout = ({ children, sidebar }: RC) => {
  return (
    <div className="flex">
      {sidebar}
      <div></div>
      {children}
    </div>
  );
};

export default MusicLayout;
