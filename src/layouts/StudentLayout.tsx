import { Outlet } from "react-router-dom";
export default function StudentLayout() {
  return (
    <div style={{ display: "grid", gridTemplateRows: "auto 1fr", minHeight: "100vh" }}>
      <header style={{ background: "#0e8e86", color: "#fff", padding: 16 }}>
        Зона студента
      </header>
      <main style={{ padding: 24 }}><Outlet /></main>
    </div>
  );
}
