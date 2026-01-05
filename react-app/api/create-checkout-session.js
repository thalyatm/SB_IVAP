/* global process */
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          price_data: {
            currency: 'aud',
            product_data: {
              name: 'Independent Visions Art Prize Entry',
              description: 'Submit up to 6 artworks for consideration',
            },
            unit_amount: 5000, // $50.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      return_url: `${req.headers.origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      // Collect customer details
      customer_creation: 'always',
      billing_address_collection: 'auto',
      // Allow promo codes
      allow_promotion_codes: true,
    });

    res.status(200).json({ clientSecret: session.client_secret });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: err.message });
  }
}
