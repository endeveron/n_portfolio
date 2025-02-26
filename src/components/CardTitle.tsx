export default function CardTitle({ text }: { text: string }) {
  const className = `absolute -top-8 left-8 lg:-top-12 lg:left-10 xl:left-12 text-muted text-7xl lg:text-8xl font-bold tracking-wide uppercase select-none`;
  return (
    <>
      <div className={`${className} -z-10 opacity-30 dark:opacity-65`}>
        {text}
      </div>
      <div className={`${className} z-10 opacity-10 dark:opacity-10`}>
        {text}
      </div>
    </>
  );
}
