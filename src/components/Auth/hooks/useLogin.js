'use client'

import toast from 'react-hot-toast'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const useLogin = () => {
  const payloadInitial = {
    username: '',
    password: '',
  }
  const router = useRouter()

  const [payload, setPayload] = useState(payloadInitial)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setPayload({ ...payload, [name]: value })
  }

  const submitData = async () => {
    toast.loading('Logged in you....')
    setIsLoading(true)
    const req = await fetch('api/v1/login', {
      method: 'POST',
      body: JSON.stringify(payload),
      cache: 'no-cache',
    })

    const result = await req.json()
    toast.remove()

    if (req.status != 200) {
      toast.error(result.message)
      setIsLoading(false)
      return
    }

    toast.success(result.message)
    setIsLoading(false)
    setTimeout(() => {
      router.replace('/dashboard')
    }, 1000)
  }

  return { isLoading, handleChange, submitData }
}
