
"use client";

import { IoSettingsOutline } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";


const Sidebar = () => {

 
  
  return (
    <div className="fixed top-0 left-0 bottom-0 h-screen dark:bg-gray-900 bg-gray-100
     w-[330px] border-r dark:border-gray-800 border-gray-200 pt-4">
        

        <div className="flex flex-col space-y-10 h-full">

            <div className="flex items-center space-x-1 pl-4">
                
                <span className="text-2xl">Law Chatbot</span>
            </div>

            <div className="flex flex-col p-4 justify-between h-full">
                <div className="flex flex-col gap-y-8">
                    <div className="flex justify-between items-center pr-4 cursor-pointer">
                      <span className="text-lg">New chat</span> <FaRegPenToSquare className="text-lg"/>
                    </div>
                    <ul className="text-sm flex flex-col gap-y-2 border border-slate-200 rounded-lg p-2">
                      <li>History</li>
                      <li>History</li>
                      <li>History</li>
                    </ul>
                </div>

                <div className="flex items-center space-x-2 cursor-pointer">
                  <IoSettingsOutline className="text-xl" /> <span className="font-medium">Settings</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar