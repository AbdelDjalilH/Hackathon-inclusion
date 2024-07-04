import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App-style">
      <Navbar />
      <Outlet />
    </div>
  );
}
export default App;

