import ChangeName from "@/components/ChangeName";
import ChangePassword from "@/components/ChangePassword";
import NoteSummary from "@/components/NoteSummary";
import ToggleTheme from "@/components/ToggleTheme";
import { COLORS } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Settings() {
	const router = useRouter();

	return (
		<View className="flex-1">
			<ScrollView>
				{/* Header Banner */}
				<View
					className="h-[280px] rounded-b-[20px]"
					style={{ backgroundColor: COLORS.DEEP_BLUE }}
				/>

				{/* Profile Section (Overlapping Banner) */}
				<View className="items-center -mt-[220px]">
					<Image
						source={{
							uri: "https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg",
						}}
						className="w-[100px] h-[100px] rounded-full mb-[15px] bg-[#ddd]"
					/>
					<Text className="text-2xl font-bold text-white mb-[5px]">
						Ye Min Aung
					</Text>
					<Text className="text-base text-white mb-5">
						yeminaung.dev@gmail.com
					</Text>
				</View>

				{/* Main Settings Card */}
				<View className="mx-5 bg-white rounded-[10px] p-5 mb-5 shadow-sm shadow-black elevation-3">
					<NoteSummary />

					<Text className="font-bold text-[17px]">Settings</Text>

					{/* Option: Change Username */}
					<ChangeName />

					{/* Option: Change Password */}
					<ChangePassword />

					{/* Option: Theme Preference */}
					<ToggleTheme />
				</View>

				{/* Logout Button */}
				<Pressable
					className="py-[15px] mx-5 mb-[15px] flex-row justify-center items-center rounded-[30px]"
					style={{ backgroundColor: COLORS.DEEP_BLUE }}
					onPress={() => router.push("/welcome")}>
					<Text className="text-white">LogOut</Text>
					<MaterialIcons
						className="ml-[10px]"
						color="white"
						name="logout"
						size={20}
					/>
				</Pressable>
			</ScrollView>
		</View>
	);
}
