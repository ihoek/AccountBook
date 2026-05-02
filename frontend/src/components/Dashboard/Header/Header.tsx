import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BellIcon from "../../../assets/svgs/Bell";
import { styles } from "./styled";

const DAYS = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

const formatDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const day = DAYS[date.getDay()];
  return `${y}년 ${m}월 ${d}일 ${day}`;
};

const Header = () => {
  const today = new Date();

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.appName}>Daily Secretary</Text>
        <TouchableOpacity style={styles.bellButton} activeOpacity={0.7}>
          <BellIcon color="#FFFFFF" width={20} height={20} />
        </TouchableOpacity>
      </View>

      <Text style={styles.date}>{formatDate(today)}</Text>
      <Text style={styles.greeting}>안녕하세요, 김지수님</Text>
      <Text style={styles.schedule}>오늘 4개의 일정이 있어요</Text>
    </View>
  );
};

export default Header;
