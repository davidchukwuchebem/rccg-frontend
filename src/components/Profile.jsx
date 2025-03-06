import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <>
      <div className="bg-gray-950 my-5 text-white  border-gray-400 border-8  p-6 md:p-12 flex flex-col-reverse md:flex-row items-center gap-6">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our Pastors
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Austin Ukporhe is the Point man (Resident Pastor) Remnant Christian
            Network, Lagos chapter. Raised in the Northern city of Sokoto, Rev
            Austin was trained in the peculiar firebrand evangelism of Nigeria's
            Christian North and was ordained as a Pastor in 2001. He has
            experienced countless and diverse workings of the faithfulness of
            God for over 17 years.
          </p>
          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-white shadow-lg shadow-gray-50 text-blue-900 font-semibold py-2 px-4 rounded hover:bg-gray-200">
              Read Full Profile
            </button>
            <button className="bg-white shadow-lg shadow-gray-50 text-blue-900 font-semibold py-2 px-4 rounded hover:bg-gray-200">
              <Link to="/pastors">Meet All Pastors</Link>
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/img.jpg"
            alt="Pastor Austin Ukporhe"
            className="w-full max-w-xs md:max-w-sm object-cover"
          />
        </div>
      </div>
    </>
  );
}
