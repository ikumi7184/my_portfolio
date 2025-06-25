import "./App.css";
import Blogpage from "./components/Blogpage";
import QwQrcode from "./components/QwQrcode";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/blog" element={<Blogpage />}></Route>
          <Route path="/qw_qrcode" element={<QwQrcode />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
