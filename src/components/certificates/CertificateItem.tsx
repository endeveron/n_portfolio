import { TCertificate } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const CertificateItem = async ({ year, title, details, url }: TCertificate) => {
  return (
    <Link href={url} target="_blank" className="lg:w-1/2 p-1">
      <div className="certificate">
        <div className="certificate__content">
          <div className="text-muted w-8">{year}</div>
          <div className="font-medium">{title}</div>
          <div className="text-muted">{details}</div>
        </div>

        <Image
          className="certificate__arrow"
          src="/images/arrow-top-right.svg"
          alt="arrow top right"
          width={24}
          height={24}
        />

        <div className="certificate__bg"></div>
      </div>
    </Link>
  );
};

export default CertificateItem;
