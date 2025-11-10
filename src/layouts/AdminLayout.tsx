// src/layouts/AdminLayout.tsx
import { Outlet } from "react-router-dom";
export default function AdminLayout() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", minHeight: "100vh" }}>
      <aside style={{ borderRight: "1px solid #eee", padding: 16 }}>Сайдбар</aside>
      <section style={{ padding: 24 }}><Outlet /></section>
    </div>
  );
}
import StudentLayout from "../layouts/StudentLayout";
import AdminLayout from "../layouts/AdminLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      {
        path: "student",
        element: <StudentLayout />,
        children: [
          { index: true, element: <h2>Student Dashboard</h2> },
          { path: "tests", element: <h2>Student Tests</h2> },
        ],
      },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <h2>Admin Dashboard</h2> },
          { path: "settings", element: <h2>Admin Settings</h2> },
        ],
      }
    ],
  },
]);


