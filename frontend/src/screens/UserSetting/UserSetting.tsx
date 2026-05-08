import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/Dashboard/Header/Header";
import Footer from "../../components/Dashboard/Footer/Footer";
import { styles } from "./styled";

const UserSetting = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleLocalLogin = () => {
    // TODO: 로컬 로그인 로직 연결
    console.log("로컬 로그인:", email, password);
  };

  const handleGoogleLogin = () => {
    // TODO: 구글 OAuth 연결
    console.log("구글 로그인 시도");
  };

  const handleKakaoLogin = () => {
    // TODO: 카카오 OAuth 연결
    console.log("카카오 로그인 시도");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Header />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* 로컬 로그인 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>로그인</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>이메일</Text>
            <TextInput
              style={styles.input}
              placeholder="이메일을 입력하세요"
              placeholderTextColor="#C7C7CC"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>비밀번호</Text>
            <View style={styles.passwordWrapper}>
              <TextInput
                style={styles.passwordInput}
                placeholder="비밀번호를 입력하세요"
                placeholderTextColor="#C7C7CC"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setShowPassword((prev) => !prev)}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color="#8E8E93"
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLocalLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>로그인</Text>
          </TouchableOpacity>
        </View>

        {/* 구분선 */}
        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>또는 소셜 계정으로 로그인</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* 소셜 로그인 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>소셜 로그인</Text>

          <TouchableOpacity
            style={[styles.socialButton, styles.googleButton]}
            onPress={handleGoogleLogin}
            activeOpacity={0.8}
          >
            <View style={styles.socialIconBox}>
              <Text style={styles.googleIcon}>G</Text>
            </View>
            <Text style={[styles.socialButtonText, styles.googleText]}>
              Google로 계속하기
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialButton, styles.kakaoButton]}
            onPress={handleKakaoLogin}
            activeOpacity={0.8}
          >
            <View style={styles.socialIconBox}>
              <Text style={styles.kakaoIcon}>K</Text>
            </View>
            <Text style={[styles.socialButtonText, styles.kakaoText]}>
              카카오로 계속하기
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Footer initialTab="account" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default UserSetting;
