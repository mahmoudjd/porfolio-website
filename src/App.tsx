import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import ListSkills from "./components/ListSkills";
import ProjectList from "./components/ProjectList";

function App() {
  const person = {
    name: "Mahmoud Al Jarad",
    age: 29,
    photo: "./myfoto.jpeg",
    uni: "Hochschule Trier",
    link: "https://github.com/mahmoudjd",
    mail: "mahmoudjd452@gmail.com",
    facebook: "https://www.facebook.com/Mahmoud Jd",
    instagram: "https://www.instagram.com/mahmoudaljarad",
    inforationen:
      "ich studiere Informatik an der Hochschule Trier und stehe kurz vor dem Abschluss. Das letzte fehlende Puzzlestück für meinen erfolgreichen Abschluss ist lediglich meine Abschlussarbeit.",
  };

  const projects = [
    {
      title: "MJD&MZ-Planer",
      description:
        "Diese Webanwendung wurde im Rahmen eines Projekts zur Veranstaltungsplanung entwickelt." +
        "Sie ermöglicht die Verwaltung von Gästelisten und die Sitzplatzplanung für Veranstaltungen wie Hochzeiten. Die Anwendung besteht aus einem Node.js-Express-Server, der die notwendigen Ressourcen persistent speichert und über eine REST-konforme HTTP-Schnittstelle zur Verfügung stellt.",
    },
    {
      title: "Portfolio",
      description:
        "Diese Anwendung habe ich gemacht, um React mit Bootstrap zu lernen." +
        "In diesem Projekt habe ich Informationen über mich gelegt.",
    },
  ];

  const skills = [
    "React",
    "Bootstrap",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Java",
    "MongoDB",
    "Spark",
    "Python",
  ];

  return (
    <>
      <NavBar />
      <main className={"container  rounded mx-auto"}>
        <div className="row">
          <div className="col">
            <Card person={person} />
          </div>
          <div className="col">
            <ListSkills skills={skills} />
          </div>

          <div className="col">
            <ProjectList projects={projects} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
