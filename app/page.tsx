import React from 'react'
import { Button } from '@/components/ui/Button/button'
import {ToggleGroup, ToggleGroupItem} from '@/components/ui/ToggleGroup/toggle-group'
import { Bold, Italic, Underline } from "lucide-react"
import { Toaster } from "@/components/ui/Toast/toaster"

const page = () => {
  return (
    <div>
     <ToggleGroup type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
    <Button variant={"destructive"} size="lg" >Button</Button>
    </div>
  )
}

export default page
