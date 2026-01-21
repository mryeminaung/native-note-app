import SocialLogin from "@/components/SocialLogin";
import { COLORS } from "@/constants/Colors";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleFormData = (key: "email" | "password", value: string) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[key]: value,
		}));
	};

	const handleLogin = () => {
		console.log(formData);
		// router.push("/notes");
	};

	return (
		<SafeAreaView className="flex-1 justify-center items-center bg-white px-1.5">
			<View className="w-full px-5 bg-white">
				<Image
					source={require("@/assets/images/app_logo.png")}
					className="h-32 w-full"
					resizeMode="contain"
				/>

				<Text className="text-3xl font-bold text-center mt-2">
					Hello Again!
				</Text>

				<Text className="text-base text-gray-500 text-center mb-6">
					Welcome back, you have been missed!
				</Text>

				{/* Email */}
				<View className="flex-row items-center border border-gray-300 rounded-xl mb-5 px-3">
					<MaterialIcons
						name="email"
						size={20}
						color={COLORS.DEEP_BLUE}
						style={{ marginRight: 8 }}
					/>
					<TextInput
						onChangeText={(text) => handleFormData("email", text)}
						className="flex-1 py-3 text-base"
						placeholder="Enter email"
						keyboardType="email-address"
					/>
				</View>

				{/* Password */}
				<View className="flex-row items-center border border-gray-300 rounded-xl mb-5 px-3">
					<Feather
						name="lock"
						size={20}
						color={COLORS.DEEP_BLUE}
						style={{ marginRight: 8 }}
					/>
					<TextInput
						className="flex-1 py-3 text-base"
						secureTextEntry
						onChangeText={(text) => handleFormData("password", text)}
						placeholder="Enter password"
						autoCapitalize="none"
						autoCorrect={false}
						textContentType="password"
					/>
				</View>

				{/* Login Button */}
				<Pressable
					className="w-full rounded-xl border border-gray-300 py-4 items-center"
					style={{ backgroundColor: COLORS.DEEP_BLUE }}
					onPress={handleLogin}>
					<Text className="text-white text-base font-semibold">Login</Text>
				</Pressable>

				{/* Divider */}
				<View className="flex-row items-center my-4">
					<View className="flex-1 h-px bg-gray-300 mr-2" />
					<Text className="text-sm text-gray-500 mx-2">Sign In With</Text>
					<View className="flex-1 h-px bg-gray-300 ml-2" />
				</View>

				{/* login with another platform */}
				<SocialLogin />

				{/* Footer Link */}
				<Link
					href={{ pathname: "/signup" }}
					className="text-center mb-6">
					<Text className="text-blue-900">
						Dont have an account? <Text className="font-bold">SignUp</Text>
					</Text>
				</Link>
			</View>
		</SafeAreaView>
	);
}
