import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styled";

type TrendDirection = "up" | "down";

type ColData = {
  label: string;
  amount: string;
  trend: string;
  direction: TrendDirection;
};

const INCOME: ColData = {
  label: "수입",
  amount: "428만 원",
  trend: "5.2%",
  direction: "up",
};

const EXPENSE: ColData = {
  label: "지출",
  amount: "261만 원",
  trend: "3.1%",
  direction: "down",
};

const TrendBadge = ({ direction, trend }: { direction: TrendDirection; trend: string }) => {
  const isUp = direction === "up";
  const trendStyle = isUp ? styles.trendUp : styles.trendDown;
  const arrow = isUp ? "▲" : "▼";

  return (
    <View style={styles.trend}>
      <Text style={[styles.trendText, trendStyle]}>
        {arrow} {trend}
      </Text>
      <Text style={styles.trendLabel}>전월 대비</Text>
    </View>
  );
};

const MonthlyExpense = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>이번 달 지출</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.sectionLink}>상세 보기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.col}>
          <Text style={styles.colLabel}>{INCOME.label}</Text>
          <Text style={[styles.amount, styles.amountIncome]}>{INCOME.amount}</Text>
          <TrendBadge direction={INCOME.direction} trend={INCOME.trend} />
        </View>

        <View style={styles.divider} />

        <View style={styles.col}>
          <Text style={styles.colLabel}>{EXPENSE.label}</Text>
          <Text style={[styles.amount, styles.amountExpense]}>{EXPENSE.amount}</Text>
          <TrendBadge direction={EXPENSE.direction} trend={EXPENSE.trend} />
        </View>
      </View>
    </View>
  );
};

export default MonthlyExpense;
