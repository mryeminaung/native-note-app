import { COLORS } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export default function ChangeName() {
	return (
		<View className="flex-row justify-between items-center py-3 border-b border-[#f0f0f0]">
			<View className="flex-row items-center gap-x-[10px]">
				<MaterialIcons
					name="person"
					style={{
						backgroundColor: COLORS.DEEP_BLUE,
						padding: 3,
						borderRadius: 5,
					}}
					color={COLORS.LIGHT_SKY_BLUE}
					size={30}
				/>
				<Text className="text-base">Change Username</Text>
			</View>
			<MaterialIcons
				name="chevron-right"
				color={COLORS.DEEP_BLUE}
				size={30}
			/>
		</View>
	);
}
