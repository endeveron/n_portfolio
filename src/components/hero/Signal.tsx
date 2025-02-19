import SignalLight from '@/components/hero/SignalLight';

export default function Signal({
  length,
  isReverse,
}: {
  length: number;
  isReverse?: boolean;
}) {
  let numbers: number[] = [];
  for (let i = 1; i < length; i++) numbers.push(i);
  if (isReverse) numbers = numbers.reverse();

  return (
    <div className="flex gap-1 items-center">
      {numbers.map((num: number) => (
        <SignalLight delay={num * 50} key={num} />
      ))}
    </div>
  );
}
