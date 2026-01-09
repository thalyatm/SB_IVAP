/* global fbq */
import { useEffect } from 'react';
import './ThankYou.css';

function ThankYou() {
  useEffect(() => {
    // Fire Facebook Pixel Purchase event
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Purchase', {
        value: 50.00,
        currency: 'AUD',
        content_name: 'IVAP Entry',
        content_category: 'Art Prize Entry'
      });
    }
  }, []);

  return (
    <div className="thank-you-page">
      <div className="thank-you-container">
        <div className="thank-you-icon">✓</div>
        <h1>Thank You for Your Entry!</h1>
        <p className="thank-you-subtitle">
          Your submission to the Independent Visions Art Prize has been received.
        </p>

        <div className="next-steps">
          <h2>What Happens Next?</h2>
          <ol>
            <li>
              <strong>Check your email</strong>
              <span>You'll receive a confirmation email with your private submission link.</span>
            </li>
            <li>
              <strong>Upload your artwork</strong>
              <span>Use the link to submit up to 6 artworks before January 12, 2026.</span>
            </li>
            <li>
              <strong>Wait for results</strong>
              <span>Successful applicants will be notified the Friday after entries close.</span>
            </li>
          </ol>
        </div>

        <div className="thank-you-details">
          <p><strong>Exhibition Dates:</strong> 4–22 February 2026</p>
          <p><strong>Location:</strong> Studio on Brunswick – Pop Up Gallery, California Lane, 2/22 McLachlan Street, Fortitude Valley QLD</p>
        </div>

        <a href="https://studioonbrunswick.com.au" className="back-link">
          Visit Studio on Brunswick
        </a>
      </div>
    </div>
  );
}

export default ThankYou;
