import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: null,
      errorCount: 0
    };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(_error, errorInfo) {
    // Log error for debugging (error is logged via console.error)
    console.error('Error caught by boundary:', _error);
    console.error('Error info:', errorInfo);

    this.setState(prevState => ({
      error: _error,
      errorInfo,
      errorCount: prevState.errorCount + 1
    }));

    // You can also log the error to an error reporting service here
    // logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" style={{
          padding: '40px 20px',
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#f8f9fa'
        }}>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            maxWidth: '600px',
            width: '100%'
          }}>
            <h1 style={{ color: '#d32f2f', marginBottom: '20px' }}>
              ⚠️ Oops! Something went wrong
            </h1>
            <p style={{ color: '#666', marginBottom: '20px', fontSize: '16px' }}>
              We're sorry for the inconvenience. An unexpected error has occurred.
            </p>

            {import.meta.env.DEV && this.state.error && (
              <details style={{
                textAlign: 'left',
                marginBottom: '20px',
                padding: '15px',
                background: '#f5f5f5',
                borderRadius: '4px',
                border: '1px solid #ddd'
              }}>
                <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '10px' }}>
                  Error details (Development only)
                </summary>
                <pre style={{
                  overflow: 'auto',
                  fontSize: '12px',
                  color: '#d32f2f',
                  margin: '10px 0 0 0'
                }}>
                  {this.state.error.toString()}
                  {'\n\n'}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <button
              onClick={this.handleReset}
              style={{
                background: '#1976d2',
                color: 'white',
                border: 'none',
                padding: '10px 30px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
                marginRight: '10px'
              }}
              onMouseOver={(e) => e.target.style.background = '#1565c0'}
              onMouseOut={(e) => e.target.style.background = '#1976d2'}
            >
              Try Again
            </button>

            <button
              onClick={() => window.location.href = '/'}
              style={{
                background: '#757575',
                color: 'white',
                border: 'none',
                padding: '10px 30px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
              onMouseOver={(e) => e.target.style.background = '#616161'}
              onMouseOut={(e) => e.target.style.background = '#757575'}
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
