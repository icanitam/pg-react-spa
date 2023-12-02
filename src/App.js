import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Search from "./pages/Search";
import List from "./pages/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
