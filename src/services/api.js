const BASE_URL = 'https://test.create.diagnal.com';

export const fetchData = async (page) => {
  const response = await fetch(`${BASE_URL}/data/page${page}.json`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return await response.json();
};
