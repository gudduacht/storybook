
"use client";
import { LoginPage } from "@/lib/login";

export default function Home() {
  return (
    <main className=" flex w-[500px] justify-center items-center p-9">
      <LoginPage className="w-[400px] " onSubmit={ (email, password)=>{  console.log(`email::${email} password:: ${password}`);
      }} />
    </main>
  )
}

