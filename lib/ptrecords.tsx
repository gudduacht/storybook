"use client";

import { Button } from "@/components/Primitives/Button/button";
import { Card, CardContent } from "@/components/Primitives/Card/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/Primitives/Dropdown-menu/dropdown-menu";
import { Input } from "@/components/Primitives/InputField/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/Primitives/Tabs/tabs";

export const PatientForm = () => {
  return (
    <div className="w-screen p-6">
      <div className="flex flex-row">
        <div className="bg-slate-400 border border-cyan-400 flex flex-col">
          <form>
            <Card>
              <CardContent>
                <div className="p-4 ">
                  <Input id="text" type="text" placeholder="First Name" />
                </div>
                <div className="flex flex-row">
                  <div className="p-4 ">
                    <Input id="text" type="text" placeholder="Insurance" />
                  </div>
                  <div className="p-4 ">
                    <Input id="text" type="text" placeholder="Policy No" />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="p-4">
                    <Input
                      id="text"
                      type="date"
                      placeholder="DOB"
                      onFocus={(e) => (e.currentTarget.type = "date")}
                      onBlur={(e) => (e.currentTarget.type = "text")}
                    />
                  </div>
                  <div className="p-4 ">
                    <Input id="text" type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="p-4 ">
                    <Input
                      id="text"
                      type="date"
                      placeholder="Initiated Date"
                      onFocus={(e) => (e.currentTarget.type = "date")}
                      onBlur={(e) => (e.currentTarget.type = "text")}
                    />
                  </div>
                  <div className="p-4 ">
                    <Input id="text" type="text" placeholder="IV" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
          <div className="bg-orange-600 border border-y-blue-600 p-4 mt-6">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="secondary"
              size="lg"
              className=" text-black px-4 py-2 w-full  "
            >
              Services
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="z-50 bg-white p-4 shadow-lg">
            <DropdownMenuItem>30 medication mgnt visit</DropdownMenuItem>
            <DropdownMenuItem>60 medication mgnt visit</DropdownMenuItem>
            <DropdownMenuItem>60 medication mgnt visit</DropdownMenuItem>
            <DropdownMenuItem>ADHD</DropdownMenuItem>
            <DropdownMenuItem>ASD Intake</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
        </div>
        <div className=" p-4">
          <Card>
            <CardContent>
              <Tabs>
                <TabsList>
                  <TabsTrigger value="Forms">Forms</TabsTrigger>
                  <TabsTrigger value="Records">Records</TabsTrigger>
                </TabsList>
                <TabsContent value="Forms">
                  <div className="p-4 ">
                    <Input id="text" type="text" placeholder="Form 1" />
                  </div>
                  <div className="p-4 ">
                    <Input id="text" type="text" placeholder="Form 2" />
                  </div>
                  <div className="p-4 ">
                    <Input id="text" type="text" placeholder="Form 3" />
                  </div>
                  <div className="p-4 ">
                    <Input id="text" type="text" placeholder="Form 4" />
                  </div>
                </TabsContent>

                <TabsContent value="Records">
                  <div className="p-4 ">
                    <Input id="text" type="text" placeholder="Document 1" />
                  </div>
                  <div className="p-4 ">
                    <Input id="text" type="text" placeholder="Document 2" />
                  </div>
                  <div className="p-4 ">
                    <Input id="text" type="text" placeholder="Document 3" />
                  </div>
                  <div className="p-4 ">
                    <Input id="text" type="text" placeholder="Document 4" />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
     
    </div>
  );
};
