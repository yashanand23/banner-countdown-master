import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = ({ visible, description, timer, link }) => {
  const [countdown, setCountdown] = useState(timer);

  useEffect(() => {
    if (visible && countdown > 0) {
      const intervalId = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (countdown <= 0) {
      setCountdown(0);
    }
  }, [visible, countdown]);

  return visible && countdown > 0 ? (
    <div className="banner">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <p>{description}</p>
      </a>
      <div className="countdown">Banner disappears in: {countdown}s</div>
    </div>
  ) : null;
};

export default Banner;
