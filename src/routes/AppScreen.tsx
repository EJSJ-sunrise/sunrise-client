// src/routes/AppScreen.tsx
import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import AppPages from "./AppPages";

const ViewArea = styled.div`
  width: 600px;
  height: 100vh;
  background: #f5faff;
  margin: 0 auto; /* 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 세로 중앙 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
`;

const AppScreen: React.FC = () => {
  return (
    <ViewArea>
      <div className="flex flex-col h-screen border-x border-divider text-text">
        <BrowserRouter>
          <AppPages />
        </BrowserRouter>
      </div>
    </ViewArea>
  );
};

export default AppScreen;
