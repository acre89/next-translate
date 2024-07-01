import 'server-only'


const dictionaries = {
  fr: () => import('../../locales/fr/fr.json').then((module) => module.default),
  en: () => import('../../locales/en/en.json').then((module) => module.default),
}
 

export const getDictionary = async (locale) => dictionaries[locale](); 


