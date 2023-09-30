'use client'

import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useRegister } from "../../hooks/useRegister";

export const AuthRegister = () => {

    const {payload,handleChange} = useRegister()

    return (
        <>
            <div className="space-y-4">
                <h1 className="text-2xl font-bold">Create an Account!</h1>
                <div className="space-y-2">
                    <label className="text-md">Fullname</label>
                    <Input type="text"name="name" onChange={handleChange}/>
                </div>
                <div className="space-y-2">
                    <label className="text-md">Email</label>
                    <Input type="email" name="email"/>
                </div>
                <div className="space-y-2">
                    <label className="text-md">Username</label>
                    <Input type="text" name="username"/>
                </div>
                <div className="space-y-2">
                    <label className="text-md">Password</label>
                    <Input type="password" name="password"/>
                </div>
            </div>
            <Button color="primary" className="w-full mt-6">
                Button
            </Button>
        </>
    )
}