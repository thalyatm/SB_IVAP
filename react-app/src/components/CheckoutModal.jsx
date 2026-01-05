/* global fbq */
import { useCallback, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import './CheckoutModal.css';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function CheckoutModal({ isOpen, onClose }) {
  const [error, setError] = useState(null);

  const fetchClientSecret = useCallback(async () => {
    // Track InitiateCheckout when checkout starts
    if (typeof fbq !== 'undefined') {
      fbq('track', 'InitiateCheckout', {
        value: 50.00,
        currency: 'AUD',
        content_name: 'IVAP Entry',
        content_category: 'Art Prize Entry'
      });
    }

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const data = await response.json();
      return data.clientSecret;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="checkout-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="checkout-modal-title">
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        <button className="checkout-modal-close" onClick={onClose} aria-label="Close checkout">
          &times;
        </button>

        <div className="checkout-modal-header">
          <h2 id="checkout-modal-title">Complete Your Entry</h2>
          <p>Independent Visions Art Prize - $50 AUD</p>
        </div>

        {/* Value reminder - what you're getting */}
        <div className="checkout-value-reminder">
          <ul className="value-list">
            <li><span className="check-icon">✓</span> Submit up to 6 artworks for $11k+ prize pool</li>
            <li><span className="check-icon">✓</span> Chance to win solo exhibition + mentoring</li>
            <li><span className="check-icon">✓</span> Private submission link sent instantly</li>
          </ul>
        </div>

        {/* What happens next mini-timeline */}
        <div className="checkout-timeline">
          <div className="timeline-step">
            <span className="step-num">1</span>
            <span className="step-text">Pay</span>
          </div>
          <span className="timeline-arrow">→</span>
          <div className="timeline-step">
            <span className="step-num">2</span>
            <span className="step-text">Get link</span>
          </div>
          <span className="timeline-arrow">→</span>
          <div className="timeline-step">
            <span className="step-num">3</span>
            <span className="step-text">Upload by Jan 9</span>
          </div>
        </div>

        <div className="checkout-modal-content">
          {error ? (
            <div className="checkout-error">
              <p>Something went wrong. Please try again.</p>
              <button onClick={() => setError(null)}>Retry</button>
            </div>
          ) : (
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ fetchClientSecret }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          )}
        </div>

        {/* Trust signals and support */}
        <div className="checkout-trust-footer">
          <div className="checkout-trust-badges">
            <span className="checkout-badge">🔒 Secure SSL</span>
            <span className="checkout-badge">🇦🇺 Australian Owned</span>
          </div>
          <p className="checkout-stripe">Payments securely processed by Stripe</p>
          <p className="checkout-support">Questions? <a href="mailto:adminsb@studioonbrunswick.com">adminsb@studioonbrunswick.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;
