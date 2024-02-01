const Card = ({ person }) => {
  return (
    <div className="card justify-content-md-center" style={{ width: "25rem" }}>
      <img src={person.photo} className="card-img-top mg-fluid" alt="person" />
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <p className="card-text">{person.inforationen}</p>
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
