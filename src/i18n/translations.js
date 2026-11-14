// -----------------------------------------------------------------------
// All site copy lives in fr.js and en.js, keyed by language.
// To edit any text on the site: find the key in the matching file.
// To add a new language: duplicate fr.js, rename the export, add it here
// and to the LANGUAGES array in LanguageContext.jsx.
// -----------------------------------------------------------------------
import { fr } from "./fr.js";
import { en } from "./en.js";
import { pages } from "./pages.js";

export const translations = { fr: { ...fr, pages: pages.fr }, en: { ...en, pages: pages.en } };
