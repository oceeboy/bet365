'use client';

import { useEffect, useState } from 'react';

export default function ServerTime() {
  const [time, setTime] = useState('');

  // todol-later: add zustand state management to help get the switch of timezone possible

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formattedTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'America/New_York',

        hour: '2-digit',

        minute: '2-digit',

        second: '2-digit',

        hour12: false,
      }).format(now);

      const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',

        timeZoneName: 'shortOffset',
      }).formatToParts(now);

      const offset = parts.find((part) => part.type === 'timeZoneName')?.value ?? 'GMT';

      setTime(`${formattedTime} ${offset}`);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>Server Time {time}</span>;
}
