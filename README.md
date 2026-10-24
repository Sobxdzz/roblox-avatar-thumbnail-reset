# roblox-thumbnail-reset

A small browser console script that resets your Roblox avatar thumbnail (profile picture) camera position and emote back to default, using Roblox's own thumbnail customization API.

## How to use it

1. **Log into Roblox** in your browser as normal.
2. Go to your profile page — `https://www.roblox.com/users/profile`
3. Open **Developer Tools**:
   - **Windows/Linux:** press `F12`, or `Ctrl+Shift+I`
   - **Mac:** press `Cmd+Option+I`
   - Or right-click anywhere on the page → **Inspect**
4. Click the **Console** tab in the Developer Tools panel.
5. If this is your first time using the console in Chrome/Edge, it may show a warning like *"Type 'allow pasting' to continue"* — type `allow pasting` and press Enter.
6. Copy the full script from [`Reverter.js`](./Reverter.js)
7. Paste it into the console and press **Enter**.
8. **Hard-refresh** your profile page (`Ctrl+Shift+R` / `Cmd+Shift+R`) to see the updated thumbnail. 


## What it does

- Resets your avatar thumbnail's camera distance, field of view, and rotation to default values
- Clears any emote/pose set on your profile picture


## Requirements

- A desktop browser (Chrome, Firefox, or Edge all work)
- You must be logged into your Roblox account
 — plain JavaScript pasted into the browser console


## Troubleshooting

- **All statuses show something other than 200** — Roblox may have changed or disabled the endpoint. Check `https://avatar.roblox.com/v1/avatar/thumbnail-customizations` (note the plural, GET request — just visit the URL) in a new tab to see your current raw settings; if that page also errors, the feature is likely unavailable right now.
- **One `thumbnailType` fails but others succeed** — that's normal; not all three type values are necessarily valid for every account. As long as at least one returns `200`, the reset should apply.
- **Thumbnail doesn't visibly change** — Roblox caches and regenerates thumbnails asynchronously; wait a few minutes and hard-refresh again.
- **Nothing happens / instant error about `fetch`** — make sure you're on a `roblox.com` page when you run the script (it needs to send your login cookies with the request).

## License

MIT — do whatever you want with it, no warranty provided.

written by gronk, coded by claude
