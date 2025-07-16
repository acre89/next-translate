import { getDictionary } from "../dictionaries";
import Navbar from "../components/navbar";
export default async function MentionLegalePage({ params }) {
  const t = await getDictionary(params.lang);

  return (
    <>
      <Navbar isActive="-1" dict={t.navbar} lang={params.lang} />
      <div className="w-screen min-h-screen bg-background md:pb-10 2xl:w-[1536px] 2xl:m-auto">
        <div className="pt-48 px-6 sm:px-14 md:px-28">
          <h1 className="title-h1">{t.mention_legale.titre}</h1>
          <section className="mt-8 space-y-6">
            <h2 className="font-bold">{t.mention_legale.identite_titre}</h2>
            <p>{t.mention_legale.identite}</p>

            <h2 className="font-bold">{t.mention_legale.hebergeur_titre}</h2>
            <p>{t.mention_legale.hebergeur}</p>

            <h2 className="font-bold">{t.mention_legale.propriete_titre}</h2>
            <p>{t.mention_legale.propriete}</p>

            <h2 className="font-bold">{t.mention_legale.donnees_titre}</h2>
            <p>{t.mention_legale.donnees}</p>

            <h2 className="font-bold">{t.mention_legale.droit_titre}</h2>
            <p>{t.mention_legale.droit}</p>
          </section>
        </div>
      </div>
    </>
  );
}
