import Header from "./components/Header";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        {/* About */}
        <Route path="/About" element={<About />} />
        {/* contact */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {console.log("inside JSX")}
    </Router>
  );
}

export default App;
