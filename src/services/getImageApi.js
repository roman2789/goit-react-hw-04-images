import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29463027-4abcfc2db99f2732a8383a5f8';

export const getImages = async (query, page) => {
  const images = await axios.get(`${BASE_URL}?`, {
    params: {
      q: query,
      page: page,
      key: API_KEY,
      per_page: 12,
      orientation: 'horizontal',
    },
  });
  return images.data;
};
