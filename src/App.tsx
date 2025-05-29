import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { router } from "./routes";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "./toastStyles.css";

function App() {
  return (
    <>
      <ToastContainer
        toastClassName="custom-toast"
        className="custom-toast-container"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
