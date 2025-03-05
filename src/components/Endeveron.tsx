import DelayedComponent from '@/components/DelayedComponent';
import Image from 'next/image';

export default function Endeveron() {
  return (
    <DelayedComponent delay={0}>
      <div className="relative w-[180px] h-[52px]">
        <Image
          className="absolute z-10 dark:hidden"
          src="/images/brand/endeveron-logo.svg"
          alt="Endeveron logo"
          width={178}
          height={51}
          priority
        />
        <Image
          className="absolute"
          src="/images/brand/endeveron-logo-dark.svg"
          alt="Endeveron logo"
          width={178}
          height={51}
          priority
        />
      </div>
    </DelayedComponent>
  );
}
