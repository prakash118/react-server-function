import users from './users-data.json';

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export async function GET() {
  await sleep(1000);

  return new Response(JSON.stringify(users, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
