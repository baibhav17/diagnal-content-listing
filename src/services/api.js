import { BASE_URL } from "../utils/constant";

export const fetchData = async (page) => {
  const response = await fetch(`${BASE_URL}/data/page${page}.json`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return await response.json();
};
