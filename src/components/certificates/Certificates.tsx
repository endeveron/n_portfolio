import CertificateItem from '@/components/certificates/CertificateItem';
import { certificates } from '../../../data/certificates';

const Certificates = async () => {
  return (
    <section className="-mt-4 flex flex-col sm:m-auto sm:w-[540px] lg:w-auto">
      <div className="mb-4 pl-5 text-muted text-xs font-semibold tracking-wide uppercase lg:mt-2">
        Certificates
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap ">
        {certificates.map((data) => (
          <CertificateItem {...data} key={data.title} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
