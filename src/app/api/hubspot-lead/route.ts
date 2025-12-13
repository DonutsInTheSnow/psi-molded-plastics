// app/api/hubspot-lead/route.ts   ← replace the whole file
import { NextResponse } from "next/server";

const TOKEN = process.env.HUBSPOT_PRIVATE_TOKEN!;

export async function POST(request: Request) {
  const { firstName, lastName, companyName, email, whitePaperTitle } = await request.json();

  const body = {
    properties: {
      firstname: firstName,
      lastname: lastName,
      company: companyName,
      email,
      last_downloaded_white_paper: whitePaperTitle,
    },
  };

  // Try to create
  const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  // If duplicate → search by email and update
  if (res.status === 409) {
    const search = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/search`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filterGroups: [{ filters: [{ propertyName: "email", operator: "EQ", value: email }] }],
          properties: ["email"],
        }),
      }
    );
    const data = await search.json();
    const contactId = data.results?.[0]?.id;

    if (contactId) {
      await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    }
  }

  return NextResponse.json({ success: true });
}