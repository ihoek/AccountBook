import * as React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/theme";
import { styles } from "./styled";

type StatItem = {
  icon: keyof typeof Ionicons.glyphMap;
  value: string;
  label: string;
};

const STATS: StatItem[] = [
  { icon: "apps-outline", value: "4", label: "오늘 일정" },
  { icon: "timer-outline", value: "3/5", label: "루틴 달성" },
  { icon: "card-outline", value: "261만", label: "이번달 지출" },
];

const QuickStats = () => {
  return (
    <View style={styles.row}>
      {STATS.map((stat) => (
        <View key={stat.label} style={styles.card}>
          <View style={styles.iconWrap}>
            <Ionicons name={stat.icon} size={18} color={colors.green200} />
          </View>
          <Text style={styles.value}>{stat.value}</Text>
          <Text style={styles.label}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default QuickStats;
