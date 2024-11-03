import React, { Suspense } from 'react'; // Keep this import, remove any duplicate React imports (T_T)

// Remove the static import of Home (T_T) 
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <>
      {/* Wrap Home in Suspense for lazy loading (T_T) */}
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </>
  );
}

export default App;
