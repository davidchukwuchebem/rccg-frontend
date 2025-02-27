import { useState, useEffect } from "react";

const images = ["/images.jfif", "/images.jfif", "/images.jfif"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero1 w-full h-screen flex flex-col items-center justify-center text-center">
        <div className="">
          <h1 className="text-2xl md:text-4xl font-bold text- mb-4">
            Welcome to RCCG
            <br />{" "}
            <span className="text-blue-800">
              Grace and Truth Youths and Young Adults Church Ota (Reg 44)
            </span>
          </h1>
          <h3 className="font-bold text-2xl text-orange-600 mb-4">
            (The Love Chapel)
          </h3>
          {/* <p className="text-lg md:text-xl text-center max-w-2xl text- mb-6">
            We are a ministry with a single-minded focus on restoring the prayer
            commission of the church in fulfillment of Jesus' proclamation in
            Matthew 21:13: "My house shall be called the house of prayer."
          </p> */}
          <div className="flex space-x-4 items-center justify-center mt-4">
            <button className="px-6 font-bold text-sm py-3 bg-blue-800 text-white rounded-lg shadow-lg shadow-blue-800/50 hover:bg-blue-600">
              STREAM LIVE
            </button>
            <button className="px-6 font-bold text-sm py-3 bg-gray-200 text-gray-700 rounded-lg shadow-lg shadow-gray-200/50 hover:bg-gray-300">
              KNOW MORE
            </button>
          </div>
        </div>
      </section>
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white px-6 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 w-full h-full transition-opacity duration-1000">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Hero Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-left text-white mb-4">
            Welcome to RCCG Love Chapel Ota
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-left text-white mb-6">
            We are a ministry with a single-minded focus on restoring the prayer
            commission of the church in fulfillment of Jesus' proclamation in
            Matthew 21:13: "My house shall be called the house of prayer."
          </p>
          <div className="flex space-x-4">
            <button className="px-6 font-bold text-sm py-3 bg-blue-800 text-white rounded-lg shadow-lg shadow-blue-800/50 hover:bg-blue-600">
              STREAM LIVE
            </button>
            <button className="px-6 font-bold text-sm py-3 bg-gray-200 text-gray-700 rounded-lg shadow-lg shadow-gray-200/50 hover:bg-gray-300">
              KNOW MORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
