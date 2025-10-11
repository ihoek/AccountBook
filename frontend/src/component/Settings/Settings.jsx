import { SettingsContainer, SettingsContent } from "./SettingsStyled";

const Settings = () => {
  return (
    <SettingsContainer>
      <SettingsContent>
        <h1>⚙️ 설정</h1>
        <p>앱 설정을 관리하는 페이지입니다.</p>
        <div style={{ marginTop: "32px" }}>
          {/* 여기에 설정 기능 추가 */}
          <p>설정 기능을 개발 중입니다...</p>
        </div>
      </SettingsContent>
    </SettingsContainer>
  );
};

export default Settings;
