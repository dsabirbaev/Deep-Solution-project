
"use client";

import { IoSettingsOutline } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
const Sidebar = () => {

 
  
  return (
    <div className="fixed top-0 left-0 bottom-0 h-screen dark:bg-gray-900 bg-[#f0f4f8]
     w-[330px]  dark:border-gray-800 pt-4">
        

        <div className="flex flex-col space-y-10 h-full">

            <div className="flex items-center space-x-1 pl-4">
                
                <span className="text-2xl">H.chat</span>
            </div>

            <div className="flex flex-col py-4 pb-6 justify-between h-full">

                <div className="flex flex-col gap-y-8 px-2">
                    <div className="flex justify-between items-center p-2 px-3 cursor-pointer hover:bg-gray-200 hover:rounded-2xl hover:dark:text-black  border border-slate-300 rounded-2xl">
                      <span className="text-lg">Yangi chat</span> <FaRegPenToSquare className="text-md"/>
                    </div>
                    
                    {/* <ul className="text-sm flex flex-col gap-y-2 border border-slate-200 rounded-lg p-2">
                      <li>History</li>
                      <li>History</li>
                      <li>History</li>
                    </ul> */}
                </div>

                <div className="flex flex-col gap-y-1 cursor-pointer  mx-2  ">
                
                  <div className="flex space-x-2 items-center hover:rounded-2xl hover:bg-gray-200 p-2 hover:dark:text-black">
                    <AiOutlineQuestionCircle className="text-lg" /> <span className="text-[14px]">Ma'lumotnoma</span>
                  </div>
                  <div className="flex space-x-2 items-center hover:rounded-2xl hover:bg-gray-200 p-2 hover:dark:text-black">
                    <PiClockCounterClockwiseFill className="text-lg" /> <span className="text-[14px]">Faoliyat</span>
                  </div>
                  <div className="flex space-x-2 items-center hover:rounded-2xl hover:bg-gray-200 p-2 hover:dark:text-black">
                    <IoSettingsOutline className="text-lg" /> <span className="text-[14px]">Sozlamalar</span>
                  </div>
                <div className="p-2">
                  <div className="flex items-center gap-x-1 mt-2">
                      <GoDotFill className="text-[12px]" /> <p className="text-[12px]">Toshkent, Oʻzbekiston</p>
                  </div>
                  <p className="text-[10px] pl-4">Deep Solution © 2024</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar