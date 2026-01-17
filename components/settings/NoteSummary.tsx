import { COLORS } from "@/constants/Colors";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function NoteSummary() {
	const getNotesSummary = async () => {};

	useEffect(() => {
		getNotesSummary();
	}, []);

	return (
		<>
			<Text
				className="font-bold text-[17px] mb-[15px]"
				style={{ color: COLORS.DEEP_BLUE }}>
				Notes Summary
			</Text>

			{/* Stats Row */}
			<View className="flex-row gap-x-[30px] justify-around mb-5">
				<View className="flex-1 items-center bg-white rounded-[10px] py-[15px] shadow-sm shadow-black elevation-3">
					<Text className="text-[17px] text-[#666] font-semibold mb-2">
						Notes
					</Text>
					<Text className="text-base font-bold">10</Text>
				</View>
				<View className="flex-1 items-center bg-white rounded-[10px] py-[15px] shadow-sm shadow-black elevation-3">
					<Text className="text-[17px] text-[#666] font-semibold mb-2">
						Starred
					</Text>
					<Text className="text-base font-bold">3</Text>
				</View>
			</View>
		</>
	);
}
