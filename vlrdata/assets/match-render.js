/* ===== Match Page Renderer =====
 * Reads window.matchData and renders the full match page into #match-root.
 * Expected schema documented in /data/_schema.md
 */

// ---------- Helpers ----------
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sign = (n) => (n > 0 ? `+${n}` : `${n}`);
const diffCls = (n) => n > 0 ? 'pos' : (n < 0 ? 'neg' : 'zero');
const diffSym = (n) => n > 0 ? `+${n}` : (n < 0 ? `−${Math.abs(n)}` : '0');
const kmCls = (n) => {
  if (n >= 4) return 'k-very-pos';
  if (n >= 1) return 'k-pos';
  if (n === 0) return 'k-zero';
  if (n >= -3) return 'k-neg';
  return 'k-very-neg';
};
const pct = (val, max) => Math.min(100, Math.round((val / max) * 100));

// ---------- Theme setup ----------
function setupTheme(d) {
  const r = document.documentElement.style;
  r.setProperty('--t1', d.teams.t1.color);
  r.setProperty('--t1-rgb', d.teams.t1.colorRgb);
  r.setProperty('--t2', d.teams.t2.color);
  r.setProperty('--t2-rgb', d.teams.t2.colorRgb);
  // Accent follows winner color (or t1 if neither flagged)
  const winnerKey = d.teams.t1.isWinner ? 't1' : (d.teams.t2.isWinner ? 't2' : 't1');
  r.setProperty('--accent', d.teams[winnerKey].color);
  r.setProperty('--accent-rgb', d.teams[winnerKey].colorRgb);
  // Title
  document.title = `${d.teams.t1.shortTag} vs ${d.teams.t2.shortTag} — ${d.meta.event}`;
}

// ---------- Hero ----------
function renderHero(d) {
  const t1 = d.teams.t1, t2 = d.teams.t2;
  const winnerKey = t1.isWinner ? 't1' : 't2';
  const winnerName = d.teams[winnerKey].name.toUpperCase() + ' WIN';
  const t1ScoreCls = t1.isWinner ? '' : 'lose';
  const t2ScoreCls = t2.isWinner ? '' : 'lose';
  const eventLine = `${d.meta.event} · ${d.meta.stage}`.toUpperCase();
  const mapsList = d.maps.map(m => m.name).join(' · ');
  return `
<header class="hero">
  <div class="container">
    <div class="event-tag"><span class="dot"></span> ${esc(eventLine)}</div>
    <div class="scoreboard">
      <div class="team-block">
        <img class="team-logo" src="${esc(t1.logo)}" alt="${esc(t1.shortTag)}" />
        <div><div class="team-name">${esc(t1.name.toUpperCase())}</div><span class="team-tag">${esc(t1.tag)}</span></div>
      </div>
      <div class="score-card">
        <div class="meta">FINAL · ${esc(d.meta.format)}${d.meta.formatNote ? ' ' + esc(d.meta.formatNote) : ''}</div>
        <div class="score"><span class="${t1ScoreCls}">${t1.score}</span> : <span class="${t2ScoreCls}">${t2.score}</span></div>
        <div class="winner ${winnerKey}">${esc(winnerName)}</div>
      </div>
      <div class="team-block right">
        <img class="team-logo" src="${esc(t2.logo)}" alt="${esc(t2.shortTag)}" />
        <div><div class="team-name">${esc(t2.name.toUpperCase())}</div><span class="team-tag">${esc(t2.tag)}</span></div>
      </div>
    </div>
    <div class="meta-grid">
      <div class="meta-card"><div class="lbl">DATE</div><div class="val">${esc(d.meta.date)}</div></div>
      <div class="meta-card"><div class="lbl">STAGE</div><div class="val">${esc(d.meta.stage)}</div></div>
      <div class="meta-card"><div class="lbl">FORMAT</div><div class="val">${esc(d.meta.format)}</div></div>
      <div class="meta-card"><div class="lbl">MAPS PLAYED</div><div class="val">${esc(mapsList)}</div></div>
    </div>
  </div>
</header>`;
}

