import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/theme";
import { styles } from "./styled";

type RoutineStatus = "done" | "pending";

type RoutineItem = {
  id: string;
  title: string;
  time: string;
  status: RoutineStatus;
};

const SAMPLE_ROUTINES: RoutineItem[] = [
  { id: "1", title: "아침 스킨케어", time: "07:00 완료", status: "done" },
  { id: "2", title: "수분 섭취", time: "08:00 완료", status: "done" },
  { id: "3", title: "저녁 스킨케어", time: "21:00 예정", status: "pending" },
];

const TodayRoutine = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>오늘 루틴 현황</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.sectionLink}>전체 보기</Text>
        </TouchableOpacity>
      </View>

      {SAMPLE_ROUTINES.map((item) => {
        const isDone = item.status === "done";
        return (
          <View key={item.id} style={styles.card}>
            <View style={[styles.checkbox, isDone ? styles.checkboxDone : styles.checkboxPending]}>
              {isDone && (
                <Ionicons name="checkmark" size={16} color={colors.white100} />
              )}
            </View>
            <View style={styles.contentCol}>
              <Text style={[styles.title, isDone && styles.titleDone]}>
                {item.title}
              </Text>
              <Text style={styles.subText}>{item.time}</Text>
            </View>
            <Text style={[styles.statusText, isDone ? styles.statusDone : styles.statusPending]}>
              {isDone ? "완료" : "예정"}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default TodayRoutine;
