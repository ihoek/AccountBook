import * as React from "react";
import { Ionicons } from "@expo/vector-icons";

const BellIcon = ({
  color,
  width,
}: {
  color: string;
  width: number;
  height: number;
}) => {
  return <Ionicons name="notifications-outline" size={width} color={color} />;
};

export default BellIcon;
