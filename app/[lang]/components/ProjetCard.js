"use client";

export default function ProjectCard({params}){
    const acquisition = [
      "Identification des cibles",
      "Conseil lors des approches",
      "Analyse financière",
      "Examen des BP fournis",
      "Structuration de LOI",
      "Suivi des audits",
      "Négociation des termes clés du contrat d’acquisition, et des termes clés de la garantie de passif",
      "Négociation finale du prix (notamment calcul du BFR normatif, des ajustements finaux du prix, des schémas d’earn-outs, etc.).",
    ];


    async function handleChangeProject(id){
      if (id == "acquisition") {
        document.getElementById("cession-point").style.visibility = "hidden";
        document.getElementById("selector").style.left = "0px";
        document.getElementById("first-h2").style.color = "white";
        document.getElementById("second-h2").style.color = "black";
        
      } else {
        document.getElementById("cession-point").style.visibility = "visible";
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
              <ul>
                {acquisition.map((item) => (
                  <li className="bullet-point my-3">{item}</li>
                ))}
                <li id="cession-point" className="bullet-point invisible font-bold">
                  Réalisation d’info-mémos, teasers, BP, et de l’ensemble
                  des documents d’information de l’opération (notamment
                  organisation des data rooms).
                </li>
              </ul>
            </div>
        </>
    )
}