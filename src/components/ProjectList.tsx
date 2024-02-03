interface Props {
  projects: Array<Project>;
}

interface Project {
  title: string;
  description: string;
  technologies: Array<string>;
}

const ProjectList = ({ projects }: Props) => {
  return (
    <>
      <h2 className="text">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6" key={index}>
            <div className="card-mb-4">
              <div
                className="card-body p-2 border bg-success bg-opacity-10 rounded shadow"
                style={{
                  maxWidth: "25rem",
                }}
              >
                <h4 className="card-title text-danger text-opacity-50">
                  {" "}
                  {project.title}
                </h4>
                <p className="card-text">{project.description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Technologies: {project.technologies.join(", ")}
                  </small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectList;
