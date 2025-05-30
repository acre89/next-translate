import { getDictionary } from "../dictionaries";
import Navbar from "../components/navbar";
import CTA from "../components/cta";
import ProjectCard from "../components/ProjetCard";
import Footer from "../components/footer";

export default async function Savoir({ params }) {
  let t = await getDictionary(params.lang);

  const evaluation = [
    "Fairness opinion",
    t.savoir_faire.parity_calculus,
    t.savoir_faire.bp_review,
    t.savoir_faire.structuring_fin,
    t.savoir_faire.strucutring_deal,
  ];

  return (
    <>
      <div className="w-screen min-h-screen bg-background md:pb-10 2xl:w-[1536px] 2xl:m-auto">
        <Navbar isActive="2" dict={t.navbar} lang={params.lang} />

        <div className="pt-48 px-6 sm:px-14 md:px-28 ">
          <h1 className="title-h1">{t.savoir_faire.titre}</h1>
        </div>
        <div className="2xl:block 2xl:m-auto 3xl:pt-20 ">
          <div className="flex lg:h-fit justify-center items-center lg:items-start w-full gap-14 lg:gap-0 lg:justify-evenly my-20 2xl:item flex-col lg:flex-row flex-wrap">
            <ProjectCard dict={t.savoir_faire} />
            <div className="px-10 w-4/5 lg:w-2/5 h-full fixed-card pt-10 bg-white flex flex-col">
              <h2 className="text-3xl font-bold pb-5">
                {t.savoir_faire.eval_engine}
              </h2>
              <ul className="relative h-auto pb-5">
                {evaluation.map((item) => (
                  <li className="bullet-point my-3">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CTA className="mt-10" dict={t.cta} lang={params.lang} />
      <Footer dict={t.footer} />
    </>
  );
}
