import SkillCategory, {
  TSkillCategory,
} from '@/components/skills/SkillCategory';
import skills from '../../../data/skills';
import DelayedComponent from '@/components/DelayedComponent';

export default function Skills() {
  return (
    <div className="flex flex-1 flex-col md:justify-center lg:max-w-[720px]">
      <div className="relative h-16">
        <div className="absolute top-8 left-8 lg:top-4 lg:left-10 xl:left-12 -z-10 text-muted text-7xl lg:text-8xl font-bold tracking-wide uppercase select-none opacity-40 dark:opacity-75">
          <DelayedComponent delay={3600}>Skills</DelayedComponent>
        </div>
      </div>
      <DelayedComponent delay={3200}>
        <div className="flex px-4 py-16 md:py-8 lg:p-16 xl:px-24 gap-4 flex-1 flex-col justify-center bg-[#edf0f5d9] dark:bg-[#171a21ef]">
          <DelayedComponent delay={3800}>
            {skills.map((data: TSkillCategory) => (
              <SkillCategory {...data} key={data.title + data.color} />
            ))}
          </DelayedComponent>
        </div>
      </DelayedComponent>
    </div>
  );
}
