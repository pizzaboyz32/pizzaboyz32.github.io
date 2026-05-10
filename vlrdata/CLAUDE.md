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