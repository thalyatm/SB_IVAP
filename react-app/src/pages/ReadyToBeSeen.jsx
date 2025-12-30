import { useState } from 'react';
import './ReadyToBeSeen.css';

function ReadyToBeSeen() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
          <a href="https://buy.stripe.com/14AdRb4Hn2FCbn26Jm3wQ00" className="page-nav-cta">Enter Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-1">
        <div className="hero-image-1">
          <img src="/images/Winners.jpg" alt="Previous art prize winners celebrating" />
        </div>
        <div className="hero-content-1">
          <p className="eyebrow-1">Independent Visions Art Prize</p>
          <h1 className="headline-1">Your work deserves a wall,<br/><span className="headline-accent">not a drawer.</span></h1>
          <p className="subheadline-1">A career-building opportunity for emerging and independent artists.</p>
          <p className="location-note-1">Open to artists Australia-wide</p>
          <div className="hero-details-1">
            <div className="hero-detail">
              <span className="detail-value">$11,300+</span>
              <span className="detail-label">Prize Pool</span>
            </div>
            <div className="hero-detail">
              <span className="detail-value">6+</span>
              <span className="detail-label">Prizes to Be Won</span>
            </div>
            <div className="hero-detail">
              <span className="detail-value">Professional</span>
              <span className="detail-label">Exhibition</span>
              <span className="detail-sub">Feb 2026 · Brisbane</span>
            </div>
          </div>
          <div className="hero-cta-group">
            <a href="https://buy.stripe.com/14AdRb4Hn2FCbn26Jm3wQ00" className="cta-primary-1">
              Enter Now — $50
            </a>
            <p className="entry-note">Up to 6 artworks per entry · <span className="deadline-text">Entries close Jan 9</span></p>
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
            <span>7 Award Categories</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon icon-mentoring"></span>
            <span>Guest Judge: Kate Marek</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon icon-clock"></span>
            <span>Entries Close Jan 9</span>
          </div>
        </div>
      </section>

      {/* The "Why" Section */}
      <section className="why-section">
        <div className="why-container">
          <h2 className="section-title-1">What Winners Receive</h2>
          <p className="section-subtitle">
            Most art prizes hand you a cheque and forget your name. This one invests in your future.
          </p>

          <div className="benefit-grid-1">
            <div className="benefit-card-1">
              <div className="benefit-icon">&#9670;</div>
              <div className="benefit-text">
                <h3>Professional Exhibition</h3>
                <p>Gallery show at Studio on Brunswick, Feb 4-22, 2026</p>
              </div>
            </div>
            <div className="benefit-card-1">
              <div className="benefit-icon">&#10022;</div>
              <div className="benefit-text">
                <h3>Professional Judging</h3>
                <p>Guest judge Kate Marek, 2025 Queens Wharf Brisbane Art Prize winner</p>
              </div>
            </div>
            <div className="benefit-card-1">
              <div className="benefit-icon">&#10023;</div>
              <div className="benefit-text">
                <h3>1:1 Mentoring</h3>
                <p>Up to 6 private coaching sessions with experienced artists</p>
              </div>
            </div>
            <div className="benefit-card-1">
              <div className="benefit-icon">&#10070;</div>
              <div className="benefit-text">
                <h3>Community Access</h3>
                <p>Inner Circle membership and Artist Momentum Collective for up to 12 months</p>
              </div>
            </div>
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
              <div className="prize-value">$3,449</div>
              <ul className="prize-includes">
                <li>1-week solo exhibition</li>
                <li>6 private coaching sessions</li>
                <li>12-month Inner Circle membership</li>
                <li>Exhibition Readiness Pack</li>
                <li>6-month Artist Momentum Collective</li>
              </ul>
            </div>

            <div className="prize-card">
              <div className="prize-label">SB Artist Accelerator</div>
              <div className="prize-value">$2,250</div>
              <ul className="prize-includes">
                <li>6 private coaching sessions</li>
                <li>Professional social media audit</li>
                <li>6-month group mentoring program</li>
              </ul>
            </div>

            <div className="prize-card">
              <div className="prize-label">Second Prize</div>
              <div className="prize-value">$2,100</div>
              <ul className="prize-includes">
                <li>2026 group show placement</li>
                <li>4 private coaching sessions</li>
                <li>6-month Inner Circle membership</li>
                <li>6-month group mentoring</li>
              </ul>
            </div>

            <div className="prize-row">
              <div className="prize-card-small">
                <div className="prize-label">Emerging Artist Award</div>
                <div className="prize-value">$975</div>
                <p>3 coaching sessions + 12-month membership</p>
              </div>
              <div className="prize-card-small">
                <div className="prize-label">Winner's Choice</div>
                <div className="prize-value">$825</div>
                <p>3 coaching sessions + 6-month membership</p>
              </div>
              <div className="prize-card-small">
                <div className="prize-label">People's Choice</div>
                <div className="prize-value">$325</div>
                <p>$100 Art Shed voucher + 1 coaching session</p>
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
            </div>
          </div>

          <div className="exhibition-dates">
            <p><strong>Exhibition Dates:</strong> February 4, 2026 to February 22, 2026</p>
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
      <section className="gallery-section">
        <div className="gallery-container">
          {/* [Gallery interior photo] */}
          <div className="gallery-content">
            <p className="gallery-eyebrow">The Venue</p>
            <h2>Studio on Brunswick</h2>
            <p className="gallery-location">California Lane, 2/22 McLachlan Street<br/>Fortitude Valley, Brisbane</p>
            <p className="gallery-description">
              A professional gallery space in the heart of Brisbane's creative precinct.
              This isn't a makeshift venue or temporary pop-up. It's a dedicated exhibition
              space designed to showcase your work at its absolute best.
            </p>
          </div>
          <div className="gallery-image">
            <img src="/images/Gallery.webp" alt="Studio on Brunswick gallery interior" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="faq-container">
          <h2 className="section-title-1">Frequently Asked Questions</h2>

          <div className="faq-grid">
            <div className={`faq-item ${openFaq === 0 ? 'open' : ''}`} onClick={() => toggleFaq(0)}>
              <h3>Can I enter from interstate? <span className="faq-icon"></span></h3>
              <p>Yes! The prize is open to Australian artists nationwide. You'll need to arrange shipping for your work if selected for exhibition.</p>
            </div>

            <div className={`faq-item ${openFaq === 1 ? 'open' : ''}`} onClick={() => toggleFaq(1)}>
              <h3>Can I enter multiple times? <span className="faq-icon"></span></h3>
              <p>Yes. Each $50 entry allows you to submit up to 6 artworks. You may purchase multiple entries if you have more work to submit.</p>
            </div>

            <div className={`faq-item ${openFaq === 2 ? 'open' : ''}`} onClick={() => toggleFaq(2)}>
              <h3>What if I'm not ready to upload yet? <span className="faq-icon"></span></h3>
              <p>No problem. Once you purchase your entry, you'll have until January 9 to upload your work via your private submission link.</p>
            </div>

            <div className={`faq-item ${openFaq === 3 ? 'open' : ''}`} onClick={() => toggleFaq(3)}>
              <h3>When will I know if I'm selected? <span className="faq-icon"></span></h3>
              <p>Successful applicants will be notified the Friday following the January 9 deadline.</p>
            </div>

            <div className={`faq-item ${openFaq === 4 ? 'open' : ''}`} onClick={() => toggleFaq(4)}>
              <h3>What mediums are accepted? <span className="faq-icon"></span></h3>
              <p>All mediums are welcome: painting, sculpture, photography, mixed media, digital (printed), textiles, and more.</p>
            </div>

            <div className={`faq-item ${openFaq === 5 ? 'open' : ''}`} onClick={() => toggleFaq(5)}>
              <h3>Does my work need to be framed? <span className="faq-icon"></span></h3>
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
                <span className="value">Jan 9, 2026</span>
              </div>
            </div>

            <a href="https://buy.stripe.com/14AdRb4Hn2FCbn26Jm3wQ00" className="cta-primary-1 cta-large">
              Enter Now
            </a>

            <p className="cta-reassurance">Secure checkout • Instant confirmation • Upload anytime before deadline</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-1">
        <p className="footer-logo-1">Studio on Brunswick</p>
        <p className="footer-address-1">
          Gallery: California Lane, 2/22 McLachlan Street<br/>
          Fortitude Valley, Brisbane QLD 4006<br/>
          adminsb@studioonbrunswick.com
        </p>
      </footer>
    </div>
  );
}

export default ReadyToBeSeen;
