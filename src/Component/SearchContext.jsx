import React, { createContext, useState } from 'react';

const SearchContext = createContext({ searchQuery: '', setSearchQuery: () => {} });

const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const updateSearchQuery = (newQuery) => {
    setSearchQuery(newQuery);
  };
  return (
    <SearchContext.Provider value={{ searchQuery, updateSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };