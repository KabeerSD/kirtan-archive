# Kirtan Archive

A simple, static website for sharing kirtan recordings. No build step, no frameworks — just HTML, CSS, and audio files.

## Project structure

```
kirtan-archive/
├── index.html          # Homepage with folder cards
├── harpreet.html       # Bhai Harpreet Singh ji recordings
├── doola.html          # Bhai Tejinderpal Singh ji Doola ji recordings
├── style.css           # Shared styles
├── audio/
│   ├── harpreet/       # MP3 files for Harpreet Singh ji
│   └── doola/          # MP3 files for Doola ji
└── README.md
```

## Where to place audio files

| Person | Folder |
|--------|--------|
| Bhai Harpreet Singh ji | `audio/harpreet/` |
| Bhai Tejinderpal Singh ji Doola ji | `audio/doola/` |

Use simple, lowercase filenames with hyphens instead of spaces, for example:

- `mool-mantra.mp3`
- `anand-sahib.mp3`

## How to add a new recording

1. **Add the MP3 file** to the correct folder (`audio/harpreet/` or `audio/doola/`).

2. **Open the matching HTML page** (`harpreet.html` or `doola.html`).

3. **Copy and paste** this block inside the `<ul class="recordings">` list (above the comment that says "TO ADD A NEW RECORDING"):

```html
<li class="recording">
  <span class="recording-title">Your Track Title Here</span>
  <audio controls preload="none" src="audio/harpreet/your-filename.mp3">
    Your browser does not support audio playback.
  </audio>
</li>
```

4. **Update two things:**
   - `Your Track Title Here` — the name shown on the page
   - `audio/harpreet/your-filename.mp3` — the path to your MP3 (use `audio/doola/` for Doola ji)

5. **Save the file** and open it in your browser to test playback.

### Tips

- Newest recordings are usually listed at the top — paste new entries above older ones.
- Keep filenames short and avoid spaces or special characters.
- `preload="none"` keeps the page fast by not loading audio until the user presses play.

## How to add a new person (optional)

If you want to add another kirtani later:

1. Create a new folder: `audio/their-name/`
2. Create a new page: `their-name.html` (copy from `harpreet.html` and update names/paths)
3. Add a new folder card on `index.html` linking to the new page

## Local preview

Open `index.html` in your browser, or run a simple local server:

```bash
# Python 3
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

A local server is recommended so audio paths load reliably.

## Deploy

This site is plain static files. Upload the whole project folder to any static host.

### Cloudflare Pages

1. Push this project to a GitHub or GitLab repository.
2. In [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select your repository.
4. Build settings:
   - **Framework preset:** None
   - **Build command:** (leave empty)
   - **Build output directory:** `/` (root)
5. Click **Save and Deploy**.

Your site will be live at `https://your-project.pages.dev`.

### Netlify

1. Push this project to a Git repository.
2. Go to [Netlify](https://www.netlify.com/) → **Add new site** → **Import an existing project**.
3. Connect your repository.
4. Build settings:
   - **Build command:** (leave empty)
   - **Publish directory:** `.` (root)
5. Click **Deploy site**.

Your site will be live at `https://random-name.netlify.app` (you can set a custom name).

### GitHub Pages

1. Push this project to a GitHub repository.
2. Go to the repository → **Settings** → **Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Select your main branch and `/ (root)` as the folder.
5. Click **Save**.

Your site will be live at `https://your-username.github.io/your-repo-name/`.

## License

Add your own license or usage notes here if needed.
