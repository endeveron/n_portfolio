import Signal from '@/components/hero/Signal';

export default function SignalGroup({ length }: { length: number }) {
  return (
    <div className="flex flex-col gap-1">
      <Signal length={length} />
      <Signal length={length} isReverse />
    </div>
  );
}
