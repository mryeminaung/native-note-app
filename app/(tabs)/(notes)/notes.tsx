import NoteCard from "@/components/NoteCard";
import { COLORS } from "@/constants/Colors";
import { supabase } from "@/libs/supabase";
import { Note } from "@/types";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
	FlatList,
	Pressable,
	RefreshControl,
	Text,
	TextInput,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notes() {
	const [notes, setNotes] = useState<Note[] | []>([]);
	const [activeTab, setActiveTab] = useState<"all" | "starred">("all");
	const [searchQuery, setSearchQuery] = useState("");
	const [refreshing, setRefreshing] = useState(false);

	const router = useRouter();

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 3000);
	}, []);

	const markedAsStar = (id: string) => {
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

	const getNotes = async () => {
		const res = await supabase.from("notes").select("*");
		if (res.data) setNotes(res.data);
	};

	useEffect(() => {
		getNotes();
	}, []);

	return (
		<SafeAreaView className="flex-1 bg-white pt-3">
			<View className="flex-1 px-5">
				{/* Header */}
				<View className="mb-2.5 flex-row items-start justify-between">
					<View className="gap-y-[7px]">
						<Text
							className="text-[25px] font-bold"
							style={{ color: COLORS.DEEP_BLUE }}>
							My Notes
						</Text>
						<Text className="text-base text-slate-600">
							Your daily notes that remind you
						</Text>
					</View>
					{/* Add New Button */}
					<Pressable
						className="items-center justify-center bg-white rounded-full p-4 shadow-md shadow-black elevation-5"
						onPress={() => router.push("./create")}>
						<AntDesign
							name="plus"
							size={25}
							className="text-center"
							color={COLORS.DEEP_BLUE}
						/>
					</Pressable>
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
				<View className="flex-row border-[#ccc] mb-2.5">
					{/* All Notes Tab */}
					<Pressable
						className={`flex-1 py-2.5 items-center ${
							activeTab === "all" ? "border-b-[3px] rounded-md" : ""
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

					{/* Starred Tab */}
					<Pressable
						className={`flex-1 py-2.5 items-center ${
							activeTab === "starred" ? "border-b-[3px] rounded-md" : ""
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
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={onRefresh}
						/>
					}
					contentContainerStyle={{ paddingBottom: 80 }}
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
