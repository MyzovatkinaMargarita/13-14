import styled from "@emotion/styled";
const HeaderBar = styled.header`
  background: ${(p) => p.theme.colors.primary};
  color: white;
  padding: 16px 24px;
  font-weight: 500;
`;
export const Header = () => <HeaderBar>Платформа тестирования</HeaderBar>;
В pages/login/LoginPage.tsx:
import { Header } from "../../components/Header";
export default function LoginPage() {
  return (
    <>
      <Header />
      <div style={{ padding: "24px" }}>Страница входа</div>
    </>
  );
}
