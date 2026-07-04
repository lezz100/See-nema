'use client';

export default function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>{message}</p>

      <style jsx>{`
        .loading-container {
          text-align: center;
          padding: 4rem 0;
          color: var(--text-secondary);
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(212, 175, 55, 0.1);
          border-top: 3px solid var(--color-gold);
          border-radius: 50%;
          margin: 0 auto 1.5rem auto;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
