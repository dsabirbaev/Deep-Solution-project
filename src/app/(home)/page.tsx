"use client";

import { useState, useEffect } from "react";

import { RiSendPlaneFill } from "react-icons/ri";

import usePost from "@/service/post/usePost";

import { Button } from "@/components/ui/button";

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
        <div className="border border-slate-100 p-4 rounded-lg">
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
            <span></span>
           )
         }
       
        </div>
        <div className="flex items-center justify-center">
        
         <div className="w-[900px] flex items-center justify-center border px-2 rounded-lg">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown}  placeholder="Message..." className="p-4 py-4 focus:ring-0 appearance-none outline-0 border-none text-lg w-full"/>
            <Button onClick={() => sendData()} className="text-lg py-6" title="Send">
              <RiSendPlaneFill />
            </Button>
         </div>

        </div>
      </div>
   </>
  );
}
