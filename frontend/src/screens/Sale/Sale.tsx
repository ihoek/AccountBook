import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/Dashboard/Header/Header";
import Footer from "../../components/Dashboard/Footer/Footer";
import { styles } from "./styled";
import { colors } from "../../styles/theme";

// ── 타입 ────────────────────────────────────────────────────────────────────
type PeriodType = "month" | "week" | "day";

type Category = {
  id: string;
  name: string;
  color: string;
  icon: keyof typeof Ionicons.glyphMap;
};

type Transaction = {
  id: string;
  type: "income" | "expense";
  categoryId: string;
  amount: number;
  memo: string;
  date: Date;
};

// ── 상수 ────────────────────────────────────────────────────────────────────
const PRESET_COLORS = [
  "#FF6B6B", "#FF9F43", "#48CAE4", "#A29BFE",
  "#55EFC4", "#FD79A8", "#6C5CE7", "#00B894",
];

const DEFAULT_CATEGORIES: Category[] = [
  { id: "fixed",     name: "고정지출",  color: "#FF6B6B", icon: "home-outline" },
  { id: "food",      name: "식비",      color: "#FF9F43", icon: "restaurant-outline" },
  { id: "transport", name: "교통비",    color: "#48CAE4", icon: "car-outline" },
  { id: "shopping",  name: "쇼핑",      color: "#A29BFE", icon: "bag-outline" },
  { id: "health",    name: "의료/건강", color: "#55EFC4", icon: "medical-outline" },
  { id: "other",     name: "기타",      color: "#B2BEC3", icon: "ellipsis-horizontal-outline" },
];

const INCOME_META: Category = {
  id: "income", name: "수입", color: colors.green200, icon: "cash-outline",
};

// 오늘 기준 n일 전 Date 생성
const mkDate = (daysAgo: number, hour = 12): Date => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  d.setHours(hour, 0, 0, 0);
  return d;
};

const MOCK_TRANSACTIONS: Transaction[] = [
  { id: "t1",  type: "income",  categoryId: "income",    amount: 3200000, memo: "월급",      date: mkDate(8) },
  { id: "t2",  type: "expense", categoryId: "fixed",     amount: 650000,  memo: "월세",      date: mkDate(8, 9) },
  { id: "t3",  type: "expense", categoryId: "fixed",     amount: 42000,   memo: "통신비",    date: mkDate(7) },
  { id: "t4",  type: "expense", categoryId: "food",      amount: 15000,   memo: "점심",      date: mkDate(6) },
  { id: "t5",  type: "income",  categoryId: "income",    amount: 200000,  memo: "프리랜서",  date: mkDate(6, 15) },
  { id: "t6",  type: "expense", categoryId: "food",      amount: 32000,   memo: "저녁 외식", date: mkDate(5) },
  { id: "t7",  type: "expense", categoryId: "food",      amount: 8500,    memo: "편의점",    date: mkDate(4) },
  { id: "t8",  type: "expense", categoryId: "transport", amount: 1500,    memo: "버스",      date: mkDate(4, 8) },
  { id: "t9",  type: "expense", categoryId: "health",    amount: 15000,   memo: "약국",      date: mkDate(3) },
  { id: "t10", type: "expense", categoryId: "other",     amount: 25000,   memo: "미용실",    date: mkDate(2) },
  { id: "t11", type: "expense", categoryId: "shopping",  amount: 89000,   memo: "옷 구매",   date: mkDate(2, 14) },
  { id: "t12", type: "expense", categoryId: "food",      amount: 12000,   memo: "카페",      date: mkDate(1) },
  { id: "t13", type: "expense", categoryId: "food",      amount: 18000,   memo: "점심 식사", date: mkDate(1, 13) },
  { id: "t14", type: "expense", categoryId: "transport", amount: 12500,   memo: "택시",      date: mkDate(1, 22) },
  { id: "t15", type: "expense", categoryId: "food",      amount: 9500,    memo: "아침",      date: mkDate(0, 8) },
  { id: "t16", type: "income",  categoryId: "income",    amount: 50000,   memo: "용돈",      date: mkDate(0, 10) },
];

// ── 헬퍼 ────────────────────────────────────────────────────────────────────
const fmt = (n: number) => `₩${n.toLocaleString()}`;

const getWeekStart = (d: Date): Date => {
  const c = new Date(d);
  const day = c.getDay();
  c.setDate(c.getDate() + (day === 0 ? -6 : 1 - day));
  c.setHours(0, 0, 0, 0);
  return c;
};

