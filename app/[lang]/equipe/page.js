import Navbar from "../components/navbar";
import CTA from "../components/cta";
import profile_picture from "../../../public/Laurent Durante.jpg";
import Image from "next/image";
import { getDictionary } from "../dictionaries";
import Footer from "../components/footer";
export default async function Equipe({ params }) {
  let t = await getDictionary(params.lang);

  return (
    <>
      <div className="w-screen bg-background 2xl:w-[1536px] 2xl:m-auto">
        <Navbar isActive="1" lang={params.lang} dict={t.navbar} />
        <div className="h-fit">
          <div className="px-6 sm:px-14 md:px-28 pt-48 pb-20">
            <h1 className="title-h1 relative pb-12 md:pb-20">
              {t.equipe.titre}
            </h1>
            <div className="flex flex-row justify-evenly">
              <div className="flex flex-col lg:flex-row relative items-center gap-10  pr-7 bg-white h-fill w-full fixed-card">
                <div className="relative ">
                  <Image className="profile-image " src={profile_picture} />
                  <div className="absolute  w-full flex justify-center bottom-0 h-1/2 items-end profile-image-gradient"></div>
                  <h3 className="absolute  w-full text-white pb-4 bottom-0 text-center text-2xl italic nom">
                    Laurent Durante
                  </h3>
                </div>

                <p className="w-3/4">
                  {t.equipe.description}
                  <br />
                  <br />
                  {t.equipe.description_suite}
                </p>
              </div>
            </div>
            <p className="pt-20">{t.equipe.more}</p>
          </div>
        </div>
        <CTA dict={t.cta} />
        <Footer dict={t.footer} />
      </div>
    </>
  );
}
