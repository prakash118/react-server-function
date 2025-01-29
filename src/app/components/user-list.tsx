import { GenderOption, User } from '@/types/user';

interface UserListProps {
  users: User[];
  filterOptions: {
    searchText: string;
    gender: GenderOption;
  };
}

export default function UserList({
  users,
  filterOptions: { searchText, gender },
}: UserListProps) {
  const filteredUsers = (users || []).filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    return (
      (!searchText || fullName.includes(searchText.toLowerCase())) &&
      (gender === 'Both' || user.gender === gender)
    );
  });

  if (!filteredUsers.length) return <li>No users available</li>;

  return (
    <div className="grid grid-cols-2 gap-2">
      {filteredUsers.map((user) => (
        <div
          key={user.id}
          className="block max-w-60 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {user.first_name} {user.last_name}
          </h5>
        </div>
      ))}
    </div>
  );
}
