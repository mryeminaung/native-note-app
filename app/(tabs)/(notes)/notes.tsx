import NoteCard from "@/components/NoteCard";
import { COLORS } from "@/constants/Colors";
import data from "@/db/data.json";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react"; // 👈 Import useMemo
import {
	FlatList,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
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

	// ✅ Optimized with useMemo
	const filteredNotes = useMemo(() => {
		return notes
			.filter((note) => (activeTab === "all" ? true : note.starred))
			.filter((note) =>
				note.title.toLowerCase().includes(searchQuery.toLowerCase()),
			);
	}, [notes, activeTab, searchQuery]);

	return (
		<SafeAreaView style={styles.safeArea}>
			<Pressable
				style={styles.addFab}
				onPress={() => router.push("./create")}>
				<AntDesign
					name="plus"
					size={25}
					style={{ textAlign: "center" }}
					color={COLORS.DEEP_BLUE}
				/>
			</Pressable>

			<View style={styles.container}>
				<View style={styles.header}>
					<View style={{ rowGap: 7 }}>
						<Text style={styles.headerText}>My Notes</Text>
						<Text style={styles.subHeaderText}>
							Your daily notes that remind you
						</Text>
					</View>
					<MaterialIcons
						name="sort"
						size={45}
					/>
				</View>

				<TextInput
					placeholder="Search Notes..."
					style={styles.searchInput}
					value={searchQuery}
					onChangeText={setSearchQuery}
				/>

				{/* Tabs */}
				<View style={styles.tabs}>
					<TouchableOpacity
						style={[styles.tab, activeTab === "all" && styles.activeTab]}
						onPress={() => setActiveTab("all")}>
						<View style={styles.tabInner}>
							<Text
								style={[
									styles.tabText,
									activeTab === "all" && styles.activeTabText,
								]}>
								All Notes
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.tab, activeTab === "starred" && styles.activeTab]}
						onPress={() => setActiveTab("starred")}>
						<View style={styles.tabInner}>
							<Text
								style={[
									styles.tabText,
									activeTab === "starred" && styles.activeTabText,
								]}>
								Starred
							</Text>
						</View>
					</TouchableOpacity>
				</View>

				{/* Notes List */}
				<FlatList
					data={filteredNotes}
					keyExtractor={(item) => item.id.toString()}
					ItemSeparatorComponent={() => <View style={{ marginVertical: 8 }} />}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.listContent}
					ListEmptyComponent={
						<Text style={styles.emptyText}>No notes found</Text>
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

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "white",
	},
	addFab: {
		position: "absolute",
		bottom: 50,
		right: 30,
		zIndex: 999,
		height: 60,
		width: 60,
		alignContent: "center",
		justifyContent: "center",
		backgroundColor: "white",
		borderRadius: 50,
		padding: 15,
		shadowColor: "#000",
		shadowOpacity: 0.15,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		elevation: 2,
	},
	container: {
		flex: 1,
		paddingHorizontal: 20,
	},
	header: {
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	headerText: {
		fontSize: 25,
		fontWeight: "bold",
	},
	subHeaderText: {
		fontSize: 16,
		color: "#555",
	},
	searchInput: {
		padding: 15,
		paddingLeft: 20,
		marginVertical: 5,
		borderWidth: 0.5,
		borderColor: COLORS.DEEP_BLUE,
		borderRadius: 50,
		backgroundColor: "white",
	},
	tabs: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
		marginBottom: 10,
	},
	tab: {
		flex: 1,
		paddingVertical: 10,
		alignItems: "center",
	},
	tabInner: {
		flexDirection: "row",
		columnGap: 10,
		alignItems: "center",
	},
	activeTab: {
		borderBottomWidth: 3,
		borderBottomColor: COLORS.DEEP_BLUE,
	},
	tabText: {
		fontSize: 15,
		fontWeight: "500",
		color: "#555",
	},
	activeTabText: {
		color: COLORS.DEEP_BLUE,
		fontWeight: "bold",
	},
	listContent: {
		// paddingTop: 20,
		// paddingBottom: 50,
	},
	emptyText: {
		textAlign: "center",
		marginTop: 40,
		fontSize: 16,
		color: "#777",
	},
});
