export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        textAlign: "center",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ fontSize: "6rem", margin: 0 }}>404</h1>
      <p style={{ fontSize: "1.5rem", marginTop: 8 }}>Страница не найдена</p>
    </div>
  );
}
