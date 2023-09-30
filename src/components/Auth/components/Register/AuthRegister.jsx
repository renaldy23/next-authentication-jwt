'use client'

import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useRegister } from "../../hooks/useRegister";

export const AuthRegister = () => {

    const {handleChange, submitData} = useRegister()

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
                    <Input type="email" name="email" onChange={handleChange} />
                </div>
                <div className="space-y-2">
                    <label className="text-md">Username</label>
                    <Input type="text" name="username" onChange={handleChange} />
                </div>
                <div className="space-y-2">
                    <label className="text-md">Password</label>
                    <Input type="password" name="password" onChange={handleChange} />
                </div>
            </div>
            <Button onClick={submitData} color="primary" className="w-full mt-6">
                Sign Up
            </Button>
        </>
    )
}