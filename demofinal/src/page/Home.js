import "./Home.css";
import MainHead from "../component/MainHead";
import Match from "../component/Match.js";

import Footer from "../component/Footer";

export default function Home() {
  return (
    <div className="body">
      <div className="App">
        <MainHead />
        <div className="main-content">
          <Match />
        </div>
        <Footer />
      </div>
    </div>
  );
}
