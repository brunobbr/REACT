import { Profile } from "../components/Profile";
import { ExperienceBar } from "../components/ExperienceBar";

import styles from '../styles/pages/Home.module.css';
import { CompletedChallenges } from "../components/CompletedChallenges";

export default function Home() {
  return (
    <div className={styles.container}>

      <section>
          <div>
            <Profile />
            <CompletedChallenges />
          </div>
          <div></div>

      </section>


    <ExperienceBar />
  </div>
  )
}
