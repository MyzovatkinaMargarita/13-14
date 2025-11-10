import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import LoginPage from "../pages/login/LoginPage";
import StudentPage from "../pages/student/StudentPage";
import AdminPage from "../pages/admin/AdminPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // родитель с макетом и <Outlet />
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "student", element: <StudentPage /> },
      { path: "admin", element: <AdminPage /> },
    ],
  },
]);
