import { NextRequest, NextResponse } from 'next/server';

import { TContactFormData } from '@/components/contacts/schema';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

export async function POST(req: NextRequest) {
  // const searchParamsData = req.nextUrl.searchParams.get('param');

  // Check env variables
  if (!API_URL || !API_KEY || !ADMIN_EMAIL)
    return NextResponse.json(
      { error: { message: `Missing required environment variables` } },
      { status: 500 }
    );

  const errMsg = `Unable to send message`;

  // Parse form data
  let contactFormData: TContactFormData;
  try {
    contactFormData = await req.json();
    if (
      !contactFormData.name ||
      !contactFormData.email ||
      !contactFormData.message
    ) {
      return NextResponse.json(
        { error: { message: `${errMsg}. Invalid form data` } },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(`POST sendMail: error parse request body`, error);
    return NextResponse.json(
      {
        error: {
          message: `${errMsg}. Failed to parse request body`,
        },
      },
      { status: 400 }
    );
  }

  try {
    const data = {
      to: ADMIN_EMAIL,
      key: API_KEY,
      fromTitle: `Portfolio`,
      subject: `Contact Form Submission `,
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

    if (!response.ok) {
      return NextResponse.json(
        {
          error: { message: `Mail API request failed: ${response.statusText}` },
        },
        { status: 500 }
      );
    }

    const resData = await response.json();
    if (!resData.data?.success)
      return NextResponse.json(
        {
          error: { message: `${errMsg}. Mail API reported failure` },
        },
        { status: 500 }
      );

    return NextResponse.json({ data: { success: true } }, { status: 200 });
  } catch (error) {
    console.error(`POST sendMail: unknown error`, error);
    return NextResponse.json(
      {
        error: {
          message:
            error instanceof Error ? error.message : `${errMsg}. Unknown error`,
        },
      },
      { status: 500 }
    );
  }
}
