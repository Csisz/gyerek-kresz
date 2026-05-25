// Kompatibilitási fájl – az új adatbázis a kreszSigns.js-ben van
// Ez a fájl visszafelé kompatibilis marad a régi importok számára
export {
  getOvodaSigns,
  getSignById,
  getSignsByCategory,
  kreszSigns as signs,
  ovodasSigns,
  signCategories
} from "./kreszSigns";
