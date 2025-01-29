import 'server-only';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { UsersClient } from './users.client';

export default function UsersServer() {
  const getAllUsers = async () => {
    const res = await fetch('http://localhost:3000/api/users', {
      cache: 'force-cache',
    });
    return await res.json();
  };

  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersClient usersPromise={getAllUsers()} />
      </Suspense>
    </ErrorBoundary>
  );
}
