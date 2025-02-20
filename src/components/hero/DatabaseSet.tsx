import Database from '@/components/hero/Database';

export default function DatabaseSet() {
  return (
    <div className="flex gap-2 -translate-y-2">
      <Database delay={1000} />
      <div className="-mt-2">
        <Database delay={1209} />
      </div>
      <Database delay={1400} />
    </div>
  );
}
