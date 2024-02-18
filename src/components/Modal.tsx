"use client";


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AiOutlineLogin } from "react-icons/ai";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

const Modal = () => {

  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="px-2"><AiOutlineLogin className="text-2xl"/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]  p-2">
        <Tabs defaultValue="account" className="w-[400px] pt-8 ">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Sign in</TabsTrigger>
                    <TabsTrigger value="password">Sing up</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Card>
                    <CardHeader>
                        <CardTitle>Sign in</CardTitle>
                        
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="email" />
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="********" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Login</Button>
                    </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="password">
                    <Card>
                    <CardHeader>
                        <CardTitle>Sign up</CardTitle>
                       
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" />
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" />
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Sign In</Button>
                    </CardFooter>
                    </Card>
                </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

export default Modal