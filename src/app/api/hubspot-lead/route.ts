// // app/api/hubspot-lead/route.ts
// import { NextResponse } from "next/server";

// const HUBSPOT_TOKEN = process.env.HUBSPOT_PRIVATE_TOKEN!;

// export async function POST(request: Request) {
//   const { email, whitePaperTitle } = await request.json();

//   const properties = {
//     email,
//     last_downloaded_white_paper: whitePaperTitle,
//   };

//   const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${HUBSPOT_TOKEN}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ properties }),
//   });

//   // If contact exists → HubSpot returns 409 → we update instead
//   if (res.status === 409) {
//     const { id } = await res.json();
//     await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${id}`, {
//       method: "PATCH",
//       headers: {
//         Authorization: `Bearer ${HUBSPOT_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ properties }),
//     });
//   }

//   return NextResponse.json({ success: true });
// }


// app/api/hubspot-lead/route.ts   ← replace the whole file
import { NextResponse } from "next/server";

const TOKEN = process.env.HUBSPOT_PRIVATE_TOKEN!;

export async function POST(request: Request) {
  const { email, whitePaperTitle } = await request.json();

  const body = {
    properties: {
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