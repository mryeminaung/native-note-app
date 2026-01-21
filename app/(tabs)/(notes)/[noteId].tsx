import { COLORS } from "@/constants/Colors";
import { supabase } from "@/libs/supabase";
import { Note } from "@/types";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NoteDetail() {
	const { noteId } = useLocalSearchParams<{ noteId: string }>();
	const router = useRouter();

	const [currentNote, setCurrentNote] = useState<Note | null>(null);

	useEffect(() => {
		const getNote = async () => {
			const { data } = await supabase
				.from("notes")
				.select("*")
				.eq("id", noteId);
			if (data) setCurrentNote(data[0]);
		};
		getNote();
	}, [noteId]);

	return (
		<SafeAreaView className="flex-1 bg-white pt-3">
			<View className="flex flex-row justify-between items-center mb-3 px-2.5">
				<Pressable
					onPress={() => router.push("/notes")}
					className="flex flex-row items-center gap-x-2">
					<MaterialIcons
						name="arrow-back"
						size={20}
						color="black"
					/>
					<Text className="text-2xl font-semibold">Notes</Text>
				</Pressable>
				<Pressable
					className="items-center justify-center"
					onPress={() =>
						router.push({
							pathname: "/(tabs)/(notes)/edit",
							params: { id: currentNote?.id },
						})
					}>
					<AntDesign
						name="edit"
						className="text-center"
						size={25}
						color={COLORS.DEEP_BLUE}
					/>
				</Pressable>
			</View>

			{/* Note Content */}
			<View
				className="flex-1 py-5 px-2.5"
				style={{
					backgroundColor: currentNote?.bgColor,
				}}>
				<ScrollView className="gap-y-[10px] px-2.5">
					<Text className="text-[23px] leading-[30px] font-semibold">
						{currentNote?.title}
					</Text>
					<Text className="text-[17px] leading-[25px]">
						{currentNote?.content}
					</Text>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
