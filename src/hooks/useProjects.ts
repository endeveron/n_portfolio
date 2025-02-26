'use client';

import { useEffect, useRef, useState } from 'react';

import { TProject } from '@/types';
import projects from '../../data/projects';

const PROJECT_FADING_TIME = 500;
const lastProjectIndex = projects.length - 1;

export const useProjects = () => {
  const [project, setProject] = useState<TProject>(projects[0]);
  const [isTouched, setIsTouched] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);

  const index = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const withFading = async (fn: () => void) => {
    setIsContentReady(false);
    timerRef.current = setTimeout(() => {
      fn();
      setIsContentReady(true);
    }, PROJECT_FADING_TIME);
  };

  const prevProject = () => {
    withFading(() => {
      if (index.current === 0) {
        index.current = lastProjectIndex;
      } else {
        index.current = index.current - 1;
      }
      setProject(projects[index.current]);
      if (!isTouched) setIsTouched(true);
    });
  };

  const nextProject = () => {
    withFading(() => {
      if (index.current === lastProjectIndex) {
        index.current = 0;
      } else {
        index.current = index.current + 1;
      }
      setProject(projects[index.current]);
      if (!isTouched) setIsTouched(true);
    });
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setIsContentReady(true);
    }, PROJECT_FADING_TIME);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevProject();
      } else if (event.key === 'ArrowRight') {
        nextProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { project, isContentReady, isTouched, prevProject, nextProject };
};
