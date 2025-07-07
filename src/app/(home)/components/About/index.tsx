'use client';

import { memo } from 'react';

import Link from '@/components/Link';
import SectionTitle from '@/components/SectionTitle';

import { useAboutAnimation } from './About.anime';
import styles from './About.module.scss';

const About = memo(function About({ about }: { about: string[] }) {
  const aboutRef = useAboutAnimation();

  return (
    <section id='about'>
      <SectionTitle text='About' num={4} />
      <div ref={aboutRef} className={styles.about}>
        <h3>Hi, I&rsquo;m Dao Tan Hao.</h3>
        {about.map((text: string, i: number) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </section>
  );
});

export default About;
