import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../../App";
import { colors } from "../../../styles/theme";
import { styles } from "./styled";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type TabItem = {
  key: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconActive: keyof typeof Ionicons.glyphMap;
};

const TABS: TabItem[] = [
  {
    key: "routine",
    label: "루틴",
    icon: "repeat-outline",
    iconActive: "repeat",
  },
  {
    key: "expense",
    label: "지출",
    icon: "wallet-outline",
    iconActive: "wallet",
  },
  { key: "home", label: "홈", icon: "home-outline", iconActive: "home" },
  {
    key: "account",
    label: "계정 설정",
    icon: "person-outline",
    iconActive: "person",
  },
];

type FooterProps = {
  initialTab?: string;
};

const Footer = ({ initialTab = "home" }: FooterProps) => {
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = React.useState(initialTab);

  const handleTabPress = (key: string) => {
    if (key === "account") {
      navigation.navigate("UserSetting");
      setActiveTab(key);
      return;
    }
    if (key === "expense") {
      navigation.navigate("Sale");
      setActiveTab(key);
      return;
    }
    if (key === "routine") {
      navigation.navigate("Routine");
      setActiveTab(key);
      return;
    }
    if (key === "home") {
      navigation.navigate("Dashboard");
      setActiveTab(key);
      return;
    }
    setActiveTab(key);
  };

  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => handleTabPress(tab.key)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isActive ? tab.iconActive : tab.icon}
              size={24}
              color={isActive ? colors.green200 : colors.textSecondary}
            />
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Footer;
