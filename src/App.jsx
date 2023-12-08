import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import SearchUser from "./pages/SearchUser";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import { GlobalStyles } from "./asset/global/GlobalStyles";
import { ThemeContext, ThemeProvider } from "styled-components";
import { useState } from "react";
import FindPcRoom from "./pages/FindPcRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "search-user/:name/:tag",
        element: <SearchUser />
      },
      {
        path: "find-pcroom",
        element: <FindPcRoom/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/create-account",
    element: <CreateAccount />
  }
])



export default function App() {
  const [isDark, setDrak] = useState(false)
  return (
    <ThemeContext.Provider value={{ isDark, setDrak }}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}