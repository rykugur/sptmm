import { join, appDataDir } from "@tauri-apps/api/path";
import { exists, readTextFile, writeTextFile } from "@tauri-apps/plugin-fs";
import { StateStorage } from "zustand/middleware";

export class TauriStorage implements StateStorage {
  constructor(private filename: string) {}

  private async loadData() {
    const filePath = await join(await appDataDir(), `${this.filename}.json`);
    if (!(await exists(filePath))) {
      await writeTextFile(filePath, "{}");
    }

    const json = await readTextFile(filePath);
    const data = JSON.parse(json);
    return { filePath, data };
  }

  async getItem(name: string) {
    try {
      const { data } = await this.loadData();
      return data[name] ?? null;
    } catch (err) {
      return null;
    }
  }

  async setItem(name: string, value: string) {
    const { filePath, data } = await this.loadData();
    data[name] = value;
    await writeTextFile(filePath, data);
  }

  async removeItem(name: string) {
    const { filePath, data } = await this.loadData();
    delete data[name];
    await writeTextFile(filePath, data);
  }
}
