export default function SignalLight({ delay = 0 }: { delay?: number }) {
  return (
    <div
      className="w-[1px] h-[1px] bg-black dark:bg-white animate-ping"
      style={{ animationDelay: `${delay}ms`, animationDuration: '1s' }}
    ></div>
  );
}