// ---------- Veto ----------
function renderVeto(d) {
  const t1 = d.teams.t1, t2 = d.teams.t2;
  const items = d.veto.map(v => {
    const mapFile = `map data/${v.mapFile || (v.map + '.avif')}`;
    if (v.action === 'pick') {
      const team = v.team === 't1' ? t1 : t2;
      const teamScore = d.maps.find(m => m.name.toLowerCase() === v.map.toLowerCase());
      const scoreNote = teamScore ? `· ${teamScore.score.t1}–${teamScore.score.t2} ${teamScore.score.t1 > teamScore.score.t2 ? t1.shortTag : t2.shortTag}` : '';
      return `<div class="veto-item"><span class="badge pick">${esc(team.shortTag)} PICK</span><img src="${esc(mapFile)}" alt="${esc(v.map)}" /><div class="body"><div class="map">${esc(v.map)}</div><div class="by by-${v.team}">Picked by ${esc(team.shortTag)} ${scoreNote}</div></div></div>`;
    } else if (v.action === 'ban') {
      const team = v.team === 't1' ? t1 : t2;
      return `<div class="veto-item banned"><span class="badge ban">${esc(team.shortTag)} BAN</span><img src="${esc(mapFile)}" alt="${esc(v.map)}" /><div class="body"><div class="map">${esc(v.map)}</div><div class="by by-${v.team}">Banned by ${esc(team.shortTag)}</div></div></div>`;
    } else { // 'left' / decider
      const note = v.note || (d.maps.find(m => m.name.toLowerCase() === v.map.toLowerCase()) ? 'Decider' : 'Not played');
      return `<div class="veto-item"><span class="badge left">${v.played ? 'DECIDER' : 'DECIDER'}</span><img src="${esc(mapFile)}" alt="${esc(v.map)}" /><div class="body"><div class="map">${esc(v.map)}</div><div class="by">${esc(note)}</div></div></div>`;
    }
  }).join('');
  return `
<section>
  <div class="container">
    <div class="section-head"><div><h2>Map <span>Veto</span></h2><p>${esc(d.vetoDesc || '')}</p></div></div>
    <div class="veto-row">${items}</div>
  </div>
</section>`;
}

