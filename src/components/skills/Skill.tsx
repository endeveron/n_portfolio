export type TSkill = {
  title: string;
  value?: string;
  color?: string;
};

export default function Skill({ title, value, color }: TSkill) {
  return (
    <div className="flex rounded-sm" style={{ backgroundColor: color }}>
      <div className="px-3 py-2 text-sm text-white font-semibold tracking-wide">
        {title}
      </div>
      {value ? (
        <div className="px-3 py-2 text-sm font-medium bg-black/10">{value}</div>
      ) : null}
    </div>
  );
}
