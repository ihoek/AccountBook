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
  Switch,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/Dashboard/Header/Header";
import Footer from "../../components/Dashboard/Footer/Footer";
import { styles } from "./styled";
import { colors } from "../../styles/theme";

// ── 타입 ────────────────────────────────────────────────────────────────────
type Frequency = "daily" | "weekly" | "monthly";
type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type PeriodType = "day" | "week" | "month";

type Routine = {
  id: string;
  title: string;
  description: string;
  frequency: Frequency;
  weekdays?: Weekday[];
  dayOfMonth?: number;
  time: string;
  notification: boolean;
  color: string;
  icon: keyof typeof Ionicons.glyphMap;
};

// ── 상수 ────────────────────────────────────────────────────────────────────
const PRESET_COLORS = [
  "#FF6B6B", "#FF9F43", "#48CAE4", "#A29BFE",
  "#55EFC4", "#FD79A8", "#6C5CE7", "#00B894",
];

const PRESET_ICONS: Array<keyof typeof Ionicons.glyphMap> = [
  "fitness-outline", "book-outline", "leaf-outline", "water-outline",
  "moon-outline", "walk-outline", "musical-notes-outline", "brush-outline",
  "calculator-outline", "heart-outline", "bicycle-outline", "alarm-outline",
];

const WEEKDAY_LABELS = ["일", "월", "화", "수", "목", "금", "토"];

const MOCK_ROUTINES: Routine[] = [
  {
    id: "r1", title: "아침 운동", description: "30분 조깅",
    frequency: "daily", time: "07:00",
    notification: true, color: "#FF6B6B", icon: "fitness-outline",
  },
  {
    id: "r2", title: "영어 공부", description: "단어 암기 20개",
    frequency: "weekly", weekdays: [1, 3, 5], time: "21:00",
    notification: true, color: "#48CAE4", icon: "book-outline",
  },
  {
    id: "r3", title: "가계부 정리", description: "이달 지출 확인",
    frequency: "monthly", dayOfMonth: 1, time: "20:00",
    notification: false, color: "#A29BFE", icon: "calculator-outline",
  },
  {
    id: "r4", title: "명상", description: "10분 마음챙김",
    frequency: "daily", time: "08:00",
    notification: false, color: "#55EFC4", icon: "leaf-outline",
  },
];

// ── 헬퍼 ────────────────────────────────────────────────────────────────────
const getWeekDays = (): Date[] => {
  const today = new Date();
  const day = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() + (day === 0 ? -6 : 1 - day));
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
};

const getMonthGrid = (): (Date | null)[] => {
  const today = new Date();
  const first = new Date(today.getFullYear(), today.getMonth(), 1);
  const last = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const offset = first.getDay() === 0 ? 6 : first.getDay() - 1;
  const grid: (Date | null)[] = Array(offset).fill(null);
  for (let d = 1; d <= last.getDate(); d++) {
    grid.push(new Date(today.getFullYear(), today.getMonth(), d));
  }
  while (grid.length % 7 !== 0) grid.push(null);
  return grid;
};

const routineForDate = (r: Routine, date: Date): boolean => {
  if (r.frequency === "daily") return true;
  if (r.frequency === "weekly") return r.weekdays?.includes(date.getDay() as Weekday) ?? false;
  if (r.frequency === "monthly") return date.getDate() === r.dayOfMonth;
  return false;
};

const freqLabel = (r: Routine): string => {
  if (r.frequency === "daily") return "매일";
  if (r.frequency === "weekly") {
    return `매주 ${(r.weekdays ?? []).map(d => WEEKDAY_LABELS[d]).join("·")}`;
  }
  return `매월 ${r.dayOfMonth}일`;
};

const isToday = (date: Date): boolean => {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

const MONTH_NAMES = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];

