import { StyleSheet } from "react-native";
import { colors } from "../../../styles/theme";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white100,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  monthTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  todayButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colors.green200,
  },
  todayButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.green200,
  },
  weekRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  weekDay: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 4,
  },
  weekDayText: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.textSecondary,
  },
  weekDayTextSun: {
    color: colors.sunday,
  },
  weekDayTextSat: {
    color: colors.saturday,
  },
  daysGrid: {
    gap: 2,
  },
  dayRow: {
    flexDirection: "row",
  },
  dayCell: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 6,
  },
  dayCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  dayCircleToday: {
    backgroundColor: colors.green200,
  },
  dayText: {
    fontSize: 14,
    color: colors.textPrimary,
  },
  dayTextSun: {
    color: colors.sunday,
  },
  dayTextSat: {
    color: colors.saturday,
  },
  dayTextToday: {
    color: colors.white100,
    fontWeight: "700",
  },
  dayTextOther: {
    color: colors.textMuted,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.green200,
    marginTop: 2,
  },
  dotHidden: {
    opacity: 0,
  },
});
