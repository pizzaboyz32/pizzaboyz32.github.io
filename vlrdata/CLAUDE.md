## Project Overview
Vlrdata is website that showcase PzFx's Analysis and match data from Valorant Tournament.

- There is already a template, protize on using the template to create a match summary page in "./assets". There should css and js file. If the user or you think you want to create new segment, please ask user first and if the user say yes, try adding those segment into the template for further use.
- Pull stats data via curl: "curl -s "https://vlrggapi.vercel.app/v2/match/details?match_id=XXXXXX" -o data.json" and using jq to filter out redundant field like:
    - streams, vods, head_to_head (not for analysis)
    - economy_by_map, performance.by_map (duplicated information)
    - kill_matrix (Duplicated in multiple segment)
- photos and team assets will be in folder either full name (like "Full Sense") or abbrivation (Like "FS"), if you not sure or couldn't find the folder, please ask the user.
- The user will provide you with analysis report, read it and search for correlation with the stats data and present it in the website.
- there is an "index.html" which is a hub for the web user to go to each summary page, update it every time there is an new entry. priotize the latest page on top.

Avoid over-engineering. Prefer clarity over cleverness.

## Workflow — Creating a New Match Summary Page

Skip the discovery work. The schema below is the authoritative reference — do **not** Read existing `data/*.js` or `assets/match-render.js` files to figure out structure.

### 0. Input format (analysis folder)
The user provides a single folder (e.g. `FSvsGE/`) that holds both the analysis text and the highlight videos:
- **`*.txt`** — the analysis. Line 1 is a free-form title. Look for `Matchid: NNNNNN` near the top (usually line 3) — this is the API match id. Inline placeholders shaped `[แทรก วิดีโอ HilightN.mp4 คำอธิบายประกอบวิดีโอ "..."]` mark where each clip goes and the caption to use.
- **`hilightN.mp4`** files — the highlight clips. Reference them in JS with a lowercase relative path like `"FSvsGE/hilight1.mp4"` (Windows is case-insensitive but lowercase keeps things consistent).

**Videos embed inline within the analysis section** (not in a separate reel) — they're meant to sit right next to the prose that describes the moment, so readers can compare narrative to footage. Each placeholder becomes one entry in the relevant analysis card's `paragraphs` array as `{ video, title, caption }` (see schema §5). The renderer auto-pauses other videos when one starts playing, so don't worry about audio overlap.

### 1. Fetch API (handle quirks)
```
curl.exe -s --max-time 60 "https://vlrggapi.vercel.app/v2/match/details?match_id=XXXXXX" -o api_XXXXXX.json
```
- Endpoint frequently returns `FUNCTION_INVOCATION_TIMEOUT` (plain text, not JSON). Validate first char is `{`; retry up to 5×.
- `jq` is NOT installed — use Python (`python3 -c "import json; ..."`) for inspection.

### 2. API JSON shape (top-level)
- `data.segments[0]` — the match. Key fields: `event`, `date`, `map_vetos`, `teams[]`, `maps[]`.
- `data.segments[0].map_vetos` — semicolon-separated veto string, e.g. `"FS ban Ascent; GE ban Fracture; FS pick Split; GE pick Breeze; FS ban Haven; GE ban Pearl; Lotus remains"`. Parse for the full veto list — include all bans, picks, and the decider in the data file, even if the decider didn't get played.
- `maps[i]`: `map_name`, `score:{team1,team2}`, `score_ct:{team1,team2}`, `score_t:{team1,team2}`, `players:{team1[],team2[]}`, `rounds[]`, `performance.kill_matrix`.
- **Rounds list is padded to 24** even if game ended earlier. Truncate to `score.team1 + score.team2`.
- **Side assignment**: each team has CT+T scores that sum to their total. First half = one team CT + other team T = 12 rounds. Match the split that adds to 12 to determine who defended first half.

