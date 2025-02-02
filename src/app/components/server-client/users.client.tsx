'use client';
import { use } from 'react';
import { User } from '@/types/user';
import { useFilterOptionContext } from '@/app/context/filter-option-provider';

export function UsersClient({
  usersPromise,
}: {
  usersPromise: Promise<User[]>;
}) {
  const { searchText, gender } = useFilterOptionContext();
  const users = use(usersPromise);
  const filteredUsers = users.filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    return (
      (!searchText || fullName.includes(searchText.toLowerCase())) &&
      (gender === 'Both' || user.gender === gender)
    );
  });

  return (
    <div className="grid grid-cols-2 gap-2">
      {!filteredUsers.length ? (
        <div className="w-full col-span-2 text-center pt-4">
          No users available
        </div>
      ) : (
        filteredUsers.map((user) => (
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
