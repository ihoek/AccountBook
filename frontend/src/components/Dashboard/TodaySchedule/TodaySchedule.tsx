import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../styles/theme";
import { styles } from "./styled";

type ScheduleType = "routine" | "expense";

type ScheduleItem = {
  id: string;
  time: string;
  title: string;
  description: string;
  type: ScheduleType;
  tags: string[];
};

const TYPE_CONFIG: Record<ScheduleType, { dot: string; bg: string; text: string; label: string }> = {
  routine: {
    dot: colors.green200,
    bg: colors.green100,
    text: colors.green200,
    label: "루틴",
  },
  expense: {
    dot: "#F2994A",
    bg: "#FEF3E8",
    text: "#F2994A",
    label: "지출",
  },
};

const SAMPLE_SCHEDULES: ScheduleItem[] = [
  {
    id: "1",
    time: "07:00",
    title: "아침 스킨케어",
    description: "세안 → 토너 → 에센스 → 선크림",
    type: "routine",
    tags: ["피부관리", "15분"],
  },
  {
    id: "2",
    time: "08:30",
    title: "아침 식비",
    description: "편의점 — 8,500원",
    type: "expense",
    tags: ["식비"],
  },
  {
    id: "3",
    time: "12:00",
    title: "점심 식사",
    description: "한식당 — 12,000원",
    type: "expense",
    tags: ["식비"],
  },
  {
    id: "4",
    time: "21:00",
    title: "저녁 스킨케어",
    description: "클렌징 → 토너 → 앰플 → 수면팩",
    type: "routine",
    tags: ["피부관리", "20분"],
  },
];

const TodaySchedule = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>오늘 일정</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.sectionLink}>전체 보기</Text>
        </TouchableOpacity>
      </View>

      {SAMPLE_SCHEDULES.map((item) => {
        const config = TYPE_CONFIG[item.type];
        return (
          <View key={item.id} style={styles.card}>
            <View style={styles.timeCol}>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
            <View style={[styles.dot, { backgroundColor: config.dot }]} />
            <View style={styles.contentCol}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={[styles.badge, { backgroundColor: config.bg }]}>
                  <Text style={[styles.badgeText, { color: config.text }]}>
                    {config.label}
                  </Text>
                </View>
              </View>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.tagsRow}>
                {item.tags.map((tag) => (
                  <View key={tag} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default TodaySchedule;
