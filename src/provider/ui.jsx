'use client'
import { NextUIProvider } from "@nextui-org/react"
import { Toaster } from "react-hot-toast";

export const NextProvider = ({children}) => {
    return <NextUIProvider>
        {children}
        <Toaster
            position="top-center"
        />
    </NextUIProvider>
}