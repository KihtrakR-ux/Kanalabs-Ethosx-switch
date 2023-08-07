import React from "react";
import EthosX from "../assets/icons/EthosX.svg";
import sun from "../assets/icons/sun.svg";
import { useState } from "react";
import Vectordown from "../assets/icons/Vectordown.svg";
import Eth from "../assets/icons/Eth.svg";
import { Switch } from "antd";
import menu from "../assets/icons/menu.svg";
import Mobilelogo from "../assets/icons/Mobilelogo.svg";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };
  const [sidebarOpen, setisSidebarOpen] = useState(false);
  const handleopen = () => {
    setisSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <div className="flex justify-center 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 max-sm:ml-0 font-inter">
        <div className="2xl:w-[66rem] xl:w-[66rem] lg:w-[66rem] md:w-[46rem] sm:w-[26rem] max-sm:w-[26rem] h-[6rem] rounded-b-[1rem] 2xl:bg-[#17181a] xl:bg-[#17181a] lg:bg-[#17181a] md:bg-transparent sm:bg-transparent max-sm:bg-transparent 2xl:justify-normal xl:justify-normal lg:justify-normal md:justify-between sm:justify-between max-sm:justify-between flex 2xl:p-[0%_2%] xl:p-[0%_2%] lg:p-[0%_2%] md:p-[0%_2%] sm:p-[0%_5%] max-sm:p-[0%_5%] ">
          <div className="2xl:hidden xl:hidden lg:hidden md:inline sm:inline max-sm:inline pt-7 cursor-pointer">
            <img src={Mobilelogo} alt="Mobilelogo" />
          </div>
          <div className="2xl:w-[19.167rem] xl:w-[19.167rem] lg:w-[19.167rem] md:w-[19.167rem] sm:w-[10.216rem] max-sm:w-[10.216rem] h-[3.5rem] rounded-[2rem] bg-[#ffffff0f] 2xl:ml-5 xl:ml-5 lg:ml-5 md:ml-0 sm:ml-0 max-sm:ml-0 mt-3.5">
            <div
              className="flex justify-between cursor-pointer"
              onClick={toggleSelect}
            >
              <div className="flex pt-1 pl-6">
                <img src={Eth} alt="logoURI" className=" pt-2.5" />
                <span className="pl-2.5 pt-2.5 font-bold text-white">ETH</span>
              </div>
              <div>
                <img src={Vectordown} alt="VectorDown" className=" mr-5 pt-6" />
              </div>
              {isOpen && (
                <div
                  id="dropdown-options"
                  className="2xl:bg-[#ffffff0f] pl-4 leading-3 xl:bg-[#ffffff0f] lg:bg-[#ffffff0f] md:bg-[#ffffff0f] sm:bg-[#ffffff0f] max-sm:bg-[#ffffff0f] border-[#ffffff0f] border-2 absolute !z-[100] rounded-[1rem] overflow-auto scroll-smooth backdrop-blur-sm  2xl:w-[18.854rem] xl:w-[18.875rem] lg:w-[18.875rem] md:w-[18.875rem] sm:w-[14.625rem] max-sm:w-[14.625rem] 2xl:h-[10rem] xl:h-[10rem] lg:h-[10rem] md:h-[8.5rem] sm:h-[7.425rem] max-sm:h-[7.425rem] 2xl:left-[24rem] xl:left-[24rem] lg:left-[24rem] md:left-[16.5rem] sm:left-[6rem] max-sm:left-[6rem] top-[4.7rem] "
                >
                  <div className=" flex pt-3.5">
                    <div>
                      <img src={Eth} alt="Eth" />
                    </div>
                    <div className="text-[#ffffff80] pl-3 pt-1.5">Ethereum</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-[19.167rem] h-[3.5rem] rounded-[2rem] bg-[#ffffff0f] ml-5 mt-3.5 2xl:inline xl:inline lg:inline md:hidden sm:hidden max-sm:hidden">
            <div className=" text-[white] text-[0.875rem] flex justify-around items-center pt-3.5 font-normal ">
              Advanced View
              <Switch />
            </div>
          </div>
          <div className="2xl:inline-flex xl:inline-flex lg:inline-flex md:hidden sm:hidden  max-sm:hidden">
            <div className="w-[19.167rem] h-[3.5rem] rounded-[2rem] bg-[#ffffff0f] ml-5 mt-3.5 flex justify-around p-[6%_1%] 2xl:inline-flex xl:inline-flex lg:inline-flex md:hidden sm:hidden  max-sm:hidden">
              <div className="text-[0.75rem] text-[#FFFFFF80] font-bold">
                Switch
              </div>
              <div className="flex ">
                <div className="text-[0.625rem] text-[#FFFFFF80]">
                  Powered by
                </div>
                <img
                  src={EthosX}
                  alt="Ethosx"
                  className=" pl-3 w-[5.015rem] h-[1rem]"
                />
              </div>
            </div>
          </div>
          <div className="2xl:inline-flex xl:inline-flex lg:inline-flex md:hidden sm:hidden  max-sm:hidden">
            <div className="bg-[#ffffff0f] w-[2.5rem] h-[2.5rem] ml-5 mt-5 flex justify-center items-center rounded-[0.5rem] cursor-pointer 2xl:inline-flex xl:inline-flex lg:inline-flex md:hidden sm:hidden max-sm:hidden">
              <img src={sun} alt="sun" />
            </div>
          </div>
          <div
            className=" 2xl:hidden xl:hidden lg:hidden md:inline sm:inline max-sm:inline pt-7 cursor-pointer"
            onClick={handleopen}
          >
            <img src={menu} alt="/menu" />
            {sidebarOpen && (
              <div>
                <Sidebar />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
