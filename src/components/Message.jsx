import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import Message from "../../src/components/Message";

export default function Sermons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    preacher: "",
    date: "",
    description: "",
    videoLink: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    try {
      const response = await fetch(
        "https://rccg-backend.vercel.app/createSermon",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to create sermon");

      setSuccess("Sermon created successfully!");
      setIsModalOpen(false);
      setFormData({
        title: "",
        preacher: "",
        date: "",
        description: "",
        videoLink: "",
      }); // Reset form
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Open Video Modal
  const openVideoModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsVideoModalOpen(true);
  };

  // Close Video Modal
  const closeVideoModal = () => {
    setSelectedVideo("");
    setIsVideoModalOpen(false);
  };

  // Function to extract the embeddable video URL
  const getEmbedUrl = (url) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("vimeo.com")) {
      const videoId = url.split("/").pop();
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return "";
  };

  return (
    <>
      {/* Sermons Section */}
      <section className="flex items-center rounded-[5px] justify-between bg-white shadow-md p-4">
        <div className="text-[20px] text-center text-gray-400 font-bold">
          SERMONS
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative py-2 px-3 cursor-pointer rounded-full hover:bg-gray-200"
        >
          <FontAwesomeIcon className="text-gray-600" icon={faPlus} />
        </button>
      </section>

      {/* Messages Section */}
      <Message />

      {/* Modal for Creating a Sermon */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Create New Sermon</h3>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Sermon Title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="preacher"
                placeholder="Preacher"
                value={formData.preacher}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="date"
                name="date"
                placeholder="Date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="videoLink"
                placeholder="YouTube/Vimeo Link"
                value={formData.videoLink}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Sermon"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-2xl shadow-lg relative">
            <button
              onClick={closeVideoModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <h3 className="text-xl font-bold mb-4">Sermon Video</h3>
            <div className="relative w-full h-0 pb-[56.25%]">
              {selectedVideo ? (
                <iframe
                  src={getEmbedUrl(selectedVideo)}
                  title="Sermon Video"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <p className="text-gray-500">No video available</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Example List of Sermons */}
      <section className="mt-4 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-lg font-semibold mb-2">Recent Sermons</h2>
        <ul>
          <li
            onClick={() =>
              openVideoModal("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            }
            className="cursor-pointer text-blue-600 hover:underline"
          >
            Example Sermon - Click to Watch
          </li>
        </ul>
      </section>
    </>
  );
}
