window.matchData = {
  meta: {
    event: "VCT 2026: Pacific Stage 1 Playoffs",
    stage: "Lower Final",
    date: "Saturday, May 16 2026",
    format: "Best of 5"
  },
  teams: {
    t1: {
      name: "Global Esports",
      tag: "Global Esports",
      shortTag: "GE",
      logo: "GE/logo.png",
      color: "#4cc9f0",
      colorRgb: "76,201,240",
      score: 0,
      isWinner: false
    },
    t2: {
      name: "Paper Rex",
      tag: "Paper Rex",
      shortTag: "PRX",
      logo: "Paper rex/logo.png",
      color: "#ff5252",
      colorRgb: "255,82,82",
      score: 3,
      isWinner: true
    }
  },
  vetoDesc: "BO5 รอบ Lower Final · GE Ban ก่อน · PRX ปิดเกม 3-0 ก่อนถึง Map 4 (Split) และ Decider (Breeze)",
  veto: [
    { team: "t1", action: "ban",  map: "Fracture", mapFile: "fracture.avif" },
    { team: "t2", action: "ban",  map: "Pearl",    mapFile: "pearl.avif" },
    { team: "t1", action: "pick", map: "Haven",    mapFile: "haven.avif" },
    { team: "t2", action: "pick", map: "Lotus",    mapFile: "lotus.avif" },
    { team: "t1", action: "pick", map: "Ascent",   mapFile: "ascent.avif" },
    { team: "t2", action: "pick", map: "Split",    mapFile: "split.webp", note: "ไม่ได้เล่น (PRX ปิด 3-0)" },
    { team: null, action: "left", map: "Breeze",   mapFile: "breeze.avif", note: "Decider · ไม่ได้เล่น" }
  ],
  maps: [
    {
      name: "Haven",
      file: "map data/haven.avif",
      pickedBy: "t1",
      duration: "59:01",
      score: { t1: 6, t2: 13 },
      sectionTitle: "Map 1 · Haven",
      sectionDesc: "GE หยิบ Iso มา Counter Operator/Chamber ของ PRX แต่ d4v41 สลับเล่น Garage แทน · GE โดนอ่านขาด · 6-13",
      composition: {
        t1: [
          { name: "Autumn",  agent: "iso" },
          { name: "UdoTan",  agent: "neon" },
          { name: "Kr1stal", agent: "vyse" },
          { name: "PatMen",  agent: "omen" },
          { name: "xavi8k",  agent: "sova" }
        ],
        t2: [
          { name: "invy",      agent: "fade" },
          { name: "something", agent: "jett" },
          { name: "f0rsakeN",  agent: "omen" },
          { name: "Jinggg",    agent: "phoenix" },
          { name: "d4v41",     agent: "chamber" }
        ]
      },
      stats: {
        t1: [
          { name: "Autumn",  photo: "GE/Autumn.png",  agent: "iso",   r: 1.19, acs: 253, k: 16, d: 15, a: 3,  kdDiff:  1, kast: 79, adr: 162, hs: 24, fk: 0, fd: 3, isTop: true },
          { name: "UdoTan",  photo: "GE/Udotan.png",  agent: "neon",  r: 1.11, acs: 235, k: 16, d: 15, a: 3,  kdDiff:  1, kast: 74, adr: 137, hs: 15, fk: 6, fd: 4 },
          { name: "Kr1stal", photo: "GE/Krystal.png", agent: "vyse",  r: 0.73, acs: 179, k: 12, d: 16, a: 2,  kdDiff: -4, kast: 53, adr: 105, hs: 30, fk: 1, fd: 1 },
          { name: "PatMen",  photo: "GE/Patmen.png",  agent: "omen",  r: 0.71, acs: 157, k: 10, d: 17, a: 4,  kdDiff: -7, kast: 74, adr: 107, hs: 34, fk: 2, fd: 1 },
          { name: "xavi8k",  photo: "GE/Xavi8k.png",  agent: "sova",  r: 0.44, acs:  77, k:  3, d: 14, a: 5,  kdDiff:-11, kast: 58, adr:  65, hs:  5, fk: 0, fd: 1 }
        ],
        t2: [
          { name: "invy",      photo: "Paper rex/invy.png",      agent: "fade",    r: 1.44, acs: 273, k: 18, d: 11, a: 8, kdDiff:  7, kast: 68, adr: 190, hs: 36, fk: 1, fd: 2, isTop: true },
          { name: "something", photo: "Paper rex/something.png", agent: "jett",    r: 1.36, acs: 232, k: 17, d:  9, a: 2, kdDiff:  8, kast: 84, adr: 162, hs: 35, fk: 3, fd: 2 },
          { name: "f0rsakeN",  photo: "Paper rex/f0rsaken.png",  agent: "omen",    r: 1.34, acs: 257, k: 19, d: 11, a: 6, kdDiff:  8, kast: 79, adr: 163, hs: 36, fk: 2, fd: 0 },
          { name: "Jinggg",    photo: "Paper rex/jinggg.png",    agent: "phoenix", r: 0.81, acs: 174, k: 12, d: 13, a: 4, kdDiff: -1, kast: 74, adr: 116, hs: 41, fk: 1, fd: 4 },
          { name: "d4v41",     photo: "Paper rex/d4v41.png",     agent: "chamber", r: 0.69, acs: 160, k: 11, d: 13, a: 4, kdDiff: -2, kast: 58, adr: 107, hs: 32, fk: 3, fd: 1 }
        ]
      },
      rounds: [
        ["t2","ct"],["t2","ct"],["t1","t"],["t2","ct"],["t2","ct"],["t2","ct"],
        ["t1","t"],["t2","ct"],["t2","ct"],["t2","ct"],["t2","ct"],["t1","t"],
        ["t1","ct"],["t1","ct"],["t2","t"],["t2","t"],["t2","t"],["t1","ct"],
        ["t2","t"]
      ],
      sideBreakdown: [
        { team: "t1", label: "GE Attack (T)",   note: "ครึ่งแรก",  value: "3 / 12" },
        { team: "t1", label: "GE Defense (CT)", note: "ครึ่งหลัง", value: "3 / 7" },
        { team: "t2", label: "PRX Defense (CT)",note: "ครึ่งแรก",  value: "9 / 12" },
        { team: "t2", label: "PRX Attack (T)",  note: "ครึ่งหลัง", value: "4 / 7" }
      ],
      entryDuels: [
        { team: "t1", name: "Autumn",  photo: "GE/Autumn.png",  agent: "Iso",   fk: 0, fd: 3 },
        { team: "t1", name: "UdoTan",  photo: "GE/Udotan.png",  agent: "Neon",  fk: 6, fd: 4 },
        { team: "t1", name: "Kr1stal", photo: "GE/Krystal.png", agent: "Vyse",  fk: 1, fd: 1 },
        { team: "t1", name: "PatMen",  photo: "GE/Patmen.png",  agent: "Omen",  fk: 2, fd: 1 },
        { team: "t1", name: "xavi8k",  photo: "GE/Xavi8k.png",  agent: "Sova",  fk: 0, fd: 1 },
        { team: "t2", name: "invy",      photo: "Paper rex/invy.png",      agent: "Fade",    fk: 1, fd: 2 },
        { team: "t2", name: "something", photo: "Paper rex/something.png", agent: "Jett",    fk: 3, fd: 2 },
        { team: "t2", name: "f0rsakeN",  photo: "Paper rex/f0rsaken.png",  agent: "Omen",    fk: 2, fd: 0 },
        { team: "t2", name: "Jinggg",    photo: "Paper rex/jinggg.png",    agent: "Phoenix", fk: 1, fd: 4 },
        { team: "t2", name: "d4v41",     photo: "Paper rex/d4v41.png",     agent: "Chamber", fk: 3, fd: 1 }
      ],
      entryInsight: "UdoTan ทำงานหนักที่สุดในการเปิดเกม (FK 6, ดีที่สุดในแมพ) แต่ก็เสีย FD 4 ครั้ง — net +2 ของเขาไม่พอชดเชย Autumn (Iso) ที่ FK 0 / FD 3 ทั้งที่เป็น Duelist หลัก ส่วน f0rsakeN ทำ +2 net แบบไม่ตายแม้แต่ครั้งเดียวในการดวลแรก"
    },
    {
      name: "Lotus",
      file: "map data/lotus.avif",
      pickedBy: "t2",
      duration: "39:07",
      score: { t1: 4, t2: 13 },
      sectionTitle: "Map 2 · Lotus",
      sectionDesc: "GE Cooking Comp 3 Sentinels (Deadlock/Sage/Cypher) — แต่โดน Firepower PRX Diff หนัก · 4-13",
      composition: {
        t1: [
          { name: "PatMen",  agent: "fade" },
          { name: "UdoTan",  agent: "sage" },
          { name: "xavi8k",  agent: "omen" },
          { name: "Autumn",  agent: "cypher" },
          { name: "Kr1stal", agent: "deadlock" }
        ],
        t2: [
          { name: "Jinggg",    agent: "raze" },
          { name: "invy",      agent: "skye" },
          { name: "something", agent: "jett" },
          { name: "d4v41",     agent: "vyse" },
          { name: "f0rsakeN",  agent: "omen" }
        ]
      },
      stats: {
        t1: [
          { name: "PatMen",  photo: "GE/Patmen.png",  agent: "fade",     r: 1.22, acs: 250, k: 14, d: 13, a: 6, kdDiff:  1, kast: 88, adr: 153, hs: 42, fk: 1, fd: 1, isTop: true },
          { name: "UdoTan",  photo: "GE/Udotan.png",  agent: "sage",     r: 0.89, acs: 220, k: 13, d: 16, a: 6, kdDiff: -3, kast: 76, adr: 123, hs: 63, fk: 4, fd: 1 },
          { name: "xavi8k",  photo: "GE/Xavi8k.png",  agent: "omen",     r: 0.82, acs: 198, k: 12, d: 14, a: 5, kdDiff: -2, kast: 59, adr: 120, hs: 29, fk: 0, fd: 3 },
          { name: "Autumn",  photo: "GE/Autumn.png",  agent: "cypher",   r: 0.57, acs: 148, k:  9, d: 15, a: 3, kdDiff: -6, kast: 53, adr: 108, hs: 45, fk: 2, fd: 2 },
          { name: "Kr1stal", photo: "GE/Krystal.png", agent: "deadlock", r: 0.34, acs: 134, k:  8, d: 17, a: 2, kdDiff: -9, kast: 47, adr:  79, hs: 21, fk: 0, fd: 3 }
        ],
        t2: [
          { name: "Jinggg",    photo: "Paper rex/jinggg.png",    agent: "raze", r: 1.98, acs: 365, k: 25, d:  9, a:  1, kdDiff: 16, kast: 88, adr: 233, hs: 33, fk: 2, fd: 2, isTop: true },
          { name: "invy",      photo: "Paper rex/invy.png",      agent: "skye", r: 1.29, acs: 190, k: 10, d:  9, a: 18, kdDiff:  1, kast: 94, adr: 136, hs: 26, fk: 0, fd: 0 },
          { name: "something", photo: "Paper rex/something.png", agent: "jett", r: 1.23, acs: 283, k: 18, d: 12, a:  3, kdDiff:  6, kast: 76, adr: 160, hs: 18, fk: 6, fd: 3 },
          { name: "d4v41",     photo: "Paper rex/d4v41.png",     agent: "vyse", r: 0.88, acs: 178, k: 11, d: 13, a:  4, kdDiff: -2, kast: 59, adr: 113, hs: 28, fk: 2, fd: 1 },
          { name: "f0rsakeN",  photo: "Paper rex/f0rsaken.png",  agent: "omen", r: 0.68, acs: 160, k: 11, d: 13, a:  5, kdDiff: -2, kast: 76, adr: 106, hs: 26, fk: 0, fd: 1 }
        ]
      },
      rounds: [
        ["t2","t"],["t2","t"],["t2","t"],["t1","ct"],["t2","t"],["t2","t"],
        ["t2","t"],["t1","ct"],["t2","t"],["t2","t"],["t2","t"],["t1","ct"],
        ["t1","t"],["t2","ct"],["t2","ct"],["t2","ct"],["t2","ct"]
      ],
      sideBreakdown: [
        { team: "t1", label: "GE Defense (CT)", note: "ครึ่งแรก",  value: "3 / 12" },
        { team: "t1", label: "GE Attack (T)",   note: "ครึ่งหลัง", value: "1 / 5" },
        { team: "t2", label: "PRX Attack (T)",  note: "ครึ่งแรก",  value: "9 / 12" },
        { team: "t2", label: "PRX Defense (CT)",note: "ครึ่งหลัง", value: "4 / 5" }
      ],
      entryDuels: [
        { team: "t1", name: "PatMen",  photo: "GE/Patmen.png",  agent: "Fade",     fk: 1, fd: 1 },
        { team: "t1", name: "UdoTan",  photo: "GE/Udotan.png",  agent: "Sage",     fk: 4, fd: 1 },
        { team: "t1", name: "xavi8k",  photo: "GE/Xavi8k.png",  agent: "Omen",     fk: 0, fd: 3 },
        { team: "t1", name: "Autumn",  photo: "GE/Autumn.png",  agent: "Cypher",   fk: 2, fd: 2 },
        { team: "t1", name: "Kr1stal", photo: "GE/Krystal.png", agent: "Deadlock", fk: 0, fd: 3 },
        { team: "t2", name: "Jinggg",    photo: "Paper rex/jinggg.png",    agent: "Raze", fk: 2, fd: 2 },
        { team: "t2", name: "invy",      photo: "Paper rex/invy.png",      agent: "Skye", fk: 0, fd: 0 },
        { team: "t2", name: "something", photo: "Paper rex/something.png", agent: "Jett", fk: 6, fd: 3 },
        { team: "t2", name: "d4v41",     photo: "Paper rex/d4v41.png",     agent: "Vyse", fk: 2, fd: 1 },
        { team: "t2", name: "f0rsakeN",  photo: "Paper rex/f0rsaken.png",  agent: "Omen", fk: 0, fd: 1 }
      ],
      entryInsight: "something FK 6 / FD 3 — Jett ทำหน้าที่เปิดดวลเหมือนเดิม. ฝั่ง GE ที่หยิบ 3 Sentinels (Sage/Cypher/Deadlock) ควรกินเปรียบเรื่องดักจังหวะ แต่ Kr1stal (Deadlock) ทำ FK 0 / FD 3 — สะท้อนว่า PRX ฉีก Setup ของ GE ก่อนที่อุปกรณ์จะได้ทำงาน"
    },
    {
      name: "Ascent",
      file: "map data/ascent.avif",
      pickedBy: "t1",
      duration: "52:07",
      score: { t1: 11, t2: 13 },
      sectionTitle: "Map 3 · Ascent",
      sectionDesc: "GE ออกแผน Phoenix/Sage/Kayo/Zombie นำ 6-0 ก่อนโดน PRX ดึงกลับ 6-6 · ปิดแมตช์ 11-13 ที่ Round 24 หลัง GE All-in Mid Gamble ผิด",
      composition: {
        t1: [
          { name: "Autumn",  agent: "phoenix" },
          { name: "xavi8k",  agent: "kayo" },
          { name: "UdoTan",  agent: "sage" },
          { name: "Kr1stal", agent: "sova" },
          { name: "PatMen",  agent: "omen" }
        ],
        t2: [
          { name: "something", agent: "yoru" },
          { name: "f0rsakeN",  agent: "omen" },
          { name: "Jinggg",    agent: "sage" },
          { name: "invy",      agent: "sova" },
          { name: "d4v41",     agent: "vyse" }
        ]
      },
      stats: {
        t1: [
          { name: "Autumn",  photo: "GE/Autumn.png",  agent: "phoenix", r: 1.28, acs: 289, k: 25, d: 19, a:  3, kdDiff:  6, kast: 79, adr: 165, hs: 25, fk: 5, fd: 4, isTop: true },
          { name: "xavi8k",  photo: "GE/Xavi8k.png",  agent: "kayo",    r: 1.21, acs: 215, k: 17, d: 16, a: 18, kdDiff:  1, kast: 79, adr: 138, hs: 25, fk: 1, fd: 0 },
          { name: "UdoTan",  photo: "GE/Udotan.png",  agent: "sage",    r: 0.78, acs: 130, k: 10, d: 16, a:  7, kdDiff: -6, kast: 71, adr:  98, hs: 31, fk: 0, fd: 2 },
          { name: "Kr1stal", photo: "GE/Krystal.png", agent: "sova",    r: 0.77, acs: 212, k: 18, d: 21, a:  3, kdDiff: -3, kast: 71, adr: 139, hs: 18, fk: 4, fd: 1 },
          { name: "PatMen",  photo: "GE/Patmen.png",  agent: "omen",    r: 0.73, acs: 166, k: 14, d: 20, a: 11, kdDiff: -6, kast: 71, adr: 100, hs: 28, fk: 3, fd: 4 }
        ],
        t2: [
          { name: "something", photo: "Paper rex/something.png", agent: "yoru", r: 1.63, acs: 321, k: 28, d: 14, a:  2, kdDiff: 14, kast: 83, adr: 217, hs: 31, fk: 3, fd: 1, isTop: true },
          { name: "f0rsakeN",  photo: "Paper rex/f0rsaken.png",  agent: "omen", r: 1.46, acs: 303, k: 27, d: 18, a:  5, kdDiff:  9, kast: 88, adr: 196, hs: 41, fk: 5, fd: 3 },
          { name: "Jinggg",    photo: "Paper rex/jinggg.png",    agent: "sage", r: 1.15, acs: 195, k: 17, d: 16, a: 16, kdDiff:  1, kast: 83, adr: 144, hs: 35, fk: 1, fd: 1 },
          { name: "invy",      photo: "Paper rex/invy.png",      agent: "sova", r: 0.87, acs: 145, k: 12, d: 15, a:  7, kdDiff: -3, kast: 46, adr: 113, hs: 33, fk: 1, fd: 2 },
          { name: "d4v41",     photo: "Paper rex/d4v41.png",     agent: "vyse", r: 0.41, acs: 117, k:  8, d: 21, a:  8, kdDiff:-13, kast: 71, adr:  92, hs: 25, fk: 1, fd: 6 }
        ]
      },
      rounds: [
        ["t1","t"],["t1","t"],["t1","t"],["t1","t"],["t1","t"],["t1","t"],
        ["t2","ct"],["t2","ct"],["t2","ct"],["t2","ct"],["t2","ct"],["t2","ct"],
        ["t2","t"],["t2","t"],["t1","ct"],["t2","t"],["t2","t"],["t1","ct"],
        ["t2","t"],["t1","ct"],["t2","t"],["t1","ct"],["t1","ct"],["t2","t"]
      ],
      sideBreakdown: [
        { team: "t1", label: "GE Attack (T)",   note: "ครึ่งแรก",  value: "6 / 12" },
        { team: "t1", label: "GE Defense (CT)", note: "ครึ่งหลัง", value: "5 / 12" },
        { team: "t2", label: "PRX Defense (CT)",note: "ครึ่งแรก",  value: "6 / 12" },
        { team: "t2", label: "PRX Attack (T)",  note: "ครึ่งหลัง", value: "7 / 12" }
      ],
      entryDuels: [
        { team: "t1", name: "Autumn",  photo: "GE/Autumn.png",  agent: "Phoenix", fk: 5, fd: 4 },
        { team: "t1", name: "xavi8k",  photo: "GE/Xavi8k.png",  agent: "Kayo",    fk: 1, fd: 0 },
        { team: "t1", name: "UdoTan",  photo: "GE/Udotan.png",  agent: "Sage",    fk: 0, fd: 2 },
        { team: "t1", name: "Kr1stal", photo: "GE/Krystal.png", agent: "Sova",    fk: 4, fd: 1 },
        { team: "t1", name: "PatMen",  photo: "GE/Patmen.png",  agent: "Omen",    fk: 3, fd: 4 },
        { team: "t2", name: "something", photo: "Paper rex/something.png", agent: "Yoru", fk: 3, fd: 1 },
        { team: "t2", name: "f0rsakeN",  photo: "Paper rex/f0rsaken.png",  agent: "Omen", fk: 5, fd: 3 },
        { team: "t2", name: "Jinggg",    photo: "Paper rex/jinggg.png",    agent: "Sage", fk: 1, fd: 1 },
        { team: "t2", name: "invy",      photo: "Paper rex/invy.png",      agent: "Sova", fk: 1, fd: 2 },
        { team: "t2", name: "d4v41",     photo: "Paper rex/d4v41.png",     agent: "Vyse", fk: 1, fd: 6 }
      ],
      entryInsight: "Ascent คือเกมที่ Entry ใกล้เคียงที่สุด — GE FK 13 vs PRX FK 11. ปัญหา GE ไม่ใช่การเปิดดวล แต่เป็น d4v41 FD 6 ที่ GE น่าจะใช้เป็นจุดเปลี่ยน แต่กลับเสีย Trade ครึ่งหลังให้ Yoru/Omen ของ something/f0rsakeN ที่รวมกัน +23 net"
    }
  ],
  radar: {
    sectionDesc: "ค่าเฉลี่ยทั้ง 3 แมพ — PRX นำเกือบทุกหมวด สะท้อน Firepower ที่ GE บอกเองว่า 'ฝืนเกมได้แต่ต่อกรไม่ได้'",
    t1: { rating: 0.85, acs: 191, kast: 69, adr: 120, hs: 29, kpp: 13.1 },
    t2: { rating: 1.15, acs: 224, kast: 75, adr: 150, hs: 32, kpp: 16.3 },
    insights: [
      { team: "t2", label: "Rating Gap",   value: "+0.30", delta: "PRX 1.15 vs GE 0.85" },
      { team: "t2", label: "ADR Gap",      value: "+30",   delta: "PRX 150 vs GE 120" },
      { team: "t2", label: "Kills/Player", value: "+3.2",  delta: "PRX 16.3 vs GE 13.1" },
      { team: "t2", label: "KAST Gap",     value: "+6%",   delta: "PRX 75% vs GE 69%" }
    ],
    note: "Gap ใหญ่ที่สุดอยู่ที่ ADR (+30) — แปลว่า PRX ไม่ใช่แค่ฆ่ามากกว่า แต่ <b>สร้างความเสียหายต่อรอบ</b> สูงกว่ามาก ทำให้ GE Lose Trade Economy ตลอดเกม"
  },
  killMatrix: {
    desc: "ทุกคู่ดวล ตลอด 3 แมพ · เซลล์โทน GE = GE ชนะคู่ · เซลล์โทน PRX = PRX ชนะคู่",
    title: "Kill Matchup Matrix · ทั้งแมตช์ (GE vs PRX)",
    cols: [
      { name: "something", photo: "Paper rex/something.png" },
      { name: "d4v41",     photo: "Paper rex/d4v41.png" },
      { name: "invy",      photo: "Paper rex/invy.png" },
      { name: "f0rsakeN",  photo: "Paper rex/f0rsaken.png" },
      { name: "Jinggg",    photo: "Paper rex/jinggg.png" }
    ],
    rows: [
      { name: "PatMen",  photo: "GE/Patmen.png", values: [
        { k: 5, opK: 14, diff: -9 }, { k: 8, opK: 7, diff: 1 }, { k: 5, opK: 10, diff: -5 }, { k: 12, opK: 9, diff: 3 }, { k: 8, opK: 10, diff: -2 }
      ]},
      { name: "Kr1stal", photo: "GE/Krystal.png", values: [
        { k: 3, opK: 21, diff: -18 }, { k: 13, opK: 6, diff: 7 }, { k: 7, opK: 7, diff: 0 }, { k: 6, opK: 11, diff: -5 }, { k: 9, opK: 9, diff: 0 }
      ]},
      { name: "Autumn",  photo: "GE/Autumn.png", values: [
        { k: 12, opK: 8, diff: 4 }, { k: 10, opK: 8, diff: 2 }, { k: 10, opK: 7, diff: 3 }, { k: 9, opK: 14, diff: -5 }, { k: 9, opK: 12, diff: -3 }
      ]},
      { name: "xavi8k",  photo: "GE/Xavi8k.png", values: [
        { k: 6, opK: 13, diff: -7 }, { k: 10, opK: 0, diff: 10 }, { k: 5, opK: 9, diff: -4 }, { k: 9, opK: 11, diff: -2 }, { k: 2, opK: 11, diff: -9 }
      ]},
      { name: "UdoTan",  photo: "GE/Udotan.png", values: [
        { k: 9, opK: 7, diff: 2 }, { k: 6, opK: 9, diff: -3 }, { k: 8, opK: 7, diff: 1 }, { k: 6, opK: 12, diff: -6 }, { k: 10, opK: 12, diff: -2 }
      ]}
    ],
    statLinks: [
      { value: "−18", label: "Worst Cell · Kr1stal vs something (3-21)" },
      { value: "+10", label: "Best GE Cell · xavi8k vs d4v41 (10-0)" },
      { value: "something", label: "PRX Anchor · ตัวที่ทำลาย GE หลัก" }
    ]
  },
  analysis: [
    {
      title: "ร่างทอง PRX · Firepower + Creative ที่ครบสูตร",
      sub: "ทำไม PRX 3-0 GE แบบไม่เปิดโอกาส",
      paragraphs: [
        "ภาพรวมเลยคือ <b>นี่คือร่างทองของ PRX ที่หลายๆ คนกลัว</b> — ความโหดเหี้ยมเรื่อง Firepower ผสมผสานกับความ Creative ในการเล่น. ทุกตัวเลขชี้ไปจุดเดียวกัน: PRX Rating <b>1.15</b> vs GE <b>0.85</b> (+0.30), ADR <b>+30</b>, Kills/Player <b>+3.2</b>",
        "Gap ที่ใหญ่ที่สุดอยู่ที่ <b>ADR (+30)</b> — แปลว่า PRX ไม่ใช่แค่ฆ่ามากกว่า แต่ <b>สร้างความเสียหายต่อรอบ</b> สูงกว่ามาก ทำให้ GE เสีย Trade Economy ตลอดเกม. Kill Matchup Matrix แสดงเซลล์ร้ายแรงสุดของแมตช์: <b>Kr1stal vs something −18</b> (3-21) — ถ้าผู้เล่นคนหนึ่งโดนคนเดียวยิงไปเกือบ 20 ครั้ง ก็บอกได้ว่าแผนทุกอย่างมันไม่มีพื้นที่ทำงาน",
        "GE ทั้งยิงไม่สู้ ทั้งตามเกมไม่ทัน กลายเป็นความพ่ายแพ้แบบครบสูตร พูดได้เต็มปากว่า <b>GE ด้อยกว่า PRX จริงๆ</b>. ถ้า PRX คงฟอร์มนี้ได้ต่อเนื่อง พวกเขาคว้าถ้วยแชมป์ได้ไม่ยาก"
      ],
      pull: "PRX ไม่ใช่แค่ Firepower ดี — Creative ด้วย. GE ทำแผนพิเศษมา 3 แมพ ก็โดนทุบทั้ง 3 แมพ",
      stats: [
        { value: "3-0",   label: "PRX สวีปไม่ปล่อยแมพ" },
        { value: "+30",   label: "ADR Gap (จุดอ่อน GE ที่ใหญ่สุด)" },
        { value: "−18",   label: "Kr1stal vs something · Worst Cell ของแมตช์" }
      ]
    },
    {
      title: "Haven — Iso ที่โดนอ่านขาด",
      sub: "GE Cook สำเร็จในความคิด แต่แผนถูกเปิดเข้าตัว",
      paragraphs: [
        "GE หยิบ <b>Iso</b> มาเซอร์ไพรซ์ — ตัวละครที่ห่างหายจากการแข่งขันไปนานเพราะหา Value เชิงกลยุทธ์ได้ยากเมื่อเทียบกับ Duelist อื่นใน Meta. แต่ Iso ทำได้ดี 2 อย่าง: <b>แก้เกม Operator</b> และ <b>แก้ Chamber</b> — สองสิ่งที่ PRX ใช้เป็นประจำบน Haven. Autumn ยืนยันในบทสัมภาษณ์ว่าหยิบมาเพื่อแก้ Operator ของ something และ Chamber ของ d4v41 โดยเฉพาะ",
        "เริ่มต้นไม่สวยเท่าไหร่ แพ้ปืนสั้นแต่ก็ชนะ Buy Round แรกได้. เข้า Round 4 ที่ตัดสินทิศทางเกม — GE มีการเดินเกมเฉพาะทางอย่างเห็นได้ชัด คือ <b>โถมไปที่ C ในจังหวะแรก</b>",
        { video: "GEvsPRX/hilight1.mp4", title: "GE เปิดหมากกระดานที่ C Main", caption: "Round 4 — GE Setup โถมเข้า C ทันที เพื่อดัก Chamber และเลี่ยง Operator. Iso จะแก้ Chamber ที่หนีไม่ได้เพราะ Undercut ปิดสกิลวาป + กดโล่กัน Operator one-shot ได้" },
        "สาเหตุที่โถม C ก็เพราะ: (1) Chamber รับมือกับ Iso ได้ยาก — สไตล์ Chamber คือเสี่ยงแล้วใช้สกิลวาปหนี แต่ <b>Iso Undercut ปิดสกิลวาป</b> ทำให้หนีไม่ได้. (2) ถ้าเจอ Operator พวกเขา Rush โถม Site ได้ทันที เพราะ Iso กดโล่เพื่อการันตีว่า OP จะไม่ฆ่าในนัดเดียว. การโถม Site C ซึ่งเป็นไซต์ที่มี Operator เป็นหลักจึงสมเหตุผลอย่างมาก",
        "แต่มันไม่เป็นอย่างที่ GE คิด — <b>Chamber d4v41 ออก Garage แทน</b>, มิหน่ำซ้ำ something ยังกล้าเดินไปพร้อม d4v41 เพื่อยึดจุดสำคัญ. GE โดนอ่านขาด เสียเปรียบแบบไม่รู้ตัว. พอ GE หา Operator ไม่เจอ ก็เริ่มกังวลว่าจะเข้า Site C ดีไหม จึงถอยออกมาไปตี A แทน — แต่ก็ <b>เดินไปโดนกับดักที่ PRX สร้างไว้</b>: something ดักรออยู่ตรง B Window และตัดไปได้หนึ่ง",
        { video: "GEvsPRX/hilight2.mp4", title: "something สร้างความได้เปรียบที่ B Window", caption: "พอ GE เปลี่ยนแผนหลบ Site C ไปตี A, something ดักรอที่ B Window ทันที — ตัด 1 + สร้างความได้เปรียบให้ PRX ใน Round สำคัญนี้" },
        "เมื่อแผนการไม่ได้ผล Frost ขอเวลานอกไวทันทีเพื่อปรับแผน. พวกเขาเริ่มเดินเกมรุนแรงเข้า Garage — แต่ก็ไม่ได้ผล เพราะ PRX พร้อมรับมือ",
        { video: "GEvsPRX/hilight3.mp4", title: "GE ชน Site C ผ่าน Garage โดนดักตัดเสีย 3", caption: "Plan B ของ GE หลัง Time-out — แต่ PRX อ่านขาดเช่นกัน ดักตัดเสีย 3 คน ไม่ทันถึง Site ด้วยซ้ำ" },
        "พลัง Firepower สุดอลังการของ PRX มาทุกคน. ความมั่นใจของ PRX มาเต็มที่ กดดัน GE ต่อเนื่อง จน GE เริ่มต้านไม่อยู่",
        { video: "GEvsPRX/hilight4.mp4", title: "Jinggg ถล่ม Retake C ราบคาบ", caption: "PRX จังหวะ Retake C สวยๆ — Jinggg ถล่ม GE จนราบคาบ ไม่เหลือ Frag Power เปิด Site" },
        "Round เดียวที่ดูเหมือนแผน GE จะได้ผลคือ <b>Round 10</b> — การตายของ UdoTan ทำให้ GE รู้ว่า Operator อยู่ที่ A จึงใช้ <b>Ultimate Iso</b> ดักจับ และตัด OP ของ something ได้. แต่พลัง Firepower จังหวะการยิงของ PRX ยังสูงกว่า และตอกฝาโรง ชนะ Advantage Round ของ GE ไป แม้ GE จะทำ Gameplan สำเร็จก็ตาม",
        { video: "GEvsPRX/hilight5.mp4", title: "GE ใช้ Iso ดัก OP ได้ แต่แพ้ Retake", caption: "Round 10 — Gameplan ของ GE ทำงานครบ ตัด OP ของ something ด้วย Iso Ult แต่ PRX Retake ชนะกลับ. <b>แผนสำเร็จก็แพ้</b> — สรุปบทเรียนของแมพนี้" },
        "ปิดท้ายครึ่งแรกด้วยหลักฐานชิ้นสำคัญว่า <b>something แสดงศักยภาพแบบเหนือมนุษย์</b>. แม้รอบนี้จะแพ้ แต่ HOLY SHIET ยิงได้ไงวะ — 3K จากมีดของ Jett",
        { video: "GEvsPRX/hilight6.mp4", title: "something 3K มีด Jett เวอร์มาก", caption: "แม้รอบนั้น PRX จะแพ้ แต่ Play เดี่ยวระดับนี้ บอกได้เลยว่า something อยู่ในฟอร์มที่ <b>ใครก็หยุดยาก</b>" },
        "เข้าครึ่งหลังที่สกอร์ 9-3 สลับมาเป็น PRX บุก. GE ชนะปืนสั้นได้ ดึงความได้เปรียบกลับมา 2 Round แต่ PRX Firepower ยังรุนแรงต่อเนื่อง ปิดเกมไม่ยากเย็น. GE แทบหาความได้เปรียบไม่ได้เลย จบ <b>13-6</b>",
        { video: "GEvsPRX/hilight7.mp4", title: "PRX ฉบับยิงได้ทุกคน · GE พังทะลาย", caption: "ครึ่งหลัง PRX บุกเร่งสกอร์ — Firepower มาทุกคน GE แทบไม่มี Frag Power ตอบโต้ได้" }
      ],
      pull: "Iso เป็นแผนที่ถูกในกระดาน — แต่ PRX อ่านได้ก่อน. d4v41 เปลี่ยน Site แค่นั้น Plan ของ GE ก็ตาย",
      stats: [
        { value: "9-3",   label: "ครึ่งแรก · PRX Dominate" },
        { value: "13-6",  label: "ปิด Map 1" },
        { value: "+24",   label: "PRX Top 3 (invy/something/f0rsakeN) Net Kills รวม" }
      ]
    },
    {
      title: "Lotus — 3 Sentinels Comp ที่โดน Firepower ฉีก",
      sub: "เมื่อแผนสุดสร้างสรรค์เจอกับ Firepower ที่อ่านขาด",
      paragraphs: [
        "GE Cook มาอีก กับแผน <b>3 Sentinels: Deadlock + Sage + Cypher</b> — Comp ที่ดูแปลกในสายตาคนส่วนใหญ่ แต่ถูกหยิบมาเล่นในจีนก่อนหน้าแล้ว และได้ผลในระดับหนึ่ง (XLG vs DRG ที่แผนนี้ปิดตายเกมอีกฝั่งจนเล่นไม่ได้)",
        "ไอเดียเบื้องต้นคือ <b>ละทิ้งหน้า A ไปเลย</b> — ไม่มีทาง Contest สำเร็จด้วย Comp นี้, มุ่งเน้นไปที่ Site C กับ B แทน. C/B เป็น Site ที่ฝั่งกันมักจะมองข้ามเพราะ Retake ง่าย, แต่พอเจอ 3 Sentinels ที่มี <b>อุปกรณ์ต่อต้านจังหวะ Retake ถึง 3 ตัว</b> ฝั่งกันจะ Retake C ไม่ได้. มีวิธีเดียวที่จะแก้คือ <b>อย่าให้เขาเข้า Site</b>",
        "ส่วนเกมกัน 3 Sentinels อะ อุปกรณ์ป้องกันเยอะอยู่แล้ว เกมกันจึงดูไม่น่ามีปัญหาใช่มั้ย — <b>ตู้มครับ Firepower PRX Diff ใส่ GE พังยับเยิน</b>. เป็นเรื่องแปลก เพราะ 3 Sentinels ควรจะกันอยู่มากกว่านี้ แต่กลายเป็นว่า PRX โถมจังหวะตัดได้แบบดูไม่ยากเย็น GE ดูไม่คุ้นชินกับวิธีการเล่นของตัวเอง",
        { video: "GEvsPRX/hilight8.mp4", title: "PRX โถมหน้า A ตัด GE เป็นชิ้นๆ", caption: "PRX โถมหน้า A ที่ GE 'ละทิ้ง' ตามแผน — แต่ Firepower ฉีก Setup ก่อนอุปกรณ์ Sentinel ทั้งหมดจะทำงาน" },
        "ตอกย้ำด้วยฟอร์ม Firepower ที่ย่ำแย่ของ GE — แพ้ PRX ในสถานการณ์ที่ PRX เสียเปรียบ <b>2v5</b>",
        { video: "GEvsPRX/hilight9.mp4", title: "Invy & Jinggg ชนะ GE ทั้งทีม 2v5", caption: "ความผิดพลาดที่ตอกฝาโรง GE ในด่านนี้ไปเลย — 2v5 คือสถานการณ์ที่ GE ควรชนะแน่ๆ แต่กลับแพ้" },
        "จบครึ่งแรกที่ <b>9-3</b> สลับมาฝั่งบุก คาดหวังจะเห็นแผน GE ทำงาน แต่ตอนนี้ <b>สภาพ GE โรยรา Mentality พังไปหมด</b>. ไม่แปลกใจที่แพ้ Anti-eco และโดน PRX ปิดเกมไวๆ <b>13-4</b>",
        { video: "GEvsPRX/hilight10.mp4", title: "GE ฝืน Site C หลายครั้ง · PRX ปิดสวย", caption: "ครึ่งหลัง GE หาทางเข้า Site C ไม่ได้ — PRX ปิดฉาก Map 2 ภายในเวลา 39 นาที (สั้นที่สุดในแมตช์)" }
      ],
      pull: "Jinggg Rating 1.98 · ACS 365 · ADR 233 — เป็นค่าระดับ MVP World Champion. แค่ตัวนี้คนเดียวก็จบเกม",
      stats: [
        { value: "1.98", label: "Jinggg Rating · MVP-tier" },
        { value: "9-3",  label: "ครึ่งแรก · ซ้ำรอย Map 1" },
        { value: "13-4", label: "Map ที่จบเร็วที่สุด (39 นาที)" }
      ]
    },
    {
      title: "Ascent — เกือบทำสำเร็จ ก่อน Gamble ผิดที่ Round 24",
      sub: "GE เปิด 6-0 · ดึงเข้า 6-6 ครึ่ง · แต่ All-in Mid ที่ Round 24 ทำเกมพัง",
      paragraphs: [
        "Map 3 ด่าน Ascent ที่ PRX ดูคลุมเครือกับแผน <b>Yoru/Sage</b> (ก่อนหน้าเพิ่งแพ้ T1 มาด้วยแผนเดียวกัน). ส่วน GE ก็ยัง Trust the Process กับการใช้แผนนอกตำราอีก — <b>Comp Zombie: Phoenix/Sage/Kayo</b> แบบที่ Talon Esports เคยใช้เล่นงาน DRX",
        "ช่วงต้นได้ผล — GE ชนะ Buy Round แรกของ PRX ด้วยพลังอัลติ Phoenix. PRX ดูรับมือไม่ถูก หาจังหวะยิงที่ได้เปรียบแทบไม่ได้",
        { video: "GEvsPRX/hilight11.mp4", title: "GE Entry B ด้วย Ult Phoenix · PRX รับไม่ทัน", caption: "อัลติ Phoenix เปิดทาง Entry — PRX ตั้งหลักไม่ทัน Site เปิดง่ายดาย" },
        "Gameplay GE ได้โมเมนตั้มชัดเจน เดินเปิด Site ตรงๆ. PRX เริ่มรับไม่อยู่ ทำจังหวะไม่ได้ผล จน GE ดึงสกอร์มาได้ <b>6 Round ติดต่อกัน</b>",
        { video: "GEvsPRX/hilight12.mp4", title: "GE Entry A โถมตรงๆ · PRX รับไม่อยู่", caption: "Phoenix/Kayo/Sage รวมพลัง — แผน Zombie ของ GE ทำงานเหมือนตำราที่ Talon เคยใช้" },
        "PRX ต้องใช้เวลานอกถึง <b>2 รอบในครึ่งแรก</b> (ไม่เก็บไว้ครึ่งหลังเลย) เพื่อแก้เกมบุกของ GE — และมันได้ผลดีเยี่ยม. PRX เพิ่ม <b>Aggro</b> ตัดไฟต้นลม ดันออกมาตัด พ่วงกับ Operator ของ something ที่จากเดิมเล่นซ่อนใน Site เริ่มออกมาเล่น Map Control แทน. เอาชนะกลับมา <b>6 Round ติดต่อกัน</b> — ครึ่งแรกจบ <b>6-6</b> แบบที่ทั้งคู่สู้กันสุดความสามารถ",
        { video: "GEvsPRX/hilight13.mp4", title: "PRX กล้าเล่นหน้า Main · f0rsakeN + something ตัด", caption: "f0rsakeN ตัด Autumn ที่ A Main + something ตัด 1 ที่ Mid — Aggro Setup ที่ PRX แก้กลับจากการตั้งรับ" },
        { video: "GEvsPRX/hilight14.mp4", title: "Jinggg Suicidal Boost หน้า B", caption: "Sage Wall บูสตัวเอง Jinggg ดันออกหน้า B ตัด 1 — ถูก Trade แต่กำแพง Sage ปิดหน้า B ทำให้ GE สวนกลับไม่ทัน" },
        "สลับฝั่งครึ่งหลัง PRX ชนะปืนสั้น เร่งสกอร์กลับมาคุมเกม. GE พอประคองอยู่ จนถึง <b>Round 19</b> ที่ PRX เดินเกมบุกรุนแรง — ตัด 1 หน้า A แต่ GE ชุบชีวิตด้วย Ult Sage + Ult invy Sova ทำให้ PRX รู้ว่า GE อยู่ Site A กัน 3 คน. f0rsakeN สุด Creative <b>ใช้ Ult Omen วาปไป B CT</b> พ่วงกับ Lurk ของ something ที่อยู่กลางอยู่แล้ว — Execution ปิด Round อย่างสง่างาม GE ตามเกมไม่ทัน",
        { video: "GEvsPRX/hilight15.mp4", title: "PRX Perfect Mid-Round Play", caption: "Round 19 — Ult Omen วาปจาก A ไป B CT + Lurk ของ something กลาง = Setup ระดับ World-Class ที่ GE ไม่เห็นด้วยซ้ำว่าเกิดอะไรขึ้น" },
        "GE ยังแสดงความแข็งแกร่งเกมกันได้บ้าง — Autumn ดักตัดหน้า B ทำให้โมเมนตั้มกลับมา",
        { video: "GEvsPRX/hilight16.mp4", title: "Autumn 3K หน้า B Main", caption: "GE ตอบกลับด้วยฝีมือ Autumn — 3K หน้า B Main ดึงเกมกลับมา 12-11 มีลุ้นไป Overtime" },
        "GE ดึงเกมกลับมา <b>12-11</b> มีลุ้นไป Overtime พวกเขาตัดสินใจ <b>ALL IN ON MID</b> Gamble ไปเลย — เล่นคุมกลาง 5 คน. แต่มันไม่ได้ผล: PRX <b>ไม่มีใครเล่นกลาง</b>ออกมาตายฟรีเลย. พอ PRX รู้ว่า GE เล่นกลาง พวกเขารวบหน้าหลัง ยิง GE พรุนเป็นเป้าสนาม ปิดแมพ <b>11-13</b>",
        { video: "GEvsPRX/hilight17.mp4", title: "GE ออกกลาง 5 คน · Gamble ผิด", caption: "Round 24 — All-in Mid Read ผิด, PRX ไม่มีใครเล่นกลาง สวนคืนยิง GE พรุน. การ Gamble ที่จบทั้งแมพและแมตช์" }
      ],
      pull: "GE เกือบจะเอา Map 3 ได้ — แต่ Round 24 พิสูจน์ว่า PRX มี Read ที่ดีกว่าตอนจังหวะเป็นจังหวะ",
      stats: [
        { value: "6-0",   label: "GE นำต้นเกม Ascent ก่อนโดน Read" },
        { value: "6-6",   label: "ครึ่งแรกจบเสมอ · PRX แก้กลับ" },
        { value: "11-13", label: "Map สุดท้าย · GE Gamble Mid พลาด" }
      ]
    },
    {
      title: "บทสรุป — PRX คือ Favorite แชมป์ · GE ต้องปั้น Firepower",
      paragraphs: [
        "<b>PRX</b> โหดเหี้ยมเรื่อง Firepower + Creative ในการเล่น. GE Cook แผน 3 แผนจาก 3 แมพ ก็โดนทุบหมด. ถ้า PRX คงฟอร์มนี้ต่อเนื่อง พวกเขา <b>คว้าถ้วยแชมป์ได้ไม่ยาก</b>",
        "<b>GE</b> วนมาที่จุดอ่อนเดิมเรื่อง Firepower — พวกเขาไม่ได้แย่ ยิงได้ หวังผลได้ แต่เมื่อเจอทีมที่ Firepower สูงกว่าและ Creative ใกล้เคียงกัน (ถ้าไม่สูงกว่า) ก็แทบต่อกรไม่ได้ ทำได้แค่ <b>ฝืนเกม ยืดเกม</b> หาความได้เปรียบยากมาก. ทางออก: GE มีของเรื่องแผนแล้ว — ถ้า <b>Firepower สูงตามได้</b> บอกเลย น่ากลัวเช่นกัน"
      ]
    }
  ]
};
