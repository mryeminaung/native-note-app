import { COLORS } from "@/constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

type ChangeNameProps = {
	accordionId: number;
	setAccordionId: (id: number) => void;
};

export default function ChangeName({
	accordionId,
	setAccordionId,
}: ChangeNameProps) {
	const toggleNameEdit = (id: number) => {
		accordionId === id ? setAccordionId(0) : setAccordionId(id);
	};

	return (
		<>
			<Pressable
				onPress={() => toggleNameEdit(1)}
				className="flex-row justify-between items-center py-3 border-b border-[#f0f0f0]">
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
					<Text className="text-base">Update Personal Info</Text>
				</View>
				{accordionId === 1 ? (
					<Ionicons
						name="chevron-down"
						size={25}
						color={COLORS.DEEP_BLUE}
					/>
				) : (
					<Ionicons
						name="chevron-forward"
						size={25}
						color={COLORS.DEEP_BLUE}
					/>
				)}
			</Pressable>
			{accordionId === 1 && (
				<View>
					<TextInput
						className="flex-1 py-3 text-lg  border border-gray-300 rounded-lg mb-5 px-5"
						placeholder="Enter Name"
						keyboardType="default"
					/>
					<Pressable
						className="py-3 px-6 mx-auto border mr-0 mb-[15px] rounded-[30px]"
						style={{ backgroundColor: COLORS.DEEP_BLUE }}>
						<Text className="text-white border text-center">Update</Text>
					</Pressable>
				</View>
			)}
		</>
	);
}
