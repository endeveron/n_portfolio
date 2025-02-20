import MobApp from '@/components/hero/MobApp';

export default function MobAppSet({ delay }: { delay?: number }) {
  return (
    <div className="relative w-20 h-24">
      <div className="absolute top-2 left-2 z-10">
        <MobApp delay={delay} />
      </div>
      <div className="absolute right-0 z-20">
        <MobApp delay={delay} />
      </div>
    </div>
  );
}
