'use client';

import { use } from 'react';
import { User } from '@/types/user';
import { useFilterOptionContext } from '@/app/context/filter-option-provider';
import UserList from '../user-list';

export function UsersClient({
  usersPromise,
}: {
  usersPromise: Promise<User[]>;
}) {
  const { searchText, gender } = useFilterOptionContext();

  const users = use(usersPromise);
  return <UserList users={users} filterOptions={{ searchText, gender }} />;
}
