import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
	return (
		<Stack screenOptions={{}}>
			<Stack.Screen
				name="welcome"
				options={{ title: "Welcome", headerShown: false }}
			/>
			<Stack.Screen
				name="login"
				options={{ title: "Login", headerShown: false }}
			/>
			<Stack.Screen
				name="signup"
				options={{ title: "Signup", headerShown: false }}
			/>
		</Stack>
	);
}
