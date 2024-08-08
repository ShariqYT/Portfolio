"use server"
import { NextResponse } from 'next/server';
import { sendEmail } from '../../../lib/AdminMail';

export async function POST(request) {
  try {
    const { from, name, message } = await request.json();

    await sendEmail({ from, name, message });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
