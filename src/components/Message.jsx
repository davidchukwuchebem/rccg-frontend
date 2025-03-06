import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faShare, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Message({ searchQuery = "" }) {
  const [sermons, setSermons] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  useEffect(() => {
    const fetchSermons = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = searchQuery
          ? `https://rccg-backend.vercel.app/getSermonsByQuery?query=${searchQuery}`
          : "https://rccg-backend.vercel.app/getAllSermons";

        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setSermons(data.sermons);
        } else {
          throw new Error(data.message || "Failed to fetch sermons.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSermons();
  }, [searchQuery]);

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
      {/* Loading and Error States */}
      {loading && (
        <p className="text-center text-gray-500">Loading sermons...</p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Sermon List */}
      <div className="grid grid-cols-1 my-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full">
        {!loading && !error && sermons.length > 0
          ? sermons.map((sermon) => (
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
          : !loading &&
            !error && (
              <p className="text-center text-gray-500 text-lg">
                No sermons found.
              </p>
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
