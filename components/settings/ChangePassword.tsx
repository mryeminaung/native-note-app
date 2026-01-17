import { COLORS } from "@/constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

type ChangePasswordProps = {
	accordionId: number;
	setAccordionId: (id: number) => void;
};

export default function ChangePassword({
	accordionId,
	setAccordionId,
}: ChangePasswordProps) {
	const togglePwdEdit = (id: number) => {
		accordionId === id ? setAccordionId(0) : setAccordionId(id);
	};

	return (
		<>
			<Pressable
				onPress={() => togglePwdEdit(2)}
				className="flex-row justify-between items-center py-3">
				<View className="flex-row items-center gap-x-[10px]">
					<MaterialIcons
						name="lock"
						style={{
							backgroundColor: COLORS.DEEP_BLUE,
							padding: 3,
							borderRadius: 5,
						}}
						color={COLORS.LIGHT_SKY_BLUE}
						size={30}
					/>
					<Text className="text-base">Change Password</Text>
				</View>
				{accordionId === 2 ? (
					<Ionicons
						name="chevron-down"
						size={25}
						color="black"
					/>
				) : (
					<Ionicons
						name="chevron-forward"
						size={25}
						color="black"
					/>
				)}
			</Pressable>
			{accordionId === 2 && (
				<View>
					<TextInput
						className="flex-1 py-3 text-lg  border border-gray-300 rounded-lg mb-5 px-5"
						placeholder="Old Password"
						keyboardType="default"
					/>
					<TextInput
						className="flex-1 py-3 text-lg  border border-gray-300 rounded-lg mb-5 px-5"
						placeholder="New Password"
						keyboardType="default"
					/>
					<Pressable
						className="py-3 px-6 mx-auto border mr-0 mb-[15px] rounded-[30px]"
						style={{ backgroundColor: COLORS.DEEP_BLUE }}>
						<Text className="text-white border text-center">Change</Text>
					</Pressable>
				</View>
			)}
		</>
	);
}
