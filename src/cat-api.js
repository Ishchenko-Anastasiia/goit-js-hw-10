export function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com';
  const API_KEY ='live_eY7uZA0V6lz1nEBQxtdbXb7Vqlcd0HRi86atSBXRKFY1Ee91kedefMWMinETDUVA';

  return fetch(`${BASE_URL}/breeds?api-key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com';
  const API_KEY ='live_eY7uZA0V6lz1nEBQxtdbXb7Vqlcd0HRi86atSBXRKFY1Ee91kedefMWMinETDUVA';

  return fetch(
    `${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
}