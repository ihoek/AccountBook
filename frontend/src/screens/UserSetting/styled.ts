import { StyleSheet } from "react-native";
import { colors } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
    marginTop: -50,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 96,
    gap: 12,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  // 섹션 카드
  section: {
    backgroundColor: colors.white100,
    borderRadius: 16,
    padding: 20,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.textPrimary,
  },

  // 입력 필드
  inputGroup: {
    gap: 6,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.textSecondary,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    color: colors.textPrimary,
    backgroundColor: colors.background,
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    backgroundColor: colors.background,
    paddingHorizontal: 14,
  },
  passwordInput: {
    flex: 1,
    fontSize: 15,
    color: colors.textPrimary,
  },
  eyeButton: {
    padding: 4,
  },

  // 로그인 버튼
  loginButton: {
    height: 50,
    backgroundColor: colors.green200,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.white100,
  },

  // 구분선
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    gap: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    fontSize: 12,
    color: colors.textMuted,
    textAlign: "center",
  },

  // 소셜 버튼 공통
  socialButton: {
    height: 52,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 12,
  },
  socialIconBox: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  socialButtonText: {
    fontSize: 15,
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
    marginRight: 28,
  },

  // 구글
  googleButton: {
    backgroundColor: colors.white100,
    borderWidth: 1,
    borderColor: colors.border,
  },
  googleIcon: {
    fontSize: 18,
    fontWeight: "800",
    color: "#4285F4",
  },
  googleText: {
    color: colors.textPrimary,
  },

  // 카카오
  kakaoButton: {
    backgroundColor: "#FEE500",
  },
  kakaoIcon: {
    fontSize: 18,
    fontWeight: "800",
    color: "#3C1E1E",
  },
  kakaoText: {
    color: "#3C1E1E",
  },
});
