import * as React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./styled";

// Components
import Header from "../../components/Dashboard/Header/Header";
import QuickStats from "../../components/Dashboard/QuickStats/QuickStats";
import Calendar from "../../components/Dashboard/Calendar/Calendar";
import Footer from "../../components/Dashboard/Footer/Footer";
import TodaySchedule from "../../components/Dashboard/TodaySchedule/TodaySchedule";
import TodayRoutine from "../../components/Dashboard/TodayRoutine/TodayRoutine";
import MonthlyExpense from "../../components/Dashboard/MonthlyExpense/MonthlyExpense";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <QuickStats />
        <MonthlyExpense />
        <Calendar />
        <TodaySchedule />
        <TodayRoutine />
      </ScrollView>

      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

export default Dashboard;
