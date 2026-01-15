import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, purpose, location, description, subscribe } = body;

    // Validate required fields
    if (!name || !email || !phone || !purpose || !location || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'MavLand Intelligence <onboarding@resend.dev>',
      to: [process.env.ADMIN_EMAIL || 'admin@example.com'],
      subject: `New Decision Review Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #1a4d2e;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #f8f9fa;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: bold;
                color: #1a4d2e;
                margin-bottom: 5px;
              }
              .field-value {
                background-color: white;
                padding: 12px;
                border-radius: 4px;
                border: 1px solid #e5e7eb;
              }
              .footer {
                margin-top: 30px;
                text-align: center;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>New Decision Review Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Name:</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">${email}</div>
              </div>

              <div class="field">
                <div class="field-label">Phone:</div>
                <div class="field-value">${phone}</div>
              </div>

              <div class="field">
                <div class="field-label">Purpose:</div>
                <div class="field-value">${purpose}</div>
              </div>

              <div class="field">
                <div class="field-label">Land Location:</div>
                <div class="field-value">${location}</div>
              </div>

              <div class="field">
                <div class="field-label">Description:</div>
                <div class="field-value">${description}</div>
              </div>

              <div class="field">
                <div class="field-label">Newsletter Subscription:</div>
                <div class="field-value">${subscribe ? 'Yes' : 'No'}</div>
              </div>

              <div class="footer">
                <p>This email was sent from your MavLand Intelligence contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
