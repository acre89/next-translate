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
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      setStatus("sent");
      setState({values: initValues});
    } else {
      setStatus("error");
    }
  };
  const { values } = state;

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
    setStatus("");
  };
  return (
    <>
      <form className="sm:px-20 px-10 pt-14" onSubmit={handleSubmit}>
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
              required
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
              required
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
            required
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
            required
          />
        </div>
        
      <button
        type="submit"
        disabled={status === "sending"}
        className={`flex items-center justify-center gap-2 px-4 my-7 py-2 text-white rounded-sm
          ${status === "sent" ? "bg-green-600" : status === "error" ? "bg-red-600" : "bg-primary"}
          ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""}
        `}
      >
        {status === "sending" && (
          <svg
            className="w-4 h-4 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {status === "sending"
          ? t.contact.sending
          : status === "sent"
          ? t.contact.sent
          : status === "error"
          ? t.contact.error
          : t.contact.envoyer}
      </button>
      </form>
    </>
  );
}
