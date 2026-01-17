import { COLORS } from "@/constants/Colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NoteDetail() {
	const { noteId } = useLocalSearchParams<{ noteId: string }>();
	const router = useRouter();

	const [currentNote, setCurrentNote] = useState(
		notes.find((note) => note.id.toString() === 2),
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
				className="flex-1 py-5 px-3"
				style={{
					backgroundColor: currentNote?.bgColor,
				}}>
				<View className="flex-row items-center mb-5">
					<Ionicons
						name="chevron-back"
						size={25}
						color={COLORS.DEEP_BLUE}
					/>
					<Text className="text-2xl font-semibold">Notes</Text>
				</View>
				<ScrollView className="gap-y-[10px] px-3">
					<Text className="text-[22px] leading-[30px] font-semibold">
						{currentNote?.title}
					</Text>
					<Text className="text-[17px] leading-[25px]">
						{currentNote?.body}
					</Text>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
