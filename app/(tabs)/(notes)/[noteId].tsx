import { COLORS } from "@/constants/Colors";
import notes from "@/db/data.json";
import { AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function NoteDetail() {
	const { noteId } = useLocalSearchParams<{ noteId: string }>();
	const router = useRouter();

	const [currentNote, setCurrentNote] = useState(
		notes.find((note) => note.id.toString() === noteId),
	);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Pressable
				style={styles.editFab}
				onPress={() => router.push("./edit")}>
				<AntDesign
					name="edit"
					size={28}
					style={{ textAlign: "center" }}
					color={COLORS.DEEP_BLUE}
				/>
			</Pressable>

			<View
				style={{
					...styles.noteDetailContainer,
					backgroundColor: currentNote?.bgColor,
				}}>
				<Text style={{ fontSize: 25, fontWeight: "bold" }}>
					{currentNote?.title}
				</Text>
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
	editFab: {
		position: "absolute",
		bottom: 50,
		right: 30,
		zIndex: 999,
		height: 70,
		width: 70,
		alignContent: "center",
		justifyContent: "center",
		backgroundColor: "white",
		borderRadius: 50,
		padding: 15,
		shadowColor: "#000",
		shadowOpacity: 0.15,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		elevation: 2,
	},
});
