import { COLORS } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: COLORS.DEEP_BLUE,
			}}>
			<Tabs.Screen
				name="(notes)"
				options={{
					title: "Notes",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<MaterialIcons
							name="sticky-note-2"
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="(settings)"
				options={{
					title: "Settings",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<FontAwesome
							name="gear"
							size={24}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
