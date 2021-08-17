export class CountryResponse {
  countries: CountryKey[]
}

class CountryKey {
  id: number;
  name: string;
  country: string;
  coord: CountryCoord;
}

class CountryCoord {
  lat: number;
  lon: number;
}
