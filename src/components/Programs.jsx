import React from "react";

export default function Programs() {
  return (
    <>
      <div className="mt-5">
        <p className="text-[35px] text-center py-5 text-gray-400 font-bold">
          OUR PROGRAMS
        </p>
        <div className="m- grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="rounded overflow-hidden shadow-lg bg-white p-4"
              >
                <img
                  className="w-full h-48 object-cover rounded"
                  src="/img.jpg"
                  alt="Card Image"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    Community Bible Study
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iure explicabo fugit eos doloremque
                  </p>
                  <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded shadow-lg shadow-blue-700">
                    Discover
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
