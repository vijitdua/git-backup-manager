# GitHub Repo Backup Buddy 💾

Too broke for GitHub Enterprise but also don’t wanna wake up to a teammate nuking your main branch with a casual `--force`?

Yeah, **this repo’s your new best friend**.

It’s a dumb little Node.js script that backs up your GitHub repositories locally every time you run it — nice timestamped folders, organized by repo, so you always have receipts 🧾.

No CI, no cloud BS, no effort. Just run it when you feel the paranoia setting in.

---

## 🛠 What it Does

- Backs up all the GitHub repos you list
- Makes a new backup folder every time you run it (`backups/<repo>/<timestamp>/`)
- That’s literally it lol

---

## 🧃 How to Use

### 1. Clone this bad boi

```bash
git clone https://github.com/yourusername/github-backup.git
cd github-backup
```

### 2. Install deps

```bash
npm install
```

### 3. Add your repo list

Edit `repos.js` and add your GitHub repo URLs:

```js
export const REPOS = {
  myCoolRepo: "https://github.com/yourUsername/myCoolRepo.git",
  privateStuff: "https://<your_token>@github.com/you/privateStuff.git", // if private
};
```

### 4. Run it and chill

```bash
npm start
```

That’s it. Your repos are now chilling inside `./backups`, neatly tucked into timestamped folders like they’re in cryo-sleep.

---

## 🗃 Example Folder Structure

```
backups/
├── myCoolRepo/
│   ├── 2025-03-29_17-10-44/
│   └── ...
├── privateStuff/
│   ├── 2025-03-29_17-10-44/
│   └── ...
```

---

## 🤖 I Didn't Even Write This

Let’s be real, I didn’t code this whole thing. GPT did. I just asked for what I wanted and then added some ✨ flavor.

But hey — if it works, it works.

---

## 🤝 Wanna Build on This?

Take inspo from something a bit fancier I actually put effort into:

> **OutWatch – Service Outage Monitor (Backend)**  
> A backend system that monitors services and sends Discord alerts when stuff breaks.  
> Check the project [here](https://vijitdua.com/projects/#status)  
> GitHub repo: [OutWatch Backend](https://github.com/vijitdua/vijitdua.com)

---

## 📌 Future Features? (Maybe)

- Zip the backups?
- Auto-delete old stuff?
- .env support for private tokens?
- Discord notification that your backups ran?

I dunno man, I’m just tryna protect my code from getting oof’d.

---

## ⚠️ License / Disclaimer / Legalese?

MIT. Do what you want.

And yeah, parts of this README and all the code are courtesy of GPT, but if you ask nicely I’ll pretend I wrote it.

---

## 🐢 Final Thoughts

Stay broke. Stay backed up. Stay safe.  
Peace ✌️

---