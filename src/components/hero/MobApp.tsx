'use client';

import Gear from '@/components/hero/Gear';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function MobApp({ delay }: { delay?: number }) {
  const [gearOpacity, setGearOpacity] = useState(0);

  useEffect(() => {
    if (!delay) setGearOpacity(1);

    const timerId = setTimeout(() => {
      setGearOpacity(1);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [delay]);

  return (
    <div className="relative w-[44px] h-[80px] flex flex-col pt-9 items-center">
      <div
        className="absolute z-10 transition-opacity"
        style={{ opacity: gearOpacity }}
      >
        <Gear />
      </div>

      <Image
        className="absolute inset-0 dark:invert"
        src="/images/scheme/mobile-app.svg"
        alt="mobile app"
        width={44}
        height={80}
        priority
      />
    </div>
  );
}
