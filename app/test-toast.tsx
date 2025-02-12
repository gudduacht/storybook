'use client'

import { toast } from "sonner"
import { Button } from "@/lib/Primitives/Button/button"

export default function TestToast() {
  return (
    <div className="flex  align-center gap-4 p-4">
      <Button 
        onClick={() => toast('Hello!', {
          description: 'This is a test toast message'
        })}
      >
        Show Toast
      </Button>

      <Button 
        onClick={() => toast.success('Success!', {
          description: 'Operation completed successfully'
        })}
      >
        Show Success Toast
      </Button>
    </div>
  )
}