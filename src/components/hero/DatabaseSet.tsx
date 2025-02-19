import Database from '@/components/hero/Database';

export default function DatabaseSet() {
  return (
    <div className="flex gap-2 -translate-y-2">
      <Database />
      <div className="-mt-3">
        <Database />
      </div>
      <Database />
    </div>
  );
}
