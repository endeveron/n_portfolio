import Image from 'next/image';

export default function Database() {
  return (
    <Image
      className="dark:invert"
      src="/images/scheme/database.svg"
      alt="server"
      width={27}
      height={37}
      priority
    />
  );
}
