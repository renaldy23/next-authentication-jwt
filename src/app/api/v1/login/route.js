import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function POST(request) {
  // Get request body
  const body = await request.json()

  // Get user
  const user = await prisma.user.findFirst({
    where: {
      username: body.username,
    },
  })

  // Check user
  if (!user) {
    return NextResponse.json(
      {
        message: 'User not found!',
      },
      { status: 404 },
    )
  }

  // Compared hash
  const isHashCorrect = await bcrypt.compare(body.password, user.password)

  // Check hash
  if (!isHashCorrect) {
    return NextResponse.json(
      {
        message: 'Invalid credential!',
      },
      { status: 401 },
    )
  }

  // Generate token
  const accessToken = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '1d' },
  )

  // Payload response
  const payload = {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
  }

  return NextResponse.json({
    message: 'Successfully login!',
    access_token: accessToken,
    user: payload,
  })
}
