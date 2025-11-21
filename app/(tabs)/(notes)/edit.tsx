import { COLORS, STICKY_COLORS } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
	Pressable,
	ScrollView,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type EditNoteProps = {
	id?: number;
	title: string;
	body: string;
	bgColor: string;
	starred: false;
};

export default function EditNote() {
	const [newNote, setNewNote] = useState<EditNoteProps | null>({
		title: "",
		body: "",
		bgColor: "",
		starred: false,
	});

	const router = useRouter();

	return (
		<SafeAreaView className="flex-1">
			<View
				className="flex-1 flex-col"
				style={{
					backgroundColor: newNote?.bgColor ? newNote.bgColor : "white",
				}}>
				{/* Save FAB */}
				<Pressable
					className="absolute bottom-[50px] right-[30px] z-50 h-[70px] w-[70px] items-center justify-center bg-white rounded-full p-[15px] shadow-sm shadow-black elevation-2"
					onPress={() => router.push("./notes")}>
					<MaterialIcons
						name="save-as"
						className="text-center"
						size={30}
						color={COLORS.DEEP_BLUE}
					/>
				</Pressable>
				{/* Color Picker Section */}
				<View className="my-5 flex-row justify-evenly">
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={{ paddingHorizontal: 10 }}>
						{STICKY_COLORS.map((color) => (
							<TouchableWithoutFeedback
								key={color}
								onPress={() =>
									setNewNote((preNote) =>
										preNote ? { ...preNote, bgColor: color } : null,
									)
								}>
								<View
									className="w-[50px] h-[50px] rounded-[10px] mr-2.5 border border-[#ccc]"
									style={{ backgroundColor: color }}
								/>
							</TouchableWithoutFeedback>
						))}
					</ScrollView>
				</View>
				{/* Input Section */}
				<View className="px-2.5">
					<TextInput
						multiline
						className="rounded-full text-[23px]"
						style={{ backgroundColor: newNote?.bgColor }}
						placeholder="Title"
						value={newNote?.title}
						onChangeText={(text) =>
							setNewNote((prev) => (prev ? { ...prev, title: text } : null))
						}
					/>
					<TextInput
						className="text-base"
						placeholder="Note something down"
						multiline
						textAlignVertical="top"
						value={newNote?.body}
						onChangeText={(text) =>
							setNewNote((prev) => (prev ? { ...prev, body: text } : null))
						}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}
