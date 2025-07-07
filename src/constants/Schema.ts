import { Graph } from 'schema-dts';

import { ProjectProperties } from '@/types';

import { APP_URL } from './Data';
import { description, images, title } from './DefaultMetadata';

const HomePage: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Dao Tan Hao',
      url: APP_URL,
      jobTitle: 'Software Engineer',
      gender: 'male',
      image: `${APP_URL}${images}`,
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Ho Chi Minh University of Information Technology'
      },
      sameAs: [
        'https://www.linkedin.com/in/dao-tan-hao-14a745344/'
      ],
      knowsAbout: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Optimization', 'SEO']
    },
    {
      '@type': 'AboutPage',
      url: `${APP_URL}#about`,
      name: title.default,
      inLanguage: 'en-IN',
      description,
      creator: {
        '@type': 'Person',
        name: 'Dao Tan Hao',
        jobTitle: 'Software Engineer',
        url: APP_URL
      }
    },
    {
      '@type': 'WebPage',
      url: APP_URL,
      name: title.default,
      description,
      inLanguage: 'en-IN',
      creator: {
        '@type': 'Person',
        name: 'Dao Tan Hao',
        jobTitle: 'Software Engineer',
        url: APP_URL
      }
    }
  ]
};

export const HOME_SCHEMA = JSON.stringify(HomePage);

export const getProjectSchema = (project: ProjectProperties) => {
  const schema: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareSourceCode',
        name: project.name,
        url: `${APP_URL}/projects/${project.slug}`,
        image: project.image.src,
        description: project.mdx?.split('## Key Features')[0]?.trim(),
        keywords: project.tags,
        creator: {
          '@type': 'Person',
          name: 'Dao Tan Hao',
          jobTitle: 'Software Engineer',
          url: APP_URL
        }
      }
    ]
  };

  return JSON.stringify(schema);
};
