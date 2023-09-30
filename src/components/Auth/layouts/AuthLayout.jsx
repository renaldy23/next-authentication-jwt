"use client"

import { Card, CardBody } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";

export const AuthLayout = ({children}) => {
    return (
        <main className="flex h-screen flex-col items-center justify-center md:h-screen lg:py-0 bg-zinc-100">
            <Card className="lg:max-w-4xl md:max-w-2xl max-w-md">
                <CardBody className="p-10">
                    <div className="grid grid-cols-12 gap-4 items-center">
                        <img src="/auth.svg" alt="" className="w-96 col-span-6 lg:block md:block hidden"/>
                        <div className="col-span-6">
                            {children}
                        </div>
                    </div>
                </CardBody>
            </Card>
        </main>
    )
}