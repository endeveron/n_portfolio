'use client';

import { useEffect, useState } from 'react';

import Signal from '@/components/hero/Signal';

export default function SignalGroup({
  length,
  delay,
}: {
  length: number;
  delay?: number;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!delay) setIsReady(true);

    const timerId = setTimeout(() => {
      setIsReady(true);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [delay]);

  return isReady ? (
    <div className="flex flex-col gap-1">
      <Signal length={length} />
      <Signal length={length} isReverse />
    </div>
  ) : null;
}
