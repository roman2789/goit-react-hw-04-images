import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from './AppStyled';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyles } from 'GlobalStyles';
import toast, { Toaster } from 'react-hot-toast';
import { getImages } from 'services/getImageApi';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { useState, useEffect } from 'react';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(1);
  const [error, setError] = useState(null);
  const [empty, setEmpty] = useState(false);

  const onSearchFormSubmit = searchQuery => {
    if (searchQuery === query) {
      return;
    }
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    setTotal(1);
    setLoading(false);
    setError(null);
    setEmpty(false);
  };
  const handleLoadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    getImages(query, page)
      .then(({ hits, total }) => {
        if (hits.length === 0) {
          setEmpty(true);
          return;
        }
        setPage(prevPage => prevPage);
        setImages(prevImages => [...prevImages, ...hits]);
        setTotal(total);
        setLoading(false);
      })

      .catch(error => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [query, page]);

  return (
    <Container>
      <GlobalStyles />
      <Toaster />
      <Searchbar onSubmit={onSearchFormSubmit} />
      {empty &&
        toast.error('Нажаль по цьому запиту нічого немає...(', {
          duration: 2000,
          position: 'top-right',
          id: ' ',
        })}

      <ImageGallery images={images} />

      {error && <>Вибачте, сталася помилка!</>}
      {loading && <Loader />}

      {!loading && images.length > 0 && total / 12 > page && (
        <Button onClick={handleLoadMoreBtn} />
      )}
    </Container>
  );
};
