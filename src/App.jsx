import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Routers from "./Routers";

function App() {
  return (
    <>
      <div className="container  px-5 mx-auto max-w-5xl">
        <ScrollToTop />
        <Routers />
      </div>

      <Toaster
        toastOptions={{
          style: {
            fontSize: window.innerWidth < 640 ? "13px" : "14px",
            padding: window.innerWidth < 640 ? "8px 12px" : "10px 16px",
            maxWidth: "90vw",
          },
        }}
      />
    </>
  );
}

export default App;
