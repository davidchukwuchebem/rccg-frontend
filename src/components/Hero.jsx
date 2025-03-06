import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "img.jpg",
    title: "Welcome to RCCG Love Chapel Ota",
    description:
      "We are a ministry with a single-minded focus on restoring the prayer commission of the church.",
  },
  {
    image: "rccg.png",
    title: "Join Our Worship Services",
    description:
      "Experience the power of prayer and uplifting worship every Sunday and Wednesday.",
  },
  {
    image: "sermon.avif",
    title: "Engage with the Community",
    description:
      "We are here to help you grow spiritually and connect with a loving church family.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  const nextSlide = () =>
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  const togglePause = () => setIsPaused((prev) => !prev);

  return (
    <>
      {/* Hero Section */}
      <section className="hero1 w-full py-5 h-72 flex flex-col items-center bg-white justify-center text-center">
        <div>
          <p className="text-[20px] text-gray-400 font-bold">Welcome to </p>
          <h1 className="text-[55px] text-gray-500 font-bold mb-4">
            RCCG Ota
            <br />
          </h1>
          <span className="text-blue-800 font-bold">
            Grace and Truth Youths and Young Adults Church Ota (Reg 44)
          </span>
          <h3 className="font-bold text-2xl text-orange-600 mb-4">
            (The Love Chapel)
          </h3>
          <div className="flex space-x-4 items-center justify-center mt-4">
            <button className="px-6 font-bold text-sm py-3 bg-blue-800 text-white rounded-lg shadow-lg shadow-blue-900 hover:bg-blue-600">
              STREAM LIVE
            </button>
            <button className="px-6 font-bold text-sm py-3 bg-gray-200 text-gray-700 rounded-lg shadow-lg shadow-gray-400 hover:bg-gray-300">
              <Link to="/about">KNOW MORE</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="relative w-full h-[500px] my-5 flex flex-col items-center justify-center text-center text-white px-6 overflow-hidden">
        {/* Image Wrapper with Border */}
        <div className="absolute inset-0 w-full h-full border-[8px] border-gray-700 overflow-hidden transition-opacity duration-1000">
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.image}
              alt=""
              aria-hidden={i !== index}
              className={`absolute inset-0 w-full h-full object-cover rounded-[8px] transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-left max-w-3xl px-6 transition-all duration-1000 transform">
          <h1
            className={`text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${
              index % 2 === 0
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {slides[index].title}
          </h1>
          <p
            className={`text-lg md:text-xl max-w-2xl text-white mb-6 transition-all duration-1000 ${
              index % 2 === 0
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {slides[index].description}
          </p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={togglePause}
          className="absolute left-6 top-[85%] transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-600"
        >
          {isPaused ? (
            <FontAwesomeIcon icon={faPlay} />
          ) : (
            <FontAwesomeIcon icon={faPause} />
          )}
        </button>
        <button
          onClick={prevSlide}
          className="absolute right-20 top-[85%] transform -translate-y-1/2 px-5 py-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-600"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-[85%] transform -translate-y-1/2 px-5 py-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-600"
        >
          &#10095;
        </button>
      </section>
    </>
  );
}