// ---------- Map Block ----------
function renderMapBlock(map, idx, d) {
  const t1 = d.teams.t1, t2 = d.teams.t2;
  const mapNum = idx + 1;
  const t1Won = map.score.t1 > map.score.t2;
  const t1ScoreCls = t1Won ? 'w' : 'l';
  const t2ScoreCls = t1Won ? 'l' : 'w';
  const mapFile = map.file || `map data/${map.name.toLowerCase()}.avif`;
  const pickedByLabel = map.pickedBy ? `Picked by ${esc(d.teams[map.pickedBy].shortTag)}` : 'Decider';
  const sectionTitle = map.sectionTitle || `Map ${mapNum} · ${map.name}`;

  // Agents
  const compHtml = (key) => `
    <div class="agent-side"><h4 class="${key}">${esc(d.teams[key].shortTag)} · COMPOSITION</h4>
      <div class="agent-row">
        ${map.composition[key].map(p => `<div class="agent-pill"><img src="agents data/${esc(p.agent.toLowerCase())}.png"/><span class="pname">${esc(p.name)}</span><span class="pagent">${esc(cap(p.agent))}</span></div>`).join('')}
      </div>
    </div>`;

  // Side breakdown
  const sideHtml = map.sideBreakdown.map(s => `
    <div class="side-card ${s.team}"><div><div class="l">${esc(s.label)}</div><div class="ratio">${esc(s.note)}</div></div><div class="v">${esc(s.value)}</div></div>`).join('');

  // Stats tables
  const statsHtml = (key) => {
    const players = map.stats[key];
    const rows = players.map(p => {
      const cls = p.isTop ? 'top' : '';
      const ratingCell = p.isTop ? `<b>${p.r.toFixed(2)}</b>` : p.r.toFixed(2);
      const kdCls = p.kdDiff > 0 ? 'pos' : (p.kdDiff < 0 ? 'neg' : '');
      return `<tr class="${cls}"><td class="player"><img src="${esc(p.photo)}"/><img class="a" src="agents data/${esc(p.agent.toLowerCase())}.png"/><span class="name">${esc(p.name)}</span></td><td>${ratingCell}</td><td>${p.acs}</td><td>${p.k}</td><td>${p.d}</td><td>${p.a}</td><td class="${kdCls}">${diffSym(p.kdDiff)}</td><td>${p.kast}%</td><td>${p.adr}</td><td>${p.hs}%</td><td>${p.fk}</td><td>${p.fd}</td></tr>`;
    }).join('');
    return `
      <div class="stats-title">${esc(d.teams[key].name.toUpperCase())} — PLAYER STATS</div>
      <table class="stats-table">
        <thead><tr><th style="text-align:left">PLAYER</th><th>RATING</th><th>ACS</th><th>K</th><th>D</th><th>A</th><th>+/–</th><th>KAST</th><th>ADR</th><th>HS%</th><th>FK</th><th>FD</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>`;
  };

  const titleParts = sectionTitle.split(' · ');
  const titleMain = titleParts[0] || sectionTitle;
  const titleAccent = titleParts.slice(1).join(' · ');
  return `
<section>
  <div class="container">
    <div class="section-head"><div><h2>${esc(titleMain)}${titleAccent ? ' · <span>' + esc(titleAccent) + '</span>' : ''}</h2><p>${esc(map.sectionDesc || '')}</p></div></div>
    <div class="map-block">
      <div class="map-banner"><img src="${esc(mapFile)}" alt="${esc(map.name)}" /><div class="overlay"><div class="map-title">${esc(map.name.toUpperCase())}</div><div class="map-meta">Duration ${esc(map.duration)} · ${pickedByLabel}</div></div></div>
      <div class="map-score">
        <div class="team"><img src="${esc(t1.logo)}" />${esc(t1.name.toUpperCase())}</div>
        <div class="nums"><span class="${t1ScoreCls}">${map.score.t1}</span> · <span class="${t2ScoreCls}">${map.score.t2}</span></div>
        <div class="team right"><img src="${esc(t2.logo)}" />${esc(t2.name.toUpperCase())}</div>
      </div>
      <div class="agent-strip">${compHtml('t1')}${compHtml('t2')}</div>
      <div class="flow-wrap">
        <div class="flow-head"><div class="flow-title">Round Flow · ${map.rounds.length} Rounds</div>
          <div class="flow-legend">
            <span><span class="sw" style="background:rgba(${t1.colorRgb},.45)"></span> ${esc(t1.shortTag)} Attack</span>
            <span><span class="sw" style="background:#2c5d3a"></span> ${esc(t1.shortTag)} Defense</span>
            <span><span class="sw" style="background:rgba(${t2.colorRgb},.45)"></span> ${esc(t2.shortTag)} Attack</span>
            <span><span class="sw" style="background:#7a5b1d"></span> ${esc(t2.shortTag)} Defense</span>
          </div>
        </div>
        <div class="timeline" data-flow="${idx}"></div>
        <div class="side-grid">${sideHtml}</div>
      </div>
      <div class="stats-wrap">
        ${statsHtml('t1')}
        <div style="margin-top:18px"></div>
        ${statsHtml('t2')}
      </div>
    </div>
  </div>
</section>`;
}

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// ---------- Round Flow timelines ----------
function renderRoundFlows(d) {
  d.maps.forEach((map, idx) => {
    const el = document.querySelector(`[data-flow="${idx}"]`);
    if (!el) return;
    map.rounds.forEach((r, i) => {
      const [team, side] = r;
      const teamShort = d.teams[team]?.shortTag || team.toUpperCase();
      const div = document.createElement('div');
      div.className = `rd ${team}-${side}`;
      div.title = `Round ${i + 1} · ${teamShort} ${side.toUpperCase()} win`;
      const pistolMark = (i === 0 || i === 12) ? '<div class="marker" title="Pistol"></div>' : '';
      div.innerHTML = `${pistolMark}<div class="num">${i + 1}</div><div class="sd">${side.toUpperCase()}</div>`;
      el.appendChild(div);
    });
  });
}

