import { COLORS } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
	const router = useRouter();

	return (
		<SafeAreaView className="flex-1 bg-white">
			<View className="flex-1 justify-center items-center">
				{/* Titles */}
				<Text className="text-[35px] font-bold mb-2.5">Note-Taking App</Text>
				<Text className="text-center text-base">
					Organize your thoughts. Prioritize your ideas.
				</Text>
				<Text className="text-center text-base">Stay productive.</Text>

				{/* Main Image */}
				<Image
					source={require("@/assets/images/app_logo.png")}
					className="h-[400px] w-full rounded-[30px]"
					resizeMode="cover"
				/>

				{/* Bottom Buttons Section */}
				<View className="px-[30px] w-full">
					<Pressable
						className="py-[15px] mb-[15px] flex-row justify-center items-center rounded-[30px] w-full"
						style={{ backgroundColor: COLORS.DEEP_BLUE }}
						onPress={() => router.push("/signup")}>
						<Text className="text-white font-medium">Get Started</Text>
						<MaterialIcons
							className="ml-2.5"
							name="arrow-forward"
							size={20}
							color="white"
						/>
					</Pressable>

					<Pressable onPress={() => router.push("/login")}>
						<Text className="text-center text-blue-900 font-bold">
							Already have an account?
						</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	);
}
