import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f7fa;
  padding: 32px;
  overflow-y: auto;
`;

export const HomeContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;

  h1 {
    font-size: 32px;
    margin-bottom: 16px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 24px;
    color: #667eea;
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 16px;
      color: #555;
    }
  }
`;
