'use client';

import Image from 'next/image';

import DelayedComponent from '@/components/DelayedComponent';
import AppScreens from '@/components/projects/AppScreens';
import { useProjects } from '@/hooks/useProjects';

export default function ProjectSlider({ cardTitle }: { cardTitle: string }) {
  const { project, isContentReady, isTouched, prevProject, nextProject } =
    useProjects();

  const cardTitleClassName = `absolute font-bold tracking-wide uppercase select-none -top-12 left-10 xl:left-12 text-8xl`;

  return (
    <section className="pt-10 max-2xl:overflow-hidden">
      {/* Card */}
      <div className="relative w-full bg-card">
        {/* Card stack effect */}
        <div className="max-2xl:hidden absolute inset-y-16 -inset-x-14 -z-20 bg-card opacity-30"></div>
        <div className="max-2xl:hidden absolute inset-y-8 -inset-x-8 -z-10 bg-card"></div>

        {/* Card title */}
        <div
          className={`${cardTitleClassName} text-muted -z-10 opacity-30 dark:opacity-75`}
        >
          {cardTitle}
        </div>
        <div className="absolute top-0 inset-y-0 z-30 h-10 w-full overflow-hidden">
          <div className={`${cardTitleClassName} text-white z-30 opacity-5`}>
            {cardTitle}
          </div>
        </div>

        <div className="flex min-h-[800px] max-w-full overflow-hidden">
          <div className="relative flex flex-1 items-stretch z-20">
            {/* Left side content */}
            <div className="flex flex-1 items-center justify-end overflow-hidden ">
              {/* App screens section */}
              <AppScreens
                projectId={project.id}
                blurImgData={project.blurImgData}
                isContentReady={isContentReady}
                glowColor={project.color}
              />
            </div>

            {/* Right side content */}
            <div className="flex flex-1 flex-col">
              <div className="flex-1 flex-col ">
                {/* App icon and title */}
                {isContentReady ? (
                  <DelayedComponent delay={600}>
                    <div className="mx-20 mt-20 xl:mt-28 flex gap-6 items-center">
                      <div className="w-24 h-24 rounded-2xl bg-white/90">
                        <Image
                          src={`images/projects/${project.id}-icon.svg`}
                          alt="App icon"
                          width={96}
                          height={96}
                          priority
                        />
                      </div>
                      <div className="text-5xl font-bold text-white">
                        {project.title}
                      </div>
                    </div>
                  </DelayedComponent>
                ) : null}

                {/* Description */}
                {isContentReady ? (
                  <DelayedComponent delay={700}>
                    <div className="mt-20 px-20 xl:pl-28 xl:leading-relaxed font-semibold text-white text-xl tracking-wide">
                      {project.description}
                    </div>
                  </DelayedComponent>
                ) : null}

                {/* Stack */}
                {isContentReady ? (
                  <DelayedComponent delay={800}>
                    <div className="flex flex-wrap shrink gap-1 mt-16 px-20 xl:pl-28 xl:gap-2">
                      {project.stack.map((data) => (
                        <div
                          className="pr-4 text-md text-black font-bold tracking-wide"
                          key={data}
                        >
                          {data}
                        </div>
                      ))}
                    </div>
                  </DelayedComponent>
                ) : null}
              </div>

              {/* Navigation */}
              <div className="ml-20 flex justify-end gap-8 w-60 mb-20 select-none">
                {isTouched ? (
                  <div
                    className="px-8 py-3 cursor-pointer text-sm text-white border-[1px] border-white/50 hover:bg-white/10 transition-colors"
                    onClick={prevProject}
                  >
                    PREV
                  </div>
                ) : null}
                <div
                  className="px-8 py-3 cursor-pointer text-sm text-white border-[1px] border-white/50 hover:bg-white/10 transition-colors"
                  onClick={nextProject}
                >
                  NEXT
                </div>
              </div>
            </div>
          </div>

          {/* Background */}
          <Image
            className={`hidden lg:block absolute inset-0 z-10 transition-opacity duration-700 ease-in-out ${
              isContentReady ? 'opacity-100' : 'opacity-0'
            }`}
            src={`images/projects/${project.id}-bg.jpg`}
            alt="App background"
            fill
            objectFit="cover"
            priority
            quality={100}
            unoptimized
            placeholder="blur"
            blurDataURL={project.blurImgData.bg}
          />

          {/* Background color */}
          <div
            className="absolute inset-0 transition-colors duration-1000"
            style={{ backgroundColor: project.color }}
          ></div>
        </div>
      </div>
    </section>
  );
}
