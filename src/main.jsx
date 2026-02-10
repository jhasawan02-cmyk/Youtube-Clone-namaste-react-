import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoWatch from "./Components/VideoWatch.jsx";
import Body from "./Components/Body.jsx";
import MainContainer from "./Components/MainContainer.jsx";
import Header from "./Components/Header.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <VideoWatch />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  </Provider>
);
