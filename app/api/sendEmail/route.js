"use server"
import { NextResponse } from 'next/server';
import { sendEmail } from '../../../lib/mail';

export async function POST(request) {
  try {
    const { to, name, subject, message } = await request.json();

    await sendEmail({ to, name, message });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
