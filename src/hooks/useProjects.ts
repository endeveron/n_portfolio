'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { createDebouncedFunction, getNextProjectIndex } from '@/helpers';
import { TProject } from '@/types';
import projects from '../../data/projects';

const PROJECT_FADING_TIME = 500;
const PROJECTS_LENGTH = projects.length;

console.log('PROJECTS_LENGTH', PROJECTS_LENGTH);

export const useProjects = (): {
  project: TProject;
  isContentReady: boolean;
  isTouched: boolean;
  prevProject: () => void;
  nextProject: () => void;
} => {
  const [project, setProject] = useState<TProject>(projects[0]);
  const [isTouched, setIsTouched] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);

  const indexRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const debouncedPrevRef = useRef<(() => void) | null>(null);
  const debouncedNextRef = useRef<(() => void) | null>(null);

  // Add a fading effect when transitioning between projects,
  // giving a smoother visual experience to the user
  const withFading = useCallback((fn: () => void) => {
    setIsContentReady(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      fn();
      setIsContentReady(true);
    }, PROJECT_FADING_TIME);
  }, []);

  const changeProject = useCallback(
    (direction: 'prev' | 'next') => {
      withFading(() => {
        indexRef.current = getNextProjectIndex({
          current: indexRef.current,
          direction,
          projectsLength: PROJECTS_LENGTH,
        });
        setProject(projects[indexRef.current]);
        // Activate the 'PREV' button
        if (!isTouched) setIsTouched(true);
      });
    },
    [isTouched, withFading]
  );

  const prevProject = useCallback(() => changeProject('prev'), [changeProject]);
  const nextProject = useCallback(() => changeProject('next'), [changeProject]);

  useEffect(() => {
    // Set up a timer to delay the setting of the `isContentReady`
    // state to `true`. This delay allows for a fading effect when
    // transitioning between projects
    const initialTimer = setTimeout(
      () => setIsContentReady(true),
      PROJECT_FADING_TIME
    );

    // The debounced functions persist across renders
    if (!debouncedPrevRef.current) {
      debouncedPrevRef.current = createDebouncedFunction(prevProject, 200);
    }
    if (!debouncedNextRef.current) {
      debouncedNextRef.current = createDebouncedFunction(nextProject, 200);
    }

    // Check for 'ArrowLeft' and 'ArrowRight' keyboard keys
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && debouncedPrevRef.current) {
        debouncedPrevRef.current();
      }
      if (event.key === 'ArrowRight' && debouncedNextRef.current) {
        debouncedNextRef.current();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [prevProject, nextProject]);

  return { project, isContentReady, isTouched, prevProject, nextProject };
};
