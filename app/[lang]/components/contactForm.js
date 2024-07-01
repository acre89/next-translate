"use client";
import { useState } from "react";
const initValues = {
  prenom: "",
  nom: "",
  email: "",
  message: "",
};

export default function Form(props) {
  let t = props.dico;
  const [state, setState] = useState({ values: initValues });

  const { values } = state;

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
    console.log(values.message);
  };
  return (
    <>
      <form className="sm:px-20 px-10 pt-14">
        <div className="flex flex-col md:flex-row w-full justify-between">
          <div className="flex flex-col input-container relative">
            <label
              htmlFor="nom"
              className="text-tertiary absolute bg-white p-1 top-1.5  left-2"
            >
              {t.contact.nom}
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={values.nom}
              onChange={handleChange}
              className="w-full md:w-56 p-2 border focus:outline-none pl-3 focus:border-text border-tertiary bg-white"
            />
          </div>
          <div className="flex flex-col mt-10 md:mt-0 input-container relative">
            <label
              htmlFor="prenom"
              className="text-tertiary absolute bg-white p-1 top-1.5 left-2"
            >
              {t.contact.prenom}
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={values.prenom}
              onChange={handleChange}
              className="w-full md:w-56 p-2 border focus:outline-none pl-3 focus:border-text border-tertiary bg-white"
            />
          </div>
        </div>
        <div className="flex flex-col input-container relative mt-10">
          <label
            htmlFor="email"
            className="text-tertiary absolute bg-white p-1 top-1.5 left-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className=" p-2 border focus:outline-none pl-3 focus:border-text border-tertiary bg-white"
          />
        </div>
        <div className="flex flex-col input-container relative mt-10 ">
          <label
            htmlFor="message"
            className="text-tertiary absolute bg-white p-1 top-1.5 left-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={7}
            name="message"
            value={values.message}
            onChange={handleChange}
            className="w-full resize-none p-2 border focus:outline-none pl-3 focus:border-text border-tertiary bg-white"
          />
        </div>
        <button className="pt-10 pb-14 ">{t.contact.send}</button>
      </form>
    </>
  );
}
