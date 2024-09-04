// "use client";

import logo_blanc from "../../../public/Logo_blanc.png"; 

import linkedin from "../../../public/linkedin.svg";
import Image from "next/image";


export default async function Footer(props) {
  const t = props.dict
  return (
    <>
      <div className="bg-tertiary px-6 sm:px-14 md:px-28  py-10">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between 3xl:w-[1536px] 3xl:m-auto">
          <div className="flex flex-row items-center gap-8">
            <Image
              className="mr-10"
              src={logo_blanc}
              height={100}
              width={100}
            />
            <Image src={linkedin} height={40} width={40} />
          </div>
          <div className="flex sm:mr-10 py-3 sm:py-0 flex-row gap-8 text-card">
            <p>{t.cgu}</p>
            <p>{t.mentions}</p>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row w-full items-center justify-between text-card 3xl:w-[1536px] 3xl:m-auto ">
          <p className="underline">contact@dleafinance.fr</p>
          <p className="italic text-sm">
            @2024 Alexandre Cresci. All right reserved
          </p>
        </div>
      </div>
    </>
  );
}
