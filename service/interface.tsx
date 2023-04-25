export interface IDataWeather {
  location: {
    "name": string; // cidade
    "country": string; //país
    "localtime": string; //horario local
    "region": string;
  },
  current: {
    "humidity": number; //humidade
    "wind_kph": number; //velocidade do vento
    "wind_dir": number; //direcao do vento
    "vis_km": number;
    "is_day": number;
    "feelslike_c": number; // sensação termica C
    "feelslike_f": number; // sensação termica F
    "temp_c": number; //temperatura em c
    "temp_f": number; //temperatura em c
    "condition": {
      "text": string; // situacao
      "icon": string; // situacao icon
    },
  },
  forecast: {
    "forecastday": [{
      "astro": {
        "sunrise": string,
        "sunset": string,
        "moonrise": string,
        "moonset": string,
    }}
  ]}
// - Visibilidade;
// - Horário de nascer do sol;
// - Horário de por do sol;
}