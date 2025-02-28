'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

export default function DelayedComponent({
  children,
  delay,
}: PropsWithChildren & { delay: number }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), Math.max(0, delay));
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={`transition-opacity duration-500 ${
        show ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}
