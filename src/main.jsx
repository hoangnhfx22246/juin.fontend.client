import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { injectStore } from "./util/setupInterceptors";
import { Toaster } from "sonner";

injectStore(store); // Truyền store vào trước khi App chạy

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster richColors closeButton />
      <App />
    </Provider>
  </StrictMode>
);
