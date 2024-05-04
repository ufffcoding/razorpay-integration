import { Outlet } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
