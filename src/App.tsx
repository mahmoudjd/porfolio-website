import "./App.css";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import ListSkills from "./components/ListSkills";
import ProjectList from "./components/ProjectList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import { person, projects, skills } from "./lib/data";

function App() {
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
