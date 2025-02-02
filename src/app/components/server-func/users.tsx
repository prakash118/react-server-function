'use client';
import { useEffect, useState, useTransition } from 'react';
import { User } from '@/types/user';
import { getAllUsers } from './actions';
import { useFilterOptionContext } from '@/app/context/filter-option-provider';

export default function Users() {
  const { searchText, gender } = useFilterOptionContext();
  const [users, setUsers] = useState<User[] | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const data = await getAllUsers({ searchText, gender });
      setUsers(data);
    });
  }, [gender, searchText]);

  return (
    <div className="grid grid-cols-2 gap-2">
      {isPending || users === null ? (
        <div>Loading...</div>
      ) : users.length === 0 ? (
        <div className="w-full col-span-2 text-center pt-4">No users available</div>
      ) : (
        users.map((user) => (
          <div
            key={user.id}
            className="block max-w-60 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {user.first_name} {user.last_name}
            </h5>
          </div>
        ))
      )}
    </div>
  );
}
