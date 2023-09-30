'use client'
import { Button, Link } from "@nextui-org/react"

export const Home = () => {
    return (
        <div className="h-screen items-center justify-center flex gap-4">
            <Button as={Link} href="/login" color="primary">Login</Button>
            <p>or</p>
            <Button as={Link} href="/register" color="primary">Register</Button>
        </div>
    )
}