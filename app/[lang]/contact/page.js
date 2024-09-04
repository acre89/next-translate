

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { getDictionary } from "../dictionaries";
import Form from "../components/contactForm";



export default async function Contact({params}) {
  let t = await getDictionary(params.lang); 

  
  return (
    <>
      <Navbar isActive="4" dict={t.navbar} lang={params.lang} />
      <div className=" min-h-screen 2xl:w-[1536px]  2xl:mx-auto  h-fit bg-background">
        <div className="pt-48 px-6 sm:px-14 md:px-28 ">
          <h1 className="title-h1">{t.contact.titre}</h1>
          <p className="pt-10">{t.contact.description}</p>
        </div>
        <div className="w-full py-14 flex justify-center">
          <div className="fixed-card w-4/5 sm:w-3/4 md:w-[667px] h-fit bg-white">
            <Form dico={t} />
          </div>
        </div>
      </div>
      <Footer dict={t.footer} />
    </>
  );
}
