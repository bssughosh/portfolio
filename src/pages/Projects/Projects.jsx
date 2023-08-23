import styles from "./Projects.module.scss";
import { Grid } from "@material-ui/core";
import { ProjectsData } from "./data/ProjectsData";
import { memo } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Projects = () => {
  const projectsData = new ProjectsData();
  const projectsList = projectsData.getAllProjects();
  const { url } = useRouteMatch();

  return (
    <Grid container spacing={8} className={styles.projects}>
      {projectsList.map((projectItem) => (
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          xl={6}
          key={`project_${projectItem.id}`}
        >
          <Link to={`${url}/${projectItem.id}`}>
            <div className={styles.projectItem}>
              <h5>{projectItem.title}</h5>
              <h6>{projectItem.desc}</h6>
            </div>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(Projects);
