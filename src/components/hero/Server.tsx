import Image from 'next/image';

export default function Server({ delay = 0 }: { delay?: number }) {
  return (
    <div className="relative w-14 h-4">
      <div className="absolute z-10 top-1.5 right-2 flex gap-1 justify-end">
        <div
          className="w-0.5 h-0.5 rounded-full bg-sky-600 dark:bg-sky-300 animate-ping"
          style={{ animationDelay: `${delay}ms` }}
        ></div>
        <div
          className="w-0.5 h-0.5 rounded-full bg-sky-600 dark:bg-sky-300 animate-ping"
          style={{ animationDelay: `${delay}ms` }}
        ></div>
        <div className="w-0.5 h-0.5 rounded-full bg-emerald-500 dark:bg-emerald-300"></div>
      </div>

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
