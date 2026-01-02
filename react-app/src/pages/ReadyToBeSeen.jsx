import { useState, useCallback, lazy, Suspense } from 'react';
import './ReadyToBeSeen.css';

// Lazy load CheckoutModal - defers Stripe SDK until checkout opens
const CheckoutModal = lazy(() => import('../components/CheckoutModal'));

// Loading skeleton for checkout modal
function CheckoutLoader() {
  return (
    <div className="checkout-modal-overlay">
      <div className="checkout-modal" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid #E8E0D5',
          borderTopColor: '#25102E',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite'
        }} />
      </div>
    </div>
  );
}

function ReadyToBeSeen() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showMorePrizes, setShowMorePrizes] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Memoized callbacks to prevent unnecessary re-renders
  const toggleFaq = useCallback((index) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  const toggleMorePrizes = useCallback(() => {
    setShowMorePrizes(prev => !prev);
  }, []);

  const openCheckout = useCallback((e) => {
    e.preventDefault();
    setIsCheckoutOpen(true);
  }, []);

  const closeCheckout = useCallback(() => {
    setIsCheckoutOpen(false);
  }, []);

  return (
    <div className="page-1">
      {/* Page Navigation */}
      <nav className="page-nav">
        <div className="page-nav-container">
          <div className="page-nav-links">
            <a href="#prizes" className="page-nav-link">Prizes</a>
            <a href="#how-it-works" className="page-nav-link">How It Works</a>
            <a href="#eligibility" className="page-nav-link">Eligibility</a>
            <a href="#faq" className="page-nav-link">FAQ</a>
          </div>
          <button className="page-nav-cta" onClick={openCheckout}>Submit Entry</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-1">
        <div className="hero-image-1">
          {/* Explicit dimensions prevent CLS, fetchpriority for LCP */}
          <img
            src="/images/Winners.jpg"
            alt="Previous art prize winners celebrating"
            width={600}
            height={400}
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <div className="hero-content-1">
          <p className="eyebrow-1">Independent Visions Art Prize</p>
          <h1 className="headline-1">Your work deserves a wall,<br/><span className="headline-accent">not a drawer.</span></h1>
          <p className="subheadline-1">Submit your work for the chance to win prizes, exhibition space, and career-building mentorship.</p>
          <p className="location-note-1">Open to emerging and independent artists Australia-wide</p>
          <div className="hero-details-1">
            <div className="hero-detail">
              <span className="detail-value">$11,399+</span>
              <span className="detail-label">Prize Pool</span>
            </div>
            <div className="hero-detail">
              <span className="detail-value">8</span>
              <span className="detail-label">Prizes to Be Won</span>
            </div>
            <div className="hero-detail">
              <span className="detail-value">Professional</span>
              <span className="detail-label">Exhibition</span>
              <span className="detail-sub">4–22 February 2026 · Brisbane</span>
            </div>
          </div>
          <div className="hero-cta-group">
            <button className="cta-primary-1" onClick={openCheckout}>
              Submit Your Entry — $50
            </button>
            <p className="entry-note">$50 entry fee · Submit up to 6 artworks · <span className="deadline-text">Entries close January 9, 2026</span></p>
            <div className="trust-badges">
              <span className="trust-badge"><span className="badge-icon">🔒</span> Secure SSL Checkout</span>
              <span className="trust-badge"><span className="badge-icon">🇦🇺</span> Australian Owned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="trust-bar-container">
          <div className="trust-item">
            <span className="trust-icon icon-prize"></span>
            <span>$11,399+ in Prizes</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon icon-gallery"></span>
            <span>8 Award Categories</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon icon-mentoring"></span>
            <span>Guest Judge: Kate Marek</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon icon-clock"></span>
            <span>Entries Close January 9, 2026</span>
          </div>
        </div>
      </section>

      {/* Prize Breakdown - Value Stack */}
      <section className="prizes-section" id="prizes">
        <div className="prizes-container">
          <h2 className="section-title-1">The Prize Breakdown</h2>
          <p className="section-subtitle">Each prize valued at real career investment.</p>

          {/* [Visual value stack - consider cards or table layout] */}
          <div className="prize-stack">
            <div className="prize-card featured">
              <div className="prize-label">First Prize</div>
              <div className="prize-value"><span className="valued-at">Valued at</span> $3,449</div>
              <ul className="prize-includes">
                <li>One week solo exhibition at the <a href="#venue" className="prize-link">Studio on Brunswick – Pop Up Gallery</a> <span className="item-value">valued at $1,050</span></li>
                <li>Six 1:1 coaching/mentoring sessions <span className="item-value">valued at $1,350</span></li>
                <li>12-month Inner Circle membership <span className="item-value">valued at $300</span></li>
                <li>Exhibition Readiness Pack <span className="item-value">valued at $149</span></li>
                <li>6-month Artist Momentum Collective <span className="item-value">valued at $600</span></li>
              </ul>
            </div>

            <div className="prize-card">
              <div className="prize-label">SB Artist Accelerator Award</div>
              <div className="prize-value"><span className="valued-at">Valued at</span> $2,250</div>
              <ul className="prize-includes">
                <li>Six 1:1 coaching/mentoring sessions <span className="item-value">valued at $1,350</span></li>
                <li>Social media audit <span className="item-value">valued at $300</span></li>
                <li>6-month group mentoring program <span className="item-value">valued at $600</span></li>
              </ul>
            </div>

            <div className="prize-card">
              <div className="prize-label">Second Prize</div>
              <div className="prize-value"><span className="valued-at">Valued at</span> $2,100</div>
              <ul className="prize-includes">
                <li>Place in a 2026 group show <span className="item-value">valued at $450</span></li>
                <li>Four 1:1 coaching/mentoring sessions <span className="item-value">valued at $900</span></li>
                <li>6-month Inner Circle membership <span className="item-value">valued at $150</span></li>
                <li>6-month group mentoring program <span className="item-value">valued at $600</span></li>
              </ul>
            </div>

            <div className={`more-prizes-section ${showMorePrizes ? 'open' : ''}`}>
              <button
                className="more-prizes-toggle"
                onClick={toggleMorePrizes}
              >
                {showMorePrizes ? 'Hide' : 'Show'} 5 More Awards
                <span className="toggle-icon"></span>
              </button>

              <div className="more-prizes-content">
                <div className="prize-row">
                  <div className="prize-card-small">
                    <div className="prize-label">Emerging Artist Award</div>
                    <div className="prize-value"><span className="valued-at">Valued at</span> $975</div>
                    <p>3 coaching sessions + 12-month membership</p>
                  </div>
                  <div className="prize-card-small">
                    <div className="prize-label">Winner's Choice Award</div>
                    <div className="prize-value"><span className="valued-at">Valued at</span> $825</div>
                    <p>3 coaching sessions + 6-month membership</p>
                  </div>
                  <div className="prize-card-small">
                    <div className="prize-label">People's Choice Award</div>
                    <div className="prize-value"><span className="valued-at">Valued at</span> $325</div>
                    <p>$100 Art Shed voucher + 1 coaching session</p>
                  </div>
                </div>

                <div className="prize-row">
                  <div className="prize-card-small">
                    <div className="prize-label">Affiliates Choice Award</div>
                    <div className="prize-value"><span className="valued-at">Valued at</span> $1,075</div>
                    <p>Affiliate award package</p>
                  </div>
                  <div className="prize-card-small">
                    <div className="prize-label">Highly Commended Affiliate Award</div>
                    <div className="prize-value"><span className="valued-at">Valued at</span> $400</div>
                    <p>Affiliate award package</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="total-value">
            <span>Total Prize Pool Valued At</span>
            <strong>$11,399+</strong>
          </div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="how-section" id="how-it-works">
        <div className="how-container">
          <h2 className="section-title-1">How It Works</h2>
          <p className="section-subtitle">Three simple steps to submit your work.</p>

          <div className="timeline">
            <div className="timeline-step-card">
              <div className="step-number">1</div>
              <h3>Purchase Your Entry</h3>
              <p>Pay <strong>$50 AUD</strong> to submit up to 6 artworks for consideration.</p>
            </div>
            <div className="timeline-connector-dashed"></div>
            <div className="timeline-step-card">
              <div className="step-number">2</div>
              <h3>Check Your Email</h3>
              <p>You'll receive a <strong>private submission link</strong> to upload your work.</p>
            </div>
            <div className="timeline-connector-dashed"></div>
            <div className="timeline-step-card">
              <div className="step-number">3</div>
              <h3>Upload Your Work</h3>
              <p>Submit up to <strong>6 pieces</strong> before January 9. Successful applicants notified the following Friday.</p>
              <p className="step-note">Save your progress and return to complete your submission anytime before the deadline.</p>
            </div>
          </div>

          <div className="exhibition-dates">
            <p><strong>Exhibition Dates:</strong> 4–22 February 2026</p>
          </div>
        </div>
      </section>

      {/* Technical Specs - "Can I Enter?" */}
      <section className="specs-section" id="eligibility">
        <div className="specs-container">
          <h2 className="section-title-1">Can I Enter?</h2>
          <p className="section-subtitle">Check your eligibility and artwork requirements.</p>

          {/* [Two-column layout with icons] */}
          <div className="specs-grid">
            <div className="specs-card">
              <h3>Who Can Enter</h3>
              <ul className="specs-list">
                <li><span className="check">✓</span> Open to all Australian artists nationwide</li>
                <li><span className="check">✓</span> Emerging and independent artists welcome</li>
                <li><span className="check">✓</span> All mediums accepted</li>
                <li><span className="check">✓</span> Multiple entries allowed</li>
                <li><span className="check">✓</span> Applicants must be 18 years or older</li>
              </ul>
            </div>

            <div className="specs-card">
              <h3>Artwork Requirements</h3>
              <ul className="specs-list">
                <li><strong>2D Works:</strong> 50×50cm or equivalent area (e.g., 40×60cm)</li>
                <li><strong>3D Works:</strong> Maximum 100cm in any direction</li>
                <li><strong>Condition:</strong> Must be ready for gallery display</li>
                <li><strong>Quantity:</strong> Up to 6 works per entry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About the Gallery */}
      <section className="gallery-section" id="venue">
        <div className="gallery-container">
          <div className="gallery-content">
            <p className="gallery-eyebrow">The Venue</p>
            <h2>Studio on Brunswick – Pop Up Gallery</h2>
            <p className="gallery-location">California Lane, 2/22 McLachlan Street, Fortitude Valley QLD</p>
            <p className="gallery-description">
              Sitting beautifully at the top end of California Lane, near Reverends Cafe, Pressi Juice Bar, and a myriad of boutique bars and shops - the perfect space for your exhibition.
            </p>
            <p className="gallery-capacity">
              <strong>Capacity:</strong> 20-30 people + laneway spill-out (24m²)
            </p>
            <div className="gallery-facilities">
              <h3 className="facilities-heading">Facilities</h3>
              <ul className="facilities-list">
                <li>Track hanging system</li>
                <li>Wifi & air conditioning</li>
                <li>Plinths, planks & easels</li>
                <li>Wheelchair accessible</li>
                <li>Close to public transport</li>
                <li>Bathroom access</li>
              </ul>
            </div>
          </div>
          <div className="gallery-image">
            {/* Explicit dimensions prevent CLS, lazy loaded for below-fold */}
            <img
              src="/images/Gallery.webp"
              alt="Studio on Brunswick gallery interior"
              width={450}
              height={300}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="faq-container">
          <h2 className="section-title-1">Frequently Asked Questions</h2>

          <div className="faq-grid">
            <div className={`faq-item ${openFaq === 0 ? 'open' : ''}`} onClick={() => toggleFaq(0)} onKeyDown={(e) => e.key === 'Enter' && toggleFaq(0)} role="button" tabIndex={0} aria-expanded={openFaq === 0}>
              <h3>Can I enter from interstate? <span className="faq-icon" aria-hidden="true"></span></h3>
              <p>Absolutely! We welcome entries from artists all across Australia. If your work is selected for the exhibition, you'll just need to arrange shipping to our Brisbane gallery.</p>
            </div>

            <div className={`faq-item ${openFaq === 1 ? 'open' : ''}`} onClick={() => toggleFaq(1)} onKeyDown={(e) => e.key === 'Enter' && toggleFaq(1)} role="button" tabIndex={0} aria-expanded={openFaq === 1}>
              <h3>Can I enter multiple times? <span className="faq-icon" aria-hidden="true"></span></h3>
              <p>Yes. Each $50 entry allows you to submit up to 6 artworks. You may purchase multiple entries if you have more work to submit.</p>
            </div>

            <div className={`faq-item ${openFaq === 2 ? 'open' : ''}`} onClick={() => toggleFaq(2)} onKeyDown={(e) => e.key === 'Enter' && toggleFaq(2)} role="button" tabIndex={0} aria-expanded={openFaq === 2}>
              <h3>What if I'm not ready to upload yet? <span className="faq-icon" aria-hidden="true"></span></h3>
              <p>No problem. Once you purchase your entry, you'll have until January 9 to upload your work via your private submission link.</p>
            </div>

            <div className={`faq-item ${openFaq === 3 ? 'open' : ''}`} onClick={() => toggleFaq(3)} onKeyDown={(e) => e.key === 'Enter' && toggleFaq(3)} role="button" tabIndex={0} aria-expanded={openFaq === 3}>
              <h3>When will I know if I'm selected? <span className="faq-icon" aria-hidden="true"></span></h3>
              <p>Successful applicants will be notified the Friday following the January 9 deadline.</p>
            </div>

            <div className={`faq-item ${openFaq === 4 ? 'open' : ''}`} onClick={() => toggleFaq(4)} onKeyDown={(e) => e.key === 'Enter' && toggleFaq(4)} role="button" tabIndex={0} aria-expanded={openFaq === 4}>
              <h3>What mediums are accepted? <span className="faq-icon" aria-hidden="true"></span></h3>
              <p>All mediums are welcome: painting, sculpture, photography, mixed media, digital (printed), textiles, and more.</p>
            </div>

            <div className={`faq-item ${openFaq === 5 ? 'open' : ''}`} onClick={() => toggleFaq(5)} onKeyDown={(e) => e.key === 'Enter' && toggleFaq(5)} role="button" tabIndex={0} aria-expanded={openFaq === 5}>
              <h3>Does my work need to be framed? <span className="faq-icon" aria-hidden="true"></span></h3>
              <p>Work must be ready for gallery display. This typically means framed or professionally mounted, but depends on the medium.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-1">
        <div className="final-cta-content">
          <h2>Ready to take the next step?</h2>
          <p>Enter for your chance to exhibit, win mentoring, and join a community that supports independent artists.</p>

          {/* What Happens Next - 4-step journey */}
          <div className="what-happens-next">
            <h3 className="what-happens-title">What Happens Next</h3>
            <div className="journey-steps">
              <div className="journey-step">
                <span className="journey-number">1</span>
                <span className="journey-label">Instant Confirmation</span>
                <span className="journey-desc">Payment receipt + welcome email</span>
              </div>
              <div className="journey-connector"></div>
              <div className="journey-step">
                <span className="journey-number">2</span>
                <span className="journey-label">Private Link Sent</span>
                <span className="journey-desc">Secure submission form access</span>
              </div>
              <div className="journey-connector"></div>
              <div className="journey-step">
                <span className="journey-number">3</span>
                <span className="journey-label">Upload by Jan 9</span>
                <span className="journey-desc">Submit up to 6 artworks</span>
              </div>
              <div className="journey-connector"></div>
              <div className="journey-step">
                <span className="journey-number">4</span>
                <span className="journey-label">Results Announced</span>
                <span className="journey-desc">Notified the following Friday</span>
              </div>
            </div>
          </div>

          <div className="final-cta-box">
            <div className="cta-details">
              <div className="cta-detail">
                <span className="label">Entry Fee</span>
                <span className="value">$50 AUD</span>
              </div>
              <div className="cta-detail">
                <span className="label">Artworks</span>
                <span className="value">Up to 6</span>
              </div>
              <div className="cta-detail">
                <span className="label">Deadline</span>
                <span className="value">January 9, 2026</span>
              </div>
            </div>

            <button className="cta-primary-1 cta-large" onClick={openCheckout}>
              Enter Now
            </button>

            <div className="trust-badges trust-badges-final">
              <span className="trust-badge"><span className="badge-icon">🔒</span> Secure SSL Checkout</span>
              <span className="trust-badge"><span className="badge-icon">🇦🇺</span> Australian Owned & Operated</span>
              <span className="trust-badge"><span className="badge-icon">⭐</span> Critically Acclaimed</span>
              <span className="trust-badge"><span className="badge-icon">🏪</span> Proudly Australian Small Business</span>
            </div>
            <p className="cta-reassurance">Instant confirmation • Upload anytime before deadline</p>
            <p className="terms-disclaimer">By entering, you agree to the full terms and conditions of the Independent Visions Art Prize.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-1">
        <p className="footer-logo-1">Studio on Brunswick</p>
        <p className="footer-address-1">
          Studio on Brunswick – Pop Up Gallery<br/>
          California Lane, 2/22 McLachlan Street, Fortitude Valley QLD<br/>
          adminsb@studioonbrunswick.com
        </p>
      </footer>

      {/* Lazy-loaded checkout modal - Stripe SDK only loads when opened */}
      {isCheckoutOpen && (
        <Suspense fallback={<CheckoutLoader />}>
          <CheckoutModal
            isOpen={isCheckoutOpen}
            onClose={closeCheckout}
          />
        </Suspense>
      )}
    </div>
  );
}

export default ReadyToBeSeen;
