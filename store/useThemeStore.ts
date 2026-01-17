import { create } from "zustand";

type State = {
	theme: "dark" | "system" | "light";
};

type Actions = {};

export const useThemeStore = create<State & Actions>((set) => ({
	theme: "system",
}));
