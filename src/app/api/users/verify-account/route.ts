import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'https://api.patropatri.online';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Call backend API to verify account
    const response = await fetch(`${BACKEND_URL}/api/auth/verify-account`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({
        message: 'Account verified successfully',
        user: data.user,
      });
    } else {
      return NextResponse.json(
        { message: data.message || 'Invalid credentials' },
        { status: response.status }
      );
    }

  } catch (error) {
    console.error('Account verification error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
