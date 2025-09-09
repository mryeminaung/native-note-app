import { COLORS } from "@/constants/Colors";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Feather, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
	const router = useRouter();

	return (
		<LinearGradient
			colors={["#052659", "#7DA0CA"]}
			style={{ flex: 1 }}>
			<SafeAreaView style={styles.safeArea}>
				<View style={styles.card}>
					<Image
						source={require("@/assets/images/app_logo.png")}
						style={styles.noteLogo}
						resizeMode="contain"
					/>
					<Text style={styles.title}>Welcome Back!</Text>
					<Text style={styles.subTitle}>Sign in to continue to your notes</Text>

					<View style={styles.inputWrapper}>
						<MaterialIcons
							name="email"
							size={22}
							color={COLORS.DEEP_BLUE}
							style={styles.inputIcon}
						/>
						<TextInput
							style={styles.input}
							placeholder="Enter email"
							keyboardType="email-address"
						/>
					</View>

					<View style={styles.inputWrapper}>
						<Feather
							name="lock"
							size={22}
							color={COLORS.DEEP_BLUE}
							style={styles.inputIcon}
						/>
						<TextInput
							style={styles.input}
							secureTextEntry={true}
							placeholder="Enter password"
							autoCapitalize="none"
							autoCorrect={false}
							textContentType="password"
						/>
					</View>

					<Pressable
						style={[styles.btn, { backgroundColor: COLORS.DEEP_BLUE }]}
						onPress={() => router.push("/notes")}>
						<Text style={{ color: "white", fontSize: 16 }}>Login</Text>
					</Pressable>

					<View style={styles.wrapper}>
						<View style={styles.line} />
						<Text style={{ fontSize: 14, marginHorizontal: 10, color: "#888" }}>
							Sign In With
						</Text>
						<View style={styles.line} />
					</View>

					{/* Social SignUp */}
					<View style={styles.logoContainer}>
						<View style={styles.logoWrapper}>
							<Image
								source={require("@/assets/images/facebook_logo.png")}
								style={styles.logo}
							/>
						</View>
						<View style={styles.logoWrapper}>
							<Image
								source={require("@/assets/images/google_logo.png")}
								style={styles.logo}
							/>
						</View>
						<View style={styles.logoWrapper}>
							<Image
								source={require("@/assets/images/twitter_logo.png")}
								style={styles.logo}
							/>
						</View>
					</View>

					<Link
						href={{ pathname: "/signup" }}
						style={{ textAlign: "center", marginBottom: 25 }}>
						<Text>Don&apos;t have an account? SignUp</Text>
					</Link>
				</View>
			</SafeAreaView>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 15,
	},
	noteLogo: {
		height: 120,
		width: "100%",
	},
	line: {
		flex: 1,
		height: 1,
		backgroundColor: "#ccc",
		marginRight: 10,
	},
	wrapper: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 15,
	},
	title: {
		fontSize: 25,
		textAlign: "center",
	},
	subTitle: {
		fontSize: 15,
		textAlign: "center",
		marginBottom: 25,
	},
	card: {
		width: "100%",
		paddingHorizontal: 20,
		borderWidth: 0.3,
		borderRadius: 15,
		backgroundColor: "white",
	},
	inputWrapper: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 0.3,
		borderRadius: 15,
		marginBottom: 20,
		paddingHorizontal: 10,
	},
	inputIcon: {
		marginRight: 10,
	},
	input: {
		flex: 1,
		paddingVertical: 15,
	},
	btn: {
		borderWidth: 0.5,
		paddingVertical: 15,
		alignItems: "center",
		borderRadius: 30,
		width: "100%",
	},
	logoContainer: {
		flexDirection: "row",
		justifyContent: "center",
		columnGap: 30,
		marginBottom: 20,
	},
	logoWrapper: {
		backgroundColor: "#fff",
		padding: 5,
		borderRadius: 10,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
	},
	logo: {
		width: 40,
		height: 40,
		resizeMode: "contain",
	},
});

/*

*/
