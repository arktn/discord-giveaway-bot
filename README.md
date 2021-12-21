<div align="center">
  <h1 align="center">Simple discord giveaway bot</h1> 

[![GitHub Repo stars](https://img.shields.io/github/stars/0rso/discord-giveaway-bot?style=social)](https://github.com/0rso/discord-giveaway-bot/stargazers) [![GitHub forks](https://img.shields.io/github/forks/0rso/discord-giveaway-bot?style=social)](https://github.com/0rso/discord-giveaway-bot/network/members)

</div>

Hi! This is a repository for a simple **discord giveaway bot**, this discord bot is made with [discord.js](https://discord.js.org/) and an npm package called discord-giveaways. If you would like to know how to install and setup this discord bot head to "[How to install?](#how-to-install)"

## Preview of discord bot
![Preview](https://i.imgur.com/2FYo4T1.png)This is what will show when the bot has been setup successfully.

## Features
* Create your own custom giveaways!
* Custom time!
* Custom prize!
* Custom role mention!
* Multiple winners!
* Not manipulable!

## How to install?

### Using [git clone](https://git-scm.com/docs/git-clone):
1. You have to install [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads).
2. Create a folder in a place you won't accidentally delete it.
3. Open Command Prompt (Windows) or terminal (Linux).
4. Execute command `cd [path to folder]`.
	- Example on Windows: `cd C:\Users\0rso\Desktop\discord-giveaway-bot`
	- Example on Linux: `cd /home/0rso/Documents/discord-giveaway-bot`
6. Execute `git clone https://github.com/0rso/discord-giveaway-bot.git` command.
7. When you see all of the github files in your folder this means that you downloaded the bot succesfully.

### Using this repo zip file:
1. You have to install [Node.js](https://nodejs.org/en/download/) and a program to extract zip files. I recommend [7-Zip](https://www.7-zip.org/) since it is 100% free, no ad and open-source.
2. Create a folder in a place you won't accidentally delete it.
3. Download the repository as a zip file, which can be done [here](https://github.com/0rso/discord-giveaway-bot/archive/refs/heads/master.zip).
4. Extract the zip file to the folder.
5. When you see all of the github files in your folder this means that you downloaded the bot succesfully.

## Usage + Setup

**Step 1:** Bot settings

Open config.json and change the following values:

| Required value | What does this value mean? |
| --- | --- |
| `token` | (String) This is what discord will use to log into your bot. Get this token from the [Discord Developer Portal](https://discord.com/developers/applications) |
| `prefix` | (String) This is the prefix to the commands. |

| Optional Value | What does this value mean? |
| --- | --- |
| `giveawayRoleID` | (String) This is the role the bot will mention when the giveaway starts. Default (empty) will be set to `@everyone`. Has to be a role ID |
| `showMention` | (Boolean) This determines if the mention will be shown or not. |
| `giveawayMention` | (Boolean) This determines if there will be a role mentioned. |
| `giveawayManagerID` | (String) This options lets the bot know who is able to start giveaways. Default (empty) will be set to any user with MANAGE_MESSAGES permission. Has to be a user ID. |

**Step 2:** Install dependencies (only the first time)
- Windows:
  - Run `setup.bat` file
- Linux:
  - Run `npm i` command

**Step 3:** Start the bot
- Windows:
  - Run `start.bat` file
- Linux:
  - Run `node index.js` command

And you are done! You have successfully made your discord bot run. If you are having any troubles refer to the GIF below or open an [issue](https://github.com/0rso/discord-giveaway-bot/issues/new).

![Example](https://user-images.githubusercontent.com/48368615/120048766-de352780-c00f-11eb-882e-b69e45e96c64.gif)
> The token in this GIF is invalid. You have to use your own.

## Contributing to the repository

1. [Fork the repository!](https://github.com/0rso/discord-giveaway-bot/fork)
2. Clone your fork: `git clone https://github.com/your-username/discord-giveaway-bot.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request! ₍ᐢ•ﻌ•ᐢ₎*･ﾟ｡

## Authors

Authored and maintained by [@0rso](https://github.com/0rso) & [@JacProsser](https://github.com/JacProsser).
