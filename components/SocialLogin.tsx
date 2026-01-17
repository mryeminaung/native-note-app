import React from "react";
import { Image, View } from "react-native";

export default function SocialLogin() {
	return (
		<View className="flex-row justify-center mb-6 gap-x-5">
			<View className="bg-white p-2 rounded-xl shadow-md shadow-slate-300 border border-slate-400">
				<Image
					source={require("@/assets/images/facebook_logo.png")}
					className="w-10 h-10"
					resizeMode="contain"
				/>
			</View>

			<View className="bg-white p-2 rounded-xl shadow-md shadow-slate-300 border border-slate-400">
				<Image
					source={require("@/assets/images/google_logo.png")}
					className="w-10 h-10"
					resizeMode="contain"
				/>
			</View>

			<View className="bg-white p-2 rounded-xl shadow-md shadow-slate-300 border border-slate-400">
				<Image
					source={require("@/assets/images/twitter_logo.png")}
					className="w-10 h-10"
					resizeMode="contain"
				/>
			</View>
		</View>
	);
}
