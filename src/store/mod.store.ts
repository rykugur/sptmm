import { ModTypes } from "@/types";
import { create } from "zustand";

interface ModState {
  mods: ModTypes.SPTMod[];
  setMods: (mods: ModTypes.SPTMod[]) => void;
}

export const useModStore = create<ModState>((set) => ({
  mods: [],
  setMods: (mods: ModTypes.SPTMod[]) => set({ mods }),
}));
