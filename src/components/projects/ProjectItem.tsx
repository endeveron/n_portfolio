import Image from 'next/image';

import AppScreens from '@/components/projects/AppScreens';
import { TProject } from '@/types';

export default function ProjectItem(project: TProject) {
  return (
    <div className="relative py-28" style={{ backgroundColor: project.color }}>
      <div className="relative z-10 flex flex-col items-center gap-16">
        <AppScreens
          projectId={project.id}
          blurImgData={project.blurImgData}
          isContentReady={true}
          glowColor={project.color}
        />

        {/* App icon and title */}
        <div className="flex gap-6 items-center">
          <div className="w-24 h-24 rounded-2xl bg-white/90">
            <Image
              src={`images/projects/${project.id}-icon.svg`}
              alt="App icon"
              width={96}
              height={96}
              priority
            />
          </div>
          <div className="text-4xl sm:text-5xl font-bold text-white">
            {project.title}
          </div>
        </div>

        {/* Description */}
        <div className="px-8 sm:px-16 md:px-24 text-white text-xl font-semibold tracking-wide leading-relaxed">
          {project.description}
        </div>

        {/* Stack */}
        <div className="px-8 sm:px-16 md:px-24 flex flex-wrap gap-1">
          {project.stack.map((data) => (
            <div
              className="pr-4 text-md text-black font-bold tracking-wide"
              key={data}
            >
              {data}
            </div>
          ))}
        </div>
      </div>

      {/* Background image */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="/images/projects/project-bg.svg"
          alt="server"
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
}
