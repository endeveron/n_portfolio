import Image from 'next/image';

export default function Server({ delay = 0 }: { delay?: number }) {
  return (
    <div className="relative w-14 h-4 flex justify-end">
      <div className="absolute z-10 w-1 h-1 top-1 right-1 rounded-full bg-emerald-500"></div>
      <div
        className="absolute z-10 w-1 h-1 top-1 right-3 rounded-full bg-sky-400 dark:bg-sky-500 animate-ping"
        style={{ animationDelay: `${delay}ms` }}
      ></div>

      <Image
        className="absolute inset-0 dark:invert"
        src="/images/scheme/server.svg"
        alt="server"
        width={56}
        height={14}
        priority
      />
    </div>
  );
}
