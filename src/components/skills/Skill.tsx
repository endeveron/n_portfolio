export type TSkill = {
  title: string;
  value?: string;
  color?: string;
};

export default function Skill({ title, value, color }: TSkill) {
  return (
    <div className="relative flex rounded-sm">
      <div className="relative z-10 px-3 py-2 text-sm text-white font-semibold tracking-wide">
        {title}
      </div>
      {value ? (
        <div className="relative z-10 px-3 py-2 text-sm font-medium bg-black/10">
          {value}
        </div>
      ) : null}
      <div
        className="absolute inset-0 z-0 dark:opacity-40"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}
