import MobApp from '@/components/hero/MobApp';
import WebApp from '@/components/hero/WebApp';

export default function WebAppSet({ delay }: { delay?: number }) {
  return (
    <div className="relative w-24 h-24">
      <div className="absolute z-10">
        <WebApp delay={delay} />
      </div>
      <div className="absolute right-0 top-2 z-20">
        <MobApp delay={delay} />
      </div>
    </div>
  );
}
