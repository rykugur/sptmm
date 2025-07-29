import { join, appDataDir } from "@tauri-apps/api/path";
import { ModTypes } from "@/types";

export const loadMods = async (): Promise<ModTypes.SPTMod[]> => {
  // const filePath = await join(await appDataDir(), `${this.filename}.json`);
  return [];
};
