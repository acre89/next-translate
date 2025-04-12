"use client";
import { useState } from "react";
import arrow from "../../../public/Arrow.svg";
import Image from "next/image";

export default function Select({ options, onChange, init }) {
  const [selected, setSelected] = useState(init);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onChange(options.indexOf(option));
    setActive(options.indexOf(option));
  };
  return (
    <>
      <div className="relative mb-8" onClick={() => setIsOpen(!isOpen)}>
        <div
          className={
            isOpen
              ? "py-3 bg-slate-50 px-5 flex items-center  w-fit border-slate-400 cursor-pointer rounded-md border transition-all"
              : "py-3 bg-white px-5 flex items-center  w-fit border-slate-300 cursor-pointer rounded-md border transition-all"
          }
        >
          {selected ? selected : "Sélectionner une option"}
          <span className="pl-3">
            <Image
              src={arrow}
              className={isOpen ? "selected-arrow" : "down-arrow"}
              height={12}
              width={6}
            />
          </span>
        </div>
        {isOpen && (
          <div className="absolute top-16 z-50 w-72 rounded-md flex flex-col gap-1 shadow-xl border border-slate-200 bg-slate-50 backdrop-blur-lg p-2">
            {options.map((option) => (
              <div
                className={
                  options.indexOf(option) === active
                    ? "cursor-pointer hover:bg-secondary/85 bg-secondary/70 px-3 py-2 rounded-sm"
                    : "cursor-pointer hover:bg-slate-200 px-3 py-2 rounded-sm"
                }
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
