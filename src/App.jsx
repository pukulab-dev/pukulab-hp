import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Questionnaire from "./pages/Questionnaire";
import Contact from "./pages/Contact";
import Experiments from "./pages/Experiments";
import About from "./pages/About";
import Secret from "./pages/Secret";
import Kanlog from "./pages/Kanlog";
import Game from "./pages/Game";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/apps/kanlog" element={<Kanlog />} />
      <Route path="/questionnaire" element={<Questionnaire />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/experiments" element={<Experiments />} />
      <Route path="/about" element={<About />} />
      <Route path="/secret" element={<Secret />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}