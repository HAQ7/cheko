import React, { createContext, useContext, useState } from 'react';

// Define the search context interface
interface SearchContextValue {
  searchTerm: string;
  filterTerm: string;
  setSearchTerm: (term: string) => void;
  setFilterTerm: (term: string) => void;
  clearSearch: () => void;
  clearFilter: () => void;
  clearAll: () => void;
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

// Props interface for the provider
interface SearchProviderProps {
  children: React.ReactNode;
}

// Search provider component
export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterTerm, setFilterTerm] = useState<string>('');

  const clearSearch = () => {
    setSearchTerm('');
  };

  const clearFilter = () => {
    setFilterTerm('');
  };

  const clearAll = () => {
    setSearchTerm('');
    setFilterTerm('');
  };

  const value: SearchContextValue = {
    searchTerm,
    filterTerm,
    setSearchTerm,
    setFilterTerm,
    clearSearch,
    clearFilter,
    clearAll,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the search context
export const useSearch = (): SearchContextValue => {
  const context = useContext(SearchContext);
  
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  
  return context;
};
