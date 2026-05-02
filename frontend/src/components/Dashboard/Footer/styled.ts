import { StyleSheet } from "react-native";
import { colors } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white100,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingBottom: 20,
    paddingTop: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  label: {
    fontSize: 10,
    color: colors.textSecondary,
  },
  labelActive: {
    color: colors.green200,
    fontWeight: "600",
  },
});
