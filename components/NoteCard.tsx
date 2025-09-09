import { MaterialIcons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

type NoteCardProps = {
	note: {
		id: number;
		title: string;
		body: string;
		bgColor: string;
		starred: boolean;
	};
	markedAsStar: any;
};

const { width } = Dimensions.get("window");

export default function NoteCard({ note, markedAsStar }: NoteCardProps) {
	return (
		<View style={{ ...styles.noteCard, backgroundColor: note.bgColor }}>
			<View style={{ rowGap: 5 }}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					<Link
						href={{
							pathname: "./[noteId]",
							params: { noteId: note.id.toString() },
						}}>
						<Text style={styles.noteTitle}>{note.title}</Text>
					</Link>
					{note.starred ? (
						<FontAwesome
							name="star"
							size={20}
							color="red"
							onPress={() => markedAsStar(note.id)}
						/>
					) : (
						<FontAwesome
							name="star-o"
							size={20}
							color="black"
							onPress={() => markedAsStar(note.id)}
						/>
					)}
				</View>
				<Text style={styles.noteBody}>{note.body}</Text>
			</View>
			<View
				style={{
					marginTop: 15,
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<View
					style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
					<FontAwesome
						name="calendar-check-o"
						size={18}
					/>
					<Text style={{ fontSize: 14 }}>21-8-2025</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						columnGap: 15,
						justifyContent: "center",
						alignItems: "center",
					}}>
					<MaterialIcons
						name="error"
						size={18}
					/>
					<FontAwesome
						name="trash"
						size={18}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	noteCard: {
		borderRadius: 12,
		padding: 20,
		width: width - 40,
		marginBottom: 18,
	},
	noteTitle: {
		fontSize: 17,
		fontWeight: "500",
	},
	noteBody: {
		fontSize: 14,
		marginVertical: 3,
	},
});
