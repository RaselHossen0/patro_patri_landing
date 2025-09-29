import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'https://api.patropatri.online';

export async function DELETE(request: NextRequest) {
  try {
    const { email, password, reason } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Call backend API to delete account
    const response = await fetch(`${BACKEND_URL}/api/users/delete-account`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, reason }),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({
        message: 'Account deleted successfully',
      });
    } else {
      return NextResponse.json(
        { message: data.message || 'Failed to delete account' },
        { status: response.status }
      );
    }

  } catch (error) {
    console.error('Account deletion error:', error);
    return NextResponse.json(
      { message: 'Failed to delete account. Please try again.' },
      { status: 500 }
    );
  }
}
