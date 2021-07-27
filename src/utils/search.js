import { useEffect, useState, createContext } from 'react';
import { SEARCH_API } from '@utils/tmdb';
import axios from '@utils/axios';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState(null);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    function handleSearch() {
      const fetchUrl = SEARCH_API + searchString;
      axios
        .get(fetchUrl)
        .then((response) => {
          setSearchResults(response.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (searchString) {
      handleSearch();
    }
  }, [searchString]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchString }}>
      {children}
    </SearchContext.Provider>
  );
};