// ---------- Radar ----------
function renderRadarSection(d) {
  const r = d.radar;
  const insights = r.insights.map(i => `
    <div class="insight ${i.team}"><div class="lbl">${esc(i.label)}</div><div class="val">${esc(i.value)}</div><div class="delta">${esc(i.delta)}</div></div>`).join('');
  return `
<section>
  <div class="container">
    <div class="section-head"><div><h2>Performance <span>Radar</span></h2><p>${esc(r.sectionDesc || '')}</p></div></div>
    <div class="radar-wrap">
      <div class="radar-card">
        <div class="legend-row">
          <span class="chip"><span class="sw" style="background:rgba(${d.teams.t1.colorRgb},.85)"></span> ${esc(d.teams.t1.name)}</span>
          <span class="chip"><span class="sw" style="background:rgba(${d.teams.t2.colorRgb},.85)"></span> ${esc(d.teams.t2.name)}</span>
        </div>
        <canvas id="radarChart" height="380"></canvas>
      </div>
      <div class="radar-card">
        <h3 style="margin-bottom:14px;font-size:18px">KEY GAPS</h3>
        <div class="insight-grid">${insights}</div>
        <p style="color:var(--muted);font-size:12.5px;margin-top:14px">${r.note || ''}</p>
      </div>
    </div>
  </div>
</section>`;
}

function drawRadarChart(d) {
  const ctx = document.getElementById('radarChart');
  if (!ctx || !window.Chart) return;
  const r = d.radar;
  const labels = ['Rating', 'ACS', 'KAST %', 'ADR', 'HS %', 'Kills / Player'];
  const norm = (v, max) => Math.min(100, Math.round((v / max) * 100));
  const t1 = [norm(r.t1.rating, 1.5), norm(r.t1.acs, 250), r.t1.kast, norm(r.t1.adr, 200), norm(r.t1.hs, 50), norm(r.t1.kpp, 20)];
  const t2 = [norm(r.t2.rating, 1.5), norm(r.t2.acs, 250), r.t2.kast, norm(r.t2.adr, 200), norm(r.t2.hs, 50), norm(r.t2.kpp, 20)];
  const raw = {
    'Rating': [r.t1.rating.toFixed(2), r.t2.rating.toFixed(2)],
    'ACS': [r.t1.acs, r.t2.acs],
    'KAST %': [r.t1.kast + '%', r.t2.kast + '%'],
    'ADR': [r.t1.adr, r.t2.adr],
    'HS %': [r.t1.hs + '%', r.t2.hs + '%'],
    'Kills / Player': [r.t1.kpp.toFixed(1), r.t2.kpp.toFixed(1)],
  };
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels,
      datasets: [
        { label: d.teams.t1.name, data: t1, backgroundColor: `rgba(${d.teams.t1.colorRgb},0.18)`, borderColor: `rgba(${d.teams.t1.colorRgb},0.95)`, borderWidth: 2, pointBackgroundColor: d.teams.t1.color, pointRadius: 4 },
        { label: d.teams.t2.name, data: t2, backgroundColor: `rgba(${d.teams.t2.colorRgb},0.20)`, borderColor: `rgba(${d.teams.t2.colorRgb},0.95)`, borderWidth: 2, pointBackgroundColor: d.teams.t2.color, pointRadius: 4 },
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (c) => ` ${c.dataset.label}: ${raw[c.label][c.datasetIndex]}  (norm ${c.parsed.r})` } }
      },
      scales: { r: { suggestedMin: 0, suggestedMax: 100, ticks: { display: false, stepSize: 20 }, grid: { color: 'rgba(255,255,255,0.08)' }, angleLines: { color: 'rgba(255,255,255,0.10)' }, pointLabels: { color: '#cfd5e2', font: { family: 'Rajdhani', size: 13, weight: '600' } } } }
    }
  });
}