// ── 컴포넌트 ─────────────────────────────────────────────────────────────────
const Routine = () => {
  const [period, setPeriod] = React.useState<PeriodType>("week");
  const [routines, setRoutines] = React.useState<Routine[]>(MOCK_ROUTINES);
  const [completedIds, setCompletedIds] = React.useState<string[]>([]);

  // 모달 상태
  const [modalVisible, setModalVisible] = React.useState(false);
  const [editingId, setEditingId] = React.useState<string | null>(null);

  // 폼 상태
  const [formTitle, setFormTitle] = React.useState("");
  const [formDesc, setFormDesc] = React.useState("");
  const [formFreq, setFormFreq] = React.useState<Frequency>("daily");
  const [formWeekdays, setFormWeekdays] = React.useState<Weekday[]>([1, 2, 3, 4, 5]);
  const [formDayOfMonth, setFormDayOfMonth] = React.useState("1");
  const [formTime, setFormTime] = React.useState("08:00");
  const [formNotification, setFormNotification] = React.useState(false);
  const [formColor, setFormColor] = React.useState(PRESET_COLORS[0]);
  const [formIcon, setFormIcon] = React.useState<keyof typeof Ionicons.glyphMap>(PRESET_ICONS[0]);

  // ── 핸들러 ───────────────────────────────────────────────────────────────
  const openAdd = () => {
    setEditingId(null);
    setFormTitle(""); setFormDesc("");
    setFormFreq("daily"); setFormWeekdays([1, 2, 3, 4, 5]);
    setFormDayOfMonth("1"); setFormTime("08:00");
    setFormNotification(false);
    setFormColor(PRESET_COLORS[0]); setFormIcon(PRESET_ICONS[0]);
    setModalVisible(true);
  };

  const openEdit = (r: Routine) => {
    setEditingId(r.id);
    setFormTitle(r.title); setFormDesc(r.description);
    setFormFreq(r.frequency); setFormWeekdays(r.weekdays ?? []);
    setFormDayOfMonth(String(r.dayOfMonth ?? 1)); setFormTime(r.time);
    setFormNotification(r.notification);
    setFormColor(r.color); setFormIcon(r.icon);
    setModalVisible(true);
  };

  const handleSave = () => {
    if (!formTitle.trim()) return;
    const data: Routine = {
      id: editingId ?? `r-${Date.now()}`,
      title: formTitle.trim(),
      description: formDesc.trim(),
      frequency: formFreq,
      weekdays: formFreq === "weekly" ? formWeekdays : undefined,
      dayOfMonth: formFreq === "monthly" ? parseInt(formDayOfMonth) || 1 : undefined,
      time: formTime,
      notification: formNotification,
      color: formColor,
      icon: formIcon,
    };
    if (editingId) {
      setRoutines(prev => prev.map(r => r.id === editingId ? data : r));
    } else {
      setRoutines(prev => [...prev, data]);
    }
    setModalVisible(false);
  };

  const handleDelete = (id: string) => setRoutines(prev => prev.filter(r => r.id !== id));

  const toggleNotification = (id: string) =>
    setRoutines(prev => prev.map(r => r.id === id ? { ...r, notification: !r.notification } : r));

  const toggleComplete = (id: string) =>
    setCompletedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const toggleWeekday = (day: Weekday) =>
    setFormWeekdays(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);

  // ── 일 뷰 ───────────────────────────────────────────────────────────────
  const today = new Date();
  const todayRoutines = routines
    .filter(r => routineForDate(r, today))
    .sort((a, b) => a.time.localeCompare(b.time));

  const DayView = () => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        오늘 {`${today.getMonth() + 1}월 ${today.getDate()}일 (${WEEKDAY_LABELS[today.getDay()]})`}
      </Text>
      {todayRoutines.length === 0 ? (
        <Text style={styles.emptyText}>오늘 예정된 루틴이 없어요</Text>
      ) : (
        todayRoutines.map(r => {
          const done = completedIds.includes(r.id);
          return (
            <TouchableOpacity
              key={r.id}
              style={[styles.dayItem, done && styles.dayItemDone]}
              onPress={() => toggleComplete(r.id)}
              activeOpacity={0.7}
            >
              <Text style={styles.dayItemTime}>{r.time}</Text>
              <View style={[styles.dayItemDot, { backgroundColor: r.color }]} />
              <Ionicons name={r.icon} size={16} color={done ? colors.textMuted : r.color} />
              <Text style={[styles.dayItemTitle, done && styles.dayItemTitleDone]}>
                {r.title}
              </Text>
              <View style={[styles.checkBox, done && { backgroundColor: r.color, borderColor: r.color }]}>
                {done && <Ionicons name="checkmark" size={12} color="#fff" />}
              </View>
            </TouchableOpacity>
          );
        })
      )}
    </View>
  );

  // ── 주 뷰 ───────────────────────────────────────────────────────────────
  const weekDays = getWeekDays();

  const WeekView = () => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>이번 주</Text>
      <View style={styles.weekRow}>
        {weekDays.map((day, i) => {
          const dayRoutines = routines.filter(r => routineForDate(r, day));
          const todayFlag = isToday(day);
          return (
            <View key={i} style={styles.weekCol}>
              <Text style={[styles.weekDayLabel, todayFlag && styles.weekDayLabelToday]}>
                {["월", "화", "수", "목", "금", "토", "일"][i]}
              </Text>
              <View style={[styles.weekDateBadge, todayFlag && styles.weekDateBadgeToday]}>
                <Text style={[styles.weekDateText, todayFlag && styles.weekDateTextToday]}>
                  {day.getDate()}
                </Text>
              </View>
              <View style={styles.weekDots}>
                {dayRoutines.slice(0, 3).map((r, j) => (
                  <View key={j} style={[styles.weekDot, { backgroundColor: r.color }]} />
                ))}
                {dayRoutines.length > 3 && (
                  <Text style={styles.weekDotMore}>+{dayRoutines.length - 3}</Text>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );

  // ── 월 뷰 ───────────────────────────────────────────────────────────────
  const monthGrid = getMonthGrid();

  const MonthView = () => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        {today.getFullYear()}년 {MONTH_NAMES[today.getMonth()]}
      </Text>
      {/* 요일 헤더 */}
      <View style={styles.monthHeader}>
        {["월", "화", "수", "목", "금", "토", "일"].map(d => (
          <Text key={d} style={styles.monthHeaderLabel}>{d}</Text>
        ))}
      </View>
      {/* 날짜 그리드 */}
      <View style={styles.monthGrid}>
        {monthGrid.map((day, i) => {
          if (!day) return <View key={i} style={styles.monthCell} />;
          const dayRoutines = routines.filter(r => routineForDate(r, day));
          const todayFlag = isToday(day);
          return (
            <View key={i} style={styles.monthCell}>
              <View style={[styles.monthDateBadge, todayFlag && styles.monthDateBadgeToday]}>
                <Text style={[styles.monthDateText, todayFlag && styles.monthDateTextToday]}>
                  {day.getDate()}
                </Text>
              </View>
              <View style={styles.monthDots}>
                {dayRoutines.slice(0, 2).map((r, j) => (
                  <View key={j} style={[styles.monthDot, { backgroundColor: r.color }]} />
                ))}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );

  // ── 렌더 ─────────────────────────────────────────────────────────────────
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 기간 탭 */}
        <View style={styles.periodRow}>
          {([["day", "일별"], ["week", "주별"], ["month", "월별"]] as [PeriodType, string][]).map(([p, label]) => (
            <TouchableOpacity
              key={p}
              style={[styles.periodTab, period === p && styles.periodTabActive]}
              onPress={() => setPeriod(p)}
              activeOpacity={0.7}
            >
              <Text style={[styles.periodTabText, period === p && styles.periodTabTextActive]}>
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 기간별 뷰 */}
        {period === "day" && <DayView />}
        {period === "week" && <WeekView />}
        {period === "month" && <MonthView />}

        {/* 루틴 목록 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>등록된 루틴</Text>

          {routines.length === 0 ? (
            <Text style={styles.emptyText}>등록된 루틴이 없어요. + 버튼으로 추가해보세요</Text>
          ) : (
            routines.map(r => (
              <View key={r.id} style={styles.routineItem}>
                <View style={[styles.routineColorBar, { backgroundColor: r.color }]} />
                <View style={[styles.routineIconCircle, { backgroundColor: r.color + "22" }]}>
                  <Ionicons name={r.icon} size={18} color={r.color} />
                </View>
                <View style={styles.routineInfo}>
                  <Text style={styles.routineTitle}>{r.title}</Text>
                  <Text style={styles.routineSubtitle}>{freqLabel(r)} · {r.time}</Text>
                  {!!r.description && (
                    <Text style={styles.routineDesc} numberOfLines={1}>{r.description}</Text>
                  )}
                </View>
                <View style={styles.routineActions}>
                  {/* 알림 벨 */}
                  <TouchableOpacity
                    onPress={() => toggleNotification(r.id)}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Ionicons
                      name={r.notification ? "notifications" : "notifications-off-outline"}
                      size={18}
                      color={r.notification ? r.color : colors.textMuted}
                    />
                  </TouchableOpacity>
                  {/* 수정 */}
                  <TouchableOpacity
                    onPress={() => openEdit(r)}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Ionicons name="pencil-outline" size={17} color={colors.textSecondary} />
                  </TouchableOpacity>
                  {/* 삭제 */}
                  <TouchableOpacity
                    onPress={() => handleDelete(r.id)}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Ionicons name="trash-outline" size={17} color="#FF6B6B" />
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab} onPress={openAdd} activeOpacity={0.85}>
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Footer initialTab="routine" />
      </View>

      {/* ── 루틴 추가 / 수정 모달 ─────────────────────────────────── */}
      <Modal visible={modalVisible} animationType="slide" transparent statusBarTranslucent>
        <KeyboardAvoidingView
          style={styles.modalWrap}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <TouchableOpacity
            style={StyleSheet.absoluteFillObject}
            activeOpacity={1}
            onPress={() => setModalVisible(false)}
          />
          <View style={styles.modalSheet}>
            <View style={styles.modalHandle} />
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{editingId ? "루틴 수정" : "루틴 추가"}</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Ionicons name="close" size={22} color={colors.textPrimary} />
                </TouchableOpacity>
              </View>

              {/* 제목 */}
              <Text style={styles.formLabel}>루틴 이름</Text>
              <TextInput
                style={styles.formInput}
                placeholder="루틴 이름을 입력하세요"
                placeholderTextColor={colors.textMuted}
                value={formTitle}
                onChangeText={setFormTitle}
              />

              {/* 설명 */}
              <Text style={styles.formLabel}>설명 (선택)</Text>
              <TextInput
                style={styles.formInput}
                placeholder="간단한 설명"
                placeholderTextColor={colors.textMuted}
                value={formDesc}
                onChangeText={setFormDesc}
              />

              {/* 반복 주기 */}
              <Text style={styles.formLabel}>반복 주기</Text>
              <View style={styles.freqRow}>
                {(["daily", "weekly", "monthly"] as Frequency[]).map(f => (
                  <TouchableOpacity
                    key={f}
                    style={[styles.freqChip, formFreq === f && styles.freqChipActive]}
                    onPress={() => setFormFreq(f)}
                    activeOpacity={0.7}
                  >
                    <Text style={[styles.freqChipText, formFreq === f && styles.freqChipTextActive]}>
                      {f === "daily" ? "매일" : f === "weekly" ? "매주" : "매월"}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* 요일 선택 (매주) */}
              {formFreq === "weekly" && (
                <>
                  <Text style={styles.formLabel}>요일 선택</Text>
                  <View style={styles.weekdayRow}>
                    {([0, 1, 2, 3, 4, 5, 6] as Weekday[]).map(d => (
                      <TouchableOpacity
                        key={d}
                        style={[styles.weekdayChip, formWeekdays.includes(d) && styles.weekdayChipActive]}
                        onPress={() => toggleWeekday(d)}
                        activeOpacity={0.7}
                      >
                        <Text style={[styles.weekdayChipText, formWeekdays.includes(d) && styles.weekdayChipTextActive]}>
                          {WEEKDAY_LABELS[d]}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </>
              )}

              {/* 날짜 선택 (매월) */}
              {formFreq === "monthly" && (
                <>
                  <Text style={styles.formLabel}>매월 몇 일</Text>
                  <TextInput
                    style={[styles.formInput, { width: 100 }]}
                    placeholder="1"
                    placeholderTextColor={colors.textMuted}
                    value={formDayOfMonth}
                    onChangeText={setFormDayOfMonth}
                    keyboardType="numeric"
                  />
                </>
              )}

              {/* 시간 */}
              <Text style={styles.formLabel}>시간</Text>
              <TextInput
                style={[styles.formInput, { width: 110 }]}
                placeholder="08:00"
                placeholderTextColor={colors.textMuted}
                value={formTime}
                onChangeText={setFormTime}
              />

              {/* 알림 */}
              <View style={styles.notificationRow}>
                <Text style={styles.formLabel}>알림</Text>
                <Switch
                  value={formNotification}
                  onValueChange={setFormNotification}
                  trackColor={{ false: colors.border, true: colors.green200 }}
                  thumbColor={colors.white100}
                />
              </View>

              {/* 색상 */}
              <Text style={styles.formLabel}>색상</Text>
              <View style={styles.colorRow}>
                {PRESET_COLORS.map(c => (
                  <TouchableOpacity
                    key={c}
                    style={[styles.colorSwatch, { backgroundColor: c }, formColor === c && styles.colorSwatchSelected]}
                    onPress={() => setFormColor(c)}
                    activeOpacity={0.8}
                  />
                ))}
              </View>

              {/* 아이콘 */}
              <Text style={styles.formLabel}>아이콘</Text>
              <View style={styles.iconGrid}>
                {PRESET_ICONS.map(ic => (
                  <TouchableOpacity
                    key={ic}
                    style={[styles.iconChip, formIcon === ic && { backgroundColor: formColor }]}
                    onPress={() => setFormIcon(ic)}
                    activeOpacity={0.7}
                  >
                    <Ionicons name={ic} size={20} color={formIcon === ic ? "#fff" : colors.textSecondary} />
                  </TouchableOpacity>
                ))}
              </View>

              {/* 저장 버튼 */}
              <TouchableOpacity style={styles.saveBtn} onPress={handleSave} activeOpacity={0.85}>
                <Text style={styles.saveBtnText}>{editingId ? "수정 완료" : "저장하기"}</Text>
              </TouchableOpacity>

              <View style={{ height: 20 }} />
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default Routine;
