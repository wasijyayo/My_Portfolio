import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AllProjects } from "./pages/AllProjects";
import { Career } from "./pages/Career";
import { Events } from "./pages/Events";
import { TechStack } from "./pages/TechStack";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/career" element={<Career />} />
      <Route path="/events" element={<Events />} />
      <Route path="/tech-stack" element={<TechStack />} />
    </Routes>
  );
}

export default App;
