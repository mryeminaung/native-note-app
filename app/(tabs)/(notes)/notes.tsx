import NoteCard from "@/components/NoteCard";
import { COLORS } from "@/constants/Colors";
import data from "@/db/data.json";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type NotesProps = {
	id: number;
	title: string;
	body: string;
	bgColor: string;
	starred: boolean;
	priority: string;
	createdAt: string;
};

export default function Notes() {
	const [notes, setNotes] = useState<NotesProps[]>(data);
	const router = useRouter();

	const [activeTab, setActiveTab] = useState<"all" | "starred">("all");
	const [searchQuery, setSearchQuery] = useState("");

	const markedAsStar = (id: number) => {
		setNotes((prevNotes) =>
			prevNotes.map((note) =>
				note.id === id ? { ...note, starred: !note.starred } : note,
			),
		);
	};

	const filteredNotes = useMemo(() => {
		return notes
			.filter((note) => (activeTab === "all" ? true : note.starred))
			.filter((note) =>
				note.title.toLowerCase().includes(searchQuery.toLowerCase()),
			);
	}, [notes, activeTab, searchQuery]);

	return (
		<SafeAreaView className="flex-1 bg-white">
			{/* Floating Action Button */}
			<Pressable
				className="absolute bottom-[50px] right-[30px] z-50 h-[60px] w-[60px] items-center justify-center bg-white rounded-full p-4 shadow-md shadow-black elevation-5"
				onPress={() => router.push("./create")}>
				<AntDesign
					name="plus"
					size={25}
					className="text-center"
					color={COLORS.DEEP_BLUE}
				/>
			</Pressable>

			<View className="flex-1 px-5">
				{/* Header */}
				<View className="mb-2.5 flex-row items-center justify-between">
					<View className="gap-y-[7px]">
						<Text className="text-[25px] font-bold">My Notes</Text>
						<Text className="text-base text-[#555]">
							Your daily notes that remind you
						</Text>
					</View>
					<MaterialIcons
						name="sort"
						size={45}
					/>
				</View>

				{/* Search Input */}
				<TextInput
					placeholder="Search Notes..."
					className="px-5 py-4 my-[3px] border-[0.5px] rounded-xl bg-white"
					style={{ borderColor: COLORS.DEEP_BLUE }}
					value={searchQuery}
					onChangeText={setSearchQuery}
				/>

				{/* Tabs */}
				<View className="flex-row border-b border-[#ccc] mb-2.5">
					<Pressable
						className={`flex-1 py-2.5 items-center ${
							activeTab === "all" ? "border-b-[3px]" : ""
						}`}
						style={
							activeTab === "all"
								? { borderBottomColor: COLORS.DEEP_BLUE }
								: undefined
						}
						onPress={() => setActiveTab("all")}>
						<View className="flex-row gap-x-2.5 items-center">
							<Text
								className={`text-[15px] font-medium ${
									activeTab === "all" ? "font-bold" : "text-[#555]"
								}`}
								style={
									activeTab === "all" ? { color: COLORS.DEEP_BLUE } : undefined
								}>
								All Notes
							</Text>
						</View>
					</Pressable>

					<Pressable
						className={`flex-1 py-2.5 items-center ${
							activeTab === "starred" ? "border-b-[3px]" : ""
						}`}
						style={
							activeTab === "starred"
								? { borderBottomColor: COLORS.DEEP_BLUE }
								: undefined
						}
						onPress={() => setActiveTab("starred")}>
						<View className="flex-row gap-x-2.5 items-center">
							<Text
								className={`text-[15px] font-medium ${
									activeTab === "starred" ? "font-bold" : "text-[#555]"
								}`}
								style={
									activeTab === "starred"
										? { color: COLORS.DEEP_BLUE }
										: undefined
								}>
								Starred
							</Text>
						</View>
					</Pressable>
				</View>

				{/* Notes List */}
				<FlatList
					data={filteredNotes}
					className="pb-10"
					keyExtractor={(item) => item.id.toString()}
					// ItemSeparatorComponent={() => <View className="my-2" />}
					showsVerticalScrollIndicator={false}
					ListEmptyComponent={
						<Text className="text-center mt-10 text-base text-[#777]">
							No notes found
						</Text>
					}
					renderItem={({ item }) => (
						<NoteCard
							note={item}
							markedAsStar={markedAsStar}
						/>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}
