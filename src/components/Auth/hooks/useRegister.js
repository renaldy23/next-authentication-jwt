'use client'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const useRegister = () => {
  const payloadInitial = {
    name: '',
    username: '',
    email: '',
    password: '',
  }

  const [payload, setPayload] = useState(payloadInitial)

  const handleChange = (e) => {
    const { name, value } = e.target
    setPayload({ ...payload, [name]: value })
  }

  const submitData = async () => {
    toast.loading('Registering....')
    const req = await fetch('api/v1/register', {
      method: 'POST',
      body: JSON.stringify(payload),
      cache: 'no-cache',
    })
    const result = await req.json()
    if (req.status != 200) {
      toast.error(result.message)
    }
  }

  return { payload, handleChange, submitData }
}
