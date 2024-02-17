
import { Input } from "@/components/ui/input";
import { RiSendPlaneFill } from "react-icons/ri";

export default function Home() {
  return (
   <>
      <div className="flex flex-col justify-between h-full pb-4">
        <span></span>
        <div className="flex items-center justify-center relative">
          <Input type="text" placeholder="Message..." className="max-w-[700px] p-4"/>
          <span className="absolute top-[10px] right-[19%]">
            <RiSendPlaneFill />
          </span>
        </div>
      </div>
   </>
  );
}
