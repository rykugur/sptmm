import { ModTypes } from "@/types";
import { Octokit } from "@octokit/rest";

export const getLatestRelease = (
  mod: ModTypes.SPTGithubMod,
  githubPAT: string | undefined,
) => {
  const octokit = new Octokit({ auth: githubPAT });

  return octokit.rest.repos.getLatestRelease({
    owner: mod.owner,
    repo: mod.repo,
  });
};

export const listReleases = (
  mod: ModTypes.SPTGithubMod,
  githubPAT: string | undefined,
) => {
  const octokit = new Octokit({ auth: githubPAT });

  return octokit.rest.repos.listReleases({ owner: mod.owner, repo: mod.repo });
};
