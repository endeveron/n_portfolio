import Image from 'next/image';

export default function Gear() {
  return (
    <div className="relative w-6 h-6 animate-spin">
      <Image
        className="absolute z-10 dark:hidden"
        src="/images/scheme/gear.svg"
        alt="gear"
        width={24}
        height={24}
        priority
      />
      <Image
        className="absolute"
        src="/images/scheme/gear-dark.svg"
        alt="gear"
        width={24}
        height={24}
        priority
      />
    </div>
  );
}
