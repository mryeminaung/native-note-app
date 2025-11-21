import { COLORS } from "@/constants/Colors";
import notes from "@/db/data.json";
import { AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NoteDetail() {
	const { noteId } = useLocalSearchParams<{ noteId: string }>();
	const router = useRouter();

	const [currentNote, setCurrentNote] = useState(
		notes.find((note) => note.id.toString() === noteId),
	);

	return (
		<SafeAreaView className="flex-1">
			{/* Edit FAB */}
			<Pressable
				className="absolute bottom-[50px] right-[30px] z-50 h-[60px] w-[60px] items-center justify-center bg-white rounded-full p-4 shadow-sm shadow-black elevation-2"
				onPress={() => router.push("./edit")}>
				<AntDesign
					name="edit"
					size={25}
					className="text-center"
					color={COLORS.DEEP_BLUE}
				/>
			</Pressable>

			{/* Note Content */}
			<View
				className="flex-1 p-5 gap-y-[10px]"
				style={{
					backgroundColor: currentNote?.bgColor,
				}}>
				<Text className="text-[25px] leading-[50px] font-bold">
					{currentNote?.title}
				</Text>
				<Text className="text-[18px] leading-[40px]">{currentNote?.body}</Text>
			</View>
		</SafeAreaView>
	);
}
