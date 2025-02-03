import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'virtual:generated-pages-react';

// Loading Component
const Loading = () => (
  <div className="min-h-screen flex justify-center items-center bg-gray-900">
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div>
      <p className="text-white text-xl font-semibold">Loading...</p>
    </div>
  </div>
);

const App = () => {
  const routing = useRoutes(routes);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        {routing}
      </Suspense>
    </div>
  );
};

export default App;
