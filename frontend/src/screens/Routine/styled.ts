import { StyleSheet } from "react-native";
import { colors } from "../../styles/theme";

export const styles = StyleSheet.create({
  // ── 레이아웃 ───────────────────────────────────────────────
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
    paddingBottom: 120,
    gap: 12,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  // ── 공통 카드 ──────────────────────────────────────────────
  card: {
    backgroundColor: colors.white100,
    borderRadius: 16,
    padding: 18,
    gap: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  emptyText: {
    fontSize: 13,
    color: colors.textMuted,
    textAlign: "center",
    paddingVertical: 12,
  },

  // ── 기간 탭 ───────────────────────────────────────────────
  periodRow: {
    flexDirection: "row",
    backgroundColor: colors.white100,
    borderRadius: 12,
    padding: 4,
    gap: 4,
  },
  periodTab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 9,
    alignItems: "center",
  },
  periodTabActive: {
    backgroundColor: colors.green200,
  },
  periodTabText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textSecondary,
  },
  periodTabTextActive: {
    color: colors.white100,
  },

  // ── 일 뷰 ─────────────────────────────────────────────────
  dayItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: colors.background,
  },
  dayItemDone: {
    opacity: 0.5,
  },
  dayItemTime: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.textSecondary,
    width: 38,
  },
  dayItemDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dayItemTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  dayItemTitleDone: {
    textDecorationLine: "line-through",
    color: colors.textMuted,
  },
  checkBox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },

  // ── 주 뷰 ─────────────────────────────────────────────────
  weekRow: {
    flexDirection: "row",
  },
  weekCol: {
    flex: 1,
    alignItems: "center",
    gap: 6,
  },
  weekDayLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.textSecondary,
  },
  weekDayLabelToday: {
    color: colors.green200,
  },
  weekDateBadge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  weekDateBadgeToday: {
    backgroundColor: colors.green200,
  },
  weekDateText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  weekDateTextToday: {
    color: colors.white100,
  },
  weekDots: {
    gap: 3,
    alignItems: "center",
  },
  weekDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  weekDotMore: {
    fontSize: 9,
    color: colors.textMuted,
  },

  // ── 월 뷰 ─────────────────────────────────────────────────
  monthHeader: {
    flexDirection: "row",
  },
  monthHeaderLabel: {
    flex: 1,
    textAlign: "center",
    fontSize: 11,
    fontWeight: "700",
    color: colors.textSecondary,
  },
  monthGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  monthCell: {
    width: `${100 / 7}%`,
    alignItems: "center",
    paddingVertical: 4,
    gap: 2,
  },
  monthDateBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  monthDateBadgeToday: {
    backgroundColor: colors.green200,
  },
  monthDateText: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.textPrimary,
  },
  monthDateTextToday: {
    color: colors.white100,
    fontWeight: "700",
  },
  monthDots: {
    flexDirection: "row",
    gap: 2,
    justifyContent: "center",
    height: 8,
  },
  monthDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },

  // ── 루틴 목록 ─────────────────────────────────────────────
  routineItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: 10,
  },
  routineColorBar: {
    width: 4,
    height: 44,
    borderRadius: 2,
  },
  routineIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  routineInfo: {
    flex: 1,
    gap: 2,
  },
  routineTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  routineSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  routineDesc: {
    fontSize: 11,
    color: colors.textMuted,
  },
  routineActions: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },

  // ── FAB ───────────────────────────────────────────────────
  fab: {
    position: "absolute",
    bottom: 90,
    right: 20,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.green200,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },

  // ── 모달 ──────────────────────────────────────────────────
  modalWrap: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalSheet: {
    backgroundColor: colors.white100,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 12,
    maxHeight: "90%",
  },
  modalHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
    alignSelf: "center",
    marginBottom: 8,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.textPrimary,
  },

  // ── 폼 ────────────────────────────────────────────────────
  formLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textSecondary,
    marginBottom: 8,
  },
  formInput: {
    height: 46,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    color: colors.textPrimary,
    backgroundColor: colors.background,
    marginBottom: 16,
  },

  // 반복 주기
  freqRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
  },
  freqChip: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
  },
  freqChipActive: {
    backgroundColor: colors.green200,
    borderColor: colors.green200,
  },
  freqChipText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textSecondary,
  },
  freqChipTextActive: {
    color: colors.white100,
  },

  // 요일 선택
  weekdayRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 16,
  },
  weekdayChip: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
  },
  weekdayChipActive: {
    backgroundColor: colors.green200,
    borderColor: colors.green200,
  },
  weekdayChipText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textSecondary,
  },
  weekdayChipTextActive: {
    color: colors.white100,
  },

  // 알림 토글
  notificationRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  // 색상
  colorRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
    flexWrap: "wrap",
  },
  colorSwatch: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  colorSwatchSelected: {
    borderWidth: 3,
    borderColor: colors.textPrimary,
  },

  // 아이콘
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  iconChip: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },

  // 저장 버튼
  saveBtn: {
    height: 52,
    backgroundColor: colors.green200,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  saveBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.white100,
  },
});
