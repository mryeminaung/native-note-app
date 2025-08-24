import React, { useState } from "react";
import {
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

	const noteColor = ["#FFF9C4", "#FFE0B2", "#BBDEFB", "#C8E6C9", "#F8BBD0"];

	return (
		<View
			style={{
				flex: 1,
				flexDirection: "column",
				backgroundColor: newNote?.bgColor ? newNote.bgColor : "white",
			}}>
			<View style={styles.cardContainer}>
				{noteColor.map((color) => (
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
	cardContainer: {
		marginVertical: 20,
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	colorCard: {
		borderWidth: 0.5,
		width: 50,
		height: 50,
		borderRadius: 50,
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
