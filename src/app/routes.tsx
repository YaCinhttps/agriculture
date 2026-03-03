import { createBrowserRouter } from "react-router";
import Root from "./pages/root";
import Dashboard from "./pages/dashboard";
import History from "./pages/history";
import About from "./pages/about";
import Profile from "./pages/profile";
import SignIn from "./pages/signin";
import NotFound from "./pages/not-found";
import LandDashboard from "./pages/land-dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "history", Component: History },
      { path: "about", Component: About },
      { path: "profile", Component: Profile },
      { path: "land-dashboard", Component: LandDashboard },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/signin",
    Component: SignIn,
  },
]);