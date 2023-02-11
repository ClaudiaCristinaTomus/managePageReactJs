import React from 'react'
import styles from "./About.module.scss";
import image1 from '../images/about.png';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.left}>
        <h2>Bring everyone together to build better products.</h2>
        <p>Manage makes it simple for software teams to plan day-to-day
          tasks while keeping the larger team goals in view.</p>
        <div className={styles.about_button}>
          <Button />
        </div>
      </div>
      <div className={styles.right}>
        <img src={image1} alt="Logo" />;
      </div>
    </div>
  )
}

const Button = () => {
  return <button className={styles.button}>Get started</button>;
}

export default About