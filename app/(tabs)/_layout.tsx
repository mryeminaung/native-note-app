import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}>
			<Tabs.Screen
				name="(notes)"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<MaterialIcons
							name="home"
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
