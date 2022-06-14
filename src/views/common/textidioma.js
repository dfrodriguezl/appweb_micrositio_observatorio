import {useTranslation} from "react-i18next";

export const idioma = () => {
const [t, i18n]= useTranslation("global");
 return  [t, i18n]
}