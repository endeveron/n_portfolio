'use client';

import DelayedComponent from '@/components/DelayedComponent';
import Image from 'next/image';

type TAppScreensProps = {
  projectId: string;
  imgSrcArr?: [];
  glowColor?: string;
  isContentReady?: boolean;
};

const AppScreens = ({
  projectId,
  glowColor,
  isContentReady,
}: TAppScreensProps) => {
  if (!isContentReady) return null;

  return (
    <div className="relative flex justify-center w-full max-w-[640px]">
      {/* Main screen */}
      <div className="relative z-20">
        <DelayedComponent delay={0}>
          <div className="w-[240px] h-[480px] rounded-[18px] sm:w-[340px] sm:h-[680px] sm:rounded-[24px] ml-8 xl:ml-12 overflow-hidden bg-slate-900">
            <Image
              src={`images/projects/${projectId}-main-screen.jpg`}
              alt="Prime screen"
              width={340}
              height={680}
              priority
              quality={100}
              unoptimized
            />
          </div>
        </DelayedComponent>
      </div>

      {/* Back screens */}
      <div className="absolute z-10 inset-0 flex items-center justify-evenly sm:justify-between sm:max-md:px-2">
        <DelayedComponent delay={200}>
          <div className="relative opacity-85 overflow-hidden w-[180px] h-[360px] rounded-[14px] sm:w-[256px] sm:h-[512px] sm:rounded-[20px] bg-slate-900">
            <div
              className="absolute inset-0 opacity-40 z-10"
              style={{
                background: `linear-gradient(to bottom, transparent, ${glowColor})`,
              }}
            ></div>
            <Image
              src={`images/projects/${projectId}-left-screen.jpg`}
              alt="Left screen"
              fill
              priority
              quality={100}
              unoptimized
            />
          </div>
        </DelayedComponent>

        <DelayedComponent delay={400}>
          <div className="relative opacity-70 overflow-hidden w-[152px] h-[300px] rounded-[10px] sm:w-[220px] sm:h-[440px] sm:rounded-[14px] bg-slate-900">
            <div
              className="absolute inset-0 opacity-40 z-10"
              style={{
                background: `linear-gradient(to bottom, transparent, ${glowColor})`,
              }}
            ></div>
            <Image
              src={`images/projects/${projectId}-right-screen.jpg`}
              alt="Right screen"
              fill
              priority
              quality={100}
              unoptimized
            />
          </div>
        </DelayedComponent>
      </div>
    </div>
  );
};

export default AppScreens;
