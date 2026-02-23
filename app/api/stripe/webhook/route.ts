import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Client } from "@notionhq/client";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-01-28.clover",
  });
}

function getNotion() {
  return new Client({ auth: process.env.NOTION_API_KEY });
}

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: "Missing signature or webhook secret" },
      { status: 400 },
    );
  }

  let event: Stripe.Event;

  const stripe = getStripe();

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const submissionId = session.metadata?.submissionId;

    if (submissionId && !submissionId.startsWith("mock-")) {
      try {
        const notion = getNotion();
        await notion.pages.update({
          page_id: submissionId,
          properties: {
            "Deposit Paid": {
              checkbox: true,
            },
            Status: {
              select: { name: "Deposit Paid" },
            },
          },
        });
        console.log(
          `Updated Notion page ${submissionId} — deposit marked paid`,
        );
      } catch (error) {
        console.error("Failed to update Notion page:", error);
      }
    }
  }

  return NextResponse.json({ received: true });
}
