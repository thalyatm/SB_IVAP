import Stripe from 'stripe';
import { Resend } from 'resend';
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let event;

  try {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];

    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name?.split(' ')[0] || 'Artist';

    console.log('Processing checkout for:', customerEmail);

    if (customerEmail) {
      try {
        const emailResult = await resend.emails.send({
          from: 'Studio on Brunswick <adminsb@studioonbrunswick.com>',
          to: customerEmail,
          subject: 'Welcome to the Independent Visions Art Prize!',
          html: getEmailHtml(customerName),
        });
        console.log('Email sent successfully:', emailResult);
      } catch (error) {
        console.error('Failed to send email:', error);
        // Don't return error - we still want to acknowledge the webhook
      }
    }
  }

  res.status(200).json({ received: true });
}

function getEmailHtml(firstName) {
  return `<!DOCTYPE html>
<html>
  <head>
    <style>
  @media only screen and (max-width: 600px) {
    .container { width: 100% !important; }
    .content { padding: 20px !important; }
    .prize-box { padding: 15px !important; }
  }
</style>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
    <table border="0" cellpadding="0" cellspacing="0" class="container" role="presentation" style="margin: 20px auto; background-color: #ffffff; border-radius: 8px; font-family: Helvetica, Arial, sans-serif; color: #333333; line-height: 1.6;" width="600">
      <tr>
        <td class="content" style="padding: 40px;">
          <h2 style="color: #111111; margin-top: 0;">
            Welcome to the Independent Visions Art Prize!
          </h2>
          <p>
            Hi ${firstName},
          </p>
          <p>
            Thank you for entering. You have successfully secured your spot in the
            <a href="https://prize.studioonbrunswick.com.au/" style="color: #333333; font-weight: bold;">Independent Visions Art Prize</a> (formerly our annual Summer Showcase).
          </p>
          <p>
            This prize is the next evolution of our commitment to supporting independent and emerging artists. It is designed to recognise creative clarity, artistic direction, and the ambition to build a thriving art practice.
          </p>
          <p>
            You are now in the running for more than
            <strong>$11,399 AUD in prizes</strong>. Entries will be reviewed by Studio on Brunswick staff and a panel of arts professionals, including guest judge
            <strong>Kate Marek</strong> (2025 winner of the Queens Wharf Brisbane Art Prize).
          </p>
          <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 30px 0;"/>
          <h3 style="color: #111111;">
            Step 2: Complete Your Application
          </h3>
          <p><strong>Your entry fee is paid.</strong> The next step is to provide your artist details and upload your work via the private link below.</p>
          <table border="0" cellpadding="0" cellspacing="0" style="margin: 20px 0;">
            <tr>
              <td align="center" bgcolor="#000000" style="border-radius: 4px;">
                <a href="https://forms.gle/M5rKBn7sQtxdQN3BA" style="display: inline-block; padding: 12px 24px; font-family: Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 4px;" target="_blank">Complete Application Form &rarr;</a>
              </td>
            </tr>
          </table>
          <p style="font-size: 14px; color: #666666;"><em>You can return to the form and complete it over time before <strong>January 9</strong>.</em></p>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 4px; margin-top: 20px; border-left: 4px solid #333;">
            <h4 style="margin-top: 0;">
              📋 Artwork Requirements
            </h4>
            <p style="margin-bottom: 10px; font-size: 14px;">
              You may submit up to
              <strong>six works</strong>. All mediums are welcome.
            </p>
            <ul style="padding-left: 20px; margin-bottom: 0; font-size: 14px;">
              <li><strong>2D Works:</strong> 50 × 50 cm or equivalent area (e.g., 40 × 60 cm).</li>
              <li><strong>3D Works:</strong> Suggested maximum size 100 cm in any direction.</li>
              <li><strong>Large Works:</strong> Larger works may be considered upon request.</li>
              <li><strong>Display:</strong> All works must be ready for safe gallery display if selected.</li>
            </ul>
          </div>
          <p style="margin-top: 20px;"><strong>Inside the form, you will need to:</strong></p>
          <ul style="padding-left: 20px;">
            <li>Describe your artistic practice and what motivates your work.</li>
            <li>Share what you hope to achieve by entering IVAP.</li>
            <li>Provide a link to your social media or website.</li>
            <li>Upload clear photos of each work (including Title, Medium, and Size).</li>
          </ul>
          <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 30px 0;"/>
          <h3 style="color: #111111;">
            The Prize Breakdown
          </h3>
          <p>
            More than
            <strong>$11,399 AUD</strong> in opportunities designed to elevate your artistic career.
          </p>
          <div class="prize-box" style="border: 1px solid #e0e0e0; border-radius: 4px; padding: 20px; margin-bottom: 15px;">
            <h4 style="margin: 0 0 5px 0; color: #000;">
              🏆 First Prize
            </h4>
            <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: bold; color: #666;">
              Total Value: $3,449 AUD
            </p>
            <ul style="padding-left: 20px; margin: 0; font-size: 14px;">
              <li>One week solo exhibition ($1,050)</li>
              <li>Six 1:1 coaching/mentoring sessions ($1,350)</li>
              <li>12 months Inner Circle membership ($300)</li>
              <li>Exhibition Readiness Pack ($149)</li>
              <li>6-month Artist Momentum Collective group mentoring ($600)</li>
            </ul>
          </div>
          <div class="prize-box" style="border: 1px solid #e0e0e0; border-radius: 4px; padding: 20px; margin-bottom: 15px;">
            <h4 style="margin: 0 0 5px 0; color: #000;">
              🚀 SB Artist Accelerator Award
            </h4>
            <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: bold; color: #666;">
              Total Value: $2,250 AUD
            </p>
            <ul style="padding-left: 20px; margin: 0; font-size: 14px;">
              <li>Six 1:1 coaching/mentoring sessions ($1,350)</li>
              <li>Social media audit ($300)</li>
              <li>6-month group mentoring program ($600)</li>
            </ul>
          </div>
          <div class="prize-box" style="border: 1px solid #e0e0e0; border-radius: 4px; padding: 20px; margin-bottom: 15px;">
            <h4 style="margin: 0 0 5px 0; color: #000;">
              🥈 Second Prize
            </h4>
            <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: bold; color: #666;">
              Total Value: $2,100 AUD
            </p>
            <ul style="padding-left: 20px; margin: 0; font-size: 14px;">
              <li>Place in a 2026 group show ($450)</li>
              <li>Four 1:1 coaching/mentoring sessions ($900)</li>
              <li>6 months Inner Circle membership ($150)</li>
              <li>6-month group mentoring program ($600)</li>
            </ul>
          </div>
          <p><strong>Additional Awards:</strong></p>
          <ul style="padding-left: 20px; font-size: 14px; line-height: 1.8;">
            <li><strong>Affiliates Choice Awards ($1,475 total):</strong> Includes the Affiliates Choice Award ($1,075) and Highly Commended Affiliate Award ($400).</li>
            <li><strong>Emerging Artist Award ($975):</strong> 3-session coaching package + 12-month membership.</li>
            <li><strong>Winner's Choice Award ($825):</strong> 3x coaching sessions + 6-month membership.</li>
            <li><strong>People's Choice Award ($325):</strong> $100 Art Shed voucher + 1 coaching session.</li>
          </ul>
          <p><a href="https://prize.studioonbrunswick.com.au/" style="color: #000000; font-weight: bold; text-decoration: underline;">View full details and terms online &rarr;</a></p>
          <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 30px 0;"/>
          <h3 style="color: #111111;">
            Key Dates
          </h3>
          <ul style="padding-left: 20px;">
            <li><strong>Entries close:</strong> January 9</li>
            <li><strong>Notification:</strong> Successful applicants notified the following Friday by email.</li>
            <li><strong>Exhibition:</strong> February 4 – February 22 at Studio on Brunswick.</li>
          </ul>
          <p>
            This is a career-building opportunity designed to support artists who are ready to be seen, supported, and taken seriously. I look forward to reviewing your submission.
          </p>
          <p>
            Warmly,
          </p>
          <p><strong>Team Bruns 💛</strong><br/>
            <span style="color: #666666; font-size: 14px;">Studio on Brunswick<br/>
        California Lane, 2/22 McLachlan Street<br/>
        Fortitude Valley, Brisbane QLD 4006</span>
          </p>
          <p><a href="mailto:adminsb@studioonbrunswick.com" style="color: #666666; text-decoration: none; font-size: 14px;">adminsb@studioonbrunswick.com</a></p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
