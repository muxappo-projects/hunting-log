import { BrowserRouter } from "react-router-dom";
import { LoadingProvider } from "./contexts/LoadingContext.jsx";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </BrowserRouter>
);
