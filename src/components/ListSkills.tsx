interface Props {
  skills: Array<string>;
}

const ListSkills = ({ skills }: Props) => {
  return (
    <div style={{ maxWidth: "25rem" }}>
      <h1 className="h5"> Skills: </h1>
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
