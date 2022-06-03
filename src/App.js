import "./App.css";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import { Route } from "react-router-dom";
import RequireAuth from "./hoc/RequireAuth";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/feed"
          element={
            <RequireAuth>
              <Feed />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
