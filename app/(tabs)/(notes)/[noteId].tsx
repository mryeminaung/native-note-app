import notes from "@/db/data.json";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function NoteDetail() {
	const { noteId } = useLocalSearchParams<{ noteId: string }>();

	const [currentNote, setCurrentNote] = useState(
		notes.find((note) => note.id.toString() === noteId),
	);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View
				style={{
					...styles.noteDetailContainer,
					backgroundColor: currentNote?.bgColor,
				}}>
				<Text style={{ fontSize: 25 }}>{currentNote?.title}</Text>
				<Text style={{ fontSize: 18 }}>{currentNote?.body}</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	noteDetailContainer: {
		flex: 1,
		padding: 20,
		rowGap: 10,
	},
});
