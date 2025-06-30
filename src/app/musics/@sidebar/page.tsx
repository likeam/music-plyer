import React from "react";

import { LuClock, LuHouse, LuTrendingUp } from "react-icons/lu";

const Sidebar = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently loading...");
    }, 4000)
  );

  const favorite = [
    {
      date: "July 27, 1940",
      img: "https://images.unsplash.com/photo-1633364008994-b5cb862c01b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHNvbmdzfGVufDB8fDB8fHww",
      artist: "Tommy Dorsey",
      title: "I'll Never Smile Again",
      id: "1",
    },
    {
      date: "October 19, 1940",
      img: "https://images.unsplash.com/photo-1533582623499-fbf239041503?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHNvbmdzfGVufDB8fDB8fHww",
      artist: "Bing Crosby",
      title: "Only Forever",
      id: "2",
    },
    {
      date: "December 21, 1940",
      img: "https://images.unsplash.com/photo-1563680398693-6f5be224edc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHNvbmdzfGVufDB8fDB8fHww",
      artist: "Artie Shaw",
      title: "Frenesi",
      id: "3",
    },
    {
      date: "March 15, 1941",
      img: "https://images.unsplash.com/photo-1558541966-a801364c934b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHNvbmdzfGVufDB8fDB8fHww",
      artist: "Glenn Miller",
      title: "The Song of the Volga Boatmen",
      id: "4",
    },
    {
      date: "March 22, 1941",
      img: "https://images.unsplash.com/photo-1599109274861-132d1fd963bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNvbmdzfGVufDB8fDB8fHww",
      artist: "Artie Shaw",
      title: "Frenesi",
      id: "5",
    },
  ];
  return (
    <aside className=" w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen">
      <section>
        <h2 className=" text-xl font-bold">MENU</h2>
        <nav className=" mt-4">
          <ul>
            <li className=" flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <LuHouse />
              Discover
            </li>
            <li className=" flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <LuTrendingUp />
              Trending
            </li>
            <li className=" flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <LuClock />
              Recent
            </li>
          </ul>
        </nav>
        <section>
          <h2 className=" mt-6 text-xl font-bold">FAVORITE</h2>
          <ul className=" mt-2 mb-[2rem]">
            {favorite.map((i) => (
              <div key={i.id} className=" flex mt-[2rem] gap-4">
                <img
                  src={i.img}
                  alt="mucis player"
                  className=" h-15 w-15 bg-gray-700 rounded-md"
                />
                <div>
                  <p className=" text-white">{i.title}</p>
                  <p className=" text-sm text-gray-400">{i.artist}</p>
                </div>
              </div>
            ))}
          </ul>
        </section>
      </section>
    </aside>
  );
};

export default Sidebar;
