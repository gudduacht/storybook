"use client"
import react,{useState} from "react"
import {LoginForm} from "@/components/Loginpage/login-form"
import {toast} from "sonner"

export default function Login() {
const [isLoading,setIsLoading]=useState(false)
    const handleLogin = async (email:string,password:string)=>{
        setIsLoading(true);
        console.log("Login Attempted with:",{email,password})
        try{
            await new Promise ((resolve)=>setTimeout(resolve,5000))
            toast.success("Login successful!", {
                description: "Welcome back!"
            })
        }
        catch(error){
            console.log("Error:",error)
        }
        finally {
            setIsLoading(false)
        }
    }
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <LoginForm 
      onSubmit={handleLogin}
      loading={isLoading}
      />
    </main>
  )
}
