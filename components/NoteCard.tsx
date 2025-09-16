import { MaterialIcons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

type NoteCardProps = {
	note: {
		id: number;
		title: string;
		body: string;
		bgColor: string;
		starred: boolean;
		priority: string;
		createdAt: string;
	};
	markedAsStar: any;
};

const { width } = Dimensions.get("window");
export default function NoteCard({ note, markedAsStar }: NoteCardProps) {
	const router = useRouter();

	return (
		<View style={{ ...styles.noteCard, backgroundColor: note.bgColor }}>
			<Pressable
				onPress={() =>
					router.push({
						pathname: "./[noteId]",
						params: { noteId: note.id.toString() },
					})
				}>
				<View style={{ rowGap: 5 }}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text
							numberOfLines={2}
							style={styles.noteTitle}>
							{note.title}
						</Text>
						{note.starred ? (
							<FontAwesome
								name="star"
								size={20}
								color="yellow"
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
					<Text
						numberOfLines={2}
						style={styles.noteBody}>
						{note.body}
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							columnGap: 10,
						}}>
						<FontAwesome
							name="calendar-check-o"
							size={18}
						/>
						<Text style={{ fontSize: 14, color: "black" }}>
							{note.createdAt}
						</Text>
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
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	noteCard: {
		borderRadius: 12,
		padding: 20,
		width: width - 40,
	},
	noteTitle: {
		fontSize: 17,
		fontWeight: "700",
	},
	noteBody: {
		fontSize: 14,
		lineHeight: 20,
		marginTop: 5,
		marginBottom: 8,
	},
});
