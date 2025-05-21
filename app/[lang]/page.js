// import Navbar from "./components/navbar";
import Image from "next/image";
import brain from "../../public/brain.svg";
import dart from "../../public/dart.svg";
import users from "../../public/users.svg";
import arrow from "../../public/Arrow.svg";
import { getDictionary } from "./dictionaries";
import Navbar from "./components/navbar";
import CTA from "./components/cta";
import Footer from "./components/footer";
import AnimatedTitle from "./components/animatedTitle";
export default async function Home({ params }) {
  let t = await getDictionary(params.lang);
  return (
    <>
      <div className="">
        <Navbar isActive="0" dict={t.navbar} />
        <div className="home-page h-screen max-w-[100vw] overflow-x-hidden">
          <div className=" 2xl:w-[1536px] 2xl:m-auto relative ">
            <div className="px-6 sm:px-14 md:px-28 ">
              <div className="pt-48 3xl:pt-96">
                <AnimatedTitle dico={t.animated_title} />
                <h1 className="text-text text-5xl font-bold card mt-3">
                  {t.accueil.titre}
                </h1>

                <button className="contact-button pt-7 text-lg ">
                  <div className="flex flex-row gap-4 px-4 py-2.5 items-center border border-black">
                    <p>{t.cta.button}</p>
                    <svg
                      width="9"
                      height="16"
                      viewBox="0 0 9 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Arrow"
                        className="arrow"
                        d="M8.70721 8.70711C9.09773 8.31658 9.09773 7.68342 8.70721 7.29289L2.34325 0.928932C1.95272 0.538408 1.31956 0.538408 0.929032 0.928932C0.538508 1.31946 0.538508 1.95262 0.929032 2.34315L6.58589 8L0.929032 13.6569C0.538508 14.0474 0.538508 14.6805 0.929032 15.0711C1.31956 15.4616 1.95272 15.4616 2.34325 15.0711L8.70721 8.70711ZM8 9H8.0001V7H8V9Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-9 w-full flex justify-center">
            <a href="#more" className="flex flex-col items-center gap-1">
              <p className="text-card font-semibold">{t.accueil.plus}</p>

              <svg
                className="animate-bounce"
                width="36px"
                height="36px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10L12 15L17 10"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          id="more"
          className="w-full bg-background 2xl:w-[1536px] 2xl:m-auto relative  px-6 sm:px-14 2xl:px-28 pb-10 xl:pb-0 xl:h-screen"
        >
          <div className="flex pt-56 flex-col gap-10 xl:gap-4 items-center w-full 2xl:mt-16 3xl:mt-32  xl:items-stretch xl:flex-row justify-between ">
            <a href="/equipe">
              <div className="animate-card relative w-[350px] sm:w-96 bg-white px-6 pt-7 pb-7 xl:pb-0">
                <Image src={users} height={70} width={53} />
                <div className="flex flex-row xl:items-center justify-between pt-7 xl:pt-0 xl:flex-none">
                  <h3 className="text-3xl font-bold text-primary xl:pt-7">
                    {t.accueil.block1_titre}
                  </h3>
                  <div className="xl:absolute xl:bottom-10 xl:right-7 flex flex-row items-center gap-2">
                    <span className="text-tertiary animate-span">
                      {t.accueil.plus}
                    </span>
                    <Image
                      src={arrow}
                      className="animate-arrow"
                      height={16}
                      width={9}
                    />
                  </div>
                </div>
                <p className="animate-text pt-5">{t.accueil.block1_des}</p>
              </div>
            </a>
            <a href="/savoir-faire">
              <div className="animate-card relative w-[350px] sm:w-96 bg-white px-6 pt-7 pb-7 xl:pb-0">
                <Image
                  src={brain}
                  className="stroke-secondary"
                  height={70}
                  width={53}
                />
                <div className="flex flex-row xl:items-center justify-between pt-7 xl:pt-0 xl:flex-none">
                  <h3 className="text-3xl font-bold text-primary xl:pt-7">
                    {t.accueil.block2_titre}
                  </h3>
                  <div className="xl:absolute xl:bottom-10 xl:right-7 flex flex-row items-center gap-2">
                    <span className="text-tertiary animate-span">
                      {t.accueil.plus}
                    </span>
                    <Image
                      src={arrow}
                      className="animate-arrow"
                      height={16}
                      width={9}
                    />
                  </div>
                </div>
                <p className="animate-text pt-5">{t.accueil.block2_des}</p>
              </div>
            </a>
            <a href="/realisations">
              <div className="animate-card relative w-[350px] sm:w-96 bg-white px-6 pt-7 pb-7 xl:pb-0">
                <Image src={dart} height={70} width={53} />
                <div className="flex flex-row xl:items-center justify-between pt-7 xl:pt-0 xl:flex-none">
                  <h3 className="text-3xl font-bold text-primary xl:pt-7">
                    {t.accueil.block3_titre}
                  </h3>
                  <div className="xl:absolute xl:bottom-10 xl:right-7 flex flex-row items-center gap-2">
                    <span className="text-tertiary animate-span">
                      {t.accueil.plus}
                    </span>
                    <Image
                      src={arrow}
                      className="animate-arrow"
                      height={16}
                      width={9}
                    />
                  </div>
                </div>
                <p className="animate-text  pt-5">{t.accueil.block3_des}</p>
              </div>
            </a>
          </div>
        </div>
        <CTA dict={t.cta} lang={params.lang} />
        <Footer dict={t.footer} />
      </div>
    </>
  );
}
