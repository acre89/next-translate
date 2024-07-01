"use client"; 
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import burger from "../../../public/burger.svg";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import France from "../../../public/france.svg";
import Uk from "../../../public/uk.svg";

export default function Navbar(props) {
  const pathname = usePathname(); 
  const t = props.dict; 
  const router = useRouter(); 
  const langue = pathname.split('/')[1]
  const changeLanguage= (e) => {
    const locale = e.target.value; 
    const segments = pathname.split('/');
    segments[1] = locale;
    document.cookie = `NEXT_LOCALE=${locale}; path=/`;
    router.push(segments.join('/')); 
  }; 

  const handleClick = () => {
    const submenu = document.getElementById("submenu");
    if (submenu.style.visibility == "visible") {
      submenu.style.visibility = "hidden";
    } else {
      submenu.style.visibility = "visible";
    }
  };
  return (
    <div className="3xl:flex 3xl:justify-center 3xl:w-full">
      <div className="z-50 px-6 sm:px-14 md:px-28  fixed  w-full 3xl:w-150  3xl:px-0 top-[49px]">
        <div className=" relative  bg-card/30 rounded-3xl nav-style">
          <div className="hidden xl:flex flex-row justify-between py-2 px-14 ">
            <Link href={`/${langue}`} >
              <Image className="logo" src={Logo} />
            </Link>
            <select onChange={changeLanguage} className="lang-select absolute left-56 top-8" defaultValue={langue}>
              <option value="fr">🇫🇷</option>
              <option value="en">🇬🇧</option>
            </select>
            <div className="self-center">
              <ul className="flex gap-[52px] font-light  text-lg ">
                <Link href={`/${langue}`}>
                  <li
                    className={
                      props.isActive == 0
                        ? "text-text font-semibold"
                        : "text-tertiary font-light hover:text-text"
                    }
                  >
                    {t.acceuil}
                  </li>
                </Link>
                <Link href={`/${langue}/equipe`}>
                  <li
                    className={
                      props.isActive == 1
                        ? "text-text font-semibold"
                        : "text-tertiary font-light hover:text-text"
                    }
                  >
                    {t.equipe}
                  </li>
                </Link>
                <Link href={`/${langue}/savoir-faire`}>
                  <li
                    className={
                      props.isActive == 2
                        ? "text-text font-semibold"
                        : "text-tertiary font-light hover:text-text"
                    }
                  >
                    {t.savoir_faire}
                  </li>
                </Link>
                <Link href={`/${langue}/realisations`}>
                  <li
                    className={
                      props.isActive == 3
                        ? "text-text font-semibold"
                        : "text-tertiary font-light hover:text-text"
                    }
                  >
                    {t.realisations}
                  </li>
                </Link>
                <Link href={`/${langue}/contact`}>
                  <li
                    className={
                      props.isActive == 4
                        ? "text-text font-semibold"
                        : "text-tertiary font-light hover:text-text"
                    }
                  >
                    {t.contact}
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="xl:hidden flex flex-row justify-between py-2 px-6 md:px-14 ">
            <button onClick={handleClick} className="flex-initial">
              <Image src={burger} height={30} width={30} />
            </button>
            <Link href="" >
              <Image className="logo" src={Logo} />
            </Link>
            <div className="w-[30px]"></div>
            <div
              id="submenu"
              className="absolute bg-card rounded-2xl border-1 pl-5 pr-10 py-5 invisible left-0 top-20"
            >
              <ul className="flex flex-col gap-2 text-lg ">
                <Link href="/">
                  <li
                    className={
                      props.isActive == 0
                        ? "text-text font-semibold"
                        : "text-tertiary font-light hover:text-text"
                    }
                  >
                    {t.accueil}
                  </li>
                </Link>
                <Link href="/equipe">
                  <li
                    className={
                      props.isActive == 1
                        ? "text-text font-semibold"
                        : "text-tertiary font-light hover:text-text"
                    }
                  >
                    {t.team}
                  </li>
                </Link>
                <Link href="/savoir-faire">
                  <li
                    className={
                      props.isActive == 2
                        ? "text-text font-semibold"
                        : "text-tertiary font-light hover:text-text"
                    }
                  >
                    {t.savoir_faire}
                  </li>
                </Link>
                <Link href="/realisations">
                  <li
                    className={
                      props.isActive == 3
                        ? "text-text font-semibold"
                        : "text-tertiary font-light hover:text-text"
                    }
                  >
                    {t.realisations}
                  </li>
                </Link>
                <Link href="/contact">
                  <li
                    className={
                      props.isActive == 4
                        ? "text-text font-semibold"
                        : "text-tertiary font-light hover:text-text"
                    }
                  >
                    {t.contact}
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
