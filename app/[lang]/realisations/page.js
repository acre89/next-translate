import Navbar from "../components/navbar";
import CTA from "../components/cta";
import { getDictionary } from "../dictionaries";
import Footer from "../components/footer";
export default async function Missions({ params }) {
  let t = await getDictionary(params.lang);
  return (
    <>
      <Navbar isActive="3" dict={t.navbar} lang={params.lang} />
      <div className="h-fit 2xl:w-[1536px]  2xl:mx-auto  min-h-screen bg-background">
        <div className="pt-48 px-6 sm:px-14 md:px-28 ">
          <h1 className="title-h1">{t.realisations.titre}</h1>
          <p className="py-10 lg:mb-10">{t.realisations.description}</p>
        </div>
        <div className=" pb-20 3xl:mt-32 flex justify-center">
          <div className="h-fit lg:h-[450px] lg:w-[992px] flex flex-col gap-4 relative">
            <div
              id="line1"
              className=" h-1.5 w-full deco2 invisible lg:visible "
            ></div>
            <div
              id="line2"
              className="h-[390px] w-1.5 deco2 invisible lg:visible"
            ></div>
            <div
              id="cube"
              className="w-16 h-11 bg-primary deco2 invisible lg:visible "
            ></div>
            <div className="w-[400px] h-fit sm:w-[496px] sm:h-[225px] relative lg:absolute lg:left-0 lg:top-0 flex flex-col justify-center items-center gap-6">
              <div className="num-container w-20 h-16 bg-primary text-card text-5xl flex justify-center items-center font-bold">
                4
              </div>
              <p className="text-center">{t.realisations.element1_titre}</p>
              <p className="italic text-tertiary lg:max-w-[25rem] lg:text-wrap lg:text-center">
                {t.realisations.element1_des}
              </p>
            </div>
            <div className=" h-1.5 w-full interline lg:invisible visible "></div>
            <div className="w-[400px] h-fit sm:w-[496px] sm:h-[225px] relative lg:absolute lg:right-0 lg:top-0 flex flex-col justify-center items-center gap-6">
              <div className="num-container w-20 h-16 bg-primary text-card text-5xl flex justify-center items-center font-bold">
                5
              </div>
              <p className="text-center">{t.realisations.element2_titre}</p>
              <p className="italic text-tertiary lg:max-w-[25rem] lg:text-wrap lg:text-center">
                {t.realisations.element2_des}
              </p>
            </div>
            <div className=" h-1.5 w-full interline lg:invisible visible "></div>
            <div className="w-[400px] h-fit sm:w-[496px] sm:h-[225px] relative lg:absolute lg:right-0 lg:bottom-0 flex flex-col justify-center items-center gap-6">
              <div className="num-container w-20 h-16 bg-primary text-card text-5xl flex justify-center items-center font-bold">
                7
              </div>
              <p className="text-center">{t.realisations.element3_titre}</p>
              <p className="italic text-tertiary lg:max-w-[25rem] lg:text-wrap lg:text-center">
                {t.realisations.element3_des}
              </p>
            </div>
            <div className=" h-1.5 w-full interline lg:invisible visible "></div>
            <div className="w-[400px] h-fit sm:w-[496px] sm:h-[225px]  lg:absolute lg:left-0 lg:bottom-0 flex flex-col justify-center items-center gap-6">
              <div className="num-container w-20 h-16 bg-primary text-card text-5xl flex justify-center items-center font-bold">
                2
              </div>

              <p className="text-center">{t.realisations.element4_titre}</p>
              <p className="italic text-tertiary lg:max-w-[25rem] lg:text-wrap lg:text-center">
                {t.realisations.element4_des}
              </p>
            </div>
          </div>
        </div>
      </div>
      <CTA dict={t.cta} />
      <Footer dict={t.footer} />
    </>
  );
}
