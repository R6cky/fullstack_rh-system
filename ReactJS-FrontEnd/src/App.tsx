import { Bounce, ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/Routesmain";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <RoutesMain />;
    </>
  );
}

export default App;
