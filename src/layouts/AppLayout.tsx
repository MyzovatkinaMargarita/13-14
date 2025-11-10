import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <header>Платформа тестирования</header>
      <main style={{ padding: 24 }}>
        <Outlet />
      </main>
      <footer>© 2025</footer>
    </>
  );
}
