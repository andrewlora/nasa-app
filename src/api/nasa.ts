import {API_URL, API_KEY} from '@env';
const getAPOD = async (urlParams?: string) => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${urlParams && urlParams.length > 0 ? urlParams : ''}`,
    );
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    console.error('Error fetching data from NASA API', error);
    return Promise.reject(error);
  }
};

export default getAPOD;
