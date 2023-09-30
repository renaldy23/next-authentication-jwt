'use client'
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { useLogin } from "../../hooks/useLogin";

export const AuthLogin = () => {
    const { handleChange, submitData, isLoading } = useLogin()
    return (
        <>
            <div className="space-y-4">
                <h1 className="text-2xl font-bold">Login to your account!</h1>
                <div className="space-y-2">
                    <label className="text-md">Username</label>
                    <Input type="text" name="username" onChange={handleChange} />
                </div>
                <div className="space-y-2">
                    <label className="text-md">Password</label>
                    <Input type="password" name="password" onChange={handleChange} />
                </div>
                <div className="flex justify-between">
                    <Checkbox>Remember Me</Checkbox>
                    <a href="" className="text-blue-500">Forgot Password</a>
                </div>
            </div>
            <Button isLoading={isLoading} onClick={submitData} color="primary" className="w-full mt-6">
                Sign In
            </Button>
        </>
    )
}