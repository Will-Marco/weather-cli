import axios from "axios";
import { DATA_LIB, getKeyValue } from "./storage.service.js";

const getWeather = async (city) => {
  const token = process.env.TOKEN ?? (await getKeyValue(DATA_LIB.token));

  if (!token) {
    throw new Error("API dosn't exist, -t: [API_KEY] for saving token ");
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "en",
        units: "metric",
      },
    }
  );

  return data;
};

export { getWeather };
