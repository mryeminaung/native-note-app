import React from "react";
import { Text, View } from "react-native";

export default function NoteSummary() {
	return (
		<>
			<Text className="font-bold text-[17px] mb-[15px]">Notes Summary</Text>

			{/* Stats Row */}
			<View className="flex-row gap-x-[30px] justify-around mb-5">
				<View className="flex-1 items-center bg-white rounded-[10px] py-[15px] shadow-sm shadow-black elevation-3">
					<Text className="text-[17px] text-[#666] font-bold">Notes</Text>
					<Text className="text-base font-bold">10</Text>
				</View>
				<View className="flex-1 items-center bg-white rounded-[10px] py-[15px] shadow-sm shadow-black elevation-3">
					<Text className="text-[17px] text-[#666] font-bold">Starred</Text>
					<Text className="text-base font-bold">3</Text>
				</View>
			</View>
		</>
	);
}
