'use client';

import { useEffect, useState } from 'react';

export default function CountdownTimer({ releaseDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!releaseDate) return;

    const targetDate = new Date(`${releaseDate.slice(0, 10)}T19:00:00`);

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timerInterval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, [releaseDate]);

  return (
    <div className="countdown-container hero-stagger" style={{ animationDelay: '0.55s' }}>
      <h3 className="countdown-header">Opening Night Premiere Countdown</h3>
      <div className="countdown-timer">
        <div className="timer-block">
          <span className="timer-number" key={`d-${timeLeft.days}`}>{timeLeft.days}</span>
          <span className="timer-label">Days</span>
        </div>
        <div className="timer-divider">:</div>
        <div className="timer-block">
          <span className="timer-number" key={`h-${timeLeft.hours}`}>{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="timer-label">Hrs</span>
        </div>
        <div className="timer-divider">:</div>
        <div className="timer-block">
          <span className="timer-number" key={`m-${timeLeft.minutes}`}>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="timer-label">Mins</span>
        </div>
        <div className="timer-divider">:</div>
        <div className="timer-block">
          <span className="timer-number" key={`s-${timeLeft.seconds}`}>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="timer-label">Secs</span>
        </div>
      </div>

      <style jsx>{`
        .countdown-container {
          margin-bottom: 3rem;
          max-width: 480px;
          background: rgba(13, 13, 18, 0.55);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 6px;
          padding: 1.5rem;
        }

        .countdown-header {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--color-gold);
          margin-bottom: 1rem;
          text-align: center;
        }

        .countdown-timer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .timer-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .timer-number {
          font-family: var(--font-headings);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          display: inline-block;
          animation: digitFlip 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes digitFlip {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .timer-label {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .timer-divider {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-gold);
          opacity: 0.5;
          padding-bottom: 1.2rem;
        }

        @media (prefers-reduced-motion: reduce) {
          .timer-number {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
