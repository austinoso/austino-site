import { NextResponse } from "next/server";
import Stripe from "stripe";

const DEPOSIT_AMOUNT = 200_00; // $200 in cents

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-01-28.clover",
  });
}

export async function POST(request: Request) {
  let bodySlug: string | undefined;

  try {
    const body = await request.json();
    const { submissionId, slug, email, name, businessName } = body;
    bodySlug = slug;

    if (!submissionId || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const origin = request.headers.get("origin") || "https://www.austino.dev";
    const idParam = slug ? `&id=${encodeURIComponent(slug)}` : "";

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      metadata: {
        submissionId,
        slug: slug || "",
        customerName: name,
        businessName,
      },
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Project Deposit",
              description:
                "Deposit for website project — I'll start building your demo before our discovery call.",
            },
            unit_amount: DEPOSIT_AMOUNT,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/onboarding?paid=true${idParam}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/onboarding?step=7${idParam}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    // Dev fallback when Stripe isn't configured
    if (!process.env.STRIPE_SECRET_KEY) {
      console.warn("STRIPE_SECRET_KEY not set — returning mock URL");
      const origin = request.headers.get("origin") || "https://www.austino.dev";
      const idParam = bodySlug ? `&id=${encodeURIComponent(bodySlug)}` : "";
      return NextResponse.json({
        url: `${origin}/onboarding?paid=true${idParam}&session_id=mock`,
      });
    }

    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
