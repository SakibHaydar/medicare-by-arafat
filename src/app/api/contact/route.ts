import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, insuranceType, message, consentEmail, consentSms } = body;

    // Basic validation
    if (!name || !email || !insuranceType || !message || !consentEmail) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Format email content
    const emailHtml = `
      <h2>New Consultation Request</h2>
      <table style="border-collapse:collapse; width:100%; max-width:600px;">
        <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:bold; width:140px;">Name</td><td style="padding:8px; border-bottom:1px solid #eee;">${name}</td></tr>
        <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:bold;">Email</td><td style="padding:8px; border-bottom:1px solid #eee;">${email}</td></tr>
        <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:bold;">Phone</td><td style="padding:8px; border-bottom:1px solid #eee;">${phone || "Not provided"}</td></tr>
        <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:bold;">Insurance Type</td><td style="padding:8px; border-bottom:1px solid #eee;">${insuranceType}</td></tr>
        <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:bold;">Message</td><td style="padding:8px; border-bottom:1px solid #eee;">${message}</td></tr>
        <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:bold;">Email Consent</td><td style="padding:8px; border-bottom:1px solid #eee;">${consentEmail ? "✅ Yes" : "No"}</td></tr>
        <tr><td style="padding:8px; font-weight:bold;">SMS Consent</td><td style="padding:8px;">${consentSms ? "✅ Yes" : "No"}</td></tr>
      </table>
      <p style="font-size:12px; color:#999; margin-top:20px;">Submitted at: ${new Date().toISOString()}</p>
    `;

    // Send via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "madicarebyarafat01@gmail.com";

    if (RESEND_API_KEY) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Medicare by Arafat <noreply@medicarebyarafat.com>",
          to: [CONTACT_EMAIL],
          reply_to: email,
          subject: `New Consultation Request — ${insuranceType} — ${name}`,
          html: emailHtml,
        }),
      });

      if (!resendRes.ok) {
        console.error("Resend error:", await resendRes.text());
        return NextResponse.json({ error: "Email delivery failed" }, { status: 500 });
      }
    } else {
      // Dev: just log to console
      console.log("Contact form submission:", { name, email, phone, insuranceType, message, consentEmail, consentSms });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
