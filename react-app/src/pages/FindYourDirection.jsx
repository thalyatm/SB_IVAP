import { useEffect, useState } from 'react';
import './FindYourDirection.css';

function FindYourDirection() {
  const [daysLeft, setDaysLeft] = useState(10);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Calculate days until deadline
  useEffect(() => {
    const deadline = new Date(2026, 0, 9, 23, 59, 59); // Jan 9, 2026
    const now = new Date();
    const diff = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
    setDaysLeft(diff > 0 ? diff : 0);
  }, []);

  // Set page-specific meta tags
  useEffect(() => {
    document.title = 'Independent Visions Art Prize 2026 | Enter by Jan 9 | Studio on Brunswick';

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'Enter the Independent Visions Art Prize. $11,300+ in prizes including gallery exhibition, 1:1 mentoring, and artist community membership. Open to Australian artists. $50 entry, up to 6 artworks. Deadline January 9, 2026.';

    // OG tags
    const ogTags = [
      { property: 'og:title', content: 'Independent Visions Art Prize 2026 | Studio on Brunswick' },
      { property: 'og:description', content: 'A career-building opportunity for emerging artists. Exhibition, mentoring, community. $11,300+ in prizes.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://studioonbrunswick.com.au/independent-visions-art-prize' },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    return () => {
      document.title = 'Studio on Brunswick | Independent Visions Art Prize';
    };
  }, []);

  const entryUrl = 'https://buy.stripe.com/14AdRb4Hn2FCbn26Jm3wQ00';

  return (
    <article className="story-page">
      {/* Skip to main content link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Sub Navigation */}
      <nav className="story-nav" aria-label="Page sections">
        <div className="story-nav-container">
          <div className="story-nav-links">
            <a href="#benefits" className="story-nav-link">Prizes</a>
            <a href="#who" className="story-nav-link">Is This For You?</a>
            <a href="#how" className="story-nav-link">How It Works</a>
            <a href="#faq" className="story-nav-link">FAQ</a>
          </div>
          <a href={entryUrl} className="story-nav-cta">Enter Now</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="story-hero" role="banner">
        <div className="story-hero-overlay" aria-hidden="true"></div>
        <div className="story-hero-inner">
          <div className="story-hero-image">
            <img
              src="/images/Winner.jpg"
              alt="Artist holding their certificate at the Independent Visions Art Prize awards ceremony"
              loading="eager"
              width="600"
              height="400"
            />
          </div>
          <div className="story-hero-content" id="main-content">
          {/* Countdown urgency */}
          <div className="urgency-countdown" role="status">
            <span className="countdown-number">{daysLeft}</span>
            <span className="countdown-label">days to enter</span>
          </div>

          <h1>Stop waiting for permission to be an artist.</h1>

          <p className="story-hero-tagline">
            The Independent Visions Art Prize judges your work — not your CV, not your connections.
            Enter for a chance to win a solo exhibition, private mentoring, and a community that
            backs emerging artists.
          </p>


          <a
            href={entryUrl}
            className="story-cta-primary"
            aria-label="Enter the Independent Visions Art Prize competition"
          >
            Enter Now — $50
          </a>

          <p className="hero-reassurance">
            No exhibition history required · No degree needed · Just your art
          </p>
          </div>
        </div>
      </header>

      {/* Artist's Manifesto */}
      <section className="story-manifesto" aria-labelledby="manifesto-heading">
        <h2 id="manifesto-heading" className="visually-hidden">Our manifesto</h2>
        <div className="manifesto-content">
          <p className="manifesto-opener">We know the feeling.</p>
          <p className="manifesto-body">
            You spend months on a piece, only for it to end up in a drawer or a digital folder.
            Traditional galleries feel like private clubs. The big prizes go to artists with the
            right connections, the right degree, the right postcode.
          </p>
          <p className="manifesto-bold">
            We built the Independent Visions Art Prize to kick the door open.
          </p>
          <p className="manifesto-close">
            Whether you're self-taught or seasoned, working from a bedroom or a studio,
            your work deserves professional eyes. Not someday. Now.
          </p>
        </div>
      </section>

      {/* What Winners Get */}
      <section className="story-benefits" id="benefits" aria-labelledby="benefits-heading">
        <div className="story-benefits-container">
          <h2 id="benefits-heading" className="story-section-heading">8 Ways to Win</h2>
          <p className="story-benefits-intro">Each prize is designed to build real career momentum — not just a cheque and a handshake.</p>

          <div className="story-benefits-grid" role="list">
            <article className="story-benefit" role="listitem">
              <span className="story-benefit-label">First Prize</span>
              <span className="story-benefit-value">valued at $3,449</span>
              <h3>Solo Exhibition + Mentoring</h3>
              <ul className="benefit-list">
                <li>1-week solo exhibition at Studio on Brunswick Pop Up Gallery</li>
                <li>6 coaching sessions</li>
                <li>12-month Inner Circle</li>
                <li>Exhibition Readiness Pack</li>
                <li>6-month group mentoring</li>
              </ul>
            </article>

            <article className="story-benefit" role="listitem">
              <span className="story-benefit-label">SB Artist Accelerator</span>
              <span className="story-benefit-value">valued at $2,250</span>
              <h3>Intensive Development</h3>
              <ul className="benefit-list">
                <li>6 coaching sessions</li>
                <li>Professional social media audit</li>
                <li>6-month group mentoring program</li>
              </ul>
            </article>

            <article className="story-benefit" role="listitem">
              <span className="story-benefit-label">Second Prize</span>
              <span className="story-benefit-value">valued at $2,100</span>
              <h3>Group Show + Coaching</h3>
              <ul className="benefit-list">
                <li>Place in 2026 group show</li>
                <li>4 coaching sessions</li>
                <li>6-month Inner Circle</li>
                <li>6-month group mentoring</li>
              </ul>
            </article>

            <article className="story-benefit" role="listitem">
              <span className="story-benefit-label">+ 5 More Awards</span>
              <span className="story-benefit-value">valued at $4,075+</span>
              <h3>Emerging Artist, Winner's Choice, People's Choice & Affiliate Awards</h3>
              <ul className="benefit-list">
                <li>Coaching packages</li>
                <li>Inner Circle membership</li>
                <li>Art Shed vouchers</li>
              </ul>
            </article>
          </div>

          <p className="benefits-note">
            Total prize pool valued at $11,449+
          </p>
        </div>
      </section>

      {/* Anti-Gatekeeping Section */}
      <section className="story-no-cv" aria-labelledby="nocv-heading">
        <div className="no-cv-content">
          <h2 id="nocv-heading" className="no-cv-heading">No CV? No Problem.</h2>
          <p className="no-cv-body">
            Most prizes ask for your exhibition history first. Your degree. Your artist statement.
            Your "body of work." We ask for one thing: <strong>your art</strong>.
          </p>
          <p className="no-cv-tagline">
            This is a level playing field for independent creatives.
          </p>
          <div className="no-cv-points">
            <span className="no-cv-point">No gallery representation needed</span>
            <span className="no-cv-point">No formal training required</span>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="story-who" id="who" aria-labelledby="who-heading">
        <div className="story-who-container">
          <h2 id="who-heading" className="story-section-heading centered">Sound Like You?</h2>
          <p className="who-intro">This prize is designed for a specific kind of artist. See if you recognise yourself.</p>

          <div className="story-who-grid">
            <div className="story-who-column for-you">
              <h3>This is for you if...</h3>
              <ul>
                <li>You've got serious work but haven't had a serious break yet</li>
                <li>You're tired of prizes that only go to "established" artists</li>
                <li>You want more than a cash prize — you want momentum</li>
                <li>You're ready to be seen, even if it feels uncomfortable</li>
                <li>You know your work is good enough — you just need the opportunity</li>
              </ul>
            </div>

            <div className="story-who-column eligibility">
              <h3>Eligibility checklist</h3>
              <ul>
                <li><span className="check-icon">✓</span> Based anywhere in Australia</li>
                <li><span className="check-icon">✓</span> Emerging or independent (no gallery rep required)</li>
                <li><span className="check-icon">✓</span> All mediums welcome</li>
                <li><span className="check-icon">✓</span> 2D works: 50×50cm or equivalent / 3D works: max 100cm (larger works considered on request)</li>
                <li><span className="check-icon">✓</span> All works must be ready for safe gallery display if selected</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="story-steps" id="how" aria-labelledby="steps-heading">
        <div className="story-steps-container">
          <h2 id="steps-heading" className="story-section-heading light">3 Minutes to Secure Your Spot</h2>
          <p className="steps-intro">Simple entry. Fair judging. Quick results.</p>

          <ol className="story-steps-list">
            <li className="story-step">
              <span className="story-step-number" aria-hidden="true">1</span>
              <h3>Click. Pay. Done.</h3>
              <p>$50 gets you in. Secure checkout. Instant confirmation.</p>
            </li>
            <li className="story-step">
              <span className="story-step-number" aria-hidden="true">2</span>
              <h3>Upload when you're ready</h3>
              <p>We email your private link immediately. Submit up to 6 pieces anytime before Jan 9.</p>
            </li>
            <li className="story-step">
              <span className="story-step-number" aria-hidden="true">3</span>
              <h3>Get your answer fast</h3>
              <p>Selected artists notified the Friday after deadline. No months of silence.</p>
            </li>
          </ol>

          <div className="steps-cta">
            <a href={entryUrl} className="story-cta-primary">
              Enter Now
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="story-final-cta" aria-labelledby="cta-heading">
        <div className="story-final-content">
          <h2 id="cta-heading">Don't let another year pass by.</h2>

          <p className="final-loss-aversion">
            You know the feeling. Another opportunity comes and goes. Another year of "maybe next time."
            Your art stays in that studio corner, waiting for a chance that never arrives.
          </p>

          <p className="final-question">
            What if you just... entered?
          </p>

          <div className="final-countdown">
            <span className="final-days">{daysLeft}</span>
            <span className="final-days-label">days left</span>
          </div>

          <a
            href={entryUrl}
            className="story-cta-primary large"
            aria-label="Enter the Independent Visions Art Prize competition"
          >
            Enter Now — $50
          </a>

          <p className="final-price">
            $50 entry · Up to 6 artworks
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="story-faq" id="faq" aria-labelledby="faq-heading">
        <div className="story-faq-container">
          <h2 id="faq-heading" className="story-section-heading">Frequently Asked Questions</h2>

          <div className="story-faq-grid">
            <div className={`story-faq-item ${openFaq === 0 ? 'open' : ''}`} onClick={() => toggleFaq(0)}>
              <h3>Can I enter from interstate? <span className="faq-icon"></span></h3>
              <p>Yes! The prize is open to Australian artists nationwide. You'll need to arrange shipping for your work if selected for exhibition.</p>
            </div>

            <div className={`story-faq-item ${openFaq === 1 ? 'open' : ''}`} onClick={() => toggleFaq(1)}>
              <h3>Can I enter multiple times? <span className="faq-icon"></span></h3>
              <p>Yes. Each $50 entry allows you to submit up to 6 artworks. You may purchase multiple entries if you have more work to submit.</p>
            </div>

            <div className={`story-faq-item ${openFaq === 2 ? 'open' : ''}`} onClick={() => toggleFaq(2)}>
              <h3>What if I'm not ready to upload yet? <span className="faq-icon"></span></h3>
              <p>No problem. Once you purchase your entry, you'll have until January 9 to upload your work via your private submission link.</p>
            </div>

            <div className={`story-faq-item ${openFaq === 3 ? 'open' : ''}`} onClick={() => toggleFaq(3)}>
              <h3>When will I know if I'm selected? <span className="faq-icon"></span></h3>
              <p>Successful applicants will be notified the Friday following the January 9 deadline.</p>
            </div>

            <div className={`story-faq-item ${openFaq === 4 ? 'open' : ''}`} onClick={() => toggleFaq(4)}>
              <h3>What mediums are accepted? <span className="faq-icon"></span></h3>
              <p>All mediums are welcome. Larger works may be considered upon request.</p>
            </div>

            <div className={`story-faq-item ${openFaq === 5 ? 'open' : ''}`} onClick={() => toggleFaq(5)}>
              <h3>Does my work need to be framed? <span className="faq-icon"></span></h3>
              <p>All works must be ready for safe gallery display if selected. This typically means framed or professionally mounted, depending on the medium.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="story-footer" role="contentinfo">
        <div className="story-footer-content">
          <p className="story-footer-logo">Studio on Brunswick</p>
          <address className="story-footer-address">
            California Lane, 2/22 McLachlan Street<br />
            Fortitude Valley, Brisbane QLD 4006
          </address>
          <p className="story-footer-contact">
            <a href="mailto:adminsb@studioonbrunswick.com" className="story-footer-email">
              adminsb@studioonbrunswick.com
            </a>
          </p>
          <a
            href="https://studioonbrunswick.com.au"
            className="story-link"
            aria-label="Go to Studio on Brunswick main website"
          >
            Back to main site
          </a>
        </div>
      </footer>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "Independent Visions Art Prize 2025",
          "description": "A career-building art prize for emerging Australian artists offering exhibition, mentoring, and community membership.",
          "startDate": "2025-02-04",
          "endDate": "2025-02-22",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Studio on Brunswick",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "California Lane, 2/22 McLachlan Street",
              "addressLocality": "Fortitude Valley",
              "addressRegion": "QLD",
              "postalCode": "4006",
              "addressCountry": "AU"
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "Studio on Brunswick",
            "url": "https://studioonbrunswick.com.au"
          },
          "offers": {
            "@type": "Offer",
            "price": "50",
            "priceCurrency": "AUD",
            "url": entryUrl,
            "validFrom": "2024-12-01",
            "availability": "https://schema.org/InStock"
          }
        })
      }} />
    </article>
  );
}

export default FindYourDirection;
