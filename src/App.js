import { useEffect, useMemo, useState } from 'react';
import './App.css';

function getTimeLeft(targetDate) {
  const difference = targetDate - new Date();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function App() {
  const launchDate = useMemo(() => new Date('2025-01-15T00:00:00'), []);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(launchDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <main className="coming-soon">
      <div className="gradient-orbit orbit-one" aria-hidden="true"></div>
      <div className="gradient-orbit orbit-two" aria-hidden="true"></div>
      <div className="noise-overlay" aria-hidden="true"></div>

      <section className="card">
        <img src="/D.png" alt="B&D Premium Travel" className="logo" />
        <p className="eyebrow">B&D Premium Travel</p>
        <h1>Something classy is almost here</h1>
        <p className="subhead">
          We&apos;re crafting bespoke travel experiences. Leave your routine
          behind and be the first to know when we unveil the full journey.
        </p>

        {/* <div className="countdown" role="status" aria-live="polite">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item) => (
            <div className="countdown-cell" key={item.label}>
              <span className="value">{String(item.value).padStart(2, '0')}</span>
              <span className="label">{item.label}</span>
            </div>
          ))}
        </div> */}

        <div className="actions">
          <a className="button primary" href='https://www.facebook.com/share/1BqMQFMGv9/' target='_blank' rel='noreferrer'>
            Visit Media
          </a>
          {/* <a className="button ghost" href="https://instagram.com" target="_blank" rel="noreferrer">
            Follow the journey
          </a> */}
        </div>
      </section>
    </main>
  );
}

export default App;
