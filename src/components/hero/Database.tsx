'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Database({ delay }: { delay?: number }) {
  const [glowOpacity, setGlowOpacity] = useState(0);

  useEffect(() => {
    if (!delay) setGlowOpacity(1);

    const timerId = setTimeout(() => {
      setGlowOpacity(1);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [delay]);

  return (
    <div className="relative">
      <div
        className="absolute z-10 inset-0 rounded-lg bg-teal-300/10 dark:bg-teal-300/25 transition-opacity"
        style={{ opacity: glowOpacity }}
      ></div>
      <Image
        className="dark:invert"
        src="/images/scheme/database.svg"
        alt="server"
        width={27}
        height={37}
        priority
      />
    </div>
  );
}
