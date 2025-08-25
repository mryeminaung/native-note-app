import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<Text style={styles.title}>Note Taking App</Text>
				<Text style={styles.subTitle}>
					Organize your thoughts. Prioritize your ideas.
				</Text>
				<Text style={styles.subTitle}>Stay productive.</Text>
				<Image
					source={require("@/assets/images/note_logo.png")}
					style={styles.noteImg}
				/>
				<View style={{ paddingHorizontal: 30, width: "100%" }}>
					<Pressable
						style={[styles.btn, { backgroundColor: COLORS.DEEP_BLUE }]}
						onPress={() => router.push("/signup")}>
						<Text style={{ color: "white" }}>Get Started</Text>
					</Pressable>
					<Pressable
						style={styles.btn}
						onPress={() => router.push("/login")}>
						<Text>Log In</Text>
					</Pressable>
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
	title: {
		fontSize: 35,
		fontWeight: "bold",
		marginBottom: 10,
	},
	subTitle: {
		textAlign: "center",
		fontSize: 16,
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
		borderWidth: 1,
		paddingVertical: 15,
		marginBottom: 15,
		alignItems: "center",
		borderRadius: 30,
		width: "100%",
	},
});
