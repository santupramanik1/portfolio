import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Resend API key is not configured.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['santu700141@gmail.com'],
      subject: subject ? `Portfolio Inquiry: ${subject}` : `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0891b2; margin-top: 0; font-size: 20px;">📬 New Message from Portfolio Contact Form</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          
          <div style="margin-bottom: 12px;">
            <strong style="color: #64748b; font-size: 13px; text-transform: uppercase;">Sender Name:</strong>
            <p style="margin: 4px 0 0 0; font-size: 15px; font-weight: 600; color: #0f172a;">${name}</p>
          </div>

          <div style="margin-bottom: 12px;">
            <strong style="color: #64748b; font-size: 13px; text-transform: uppercase;">Sender Email:</strong>
            <p style="margin: 4px 0 0 0; font-size: 15px; color: #0891b2;"><a href="mailto:${email}" style="color: #0891b2; text-decoration: none;">${email}</a></p>
          </div>

          <div style="margin-bottom: 16px;">
            <strong style="color: #64748b; font-size: 13px; text-transform: uppercase;">Subject:</strong>
            <p style="margin: 4px 0 0 0; font-size: 15px; color: #0f172a;">${subject || 'N/A'}</p>
          </div>

          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          
          <div>
            <strong style="color: #64748b; font-size: 13px; text-transform: uppercase;">Message:</strong>
            <div style="margin-top: 8px; padding: 16px; background-color: #f8fafc; border: 1px solid #f1f5f9; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</div>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0 16px 0;" />
          <p style="font-size: 11px; color: #94a3b8; text-align: center; margin: 0;">Sent via Santu Pramanik Portfolio Website</p>
        </div>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Error sending email via Resend:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to send message.' },
      { status: 500 }
    );
  }
}
