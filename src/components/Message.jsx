import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faShare, faTimes } from "@fortawesome/free-solid-svg-icons";

const sermons = [
  {
    id: 1,
    title: "The Power of Faith",
    preacher: "Pastor Adeboye",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Walking in the Spirit",
    preacher: "Pastor Kumuyi",
    video: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
  {
    id: 3,
    title: "The Purpose of Prayer",
    preacher: "Pastor Oyedepo",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    id: 4,
    title: "Overcoming Fear",
    preacher: "Pastor Ibiyeomie",
    video: "https://www.youtube.com/embed/kJQP7kiw5Fk",
  },
];

export default function Message({ searchQuery = "" }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  // Filter sermons based on search query
  const filteredSermons = sermons.filter(
    (sermon) =>
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      {/* Sermon List */}
      <div className="grid grid-cols-1 my-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full">
        {filteredSermons.length > 0 ? (
          filteredSermons.map((sermon) => (
            <div
              key={sermon.id}
              className="rounded overflow-hidden shadow-lg bg-white p-4"
            >
              <img
                className="w-full h-48 object-cover rounded"
                src="/img.jpg"
                alt="Thumbnail"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{sermon.title}</h2>
                <p className="text-gray-700 mb-4">By {sermon.preacher}</p>
                <button
                  onClick={() => openModal(sermon.video)}
                  className="bg-blue-800 me-2 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded shadow-lg shadow-blue-700"
                >
                  <FontAwesomeIcon icon={faPlay} />
                </button>
                <a
                  href={sermon.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded shadow-lg shadow-blue-700"
                >
                  <FontAwesomeIcon icon={faShare} />
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">No sermons found.</p>
        )}
      </div>

      {/* Video Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black opacity-[95%] z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-600 text-2xl"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="relative bg-white rounded-lg p-5 w-11/12 md:w-3/4 lg:w-1/2">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
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
