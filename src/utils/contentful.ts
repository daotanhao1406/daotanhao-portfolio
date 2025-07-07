import { cache } from 'react';

import { projects, content } from '@/data';

export const getAllProjects = cache(async () => projects);
export const getSingleProject = cache(async (slug_: string) => {
  const project = projects.find((p) => p.slug === slug_);
  if (!project) return null;
  return project;
});
export const getContent = cache(async () => content);