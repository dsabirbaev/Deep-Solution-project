"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
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
        <div className="flex items-center justify-center relative gap-x-2">
          <Input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown} type="text" placeholder="Message..." className="max-w-[900px] p-4 py-6 text-lg"/>
          
          <Button onClick={() => sendData()} className="absolute top-[7px] right-[9%] text-lg" title="Send">
            <RiSendPlaneFill />
          </Button>

        </div>
      </div>
   </>
  );
}
