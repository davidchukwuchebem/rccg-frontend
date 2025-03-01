import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faShare, faTimes } from "@fortawesome/free-solid-svg-icons";

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/kJQP7kiw5Fk",
];

export default function Message() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideo("");
  };

  return (
    <>
      {/* Grid Cards */}
      <p className="text-[35px] text-center py-5 text-gray-400 font-bold">
        MESSAGES
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full">
        {videos.map((video, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-lg bg-white p-4"
          >
            <img
              className="w-full h-48 object-cover rounded"
              src="/img.jpg"
              alt="Thumbnail"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                Community Bible Study
              </h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
                explicabo fugit eos doloremque
              </p>
              <button
                onClick={() => openModal(video)}
                className="bg-blue-800 me-2 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded shadow-lg shadow-blue-700"
              >
                <FontAwesomeIcon icon={faPlay} />
              </button>
              <a
                href={video}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded shadow-lg shadow-blue-700"
              >
                <FontAwesomeIcon icon={faShare} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-5 w-11/12 md:w-3/4 lg:w-1/2">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 text-2xl"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="relative w-full aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 md:h-96 rounded-lg"
                src={`${currentVideo}?autoplay=1`}
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
