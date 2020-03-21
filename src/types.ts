export interface Location {
  lat: number;
  lng: number;
}

export interface Countrycode {
  iso2: string;
  iso3: string;
}

export interface Covid19Informations {
  provincestate?: string;
  countryregion: string;
  lastupdate: Date;
  location: Location;
  countrycode: Countrycode;
  confirmed: number;
  deaths: number;
  recovered: number;
}

export interface GlobalBrief {
  confirmed: number;
  deaths: number;
  recovered: number;
}
