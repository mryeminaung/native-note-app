import { useRouter } from "expo-router";
import React from "react";
import {
	Image,
	ScrollView,
	StyleSheet,
	Switch,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsDashboard = () => {
	const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
	const [settingsEnabled, setSettingsEnabled] = React.useState(true);
	const [supportServiceEnabled, setSupportServiceEnabled] =
		React.useState(false);
	const [privacyPolicyEnabled, setPrivacyPolicyEnabled] = React.useState(false);

	const router = useRouter();

	return (
		<SafeAreaView>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				{/* Profile Section */}
				<View style={styles.profileSection}>
					<Image
						source={{ uri: "https://placeholder.com/avatar" }}
						style={styles.avatar}
					/>
					<Text style={styles.name}>Ye Min Aung</Text>
					<Text style={styles.title}>React Native Developer</Text>

					<View style={styles.statsContainer}>
						<View style={styles.statItem}>
							<Text style={styles.statNumber}>10</Text>
							<Text style={styles.statLabel}>Notes</Text>
						</View>
						<View style={styles.statItem}>
							<Text style={styles.statNumber}>7</Text>
							<Text style={styles.statLabel}>Followers</Text>
						</View>
						<View style={styles.statItem}>
							<Text style={styles.statNumber}>3</Text>
							<Text style={styles.statLabel}>Following</Text>
						</View>
					</View>
				</View>

				{/* Settings Options */}
				<View style={styles.settingsSection}>
					<View style={styles.optionItem}>
						<Text style={styles.optionText}>Notification</Text>
						<Switch
							value={notificationsEnabled}
							onValueChange={setNotificationsEnabled}
						/>
					</View>

					<View style={styles.optionItem}>
						<Text style={styles.optionText}>Setting</Text>
						<Switch
							value={settingsEnabled}
							onValueChange={setSettingsEnabled}
						/>
					</View>

					<View style={styles.optionItem}>
						<Text style={styles.optionText}>Support Service</Text>
						<Switch
							value={supportServiceEnabled}
							onValueChange={setSupportServiceEnabled}
						/>
					</View>

					<View style={styles.optionItem}>
						<Text style={styles.optionText}>Privacy Policy</Text>
						<Switch
							value={privacyPolicyEnabled}
							onValueChange={setPrivacyPolicyEnabled}
						/>
					</View>
				</View>

				{/* Sign Out Button */}
				<TouchableOpacity
					onPress={() => router.push("(auth)")}
					style={styles.signOutButton}>
					<Text style={styles.signOutText}>Sign Out</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	scrollContent: {
		padding: 20,
	},
	profileSection: {
		alignItems: "center",
		marginBottom: 30,
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 15,
		backgroundColor: "#ddd", // Placeholder color
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 5,
	},
	title: {
		fontSize: 16,
		color: "#666",
		marginBottom: 20,
	},
	statsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "80%",
	},
	statItem: {
		alignItems: "center",
	},
	statNumber: {
		fontSize: 18,
		fontWeight: "bold",
	},
	statLabel: {
		fontSize: 14,
		color: "#666",
	},
	settingsSection: {
		backgroundColor: "white",
		borderRadius: 10,
		padding: 15,
		marginBottom: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
	},
	optionItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: "#f0f0f0",
	},
	optionText: {
		fontSize: 16,
	},
	signOutButton: {
		backgroundColor: "#ff4444",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
	},
	signOutText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default SettingsDashboard;
