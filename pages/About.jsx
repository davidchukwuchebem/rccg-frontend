import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Logo & Name Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        {/* Full Name */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-blue-900 uppercase">
            The Redeemed Christian Church of God Ota
          </h1>
        </div>

        {/* Logo */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/rccg.png"
            alt="RCCG Logo"
            className="w-48 md:w-56 lg:w-64"
          />
        </div>
      </div>

      {/* About the Church Section */}
      <div className="bg-gay-100 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          About RCCG Ota
        </h2>

        <p className="text-gray-700 leading-relaxed">
          In July 1909, a son was born into the Akindayomi family of Ondo State
          of Nigeria. Even though this child grew up surrounded by idol
          worshippers, he knew there existed a greater power and yearned to
          know, “The God who created the earth and everyone on it”. This pursuit
          for God led him to the Church Missionary Society where he was baptized
          in 1927. Still spiritually unfulfilled, he joined the Cherubim and
          Seraphim church in 1931. Whilst there, he began to hear a voice within
          him saying, “You will be my servant.” Since this was not his
          intention, he decided to ignore the voice. This went on for seven
          years during which all the business ventures that he tried resulted
          into failure. In debt and without peace of mind, he found himself
          totally dependent on the grace of God. Here marked the beginning of a
          definite relationship with God.Totally broken, he yielded saying,
          “Lord, I will go wherever you want me to go.”{" "}
          <Link to="https://eaadeboye.com/about/" className="text-blue-600">
            {" "}
            Read more
          </Link>
        </p>
      </div>

      {/* Google Maps Location */}
      {/* <div className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          RCCG Global Center Location
        </h2>
        <div className="w-full h-80">
          <iframe
            title="RCCG Global Center Location"
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.51210922647!2d3.318595702734368!3d6.524379253203932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d4452f4410b%3A0x80bc5a3c5d66f81!2sThe%20Redeemed%20Christian%20Church%20of%20God!5e0!3m2!1sen!2sng!4v1647887605139!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div> */}
    </div>
  );
}
