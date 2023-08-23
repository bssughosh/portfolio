import { memo } from "react";
import styles from "./Home.module.scss";

const Home = ({ currentTheme }) => {
  return (
    <>
      <img
        src="/assets/my_image.png"
        alt="Sughosh Sudhanvan"
        className={styles.myImage}
      />
      <div className={styles.content}>
        <h3>Hello,</h3>
        <h1>I am Sughosh Sudhanvan</h1>
        <h4>
          I am a software development enthusiast and am currently working mostly
          on Flutter (Flutter Clean Architecture, API Integration and UI/UX).
          Besides this I also am fluent with API development (JS/TS) and Unity
          XR development.
        </h4>
        <h4>
          I am currently working at Cerebranium where we are building XR
          learning experiences with or without internet, using everyday mobile
          devices with sight, sound and movements. We work closely with
          educators and students to change education forever.
        </h4>
      </div>
      <img
        src={
          currentTheme === "dark"
            ? "/assets/tech_stack.png"
            : "/assets/tech_stack_light.png"
        }
        alt="Tech Stack"
        className={styles.techStack}
      />
    </>
  );
};

export default memo(Home);
