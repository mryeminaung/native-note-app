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
				tabBarStyle: {
					position: "absolute",
					// bottom: 20,
					// left: 20,
					// right: 20,
					height: 60,
					// borderRadius: 30,
					// backgroundColor: "#1e1e1e",
					// paddingBottom: 0,
				},
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
							size={28}
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
							size={28}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
