import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <div className=" hidden -z-40 md:flex bg-black justify-center  h-screen w-full items-center top-0 left-0 md:z-[100] text-white md:fixed">
      Works only on Phones.
    </div>
      <Toaster />
      <Outlet />
    </>
  );
}

export default App;
