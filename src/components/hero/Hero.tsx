import DelayedComponent from '@/components/DelayedComponent';
import DatabaseSet from '@/components/hero/DatabaseSet';
import MobAppSet from '@/components/hero/MobAppSet';
import Server from '@/components/hero/Server';
import SignalGroup from '@/components/hero/SignalGroup';
import WebAppSet from '@/components/hero/WebAppSet';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="min-h-screen min-w-96 md:max-w-[600px] flex flex-1 py-4 flex-col items-center justify-center gap-10 animate-fade-in">
      {/* Avatar */}
      <DelayedComponent delay={0}>
        <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden">
          <Image
            src="/images/avatar-300.jpg"
            alt="Endeveron logo"
            fill // This makes it responsive within its parent
            sizes="150px"
            priority
          />
        </div>
      </DelayedComponent>

      {/* Title */}
      <DelayedComponent delay={200}>
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-extrabold text-2xl">a full stack engineer</h1>
          <p className="font-medium text-muted text-sm tracking-wide">
            over 10 years of experience
          </p>
        </div>
      </DelayedComponent>

      {/* Message */}
      <DelayedComponent delay={400}>
        <div className="flex flex-col items-center gap-4">
          <p className="font-bold text-md py-6 px-4 border-border border-t-[1px] border-b-[1px] tracking-wide">
            {/* From idea through research, design <br />
          and development to a reliable product */}
            Shaping ideas into robust products
          </p>
        </div>
      </DelayedComponent>

      {/* Animation */}

      <div className="pt-12 pb-8">
        <div className="flex">
          {/* Mob apps */}
          <DelayedComponent delay={1600}>
            <div className="relative">
              <div className="absolute text-muted left-1/2 -top-12 w-24 uppercase text-center text-xs font-semibold tracking-wide -translate-x-1/2">
                Mob Apps
              </div>
              <MobAppSet delay={2000} />
            </div>
          </DelayedComponent>

          {/* Signal to mob apps */}
          <div className="pt-7 px-1 w-10 -rotate-[30deg] translate-x-2">
            <SignalGroup length={8} delay={1800} />
          </div>

          {/* Servers 600 */}
          <DelayedComponent delay={600}>
            <div className="relative flex flex-col">
              <div className="absolute text-muted left-1/2 -top-12 w-24 uppercase text-center text-xs font-semibold tracking-wide -translate-x-1/2">
                Servers
              </div>
              <Server delay={300} />
              <Server delay={100} />
              <Server />
            </div>
          </DelayedComponent>

          {/* Signal to web apps */}
          <div className="pt-7 px-1 w-10 rotate-[30deg] -translate-x-2">
            <SignalGroup length={8} delay={2500} />
          </div>

          {/* Web apps */}
          <DelayedComponent delay={2200}>
            <div className="relative">
              <div className="absolute text-muted left-1/2 -top-12 w-24 uppercase text-center text-xs font-semibold tracking-wide -translate-x-1/2">
                Web Apps
              </div>
              <WebAppSet delay={2800} />
            </div>
          </DelayedComponent>
        </div>

        <div className="relative flex justify-center -translate-x-2 mt-4">
          {/* Signal to db */}
          <div className="absolute flex items-center justify-center left-1/2 -top-10 -translate-x-12 rotate-[110deg]">
            <SignalGroup length={11} delay={1000} />
          </div>
          <div className="absolute flex items-center justify-center left-1/2 -top-11 -translate-x-1/2 rotate-90">
            <SignalGroup length={8} delay={1200} />
          </div>
          <div className="absolute flex items-center justify-center left-1/2 -top-10 rotate-[70deg]">
            <SignalGroup length={11} delay={1400} />
          </div>

          {/* Databases */}
          <DelayedComponent delay={1000}>
            <div className="absolute text-muted left-1/2 -bottom-8 w-24 uppercase text-center text-xs font-semibold tracking-wide -translate-x-1/2">
              Databases
            </div>
          </DelayedComponent>
          <DelayedComponent delay={800}>
            <DatabaseSet />
          </DelayedComponent>
        </div>
      </div>
    </div>
  );
}
