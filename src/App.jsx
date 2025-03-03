import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "../pages/Home";
import Sermon from "../pages/Sermon";
import Global from "../pages/Global";
import About from "../pages/About";
import Ministers from "../pages/Ministers";
import Minister from "../pages/Minister";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sermons" element={<Sermon />} />
        <Route path="/about" element={<About />} />
        <Route path="/global" element={<Global />} />
        <Route path="/pastors" element={<Ministers />} />
        <Route path="/minister" element={<Minister />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
