import { COLORS, STICKY_COLORS } from "@/constants/Colors";
import { supabase } from "@/libs/supabase";
import { cn } from "@/libs/utils";
import { NewNoteProp } from "@/types";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
	Pressable,
	ScrollView,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewNote() {
	const [newNote, setNewNote] = useState<NewNoteProp | null>({
		title: "",
		content: "",
		bgColor: "#ECEFF1",
		starred: false,
		priority: "low",
		author_id: 2,
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
	});

	const router = useRouter();

	const handleNoteChange = (key: string, value: string) => {
		setNewNote((prevNote) => (prevNote ? { ...prevNote, [key]: value } : null));
	};

	const handleSaveNote = async () => {
		const { error } = await supabase.from("notes").insert(newNote);
		console.log(error);
		if (!error) router.push("./notes");
	};

	return (
		<SafeAreaView className="flex-1 bg-white pt-3">
			<View className="flex flex-row justify-between items-center mb-3 px-2.5">
				<Pressable
					onPress={() => router.push("./notes")}
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
					onPress={handleSaveNote}>
					<AntDesign
						name="save"
						className="text-center"
						size={25}
						color={COLORS.DEEP_BLUE}
					/>
				</Pressable>
			</View>

			<View
				className="flex-1 flex-col px-2.5 pt-5"
				style={{
					backgroundColor: newNote?.bgColor ? newNote.bgColor : "white",
				}}>
				{/* Color Picker Section */}
				<View className="flex-row justify-evenly">
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={{ columnGap: 10 }}>
						{STICKY_COLORS.map((color) => (
							<TouchableWithoutFeedback
								key={color}
								onPress={() => handleNoteChange("bgColor", color)}>
								<View
									className={cn(
										"w-[50px] h-[50px] rounded-[10px] border border-white",
										newNote?.bgColor === color ? "border-2" : "border-0",
									)}
									style={{ backgroundColor: color }}
								/>
							</TouchableWithoutFeedback>
						))}
					</ScrollView>
				</View>

				{/* Input Section */}
				<View>
					<TextInput
						multiline
						className="text-[23px]"
						style={{ backgroundColor: newNote?.bgColor }}
						placeholder="Title"
						value={newNote?.title}
						onChangeText={(text) => handleNoteChange("title", text)}
					/>
					<TextInput
						className="text-base py-1"
						placeholder="Note something down"
						multiline
						textAlignVertical="top"
						value={newNote?.content}
						onChangeText={(text) => handleNoteChange("content", text)}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}
