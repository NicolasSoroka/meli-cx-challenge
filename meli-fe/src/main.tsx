import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import { ROUTES } from "./constants/routes";
import ReactQueryProvider from "./providers/index";
import PurchasePage from "./pages/PurchasePage";

const router = createBrowserRouter([
  {
    path: ROUTES.HOMEPAGE_URL,
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: ROUTES.PROFILE_URL,
    element: (
      <Layout>
        <ProfilePage />
      </Layout>
    ),
  },
  {
    path: `${ROUTES.PURCHASES_URL}/:purchaseId`,
    element: (
      <Layout>
        <PurchasePage />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <RouterProvider router={router} />
    </ReactQueryProvider>
  </React.StrictMode>
);
