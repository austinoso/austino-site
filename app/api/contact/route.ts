import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}

export async function POST(req: NextRequest) {
  console.log("Contact API called");
  
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact support." },
        { status: 500 },
      );
    }

    // Check Turnstile secret key
    if (!process.env.TURNSTILE_SECRET_KEY) {
      console.error("TURNSTILE_SECRET_KEY is not configured");
      return NextResponse.json(
        { error: "Security service is not configured. Please contact support." },
        { status: 500 },
      );
    }

    const body = await req.json();
    console.log("Request body received");
    const {
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      description,
      currentChallenges,
      successMetrics,
      turnstileToken,
    } = body;

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Security verification is required" },
        { status: 400 },
      );
    }

    // Verify the Turnstile token with Cloudflare
    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      },
    );

    const turnstileData = await turnstileResponse.json();

    if (!turnstileData.success) {
      console.error("Turnstile verification failed:", turnstileData);
      return NextResponse.json(
        { error: "Security verification failed. Please try again." },
        { status: 400 },
      );
    }

    // Validation
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: "Name, email, and project description are required" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Send email to yourself
    const { data, error } = await resend.emails.send({
      from: "Contact Form <contact@email.austino.dev>",
      to: process.env.CONTACT_EMAIL || "osorio.austin@gmail.com",
      replyTo: email, // Client's email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
              .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: 600; color: #495057; margin-bottom: 5px; text-transform: uppercase; font-size: 12px; letter-spacing: 0.5px; }
              .value { background: white; padding: 12px; border-radius: 4px; border-left: 3px solid #667eea; }
              .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px; }
              h1 { margin: 0; font-size: 24px; }
              h2 { color: #495057; font-size: 18px; margin-top: 0; margin-bottom: 20px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🚀 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <h2>Contact Information</h2>
              
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>

              ${
                company
                  ? `
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${company}</div>
              </div>
              `
                  : ""
              }

              <h2>Project Details</h2>

              ${
                projectType
                  ? `
              <div class="field">
                <div class="label">Project Type</div>
                <div class="value">${projectType}</div>
              </div>
              `
                  : ""
              }

              ${
                budget
                  ? `
              <div class="field">
                <div class="label">Budget</div>
                <div class="value">${budget}</div>
              </div>
              `
                  : ""
              }

              ${
                timeline
                  ? `
              <div class="field">
                <div class="label">Timeline</div>
                <div class="value">${timeline}</div>
              </div>
              `
                  : ""
              }

              <div class="field">
                <div class="label">Project Description</div>
                <div class="value">${description.replace(/\n/g, "<br>")}</div>
              </div>

              ${
                currentChallenges
                  ? `
              <div class="field">
                <div class="label">Current Challenges</div>
                <div class="value">${currentChallenges.replace(/\n/g, "<br>")}</div>
              </div>
              `
                  : ""
              }

              ${
                successMetrics
                  ? `
              <div class="field">
                <div class="label">Success Metrics</div>
                <div class="value">${successMetrics.replace(/\n/g, "<br>")}</div>
              </div>
              `
                  : ""
              }

              <div class="footer">
                <p>Submitted on ${new Date().toLocaleString("en-US", {
                  dateStyle: "long",
                  timeStyle: "short",
                })}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully", id: data?.id },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
