import { Link } from "react-router-dom";
export default function Minister() {
  return (
    <>
      <div className="container mt-10 mx-auto px-6 py-10">
        {/* Logo & Name Section */}
        <div className="flex mx-6 flex-col md:flex-row items-center justify-between mb-10">
          {/* Full Name */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-bold text-blue-900 uppercase">
              Pastor Adeboye Enoch Adejare
            </h1>
          </div>

          {/* Logo */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/img.jpg"
              alt="Pastor EA Adeboye"
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-[50%]"
            />
          </div>
        </div>

        {/* About the Church Section */}
        <div className="bg-gay-100 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">About</h2>

          <p className="text-gray-700 leading-relaxed">
            In the forefront of missionary activity out of Africa, Enoch Adeboye
            has achieved, through various global Christian ministries and social
            organs, a great following for Christ Jesus. He sees the local church
            as one of the focal points of Christian discipleship, and thus plans
            to have an RCCG branch 5 minutes from every home in the world. In
            furtherance of this goal, he oversees a network of over 40,000
            parish-churches in 186 nations of the world. In the United States,
            there are over 600 several RCCG branches, the largest concentrations
            being in the states of Maryland, Texas, Illinois, California, and
            Washington D.C. Formerly a mathematics professor at the University
            of Lagos, Nigeria, he started working with the founder of RCCG by
            translating his sermons from Yoruba to the English language. The
            leadership mantle fell on Pastor Enoch Adeboye in 1981, and since
            then, RCCG has experienced phenomenal growth and success, converting
            multitudes to Christ. In recognition of his contribution as a global
            icon and preacher of God’s Word, he was selected in 2008 as one of
            the world’s 50 most influential people by Newsweek magazine, USA.
            Born on March 2, 1942 into a humble family in the village of
            Ifewara, Osun State, located in the South-Western part of Nigeria.
            His poor family background seemed at first glance capable of
            confining him to a life of lack. Brilliant, calm and reticent, his
            early teachers had little doubt that the lad had a scholarly aura
            and was cut for academia. The bruising truth was that Enoch’s tall
            ambition to pursue a career in academia was irreconcilable with the
            abject poverty of his family. Not to be deterred, his parents sold a
            few cherished possessions and borrowed from kind neighbors just to
            ensure that their son’s dream was not held back.
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
    </>
  );
}
