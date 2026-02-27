import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <div className="  flex bg-black justify-center m-auto w-full items-center  text-white ">
    
      <Toaster />
      <Outlet />
      </div>
    </>
  );
}

export default App;
