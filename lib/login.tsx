"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/Primitives/Card/card";
  import { Input } from "@/components/Primitives/InputField/input";
  import { Label } from "@/components/Primitives/Label/label";
//   import { action } from '@storybook/addon-actions';
import { Button } from "@/components/Primitives/Button/button";
import React from "react";
import { cn } from "./utils";

interface LoginPageProps {
  className: string;
  props?: object;
  onSubmit: (email: string, password: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ className, onSubmit, ...props }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        onSubmit(email, password);
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Log in to your account</CardTitle>
                    <CardDescription>
                   Don't have an account?<a href="/signUp" className="font-bold">Sign up</a> 
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email ID</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter email ID"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="dob">DOB</Label>
                                
                                </div>
                                <Input id="dob" type="date" name="dob" required />
                            </div>
                            <Button variant='destructive' type="submit" className="w-full">
                                Next
                            </Button>
                            <Button variant="outline" className="w-full">
                                Login with Google
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <a href="#" className="underline underline-offset-4">
                                Sign up
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
