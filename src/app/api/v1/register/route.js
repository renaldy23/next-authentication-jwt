import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { prisma } from '@/utils/prisma'

export async function POST(request) {
  // Get body request
  const body = await request.json()

  // Hash password
  const hashedPassword = await bcrypt.hash(body.password, 10)

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      username: body.username,
      password: hashedPassword,
    },
  })

  return NextResponse.json({
    message:
      'Register new users successfully. Please login using the created account',
  })
}
