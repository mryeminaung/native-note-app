import { COLORS, STICKY_COLORS } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
	Pressable,
	ScrollView,
	StyleSheet,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";

type NewNoteProps = {
	id?: number;
	title: string;
	body: string;
	bgColor: string;
	starred: false;
};

export default function NewNote() {
	const [newNote, setNewNote] = useState<NewNoteProps | null>({
		title: "",
		body: "",
		bgColor: "",
		starred: false,
	});



	const router = useRouter();

	return (
		<View
			style={{
				flex: 1,
				flexDirection: "column",
				backgroundColor: newNote?.bgColor ? newNote.bgColor : "white",
			}}>
			<Pressable
				style={styles.saveFab}
				onPress={() => router.push("./notes")}>
				<AntDesign
					name="save"
					style={{ textAlign: "center" }}
					size={25}
					color={COLORS.DEEP_BLUE}
				/>
			</Pressable>
			<View style={styles.cardContainer}>
				
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.scrollContent}>
					{STICKY_COLORS.map((color) => (
						<TouchableWithoutFeedback
							key={color}
							onPress={() =>
								setNewNote((preNote) =>
									preNote ? { ...preNote, bgColor: color } : null,
								)
							}>
							<View style={{ ...styles.colorCard, backgroundColor: color }} />
						</TouchableWithoutFeedback>
					))}
				</ScrollView>
			</View>

			<View style={styles.inputContainer}>
				<TextInput
					multiline
					style={{ ...styles.titleInput, backgroundColor: newNote?.bgColor }}
					placeholder="Title"
				/>
				<TextInput
					style={styles.bodyInput}
					placeholder="Note something down"
					multiline
					// numberOfLines=true
					textAlignVertical="top"
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	saveFab: {
		position: "absolute",
		bottom: 50,
		right: 30,
		zIndex: 999,
		height: 60,
		width: 60,
		padding: 15,
		alignContent: "center",
		justifyContent: "center",
		backgroundColor: "white",
		borderRadius: 50,
		shadowColor: "#000",
		shadowOpacity: 0.15,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		elevation: 2,
	},
	cardContainer: {
		marginVertical: 20,
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	scrollContent: {
		flexDirection: "row",
		paddingHorizontal: 10,
	},
	colorCard: {
		width: 50,
		height: 50,
		borderRadius: 10,
		marginRight: 10,
		borderWidth: 1,
		borderColor: "#ccc",
	},
	inputContainer: {
		paddingHorizontal: 10,
	},
	titleInput: {
		borderRadius: 50,
		fontSize: 23,
	},
	bodyInput: {
		fontSize: 16,
	},
});
