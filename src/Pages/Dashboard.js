import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import instruction from "../assets/icons/instruction.svg";
import downleftarrow from "../assets/icons/downleftarrow.svg";
import Downarrow from "../assets/icons/Downarrow.svg";
import linechart from "../assets/icons/linechart.svg";
import Graphic from "./Component/Graphic";
import Sparklinechart from "./Component/Sparklinechart";
import { TECollapse, TERipple } from "tw-elements-react";
import { useState } from "react";
const Dashboard = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);
  return (
    <div className=" font-inter flex ">
      <div className=" 2xl:inline xl:inline lg:inline md:hidden sm:hidden max-sm:hidden">
        <Sidebar />
      </div>
      <div className="flex flex-col overflow-auto">
        <div className=" ml-10">
          <Navbar />
        </div>
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col 2xl:justify-normal xl:justify-normal lg:justify-normal md:justify-center sm:justify-center max-sm:justify-center">
          <div className=" flex flex-col  items-center">
            <div className="2xl:w-[32.5rem] xl:w-[32.5rem] lg:w-[32.5rem] md:w-[32.5rem] sm:w-[21rem] max-sm:w-[21rem] h-[28.875rem] bg-gradient-to-r from-[#f5fffa0f] to-[#F5F7FA00] border-[#1e1f22] border-2 rounded-[1rem] 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-10 sm:ml-0 max-sm:ml-0 mt-7">
              <div>
                <Tabs>
                  <TabList className="flex justify-around bg-[#0f1012] rounded-t-[1rem] h-[3.5rem] border-b-2 border-[#1e1f22] cursor-pointer backdrop-blur-sm">
                    <Tab className="text-white items-center  w-[16.25rem] hover:bg-[#1f2122] hover:rounded-t-[1rem] flex justify-center">
                      Hedge
                    </Tab>
                    <Tab className="text-white items-center w-[16.25rem] hover:bg-[#1f2122] hover:rounded-t-[1rem] flex justify-center">
                      Earn
                    </Tab>
                  </TabList>
                  <div className="flex justify-center">
                    <TabPanel className="">
                      <div className="2xl:w-[29.5rem] xl:w-[29.5rem] lg:w-[29.5rem] md:w-[29.5rem] sm:w-[19.5rem] max-sm:w-[19.5rem] h-[7.688rem] rounded-[1rem] border-2 border-[#1e1f22] mt-6">
                        <div className="flex justify-between text-[0.875rem] text-[#FFFFFFCC] leading-8 p-[3%_5%]">
                          <ul>
                            <li>1 Long Switch</li>
                            <li>1 Eth</li>
                            <li className="flex">
                              Expected Return:
                              <img
                                src={instruction}
                                alt="instruction"
                                className="pl-2"
                              />
                            </li>
                          </ul>
                          <ul>
                            <li className="text-right">1 USDC</li>
                            <li>1234 USDC</li>
                            <li className="text-right">2%</li>
                          </ul>
                        </div>
                      </div>
                      <div className="2xl:w-[29.5rem] xl:w-[29.5rem] lg:w-[29.5rem] md:w-[29.5rem] sm:w-[19.5rem] max-sm:w-[19.5rem] h-[9.5rem] rounded-[1rem] border-2 border-[#1e1f22] bg-[#0000004D] mt-3">
                        <div className=" text-[0.875rem] text-[#ffffffcc]">
                          <div className=" flex justify-between p-[4%_5%]">
                            <div className="flex">
                              Quantity to Buy/Sell
                              <img
                                src={instruction}
                                alt="instruction"
                                className="pl-2"
                              />
                            </div>
                            <div className="text-[#67FFD1] flex cursor-pointer">
                              Calculate
                              <img
                                src={downleftarrow}
                                alt="/"
                                className=" pl-2"
                              />
                            </div>
                          </div>
                          <div className=" flex justify-center ">
                            <div className=" flex justify-between border-b-2 2xl:w-[26.5rem] xl:w-[26.5rem] lg:w-[26.5rem] md:w-[26.5rem] sm:w-[17.5rem] max-sm:w-[17.5rem] border-[#1e1f22] h-[2.5rem]">
                              <input
                                className=" bg-transparent outline-none 1.25rem w-[8.625rem] "
                                placeholder="0.01"
                              />
                              <div className="text-[0.875rem] 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-2 max-sm:pt-2">
                                Long switch Token
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between 2xl:p-[2%_4%] xl:p-[2%_4%] lg:p-[2%_4%] md:p-[2%_4%] sm:p-[5%_4%] max-sm:p-[5%_4%]">
                            <div>Holding 10LS</div>
                            <div className="flex">
                              <div className="bg-[#252527] rounded-[0.5rem] w-[3.25rem] h-[1.938rem] flex justify-center items-center text-[0.75rem] ">
                                max
                              </div>
                              <div className="bg-[#3c191c] rounded-[0.5rem] w-[3.25rem] h-[1.938rem] flex justify-center items-center text-[0.75rem] ml-2">
                                Clear
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between mt-5">
                        <button className="2xl:w-[14.5rem] xl:w-[14.5rem] lg:w-[14.5rem] md:w-[14.5rem] sm:w-[9.5rem] max-sm:w-[9.5rem] h-[3.188rem] button-gradient border-2 bg-gradient-to-r from-[#E0E0FF05] to-gradient-[#00F9A9] rounded-[1rem]  ">
                          <span className="bg-gradient-to-r from-[#67ffd1] to-[#4f9dff] font-bold bg-clip-text text-transparent">
                            Buy
                          </span>
                        </button>
                        <button className="2xl:w-[14.5rem] xl:w-[14.5rem] lg:w-[14.5rem] md:w-[14.5rem] sm:w-[9.5rem] max-sm:w-[9.5rem] h-[3.188rem] button-gradient border-2 bg-gradient-to-r from-[#E0E0FF05] to-gradient-[#00F9A9] rounded-[1rem] ">
                          <span className="bg-gradient-to-r from-[#67ffd1] to-[#4f9dff] font-bold bg-clip-text text-transparent">
                            Sell
                          </span>
                        </button>
                      </div>
                    </TabPanel>
                  </div>
                </Tabs>
              </div>
            </div>
            <div className=" 2xl:w-[32.5rem] xl:w-[32.5rem] lg:w-[32.5rem] md:w-[32.5rem] sm:w-[21rem] max-sm:w-[21rem] h-[19.75rem] bg-gradient-to-r from-[#f5fffa0f] to-[#f5fffa00] border-[#1e1f22] border-2 rounded-[1rem] 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-10 sm:ml-0 max-sm:ml-0 mt-7 ">
              <Tabs>
                <TabList className="flex justify-center items-center rounded-t-[1rem]  ">
                  <Tab className="2xl:text-[0.875rem] xl:text-[0.875rem] lg:text-[0.875rem] md:text-[0.875rem] sm:text-[0.75rem] max-sm:text-[0.75rem] hover:font-bold outline-none text-[#FFFFFF] hover:text-white font-normal 2xl:pl-14 xl:pl-14 lg:pl-14 md:pl-14 sm:pl-7 max-sm:pl-7 pt-4  hover:bg-[#FFFFFF0F] hover:rounded-l-[1rem] cursor-pointer  h-[3.5rem] w-[10.833rem]">
                    Open orders
                  </Tab>
                  <Tab className="2xl:text-[0.875rem] xl:text-[0.875rem] lg:text-[0.875rem] md:text-[0.875rem] sm:text-[0.75rem] max-sm:text-[0.75rem] hover:font-bold outline-none text-[#FFFFFF] hover:text-white font-normal 2xl:pl-14 xl:pl-14 lg:pl-14 md:pl-14 sm:pl-7 max-sm:pl-7 pt-4  hover:bg-[#FFFFFF0F] hover:rounded-t-[0rem] cursor-pointer  h-[3.5rem] w-[10.833rem]">
                    Positions
                  </Tab>
                  <Tab className="2xl:text-[0.875rem] xl:text-[0.875rem] lg:text-[0.875rem] md:text-[0.875rem] sm:text-[0.75rem] max-sm:text-[0.75rem] hover:font-bold outline-none text-[#FFFFFF] hover:text-white font-normal 2xl:pl-14 xl:pl-14 lg:pl-14 md:pl-14 sm:pl-7 max-sm:pl-7 pt-4  hover:bg-[#FFFFFF0F] hover:rounded-r-[1rem] cursor-pointer  h-[3.5rem] w-[10.833rem]">
                    History
                  </Tab>
                </TabList>
                <div className="flex justify-center">
                  <TabPanel>
                    <div className="flex justify-center">
                      <div className="2xl:w-[30.5rem] xl:w-[30.5rem] lg:w-[30.5rem] md:w-[30.5rem] sm:w-[19.5rem] max-sm:w-[19.5rem] h-[4.625rem] p-[4%_4%] flex justify-between border-b-2 border-[#1e1f22]">
                        <div className="text-[0.75rem] text-[#FFFFFF66] flex flex-col">
                          Pending Deposit (Long):
                          <span className="text-white">10 USDC</span>
                        </div>
                        <div>
                          <button className="text-[#00F9A9] 2xl:text-[0.75rem] xl:text-[0.75rem] lg:text-[0.75rem] md:text-[0.75rem] sm:text-[0.625rem] max-sm:text-[0.625rem] font-bold border-2 border-[#01FCCE33] rounded-[0.5rem] 2xl:w-[4.563rem] xl:w-[4.563rem] lg:w-[4.563rem] md:w-[4.563rem] sm:w-[3.125rem] max-sm:w-[3.125rem] h-[2rem]">
                            Switch
                          </button>
                          <button className="text-[#FF5555] 2xl:text-[0.75rem] xl:text-[0.75rem] lg:text-[0.75rem] md:text-[0.75rem] sm:text-[0.625rem] max-sm:text-[0.625rem] font-bold ml-4 border-2 border-[#01FCCE33] rounded-[0.5rem] 2xl:w-[4.563rem] xl:w-[4.563rem] lg:w-[4.563rem] md:w-[4.563rem] sm:w-[3.125rem] max-sm:w-[3.125rem] h-[2rem]">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="2xl:w-[30.5rem] xl:w-[30.5rem] lg:w-[30.5rem] md:w-[30.5rem] sm:w-[19.5rem] max-sm:w-[19.5rem] h-[4.625rem] p-[4%_4%] flex justify-between ">
                        <div className="text-[0.75rem] text-[#FFFFFF66] flex flex-col">
                          Pending Deposit (Long):
                          <span className="text-white">10 USDC</span>
                        </div>
                        <div>
                          <button className="text-[#00F9A9] 2xl:text-[0.75rem] xl:text-[0.75rem] lg:text-[0.75rem] md:text-[0.75rem] sm:text-[0.625rem] max-sm:text-[0.625rem] font-bold border-2 border-[#01FCCE33] rounded-[0.5rem] 2xl:w-[4.563rem] xl:w-[4.563rem] lg:w-[4.563rem] md:w-[4.563rem] sm:w-[3.125rem] max-sm:w-[3.125rem] h-[2rem]">
                            Switch
                          </button>
                          <button className="text-[#FF5555] 2xl:text-[0.75rem] xl:text-[0.75rem] lg:text-[0.75rem] md:text-[0.75rem] sm:text-[0.625rem] max-sm:text-[0.625rem] font-bold ml-4 border-2 border-[#01FCCE33] rounded-[0.5rem] 2xl:w-[4.563rem] xl:w-[4.563rem] lg:w-[4.563rem] md:w-[4.563rem] sm:w-[3.125rem] max-sm:w-[3.125rem] h-[2rem]">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="flex justify-center">
                      <div className="2xl:w-[30.5rem] xl:w-[30.5rem] lg:w-[30.5rem] md:w-[30.5rem] sm:w-[19.5rem] max-sm:w-[19.5rem] h-[4.625rem] flex justify-between p-[2%_5%]">
                        <div className="text-[0.75rem] text-[#FFFFFF66] flex flex-col ">
                          Long Switch Tokens
                          <span className="text-white">10</span>
                        </div>
                        <div className="text-[0.75rem] text-[#00f9a9] font-bold">
                          Sell
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between text-[0.75rem] text-[#FFFFFF66] p-[0%_4%]">
                      <div className="2xl:w-[13.75rem] xl:w-[13.75rem] lg:w-[13.75rem] md:w-[13.75rem] sm:w-[9rem] max-sm:w-[9rem] h-[2.438rem] flex justify-between bg-[#000000] p-[2%_3%] rounded-[0.5rem]">
                        <div>Profit</div>
                        <div>0.4LS</div>
                      </div>
                      <div className="2xl:w-[13.75rem] xl:w-[13.75rem] lg:w-[13.75rem] md:w-[13.75rem] sm:w-[9rem] max-sm:w-[9rem] h-[2.438rem] flex justify-between bg-[#000000] p-[2%_3%] rounded-[0.5rem]">
                        <div>APY</div>
                        <div>27%</div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="text-[0.75rem] text-[#FFFFFF66] overflow-scroll 2xl:ml xl:ml-0 lg:ml-0 md:ml-0 sm:ml-12 max-sm:ml-12">
                      <div className="flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-start sm:justify-center max-sm:justify-center h-[3.18rem] 2xl:w-[28rem] xl:w-[28rem] lg:w-[28rem] md:w-[28rem] sm:w-[19.5rem] max-sm:w-[19.5rem] mr-10 pt-2 border-b-2 border-b-[#1e1f22]">
                        <div className=" pt-1 text-[0.625rem] w-[3.2rem]">
                          10.00 pm
                        </div>
                        <div className="bg-[#000000] w-[2.813rem] h-[1.938rem] flex justify-center items-center rounded-[0.5rem] text-center ml-10">
                          -0.01
                        </div>
                        <div className="bg-[#000000] w-[8.125rem] h-[1.938rem] flex justify-center rounded-[0.5rem] text-white font-bold items-center ml-2">
                          10.052
                          <span className=" pl-2 font-normal text-[#FFFFFF66] 2xl:text-[0.75rem] xl:text-[0.75rem] lg:text-[0.75rem] md:text-[0.75rem] sm:text-[0.65rem] max-sm:text-[0.65rem]">
                            Long Switch
                          </span>
                        </div>
                        <div className="bg-[#000000] w-[4.438rem] h-[1.938rem] rounded-[0.5rem] flex justify-center items-center ml-2">
                          -17% APY
                        </div>
                        <div></div>
                      </div>
                      <div className="flex justify-start h-[3.18rem] 2xl:w-[28rem] xl:w-[28rem] lg:w-[28rem] md:w-[28rem] sm:w-[19.5rem] max-sm:w-[19.5rem] mr-10 pt-2 border-b-2 border-b-[#1e1f22]">
                        <div className=" pt-1 text-[0.625rem] w-[3.2rem]">
                          9.00 pm
                        </div>
                        <div className="bg-[#000000] w-[2.813rem] h-[1.938rem] flex justify-center items-center rounded-[0.5rem] text-center ml-12">
                          -0.01
                        </div>
                        <div className="bg-[#000000] w-[8.125rem] h-[1.938rem] flex justify-center rounded-[0.5rem] text-white font-bold items-center ml-2 2xl:text-[0.75rem] xl:text-[0.75rem] lg:text-[0.75rem] md:text-[0.75rem] sm:text-[0.65rem] max-sm:text-[0.65rem]">
                          10.052
                          <span className=" pl-2 font-normal text-[#FFFFFF66]">
                            Long Switch
                          </span>
                        </div>
                        <div className="bg-[#000000] w-[4.438rem] h-[1.938rem] flex justify-center rounded-[0.5rem] items-center ml-2">
                          -17% APY
                        </div>
                        <div></div>
                      </div>
                      <div className="flex justify-start h-[3.18rem] 2xl:w-[28rem] xl:w-[28rem] lg:w-[28rem] md:w-[28rem] sm:w-[19.5rem] max-sm:w-[19.5rem] mr-10 pt-2 border-b-2 border-b-[#1e1f22]">
                        <div className=" pt-1 text-[0.625rem] w-[3.2rem]">
                          8.00 pm
                        </div>
                        <div className="bg-[#000000] w-[2.813rem] h-[1.938rem] flex justify-center items-center rounded-[0.5rem] text-center ml-12">
                          -0.01
                        </div>
                        <div className="bg-[#000000] w-[8.125rem] h-[1.938rem] flex justify-center rounded-[0.5rem] text-white font-bold items-center ml-2">
                          10.052
                          <span className=" pl-2 font-normal text-[#FFFFFF66] 2xl:text-[0.75rem] xl:text-[0.75rem] lg:text-[0.75rem] md:text-[0.75rem] sm:text-[0.65rem] max-sm:text-[0.65rem]">
                            Long Switch
                          </span>
                        </div>
                        <div className="bg-[#000000] w-[4.438rem] h-[1.938rem] flex justify-center rounded-[0.5rem] items-center ml-2">
                          -17% APY
                        </div>
                      </div>
                      <div className="2xl:hidden xl:hidden lg:hidden md:inline-flex sm:inline-flex max-sm:inline-flex">
                        <div className="flex  justify-start h-[3.18rem] 2xl:w-[28rem] xl:w-[28rem] lg:w-[28rem] md:w-[28rem] sm:w-[19.5rem] max-sm:w-[19.5rem] mr-10 pt-2 border-b-2 border-b-[#1e1f22]">
                          <div className=" pt-1 text-[0.625rem] w-[3.2rem]">
                            8.00 pm
                          </div>
                          <div className="bg-[#000000] w-[2.813rem] h-[1.938rem] flex justify-center items-center rounded-[0.5rem] text-center ml-12">
                            -0.01
                          </div>
                          <div className="bg-[#000000] w-[8.125rem] h-[1.938rem] flex justify-center rounded-[0.5rem] text-white font-bold items-center ml-2">
                            10.052
                            <span className=" pl-2 font-normal text-[#FFFFFF66] 2xl:text-[0.75rem] xl:text-[0.75rem] lg:text-[0.75rem] md:text-[0.75rem] sm:text-[0.65rem] max-sm:text-[0.65rem]">
                              Long Switch
                            </span>
                          </div>
                          <div className="bg-[#000000] w-[4.438rem] h-[1.938rem] flex justify-center rounded-[0.5rem] items-center ml-2">
                            -17% APY
                          </div>
                        </div>
                      </div>
                      <div className="2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex sm:hidden max-sm:hidden">
                        <div className="flex justify-start pl-2 pt-4">
                          <button className="w-[28rem] h-[3rem] rounded-[2.5rem] border-2 text-[1rem] font-bold text-white">
                            View Previous Trade History
                          </button>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
          <div className="flex flex-col 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-28 sm:ml-0 max-sm:ml-0 items-center">
            <div className="2xl:w-[33rem] xl:w-[33rem] lg:w-[33rem] md:w-[33rem] sm:w-[21rem] max-sm:w-[21rem] bg-gradient-to-r from-[#f5fffa0f] to-[#F5F7FA00] border-[#1e1f22] border-2 rounded-[1rem] ml-3 mt-7 shadow-[#090D141F] h-auto">
              <TERipple className="2xl:w-[33rem] xl:w-[33rem] lg:w-[33rem] md:w-[33rem] sm:w-[21rem] max-sm:w-[21rem]">
                <div
                  className="flex justify-between text-[0.875rem] text-[white] h-[3.5rem] w-auto border-[#2f3033] p-[3%_6%]"
                  onClick={toggleShow}
                >
                  <div>Chart</div>
                  <div className="w-[3.688rem] h-[1.75rem] cursor-pointer bg-[#FFFFFF1A] rounded-[0.5rem] flex justify-center items-center text-[0.625rem]">
                    Hide
                    <img src={Downarrow} alt="/Downarrow" className=" pl-2" />
                  </div>
                </div>
              </TERipple>
              <TECollapse show={show}>
                <div className="2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex sm:hidden max-sm:hidden border-t-2 border-[#1e1f22]">
                  <Graphic />
                </div>
              </TECollapse>
            </div>
            <div className="2xl:w-[33rem] xl:w-[33rem] lg:w-[33rem] md:w-[33rem] sm:w-[21rem] max-sm:w-[21rem] h-[22.375rem] bg-gradient-to-r from-[#f5fffa0f] to-[#F5F7FA00] border-[#1e1f22] border-2 rounded-[1rem] ml-3 shadow-[#090D141F] mt-3">
              <div>
                <div className="text-white text-[0.875rem] font-bold h-[3.5rem] w-auto border-[#2f3033] border-b-2 pt-3.5 pl-5">
                  Current and Next Cycle
                </div>
              </div>
              <div className="flex justify-between ml-4 mt-5 2xl:overflow-hidden xl:overflow-hidden lg:overflow-hidden md:overflow-hidden sm:overflow-x-scroll max-sm:overflow-x-scroll">
                <div className="w-[16.25rem] h-[12.875rem] ">
                  <div className="text-[0.75rem] text-white font-normal 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-0 max-sm:pl-4">
                    Current Cycle
                  </div>
                  <div className="2xl:w-[15.25rem] xl:w-[15.25rem] lg:w-[15.25rem] md:w-[15.25rem] sm:w-[15rem] max-sm:w-[15rem] mt-2 h-[2.438rem] rounded-[0.5rem] bg-[#0000004d] text-[#a0a0a1] text-[0.75rem] flex pt-2.5 pl-4">
                    Cycle Start Time (GMT):
                    <img
                      src={instruction}
                      alt="/"
                      className="w-[0.75rem] h-[0.75rem] mt-0.5 ml-1"
                    />
                    <span className="text-white pl-5">09:00</span>
                  </div>
                  <div className="flex mt-2 justify-between w-[15.25rem]">
                    <div className="w-[7.375rem] h-[4.813rem] rounded-[0.5rem] bg-[#0000004d] text-[0.75rem] text-[#a0a0a1] pl-4 pt-2">
                      <div>Start Price</div>
                      <div>(ETH):</div>
                      <div className="text-white pt-2">0.90</div>
                    </div>
                    <div className="w-[7.375rem] h-[4.813rem] rounded-[0.5rem] bg-[#0000004d]">
                      <div className="w-[7.375rem] h-[4.813rem] rounded-[0.5rem] bg-[#0000004d] text-[0.75rem] text-[#a0a0a1] pl-4 pt-2">
                        <div>Current Price</div>
                        <div>(ETH):</div>
                        <div className="text-white pt-2">0.90</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[15.25rem] mt-2 h-[2.438rem] rounded-[0.5rem] bg-[#0000004d] text-[#a0a0a1] text-[0.75rem] flex pt-2.5 pl-4">
                    Expected Premium:
                    <img
                      src={instruction}
                      alt="/"
                      className="w-[0.75rem] h-[0.75rem] mt-0.5 ml-1"
                    />
                    <span className="text-white pl-5">1.2%</span>
                  </div>
                </div>
                <div className="w-[16.25rem] h-[12.875rem]">
                  <div className="text-[0.75rem] text-white font-normal 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-0 max-sm:pl-4">
                    Next Cycle
                  </div>
                  <div className="w-[15.25rem] mt-2 h-[2.438rem] rounded-[0.5rem] bg-[#0000004d] text-[#a0a0a1] text-[0.75rem] flex pt-2.5 pl-4">
                    Cycle Start Time (GMT):
                    <img
                      src={instruction}
                      alt="/"
                      className="w-[0.75rem] h-[0.75rem] mt-0.5 ml-1"
                    />
                    <span className="text-white pl-5">10:00</span>
                  </div>
                  <div className="flex mt-2 justify-between w-[15.25rem]">
                    <div className="w-[7.375rem] h-[4.813rem] rounded-[0.5rem] bg-[#0000004d] text-[0.75rem] text-[#a0a0a1] pl-4 pt-2">
                      <div className="flex">
                        Trigger Price
                        <img
                          src={instruction}
                          alt="/"
                          className="w-[0.75rem] h-[0.75rem] mt-0.5 ml-1"
                        />
                      </div>
                      <div>Up (ETH):</div>
                      <div className="text-white pt-2">0.90</div>
                    </div>
                    <div className="w-[7.375rem] h-[4.813rem] rounded-[0.5rem] bg-[#0000004d]">
                      <div className="w-[7.375rem] h-[4.813rem] rounded-[0.5rem] bg-[#0000004d] text-[0.75rem] text-[#a0a0a1] pl-4 pt-2">
                        <div className="flex ">
                          Trigger Price
                          <img
                            src={instruction}
                            alt="/"
                            className="w-[0.75rem] h-[0.75rem] mt-0.5 ml-1"
                          />
                        </div>
                        <div>Down (ETH):</div>
                        <div className="text-white pt-2">0.90</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[15.25rem] mt-2 h-[2.438rem] rounded-[0.5rem] bg-[#0000004d] text-[#a0a0a1] text-[0.75rem] flex pt-2.5 pl-4">
                    Expected Premium:
                    <img
                      src={instruction}
                      alt="/"
                      className="w-[0.75rem] h-[0.75rem] mt-0.5 ml-1"
                    />
                    <span className="text-white pl-5">1.2%</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between 2xl:w-[15.25rem] xl:w-[15.25rem] lg:w-[15.25rem] md:w-[15.25rem] sm:w-auto max-sm:w-auto h-[3.25rem] 2xl:overflow-visible xl:overflow-visible lg:overflow-visible md:overflow-visible sm:overflow-x-scroll max-sm:overflow-x-scroll">
                <div className="pl-5 pt-3">
                  <div className=" flex w-[14.75rem] justify-between text-[0.625rem] text-[#a0a0a1]">
                    <div>LONG</div>
                    <div>SHORT</div>
                  </div>
                  <div>
                    <div className=" font-bold text-[0.625rem] text-[#a0a0a1] pt-2 flex justify-between">
                      25%
                      <img
                        src={linechart}
                        alt="/"
                        className="w-[12.063rem] h-[0.5rem] mt-0.5 ml-1"
                      />
                      <span className=" pl-1"> 75%</span>
                    </div>
                  </div>
                </div>
                <div className="pl-4 pt-3 ">
                  <div className=" flex w-[14.75rem] justify-between text-[0.625rem] text-[#a0a0a1]">
                    <div>LONG</div>
                    <div>SHORT</div>
                  </div>
                  <div>
                    <div className=" font-bold text-[0.625rem] text-[#a0a0a1] pt-2 flex justify-between ">
                      25%
                      <img
                        src={linechart}
                        alt="/"
                        className="w-[12.063rem] h-[0.5rem] mt-0.5 ml-1"
                      />
                      <span className=" pl-1"> 75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="2xl:w-[33rem] xl:w-[33rem] lg:w-[33rem] md:w-[33rem] sm:w-[21rem] max-sm:w-[21rem] h-[19.375rem] bg-gradient-to-r from-[#f5fffa0f] to-[#F5F7FA00] border-[#1e1f22] border-2 rounded-[1rem] ml-3 shadow-[#090D141F] mt-3">
              <div>
                <div className="flex justify-between text-[0.875rem] text-[white] h-[3.5rem] w-auto border-[#2f3033] border-b-2 p-[3%_6%]">
                  <div>Previous Cycle returns</div>
                  <img src={instruction} alt="/instruction" className=" pl-2" />
                </div>
                <div>
                  <Sparklinechart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
