const ListSkills = ({ skills }) => {
  return (
    <div style={{ maxWidth: "25rem" }}>
      <h2 className="h5"> Skills: </h2>
      <ul className="list-group list-group-flush list-group-item-success">
        {skills.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSkills;
