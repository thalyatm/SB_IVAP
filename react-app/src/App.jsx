import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ReadyToBeSeen from './pages/ReadyToBeSeen';
import MoreThanAPrize from './pages/MoreThanAPrize';
import FindYourDirection from './pages/FindYourDirection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ready-to-be-seen" element={<ReadyToBeSeen />} />
            <Route path="/more-than-a-prize" element={<MoreThanAPrize />} />
            <Route path="/IVAP" element={<FindYourDirection />} />
            {/* Placeholder routes for navigation items */}
            <Route path="/inner-circle" element={<Home />} />
            <Route path="/whats-on" element={<Home />} />
            <Route path="/team" element={<Home />} />
            <Route path="/services" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/faq" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/login" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
