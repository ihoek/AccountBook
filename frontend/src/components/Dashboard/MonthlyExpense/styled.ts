import { StyleSheet } from "react-native";
import { colors } from "../../../styles/theme";

export const styles = StyleSheet.create({
  section: {
    gap: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  sectionLink: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  card: {
    backgroundColor: colors.white100,
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  col: {
    flex: 1,
    gap: 6,
  },
  divider: {
    width: 1,
    backgroundColor: colors.border,
    marginHorizontal: 20,
  },
  colLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  amount: {
    fontSize: 22,
    fontWeight: "700",
  },
  amountIncome: {
    color: colors.textPrimary,
  },
  amountExpense: {
    color: "#FF453A",
  },
  trend: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  trendText: {
    fontSize: 12,
  },
  trendUp: {
    color: colors.green200,
  },
  trendDown: {
    color: "#FF453A",
  },
  trendLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});
