import { CardContainer, CardContent } from "./CardStyled";

const Card = () => {
  return (
    <CardContainer>
      <CardContent>
        <h1>💳 카드</h1>
        <p>카드 내역을 확인하는 페이지입니다.</p>
        <div style={{ marginTop: "32px" }}>
          {/* 여기에 카드 관리 기능 추가 */}
          <p>카드 관리 기능을 개발 중입니다...</p>
        </div>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
