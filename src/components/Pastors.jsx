import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faArrowRight,
  faPlay,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const pastors = [
  {
    id: 1,
    title: "Apostle",
    name: "Pastor Adeboye",
  },
  {
    id: 2,
    title: "Rev",
    name: "Pastor Kumuyi",
  },
  {
    id: 3,
    title: "Rev",
    name: "Pastor Oyedepo",
  },
  {
    id: 4,
    title: "Apostle",
    name: "Pastor Ibiyeomie",
  },
];

export default function Pastors({ searchQuery = "" }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  // Filter sermons based on search query
  const filteredSermons = pastors.filter(
    (sermon) =>
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.name.toLowerCase().includes(searchQuery.toLowerCase())
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
      {/* Pastors List */}
      <div className="grid grid-cols-1 my-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {filteredSermons.length > 0 ? (
          filteredSermons.map((sermon) => (
            <div
              key={sermon.id}
              className="rounded overflow-hidden shadow-lg text-center bg-white p-4 "
            >
              <div className="flex justify-center">
                <img
                  className="w-[150px] h-[150px] object-cover rounded-[50%]"
                  src="/img.jpg"
                  alt="Thumbnail"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-2">{sermon.title}</p>
                <h2 className="text-xl text-gray-700 font-semibold mb-2">
                  {sermon.name}
                </h2>
                <Link className="text-gray-700 mb-2" to="/minister">
                  View Profile
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">No sermons found.</p>
        )}
      </div>
    </>
  );
}
