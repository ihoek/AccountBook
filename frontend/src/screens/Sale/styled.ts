import { StyleSheet } from "react-native";
import { colors } from "../../styles/theme";

const EXPENSE_RED = "#FF6B6B";
const INCOME_GREEN = colors.green200;

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
    gap: 14,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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

  // ── 요약 카드 ─────────────────────────────────────────────
  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  summaryItem: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  summaryDivider: {
    width: 1,
    height: 36,
    backgroundColor: colors.border,
  },
  summaryLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  summaryAmount: {
    fontSize: 15,
    fontWeight: "700",
  },
  incomeColor: {
    color: INCOME_GREEN,
  },
  expenseColor: {
    color: EXPENSE_RED,
  },

  // ── 지출 비율 ─────────────────────────────────────────────
  manageBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  manageBtnText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  ratioBar: {
    flexDirection: "row",
    height: 14,
    borderRadius: 7,
    overflow: "hidden",
  },
  ratioSegment: {
    height: "100%",
  },
  ratioSegmentFirst: {
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  ratioSegmentLast: {
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  legendList: {
    gap: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  legendName: {
    flex: 1,
    fontSize: 13,
    color: colors.textPrimary,
    fontWeight: "500",
  },
  legendAmount: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  legendPct: {
    fontSize: 12,
    color: colors.textSecondary,
    width: 36,
    textAlign: "right",
  },

  // ── 거래 내역 ─────────────────────────────────────────────
  txGroup: {
    gap: 8,
  },
  txDateLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.textSecondary,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  txItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 4,
  },
  txIconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  txInfo: {
    flex: 1,
    gap: 2,
  },
  txName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  txMemo: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  txAmount: {
    fontSize: 14,
    fontWeight: "700",
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

  // ── 거래 추가 모달 ────────────────────────────────────────
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
    paddingBottom: 36,
    paddingTop: 12,
    gap: 16,
  },
  modalHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
    alignSelf: "center",
    marginBottom: 4,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  typeRow: {
    flexDirection: "row",
    gap: 8,
  },
  typeBtn: {
    flex: 1,
    height: 42,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
  },
  typeBtnExpense: {
    backgroundColor: EXPENSE_RED,
    borderColor: EXPENSE_RED,
  },
  typeBtnIncome: {
    backgroundColor: INCOME_GREEN,
    borderColor: INCOME_GREEN,
  },
  typeBtnText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textSecondary,
  },
  typeBtnTextActive: {
    color: colors.white100,
  },
  formLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textSecondary,
    marginBottom: 8,
  },
  catScroll: {
    flexGrow: 0,
  },
  catChip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    marginRight: 8,
  },
  catChipText: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.textSecondary,
  },
  catChipTextActive: {
    color: colors.white100,
    fontWeight: "700",
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    backgroundColor: colors.background,
    paddingHorizontal: 14,
    height: 50,
    gap: 4,
  },
  currencySign: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  amountInput: {
    flex: 1,
    fontSize: 20,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  memoInput: {
    height: 46,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    color: colors.textPrimary,
    backgroundColor: colors.background,
  },
  saveBtn: {
    height: 52,
    backgroundColor: colors.green200,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  saveBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.white100,
  },

  // ── 항목 관리 모달 ────────────────────────────────────────
  manageOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  manageModal: {
    backgroundColor: colors.white100,
    borderRadius: 20,
    padding: 20,
    width: "100%",
    maxHeight: "80%",
    gap: 14,
  },
  manageCatList: {
    maxHeight: 200,
  },
  manageCatItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  manageCatDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  manageCatName: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    color: colors.textPrimary,
  },
  addCatSection: {
    gap: 10,
    paddingTop: 4,
  },
  addCatTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.textSecondary,
  },
  addCatInput: {
    height: 44,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    color: colors.textPrimary,
    backgroundColor: colors.background,
  },
  colorRow: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  colorSwatch: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  colorSwatchSelected: {
    borderWidth: 3,
    borderColor: colors.textPrimary,
  },
  addCatBtn: {
    height: 44,
    backgroundColor: colors.green200,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  addCatBtnText: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.white100,
  },
});
