import Skill, { TSkill } from '@/components/skills/Skill';

export type TSkillCategory = {
  color: string;
  items: TSkill[];
  title?: string;
};

export default function SkillCategory({ title, color, items }: TSkillCategory) {
  return (
    <div className="flex flex-col gap-4 p-4">
      {title ? (
        <div className="text-muted text-xs font-semibold tracking-wide uppercase ">
          {title}
        </div>
      ) : null}
      <div className="flex gap-2 flex-wrap">
        {items.map((item: TSkill) => (
          <Skill
            title={item.title}
            value={item.value}
            color={color}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
}
