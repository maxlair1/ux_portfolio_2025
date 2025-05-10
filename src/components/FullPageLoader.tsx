// components/FullPageLoader.tsx
const FullPageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
    <p className="text-lg animate-pulse">Loading page...</p>
  </div>
);

export default FullPageLoader;
