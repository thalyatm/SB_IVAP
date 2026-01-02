import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ReadyToBeSeen from './pages/ReadyToBeSeen';
import './App.css';

// Lazy load ThankYou page - only loaded after successful checkout
const ThankYou = lazy(() => import('./pages/ThankYou'));

// Minimal loading fallback for route transitions
function PageLoader() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(145deg, #FAF8F5 0%, #F5F0E8 40%, #E8E0D5 100%)'
    }}>
      <div style={{
        width: '32px',
        height: '32px',
        border: '3px solid #E8E0D5',
        borderTopColor: '#AA9B05',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<ReadyToBeSeen />} />
              <Route path="/ready-to-be-seen" element={<ReadyToBeSeen />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
