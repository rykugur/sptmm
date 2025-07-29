export type ModType = "github" | "googleDrive";

export interface SPTMod {
  id: string;
  name: string;
  type: ModType;
}

export interface SPTGithubMod extends SPTMod {
  owner: string;
  repo: string;
}

export interface SPTGoogleDriveMod extends SPTMod {}
