import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
	const router = useRouter();

	return (
		<LinearGradient
			colors={["#052659", "#7DA0CA"]}
			style={styles.safeArea}>
			<SafeAreaView style={styles.safeArea}>
				<View style={styles.container}>
					<Text style={styles.title}>Note Taking App</Text>
					<Text style={styles.subTitle}>
						Organize your thoughts. Prioritize your ideas.
					</Text>
					<Text style={styles.subTitle}>Stay productive.</Text>
					<Image
						source={require("@/assets/images/app_logo.png")}
						style={styles.noteImg}
					/>
					<View style={{ paddingHorizontal: 30, width: "100%" }}>
						<Pressable
							style={[styles.btn, { backgroundColor: COLORS.DEEP_BLUE }]}
							onPress={() => router.push("/signup")}>
							<Text style={{ color: "white" }}>Get Started</Text>
							<MaterialIcons
								style={{ marginLeft: 10, color: "white" }}
								name="arrow-forward"
								size={20}
							/>
						</Pressable>
						<Pressable onPress={() => router.push("/login")}>
							<Text style={{ textAlign: "center", fontWeight: "bold" }}>
								Already have an account?
							</Text>
						</Pressable>
					</View>
				</View>
			</SafeAreaView>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	title: {
		fontSize: 35,
		fontWeight: "bold",
		marginBottom: 10,
		color: "white",
	},
	subTitle: {
		textAlign: "center",
		fontSize: 16,
		color: "white",
	},
	container: {
		flex: 1,
		paddingHorizontal: 10,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	},
	noteImg: {
		height: 400,
		width: "100%",
		marginVertical: 5,
		borderRadius: 30,
		resizeMode: "cover",
	},
	btn: {
		paddingVertical: 15,
		marginBottom: 15,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		width: "100%",
		color: "white",
	},
});
