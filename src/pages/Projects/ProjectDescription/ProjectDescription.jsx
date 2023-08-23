import { useParams } from "react-router-dom";
import { ProjectsData } from "../data/ProjectsData";
import styles from "./ProjectDescription.module.scss";
import shortid from "shortid";

const ToolsUsed = ({ tools }) => {
  return (
    <>
      <h3>Tools Used</h3>{" "}
      <div className={styles.tools}>
        {tools.map((tool) => (
          <div className={styles.toolItem} key={shortid.generate()}>
            <h5>{tool}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

const ProjectDescription = () => {
  const { id } = useParams();
  const projectsData = new ProjectsData();
  const currentProject = projectsData.getProject(id);

  return (
    <>
      <h1>{currentProject.title}</h1>
      <hr />
      <ToolsUsed tools={currentProject.tools} />
      <hr />
    </>
  );
};

export default ProjectDescription;
