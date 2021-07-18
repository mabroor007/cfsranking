export function GET_CFS_API_URL() {
  const BASE_URL = process.env.NEXT_PUBLIC_CFS_API_URL;
  if (BASE_URL) return BASE_URL;
  throw new Error(`Invalid Url for CFS Api Found {${BASE_URL}}`);
}

export function GET_CFS_API_KEY() {
  const KEY = process.env.NEXT_PUBLIC_CFS_API_KEY;
  if (KEY) return KEY;
  throw new Error(`Invalid Api key for CFS Api Found {${KEY}}`);
}
