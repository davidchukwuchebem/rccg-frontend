import Hero from "../src/components/Hero";
import Programs from "../src/components/Programs";
import Profile from "../src/components/Profile";
import Message from "../src/components/Message";
import Newsletter from "../src/components/Newsletter";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Programs />
        <p className="text-[35px] text-center py-5 text-gray-400 font-bold">
          MESSAGES
        </p>
        <Message />
        <Newsletter />
      </div>
    </>
  );
}
