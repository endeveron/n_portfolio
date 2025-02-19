import DatabaseSet from '@/components/hero/DatabaseSet';
import MobAppSet from '@/components/hero/MobAppSet';
import Server from '@/components/hero/Server';
import SignalGroup from '@/components/hero/SignalGroup';
import WebAppSet from '@/components/hero/WebAppSet';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="min-h-screen py-4 flex flex-1 flex-col items-center justify-center gap-10 min-w-[400px]">
      {/* Avatar */}
      <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden">
        <Image
          src="/images/avatar-360.jpg"
          alt="Endeveron logo"
          fill // This makes it responsive within its parent
          sizes="180px"
          priority
        />
      </div>

      {/* Title */}
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-extrabold text-2xl">a full stack engineer</h1>
        <p className="font-medium text-muted text-sm tracking-wide">
          over 10 years of experience
        </p>
      </div>

      {/* Message */}
      <div className="flex flex-col items-center gap-4">
        <p className="font-bold text-md py-6 px-4 border-border border-t-[1px] border-b-[1px] tracking-wide">
          {/* From idea through research, design <br />
          and development to a reliable product */}
          Shaping ideas into robust products
        </p>
      </div>

      {/* Animation */}
      <div className="pt-12 pb-8">
        <div className="flex">
          <div className="relative">
            <div className="absolute text-muted left-1/2 -top-12 w-24 uppercase text-center text-xs font-semibold tracking-wide -translate-x-1/2">
              Mob Apps
            </div>
            <MobAppSet />
          </div>
          <div className="pt-9 px-1">
            <SignalGroup length={8} />
          </div>
          <div className="relative flex flex-col">
            <div className="absolute text-muted left-1/2 -top-12 w-24 uppercase text-center text-xs font-semibold tracking-wide -translate-x-1/2">
              Servers
            </div>
            <Server delay={300} />
            <Server delay={100} />
            <Server />
          </div>
          <div className="pt-9 px-1">
            <SignalGroup length={8} />
          </div>
          <div className="relative">
            <div className="absolute text-muted left-1/2 -top-12 w-24 uppercase text-center text-xs font-semibold tracking-wide -translate-x-1/2">
              Web Apps
            </div>
            <WebAppSet />
          </div>
        </div>
        <div className="relative flex justify-center -translate-x-2 mt-4">
          <div className="absolute flex items-center justify-center w-10 h-6 left-1/2 -top-14 -translate-x-1/2 rotate-90">
            <SignalGroup length={8} />
          </div>
          <div className="absolute text-muted left-1/2 -bottom-8 w-24 uppercase text-center text-xs font-semibold tracking-wide -translate-x-1/2">
            Databases
          </div>
          <DatabaseSet />
        </div>
      </div>
    </div>
  );
}
