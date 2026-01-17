import ChangeName from "@/components/settings/ChangeName";
import ChangePassword from "@/components/settings/ChangePassword";
import NoteSummary from "@/components/settings/NoteSummary";
import ToggleTheme from "@/components/ToggleTheme";
import { COLORS } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Settings() {
	const router = useRouter();
	const [accordionId, setAccordionId] = useState(0);

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
					<View className="relative">
						<Image
							source={{
								uri: "https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg",
							}}
							className="w-[100px] h-[100px] rounded-full mb-[15px] bg-[#ddd]"
						/>
						<MaterialIcons
							name="edit-square"
							color={"black"}
							size={18}
							className="absolute bottom-3 shadow-sm elevation-md rounded-full p-1 bg-white right-3"
						/>
					</View>
					<Text className="text-2xl font-bold text-white">Ye Min Aung</Text>
					<Text className="text-base text-white mb-5">
						yeminaung.dev@gmail.com
					</Text>
				</View>

				{/* Main Settings Card */}
				<View className="mx-5 bg-white rounded-xl p-5 mb-5 shadow-sm shadow-black elevation-3">
					<NoteSummary />

					<Text
						className="font-bold text-[17px] mb-3"
						style={{ color: COLORS.DEEP_BLUE }}>
						Account Information
					</Text>

					{/* Option: Change Username */}
					<ChangeName
						accordionId={accordionId}
						setAccordionId={setAccordionId}
					/>
					<View className="border-b border-[#f0f0f0]" />

					{/* Option: Change Password */}
					<ChangePassword
						accordionId={accordionId}
						setAccordionId={setAccordionId}
					/>
					<View className="border-b border-[#f0f0f0]" />

					{/* Option: Theme Preference */}
					<ToggleTheme
						accordionId={accordionId}
						setAccordionId={setAccordionId}
					/>
				</View>

				{/* Logout Button */}
				<Pressable
					className="py-4 mx-5 mb-[15px] flex-row justify-center items-center rounded-xl"
					style={{ backgroundColor: COLORS.DEEP_BLUE }}
					onPress={() => router.push("/welcome")}>
					<Text className="text-white font-semibold">LogOut</Text>
					<MaterialIcons
						className="ml-[10px]"
						color="white"
						name="logout"
						size={18}
					/>
				</Pressable>
			</ScrollView>
		</View>
	);
}
