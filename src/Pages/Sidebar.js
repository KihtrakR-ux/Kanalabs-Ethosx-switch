import React from "react";
import kanalogo from "../assets/icons/Kanalogo.svg";
import { Switch } from "antd";
import twitter from "../assets/icons/twitter.svg";
import medium from "../assets/icons/medium.svg";
import discord from "../assets/icons/discord.svg";
import EthosX from "../assets/icons/EthosX.svg";
import telegram from "../assets/icons/telegram.svg";

const Sidebar = () => {
  return (
    <div>
      <aside className=" container mx-auto ">
        <div className=" sticky top-0 items-start bg-[#17181a] 2xl:w-[20rem] xl:w-[20rem] lg:w-[20rem] md:w-[20rem] sm:w-auto max-sm:w-auto h-[60rem] font-inter ">
          <div className="flex justify-center pt-8">
            <img src={kanalogo} alt="/Kanalogo" />
          </div>
          <div className="2xl:hidden xl:hidden lg:hidden md:inline-flex sm:inline-flex max-sm:inline-flex pt-12 ">
            <div className="w-[19.167rem] h-[3.5rem] rounded-[2rem] bg-[#ffffff0f] ml-5 mt-3.5">
              <div className=" text-[white] text-[0.875rem] flex justify-around items-center pt-3.5 font-normal ">
                Advanced View
                <Switch />
              </div>
            </div>
          </div>
          <div className="flex pl-8 2xl:pt-20 xl:pt-20 lg:pt-20 md:pt-20 sm:pt-4 max-sm:pt-4">
            <ul className="text-[1rem] ">
              <li className=" text-[#FFFFFF66]  hover:font-bold h-[3.5rem] w-[17rem]  pl-6 pt-3 cursor-pointer hover:bg-[#101112] hover:rounded-[1rem]">
                <span className="hover:bg-gradient-to-r from-[#67ffd1] to-[#4f9dff] hover:text-transparent hover:bg-clip-text">
                  Swap
                </span>
              </li>
              <li className=" text-[#FFFFFF66]  hover:font-bold h-[3.5rem] w-[17rem]  pl-6 pt-3 cursor-pointer hover:bg-[#101112] hover:rounded-[1rem]">
                <span className="hover:bg-gradient-to-r from-[#67ffd1] to-[#4f9dff] hover:text-transparent hover:bg-clip-text">
                  Stake/Unstake
                </span>
              </li>
              <li className=" text-[#FFFFFF66]  hover:font-bold h-[3.5rem] w-[17rem]  pl-6 pt-3 cursor-pointer hover:bg-[#101112] hover:rounded-[1rem]">
                <span className="hover:bg-gradient-to-r from-[#67ffd1] to-[#4f9dff] hover:text-transparent hover:bg-clip-text">
                  Leaderboard
                </span>
              </li>
              <li className=" text-[#FFFFFF66]  hover:font-bold h-[3.5rem] w-[17rem]  pl-6 pt-3 cursor-pointer hover:bg-[#101112] hover:rounded-[1rem]">
                <span className="hover:bg-gradient-to-r from-[#67ffd1] to-[#4f9dff] hover:text-transparent hover:bg-clip-text">
                  Buy/Sell
                </span>
              </li>
              <li className=" text-[#FFFFFF66]  hover:font-bold h-[3.5rem] w-[17rem]  pl-6 pt-3 cursor-pointer hover:bg-[#101112] hover:rounded-[1rem]">
                <span className="hover:bg-gradient-to-r from-[#67ffd1] to-[#4f9dff] hover:text-transparent hover:bg-clip-text">
                  Help
                </span>
              </li>
              <li className="2xl:hidden xl:hidden lg:hidden md:inline sm:inline max-sm:inline text-[#FFFFFF66] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#67FFD1] to-[#4F9DFF] hover:font-bold h-[3.5rem] w-[17rem]  pl-6 pt-3 cursor-pointer hover:bg-[#101112] hover:rounded-[1rem]">
                <span className="hover:bg-gradient-to-r from-[#67ffd1] to-[#4f9dff] hover:text-transparent hover:bg-clip-text">
                  Logout
                </span>
              </li>
            </ul>
          </div>
          <div className="2xl:hidden xl:hidden lg:hidden md:inline sm:inline max-sm:inline">
            <div className="flex justify-center text-[0.875rem] text-[white] pt-28">
              FOLLOW US
            </div>
            <div className=" flex justify-around p-[5%_14%]">
              <img src={telegram} alt="telegram" className=" cursor-pointer" />
              <img src={twitter} alt="twitter" className=" cursor-pointer" />
              <img src={medium} alt="medium" className=" cursor-pointer" />
              <img src={discord} alt="discord" className=" cursor-pointer" />
            </div>
            <div className=" flex justify-center">
              <button className="w-[20.5rem] h-[2.438rem] border-2 btn-gradient text-white">
                Contact us
              </button>
            </div>
            <div className=" flex justify-around pt-12 text-[#FFFFFF66] text-[0.875rem]">
              <div>Switch</div>
              <div className="flex">
                Powered by
                <img src={EthosX} alt="ethosx" className=" ml-2" />
              </div>
            </div>
            <div className=" mt-10">
              <br></br>
            </div>
          </div>

          <div className="  2xl:inline xl:inline lg:inline md:hidden sm:hidden max-sm:hidden">
            <div className="text-[#FFFFFF66] mt-[12rem] pl-14 hover:text-[white] h-[3.5rem] w-[17rem] pt-3 cursor-pointer hover:bg-[#101112] hover:rounded-[1rem]">
              <span className="hover:bg-gradient-to-r from-[#67ffd1] to-[#4f9dff] hover:text-transparent hover:bg-clip-text ">
                Connect Wallet
              </span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
