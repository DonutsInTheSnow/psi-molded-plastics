// app/api/hubspot-lead/route.ts
import { NextResponse } from "next/server";

const HUBSPOT_TOKEN = process.env.HUBSPOT_PRIVATE_TOKEN!;

export async function POST(request: Request) {
  const { email, whitePaperTitle } = await request.json();

  const properties = {
    email,
    last_downloaded_white_paper: whitePaperTitle,
  };

  const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HUBSPOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ properties }),
  });

  // If contact exists → HubSpot returns 409 → we update instead
  if (res.status === 409) {
    const { id } = await res.json();
    await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${HUBSPOT_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ properties }),
    });
  }

  return NextResponse.json({ success: true });
}