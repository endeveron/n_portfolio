export const getNextProjectIndex = ({
  current,
  direction,
  projectsLength,
}: {
  current: number;
  direction: 'prev' | 'next';
  projectsLength: number;
}) =>
  direction === 'next'
    ? (current + 1) % projectsLength
    : (current - 1 + projectsLength) % projectsLength;

export const createDebouncedFunction = (fn: () => void, ms: number) => {
  let timeoutId: NodeJS.Timeout;
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, ms);
  };
};
