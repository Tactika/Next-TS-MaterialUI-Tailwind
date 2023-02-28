import { ProjectObject } from "../types";
import BasicModal from "./Modal";

const Projects = (props: any) => {
  const projects = props.projects;
  console.log("Projects in Projects", projects);
  return (
    <article>
      <div>
        <h2>My Projects</h2>
      </div>
      {projects.map((project: ProjectObject, index: number) => (
        <div key={index}>
          <img src="images/damien.jpg" alt={project.name} width={300} />
          <h3>
            <BasicModal project={project} />
          </h3>
          <p>{project.description}</p>

          <a href="#">
            <button>Live</button>
          </a>

          <a href="#">
            <button>Github</button>
          </a>
        </div>
      ))}
    </article>
  );
};

export default Projects;
