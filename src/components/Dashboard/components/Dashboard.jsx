"use client"
import { Button } from "@nextui-org/react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export const Dashboard = () => {
    const router = useRouter()

    const handleLogout = () => {
        Cookies.remove("x-token")
        toast.success("Successfully logged out!")
        setTimeout(() => {
            router.replace("/")
        }, 1000);
    }

    return (
        <div className="h-screen flex flex-col gap-2 justify-center items-center bg-zinc-50">
            <h1 className="text-xl font-bold">Dashboard Page</h1>
            <Button color="danger" onClick={handleLogout}>Logout</Button>
        </div>
    )
}