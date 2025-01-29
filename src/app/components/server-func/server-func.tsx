import FilterOptionProvider from '@/app/context/filter-option-provider';
import Users from './users';

export default function ServerFunc() {
  return (
    <div>
      <FilterOptionProvider>
        <Users />
      </FilterOptionProvider>
    </div>
  );
}