const filterByPeriod = (txs: Transaction[], period: PeriodType): Transaction[] => {
  const now = new Date();
  if (period === "day") {
    const s = new Date(now); s.setHours(0, 0, 0, 0);
    const e = new Date(now); e.setHours(23, 59, 59, 999);
    return txs.filter(tx => tx.date >= s && tx.date <= e);
  }
  if (period === "week") {
    const s = getWeekStart(now);
    const e = new Date(s); e.setDate(e.getDate() + 6); e.setHours(23, 59, 59, 999);
    return txs.filter(tx => tx.date >= s && tx.date <= e);
  }
  return txs.filter(tx =>
    tx.date.getMonth() === now.getMonth() &&
    tx.date.getFullYear() === now.getFullYear()
  );
};

const txDateLabel = (date: Date): string => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const now = new Date();
  if (date.toDateString() === now.toDateString()) return "오늘";
  const yes = new Date(now); yes.setDate(yes.getDate() - 1);
  if (date.toDateString() === yes.toDateString()) return "어제";
  return `${date.getMonth() + 1}월 ${date.getDate()}일 (${days[date.getDay()]})`;
};

// ── 컴포넌트 ─────────────────────────────────────────────────────────────────
const Sale = () => {
  const [period, setPeriod] = React.useState<PeriodType>("month");
  const [transactions, setTransactions] = React.useState<Transaction[]>(MOCK_TRANSACTIONS);
  const [categories, setCategories] = React.useState<Category[]>(DEFAULT_CATEGORIES);

  // 거래 추가 모달
  const [addVisible, setAddVisible] = React.useState(false);
  const [txType, setTxType] = React.useState<"income" | "expense">("expense");
  const [txCategory, setTxCategory] = React.useState(DEFAULT_CATEGORIES[0].id);
  const [txAmount, setTxAmount] = React.useState("");
  const [txMemo, setTxMemo] = React.useState("");

  // 항목 관리 모달
  const [manageVisible, setManageVisible] = React.useState(false);
  const [newCatName, setNewCatName] = React.useState("");
  const [newCatColor, setNewCatColor] = React.useState(PRESET_COLORS[0]);

  // ── 파생 값 ────────────────────────────────────────────────────────────────
  const filtered = React.useMemo(
    () => filterByPeriod(transactions, period),
    [transactions, period]
  );

  const totalIncome = React.useMemo(
    () => filtered.filter(tx => tx.type === "income").reduce((s, tx) => s + tx.amount, 0),
    [filtered]
  );
  const totalExpense = React.useMemo(
    () => filtered.filter(tx => tx.type === "expense").reduce((s, tx) => s + tx.amount, 0),
    [filtered]
  );

  const categoryStats = React.useMemo(() => {
    const totals: Record<string, number> = {};
    filtered.filter(tx => tx.type === "expense").forEach(tx => {
      totals[tx.categoryId] = (totals[tx.categoryId] || 0) + tx.amount;
    });
    return categories
      .map(cat => ({
        ...cat,
        amount: totals[cat.id] || 0,
        pct: totalExpense > 0 ? Math.round(((totals[cat.id] || 0) / totalExpense) * 100) : 0,
      }))
      .filter(c => c.amount > 0)
      .sort((a, b) => b.amount - a.amount);
  }, [filtered, categories, totalExpense]);

  const grouped = React.useMemo(() => {
    const sorted = [...filtered].sort((a, b) => b.date.getTime() - a.date.getTime());
    const map: Record<string, Transaction[]> = {};
    sorted.forEach(tx => {
      const key = tx.date.toDateString();
      map[key] = map[key] || [];
      map[key].push(tx);
    });
    return Object.entries(map).map(([key, txs]) => ({
      label: txDateLabel(new Date(key)),
      txs,
    }));
  }, [filtered]);

  // ── 핸들러 ─────────────────────────────────────────────────────────────────
  const handleSaveTx = () => {
    const amt = parseInt(txAmount.replace(/[^0-9]/g, ""), 10);
    if (!amt || amt <= 0) return;
    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      type: txType,
      categoryId: txType === "income" ? "income" : txCategory,
      amount: amt,
      memo: txMemo.trim(),
      date: new Date(),
    };
    setTransactions(prev => [newTx, ...prev]);
    setTxAmount("");
    setTxMemo("");
    setAddVisible(false);
  };

  const handleAddCategory = () => {
    if (!newCatName.trim()) return;
    setCategories(prev => [
      ...prev,
      { id: `cat-${Date.now()}`, name: newCatName.trim(), color: newCatColor, icon: "pricetag-outline" },
    ]);
    setNewCatName("");
    setNewCatColor(PRESET_COLORS[0]);
  };

  const getCat = (id: string): Category =>
    id === "income" ? INCOME_META : (categories.find(c => c.id === id) ?? { ...DEFAULT_CATEGORIES[5], id });

  // ── 렌더 ───────────────────────────────────────────────────────────────────
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* 기간 탭 */}
        <View style={styles.periodRow}>
          {(["month", "week", "day"] as PeriodType[]).map(p => (
            <TouchableOpacity
              key={p}
              style={[styles.periodTab, period === p && styles.periodTabActive]}
              onPress={() => setPeriod(p)}
              activeOpacity={0.7}
            >
              <Text style={[styles.periodTabText, period === p && styles.periodTabTextActive]}>
                {p === "month" ? "월별" : p === "week" ? "주별" : "일별"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 수입 / 지출 / 잔액 요약 */}
        <View style={styles.card}>
          <View style={styles.summaryRow}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>수입</Text>
              <Text style={[styles.summaryAmount, styles.incomeColor]}>{fmt(totalIncome)}</Text>
            </View>
            <View style={styles.summaryDivider} />
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>지출</Text>
              <Text style={[styles.summaryAmount, styles.expenseColor]}>{fmt(totalExpense)}</Text>
            </View>
            <View style={styles.summaryDivider} />
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>잔액</Text>
              <Text style={[
                styles.summaryAmount,
                totalIncome - totalExpense >= 0 ? styles.incomeColor : styles.expenseColor,
              ]}>
                {fmt(totalIncome - totalExpense)}
              </Text>
            </View>
          </View>
        </View>

        {/* 지출 비율 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>지출 비율</Text>
            <TouchableOpacity
              style={styles.manageBtn}
              onPress={() => setManageVisible(true)}
              activeOpacity={0.7}
            >
              <Ionicons name="settings-outline" size={13} color={colors.textSecondary} />
              <Text style={styles.manageBtnText}>항목 관리</Text>
            </TouchableOpacity>
          </View>

          {categoryStats.length === 0 ? (
            <Text style={styles.emptyText}>이 기간의 지출 내역이 없어요</Text>
          ) : (
            <>
              {/* 비율 바 */}
              <View style={styles.ratioBar}>
                {categoryStats.map((cat, i) => (
                  <View
                    key={cat.id}
                    style={[
                      styles.ratioSegment,
                      { flex: cat.pct, backgroundColor: cat.color },
                      i === 0 && styles.ratioSegmentFirst,
                      i === categoryStats.length - 1 && styles.ratioSegmentLast,
                    ]}
                  />
                ))}
              </View>

              {/* 범례 */}
              <View style={styles.legendList}>
                {categoryStats.map(cat => (
                  <View key={cat.id} style={styles.legendItem}>
                    <View style={[styles.legendDot, { backgroundColor: cat.color }]} />
                    <Text style={styles.legendName} numberOfLines={1}>{cat.name}</Text>
                    <Text style={styles.legendAmount}>{fmt(cat.amount)}</Text>
                    <Text style={styles.legendPct}>{cat.pct}%</Text>
                  </View>
                ))}
              </View>
            </>
          )}
        </View>

        {/* 거래 내역 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>거래 내역</Text>
          {grouped.length === 0 ? (
            <Text style={styles.emptyText}>이 기간의 거래 내역이 없어요</Text>
          ) : (
            grouped.map(group => (
              <View key={group.label} style={styles.txGroup}>
                <Text style={styles.txDateLabel}>{group.label}</Text>
                {group.txs.map(tx => {
                  const cat = getCat(tx.categoryId);
                  return (
                    <View key={tx.id} style={styles.txItem}>
                      <View style={[styles.txIconCircle, { backgroundColor: cat.color }]}>
                        <Ionicons name={cat.icon} size={15} color="#fff" />
                      </View>
                      <View style={styles.txInfo}>
                        <Text style={styles.txName}>{cat.name}</Text>
                        {!!tx.memo && <Text style={styles.txMemo}>{tx.memo}</Text>}
                      </View>
                      <Text style={[
                        styles.txAmount,
                        tx.type === "income" ? styles.incomeColor : styles.expenseColor,
                      ]}>
                        {tx.type === "income" ? "+" : "-"}{fmt(tx.amount)}
                      </Text>
                    </View>
                  );
                })}
              </View>
            ))
          )}
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab} onPress={() => setAddVisible(true)} activeOpacity={0.85}>
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Footer initialTab="expense" />
      </View>

      {/* ── 거래 추가 모달 ──────────────────────────────────── */}
      <Modal visible={addVisible} animationType="slide" transparent statusBarTranslucent>
        <KeyboardAvoidingView
          style={styles.modalWrap}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <TouchableOpacity
            style={StyleSheet.absoluteFillObject}
            activeOpacity={1}
            onPress={() => setAddVisible(false)}
          />
          <View style={styles.modalSheet}>
            <View style={styles.modalHandle} />

            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>거래 추가</Text>
              <TouchableOpacity onPress={() => setAddVisible(false)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                <Ionicons name="close" size={22} color={colors.textPrimary} />
              </TouchableOpacity>
            </View>

            {/* 수입 / 지출 토글 */}
            <View style={styles.typeRow}>
              {(["expense", "income"] as const).map(t => (
                <TouchableOpacity
                  key={t}
                  style={[
                    styles.typeBtn,
                    txType === t && (t === "income" ? styles.typeBtnIncome : styles.typeBtnExpense),
                  ]}
                  onPress={() => setTxType(t)}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.typeBtnText, txType === t && styles.typeBtnTextActive]}>
                    {t === "income" ? "수입" : "지출"}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* 카테고리 (지출일 때만) */}
            {txType === "expense" && (
              <View>
                <Text style={styles.formLabel}>카테고리</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catScroll}>
                  {categories.map(cat => (
                    <TouchableOpacity
                      key={cat.id}
                      style={[
                        styles.catChip,
                        txCategory === cat.id && { backgroundColor: cat.color, borderColor: cat.color },
                      ]}
                      onPress={() => setTxCategory(cat.id)}
                      activeOpacity={0.7}
                    >
                      <Text style={[styles.catChipText, txCategory === cat.id && styles.catChipTextActive]}>
                        {cat.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}

            {/* 금액 */}
            <View>
              <Text style={styles.formLabel}>금액</Text>
              <View style={styles.amountRow}>
                <Text style={styles.currencySign}>₩</Text>
                <TextInput
                  style={styles.amountInput}
                  placeholder="0"
                  placeholderTextColor={colors.textMuted}
                  value={txAmount}
                  onChangeText={setTxAmount}
                  keyboardType="numeric"
                />
              </View>
            </View>

            {/* 메모 */}
            <View>
              <Text style={styles.formLabel}>메모 (선택)</Text>
              <TextInput
                style={styles.memoInput}
                placeholder="메모를 입력하세요"
                placeholderTextColor={colors.textMuted}
                value={txMemo}
                onChangeText={setTxMemo}
              />
            </View>

            <TouchableOpacity style={styles.saveBtn} onPress={handleSaveTx} activeOpacity={0.85}>
              <Text style={styles.saveBtnText}>저장하기</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* ── 항목 관리 모달 ──────────────────────────────────── */}
      <Modal visible={manageVisible} animationType="fade" transparent statusBarTranslucent>
        <TouchableOpacity
          style={styles.manageOverlay}
          activeOpacity={1}
          onPress={() => setManageVisible(false)}
        >
          <TouchableOpacity style={styles.manageModal} activeOpacity={1} onPress={() => {}}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>지출 항목 관리</Text>
              <TouchableOpacity onPress={() => setManageVisible(false)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                <Ionicons name="close" size={22} color={colors.textPrimary} />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.manageCatList}>
              {categories.map(cat => (
                <View key={cat.id} style={styles.manageCatItem}>
                  <View style={[styles.manageCatDot, { backgroundColor: cat.color }]} />
                  <Text style={styles.manageCatName}>{cat.name}</Text>
                  <TouchableOpacity
                    onPress={() => setCategories(prev => prev.filter(c => c.id !== cat.id))}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Ionicons name="trash-outline" size={17} color="#FF6B6B" />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>

            {/* 항목 추가 */}
            <View style={styles.addCatSection}>
              <Text style={styles.addCatTitle}>새 항목 추가</Text>
              <TextInput
                style={styles.addCatInput}
                placeholder="항목 이름"
                placeholderTextColor={colors.textMuted}
                value={newCatName}
                onChangeText={setNewCatName}
              />
              <View style={styles.colorRow}>
                {PRESET_COLORS.map(color => (
                  <TouchableOpacity
                    key={color}
                    style={[
                      styles.colorSwatch,
                      { backgroundColor: color },
                      newCatColor === color && styles.colorSwatchSelected,
                    ]}
                    onPress={() => setNewCatColor(color)}
                    activeOpacity={0.8}
                  />
                ))}
              </View>
              <TouchableOpacity style={styles.addCatBtn} onPress={handleAddCategory} activeOpacity={0.8}>
                <Text style={styles.addCatBtnText}>추가하기</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Sale;
