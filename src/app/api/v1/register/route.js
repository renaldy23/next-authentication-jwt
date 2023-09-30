import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { prisma } from '@/utils/prisma'

export async function POST(request) {
  // Get body request
  const body = await request.json()

  // Hash password
  const hashedPassword = await bcrypt.hash(body.password, 10)

  try {
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
  } catch (error) {
    return NextResponse.json(
      {
        message:
          'Invalid request, please make sure you inserted a correct data!',
      },
      { status: 400 },
    )
  }
}
