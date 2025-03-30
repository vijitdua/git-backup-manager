// backup.js

import fs from "fs";
import path from "path";
import simpleGit from "simple-git";
import { fileURLToPath } from "url";
import { getTimestamp } from "./utils.js";

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function backupRepos(REPOS) {
    const BACKUP_BASE_DIR = path.join(__dirname, "backups");
    const timestamp = getTimestamp();

    if (!fs.existsSync(BACKUP_BASE_DIR)) fs.mkdirSync(BACKUP_BASE_DIR);

    for (const [repoName, repoUrl] of Object.entries(REPOS)) {
        const targetDir = path.join(BACKUP_BASE_DIR, repoName, timestamp);
        fs.mkdirSync(targetDir, { recursive: true });

        console.log(`\n📦 Backing up ${repoName} -> ${targetDir}`);

        try {
            const git = simpleGit();
            await git.clone(repoUrl, targetDir, ["--depth", "1"]);
            console.log(`✅ Successfully backed up ${repoName}`);
        } catch (err) {
            console.error(`❌ Failed to backup ${repoName}:`, err.message);
        }
    }
}