### 3. kill_matrix encoding (gotcha)
Whole-match matrix duplicated in every map (per CLAUDE.md). Cells like `"123+9"` are **kills + opp_kills + diff concatenated** (kills=12, opp=3, diff=+9). Parse by extracting the trailing signed integer, then splitting the prefix where `a - b == diff`.

### 4. Output files (two only)
1. `data/{match_id}.js` — `window.matchData = {...}` literal. Schema below.
2. `match_{t1}_vs_{t2}.html` — 16-line stub. Just copy this template; only change title and the `<script src="data/{id}.js">` line.

### 5. `data/{id}.js` schema (the only schema reference you need)
```
{
  meta: { event, stage, date, format },
  teams: { t1: {name, tag, shortTag, logo, color, colorRgb, score, isWinner}, t2: {...} },
  vetoDesc: "...",
  veto: [ {team:"t1"|"t2"|null, action:"ban"|"pick"|"left", map, mapFile, note?} ],
  maps: [{
    name, file, pickedBy:"t1"|"t2"|null, duration, score:{t1,t2},
    sectionTitle, sectionDesc,
    composition: { t1:[{name,agent}], t2:[...] },
    stats: { t1:[{name,photo,agent,r,acs,k,d,a,kdDiff,kast,adr,hs,fk,fd,isTop?}], t2:[...] },
    rounds: [ ["t1"|"t2", "ct"|"t"], ... ],   // length = total rounds, NOT 24
    sideBreakdown: [{team,label,note,value}, ...4 entries],
    entryDuels: [{team,name,photo,agent,fk,fd}, ...],
    entryInsight: "..."
  }],
  radar: { sectionDesc, t1:{rating,acs,kast,adr,hs,kpp}, t2:{...}, insights:[{team,label,value,delta}], note },
  killMatrix: { desc, cols:[{name,photo}], rows:[{name,photo,values:[{k,opK,diff}]}], statLinks:[{value,label}] },
  analysis: [ {title, sub?, paragraphs:[ html | {video, title, caption?} ], pull?, stats?:[{value,label}]}, ... ]
  // paragraphs entries can be either a string of HTML or a video object — videos render inline
  // between paragraphs as a bordered figure with caption. Place each video right after the
  // paragraph that introduces the moment so prose and footage stay aligned.
}
```

### 6. Team folder + color map (fixed)
| Team | Folder | Color | RGB |
|---|---|---|---|
| Paper Rex (PRX) | `Paper rex/` | `#ff5252` | `255,82,82` |
| Kiwoom DRX (KRX) | `Kiwoom DRX/` | `#3aa9ff` | `58,169,255` |
| T1 | `T1/` | `#ff4655` | `255,70,85` |
| Rex Regum Qeon (RRQ) | `RRQ/` | `#ff8c2a` | `255,140,42` |
| FULL SENSE (FS) | `FULLSENSE/` | `#ff4655` | `255,70,85` |
| Global Esports (GE) | `GE/` | `#4cc9f0` | `76,201,240` |
| DetonatioN FocusMe (DFM) | `DFM/` | — ask if needed | — |
| Nongshim RedForce (NS) | `NS/` | — ask if needed | — |

Player photo filenames vary in case and may have typos (e.g. KRX's `free1ing.png` for player `free1ng`). If a photo is missing, use `noprofile.png`.

### 7. `index.html` update (no full Read needed)
Targeted edits only:
- Insert new `<a class="match-card">…</a>` block right after `<div class="match-grid">` and bump the previous "Latest" badge.
- Bump the two counters in `.hero-stats` (`Matches Analyzed`, `Maps Covered`).

### 8. Skip these to save tokens
- Do NOT Read `assets/match-render.js` or `assets/match.css` — they are stable, the schema above is sufficient.
- Do NOT Read existing `data/*.js` files for reference — schema above is sufficient.
- Do NOT Read the full `index.html` — use Grep/Edit on the known landmarks above.
- Only inspect API JSON with one Python pass that prints what you need (scores, players, rounds, kill_matrix). One inspection script ≤ one Bash call.
