import "./App.css";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
