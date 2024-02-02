interface Props {
  name: string;
  job: string;
}

const Header = ({ name, job }: Props) => {
  return (
    <header className="bg-dark text-white text-center py-5">
      <h1>{name}</h1>
      <p className="lead">{job}</p>
    </header>
  );
};

export default Header;
