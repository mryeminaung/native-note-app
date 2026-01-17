import SocialLogin from "@/components/SocialLogin";
import { COLORS } from "@/constants/Colors";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen() {
	const router = useRouter();

	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		password: "",
		confirmPwd: "",
	});

	const handleFormData = (
		key: "email" | "password" | "fullName" | "confirmPwd",
		value: string,
	) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[key]: value,
		}));
	};

	const handleSignUp = () => {
		console.log(formData);
		router.push("/notes");
	};

	return (
		<SafeAreaView className="flex-1 justify-center items-center px-1.5 bg-white">
			<View className="w-full px-5 bg-white">
				<Image
					source={require("@/assets/images/app_logo.png")}
					className="h-32 w-full"
					resizeMode="contain"
				/>

				<Text className="text-3xl font-bold text-center mt-2">
					Hello There!
				</Text>

				<Text className="text-base text-gray-500 text-center mb-7">
					Create your account to get started
				</Text>

				{/* Full Name */}
				<View className="flex-row items-center border border-gray-300 rounded-xl mb-5 px-3">
					<Feather
						name="user"
						size={20}
						color={COLORS.DEEP_BLUE}
						style={{ marginRight: 8 }}
					/>
					<TextInput
						onChangeText={(text) => handleFormData("fullName", text)}
						className="flex-1 py-3 text-base"
						placeholder="Enter full name"
					/>
				</View>

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

				{/* Confirm Password */}
				<View className="flex-row items-center border border-gray-300 rounded-xl mb-5 px-3">
					<Feather
						name="lock"
						size={20}
						color={COLORS.DEEP_BLUE}
						style={{ marginRight: 8 }}
					/>
					<TextInput
						className="flex-1 py-3 text-base"
						onChangeText={(text) => handleFormData("confirmPwd", text)}
						secureTextEntry
						placeholder="Confirm password"
						autoCapitalize="none"
						autoCorrect={false}
						textContentType="password"
					/>
				</View>

				{/* Button */}
				<Pressable
					className="w-full rounded-xl border border-gray-300 py-3 items-center"
					style={{ backgroundColor: COLORS.DEEP_BLUE }}
					onPress={handleSignUp}>
					<Text className="text-white text-base font-semibold">Sign Up</Text>
				</Pressable>

				{/* Divider */}
				<View className="flex-row items-center my-4">
					<View className="flex-1 h-px bg-gray-300 mr-2" />
					<Text className="text-sm text-gray-500 mx-2">Sign Up With</Text>
					<View className="flex-1 h-px bg-gray-300 ml-2" />
				</View>

				{/* Social Icons */}
				<SocialLogin />

				{/* Footer Link */}
				<Link
					href={{ pathname: "/login" }}
					className="text-center mb-6">
					<Text className="text-blue-900">
						Already have an account? <Text className="font-bold">LogIn</Text>
					</Text>
				</Link>
			</View>
		</SafeAreaView>
	);
}
