import { memo } from 'react';

import styles from './Landing.module.scss';

const Home = memo(function Home() {
  return (
    <section id='home' className={styles.home}>
      <h1>
        I Create
        <span>Experiences</span>
        <span>
          <span>that</span>
          Shine
        </span>
      </h1>
      <p>
        Hi, I&rsquo;m a front-end developer, crafting digital beauty through code and creativity.
      </p>
    </section>
  );
});

export default Home;
