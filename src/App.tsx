import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
    return (
        <>
        <div className="sticky top-0 z-50">
            <Navbar/>
        </div>
            <Outlet />
        </>
    );
}

export default App;
