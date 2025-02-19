import Image from 'next/image';

export default function Endeveron() {
  return (
    <div className="relative w-[180px] h-[52px]">
      <Image
        className="absolute z-10 dark:hidden"
        src="/images/endeveron.svg"
        alt="Endeveron logo"
        width={178}
        height={51}
        priority
      />
      <Image
        className="absolute"
        src="/images/endeveron-dark.svg"
        alt="Endeveron logo"
        width={178}
        height={51}
        priority
      />
    </div>
  );
}
