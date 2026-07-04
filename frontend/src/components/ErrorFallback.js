'use client';

export default function ErrorFallback({ message, tip }) {
  return (
    <div className="error-fallback glass-card">
      <p className="error-text">⚠️ {message}</p>
      {tip && <p className="error-tip">{tip}</p>}

      <style jsx>{`
        .error-fallback {
          text-align: center;
          padding: 3rem;
          max-width: 600px;
          margin: 0 auto;
          border: 1px solid rgba(255, 0, 0, 0.2);
        }

        .error-text {
          color: #f87171;
          font-weight: 500;
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .error-tip {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}
