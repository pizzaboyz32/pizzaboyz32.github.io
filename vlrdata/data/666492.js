window.matchData = {
  meta: {
    event: "VCT 2026: Pacific Stage 1 Playoffs",
    stage: "Upper Final",
    date: "Friday, May 15 2026",
    format: "Best of 3"
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
      name: "FULL SENSE",
      tag: "FULL SENSE",
      shortTag: "FS",
      logo: "FULLSENSE/logo.png",
      color: "#ff4655",
      colorRgb: "255,70,85",
      score: 2,
      isWinner: true
    }
  },
  vetoDesc: "BO3 รอบ Upper Final · FS เริ่ม Ban ก่อน · ปิดเกม 2-0 ก่อนถึงด่าน Decider (Lotus)",
  veto: [
    { team: "t2", action: "ban",  map: "Ascent",   mapFile: "ascent.avif" },
    { team: "t1", action: "ban",  map: "Fracture", mapFile: "fracture.avif" },
    { team: "t2", action: "pick", map: "Split",    mapFile: "split.webp" },
    { team: "t1", action: "pick", map: "Breeze",   mapFile: "breeze.avif" },
    { team: "t2", action: "ban",  map: "Haven",    mapFile: "haven.avif" },
    { team: "t1", action: "ban",  map: "Pearl",    mapFile: "pearl.avif" },
    { team: null, action: "left", map: "Lotus",    mapFile: "lotus.avif",  note: "Decider · ไม่ได้เล่น (FS ปิด 2-0)" }
  ],
  maps: [
    {
      name: "Split",
      file: "map data/split.webp",
      pickedBy: "t2",
      duration: "1:09:53",
      score: { t1: 11, t2: 13 },
      sectionTitle: "Map 1 · Split",
      sectionDesc: "GE ตั้งรับเหนียวครึ่งหลังจนดึงเกมเข้า 12-12 แต่ FS ปิดด้วย Firepower ในรอบสุดท้าย · 13-11 FS",
      composition: {
        t1: [
          { name: "Autumn", agent: "viper" },
          { name: "PatMen", agent: "omen" },
          { name: "Kr1stal", agent: "fade" },
          { name: "xavi8k", agent: "sage" },
          { name: "UdoTan", agent: "raze" }
        ],
        t2: [
          { name: "primmie", agent: "jett" },
          { name: "Killua", agent: "skye" },
          { name: "JitBoyS", agent: "raze" },
          { name: "Leviathan", agent: "omen" },
          { name: "Crws", agent: "viper" }
        ]
      },
      stats: {
        t1: [
          { name: "Autumn",  photo: "GE/Autumn.png",   agent: "viper", r: 1.16, acs: 249, k: 22, d: 19, a: 3,  kdDiff:  3, kast: 71, adr: 167, hs: 38, fk: 5, fd: 3, isTop: true },
          { name: "PatMen",  photo: "GE/Patmen.png",   agent: "omen",  r: 1.11, acs: 236, k: 19, d: 19, a: 7,  kdDiff:  0, kast: 63, adr: 172, hs: 37, fk: 3, fd: 5 },
          { name: "Kr1stal", photo: "GE/Krystal.png",  agent: "fade",  r: 0.77, acs: 135, k: 10, d: 17, a: 9,  kdDiff: -7, kast: 71, adr:  94, hs: 20, fk: 0, fd: 0 },
          { name: "xavi8k",  photo: "GE/Xavi8k.png",   agent: "sage",  r: 0.71, acs: 115, k: 10, d: 17, a: 8,  kdDiff: -7, kast: 71, adr:  79, hs: 23, fk: 3, fd: 2 },
          { name: "UdoTan",  photo: "GE/Udotan.png",   agent: "raze",  r: 0.69, acs: 169, k: 14, d: 20, a: 2,  kdDiff: -6, kast: 63, adr: 126, hs: 20, fk: 3, fd: 1 }
        ],
        t2: [
          { name: "primmie",   photo: "FULLSENSE/primmie.png",   agent: "jett",  r: 1.31, acs: 284, k: 25, d: 17, a: 3,  kdDiff:  8, kast: 63, adr: 159, hs: 26, fk: 7, fd: 6, isTop: true },
          { name: "Killua",    photo: "FULLSENSE/killua.png",    agent: "skye",  r: 1.15, acs: 161, k: 15, d: 13, a: 12, kdDiff:  2, kast: 71, adr: 106, hs: 38, fk: 0, fd: 2 },
          { name: "JitBoyS",   photo: "FULLSENSE/jitboys.png",   agent: "raze",  r: 1.09, acs: 245, k: 20, d: 16, a: 6,  kdDiff:  4, kast: 88, adr: 163, hs: 15, fk: 2, fd: 3 },
          { name: "Leviathan", photo: "FULLSENSE/leviathan.png", agent: "omen",  r: 1.02, acs: 195, k: 17, d: 15, a: 10, kdDiff:  2, kast: 71, adr: 139, hs: 34, fk: 0, fd: 1 },
          { name: "Crws",      photo: "FULLSENSE/crws.png",      agent: "viper", r: 0.96, acs: 172, k: 14, d: 14, a: 6,  kdDiff:  0, kast: 83, adr: 115, hs: 20, fk: 1, fd: 1 }
        ]
      },
      rounds: [
        ["t2","t"],["t2","t"],["t1","ct"],["t2","t"],["t2","t"],["t1","ct"],
        ["t2","t"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t2","t"],
        ["t2","ct"],["t2","ct"],["t1","t"],["t2","ct"],["t1","t"],["t1","t"],
        ["t1","t"],["t1","t"],["t2","ct"],["t2","ct"],["t2","ct"],["t2","ct"]
      ],
      sideBreakdown: [
        { team: "t1", label: "GE Defense (CT)", note: "ครึ่งแรก",  value: "6 / 12" },
        { team: "t1", label: "GE Attack (T)",   note: "ครึ่งหลัง", value: "5 / 12" },
        { team: "t2", label: "FS Attack (T)",   note: "ครึ่งแรก",  value: "6 / 12" },
        { team: "t2", label: "FS Defense (CT)", note: "ครึ่งหลัง", value: "7 / 12" }
      ],
      entryDuels: [
        { team: "t1", name: "Autumn",  photo: "GE/Autumn.png",  agent: "Viper", fk: 5, fd: 3 },
        { team: "t1", name: "PatMen",  photo: "GE/Patmen.png",  agent: "Omen",  fk: 3, fd: 5 },
        { team: "t1", name: "Kr1stal", photo: "GE/Krystal.png", agent: "Fade",  fk: 0, fd: 0 },
        { team: "t1", name: "xavi8k",  photo: "GE/Xavi8k.png",  agent: "Sage",  fk: 3, fd: 2 },
        { team: "t1", name: "UdoTan",  photo: "GE/Udotan.png",  agent: "Raze",  fk: 3, fd: 1 },
        { team: "t2", name: "primmie",   photo: "FULLSENSE/primmie.png",   agent: "Jett",  fk: 7, fd: 6 },
        { team: "t2", name: "Killua",    photo: "FULLSENSE/killua.png",    agent: "Skye",  fk: 0, fd: 2 },
        { team: "t2", name: "JitBoyS",   photo: "FULLSENSE/jitboys.png",   agent: "Raze",  fk: 2, fd: 3 },
        { team: "t2", name: "Leviathan", photo: "FULLSENSE/leviathan.png", agent: "Omen",  fk: 0, fd: 1 },
        { team: "t2", name: "Crws",      photo: "FULLSENSE/crws.png",      agent: "Viper", fk: 1, fd: 1 }
      ],
      entryInsight: "GE เก็บ First Kill ได้รวม 14 ครั้ง มากกว่า FS (10) แต่ความได้เปรียบไม่แปลงเป็น Round เพราะ Trade-back ของ FS เร็วและตรงเป้า โดยเฉพาะ primmie ที่ +1 net ทั้งที่โดน FD ถึง 6 ครั้ง สะท้อนว่าฝั่ง FS ยอมเสีย Entry แต่ไม่ปล่อยให้ Site แตก"
    },
    {
      name: "Breeze",
      file: "map data/breeze.avif",
      pickedBy: "t1",
      duration: "41:55",
      score: { t1: 8, t2: 13 },
      sectionTitle: "Map 2 · Breeze",
      sectionDesc: "ด่านเก่งของ GE โดน FS Stomp ครึ่งบุก 10-2 · Firepower โชว์ชัดเมื่อแมพเปิดกว้างกว่า · 13-8 FS",
      composition: {
        t1: [
          { name: "Autumn", agent: "chamber" },
          { name: "PatMen", agent: "viper" },
          { name: "Kr1stal", agent: "sova" },
          { name: "xavi8k", agent: "sage" },
          { name: "UdoTan", agent: "neon" }
        ],
        t2: [
          { name: "primmie", agent: "jett" },
          { name: "Killua", agent: "sova" },
          { name: "JitBoyS", agent: "neon" },
          { name: "Leviathan", agent: "omen" },
          { name: "Crws", agent: "viper" }
        ]
      },
      stats: {
        t1: [
          { name: "Autumn",  photo: "GE/Autumn.png",  agent: "chamber", r: 1.04, acs: 185, k: 15, d: 14, a: 1,  kdDiff:  1, kast: 62, adr: 119, hs: 26, fk: 2, fd: 3, isTop: true },
          { name: "PatMen",  photo: "GE/Patmen.png",  agent: "viper",   r: 0.83, acs: 213, k: 16, d: 18, a: 2,  kdDiff: -2, kast: 52, adr: 138, hs: 38, fk: 2, fd: 2 },
          { name: "Kr1stal", photo: "GE/Krystal.png", agent: "sova",    r: 0.79, acs: 180, k: 12, d: 18, a: 4,  kdDiff: -6, kast: 48, adr: 150, hs: 32, fk: 2, fd: 0 },
          { name: "xavi8k",  photo: "GE/Xavi8k.png",  agent: "sage",    r: 0.69, acs: 150, k: 10, d: 17, a: 4,  kdDiff: -7, kast: 71, adr: 101, hs: 18, fk: 1, fd: 2 },
          { name: "UdoTan",  photo: "GE/Udotan.png",  agent: "neon",    r: 0.34, acs: 121, k:  8, d: 18, a: 4,  kdDiff:-10, kast: 57, adr:  81, hs: 20, fk: 2, fd: 5 }
        ],
        t2: [
          { name: "primmie",   photo: "FULLSENSE/primmie.png",   agent: "jett",  r: 1.52, acs: 315, k: 24, d: 15, a: 8, kdDiff:  9, kast: 81, adr: 203, hs: 33, fk: 3, fd: 2, isTop: true },
          { name: "Killua",    photo: "FULLSENSE/killua.png",    agent: "sova",  r: 1.29, acs: 252, k: 18, d: 13, a: 6, kdDiff:  5, kast: 90, adr: 167, hs: 41, fk: 3, fd: 1 },
          { name: "JitBoyS",   photo: "FULLSENSE/jitboys.png",   agent: "neon",  r: 1.22, acs: 198, k: 17, d: 11, a: 3, kdDiff:  6, kast: 76, adr: 127, hs: 29, fk: 2, fd: 3 },
          { name: "Leviathan", photo: "FULLSENSE/leviathan.png", agent: "omen",  r: 1.19, acs: 201, k: 16, d: 12, a: 7, kdDiff:  4, kast: 81, adr: 129, hs: 44, fk: 2, fd: 1 },
          { name: "Crws",      photo: "FULLSENSE/crws.png",      agent: "viper", r: 0.90, acs: 146, k: 10, d: 10, a: 4, kdDiff:  0, kast: 76, adr: 100, hs: 20, fk: 2, fd: 2 }
        ]
      },
      rounds: [
        ["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],
        ["t1","ct"],["t2","t"],["t1","ct"],["t2","t"],["t2","t"],["t2","t"],
        ["t1","t"],["t1","t"],["t2","ct"],["t1","t"],["t1","t"],["t1","t"],
        ["t2","ct"],["t1","t"],["t2","ct"]
      ],
      sideBreakdown: [
        { team: "t1", label: "GE Defense (CT)", note: "ครึ่งแรก",  value: "2 / 12" },
        { team: "t1", label: "GE Attack (T)",   note: "ครึ่งหลัง", value: "6 / 9" },
        { team: "t2", label: "FS Attack (T)",   note: "ครึ่งแรก",  value: "10 / 12" },
        { team: "t2", label: "FS Defense (CT)", note: "ครึ่งหลัง", value: "3 / 9" }
      ],
      entryDuels: [
        { team: "t1", name: "Autumn",  photo: "GE/Autumn.png",  agent: "Chamber", fk: 2, fd: 3 },
        { team: "t1", name: "PatMen",  photo: "GE/Patmen.png",  agent: "Viper",   fk: 2, fd: 2 },
        { team: "t1", name: "Kr1stal", photo: "GE/Krystal.png", agent: "Sova",    fk: 2, fd: 0 },
        { team: "t1", name: "xavi8k",  photo: "GE/Xavi8k.png",  agent: "Sage",    fk: 1, fd: 2 },
        { team: "t1", name: "UdoTan",  photo: "GE/Udotan.png",  agent: "Neon",    fk: 2, fd: 5 },
        { team: "t2", name: "primmie",   photo: "FULLSENSE/primmie.png",   agent: "Jett",  fk: 3, fd: 2 },
        { team: "t2", name: "Killua",    photo: "FULLSENSE/killua.png",    agent: "Sova",  fk: 3, fd: 1 },
        { team: "t2", name: "JitBoyS",   photo: "FULLSENSE/jitboys.png",   agent: "Neon",  fk: 2, fd: 3 },
        { team: "t2", name: "Leviathan", photo: "FULLSENSE/leviathan.png", agent: "Omen",  fk: 2, fd: 1 },
        { team: "t2", name: "Crws",      photo: "FULLSENSE/crws.png",      agent: "Viper", fk: 2, fd: 2 }
      ],
      entryInsight: "FS เก็บ First Kill ทั้งแมพ 12-9 พ่วงด้วย UdoTan ที่ −3 net (FK 2 / FD 5) — Pocket OP/Operator ของ GE ไม่ทำงาน, ดวลเปิดเสียบ่อยจนเปิด Site ไม่ติด เป็นต้นเหตุของครึ่งแรก 2-10"
    }
  ],
  radar: {
    sectionDesc: "ค่าเฉลี่ยทั้ง 2 แมพ — FS นำทุกหมวด สะท้อน Firepower ที่กดดันให้ GE ต้องเล่นกลยุทธ์ซับซ้อนเพื่อชดเชย",
    t1: { rating: 0.81, acs: 175, kast: 63, adr: 123, hs: 27, kpp: 13.6 },
    t2: { rating: 1.17, acs: 217, kast: 78, adr: 141, hs: 30, kpp: 17.6 },
    insights: [
      { team: "t2", label: "Rating Gap",    value: "+0.36", delta: "FS 1.17 vs GE 0.81" },
      { team: "t2", label: "KAST Gap",      value: "+15%",  delta: "FS 78% vs GE 63%" },
      { team: "t2", label: "ADR Gap",       value: "+18",   delta: "FS 141 vs GE 123" },
      { team: "t2", label: "Kills/Player",  value: "+4.0",  delta: "FS 17.6 vs GE 13.6" }
    ],
    note: "ตัวเลขช่องว่างขนาดนี้บอกว่า GE ไม่ได้แค่แพ้ผล—แพ้ทุกชั้นของการเล่นยิง ตั้งแต่ Trade ไปจนการรักษา KAST"
  },
  killMatrix: {
    desc: "ทุกคู่ดวล ตลอด 2 แมพ · เซลล์โทน GE = GE ชนะคู่ · เซลล์โทน FS = FS ชนะคู่",
    title: "Kill Matchup Matrix · ทั้งแมตช์ (GE vs FS)",
    cols: [
      { name: "Killua",    photo: "FULLSENSE/killua.png" },
      { name: "Crws",      photo: "FULLSENSE/crws.png" },
      { name: "primmie",   photo: "FULLSENSE/primmie.png" },
      { name: "Leviathan", photo: "FULLSENSE/leviathan.png" },
      { name: "JitBoyS",   photo: "FULLSENSE/jitboys.png" }
    ],
    rows: [
      { name: "Kr1stal", photo: "GE/Krystal.png", values: [
        { k: 2, opK: 6, diff: -4 }, { k: 5, opK: 6, diff: -1 }, { k: 6, opK: 6, diff: 0 }, { k: 3, opK: 9, diff: -6 }, { k: 6, opK: 8, diff: -2 }
      ]},
      { name: "PatMen",  photo: "GE/Patmen.png", values: [
        { k: 7, opK: 8, diff: -1 }, { k: 6, opK: 3, diff: 3 }, { k: 9, opK: 8, diff: 1 }, { k: 8, opK: 7, diff: 1 }, { k: 5, opK: 10, diff: -5 }
      ]},
      { name: "UdoTan",  photo: "GE/Udotan.png", values: [
        { k: 6, opK: 7, diff: -1 }, { k: 5, opK: 7, diff: -2 }, { k: 6, opK: 13, diff: -7 }, { k: 2, opK: 4, diff: -2 }, { k: 3, opK: 7, diff: -4 }
      ]},
      { name: "Autumn",  photo: "GE/Autumn.png", values: [
        { k: 6, opK: 7, diff: -1 }, { k: 4, opK: 2, diff: 2 }, { k: 8, opK: 12, diff: -4 }, { k: 11, opK: 5, diff: 6 }, { k: 8, opK: 7, diff: 1 }
      ]},
      { name: "xavi8k",  photo: "GE/Xavi8k.png", values: [
        { k: 5, opK: 5, diff: 0 }, { k: 4, opK: 6, diff: -2 }, { k: 3, opK: 10, diff: -7 }, { k: 3, opK: 8, diff: -5 }, { k: 5, opK: 5, diff: 0 }
      ]}
    ],
    statLinks: [
      { value: "−7", label: "Worst Cell · UdoTan vs primmie & xavi8k vs primmie" },
      { value: "+6", label: "Best GE Cell · Autumn vs Leviathan (11-5)" },
      { value: "primmie", label: "FS Anchor · +29 net จากทุกคู่รวมกัน" }
    ]
  },
  analysis: [
    {
      title: "Firepower ที่กลายเป็นกำแพง",
      sub: "ทำไม FS ปิดเกมได้ทั้งที่ GE มีแผนซับซ้อนกว่า",
      paragraphs: [
        "ทุกตัวเลขในแมตช์นี้ชี้ไปจุดเดียวกัน — FS เก่งเรื่องยิง <b>มากกว่าระดับที่ GE จะแก้ด้วยแผน</b>. Rating เฉลี่ยทั้งแมตช์ของ FS อยู่ที่ <b>1.17</b> เทียบกับ GE ที่ <b>0.81</b> ห่างกัน +0.36 — เป็นช่องว่างที่ทีมระดับ Playoff แทบไม่ปล่อยให้เกิดถ้าทักษะใกล้กัน. ADR ห่างกัน +18, KAST +15% — สามตัวนี้รวมกันแปลว่า FS ไม่ได้แค่ <b>เปิดเก่ง</b> แต่ <b>มีส่วนร่วมในรอบ</b> เกือบทุกผู้เล่น ในขณะที่ GE มีคนทำงานจริงแค่ 2-3 คน",
        "Kill Matchup Matrix ชี้ชัด: primmie ได้ +29 net จากทุกคู่รวมกัน — เซลล์สุดร้ายคือ <b>vs UdoTan (13-6)</b> และ <b>vs xavi8k (10-3)</b>. GE มี Bright Spot แค่จุดเดียวคือ Autumn vs Leviathan (11-5) ที่ได้ +6, นอกนั้นเป็นโทนสี FS แทบทั้งกระดาน"
      ],
      pull: "FS ไม่ได้ชนะเพราะแผนดี — ชนะเพราะ Firepower ดีมากจนแผนของฝ่ายตรงข้ามใช้ไม่ได้ผล",
      stats: [
        { value: "1.17", label: "FS Avg Rating" },
        { value: "+29",  label: "primmie Net Kills (vs ทั้งทีม GE)" },
        { value: "10-2", label: "Breeze ครึ่งบุก FS" }
      ]
    },
    {
      title: "Split — เกมที่ GE เกือบทำสำเร็จ",
      sub: "Mid-round adaption ของ GE ใช้ได้จริง แต่ Firepower FS ตัดจบทุกแผน",
      paragraphs: [
        "ครึ่งแรก FS Dominate ไปหลายรอบจาก Firepower ที่รุนแรง. ความคมของท่าน Primmie แผงฤทธิ์รัวๆ — รอบเด่นคือจังหวะสอย Raze ที่ถือ Ult กลางอากาศแบบคมๆ ในรอบที่ GE <b>Stack ถูก Site ด้วย 3 คน</b> ก็ยังกันไม่อยู่",
        { video: "FSvsGE/hilight1.mp4", title: "Firepower ท่าน Primmie คมๆ", caption: "FS โถมเข้า Site ที่ GE Stack 3 คน — Primmie สอย Raze ที่ถือ Ult กลางอากาศ ตอกย้ำว่า Firepower ระดับนี้ฝ่าได้แม้ Stack หนัก" },
        "หลังโดน FS โถมเกมไวใส่หลายครั้ง GE เริ่มปรับตัว — มี <b>Pause เพื่อแก้แผน</b> แล้วเขาก็แก้มาทันทีด้วยการพยายามตัดไฟต้นลม เบรกจังหวะแรกของ FS ให้ได้ ชนจังหวะแรกตัดได้อย่างน้อยหนึ่ง",
        { video: "FSvsGE/hilight2.mp4", title: "Xavi8k พยายามตัดไฟต้นลม", caption: "วัดสุด แม้ว่าจะเล่นตั้งรับแบบเซฟๆ ได้ก็ตาม — เป็นจุดเริ่มของการดึงเกมจาก 2-5 กลับมา 6-6" },
        "แผนได้ผลครับ — GE ตีเกมกลับคืนมาจนดึงเข้า <b>6-6</b> ลงพักครึ่งได้สำเร็จ จากตอนแรกที่ FS นำ 5-2",
        "สลับมาฝั่งครึ่ง — Protocol Default ของ FS คือ <b>เอา Primmie ถือ OP</b>. รอบแรกที่ซื้อได้ ท่านซื้อ OP มาและเป็น Win Condition หลักให้กับทีมแบบสวยๆ",
        { video: "FSvsGE/hilight3.mp4", title: "Primmie OP 2k Collateral สวยๆ", caption: "ครึ่งหลังรอบแรกที่ซื้อได้ Primmie เปลี่ยนมาถือ OP — เป็น Win Condition หลักของ Protocol Default ฝั่งรับ" },
        "แต่ไม่ทันไร GE ก็แก้ได้ทันที เหมือนกับที่ Xffero ทำใส่ Primmie ในด่าน Fracture — นั่นคือ <b>ดันสวน Timing หลบเหลี่ยม OP</b> และตัดจังหวะ OP ได้สวยๆ รวมถึงเลี่ยงการปะทะกับ Operator ทำให้ FS ต้องคิดหนักกับการซื้อ Operator ในอนาคต",
        { video: "FSvsGE/hilight4.mp4", title: "Autumn ดัก Timing Primmie ตัดได้หน้า A Main", caption: "GE จับ Pattern OP-Main ได้ ดัน Timing สวนตัดทันที — บีบให้ FS ต้องคิดหนักก่อนซื้อ Operator รอบถัดไป" },
        { video: "FSvsGE/hilight5.mp4", title: "GE เจาะกลาง หลังจับไต๋ OP-Main", caption: "เมื่อรู้ว่า FS วาง OP ที่ Main เป็นหลัก GE เปลี่ยนแผนเจาะตรงกลางเพื่อเลี่ยงเหลี่ยม Operator" },
        "พอ FS เริ่มรู้ตัวว่า Operator ไม่ได้ผลอีกต่อไป พวกเขาจึง <b>เปลี่ยน Protocol การเล่น</b> — สลับเอา Primmie มาจับ Vandal อีกครั้ง และเน้นเรื่องการหาพื้นที่เป็นหลัก",
        { video: "FSvsGE/hilight6.mp4", title: "Primmie กลับมา Vandal · FS ดันสวนกลาง", caption: "พอ Operator ไม่ work FS สลับ Protocol — Primmie กลับ Vandal เน้นหาพื้นที่ ดันสวนกลางทันทีที่ GE ขยับเข้า Main" },
        "แต่ GE ก็ไหวตัวทัน พยายามแก้เกม ทำ Protocol สุดซับซ้อน — ส่ง Patmen Fake TP เข้า B พร้อมส่ง UdoTan เข้า Site B จริง เพื่อดึงภาระหน้า A ให้ GE เข้าไซต์ง่ายขึ้น. แต่มันก็ไม่พอ เพราะ FS แก้ได้ เดินตามเกมทัน + จังหวะยิงเหนือกว่า — และท้ายที่สุดปิดแมพแรกไปได้",
        { video: "FSvsGE/hilight7.mp4", title: "Protocol GE สุดซับซ้อน แต่เสียหายรัวๆ", caption: "PatMen Fake TP เข้า B + UdoTan เข้า Site B จริง เพื่อดึงภาระหน้า A — GE ได้ Site จริง แต่เหลือแค่ 2 คน FS เก็บ Retake ได้สบาย" }
      ],
      pull: "แผนซับซ้อนต้องแลกด้วย Trade ที่เสมอกัน — ซึ่ง GE ทำไม่ได้ในตอนนี้",
      stats: [
        { value: "5-2",  label: "FS นำต้นเกม ก่อนโดน Pause" },
        { value: "6-6",  label: "ครึ่งแรกจบเสมอ · GE แก้สำเร็จ" },
        { value: "13-11",label: "ปิดแมพ · ครึ่งหลัง FS รับ 7/12" }
      ]
    },
    {
      title: "Breeze — ด่านเก่ง GE ที่กลายเป็น Stomp",
      sub: "เมื่อแผนซับซ้อนใช้ไม่ได้ Firepower ดิบจะเข้ามาทำงาน",
      paragraphs: [
        "ด่าน Breeze ที่ขึ้นชื่อว่าเป็น <b>ด่านเก่งของ Global Esports</b> กลับกลายเป็นว่าพวกเขาโดนฉีกการเล่นเป็นชิ้นๆ จากพลัง Firepower ของ FS เช่นเคย. เกมฝั่งบุกของ FS เรียกว่ากระทืบ Stomp GE จมดินไปเลย — หลายๆ ครั้งไม่สามารถทำจังหวะกันได้อยู่ โดนตัด โดน Trade รัวๆ มี Round ที่น่าสนใจอยู่น้อยมาก",
        "เพราะ Firepower มารอบนี้ GE ดูดรอปขึ้น — อาจเพราะด่านนี้การวัด Firepower มันเห็นชัดกว่าด่าน Split ที่พอเล่นกลยุทธ์ซับซ้อนได้เปรียบอยู่บ้าง. UdoTan ลงไปที่ Rating <b>0.34</b>, FK 2 / FD 5 — แทบทุกครั้งที่ GE ขยับเข้า Site, คนเปิดเสียก่อน Site จะแตก",
        { video: "FSvsGE/hilight8.mp4", title: "Xavi8k พลาดจังหวะยิง · FS Scale Site A สบาย", caption: "บน Breeze พื้นที่เปิดกว้าง โอกาสคุม Long Angle สำคัญมาก — Xavi8k ปล่อยจังหวะแรก ทำให้ FS เก็บพื้นที่ Site A ได้ฟรี" },
        "primmie แตะเพดานในแมพนี้: Rating <b>1.52</b>, ACS 315, ADR 203, K/D 24/15. ไม่มีรอบไหนที่ GE สร้างจังหวะแล้ว FS ไม่มี <b>คนยิงตอบ</b> — Killua KAST 90% สะท้อนว่าทุก Engagement มีอย่างน้อย 1 player FS ทำ Impact",
        "ครึ่งหลังแม้ GE จะบุกเข้าอยู่บ้าง (6/9 รอบ) แต่ FS ก็ประคับประคองเกมได้จนจบ <b>8-13</b> — FS เอาชนะ GE เข้าสู่รอบชิงได้สำเร็จ"
      ],
      pull: "Breeze เป็นแมพประจักษ์: เมื่อกลยุทธ์ของ GE ไม่มีพื้นที่ปกปิด Firepower Gap, ผลคือครึ่งบุก 10-2",
      stats: [
        { value: "10-2", label: "FS ครึ่งบุก Breeze" },
        { value: "1.52", label: "primmie Rating · สูงสุดของแมตช์" },
        { value: "0.34", label: "UdoTan Rating · ต่ำสุดของแมตช์" }
      ]
    },
    {
      title: "บทสรุป — FS เข้ารอบชิงพร้อมโอกาสแชมป์",
      sub: "และจุดอ่อนที่ยังไม่ปรากฏ (เพราะยังไม่มีใครบังคับให้ปรากฏ)",
      paragraphs: [
        "<b>FS</b> ตอกย้ำเรื่อง Firepower และเริ่มมี Protocol ที่ชัดเจนขึ้น — มีการสลับวิธีเล่นเมื่อเกมกดดัน เช่น OP→Vandal บน Split. โอกาสแชมป์สูงมาก. จุดที่เป็น nitpicking มากกว่าจุดอ่อนจริง: <b>แผนยังไม่หลากหลายเท่าที่ควร</b> และยังเน้นใช้ Firepower เป็น Insurance ในจังหวะคับขัน — ถ้าเจอทีมที่ Firepower ใกล้เคียงและ Trade ดีกว่า, FS จะถูกบังคับให้ Innovate",
        "<b>GE</b> ก็ตอกย้ำจุดเดิม — แผนครอบคลุม, แก้เกามือคล่อง, Mid-round ดีจริง แต่ <b>ไม่มี Firepower เด่นชัด</b>. Patmen ยังเป็น Win Condition หลัก เสริม Autumn ที่ Playoff กำลังมาแรง. ทางออกที่เห็นมีสองทาง: (1) ปั้นมือยิงให้ขึ้นมาเป็น Anchor อีกคนนอกจาก Patmen, หรือ (2) สร้างแผนเฉพาะสำหรับ Scenario ที่ <b>ยิงไม่ชนะ</b> — ตอนนี้เวลา Firepower แพ้ พวกเขายังไม่มี Plan B ที่ชัดเจน"
      ]
    }
  ]
};
