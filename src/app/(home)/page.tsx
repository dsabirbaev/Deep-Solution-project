"use client";

import { useState, useEffect } from "react";

import { RiSendPlaneFill } from "react-icons/ri";

import usePost from "@/service/post/usePost";

import { Button } from "@/components/ui/button";


import { FaRegLightbulb } from "react-icons/fa";
import { CgPen } from "react-icons/cg";

import { FaQuestion } from "react-icons/fa6";
import { LuBookMinus } from "react-icons/lu";
export default function Home() {

  const[text, setText] = useState<string>("");
  const[audioUrl, setAudioUrl] = useState<string>("");
  const[listAudio, setListAudio] = useState<string[]>([]);

  const sendData = () => {

    const data = {
      text: text,
      model: "davron",
      mood: "neutral",
      blocking: "true",
      webhook_notification_url: ""
    }

    usePost.getData(data).then((res) => {
        console.log(res.data.result.url)
        setAudioUrl(res.data.result.url)
        setListAudio((prevList) => [...prevList, res.data.result.url]);
        setText(" ");
    }).catch((err: any) => {
      console.log(err)
    })
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendData();
    }
  };
  

  return (
   <>
      <div className="flex flex-col justify-between h-full pb-4">
        <div className="flex items-center justify-center">
          <div className="p-4">
          {
            audioUrl ? (
              <ul className="flex flex-col gap-y-4">
                {
                  listAudio.map((item) => (
                      <li>
                        <audio controls>
                          <source src={item} type="audio/mp3" />
                        </audio>
                      </li>
                  
                  ))
                }
              </ul>
            
            ): (
              <>
                <div>
                   <div className="text-[50px] font-bold mb-24">
                   <h1 style={{
                      background: 'linear-gradient(135deg, #f66a4b 15.87%, #a24ae7 60.65%, #4859f3 89.14%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>                  
                        Salom, men huquqshunos AI!
                      </h1>
                      <h2 className="text-gray-300">Qanday yordam bera olaman?</h2>
                   </div>

                   <div className="flex items-start justify-between gap-x-2">
                      <div className="w-[200px] h-[200px] bg-red-300 bg-[#F0F4F9] dark:bg-transparent dark:border dark:border-gray-400 hover:bg-[#edeff1] rounded-[12px] relative cursor-pointer">
                        <p className="absolute top-4 left-4 text-sm">Ko'rsatmalar</p>
                        <span className="bg-white w-[40px] h-[40px] block rounded-full flex items-center justify-center absolute right-3 bottom-4 dark:bg-transparent dark:border dark:border-gray-400">  
                          <FaRegLightbulb className="text-2xl" />
                        </span>
                      </div>

                      <div className="w-[200px] h-[200px] bg-red-300 bg-[#F0F4F9] dark:bg-transparent dark:border dark:border-gray-400 hover:bg-[#edeff1] rounded-[12px] relative cursor-pointer">
                        <p className="absolute top-4 left-4 text-sm">Fan sohalari</p>
                        <span className="bg-white w-[40px] h-[40px] block rounded-full flex items-center justify-center absolute right-3 bottom-4 dark:bg-transparent dark:border dark:border-gray-400">  
                          <LuBookMinus className="text-2xl" />
                        </span>
                      </div>
                      <div className="w-[200px] h-[200px] bg-red-300 bg-[#F0F4F9] dark:bg-transparent dark:border dark:border-gray-400 hover:bg-[#edeff1] rounded-[12px] relative cursor-pointer">
                        <p className="absolute top-4 left-4 text-sm">YouTube kanalini qanday rivojlantirish kerak</p>
                        <span className="bg-white w-[40px] h-[40px] block rounded-full flex items-center justify-center absolute right-3 bottom-4 dark:bg-transparent dark:border dark:border-gray-400">  
                          <CgPen className="text-2xl" />
                        </span>
                      </div>
                      <div className="w-[200px] h-[200px] bg-red-300 bg-[#F0F4F9] dark:bg-transparent dark:border dark:border-gray-400 hover:bg-[#edeff1] rounded-[12px] relative cursor-pointer">
                        <p className="absolute top-4 left-4 text-sm">Savollar ro'yxati</p>
                        <span className="bg-white w-[40px] h-[40px] block rounded-full flex items-center justify-center absolute right-3 bottom-4 dark:bg-transparent dark:border dark:border-gray-400">  
                          <FaQuestion className="text-2xl" />
                        </span>
                      </div>
                   </div>
                </div>
              </>
            )
          }
        
          </div>
        </div>

        <div className="flex items-center justify-center">
        
          <div className="w-[900px] flex items-center justify-center border border-blue-200 px-3 rounded-[30px]">
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown}  placeholder="Qidirish..." className="placeholder:text-md p-4 py-4 focus:ring-0 appearance-none outline-0 border-none text-lg w-full bg-transparent"/>
              <Button onClick={() => sendData()} className="text-lg dark:bg-transparent dark:border dark:border-gray-400 dark:text-white py-6 rounded-full" title="Send">
                <RiSendPlaneFill />
              </Button>
          </div>

        </div>
      </div>
   </>
  );
}
