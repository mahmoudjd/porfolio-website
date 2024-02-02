import "./App.css";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import ListSkills from "./components/ListSkills";
import ProjectList from "./components/ProjectList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function App() {
  const person = {
    name: "Mahmoud Al Jarad",
    age: 29,
    job: "Software Developer or Web Developer werde ich sein",
    photo: "./myfoto.jpeg",
    uni: "Hochschule Trier",
    link: "https://github.com/mahmoudjd",
    mail: "mahmoudjd452@gmail.com",
    facebook: "https://www.facebook.com/Mahmoud Jd",
    instagram: "https://www.instagram.com/mahmoudaljarad",
    information:
      "ich studiere Informatik an der Hochschule Trier und stehe kurz vor dem Abschluss. Das letzte fehlende Puzzlestück für meinen erfolgreichen Abschluss ist lediglich meine Abschlussarbeit.",
  };

  const projects = [
    {
      title: "MJD&MZ-Planer",
      description:
        "Diese Webanwendung wurde im Rahmen eines Projekts zur Veranstaltungsplanung entwickelt." +
        "Sie ermöglicht die Verwaltung von Gästelisten und die Sitzplatzplanung für Veranstaltungen wie Hochzeiten. Die Anwendung besteht aus einem Node.js-Express-Server, der die notwendigen Ressourcen persistent speichert und über eine REST-konforme HTTP-Schnittstelle zur Verfügung stellt.",
      technologies: [
        "Node.Js",
        "JavaScript",
        "HTML",
        "CSS",
        "Less",
        "Express.Js",
        "MongoDB",
        "REST-API",
      ],
    },
    {
      title: "Portfolio",
      description:
        "Diese Anwendung habe ich gemacht, um React mit Bootstrap zu lernen." +
        "In diesem Projekt habe ich Informationen über mich gelegt.",
      technologies: [
        "React.Js",
        "JavaScript",
        "HTML",
        "Bootstrap",
        "TypeScrip, ",
      ],
    },
  ];

  const skills = [
    "Java",
    "Python",
    "Spark",
    "latex",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "React",
    "Bootstrap",
  ];

  return (
    <>
      <Header name={person.name} job={person.job} />
      <NavBar />
      <main
        className={"container  rounded mx-auto"}
        style={{ padding: "5px auto" }}
      >
        <div
          className="row container my-5"
          id="about"
          style={{ marginTop: "15px" }}
        >
          <h2 className="text">About Me</h2>
          <div className="col">
            <Card person={person} />
          </div>
          <div className="col">
            <ListSkills skills={skills} />
          </div>
        </div>
        <div className="row container my-5" id="projects">
          <div className="col container my-5">
            <ProjectList projects={projects} />
          </div>
        </div>

        <div className="row container my-5" id="contact">
          <div className="col container my-5"></div>
          <ContactForm />
        </div>
      </main>
      <Footer name={person.name} />
    </>
  );
}

export default App;
