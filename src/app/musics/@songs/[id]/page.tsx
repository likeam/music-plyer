import React from "react";
type PS = {
  params: { id: string };
};

const Song = ({ params }: PS) => {
  return <div className=" text-white text-2xl">Song: {params.id}</div>;
};

export default Song;
