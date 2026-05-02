import { StyleSheet } from "react-native";
import { colors } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green200,
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 36,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  appName: {
    color: colors.white100,
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  bellButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 13,
    marginBottom: 10,
  },
  greeting: {
    color: colors.white100,
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 6,
  },
  schedule: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 14,
  },
});
