interface Person {
  photo: string;
  name: string;
  information: string;
  link: string;
  facebook: string;
  instagram: string;
  mail: string;
  age: number;
}

type Props = {
  person: Person;
};

const Card = ({ person }: Props) => {
  return (
    <div
      className="card justify-content-md-center shadow"
      style={{ width: "28rem" }}
    >
      <img src={person.photo} className="card-img-top mg-fluid" alt="person" />
      <div className="card-body bg-secondary bg-opacity-10">
        <h5 className="card-title">{person.name}</h5>

        <p className="card-text">
          ich bin {person.age} Jahre alt und {person.information}
        </p>
        <p className="card-text ">E-Mail Address: {person.mail} </p>

        <div className="card-body">
          <a href={person.link} className="card-link">
            GitHub
          </a>
          <a href={person.facebook} className="card-link">
            facebook
          </a>
          <a href={person.instagram} className="card-link">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
