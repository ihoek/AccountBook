import { HomeContainer, HomeContent } from "./HomeStyled";

const Home = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <h1>💰 가계부 메인 화면</h1>
        <p>가계부 관리 시스템에 오신 것을 환영합니다!</p>
        <div style={{ marginTop: "32px" }}>
          <h2>주요 기능</h2>
          <ul style={{ textAlign: "left", lineHeight: "2" }}>
            <li>📊 정산 - 수입과 지출을 관리하세요</li>
            <li>💳 카드 - 카드 내역을 확인하세요</li>
            <li>⚙️ 설정 - 앱 설정을 변경하세요</li>
          </ul>
        </div>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
