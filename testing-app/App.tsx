/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Headline = styled.h1`
  color: #0e8e86;
  font-size: 24px;
  text-align: center;
  margin-top: 40px;
`;


const Title = styled.h1`
  color: ${(p) => p.theme.colors.primary};
`;


export default function App() {
  return <Headline>Тестирование</Headline>;
}

import LoginPage from "./pages/login/LoginPage";
export default function App() {
  return <LoginPage />;
}
