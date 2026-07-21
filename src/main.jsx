import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', minHeight: '100vh', padding: '24px',
          fontFamily: 'Inter, -apple-system, sans-serif', textAlign: 'center',
          background: '#F5F5F7', color: '#1D1D1F',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📚</div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>
            Oops! Something went wrong
          </h1>
          <p style={{ color: '#6E6E73', marginBottom: '24px', maxWidth: '400px' }}>
            Don't worry, just refresh the page and your stories will be back!
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 28px', fontSize: '1rem', fontWeight: 600,
              background: '#FF6B35', color: '#fff', border: 'none',
              borderRadius: '12px', cursor: 'pointer',
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
