"use client";
import { useState } from "react";
export default function ProjectCard({params}){
    const acquisition = [
      "Identification et approche des cibles",
      "Analyse financière et stratégique des cibles",
      "Préparation des lettres d’intention",
      "Assistance dans la négociation de la structuration financière et juridique de l’acquisition (prix, garantie de passif, etc.)",
      "Suivi des audits et de la préparation de la documentation juridique",
    ];

    const cession = [
      "Préparation de l’ensemble des documents d’information de l’opération (info-mémos, teasers, BP, organisation de la data room…).",
      "Identification et approche des acquéreurs potentiels",
      "Assistance dans la négociation des offres reçues lors des étapes successives du process (prix, garanties, modalités de paiement, etc.) ",
      "Suivi des audits et de la rédaction de la documentation juridique jusqu’au closing.",

    ];

    const [activeList, setActiveList] = useState(acquisition); 

    async function handleChangeProject(id){
      if (id == "acquisition") {
        setActiveList(acquisition); 
        document.getElementById("selector").style.left = "0px";
        document.getElementById("first-h2").style.color = "white";
        document.getElementById("second-h2").style.color = "black";
        
      } else {
        setActiveList(cession); 
        document.getElementById("selector").style.left = "240px";
        document.getElementById("first-h2").style.color = "black";
        document.getElementById("second-h2").style.color = "white";
      }
    };
    return(
        <>
        <div className="fixed-card w-2/5 p-10 bg-white">
              <h2 className="text-3xl mb-5 font-bold">Projets d'acquisition et de cession</h2>
              <div className="flex mb-5 w-fit bg-neutral-200 rounded relative">
                <div className="selector" id="selector"></div>
                <button className="change z-10" id="acquisition" onClick={() => handleChangeProject("acquisition")}>
                  <h3 id="first-h2" className="text-xl w-[240px] font-bold text-center  ">Projets d'acquisitions</h3>
                </button>
                <button className="change z-10" id="cession" onClick={() => handleChangeProject("cession")}>
                  <h3 id="second-h2" className=" text-xl w-[240px] font-bold text-center ">Projets de cessions</h3>
                </button>
              </div>
              <ul className="h-fit">
                {activeList.map((item) => (
                  <li className="bullet-point my-3">{item}</li>
                ))}
              </ul>
            </div>
        </>
    )
}