import ServerClient from './components/server-client/server-client';
import ServerFunc from './components/server-func/server-func';

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-2 m-4">
      <div>
        <h2 className="text-xl text-center font-extrabold dark:text-white">
          Waterfall Rendering
        </h2>
        <ServerClient />
      </div>
      <div>
        <h2 className="text-xl text-center font-extrabold dark:text-white">
          Server Fucnction aka Action
        </h2>
        <ServerFunc />
      </div>
    </div>
  );
}
