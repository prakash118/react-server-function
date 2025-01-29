'use client';

import { createContext, useContext, useState } from 'react';
import Search from '../components/search';
import Toggle from '../components/toggle';
import { GenderOption } from '@/types/user';

interface FilterOptionContextProps {
  searchText: string;
  setSearchText: (s: string) => void;
  gender: GenderOption;
  setGender: (x: GenderOption) => void;
}

const FilterOptionContext = createContext<FilterOptionContextProps | undefined>(
  undefined
);

export default function FilterOptionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchText, setSearchText] = useState('');
  const [gender, setGender] = useState<GenderOption>('Both');
  return (
    <FilterOptionContext.Provider
      value={{ searchText, setSearchText, gender, setGender }}
    >
      <div className="m-4">
        <div className="flex justify-center gap-4 mb-4">
          <Search />
          <Toggle />
        </div>
        {children}
      </div>
    </FilterOptionContext.Provider>
  );
}

export function useFilterOptionContext() {
  const context = useContext(FilterOptionContext);
  if (!context) {
    throw new Error(
      'useFilterOptionContext must be used within a FilterOptionContext'
    );
  }
  return context;
}
