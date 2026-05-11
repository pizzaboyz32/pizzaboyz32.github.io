window.matchData = {
  meta: { event: "VCT 2026 · Pacific · Stage 1", stage: "Playoffs · Lower Round 2", date: "10 May 2026", format: "Best of 3" },
  teams: {
    t1: { name: "Paper Rex", tag: "SINGAPORE · PRX", shortTag: "PRX", logo: "Paper rex/logo.png", color: "#ff5252", colorRgb: "255,82,82", score: 2, isWinner: true },
    t2: { name: "Kiwoom DRX", tag: "KOREA · KRX", shortTag: "KRX", logo: "Kiwoom DRX/logo.png", color: "#3aa9ff", colorRgb: "58,169,255", score: 1, isWinner: false }
  },
  vetoDesc: "KRX แบน Lotus เปิดเกม · PRX ตอบกลับด้วย Pearl · KRX เลือก Ascent ที่ตัวเองคุมแผนได้ · PRX เลือก Breeze · KRX แบน Fracture · PRX แบน Haven · เหลือ Split เป็นแมพ Decider — ที่กลายเป็น Absolute Stomp ของ PRX 13–1",
  veto: [
    { team: "t2", action: "ban", map: "lotus", mapFile: "lotus.avif" },
    { team: "t1", action: "ban", map: "pearl", mapFile: "pearl.avif" },
    { team: "t2", action: "pick", map: "ascent", mapFile: "ascent.avif" },
    { team: "t1", action: "pick", map: "breeze", mapFile: "breeze.avif" },
    { team: "t2", action: "ban", map: "fracture", mapFile: "fracture.avif" },
    { team: "t1", action: "ban", map: "haven", mapFile: "haven.avif" },
    { team: null, action: "left", map: "split", mapFile: "split.webp", note: "Decider · PRX Reset ครบทุกมิติ — Plan + Protocol + Firepower ปิดเกม 13–1 แบบ Absolute Stomp" }
  ],
  maps: [
    {
      name: "Ascent",
      file: "map data/ascent.avif",
      pickedBy: "t2",
      duration: "44:21",
      score: { t1: 13, t2: 8 },
      sectionTitle: "Map 1 · Ascent",
      sectionDesc: "KRX Pick — PRX หยิบ Comp Yoru/Sage/Vyse แปลกตา เน้นยึด Mid + ใช้ Sage Wall ตัด Rotation คล้ายๆ กับการใช้ Deadlock ปาบาเรียดัก CT · ครึ่งแรกฝั่งกัน PRX 6–6 แบบงงๆ ก่อนพลิกครึ่งหลังฝั่งบุก 7–2 — KRX วัดจังหวะแรกแล้วล้มไม่หยุด พังเกมรับตัวเอง",
      composition: {
        t1: [{name:"f0rsakeN",agent:"omen"},{name:"something",agent:"yoru"},{name:"d4v41",agent:"vyse"},{name:"invy",agent:"sova"},{name:"Jinggg",agent:"sage"}],
        t2: [{name:"MaKo",agent:"omen"},{name:"HYUNMIN",agent:"jett"},{name:"yong",agent:"vyse"},{name:"free1ng",agent:"waylay"},{name:"BeYN",agent:"sova"}]
      },
      stats: {
        t1: [
          {name:"f0rsakeN",photo:"Paper rex/f0rsaken.png",agent:"omen",r:1.42,acs:284,k:21,d:14,a:17,kdDiff:7,kast:86,adr:164,hs:26,fk:3,fd:0,isTop:true},
          {name:"something",photo:"Paper rex/something.png",agent:"yoru",r:1.41,acs:246,k:20,d:10,a:1,kdDiff:10,kast:76,adr:144,hs:0,fk:6,fd:4},
          {name:"d4v41",photo:"Paper rex/d4v41.png",agent:"vyse",r:1.35,acs:241,k:20,d:10,a:2,kdDiff:10,kast:76,adr:172,hs:0,fk:1,fd:2},
          {name:"invy",photo:"Paper rex/invy.png",agent:"sova",r:1.16,acs:233,k:16,d:13,a:8,kdDiff:3,kast:86,adr:168,hs:0,fk:3,fd:0},
          {name:"Jinggg",photo:"Paper rex/jinggg.png",agent:"sage",r:0.80,acs:145,k:10,d:14,a:9,kdDiff:-4,kast:67,adr:113,hs:0,fk:1,fd:1}
        ],
        t2: [
          {name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"omen",r:1.08,acs:218,k:16,d:17,a:4,kdDiff:-1,kast:62,adr:140,hs:0,fk:2,fd:2,isTop:true},
          {name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"jett",r:1.01,acs:244,k:16,d:17,a:3,kdDiff:-1,kast:67,adr:150,hs:0,fk:2,fd:5},
          {name:"yong",photo:"noprofile.png",agent:"vyse",r:0.78,acs:190,k:13,d:19,a:3,kdDiff:-6,kast:62,adr:130,hs:0,fk:1,fd:1},
          {name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"waylay",r:0.58,acs:121,k:9,d:17,a:1,kdDiff:-8,kast:52,adr:74,hs:0,fk:1,fd:3},
          {name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"sova",r:0.38,acs:94,k:7,d:17,a:2,kdDiff:-10,kast:48,adr:67,hs:0,fk:1,fd:3}
        ]
      },
      rounds: [
        ["t1","ct"],["t1","ct"],["t1","ct"],
        ["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],
        ["t1","ct"],
        ["t2","t"],
        ["t1","ct"],["t1","ct"],
        ["t1","t"],["t1","t"],["t1","t"],["t1","t"],
        ["t2","ct"],
        ["t1","t"],["t1","t"],
        ["t2","ct"],
        ["t1","t"]
      ],
      sideBreakdown: [
        {team:"t1",label:"PRX Defense",note:"First Half · 6/12 — กันกระจอกตลอด ครึ่ง KAST something 67% / Jinggg 50%",value:"6 / 12"},
        {team:"t2",label:"KRX Attack",note:"First Half · 6/12 — บุกได้ดี แต่ดันเสียจังหวะคีย์",value:"6 / 12"},
        {team:"t1",label:"PRX Attack",note:"Second Half · 7/9 — เน้นยึด Mid ตัด Rotation",value:"7 / 9"},
        {team:"t2",label:"KRX Defense",note:"Second Half · 2/9 — วัดจังหวะแรกล้มไม่หยุด",value:"2 / 9"}
      ],
      entryDuels: [
        {team:"t1",name:"something",photo:"Paper rex/something.png",agent:"Yoru",fk:6,fd:4},
        {team:"t1",name:"f0rsakeN",photo:"Paper rex/f0rsaken.png",agent:"Omen",fk:3,fd:0},
        {team:"t1",name:"invy",photo:"Paper rex/invy.png",agent:"Sova",fk:3,fd:0},
        {team:"t2",name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"Omen",fk:2,fd:2},
        {team:"t2",name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"Jett",fk:2,fd:5},
        {team:"t1",name:"d4v41",photo:"Paper rex/d4v41.png",agent:"Vyse",fk:1,fd:2},
        {team:"t1",name:"Jinggg",photo:"Paper rex/jinggg.png",agent:"Sage",fk:1,fd:1},
        {team:"t2",name:"yong",photo:"noprofile.png",agent:"Vyse",fk:1,fd:1},
        {team:"t2",name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"Waylay",fk:1,fd:3},
        {team:"t2",name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"Sova",fk:1,fd:3}
      ],
      entryInsight: "something Yoru เปิดราวด์ 6 ครั้ง (สูงสุดในแมพ) แต่ FD 4 ครั้ง — Net +2 สะท้อนปัญหาที่ PzFx เกริ่นว่า Yoru วาปหมดไว เล่นจังหวะดั้งเดิมไม่ออก ถ้าหา FK ไม่ได้แทบจะไม่มีบทบาท · HYUNMIN Jett FK 2 / FD 5 (Net −3) สะท้อนปัญหาฝั่งกันของ KRX ที่วัดจังหวะแรกแล้วเสียคีย์แมนตลอด"
    },
    {
      name: "Breeze",
      file: "map data/breeze.avif",
      pickedBy: "t1",
      duration: "37:48",
      score: { t1: 5, t2: 13 },
      sectionTitle: "Map 2 · Breeze",
      sectionDesc: "PRX Pick — KRX แก้แผนหนัก เปลี่ยนชน A ไม่หยุดแทนที่จะดัน Elbow ที่ PRX ตั้งใจจะยึด · ครึ่งแรกฝั่งกัน PRX 3–9 พังเกมรับ · KRX ชนะปืนสั้นครึ่งหลัง ขึ้น 12 ปิดเกมแบบเร็ว",
      composition: {
        t1: [{name:"something",agent:"jett"},{name:"d4v41",agent:"viper"},{name:"f0rsakeN",agent:"neon"},{name:"invy",agent:"sova"},{name:"Jinggg",agent:"omen"}],
        t2: [{name:"BeYN",agent:"kayo"},{name:"MaKo",agent:"viper"},{name:"free1ng",agent:"sova"},{name:"HYUNMIN",agent:"jett"},{name:"yong",agent:"harbor"}]
      },
      stats: {
        t1: [
          {name:"something",photo:"Paper rex/something.png",agent:"jett",r:1.23,acs:210,k:13,d:10,a:3,kdDiff:3,kast:67,adr:140,hs:0,fk:4,fd:3,isTop:true},
          {name:"d4v41",photo:"Paper rex/d4v41.png",agent:"viper",r:1.00,acs:216,k:13,d:12,a:3,kdDiff:1,kast:67,adr:146,hs:0,fk:2,fd:2},
          {name:"f0rsakeN",photo:"Paper rex/f0rsaken.png",agent:"neon",r:0.58,acs:164,k:10,d:15,a:3,kdDiff:-5,kast:50,adr:107,hs:0,fk:1,fd:4},
          {name:"invy",photo:"Paper rex/invy.png",agent:"sova",r:0.56,acs:138,k:7,d:14,a:3,kdDiff:-7,kast:50,adr:99,hs:0,fk:1,fd:0},
          {name:"Jinggg",photo:"Paper rex/jinggg.png",agent:"omen",r:0.50,acs:121,k:7,d:16,a:6,kdDiff:-9,kast:61,adr:77,hs:0,fk:1,fd:0}
        ],
        t2: [
          {name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"kayo",r:1.39,acs:191,k:10,d:8,a:11,kdDiff:2,kast:83,adr:120,hs:0,fk:0,fd:1,isTop:true},
          {name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"viper",r:1.27,acs:242,k:16,d:11,a:4,kdDiff:5,kast:78,adr:156,hs:0,fk:2,fd:3},
          {name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"sova",r:1.21,acs:251,k:17,d:9,a:3,kdDiff:8,kast:94,adr:164,hs:0,fk:3,fd:1},
          {name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"jett",r:1.14,acs:209,k:15,d:12,a:1,kdDiff:3,kast:56,adr:145,hs:0,fk:3,fd:3},
          {name:"yong",photo:"noprofile.png",agent:"harbor",r:0.90,acs:155,k:9,d:10,a:7,kdDiff:-1,kast:78,adr:115,hs:0,fk:1,fd:1}
        ]
      },
      rounds: [
        ["t2","t"],["t1","ct"],["t2","t"],["t1","ct"],["t2","t"],["t1","ct"],
        ["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],
        ["t2","ct"],["t2","ct"],["t2","ct"],
        ["t1","t"],["t1","t"],
        ["t2","ct"]
      ],
      sideBreakdown: [
        {team:"t1",label:"PRX Defense",note:"First Half · 3/12 — แผนยึด Elbow ไม่ทำงาน KRX ชน A ไม่หยุด",value:"3 / 12"},
        {team:"t2",label:"KRX Attack",note:"First Half · 9/12 — แก้แผน PRX แบบ Direct Hit",value:"9 / 12"},
        {team:"t1",label:"PRX Attack",note:"Second Half · 2/6 — ตามเกมไม่ทันหลังเสีย Pistol",value:"2 / 6"},
        {team:"t2",label:"KRX Defense",note:"Second Half · 4/6 — ชนะ Pistol ปิดเกมเร็ว",value:"4 / 6"}
      ],
      entryDuels: [
        {team:"t1",name:"something",photo:"Paper rex/something.png",agent:"Jett",fk:4,fd:3},
        {team:"t2",name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"Sova",fk:3,fd:1},
        {team:"t2",name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"Viper",fk:2,fd:3},
        {team:"t2",name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"Jett",fk:3,fd:3},
        {team:"t1",name:"d4v41",photo:"Paper rex/d4v41.png",agent:"Viper",fk:2,fd:2},
        {team:"t2",name:"yong",photo:"noprofile.png",agent:"Harbor",fk:1,fd:1},
        {team:"t1",name:"invy",photo:"Paper rex/invy.png",agent:"Sova",fk:1,fd:0},
        {team:"t1",name:"Jinggg",photo:"Paper rex/jinggg.png",agent:"Omen",fk:1,fd:0},
        {team:"t2",name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"Kayo",fk:0,fd:1},
        {team:"t1",name:"f0rsakeN",photo:"Paper rex/f0rsaken.png",agent:"Neon",fk:1,fd:4}
      ],
      entryInsight: "free1ng Sova FK 3 / FD 1 + MaKo + HYUNMIN รวม FK 8 ครั้งฝั่ง KRX — บุก A ไม่หยุด เปิดเกมเด็ดทุกครั้ง · f0rsakeN Neon FK 1 / FD 4 (Net −3) สะท้อนปัญหา PRX ที่ยึด Elbow ไม่ได้เพราะ KRX ชนตรงเข้า A ตลอด · KRX 3 คนยืน Rating ≥ 1.21 — เกมที่ทุกคนคลิก"
    },
    {
      name: "Split (Decider)",
      file: "map data/split.webp",
      pickedBy: null,
      duration: "26:18",
      score: { t1: 13, t2: 1 },
      sectionTitle: "Map 3 · Split (Decider)",
      sectionDesc: "Absolute Stomp — PRX Reset เกมจาก Map 2 แบบพลิกจากหลังตีนเป็นหน้ามือ · ตั้งเงื่อนไขซับซ้อนให้ KRX ตามไม่ทัน · d4v41 R 1.87 / Jinggg Raze 19K · แม้มีจังหวะลืมซื้อของก็ยังคุมเกม 100% — KRX เก็บได้แค่ 1 รอบเท่านั้น",
      composition: {
        t1: [{name:"d4v41",agent:"viper"},{name:"Jinggg",agent:"raze"},{name:"invy",agent:"skye"},{name:"something",agent:"jett"},{name:"f0rsakeN",agent:"omen"}],
        t2: [{name:"BeYN",agent:"skye"},{name:"MaKo",agent:"astra"},{name:"yong",agent:"vyse"},{name:"free1ng",agent:"raze"},{name:"HYUNMIN",agent:"jett"}]
      },
      stats: {
        t1: [
          {name:"d4v41",photo:"Paper rex/d4v41.png",agent:"viper",r:1.87,acs:237,k:13,d:2,a:2,kdDiff:11,kast:93,adr:141,hs:0,fk:3,fd:0,isTop:true},
          {name:"Jinggg",photo:"Paper rex/jinggg.png",agent:"raze",r:1.64,acs:328,k:19,d:8,a:0,kdDiff:11,kast:86,adr:183,hs:0,fk:2,fd:2},
          {name:"invy",photo:"Paper rex/invy.png",agent:"skye",r:1.47,acs:220,k:12,d:6,a:7,kdDiff:6,kast:79,adr:171,hs:0,fk:1,fd:0},
          {name:"something",photo:"Paper rex/something.png",agent:"jett",r:1.16,acs:239,k:12,d:7,a:5,kdDiff:5,kast:79,adr:159,hs:0,fk:1,fd:2},
          {name:"f0rsakeN",photo:"Paper rex/f0rsaken.png",agent:"omen",r:1.01,acs:147,k:7,d:7,a:5,kdDiff:0,kast:93,adr:90,hs:0,fk:2,fd:1}
        ],
        t2: [
          {name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"skye",r:0.65,acs:156,k:7,d:13,a:3,kdDiff:-6,kast:57,adr:92,hs:0,fk:3,fd:2,isTop:true},
          {name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"astra",r:0.65,acs:171,k:7,d:12,a:3,kdDiff:-5,kast:57,adr:118,hs:0,fk:0,fd:1},
          {name:"yong",photo:"noprofile.png",agent:"vyse",r:0.62,acs:173,k:8,d:13,a:1,kdDiff:-5,kast:64,adr:121,hs:0,fk:0,fd:0},
          {name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"raze",r:0.48,acs:137,k:4,d:13,a:6,kdDiff:-9,kast:50,adr:107,hs:0,fk:2,fd:2},
          {name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"jett",r:0.22,acs:73,k:4,d:12,a:2,kdDiff:-8,kast:36,adr:49,hs:0,fk:0,fd:4}
        ]
      },
      rounds: [
        ["t1","t"],["t1","t"],["t1","t"],["t1","t"],["t1","t"],["t1","t"],
        ["t2","ct"],
        ["t1","t"],["t1","t"],["t1","t"],["t1","t"],["t1","t"],
        ["t1","ct"],["t1","ct"]
      ],
      sideBreakdown: [
        {team:"t1",label:"PRX Attack",note:"First Half · 11/12 — Plan/Protocol/Firepower ครบทุกแกน",value:"11 / 12"},
        {team:"t2",label:"KRX Defense",note:"First Half · 1/12 — ตั้งหลักไม่ทันแม้แต่รอบเดียว",value:"1 / 12"},
        {team:"t1",label:"PRX Defense",note:"Second Half · 2/2 — ปิดเกมก่อนเข้าจังหวะที่ 3",value:"2 / 2"},
        {team:"t2",label:"KRX Attack",note:"Second Half · 0/2 — เก็บได้ 0 รอบฝั่งบุก",value:"0 / 2"}
      ],
      entryDuels: [
        {team:"t1",name:"d4v41",photo:"Paper rex/d4v41.png",agent:"Viper",fk:3,fd:0},
        {team:"t2",name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"Skye",fk:3,fd:2},
        {team:"t1",name:"f0rsakeN",photo:"Paper rex/f0rsaken.png",agent:"Omen",fk:2,fd:1},
        {team:"t1",name:"Jinggg",photo:"Paper rex/jinggg.png",agent:"Raze",fk:2,fd:2},
        {team:"t1",name:"invy",photo:"Paper rex/invy.png",agent:"Skye",fk:1,fd:0},
        {team:"t1",name:"something",photo:"Paper rex/something.png",agent:"Jett",fk:1,fd:2},
        {team:"t2",name:"yong",photo:"noprofile.png",agent:"Vyse",fk:0,fd:0},
        {team:"t2",name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"Astra",fk:0,fd:1},
        {team:"t2",name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"Raze",fk:2,fd:2},
        {team:"t2",name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"Jett",fk:0,fd:4}
      ],
      entryInsight: "d4v41 Viper FK 3 / FD 0 (Net +3) · 4 คนของ PRX ติดบวกในการเปิดราวด์ · HYUNMIN Jett FK 0 / FD 4 (Net −4) — Duelist หลักของ KRX โดนปิดทุกจังหวะเปิด เห็นได้ชัดสุดในแมพนี้ · KAST HYUNMIN 36% หมายถึง 64% ของรอบที่เขา 'ตายเปล่า'"
    }
  ],
  radar: {
    sectionDesc: "เปรียบเทียบค่าเฉลี่ยทั้งทีม 3 แมพ — PRX กดทุกแกนยกเว้น HS% ที่ KRX สูงกว่าเล็กน้อย · สะท้อนคำเตือนของ PzFx ว่า KRX 'เก่งแล้ว ดูดีแล้ว แค่เก่งไม่พอที่จะชนะ PRX' — เล็งแม่นอยู่ แต่จังหวะการเข้า/ออกของ PRX เหนือกว่า",
    t1: { rating: 1.14, acs: 211, kast: 74, adr: 138, hs: 25, kpp: 13.3 },
    t2: { rating: 0.82, acs: 175, kast: 63, adr: 117, hs: 29, kpp: 10.5 },
    insights: [
      {team:"t1",label:"AVG TEAM RATING",value:"1.14",delta:"vs KRX 0.82 · Δ +0.32"},
      {team:"t1",label:"AVG ACS",value:"211",delta:"vs KRX 175 · Δ +36"},
      {team:"t1",label:"AVG KAST",value:"74%",delta:"vs KRX 63% · Δ +11pt"},
      {team:"t1",label:"AVG ADR",value:"138",delta:"vs KRX 117 · Δ +21"},
      {team:"t2",label:"AVG HS%",value:"29%",delta:"vs PRX 25% · Δ +4pt"},
      {team:"t1",label:"KILLS / PLAYER / MAP",value:"13.3",delta:"vs KRX 10.5 · Δ +2.8"}
    ],
    note: "<b style=\"color:#fff\">PRX ครอบ 5 ใน 6 แกน</b> — Rating Δ +0.32 / KAST Δ +11pt บ่งชี้ว่า PRX เข้าปะทะแล้ว Trade ได้ดีกว่ามาก · HS% KRX สูงกว่า (Δ +4pt) ตอกย้ำว่า <b>ไม่ใช่เรื่องเล็งไม่แม่น</b> แต่เป็น <b>จังหวะตัดสินใจและการตั้งเงื่อนไขเกม</b> ที่ PRX เหนือกว่า · ผู้เล่นที่ดึงค่าเฉลี่ย KRX ลงคือ <b>HYUNMIN ใน Split (R 0.22)</b> และ <b>BeYN ใน Ascent (R 0.38)</b> · ฝั่ง PRX แม้ Jinggg ใน Ascent + Breeze จะหลุดฟอร์ม (R 0.80, 0.50) แต่ <b>d4v41 ยืน Rating ≥ 1.00 ทั้ง 3 แมพ</b> (1.35 / 1.00 / 1.87) — ขั้วหลักของทีมที่ไม่หลุด"
  },
  killMatrix: {
    desc: "ทั้งแมตช์รวม 3 แมพ — d4v41 คุม matchup สำคัญติดบวก 4 / 5 รวม +22 ขั้วหลักของ PRX · something รวม +18 (เด่นสุดในการ vs MaKo +8 / vs BeYN +6) · ฝั่ง KRX ทุกคนติดลบ — BeYN −14 / yong −12 / free1ng −9 · MaKo เก็บได้แค่ −1 เป็นคนเดียวที่เกือบเท่าทุน",
    cols: [
      {name:"yong",photo:"noprofile.png"},
      {name:"free1ng",photo:"Kiwoom DRX/free1ing.png"},
      {name:"MaKo",photo:"Kiwoom DRX/Mako.png"},
      {name:"BeYN",photo:"Kiwoom DRX/beyn.png"},
      {name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png"}
    ],
    rows: [
      {name:"d4v41",photo:"Paper rex/d4v41.png",values:[{k:12,opK:3,diff:9},{k:7,opK:5,diff:2},{k:7,opK:9,diff:-2},{k:8,opK:2,diff:6},{k:12,opK:5,diff:7}]},
      {name:"something",photo:"Paper rex/something.png",values:[{k:6,opK:10,diff:-4},{k:11,opK:5,diff:6},{k:11,opK:3,diff:8},{k:10,opK:4,diff:6},{k:7,opK:5,diff:2}]},
      {name:"f0rsakeN",photo:"Paper rex/f0rsaken.png",values:[{k:10,opK:8,diff:2},{k:11,opK:5,diff:6},{k:7,opK:10,diff:-3},{k:6,opK:7,diff:-1},{k:4,opK:6,diff:-2}]},
      {name:"invy",photo:"Paper rex/invy.png",values:[{k:7,opK:5,diff:2},{k:4,opK:6,diff:-2},{k:5,opK:7,diff:-2},{k:8,opK:5,diff:3},{k:11,opK:10,diff:1}]},
      {name:"Jinggg",photo:"Paper rex/jinggg.png",values:[{k:7,opK:4,diff:3},{k:6,opK:9,diff:-3},{k:10,opK:10,diff:0},{k:6,opK:6,diff:0},{k:7,opK:9,diff:-2}]}
    ],
    statLinks: [
      {value:"+22",label:"d4v41 total diff vs KRX · ขั้วหลัก PRX"},
      {value:"+9",label:"d4v41 vs yong · matchup กดสุดของแมตช์"},
      {value:"+18",label:"something total · X-factor วาปไป-มาที่ KRX ตามไม่ทัน"},
      {value:"−14",label:"BeYN total · KRX ที่ถูกกดหนักสุด"}
    ]
  },
  analysis: [
    {
      title: "Map 1 · Ascent — Comp Yoru/Sage/Vyse + Sage Wall ตัด Rotation (คล้ายๆ Deadlock)",
      sub: "เชื่อมโยงกับ Stats: PRX ครึ่งหลังฝั่งบุก 7/9 (78%) · something Yoru FK 6 / FD 4 · KRX วัดจังหวะแรกล้มไม่หยุด — เสีย Defense 2/9 ครึ่งหลัง",
      paragraphs: [
        "<b>Ascent (KRX Pick)</b> PRX หยิบ Comp ที่ตอนแรกดูงงๆ — <b>Yoru/Sage/Vyse</b> · แต่พอดูครึ่งหลังเข้าใจทันที PzFx ชี้ว่าเป็นกลยุทธ์ <b>ยึด Mid + ใช้ Sage Wall ตัด Rotation ฝั่ง CT</b> — <b>คล้ายๆ กับการใช้ Deadlock ปาบาเรีย</b> แต่รอบนี้เป็น Sage Wall ทำงานแทน (PRX ไม่ได้หยิบ Deadlock มาใช้) · ถ้ายึด Mid ได้ ทีมตั้งรับแทบจะ Rotate ข้ามไม่ได้เลย — ผลคือครึ่งหลังฝั่งบุก PRX กดไป <b>7/9 (78%)</b> ขณะที่ KRX ฝั่งกันเหลือแค่ 2/9",
        "ความฮาของแมพนี้ไม่ได้อยู่ที่ PRX แต่อยู่ที่ KRX — ครึ่งแรก <b>KRX บุกได้ถึง 6/12</b> ทั้งที่ Ascent ขึ้นชื่อว่าเป็นด่านกันหนัก ปกติฝั่งกันมีโอกาสได้ 8 รอบสบายๆ แต่ <b>PRX กันได้แค่ 6/12</b> ตามที่ PzFx ตีว่าปัญหามาจาก <b>Value ของ Yoru และ Sage</b> ที่ดูเหมือนทำผลงานดี (something R 1.41 / Jinggg R 0.80) — แต่ดู KAST ฝั่งกันของ something แค่ <b>67%</b> และ Jinggg แค่ <b>50%</b> สะท้อนสองคนนี้ยังมีปัญหาในเกมรับ Jinggg มีจังหวะล่กให้ d4v41 มาแก้ และ something เผชิญปัญหา Yoru วาปหมดไว เล่นจังหวะดั้งเดิมยาก",
        "Round Flow ครึ่งแรก: PRX ขึ้น 3-0 ก่อน KRX ตีกลับ 5 รอบติด (rd 4-8) · ค่อยกลับมาแบ่งกัน — PzFx อธิบายว่า KRX ดันทุลังออกมายิงนอกไซต์ พยายามวัดจังหวะแรก ผลคือพอสลับเป็น KRX กัน <b>ล้มไม่หยุด</b> · มีแค่จังหวะสวยๆ จาก MaKo เดินออกมายิงหน้า A 4 Kill เป็น Round เดียวที่ดูดี (เห็นได้ใน rd 17, 20 ที่ KRX ป้องกันได้)",
        "หลักฐาน Stats: <b>HYUNMIN FK 2 / FD 5</b> (Net −3) — Duelist หลัก KRX เปิดแล้วตายเอง · <b>BeYN R 0.38 / 7K-17D / ADR 67</b> ติดลบเดี่ยวที่สุดของแมพ · <b>free1ng Waylay R 0.58</b> ใช้งาน Duelist รองไม่ได้ผลเลย · KRX ฝั่งกัน 2/9 = 22% ตอกย้ำ Aim Diff + Decision Diff ที่ห่างกัน"
      ],
      pull: "\"KRX กันได้แค่ 6/12 ทั้งที่ Ascent ขึ้นชื่อกันได้ 8 รอบยังมีสิทธิ์แพ้\" · สะท้อนผ่าน Side Breakdown <b>PRX ครึ่งหลังบุก 7/9</b> · <b>HYUNMIN FK 2 / FD 5</b> · <b>BeYN R 0.38</b> — Duelist + IGL ทั้งคู่หลุดฟอร์มฝั่งบุก",
      stats: [
        {value:"7/9",label:"PRX Attack 2nd half · ยึด Mid ตัด Rot"},
        {value:"+10",label:"d4v41 + something K-D · ขั้วหลักล้วน"},
        {value:"R 0.38",label:"BeYN Sova · ติดลบเดี่ยวสุด"}
      ]
    },
    {
      title: "Map 2 · Breeze — KRX แก้แผน Direct Hit ชน A ไม่หยุด",
      sub: "เชื่อมโยงกับ Stats: KRX ครึ่งแรก 9/12 (75%) · 3 คนยืน Rating ≥ 1.21 (BeYN 1.39 / MaKo 1.27 / free1ng 1.21) · PRX เสีย Pistol ครึ่งหลังด้วย",
      paragraphs: [
        "<b>Breeze (PRX Pick)</b> KRX แก้แผน PRX มาแบบหนักหน่วง — PzFx ชี้ว่าจุดสังเกตในเกมเพลย์ PRX ก่อนหน้านี้คือ <b>เน้นทำจังหวะดัน Elbow ฝั่งกัน</b> เพื่อตัด B โดยอัตโนมัติ · PRX มี Round ที่ได้เปรียบแบบนี้ให้เห็นอยู่ แต่ <b>KRX เลือกบุกแต่ A เลย</b> ชนตรงไม่หยุดจน PRX รับมือไม่ถูก — ผลคือ <b>เสีย A รัวๆ ครึ่งแรก 3-9</b>",
        "Round Flow ครึ่งแรก: KRX ชนะ Pistol → PRX ตีคืน rd 2, 4, 6 · จากนั้น <b>KRX กดยาว 6 รอบติด (rd 7-12)</b> · เกมรับ PRX ทะลายลงทุกแกน — ดู Stats <b>f0rsakeN Neon R 0.58 / FK 1 FD 4</b> (Net −3), <b>invy R 0.56 / Jinggg R 0.50</b> · 3 คนของ PRX Rating ต่ำกว่า 0.60 พร้อมกัน",
        "ครึ่งหลัง KRX <b>ชนะปืนสั้นอีก</b> (rd 13) แล้วขึ้น 10-3 · ทำให้เกมจบไวมาก — PzFx สรุปสั้นๆ ว่า \"ขึ้น 12 และปิดเกมไปอย่างไวๆ\" · PRX เก็บได้แค่ 2 รอบฝั่งบุก (rd 16, 17) ก่อนเสียรอบสุดท้ายปิดเกม 5-13",
        "หลักฐาน Stats สนับสนุน: <b>free1ng Sova R 1.21 / 17K-9D / KAST 94% / ADR 164 / FK 3 FD 1</b> — Initiator KRX ที่ครองเกมเปิดราวด์ · <b>BeYN Kayo R 1.39 / 11 Assist / KAST 83%</b> — แสดงให้เห็นว่า KRX มีระบบบุก A ที่ทำงานเป็นทีม Sup + Lurk + Entry · <b>MaKo Viper 16K / R 1.27</b> ยืน Smoke แล้วยังคุมเกมยิงได้ · KRX 3 คนยืน Rating ≥ 1.21 พร้อมกัน — เกมที่ทุกคนคลิก"
      ],
      pull: "\"KRX แก้แผน PRX มาหนักหน่วง — ชน A ไม่หยุดจน PRX รับมือไม่ถูก\" · สะท้อนผ่าน <b>KRX Attack 9/12 ครึ่งแรก</b> · <b>free1ng KAST 94%</b> · <b>3 คน KRX ยืน Rating ≥ 1.21</b> · PRX เกมรับฝั่งกัน 3/12 = 25%",
      stats: [
        {value:"9/12",label:"KRX Attack 1st half · ชน A ไม่หยุด"},
        {value:"94%",label:"free1ng KAST · ครองเกมเปิดราวด์"},
        {value:"5–13",label:"PRX เก็บได้แค่ 5 รอบทั้งแมพ"}
      ]
    },
    {
      title: "Map 3 · Split (Decider) — Absolute Stomp · PRX Reset ครบทุกมิติ",
      sub: "เชื่อมโยงกับ Stats: PRX ครึ่งแรกบุก 11/12 (92%) · d4v41 R 1.87 / Jinggg Raze 19K / 4 คนยืน Rating ≥ 1.16 · KRX เก็บได้แค่ 1 รอบทั้งแมพ",
      paragraphs: [
        "<b>Split (Decider)</b> PzFx เรียกว่า <b>Absolute Stomp</b> — PRX Reset จาก Map 2 ที่บอกเลย <b>พลิกจากหลังตีนเป็นหน้ามือ</b> · ทุกๆ ด้านมาครบ: <b>Firepower + Plan + Protocol</b> · ส่ง something ไป Fake / Jinggg ไปยึดจุดสำคัญดึงความสนใจ · มีจังหวะ f0rsakeN tp ลง CT ที่ PzFx ใช้คำว่า \"HOLY SHIET คิดได้ไง\"",
        "Round Flow ครึ่งแรก: PRX เปิดด้วย <b>6 รอบติด</b> (rd 1-6) · KRX แอบเก็บได้ 1 รอบ (rd 7) แล้ว PRX กดต่อ <b>6 รอบติด</b> (rd 8-13) เข้าครึ่งหลังด้วยสกอร์ 12-1 · ปิดเกมที่ rd 14 ฝั่งกัน · <b>Side Breakdown: PRX Attack 11/12 (92%) · KRX Defense 1/12 (8%)</b> — ตัวเลขที่บอกว่าเกมจบตั้งแต่ครึ่งแรกแล้ว",
        "Stats ของ PRX ใน Split เป็นภาพแบบ <b>Triple-plus Threat</b> — d4v41 Viper <b>R 1.87 / 13K-2D / +11 K-D / KAST 93%</b> · Jinggg Raze <b>R 1.64 / 19K / ACS 328 / ADR 183</b> · invy Skye <b>R 1.47 / 12K-6D / +6</b> · <b>4 คนของ PRX ยืน Rating ≥ 1.16</b> และ <b>3 คนแรก +6 K-D ขึ้น</b> · แม้ PRX มีจังหวะลืมซื้อของยังคุมเกมได้ 100%",
        "ฝั่ง KRX พังทุกแกน — <b>HYUNMIN Jett R 0.22 / 4K-12D / KAST 36% / ADR 49 / FK 0 FD 4</b> — Duelist หลักของ KRX เก็บได้ 4 Kill จาก 14 รอบ และ KAST 36% หมายถึง <b>64% ของรอบ Hyunmin ตายเปล่า</b> · <b>free1ng Raze R 0.48</b> Duelist รอง R ต่ำกว่า 0.50 · ทั้งทีม KRX ไม่มีใครยืน Rating ถึง 0.70 · PzFx ชี้ว่า \"ไม่มี Round ไหนที่ KRX ได้เปรียบเลย\" — ตัวเลขยืนยัน 100%"
      ],
      pull: "\"พลิกจากหลังตีนเป็นหน้ามือ — PRX แสดงศักยภาพทุกด้าน\" · สะท้อนผ่าน <b>PRX 11/12 ครึ่งแรกบุก</b> · <b>HYUNMIN R 0.22 / KAST 36%</b> · <b>4 คน PRX ยืน R ≥ 1.16</b> · เกมที่ KRX แทบไม่มีจังหวะให้แก้",
      stats: [
        {value:"11/12",label:"PRX Attack 1st half · 92% Win Rate"},
        {value:"R 1.87",label:"d4v41 Viper · MVP Decider"},
        {value:"R 0.22",label:"HYUNMIN · Duelist KRX ที่หายตัวทั้งแมพ"}
      ]
    },
    {
      title: "Verdict — PRX Creative + ปัญหา Consistency เดิม · KRX มาถูกทาง แต่ยังไม่พอ",
      paragraphs: [
        "สกอร์ <b>2-1</b> สะท้อนภาพ PRX ที่ <b>ความ Creative การเล่นยังมีให้เห็น</b> โดยเฉพาะ Map 3 ที่ครบทุกมิติ Plan + Protocol + Firepower · แต่ <b>ปัญหาที่ PzFx ย้ำซ้ำเหมือนปุ่ม Replay ค้าง</b> นั่นคือ <b>การคง Performance</b> · PRX เป็นทีมน่ากลัวมากเพราะถ้าเข้าข้อเหมือน Map 3 คุณแทบจะสู้ไม่ได้เลย — แต่ก็มีจังหวะแบบ Map 2 ที่หลุดยับจน 5-13",
        "<b>ตัวเลขยืนยันปัญหา Swing</b> — Team Rating PRX ในแมตช์นี้: <b>Map 1 = 1.23 / Map 2 = 0.77 / Map 3 = 1.43</b> · เหวี่ยง ±0.66 · ที่น่าสนใจคือ <b>d4v41 ยืน Rating ≥ 1.00 ทั้ง 3 แมพ</b> (1.35 / 1.00 / 1.87) — เป็นขั้วเดียวที่ไม่หลุด · คนที่เหวี่ยงคือ <b>Jinggg (0.80 → 0.50 → 1.64)</b> และ <b>f0rsakeN (1.42 → 0.58 → 1.01)</b> · สอดคล้องคำเตือนของ PzFx ว่าถ้า PRX แก้เรื่อง Consistency ได้ <b>แชมป์โลกปีนี้ไม่ไกลเกินเอื้อม</b>",
        "<b>KRX Verdict</b> — PzFx เริ่มชม <b>HYUNMIN Jett</b> ว่ามาถูกทาง · Impact Play มีให้เห็น (Map 2 R 1.14 / Map 1 ACS 244) · แต่ Overall ยังไม่แข็งแกร่งพอจะโค่น PRX — Map 1 Ascent มีความได้เปรียบในมือแท้ๆ (ครึ่งแรกบุก 6/12) แต่กลายเป็น <b>แพ้จังหวะที่ดูเรียบง่าย</b> — KRX ฝั่งกัน Map 1 ครึ่งหลังเหลือแค่ <b>2/9</b> · ถ้าแก้จุดนี้ได้ก็ปิด 2-0 PRX ได้แล้ว · ตัวเลข Kill Matrix รวมแมตช์: <b>BeYN −14 / yong −12 / free1ng −9 / MaKo −1 / HYUNMIN −6</b> — ทุกคนติดลบ · MaKo คนเดียวที่เกือบเท่าทุน",
        "<b>PRX ไปต่อ</b> Stage 1 Lower Bracket · ยังคงเป็นทีมอันดับหนึ่งของ Pacific ตามที่ทุกคนยกย่อง · KRX ตกรอบพร้อมโจทย์ใหญ่ <b>Coach Termi ต้องแก้อะไรใน Stage 2</b> — ฟอร์มดูดีขึ้นจริง มีเกมแผนให้เห็น แต่ยัง <b>โดนกดดันจนเล่นไม่ออก ตามเกม PRX เริ่มทัน Snowball ความผิดพลาดจนแบกไม่อยู่</b>"
      ]
    }
  ]
};
