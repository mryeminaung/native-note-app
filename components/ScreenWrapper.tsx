import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenWrapper({ children }: any) {
	return <SafeAreaView className="flex-1">{children}</SafeAreaView>;
}
