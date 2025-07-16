import { getDictionary } from "../dictionaries";
import Navbar from "../components/navbar";
export default async function CguPage({ params }) {
  const t = await getDictionary(params.lang);

  return (
    <>
      <Navbar isActive="-1" dict={t.navbar} lang={params.lang} />
      <div className="w-screen min-h-screen bg-background md:pb-10 2xl:w-[1536px] 2xl:m-auto">
        <div className="pt-48 px-6 sm:px-14 md:px-28">
          <h1 className="title-h1">{t.cgu.titre}</h1>
          <section className="mt-8 space-y-6">
            <p>{t.cgu.intro}</p>

            <h2 className="text-xl font-bold">{t.cgu.objet_titre}</h2>
            <p>{t.cgu.objet}</p>

            <h2 className="text-xl font-bold">{t.cgu.utilisation_titre}</h2>
            <p>{t.cgu.utilisation}</p>

            <h2 className="text-xl font-bold">{t.cgu.donnees_titre}</h2>
            <p>{t.cgu.donnees}</p>

            <h2 className="text-xl font-bold">{t.cgu.propriete_titre}</h2>
            <p>{t.cgu.propriete}</p>

            <h2 className="text-xl font-bold">{t.cgu.responsabilite_titre}</h2>
            <p>{t.cgu.responsabilite}</p>

            <h2 className="text-xl font-bold">{t.cgu.droit_titre}</h2>
            <p>{t.cgu.droit}</p>
          </section>
        </div>
      </div>
    </>
  );
}
