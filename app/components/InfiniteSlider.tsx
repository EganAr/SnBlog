export default function InfiniteSlider() {
  return (
    <>
      <div className="flex overflow-hidden space-x-4 ">
        <div className="flex gap-x-4 animate-loop-scroll text-gray-400">
          <h1 className="bg-gray-900 rounded-md w-20 h-6 text-center">HTML</h1>
          <h1 className="bg-gray-900 rounded-md w-20 h-6 text-center">CSS</h1>
          <h1 className="bg-gray-900 rounded-md w-20 h-6 text-center text-xs">
            Javascript
          </h1>
          <h1 className="bg-gray-900 rounded-md w-20 h-6 text-center text-xs">
            Typescript
          </h1>
        </div>
        <div className="flex gap-x-4 animate-loop-scroll text-gray-400">
          <h1 className="bg-gray-900 rounded-md w-20 h-6 text-center">HTML</h1>
          <h1 className="bg-gray-900 rounded-md w-20 h-6 text-center">CSS</h1>
          <h1 className="bg-gray-900 rounded-md w-20 h-6 text-center text-xs">
            Javascript
          </h1>
          <h1 className="bg-gray-900 rounded-md w-20 h-6 text-center text-xs">
            Typescript
          </h1>
        </div>
      </div>
    </>
  );
}