// ---------- Entry Duels ----------
function renderEntryDuels(d) {
  if (!d.maps.some(m => m.entryDuels && m.entryDuels.length)) return '';
  // Find max FK and FD across all maps for normalization
  let maxFK = 1, maxFD = 1;
  d.maps.forEach(m => (m.entryDuels || []).forEach(e => { if (e.fk > maxFK) maxFK = e.fk; if (e.fd > maxFD) maxFD = e.fd; }));
  const scale = Math.max(maxFK, maxFD, 5);

  const cards = d.maps.filter(m => m.entryDuels && m.entryDuels.length).map(m => {
    const sorted = [...m.entryDuels].sort((a, b) => (b.fk - b.fd) - (a.fk - a.fd));
    const rows = sorted.map(e => {
      const diff = e.fk - e.fd;
      const fkW = pct(e.fk, scale);
      const fdW = pct(e.fd, scale);
      return `<div class="entry-row"><div class="pl"><img src="${esc(e.photo)}"/><div><div class="nm">${esc(e.name)}</div><div class="tg">${esc(d.teams[e.team].shortTag)} · ${esc(e.agent)}</div></div></div>
        <div class="entry-bar"><div class="center"></div><div class="fk-half">${e.fk > 0 ? `<div class="fkfill" style="width:${fkW}%"></div>` : ''}</div><div class="fd-half">${e.fd > 0 ? `<div class="fdfill" style="width:${fdW}%"></div>` : ''}</div></div>
        <div class="diff ${diffCls(diff)}">${diffSym(diff)}</div></div>`;
    }).join('');
    return `
    <div class="radar-card">
      <h3 style="margin-bottom:14px;font-size:18px">${esc(m.name)} · Map ${d.maps.indexOf(m) + 1}</h3>
      <div class="entry-wrap">${rows}</div>
      ${m.entryInsight ? `<p style="color:var(--muted);font-size:12.5px;margin-top:12px"><b>Insight:</b> ${m.entryInsight}</p>` : ''}
    </div>`;
  }).join('');

  return `
<section>
  <div class="container">
    <div class="section-head"><div><h2>Entry <span>Duels</span></h2><p>${esc(d.entryDuelsDesc || 'FK − FD ของแต่ละผู้เล่นต่อแมพ — เรียงจากดีสุด (+) ไปแย่สุด (−)')}</p></div></div>
    <div class="entry-grid">${cards}</div>
  </div>
</section>`;
}

