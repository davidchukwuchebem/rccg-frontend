export default function Newsletter() {
  return (
    <>
      <div className="bg-white text-center py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Join Our Community
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-6">
          Get the latest updates about our programs, blogs, and other
          public-related activities.
        </p>

        {/* Email Subscription Form */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
