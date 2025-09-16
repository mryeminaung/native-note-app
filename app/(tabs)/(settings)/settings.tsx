import { COLORS } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";

const SettingsDashboard = () => {
	const router = useRouter();

	return (
		<View style={{ flex: 1 }}>
			<ScrollView>
				<View style={styles.settingBanner} />
				<View style={styles.profileSection}>
					<Image
						source={{ uri: "https://placeholder.com/avatar" }}
						style={styles.avatar}
					/>
					<Text style={styles.name}>Ye Min Aung</Text>
					<Text style={styles.title}>yeminaung.dev@gmail.com</Text>
				</View>
				<View style={styles.settingsSection}>
					<Text style={{ fontWeight: "bold", fontSize: 17, marginBottom: 15 }}>
						Notes Summary
					</Text>
					<View style={styles.statsContainer}>
						<View style={styles.statItem}>
							<Text style={styles.statLabel}>Notes</Text>
							<Text style={styles.statNumber}>10</Text>
						</View>
						<View style={styles.statItem}>
							<Text style={styles.statLabel}>Starred</Text>
							<Text style={styles.statNumber}>3</Text>
						</View>
					</View>

					<Text style={{ fontWeight: "bold", fontSize: 17 }}>Settings</Text>

					<View style={styles.optionItem}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								columnGap: 10,
							}}>
							<MaterialIcons
								name="person"
								style={{
									backgroundColor: COLORS.DEEP_BLUE,
									padding: 3,
									borderRadius: 5,
								}}
								color={COLORS.LIGHT_SKY_BLUE}
								size={30}
							/>
							<Text style={styles.optionText}>Change Username</Text>
						</View>
						<MaterialIcons
							name="chevron-right"
							color={COLORS.DEEP_BLUE}
							size={30}
						/>
					</View>

					<View style={styles.optionItem}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								columnGap: 10,
							}}>
							<MaterialIcons
								name="lock"
								style={{
									backgroundColor: COLORS.DEEP_BLUE,
									padding: 3,
									borderRadius: 5,
								}}
								color={COLORS.LIGHT_SKY_BLUE}
								size={30}
							/>
							<Text style={styles.optionText}>Change Password</Text>
						</View>
						<MaterialIcons
							name="chevron-right"
							size={30}
						/>
					</View>

					<View style={styles.optionItem}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								columnGap: 10,
							}}>
							<MaterialIcons
								name="palette"
								style={{
									backgroundColor: COLORS.DEEP_BLUE,
									padding: 3,
									borderRadius: 5,
								}}
								color={COLORS.LIGHT_SKY_BLUE}
								size={30}
							/>
							<Text style={styles.optionText}>Theme Preference</Text>
						</View>
						<MaterialIcons
							name="chevron-right"
							size={30}
						/>
					</View>
				</View>

				<Pressable
					style={[styles.btn, { backgroundColor: COLORS.DEEP_BLUE }]}
					onPress={() => router.push("/signup")}>
					<Text style={{ color: "white" }}>LogOut</Text>
					<MaterialIcons
						style={{ marginLeft: 10, color: "white" }}
						name="logout"
						size={20}
					/>
				</Pressable>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	profileSection: {
		alignItems: "center",
		marginTop: -220,
	},
	btn: {
		paddingVertical: 15,
		marginHorizontal: 20,
		marginBottom: 15,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		color: "white",
	},
	settingBanner: {
		height: 280,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		backgroundColor: COLORS.DEEP_BLUE,
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 15,
		backgroundColor: "#ddd",
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
		marginBottom: 5,
	},
	title: {
		fontSize: 16,
		color: "white",
		marginBottom: 20,
	},
	statsContainer: {
		flexDirection: "row",
		columnGap: 30,
		justifyContent: "space-around",
	},
	statItem: {
		alignItems: "center",
		borderRadius: 10,
		paddingVertical: 15,
		flex: 1,
		backgroundColor: "white",
		padding: 15,
		marginBottom: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		elevation: 3,
	},
	statNumber: {
		fontSize: 16,
		fontWeight: "bold",
	},
	statLabel: {
		fontSize: 17,
		color: "#666",
		fontWeight: "bold",
	},
	settingsSection: {
		marginHorizontal: 20,
		backgroundColor: "white",
		borderRadius: 10,
		padding: 20,
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
