import { TProject } from '@/types';
import projects from '../../../data/projects';
import ProjectItem from '@/components/projects/ProjectItem';

export default function ProjectList({ cardTitle }: { cardTitle: string }) {
  return (
    <section className="lg:hidden pt-10 overflow-hidden">
      {/* Card */}
      <div className="relative w-full bg-card">
        {/* Card title */}
        <div className="absolute max-[460px]:text-6xl text-muted font-bold tracking-wide uppercase select-none -top-8 left-8 -z-10 text-7xl opacity-40 dark:opacity-75">
          {cardTitle}
        </div>

        <div className="flex flex-col gap-1 pt-24 pb-20">
          {projects.map((data: TProject) => (
            <ProjectItem {...data} key={data.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
