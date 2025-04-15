/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import App from "./App.tsx";
import { UserProvider } from "./contexts/UserContext.tsx";

const root = document.getElementById("root");

render(
  () => (
    <UserProvider>
      <App />
    </UserProvider>
  ),
  root!,
);
