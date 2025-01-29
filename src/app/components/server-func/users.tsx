'use client';

import { useEffect, useState, useTransition } from 'react';
import { User } from '@/types/user';
import { getAllUsers } from './actions';
import { useFilterOptionContext } from '@/app/context/filter-option-provider';
import UserList from '../user-list';

export default function Users() {
  const { searchText, gender } = useFilterOptionContext();
  const [users, setUsers] = useState<User[] | undefined>(undefined);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const data = await getAllUsers();
      setUsers(data);
    });
  }, []);

  if (isPending || !users) return <div>Loading...</div>;
  return <UserList users={users} filterOptions={{ searchText, gender }} />;
}
