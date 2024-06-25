const API_KEY = 'mOdej6IedIyggX1NzTZdxPLVtTQNBhsTDoz3bVMS';
const API_URL = 'https://api.nasa.gov/planetary/apod';

const getAPOD = async (urlParams?: string) => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${
        urlParams && urlParams.length > 0 ? urlParams : ''
      }`,
    );
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    console.error('Error fetching data from NASA API', error);
    return Promise.reject(error);
  }
};

export default getAPOD;
