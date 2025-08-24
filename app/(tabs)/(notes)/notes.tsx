import NoteCard from "@/components/NoteCard";
import data from "@/db/data.json";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
	FlatList,
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
};

export default function Notes() {
	const [notes, setNotes] = useState<NotesProps[]>(data);
	const navigation = useNavigation();
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

	const filteredNotes = notes
		.filter((note) => (activeTab === "all" ? true : note.starred))
		.filter((note) =>
			note.title.toLowerCase().includes(searchQuery.toLowerCase()),
		);

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<View style={{ rowGap: 7 }}>
						<Text style={styles.headerText}>My Notes</Text>
						<Text style={styles.subHeaderText}>
							Your daily notes that remind you
						</Text>
					</View>
					<TouchableOpacity onPress={() => router.push("./create")}>
						<AntDesign
							name="pluscircleo"
							size={45}
							color="black"
						/>
					</TouchableOpacity>
				</View>

				<TextInput
					placeholder="Search Notes..."
					style={styles.searchInput}
					value={searchQuery}
					onChangeText={setSearchQuery}
				/>

				<View style={styles.tabs}>
					<TouchableOpacity
						style={[styles.tab, activeTab === "all" && styles.activeTab]}
						onPress={() => setActiveTab("all")}>
						<View
							style={{
								flexDirection: "row",
								columnGap: 10,
								alignItems: "center",
							}}>
							<MaterialIcons
								name="sticky-note-2"
								size={24}
								color={activeTab === "all" ? "blue" : ""}
							/>
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
						<View
							style={{
								flexDirection: "row",
								columnGap: 10,
								alignItems: "center",
							}}>
							<MaterialIcons
								name={activeTab === "starred" ? "star" : "star-outline"}
								size={24}
								color={activeTab === "starred" ? "blue" : ""}
							/>
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

				<View style={styles.content}>
					<FlatList
						data={filteredNotes}
						keyExtractor={(item) => item.id.toString()}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{ paddingBottom: 50 }}
						renderItem={({ item }) => (
							<NoteCard
								note={item}
								markedAsStar={markedAsStar}
							/>
						)}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "white",
	},
	container: {
		flex: 1,
		paddingHorizontal: 20,
	},
	headerText: {
		fontSize: 28,
		fontWeight: "bold",
	},
	subHeaderText: {
		fontSize: 16,
		color: "#555",
	},
	searchInput: {
		marginVertical: 20,
		padding: 18,
		borderWidth: 0.5,
		borderColor: "#ccc",
		borderRadius: 50,
		backgroundColor: "white",
	},
	tabs: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	tab: {
		flex: 1,
		paddingVertical: 10,
		alignItems: "center",
	},
	activeTab: {
		borderBottomWidth: 3,
		borderBottomColor: "#000dffff",
	},
	tabText: {
		fontSize: 17,
		fontWeight: "500",
		color: "#555",
	},
	activeTabText: {
		color: "#000dffff",
		fontWeight: "bold",
	},
	content: {
		flex: 1,
		paddingTop: 20,
		marginBottom: -23,
	},
});
