import DelayedComponent from '@/components/DelayedComponent';
import SkillCategory from '@/components/skills/SkillCategory';
import { TSkillCategory } from '@/types';
import skills from '../../../data/skills';

export default function Skills() {
  return (
    <div className="flex flex-1 flex-col md:justify-center lg:max-w-[720px]">
      <div className="relative h-16">
        <div className="absolute text-muted font-bold tracking-wide uppercase select-none top-8 left-8 lg:top-4 lg:left-10 xl:left-12 -z-10 text-7xl lg:text-8xl opacity-50 dark:opacity-75">
          <DelayedComponent delay={3200}>Skills</DelayedComponent>
        </div>
      </div>
      <DelayedComponent delay={3000}>
        <div className="flex px-4 py-16 md:py-8 lg:p-16 xl:px-24 gap-4 flex-1 flex-col justify-center bg-card">
          {skills.map((data: TSkillCategory, index: number) => (
            <DelayedComponent
              delay={3400 + index * 100}
              key={data.title + data.color}
            >
              <SkillCategory {...data} />
            </DelayedComponent>
          ))}
        </div>
      </DelayedComponent>
    </div>
  );
}
