import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { LoadingProvider } from "./contexts/LoadingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoadingProvider>
    <App />
  </LoadingProvider>
);
