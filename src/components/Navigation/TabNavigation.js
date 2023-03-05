import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Backlog from '../Backlog';
import InProgress from '../InProgress';
import Completed from '../Completed';
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Backlog: "bars",
  InProgress: "cycle",
  Completed: "checkcircleo"
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "royalblue",
    tabBarInactiveTintColor: "gray",
    headerShown: false
  };
};

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ screenOptions }}>
        <Tab.Screen name="Dashboard" component={Backlog} />
        <Tab.Screen name="In Progress" component={InProgress} />
        <Tab.Screen name="Completed" component={Completed} />
    </Tab.Navigator>
  );
}