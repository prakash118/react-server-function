'use server';
import 'server-only';
import { GetAllUsersFunc } from '@/types/user';


export const getAllUsers: GetAllUsersFunc = async () => {
  const res = await fetch('http://localhost:3000/api/users', {
    cache: 'force-cache',
  });
  return await res.json();
};
