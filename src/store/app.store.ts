import { TauriStorage } from "@/lib";
import { AppTypes } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AppState {
  githubPAT: string | undefined;
  setGithubPAT: (githubPAT: string) => void;

  mode: AppTypes.Mode;
  setMode: (mode: AppTypes.Mode) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      githubPAT: undefined,
      setGithubPAT: (githubPAT: string) => set({ githubPAT }),
      mode: "system",
      setMode: (mode: AppTypes.Mode) => set({ mode }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => new TauriStorage("app")),
    },
  ),
);
