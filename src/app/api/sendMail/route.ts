import { TContactFormData } from '@/components/contacts/schema';
import { NextRequest, NextResponse } from 'next/server'; // Import the new types

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

export async function POST(req: NextRequest) {
  if (!API_URL || !API_KEY || !ADMIN_EMAIL)
    return NextResponse.json(
      { error: { message: `Unable to get the environment variables` } },
      { status: 500 }
    );

  // const encodedVideoUrl = req.nextUrl.searchParams.get('videoUrl');
  const contactFormData: TContactFormData = await req.json();
  console.log('contactFormData', contactFormData);

  const defaultErrResponse = NextResponse.json(
    { error: { message: `Unable to send message` } },
    { status: 500 }
  );

  try {
    const data = {
      key: API_KEY,
      fromTitle: `Portfolio`,
      to: ADMIN_EMAIL,
      subject: `Client `,
      html: `
        <h3>${contactFormData.name}</h3>
        <h4>${contactFormData.email}</h4>
        <p>${contactFormData.message}</p>
      `,
    };

    const response = await fetch(`${API_URL}/mail/send`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) return defaultErrResponse;
    const resData = await response.json();
    if (!resData.data.success) return defaultErrResponse;

    return NextResponse.json({ data: { success: true } }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
