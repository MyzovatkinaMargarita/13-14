import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import LoginPage from "../pages/login/LoginPage";
import StudentPage from "../pages/student/StudentPage";
import AdminPage from "../pages/admin/AdminPage";
import NotFoundPage from "../pages/errors/NotFoundPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, 
    errorElement: <NotFoundPage />, 
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "student", element: <StudentPage /> },
      { path: "admin", element: <AdminPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
