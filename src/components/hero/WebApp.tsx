import Gear from '@/components/hero/Gear';
import Image from 'next/image';

export default function WebApp() {
  return (
    <div className="relative w-[80px] h-[80px] flex flex-col pt-9 pl-[11px]">
      <Gear />
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
