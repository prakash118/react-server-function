'use server';
import { GenderOption, User } from '@/types/user';
import users from '@/app/api/users/users-data.json';

export const getAllUsers = async ({
  searchText,
  gender,
}: {
  searchText: string;
  gender: GenderOption;
}) => {
  const filteredUsers = (users as User[]).filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    return (
      (!searchText || fullName.includes(searchText.toLowerCase())) &&
      (gender === 'Both' || user.gender === gender)
    );
  });
  return filteredUsers;
};
