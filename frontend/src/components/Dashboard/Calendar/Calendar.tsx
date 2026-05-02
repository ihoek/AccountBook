import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styled";

const WEEK_DAYS = ["일", "월", "화", "수", "목", "금", "토"];

// 임시 이벤트 날짜 (실제 데이터 연동 전 샘플)
const EVENT_DAYS = new Set([3, 7, 12, 15, 19]);

type DayCell = {
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  colIndex: number;
};

const buildCalendar = (year: number, month: number): DayCell[][] => {
  const today = new Date();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells: DayCell[] = [];

  for (let i = 0; i < firstDay; i++) {
    cells.push({
      day: daysInPrevMonth - firstDay + 1 + i,
      isCurrentMonth: false,
      isToday: false,
      colIndex: i,
    });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const colIndex = (firstDay + d - 1) % 7;
    cells.push({
      day: d,
      isCurrentMonth: true,
      isToday:
        today.getFullYear() === year &&
        today.getMonth() === month &&
        today.getDate() === d,
      colIndex,
    });
  }

  let nextDay = 1;
  while (cells.length % 7 !== 0) {
    const colIndex = cells.length % 7;
    cells.push({ day: nextDay++, isCurrentMonth: false, isToday: false, colIndex });
  }

  const rows: DayCell[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }
  return rows;
};

const Calendar = () => {
  const today = new Date();
  const [year, setYear] = React.useState(today.getFullYear());
  const [month, setMonth] = React.useState(today.getMonth());

  const rows = buildCalendar(year, month);

  const goToday = () => {
    setYear(today.getFullYear());
    setMonth(today.getMonth());
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.monthTitle}>
          {year}년 {month + 1}월
        </Text>
        <TouchableOpacity style={styles.todayButton} onPress={goToday} activeOpacity={0.7}>
          <Text style={styles.todayButtonText}>Today</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.weekRow}>
        {WEEK_DAYS.map((d, i) => (
          <View key={d} style={styles.weekDay}>
            <Text
              style={[
                styles.weekDayText,
                i === 0 && styles.weekDayTextSun,
                i === 6 && styles.weekDayTextSat,
              ]}
            >
              {d}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.daysGrid}>
        {rows.map((row, rowIdx) => (
          <View key={rowIdx} style={styles.dayRow}>
            {row.map((cell, colIdx) => {
              const isSun = colIdx === 0;
              const isSat = colIdx === 6;
              const hasEvent = cell.isCurrentMonth && EVENT_DAYS.has(cell.day);

              return (
                <View key={colIdx} style={styles.dayCell}>
                  <View style={[styles.dayCircle, cell.isToday && styles.dayCircleToday]}>
                    <Text
                      style={[
                        styles.dayText,
                        !cell.isCurrentMonth && styles.dayTextOther,
                        cell.isCurrentMonth && isSun && styles.dayTextSun,
                        cell.isCurrentMonth && isSat && styles.dayTextSat,
                        cell.isToday && styles.dayTextToday,
                      ]}
                    >
                      {cell.day}
                    </Text>
                  </View>
                  <View style={[styles.dot, !hasEvent && styles.dotHidden]} />
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Calendar;
