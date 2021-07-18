import { GET_CFS_API_KEY, GET_CFS_API_URL } from "../utils/panic";

const BASE_URL = GET_CFS_API_URL();
const API_KEY = GET_CFS_API_KEY();

export async function Request<T>(
  urlMaker: (base_url: string) => string
): Promise<T> {
  const url = urlMaker(BASE_URL);

  const response = await fetch(url, {
    headers: { "x-api-key": API_KEY },
  });

  const json = await response.json();

  return json;
}