// ---------- Kill Matrix ----------
function renderKillMatrix(d) {
  if (!d.killMatrix) return '';
  const km = d.killMatrix;
  const colHead = km.cols.map(c => `<th><div class="pi"><img src="${esc(c.photo)}"/>${esc(c.name)}</div></th>`).join('');
  const rows = km.rows.map(row => {
    const cells = row.values.map(v => `<td class="${kmCls(v.diff)}"><div class="kk">${v.k} / ${v.opK}</div><div class="dd">${diffSym(v.diff)}</div></td>`).join('');
    return `<tr><th class="rowh"><div class="pi"><img src="${esc(row.photo)}"/>${esc(row.name)}</div></th>${cells}</tr>`;
  }).join('');
  const links = (km.statLinks || []).map(s => `<div class="item"><div class="k">${esc(s.value)}</div><div class="l">${esc(s.label)}</div></div>`).join('');
  const t1Tag = d.teams.t1.shortTag, t2Tag = d.teams.t2.shortTag;
  return `
<section>
  <div class="container">
    <div class="section-head"><div><h2>Kill Matchup <span>Matrix</span></h2><p>${esc(km.desc || '')}</p></div></div>
    <div class="radar-card">
      <h3 style="margin-bottom:6px;font-size:18px">${esc(km.title || `Kill Matchup Matrix · ทั้งแมตช์ (${t1Tag} vs ${t2Tag})`)}</h3>
      <p style="color:var(--muted);font-size:12px;margin-bottom:14px">เซลล์แสดง <b style="color:#fff">${esc(t1Tag)} kills / ${esc(t2Tag)} kills · diff</b> · สีโทน ${esc(t1Tag)} = ${esc(t1Tag)} ชนะคู่นั้น · สีโทน ${esc(t2Tag)} = ${esc(t2Tag)} ชนะคู่นั้น</p>
      <div class="km-wrap">
        <table class="km-table">
          <thead><tr><th></th>${colHead}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      ${links ? `<div class="stat-link" style="margin-top:18px">${links}</div>` : ''}
    </div>
  </div>
</section>`;
}

// ---------- Analysis ----------
function renderAnalysis(d) {
  if (!d.analysis || !d.analysis.length) return '';
  const cards = d.analysis.map(a => {
    const paragraphs = (a.paragraphs || []).map(p => `<p>${p}</p>`).join('');
    const pull = a.pull ? `<div class="pull">${a.pull}</div>` : '';
    const stats = (a.stats || []).map(s => `<div class="item"><div class="k">${esc(s.value)}</div><div class="l">${esc(s.label)}</div></div>`).join('');
    const statLinks = stats ? `<div class="stat-link">${stats}</div>` : '';
    const sub = a.sub ? `<div class="sub">${esc(a.sub)}</div>` : '';
    return `<div class="analysis-card"><h3>${esc(a.title)}</h3>${sub}${paragraphs}${pull}${statLinks}</div>`;
  }).join('');
  return `
<section>
  <div class="container">
    <div class="section-head"><div><h2>Deep <span>Analysis</span></h2><p>เชื่อมโยงสเตจวิเคราะห์ของ PzFx กับตัวเลขจริงในแมตช์ — ทุก Insight อ้างอิงข้อมูลจาก Stats ด้านบน</p></div></div>
    <div class="author"><img src="PzFx.png" alt="PzFx" /><div><div class="nm">PzFx</div><div class="rl">Analyst · Match Breakdown</div></div></div>
    <div style="height:18px"></div>
    ${cards}
  </div>
</section>`;
}

// ---------- Footer ----------
function renderFooter(d) {
  return `
<footer><div class="container">Data source: vlrggapi.vercel.app/v2/match/details · Match analysis & layout by PzFx · ${esc(d.meta.event)} · ${esc(d.meta.stage)} · ${esc(d.teams.t1.shortTag)} vs ${esc(d.teams.t2.shortTag)}</div></footer>`;
}

// ---------- Main render ----------
function renderMatch(d) {
  setupTheme(d);
  const root = document.getElementById('match-root');
  root.innerHTML =
    renderHero(d) +
    renderVeto(d) +
    d.maps.map((m, i) => renderMapBlock(m, i, d)).join('') +
    renderRadarSection(d) +
    renderEntryDuels(d) +
    renderKillMatrix(d) +
    renderAnalysis(d) +
    renderFooter(d);
  renderRoundFlows(d);
  // Defer chart until Chart.js is loaded
  if (window.Chart) {
    drawRadarChart(d);
  } else {
    const wait = setInterval(() => { if (window.Chart) { clearInterval(wait); drawRadarChart(d); } }, 50);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.matchData) renderMatch(window.matchData);
});
