import Hero from "../src/components/Hero";
// import Programs from "../components/Programs";
import Profile from "../src/components/Profile";
import Message from "../src/components/Message";
// import Newsletter from "../components/Newsletter";
import About from "./About";

export default function Home() {
  return (
    <>
      <div className="mt-15">
        <Hero />
        {/* <Programs /> */}
        <p className="text-[35px] text-center py-5 text-gray-400 font-bold">
          ABOUT US
        </p>
        <About />
        <Profile />
        <p className="text-[35px] text-center py-5 text-gray-400 font-bold">
          MESSAGES
        </p>
        {/* <Message /> */}
      </div>
    </>
  );
}
