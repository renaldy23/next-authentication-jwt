"use client"

import { Card, CardBody } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";


export const AuthLayout = ({children}) => {
    
    return (
        <main className="flex h-screen flex-col items-center justify-center md:h-screen lg:py-0 bg-zinc-100 lg:px-0 md:px-0 px-4">
            <Card className="lg:max-w-4xl md:max-w-2xl w-full">
                <CardBody className="p-10">
                    <div className="grid grid-cols-12 gap-4 items-center">
                        <img src="/auth.svg" alt="" className="w-96 col-span-6 lg:block md:block hidden"/>
                        <div className="lg:col-span-6 md:col-span-6 col-span-12">
                            {children}
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Toaster
                position="top-center"
            />
        </main>
    )
}