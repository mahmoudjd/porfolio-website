interface Props {
  projects: Array<Project>;
}

type Project = {
  title: string;
  description: string;
  technologies: Array<string>;
};

const ProjectList = ({ projects }: Props) => {
  return (
    <>
      <h2 className="mb-4">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6" key={index}>
            <div className="card mb-4 border rounded shadow bg-secondary bg-opacity-10">
              <div className="card-body p-2">
                <h4 className="card-title text-danger text-opacity-50">
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
