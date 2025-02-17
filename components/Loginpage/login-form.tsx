import { cn } from "@/lib/utils"
import { Button } from "@/components/Primitives/Button/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Primitives/Card/card"
import { Input } from "@/components/Primitives/InputField/input"
import { Label } from "@/components/Primitives/Label/label"
import { Calendar } from "@/components/Primitives/Calendar/calendar"
import { useState } from "react"
import { format } from "date-fns"
import Image from 'next/image'

export interface LoginFormProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onSubmit"> {
  onSubmit?: (email: string, dob: string) => void;
  loading?: boolean;
}

export function LoginForm({
  className,
  onSubmit,
  loading = false,
  ...props
}: LoginFormProps) {
  const [date, setDate] = useState<Date>()
  const [showCalendar, setShowCalendar] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const dob = date ? format(date, 'yyyy-MM-dd') : '';
    onSubmit?.(email, dob);
  };

  return (
    <div className={cn("flex flex-col gap-6 w-full max-w-[450px]", className)} {...props}>
      <Card className="w-full">
        <CardHeader className="text-left">
          <CardTitle className="text-2xl font-semibold">Login in to your account</CardTitle>
          <div className="text-sm mt-4">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email ID</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <div className="relative">
                    <Input
                      id="dob"
                      name="dob"
                      type="text"
                      placeholder="Enter DOB"
                      value={date ? format(date, 'PP') : ''}
                      onClick={() => setShowCalendar(!showCalendar)}
                      readOnly
                      required
                    />
                    {showCalendar && (
                      <div className="absolute top-[calc(100%+5px)] left-0 z-50 bg-background border rounded-md shadow-md">
                        <Calendar
                          mode="single"
                          disableFuture={true}
                          selected={date}
                          onSelect={(newDate) => {
                            setDate(newDate)
                            setShowCalendar(false)
                          }}
                          initialFocus
                        />
                      </div>
                    )}
                  </div>
                </div>
                <Button type="submit" className="w-full" variant="info">
                  Next
                </Button>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-background px-2 text-muted-foreground">
                    Or Login with
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <Button variant="outline"  border="black" className="w-full" type="button" >
                    Continue with
                    <Image
                      src="/icon/apple.svg" 
                      alt="Apple"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                  </Button>
                  <Button variant="outline"  border="black" className="w-full" type="button">
                    Continue with
                    <Image
                      src="/icon/google.svg" 
                      alt="Google"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                  </Button>
                  <Button variant="outline"  border="black" className="w-full" type="button">
                    Continue with
                    <Image
                      src="/icon/microsoft.svg" 
                      alt="Facebook"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

