import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-content">
          <h1>Studio on Brunswick</h1>
          <p className="home-subtitle">Independent Visions Art Prize Landing Pages</p>

          <div className="landing-pages-grid">
            <Link to="/ready-to-be-seen" className="landing-card">
              <h2>Ready to Be Seen</h2>
              <p>Your work deserves a wall, not a drawer.</p>
              <span className="card-cta">View Page →</span>
            </Link>

            <Link to="/more-than-a-prize" className="landing-card">
              <h2>More Than a Prize</h2>
              <p>Most art prizes give you a cheque. This one builds your career.</p>
              <span className="card-cta">View Page →</span>
            </Link>

            <Link to="/find-your-direction" className="landing-card">
              <h2>Find Your Direction</h2>
              <p>Talented but scattered? This prize is for you.</p>
              <span className="card-cta">View Page →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
