import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1';

const fetchBreeds = async ({ pageParam = 0 }) => {
  const response = await axios.get(`${API_URL}/breeds?page=${pageParam}&limit=10`);
  const breeds = response.data;

  const breedImagesPromises = breeds.map(async (breed) => {
    const imagesResponse = await axios.get(`${API_URL}/images/search?breed_ids=${breed.id}`);
    const images = imagesResponse.data;
    return {
      ...breed,
      image: images[0]?.url || '',
    };
  });

  const breedImages = await Promise.all(breedImagesPromises);
  return {
    data: breedImages,
    nextPage: breeds.length === 10 ? pageParam + 1 : null,
  };
};

export const useBreedsQuery = () => {
  return useInfiniteQuery(['breeds'], fetchBreeds, {
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
  });
};