"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { RiSendPlaneFill } from "react-icons/ri";

export default function Home() {

  const[text, setText] = useState("");

  

  return (
   <>
      <div className="flex flex-col justify-between h-full pb-4">
        <div className="border border-slate-100 p-4 rounded-lg">
          <p>
            {
              text
            }
          </p>
        </div>
        <div className="flex items-center justify-center relative">
          <Input onChange={(e) => setText(e.target.value)} type="text" placeholder="Message..." className="max-w-[900px] p-4 py-6 text-lg"/>
          <span className="absolute top-[18px] right-[10%] text-lg">
            <RiSendPlaneFill />
          </span>

          
        </div>
      </div>
   </>
  );
}
