import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Backdrop from "./components/Backdrop";
import { useState } from "react";

function App() {
  const router = useRoutes(routes);
  const [isSideOpen, setIsSideOpen] = useState(false);

  const sideBarHandler = () => {
    setIsSideOpen((prevState) => !prevState);
  };

  return (
      <div className="w-full h-screen overflow-x-hidden">
        <Sidebar isOpen={isSideOpen} onSidebar={sideBarHandler} />
        <Header onSidebar={sideBarHandler} />
        {router}
        {isSideOpen && <Backdrop onUserClick={sideBarHandler} />}
      </div>
  );
}

export default App;
