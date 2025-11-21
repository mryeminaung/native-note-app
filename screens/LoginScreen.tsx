import { COLORS } from "@/constants/Colors";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
	const router = useRouter();

	return (
		<SafeAreaView className="flex-1 justify-center items-center bg-white px-1">
			<View className="w-full px-5 bg-white">
				<Image
					source={require("@/assets/images/app_logo.png")}
					className="h-32 w-full"
					resizeMode="contain"
				/>

				<Text className="text-3xl font-bold text-center mt-2">
					Welcome Back!
				</Text>

				<Text className="text-base text-gray-500 text-center mb-6">
					Sign in to continue to your notes
				</Text>

				{/* Email */}
				<View className="flex-row items-center border border-gray-300 rounded-lg mb-5 px-3">
					<MaterialIcons
						name="email"
						size={22}
						color={COLORS.DEEP_BLUE}
						style={{ marginRight: 10 }}
					/>
					<TextInput
						className="flex-1 py-3 text-lg"
						placeholder="Enter email"
						keyboardType="email-address"
					/>
				</View>

				{/* Password */}
				<View className="flex-row items-center border border-gray-300 rounded-lg mb-5 px-3">
					<Feather
						name="lock"
						size={22}
						color={COLORS.DEEP_BLUE}
						style={{ marginRight: 10 }}
					/>
					<TextInput
						className="flex-1 py-3 text-lg"
						secureTextEntry
						placeholder="Enter password"
						autoCapitalize="none"
						autoCorrect={false}
						textContentType="password"
					/>
				</View>

				{/* Login Button */}
				<Pressable
					className="w-full rounded-full border border-gray-300 py-4 items-center"
					style={{ backgroundColor: COLORS.DEEP_BLUE }}
					onPress={() => router.push("/notes")}>
					<Text className="text-white text-base">Login</Text>
				</Pressable>

				{/* Divider */}
				<View className="flex-row items-center my-4">
					<View className="flex-1 h-px bg-gray-300 mr-2" />
					<Text className="text-sm text-gray-500 mx-2">Sign In With</Text>
					<View className="flex-1 h-px bg-gray-300 ml-2" />
				</View>

				{/* Social Icons */}
				<View className="flex-row justify-center mb-6 gap-x-5">
					<View className="bg-white p-2 rounded-xl shadow-md">
						<Image
							source={require("@/assets/images/facebook_logo.png")}
							className="w-10 h-10"
							resizeMode="contain"
						/>
					</View>

					<View className="bg-white p-2 rounded-xl shadow-md">
						<Image
							source={require("@/assets/images/google_logo.png")}
							className="w-10 h-10"
							resizeMode="contain"
						/>
					</View>

					<View className="bg-white p-2 rounded-xl shadow-md">
						<Image
							source={require("@/assets/images/twitter_logo.png")}
							className="w-10 h-10"
							resizeMode="contain"
						/>
					</View>
				</View>

				{/* Footer Link */}
				<Link
					href={{ pathname: "/signup" }}
					className="text-center mb-6">
					<Text className="text-blue-900">Don't have an account? SignUp</Text>
				</Link>
			</View>
		</SafeAreaView>
	);
}
