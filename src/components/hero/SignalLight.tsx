export default function SignalLight({ delay = 0 }: { delay?: number }) {
  return (
    <div
      className="w-[2px] h-[1px] dark:w-[1px] bg-blue-800 dark:bg-blue-300 animate-ping"
      style={{ animationDelay: `${delay}ms`, animationDuration: '1s' }}
    ></div>
  );
}
