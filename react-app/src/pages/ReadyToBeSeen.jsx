import { useState, useCallback, useEffect, useMemo, lazy, Suspense } from 'react';
import './ReadyToBeSeen.css';

// Lazy load CheckoutModal - defers Stripe SDK until checkout opens
const CheckoutModal = lazy(() => import('../components/CheckoutModal'));

// Deadline: 9PM AEST on January 9, 2026
// AEST is UTC+10, so 9PM AEST = 11:00 UTC on Jan 9
const DEADLINE = new Date('2026-01-09T21:00:00+10:00');

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
  const [expandedPrize, setExpandedPrize] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Countdown timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = DEADLINE - now;

      if (difference <= 0) {
        return { expired: true };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        expired: false
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Sticky bar visibility on scroll (mobile only)
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past 400px (approximately past hero)
      const scrolled = window.scrollY > 400;
      setShowStickyBar(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Format countdown for display (with seconds for urgency)
  const countdownText = useMemo(() => {
    if (!timeLeft) return 'Loading...';
    if (timeLeft.expired) return 'Entries Closed';

    const { days, hours, minutes, seconds } = timeLeft;

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else {
      return `${minutes}m ${seconds}s`;
    }
  }, [timeLeft]);

  // Compact version for trust bar and sticky bar (with seconds)
  const countdownCompact = useMemo(() => {
    if (!timeLeft) return 'Loading...';
    if (timeLeft.expired) return 'Closed';

    const { days, hours, minutes, seconds } = timeLeft;

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      return `${hours}h ${minutes}m ${seconds}s`;
    }
  }, [timeLeft]);

  // Memoized callbacks to prevent unnecessary re-renders
  const toggleFaq = useCallback((index) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  const toggleMorePrizes = useCallback(() => {
    setShowMorePrizes(prev => !prev);
  }, []);

  const togglePrize = useCallback((prizeId) => {
    setExpandedPrize(prev => prev === prizeId ? null : prizeId);
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
            <a href="#venue" className="page-nav-link">The Venue</a>
            <a href="#eligibility" className="page-nav-link">Eligibility</a>
            <a href="#how-it-works" className="page-nav-link">How It Works</a>
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
          <p className="eyebrow-1">Independent Visions Art Prize 2026</p>
          <h1 className="headline-1">Your work deserves a wall,<br/><span className="headline-accent">not a drawer.</span></h1>
          <p className="subheadline-1">Win a solo exhibition, mentoring, and career-changing opportunities. <strong>8 prizes. Award-winning judge.</strong></p>

          {/* THE ACTION CARD: High contrast, low friction */}
          <div className="hero-action-card">
            {/* 1. The Deal (Logic) */}
            <div className="action-card-header">
              <span className="deal-price">$50 Entry</span>
              <span className="deal-arrow">→</span>
              <span className="deal-value">$11,399+ in Prizes</span>
            </div>

            {/* 2. The Button (Action) */}
            <button className="cta-primary-1 action-card-cta" onClick={openCheckout}>
              Enter Now
            </button>

            {/* 3. The Safety Net (Risk Reversal + Urgency) */}
            <div className="action-card-footer">
              <span className="action-urgency">⏰ Closes Jan 9 — {countdownText}</span>
              <span className="action-guarantee">✦ Not selected? $50 Credit at Studio on Brunswick</span>
            </div>
          </div>

          <div className="hero-trust-row">
            <span className="trust-badge"><span className="badge-icon">⚖️</span> Judge: Kate Marek</span>
            <span className="trust-badge"><span className="badge-icon">🔒</span> Secure Checkout</span>
            <span className="trust-badge"><span className="badge-icon">🇦🇺</span> Australian</span>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="trust-bar-container">
          <div className="trust-item">
            <span className="trust-emoji">🏆</span>
            <span>$11,399+ in Prizes</span>
          </div>
          <div className="trust-item">
            <span className="trust-emoji">🎨</span>
            <span>8 Award Categories</span>
          </div>
          <div className="trust-item">
            <span className="trust-emoji">⭐</span>
            <span>Guest Judge: Kate Marek</span>
          </div>
          <div className="trust-item trust-item-countdown">
            <span className="trust-emoji">⏰</span>
            <span className="countdown-badge">{countdownCompact}</span>
          </div>
        </div>
      </section>

      {/* Prize Breakdown - Headline + Expand Pattern */}
      <section className="prizes-section" id="prizes">
        <div className="prizes-container">
          <h2 className="section-title-1">The Prize Breakdown</h2>
          <p className="section-subtitle">8 ways to win. Real career investment.</p>

          <div className="prize-stack">
            {/* First Prize - Featured */}
            <div className={`prize-card-new featured ${expandedPrize === 'first' ? 'expanded' : ''}`}>
              <div className="prize-header">
                <span className="prize-rank">🥇</span>
                <div className="prize-title-group">
                  <h3 className="prize-name">First Prize</h3>
                  <p className="prize-summary">Solo Exhibition + Full Mentorship Package</p>
                </div>
                <div className="prize-value-badge">$3,449</div>
              </div>
              <button className="prize-expand-btn" onClick={() => togglePrize('first')} aria-expanded={expandedPrize === 'first'}>
                {expandedPrize === 'first' ? 'Hide details' : 'See what\'s included'}
                <span className="expand-icon"></span>
              </button>
              <div className="prize-details">
                <ul>
                  <li><span className="detail-icon">🎨</span> One week solo exhibition at <a href="#venue">Studio on Brunswick – Pop Up Gallery</a></li>
                  <li><span className="detail-icon">👤</span> Six 1:1 coaching/mentoring sessions</li>
                  <li><span className="detail-icon">🎓</span> 12-month Inner Circle membership</li>
                  <li><span className="detail-icon">📦</span> Exhibition Readiness Pack</li>
                  <li><span className="detail-icon">🚀</span> 6-month Artist Momentum Collective</li>
                </ul>
              </div>
            </div>

            {/* Second Prize */}
            <div className={`prize-card-new ${expandedPrize === 'second' ? 'expanded' : ''}`}>
              <div className="prize-header">
                <span className="prize-rank">🥈</span>
                <div className="prize-title-group">
                  <h3 className="prize-name">Second Prize</h3>
                  <p className="prize-summary">Group Show + Mentorship Package</p>
                </div>
                <div className="prize-value-badge">$2,100</div>
              </div>
              <button className="prize-expand-btn" onClick={() => togglePrize('second')} aria-expanded={expandedPrize === 'second'}>
                {expandedPrize === 'second' ? 'Hide details' : 'See what\'s included'}
                <span className="expand-icon"></span>
              </button>
              <div className="prize-details">
                <ul>
                  <li><span className="detail-icon">🎨</span> Place in a 2026 group show</li>
                  <li><span className="detail-icon">👤</span> Four 1:1 coaching/mentoring sessions</li>
                  <li><span className="detail-icon">🎓</span> 6-month Inner Circle membership</li>
                  <li><span className="detail-icon">🚀</span> 6-month group mentoring program</li>
                </ul>
              </div>
            </div>

            {/* SB Artist Accelerator Award */}
            <div className={`prize-card-new ${expandedPrize === 'accelerator' ? 'expanded' : ''}`}>
              <div className="prize-header">
                <span className="prize-rank">⭐</span>
                <div className="prize-title-group">
                  <h3 className="prize-name">Artist Accelerator Award</h3>
                  <p className="prize-summary">Intensive Mentorship + Brand Audit</p>
                </div>
                <div className="prize-value-badge">$2,250</div>
              </div>
              <button className="prize-expand-btn" onClick={() => togglePrize('accelerator')} aria-expanded={expandedPrize === 'accelerator'}>
                {expandedPrize === 'accelerator' ? 'Hide details' : 'See what\'s included'}
                <span className="expand-icon"></span>
              </button>
              <div className="prize-details">
                <ul>
                  <li><span className="detail-icon">👤</span> Six 1:1 coaching/mentoring sessions</li>
                  <li><span className="detail-icon">📱</span> Social media audit</li>
                  <li><span className="detail-icon">🚀</span> 6-month group mentoring program</li>
                </ul>
              </div>
            </div>

            {/* More Prizes - Collapsible */}
            <div className={`more-prizes-section ${showMorePrizes ? 'open' : ''}`}>
              <button className="more-prizes-toggle" onClick={toggleMorePrizes}>
                {showMorePrizes ? 'Hide' : 'Show'} 5 More Awards
                <span className="toggle-icon"></span>
              </button>

              <div className="more-prizes-content">
                <div className="prize-grid-small">
                  <div className="prize-card-compact">
                    <div className="compact-header">
                      <h4>Emerging Artist Award</h4>
                      <span className="compact-value">$975</span>
                    </div>
                    <p>3 coaching sessions + 12-month membership</p>
                  </div>
                  <div className="prize-card-compact">
                    <div className="compact-header">
                      <h4>Winner's Choice Award</h4>
                      <span className="compact-value">$825</span>
                    </div>
                    <p>3 coaching sessions + 6-month membership</p>
                  </div>
                  <div className="prize-card-compact">
                    <div className="compact-header">
                      <h4>People's Choice Award</h4>
                      <span className="compact-value">$325</span>
                    </div>
                    <p>$100 Art Shed voucher + 1 coaching session</p>
                  </div>
                  <div className="prize-card-compact">
                    <div className="compact-header">
                      <h4>Affiliates Choice Award</h4>
                      <span className="compact-value">$1,075</span>
                    </div>
                    <p>Affiliate mentorship package</p>
                  </div>
                  <div className="prize-card-compact">
                    <div className="compact-header">
                      <h4>Highly Commended</h4>
                      <span className="compact-value">$400</span>
                    </div>
                    <p>Affiliate recognition package</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="total-value">
            <span>Total Prize Pool</span>
            <strong>$11,399+</strong>
          </div>
        </div>
      </section>

      {/* Testimonials Section (MOVED UP for Social Proof) */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="section-title-1">What Artists Are Saying</h2>
          <p className="section-subtitle">Real experiences from the Studio on Brunswick community.</p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                "I came for the lighting and stayed for the life-changing clarity. Seriously—this place gave me permission to think bigger, price properly, and stop apologising for wanting success as an artist."
              </blockquote>
              <div className="testimonial-author">
                <span className="author-name">Maya T.</span>
                <span className="author-title">Illustrator & Printmaker</span>
              </div>
            </div>

            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                "After years of feeling like I didn't belong anywhere in the art world, Studio on Brunswick gave me community, direction, and belief in myself. Lyne doesn't just coach—she sees you."
              </blockquote>
              <div className="testimonial-author">
                <span className="author-name">Leila J.</span>
                <span className="author-title">Self-Taught Painter</span>
              </div>
            </div>

            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                "There's a magic in this space you don't find elsewhere. It's strategic and soulful. I've made art here, launched exhibitions, run events—and grown my confidence every single time."
              </blockquote>
              <div className="testimonial-author">
                <span className="author-name">Sharon M.</span>
                <span className="author-title">Mixed Media Artist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Gallery (Venue) */}
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
              <h3 className="facilities-heading">Professional Gallery Standards</h3>
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

      {/* How It Works - Timeline */}
      <section className="how-section" id="how-it-works">
        <div className="how-container">
          <h2 className="section-title-1">How It Works</h2>
          <p className="section-subtitle">Three simple steps to submit your work.</p>

          <div className="timeline">
            <div className="timeline-step-card">
              <div className="step-number">1</div>
              <h3>Secure Your Entry</h3>
              <p>Pay <strong>$50 AUD</strong> to unlock your eligibility for the $11,399+ prize pool.</p>
            </div>
            <div className="timeline-connector-dashed"></div>
            <div className="timeline-step-card">
              <div className="step-number">2</div>
              <h3>Receive Private Access</h3>
              <p>Check your email for your <strong>exclusive submission link</strong> to the artist portal.</p>
            </div>
            <div className="timeline-connector-dashed"></div>
            <div className="timeline-step-card">
              <div className="step-number">3</div>
              <h3>Submit When Ready</h3>
              <p>Take your time. You have until <strong>January 9</strong> to upload your 6 artworks.</p>
              <p className="step-note">You do <strong>not</strong> need to have your images ready to enter today.</p>
            </div>
          </div>

          <div className="exhibition-dates">
            <p><strong>Exhibition Dates:</strong> 4–22 February 2026</p>
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

            <div className={`faq-item ${openFaq === 6 ? 'open' : ''}`} onClick={() => toggleFaq(6)} onKeyDown={(e) => e.key === 'Enter' && toggleFaq(6)} role="button" tabIndex={0} aria-expanded={openFaq === 6}>
              <h3>How are winners selected? <span className="faq-icon" aria-hidden="true"></span></h3>
              <p>Our judging panel, including guest judge Kate Marek (2025 Queens Wharf Brisbane Art Prize winner), evaluates work on originality, technical skill, artistic vision, and presentation quality. All mediums are judged on their own merits.</p>
            </div>

            <div className={`faq-item ${openFaq === 7 ? 'open' : ''}`} onClick={() => toggleFaq(7)} onKeyDown={(e) => e.key === 'Enter' && toggleFaq(7)} role="button" tabIndex={0} aria-expanded={openFaq === 7}>
              <h3>What file formats can I upload? <span className="faq-icon" aria-hidden="true"></span></h3>
              <p>For digital submissions: JPEG or PNG, minimum 300dpi, 2000px on longest side. For video/digital media: MP4 format, max 3 minutes. File size limit: 50MB per file.</p>
            </div>

            <div className={`faq-item ${openFaq === 8 ? 'open' : ''}`} onClick={() => toggleFaq(8)} onKeyDown={(e) => e.key === 'Enter' && toggleFaq(8)} role="button" tabIndex={0} aria-expanded={openFaq === 8}>
              <h3>What's your refund policy? <span className="faq-icon" aria-hidden="true"></span></h3>
              <p>While we can't offer cash refunds, entry fees can be converted to credit toward Studio on Brunswick's professional development services—including mentoring sessions, workshops, and membership programs. Contact adminsb@studioonbrunswick.com to discuss options.</p>
            </div>

            <div className={`faq-item ${openFaq === 9 ? 'open' : ''}`} onClick={() => toggleFaq(9)} onKeyDown={(e) => e.key === 'Enter' && toggleFaq(9)} role="button" tabIndex={0} aria-expanded={openFaq === 9}>
              <h3>What if my work isn't selected? <span className="faq-icon" aria-hidden="true"></span></h3>
              <p>Every entrant receives personalized feedback from our judging panel. You'll also get priority notification for future exhibitions and events at Studio on Brunswick. Your entry fee directly supports the Brisbane arts community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Decluttered for Clarity */}
      <section className="final-cta-1">
        <div className="final-cta-content">
          <h2>Your work deserves to be seen</h2>
          <p>8 prizes. $11,399+ in value. Professional exhibition. One entry fee.</p>

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
              <div className="cta-detail cta-detail-countdown">
                <span className="label">Time Left</span>
                <span className="value countdown-value">{countdownCompact}</span>
              </div>
            </div>

            <button className="cta-primary-1 cta-large" onClick={openCheckout}>
              Enter Now
            </button>

            <div className="trust-badges trust-badges-final">
              <span className="trust-badge"><span className="badge-icon">🔒</span> Secure SSL Checkout</span>
              <span className="trust-badge"><span className="badge-icon">🇦🇺</span> Australian Owned & Operated</span>
              <span className="trust-badge"><span className="badge-icon">⭐</span> Award-Winning Judge</span>
              <span className="trust-badge"><span className="badge-icon">🏪</span> Proudly Australian Small Business</span>
            </div>
            <p className="cta-reassurance">Instant confirmation • Upload anytime before deadline</p>
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

      {/* Mobile sticky CTA bar */}
      <div className={`sticky-cta-mobile ${showStickyBar ? 'visible' : ''}`}>
        <span className="sticky-info">$50 entry · <span className="sticky-countdown">{countdownCompact}</span></span>
        <button className="sticky-cta-button" onClick={openCheckout}>Enter Now</button>
      </div>
    </div>
  );
}

export default ReadyToBeSeen;
