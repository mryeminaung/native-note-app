import { supabase } from "@/libs/supabase";
import { formatNoteDate } from "@/libs/utils";
import { Note } from "@/types";
import { MaterialIcons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, Pressable, Text, View } from "react-native";

type NoteCardProps = {
	note: Note;
	markedAsStar: any;
};

export default function NoteCard({ note, markedAsStar }: NoteCardProps) {
	const router = useRouter();

	const handleNoteDelete = () => {
		Alert.alert("Confirm", "Are you sure you want to delete?", [
			{
				text: "No",
				style: "cancel",
			},
			{
				text: "Yes",
				style: "destructive",
				onPress: async () => {
					await supabase.from("notes").delete().eq("id", note.id);
				},
			},
		]);
	};

	return (
		<View
			className="rounded-xl p-5 w-full mb-5"
			style={{ backgroundColor: note.bgColor }}>
			<Pressable
				onPress={() =>
					router.push({
						pathname: "./[noteId]",
						params: { noteId: note.id },
					})
				}>
				<View className="gap-y-3">
					{/* Header: Title and Star */}
					<View className="flex-row justify-between">
						<Text
							numberOfLines={2}
							className="text-[17px] font-bold">
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

					{/* Body Text */}
					<Text
						numberOfLines={2}
						className="text-sm leading-5 mt-[5px] mb-2">
						{note.content}
					</Text>
				</View>

				{/* Footer: Date and Actions */}
				<View className="flex-row justify-between items-center">
					<View className="flex-row items-center gap-x-3">
						<FontAwesome
							name="calendar-check-o"
							size={18}
						/>
						<Text className="text-sm text-black">
							{formatNoteDate(note.created_at)}
						</Text>
					</View>

					<View className="flex-row gap-x-[15px] justify-center items-center">
						<MaterialIcons
							name="error"
							size={18}
						/>
						<FontAwesome
							onPress={() => handleNoteDelete()}
							name="trash"
							size={18}
						/>
					</View>
				</View>
			</Pressable>
		</View>
	);
}
