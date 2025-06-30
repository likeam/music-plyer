import Link from "next/link";
import React from "react";
import { LuClock, LuHeart } from "react-icons/lu";

const Songs = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently loading...");
    }, 4000)
  );

  const songList = [
    {
      title: "Death Bed",
      artist: "Powfu",
      artwork:
        "https://plus.unsplash.com/premium_photo-1673188701836-3021f61e9b0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://samplesongs.netlify.app/Death%20Bed.mp3",
      time: "6:34",
      id: "1",
    },
    {
      title: "Bad Liar",
      artist: "Imagine Dragons",
      artwork:
        "https://images.unsplash.com/photo-1598387846148-47e82ee120cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvbmdzfGVufDB8fDB8fHww",
      url: "https://samplesongs.netlify.app/Bad%20Liar.mp3",
      time: "3:32",
      id: "2",
    },
    {
      title: "Faded",
      artist: "Alan Walker",
      artwork:
        "https://images.unsplash.com/photo-1663026287805-6ef59d3feb19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvbmdzfGVufDB8fDB8fHww",
      url: "https://samplesongs.netlify.app/Faded.mp3",
      time: "4:11",
      id: "3",
    },
    {
      title: "Hate Me",
      artist: "Ellie Goulding",
      artwork:
        "https://images.unsplash.com/photo-1606614520047-8ad516d9d84b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvbmdzfGVufDB8fDB8fHww",
      url: "https://samplesongs.netlify.app/Hate%20Me.mp3",
      time: "7:31",
      id: "4",
    },
    {
      title: "Solo",
      artist: "Clean Bandit",
      artwork:
        "https://images.unsplash.com/photo-1553236152-72dd67ab92ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvbmdzfGVufDB8fDB8fHww",
      url: "https://samplesongs.netlify.app/Solo.mp3",
      time: "4:24",
      id: "5",
    },
    {
      title: "Without Me",
      artist: "Halsey",
      artwork:
        "https://images.unsplash.com/photo-1483744463508-8680c28a0bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNvbmdzfGVufDB8fDB8fHww",
      url: "https://samplesongs.netlify.app/Without%20Me.mp3",
      time: "5:14",
      id: "6",
    },
  ];

  return (
    <div className="w-[96%] mx-auto px-4">
      <h2 className=" text-3xl text-white mt-8 font-bold mb-6">
        Songs Collection
      </h2>
      <ul className=" space-y-4">
        {songList.map((song) => (
          <Link href={`/musics/${song.id}`} key={song.id}>
            <li className=" flex items-center justify-between p-3 hover:bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105">
              <div className=" flex items-center gap-5">
                <img
                  src={song.artwork}
                  alt="song-image"
                  className=" h-16 w-16 bg-gray-700 rounded-md flex-shrink-0"
                />
                <div>
                  <p className=" text-white font-medium">{song.artist}</p>
                  <p className=" text-sm text-gray-400">{song.title}</p>
                </div>
              </div>
              <div className=" flex items-center gap-6 text-gray-400">
                <div className=" flex items-center gap-1">
                  <LuClock size={16} />
                  <span>{song.time}</span>
                </div>
                <LuHeart
                  size={16}
                  className=" cursor-pointer hover:text-red-700"
                />
                <button className=" text-lg font-bold">:</button>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
