import { COLORS } from "@/constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

type ToggleThemeProps = {
	accordionId: number;
	setAccordionId: (id: number) => void;
};

export default function ToggleTheme({
	accordionId,
	setAccordionId,
}: ToggleThemeProps) {
	const [theme, setTheme] = useState<"dark" | "system" | "light">("system");

	const toggleThemeEdit = (id: number) => {
		accordionId === id ? setAccordionId(0) : setAccordionId(id);
	};

	return (
		<>
			<Pressable
				onPress={() => toggleThemeEdit(3)}
				className="flex-row justify-between items-center py-3">
				<View className="flex-row items-center gap-x-[10px]">
					<MaterialIcons
						name="palette"
						style={{
							backgroundColor: COLORS.DEEP_BLUE,
							padding: 3,
							borderRadius: 5,
						}}
						color={COLORS.LIGHT_SKY_BLUE}
						size={30}
					/>
					<Text className="text-base">Theme Preference</Text>
				</View>
				{accordionId === 3 ? (
					<Ionicons
						name="chevron-down"
						size={25}
					/>
				) : (
					<Ionicons
						name="chevron-forward"
						size={25}
					/>
				)}
			</Pressable>
			{accordionId === 3 && (
				<View className="flex-row gap-x-5 justify-center">
					<Pressable>
						<View className="flex-col items-center gap-y-1.5 border px-7 py-3 rounded-lg">
							<Ionicons
								name="moon-outline"
								size={24}
								color="black"
							/>
							<Text>Dark</Text>
						</View>
					</Pressable>
					<Pressable>
						<View className="flex-col items-center gap-y-1.5 border p-3 px-5 rounded-lg">
							<Ionicons
								name="laptop-outline"
								size={24}
								color="black"
							/>
							<Text>System</Text>
						</View>
					</Pressable>
					<Pressable>
						<View className="flex-col items-center gap-y-1.5 border px-7 py-3 rounded-lg">
							<Ionicons
								name="sunny-outline"
								size={24}
								color="black"
							/>
							<Text>Light</Text>
						</View>
					</Pressable>
				</View>
			)}
		</>
	);
}
