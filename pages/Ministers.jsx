import Pastors from "./Pastors";
export default function Ministers() {
  return (
    <>
      <div
        className="relative h-72 w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/sermon.avif')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Pastors</h1>
        </div>
      </div>

      <Pastors />
    </>
  );
}
