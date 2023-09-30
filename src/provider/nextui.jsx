'use client'
import { NextUIProvider } from "@nextui-org/react"

export const NextProvider = ({children}) => {
    return <NextUIProvider>{children}</NextUIProvider>
}