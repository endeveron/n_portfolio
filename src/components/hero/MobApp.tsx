import Gear from '@/components/hero/Gear';
import Image from 'next/image';

export default function MobApp() {
  return (
    <div className="relative w-[44px] h-[80px] flex flex-col pt-9 items-center">
      <div className="absolute z-10">
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
