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
	title: string;
	content: string;
	bgColor: string;
	starred: false;
};

export default function EditNote() {
	const [editNote, setEditNote] = useState<EditNoteProps | null>({
		title: "",
		content: "",
		bgColor: "",
		starred: false,
	});

	const router = useRouter();

	const handleNoteChange = (key: string, value: string) => {
		setEditNote((prevNote) =>
			prevNote ? { ...prevNote, [key]: value } : null,
		);
	};

	return (
		<SafeAreaView className="flex-1 bg-white">
			<View
				className="flex-1 flex-col"
				style={{
					backgroundColor: editNote?.bgColor ? editNote.bgColor : "white",
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
								onPress={() => handleNoteChange("bgColor", color)}>
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
						style={{ backgroundColor: editNote?.bgColor }}
						placeholder="Title"
						value={editNote?.title}
						onChangeText={(text) => handleNoteChange("title", text)}
					/>
					<TextInput
						className="text-base"
						placeholder="Note something down"
						multiline
						textAlignVertical="top"
						value={editNote?.content}
						onChangeText={(text) => handleNoteChange("content", text)}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}
