import Message from "../src/components/Message";
import { useState } from "react";

export default function Sermon() {
  const [searchQuery, setSearchQuery] = useState("");

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
          <h1 className="text-4xl font-bold text-white">Sermons</h1>
        </div>
      </div>

      {/* Search Input */}
      <div className="p-6 flex justify-center">
        <input
          type="text"
          placeholder="Search sermons..."
          className=" w-full mx-2 p-3 bg-gray-300 shadow-lg rounded-[5px] mb-4 outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Message searchQuery={searchQuery} />
    </>
  );
}
