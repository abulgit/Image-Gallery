
export const Skeleton = () => {
  return (
    <div className="rounded-lg relative bg-gray-200 overflow-hidden h-[400px] w-full animate-pulse">
      <div className="absolute inset-0 w-full h-full bg-gray-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <div className="h-5 bg-gray-400 rounded w-3/4" />
      </div>
    </div>
  );
}; 