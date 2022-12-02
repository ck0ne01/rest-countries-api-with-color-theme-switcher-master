export interface Country {
  name: Name;
  tld?: string[] | null;
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital?: string[] | null;
  altSpellings?: string[] | null;
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng?: number[] | null;
  landlocked: boolean;
  borders?: string[] | null;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones?: string[] | null;
  continents?: string[] | null;
  flags: FlagsOrCoatOfArms;
  coatOfArms: FlagsOrCoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
}
export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}
export interface NativeName {
  ara: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
}
export interface AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho {
  official: string;
  common: string;
}
export interface Currencies {
  MRU: MRU;
}
export interface MRU {
  name: string;
  symbol: string;
}
export interface Idd {
  root: string;
  suffixes?: string[] | null;
}
export interface Languages {
  ara: string;
}
export interface Translations {
  ara: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  bre: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  ces: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  cym: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  deu: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  est: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  fin: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  fra: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  hrv: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  hun: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  ita: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  jpn: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  kor: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  nld: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  per: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  pol: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  por: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  rus: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  slk: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  spa: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  swe: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  tur: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  urd: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
  zho: AraOrBreOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrSweOrTurOrUrdOrZho;
}
export interface Demonyms {
  eng: EngOrFra;
  fra: EngOrFra;
}
export interface EngOrFra {
  f: string;
  m: string;
}
export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}
export interface Gini {
  2014: number;
}
export interface Car {
  signs?: string[] | null;
  side: string;
}
export interface FlagsOrCoatOfArms {
  png: string;
  svg: string;
}
export interface CapitalInfo {
  latlng?: number[] | null;
}
