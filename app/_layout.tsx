import { Stack } from "expo-router";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
	return (
		<SafeAreaProvider>
			<Stack initialRouteName="(auth)">
				<Stack.Screen
					name="(auth)"
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="(tabs)"
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="+not-found" />
			</Stack>
		</SafeAreaProvider>
	);
}
