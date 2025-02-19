import SkillCategory, {
  TSkillCategory,
} from '@/components/skills/SkillCategory';
import skills from '../../../data/skills';

export default function Skills() {
  return (
    <div className="flex px-4 py-16 lg:min-h-screen lg:p-16 gap-4 flex-1 flex-col justify-center bg-[#171a21]">
      {skills.map((data: TSkillCategory) => (
        <SkillCategory {...data} key={data.title + data.color} />
      ))}
    </div>
  );
}
