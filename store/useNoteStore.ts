import { create } from "zustand";

type State = {};

type Actions = {};

export const useNoteStore = create<State & Actions>((set) => ({
	notes: [],
}));
