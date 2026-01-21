import { COLORS } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function WelcomeScreen() {
	const router = useRouter();

	return (
		<View className="flex-1 justify-center items-center bg-white">
			<Text
				className="text-[35px] font-bold mb-2.5"
				style={{ color: COLORS.DEEP_BLUE }}>
				Note-Taking App
			</Text>
			<Text className="text-center text-base text-slate-600">
				Organize your thoughts. Prioritize your ideas.
			</Text>
			<Text className="text-center text-base text-slate-600">
				Stay productive.
			</Text>

			<Image
				source={require("@/assets/images/app_logo.png")}
				className="h-[300px] my-5 w-full mx-5 rounded-[30px]"
				resizeMode="center"
			/>

			<View className="px-[30px] w-full">
				<Pressable
					className="py-[15px] mb-[15px] flex-row justify-center items-center rounded-xl w-full"
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
	);
}
