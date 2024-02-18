
import { ModeToggle } from "./theme-toggle"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import Modal from "./Modal";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-50 pl-72 right-0-0 w-full h-[10vh] dark:bg-gray-900
    bg-[#f0f4f8] flex items-center justify-end">
      

      <div className="flex items-center space-x-2 pr-4">
          <span>
            <ModeToggle/>
          </span>
          <span className="cursor-pointer">
            {/* <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}

            {/* <Button variant="outline">Login</Button> */}
            <Modal />
          </span>
      </div>
    </div>
  )
}

export default Header