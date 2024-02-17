
import { ModeToggle } from "./theme-toggle"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";


const Header = () => {
  return (
    <div className="fixed top-0 left-0 pl-72 right-0-0 w-full h-[10vh] dark:bg-gray-900
     bg-gray-200 flex items-center justify-end">
      

      <div className="flex items-center space-x-2 pr-4">
          <span>
            <ModeToggle/>
          </span>
          <span className="cursor-pointer">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </span>
      </div>
    </div>
  )
}

export default Header