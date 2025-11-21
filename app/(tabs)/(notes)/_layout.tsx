import { Stack } from "expo-router";
import React from "react";

export default function NotesLayout() {
	return (
		<Stack screenOptions={{}}>
			<Stack.Screen
				name="notes"
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="create"
				options={{
					headerTitle: "Notes",
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="edit"
				options={{
					headerTitle: "Back",
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="[noteId]"
				options={{
					headerTitle: "Notes",
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
