import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div {...props} className={cn(' flex-1 max-sm:p-[10px] rounded-full overflow-hidden p-[14px] glassmorphism search-shadow ',className)}>

        <input className="  bg-transparent text-lg  text-white w-full  border-none outline-none  placeholder:text-lg pl-3 " type="text" placeholder="search audiobook & stories"></input>

      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
