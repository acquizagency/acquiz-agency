import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { prenom, email, telephone, site, budget, message } = await req.json();

  if (!prenom || !email || !telephone || !site) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  const body = `Prénom: ${prenom}
Email: ${email}
Téléphone: ${telephone}
Site / activité: ${site}
Budget mensuel: ${budget || "—"}
Message: ${message || "—"}`;

  if (apiKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Acquiz Agency <noreply@acquiz.fr>",
        to: ["contact@acquiz.fr"],
        subject: `Nouvelle demande d'audit — ${prenom}`,
        text: body,
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", await res.text());
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }
  } else {
    console.log("New lead:", { prenom, email, telephone, site, budget, message });
  }

  return NextResponse.json({ ok: true });
}
