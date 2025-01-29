import FilterOptionProvider from '@/app/context/filter-option-provider';
import UsersServer from './users.server';

export default function ServerClient() {
  return (
    <div>
      <FilterOptionProvider>
        <UsersServer />
      </FilterOptionProvider>
    </div>
  );
}
