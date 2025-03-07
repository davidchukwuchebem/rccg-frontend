import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const token = localStorage.getItem("token"); // Retrieve the token

    try {
      const response = await fetch("https://rccg-backend.vercel.app/addAdmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Attach token to request
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to add admin");

      const newAdmin = await response.json();
      setAdmins([...admins, newAdmin]); // Update Admin List
      setIsModalOpen(false); // Close Modal
      setFormData({ firstName: "", lastName: "", email: "", password: "" }); // Reset Form
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();
  const [admins, setAdmins] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch admin users (dummy data for now)
  useEffect(() => {
    setAdmins([
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ]);
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="flex items-center rounded-[5px] justify-between bg-white shadow-md p-4">
        <div className="text-[20px] text-center text-gray-400 font-bold">
          ADMINS
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative py-2 px-3 cursor-pointer rounded-full hover:bg-gray-200"
        >
          <FontAwesomeIcon className="text-gray-600" icon={faPlus} />
        </button>
      </section>
      <div className="flex-1 overflow-y-auto mt-5 px-6 pb-6">
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Admin Management
          </h2>

          {/* Admin List */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2 text-left">Name</th>
                  <th className="border border-gray-300 p-2 text-left">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => (
                  <tr key={admin.id} className="hover:bg-gray-100">
                    <td className="border border-gray-300 p-2">{admin.name}</td>
                    <td className="border border-gray-300 p-2">
                      {admin.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Admin Button */}
          <button
            className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-blue-700"
            onClick={() => setIsModalOpen(true)}
          >
            Add New Admin
          </button>
        </section>

        {/* Modal for Adding Admin */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Add New Admin</h3>

              {error && <p className="text-red-500">{error}</p>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
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
                    {loading ? "Adding..." : "Add Admin"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
