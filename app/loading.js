import Spinner from "./utilities/spinner";
export default function Loading() {
  return (
    <div className="w-[500px] mt-5 mx-auto text-center min-h-[calc(100vh-200px)] flex gap-1 justify-center text-green font-bold font-mono">
      <div className="flex justify-start">
        <span>ŁADOWANIE </span> <Spinner />
      </div>
    </div>
  );
}
