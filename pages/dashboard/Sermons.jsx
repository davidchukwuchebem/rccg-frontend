import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Message from "../../src/components/Message";

export default function Sermons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    minister: "",
    link: "",
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
        minister: "",
        date: "",
        description: "",
        link: "",
      }); // Reset form
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
                name="minister"
                placeholder="minister"
                value={formData.minister}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="link"
                placeholder="YouTube/Vimeo Link"
                value={formData.link}
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
    </>
  );
}
