'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import ProjectList from '@/components/projects/ProjectList';
import ProjectSlider from '@/components/projects/ProjectSlider';

const cardTitle = 'Projects';

export default function Projects() {
  const [isClient, setIsClient] = useState(false);

  // Avoiding the runtime error: "Hydration failed because the server rendered HTML didn't match the client."
  useEffect(() => setIsClient(true), []);

  // Detect large screen
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  if (!isClient) return null; // or a loading spinner

  return isLargeScreen ? (
    <ProjectSlider cardTitle={cardTitle} />
  ) : (
    <ProjectList cardTitle={cardTitle} />
  );
}
