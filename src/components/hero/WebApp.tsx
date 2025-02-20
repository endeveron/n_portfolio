'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Gear from '@/components/hero/Gear';

export default function WebApp({ delay }: { delay?: number }) {
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
    <div className="relative w-[80px] h-[80px] flex flex-col pt-9 pl-[11px]">
      <div
        className="absolute z-10 transition-opacity"
        style={{ opacity: gearOpacity }}
      >
        <Gear />
      </div>

      <Image
        className="absolute -z-10 inset-0 dark:invert"
        src="/images/scheme/web-app.svg"
        alt="web app"
        width={80}
        height={80}
        priority
      />
    </div>
  );
}
