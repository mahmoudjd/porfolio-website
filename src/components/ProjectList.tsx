const ProjectList = ({ projects }) => {
  return (
    <div>
      <h1 className="h5">Projects:</h1>
      <div className="card">
        {projects.map((project, index) => (
          <div className="card-body" key={index}>
            <>
              <h5 className="card-title"> {project.title}</h5>
              <p className="card-text">{project.description}</p>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
