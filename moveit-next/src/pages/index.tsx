import { Profile } from "../components/Profile";
import { ExperienceBar } from "../components/ExperienceBar";

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>

      <section>
          <div>
            <Profile />
          </div>
          <div></div>

      </section>


    <ExperienceBar />
  </div>
  )
}
