"use client";
import { useState } from "react";
import Select from "./select";

export default function ProjectCard({ params, dict }) {
  let savoir_faire = dict;

  const acquisition = [
    savoir_faire.acquisition_targeting,
    savoir_faire.acquisition_analysis,
    savoir_faire.acquisition_loi,
    savoir_faire.acquisition_negotiation,
    savoir_faire.acquisition_due_diligence,
  ];

  const cession = [
    savoir_faire.cession_docs_preparation,
    savoir_faire.cession_targeting,
    savoir_faire.cession_negotiation,
    savoir_faire.cession_due_diligence,
  ];
  const titles = [savoir_faire.acquisition_title, savoir_faire.cession_title];
  const [activeList, setActiveList] = useState(acquisition);

  async function handleChangeProject(id) {
    if (id == 0) {
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
  }

  return (
    <>
      <div className="fixed-card lg:w-2/5 w-4/5 p-10 bg-white">
        <h2 className="text-3xl mb-5 font-bold">
          {savoir_faire.acquisition_cession_title}
        </h2>
        <div className="xl:flex xl:justify-center xl:w-full 2xl:justify-start">
          <div className="mb-5 w-fit bg-neutral-200 rounded relative hidden xl:flex ">
            <div className="selector" id="selector"></div>
            <button
              className="change z-10"
              id="acquisition"
              onClick={() => handleChangeProject(0)}
            >
              <h3
                id="first-h2"
                className="text-xl w-[240px] font-bold text-center  "
              >
                {savoir_faire.acquisition_title}
              </h3>
            </button>
            <button
              className="change z-10"
              id="cession"
              onClick={() => handleChangeProject(1)}
            >
              <h3
                id="second-h2"
                className=" text-xl w-[240px] font-bold text-center "
              >
                {savoir_faire.cession_title}
              </h3>
            </button>
          </div>
        </div>
        <div className="visible xl:hidden">
          <Select
            options={titles}
            onChange={handleChangeProject}
            active={activeList.length == 5 ? 1 : 0}
            init={titles[0]}
          />
        </div>
        <ul className="h-fit">
          {activeList.map((item) => (
            <li className="bullet-point my-3">{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
