import fs from 'fs';
import path from 'path';
import { getPlaiceholder } from 'plaiceholder';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(__dirname, '../public/images');
const outputFile = path.join(__dirname, '../src/data.ts');

const rawProjects = [
  {
    name: 'Anime Streaming',
    slug: 'project-ubtv',
    tags: ['Next.js', 'TypeScript', 'Hero UI'],
    image: {
      src: '/images/project-ubtv.png',
      alt: 'Screenshot of Project Anime Streaming'
    }
  },
  {
    name: 'Portfolio Landing Page',
    slug: 'project-portfolio-landing-page',
    tags: ['Responsive', 'TailwindCSS'],
    image: {
      src: '/images/project-portfolio-landing-page.png',
      alt: 'Screenshot of Project Portfolio Landing Page'
    }
  },
  {
    name: 'Dark Animation Landing Page',
    slug: 'project-dark-animation-landing-page',
    tags: ['Framer', 'TailwindCSS', 'Aceternity UI'],
    image: {
      src: '/images/dark-animation-landing-page.png',
      alt: 'Screenshot of Project Dark Animation Landing Page'
    }
  }
];

async function generate() {
  const enhancedProjects = await Promise.all(
    rawProjects.map(async (project) => {
      const imagePath = path.join(inputFile, path.basename(project.image.src));
      const buffer = fs.readFileSync(imagePath);
      const { base64 } = await getPlaiceholder(buffer);

      return {
        ...project,
        image: {
          ...project.image,
          base64
        }
      };
    })
  );

  const content = {
    about: [
      "I'm a passionate developer.",
      "I love building fast and accessible web apps.",
      "I specialize in React and Next.js."
    ],
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js'],
    navLinks: {
      home: '/',
      projects: '/projects',
      about: '/about',
      contact: '/contact'
    },
    contactLinks: {
      email: 'example@example.com',
      phone: '+123456789',
      github: 'https://github.com/daotanhao1406',
      linkedin: 'https://www.linkedin.com/in/dao-tan-hao-14a745344'
    },
    
  };

  const finalCode = `// ⚠️ Auto-generated. Do not edit manually.
export const projects = ${JSON.stringify(enhancedProjects, null, 2)};

export const content = ${JSON.stringify(content, null, 2)};
`;

  fs.writeFileSync(outputFile, finalCode, 'utf8');
  console.log('✅ data.ts generated with base64 images.');
}

generate();
