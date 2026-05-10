window.matchData = {
  meta: {
    event: "VCT 2026 · Pacific · Stage 1",
    stage: "Playoffs · Lower Round 1",
    date: "9 May 2026",
    format: "Best of 3"
  },
  teams: {
    t1: { name: "Rex Regum Qeon", tag: "INDONESIA · RRQ", shortTag: "RRQ", logo: "RRQ/logo.png", color: "#ff8b3d", colorRgb: "255,139,61", score: 2, isWinner: true },
    t2: { name: "DetonatioN FocusMe", tag: "JAPAN · DFM", shortTag: "DFM", logo: "DFM/logo.png", color: "#ef4444", colorRgb: "239,68,68", score: 1, isWinner: false }
  },
  vetoDesc: "DFM เลือก Ascent (แมพใหม่) เซอร์ไพรซ์ RRQ ตั้งแต่ต้น · RRQ เลือก Breeze · Lotus เป็น Decider",
  veto: [
    { team: "t2", action: "ban", map: "fracture" },
    { team: "t1", action: "ban", map: "split", mapFile: "split.webp" },
    { team: "t2", action: "pick", map: "ascent", mapFile: "ascent.jpg" },
    { team: "t1", action: "pick", map: "breeze" },
    { team: "t2", action: "ban", map: "pearl" },
    { team: "t1", action: "ban", map: "haven", mapFile: "haven.jpg" },
    { team: null, action: "left", map: "lotus", note: "Decider · 13–8 RRQ" }
  ],
  maps: [
    {
      name: "Ascent",
      file: "map data/ascent.jpg",
      pickedBy: "t2",
      duration: "1:10:43",
      score: { t1: 9, t2: 13 },
      sectionTitle: "Map 1 · Ascent",
      sectionDesc: "DFM Pick (แมพใหม่ใน Pool) — RRQ เหวอ Comp 2 Sentinels (Chamber + Vyse) แต่กันไซต์ไม่อยู่ DFM ยัด 8-4 ในครึ่งแรก",
      composition: {
        t1: [{name:"Jemkin",agent:"jett"},{name:"xffero",agent:"chamber"},{name:"Kushy",agent:"sova"},{name:"Monyet",agent:"omen"},{name:"crazyguy",agent:"vyse"}],
        t2: [{name:"yatsuka",agent:"sova"},{name:"Caedye",agent:"cypher"},{name:"Meiy",agent:"jett"},{name:"SSeeS",agent:"omen"},{name:"Akame",agent:"neon"}]
      },
      stats: {
        t1: [
          {name:"Jemkin",photo:"RRQ/jemkin.png",agent:"jett",r:1.40,acs:254,k:20,d:12,a:6,kdDiff:8,kast:82,adr:168,hs:24,fk:4,fd:4,isTop:true},
          {name:"xffero",photo:"RRQ/xffero.png",agent:"chamber",r:0.96,acs:215,k:17,d:16,a:2,kdDiff:1,kast:68,adr:140,hs:19,fk:5,fd:3},
          {name:"Kushy",photo:"RRQ/kushy.png",agent:"sova",r:0.95,acs:195,k:16,d:16,a:6,kdDiff:0,kast:77,adr:136,hs:31,fk:0,fd:0},
          {name:"Monyet",photo:"RRQ/monyet.png",agent:"omen",r:0.74,acs:187,k:14,d:20,a:12,kdDiff:-6,kast:86,adr:127,hs:27,fk:0,fd:0},
          {name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"vyse",r:0.62,acs:177,k:13,d:18,a:6,kdDiff:-5,kast:59,adr:127,hs:20,fk:1,fd:5}
        ],
        t2: [
          {name:"yatsuka",photo:"DFM/yatsuka.png",agent:"sova",r:1.26,acs:189,k:17,d:11,a:3,kdDiff:6,kast:77,adr:118,hs:48,fk:0,fd:0,isTop:true},
          {name:"Caedye",photo:"DFM/caedye.png",agent:"cypher",r:1.10,acs:234,k:19,d:16,a:4,kdDiff:3,kast:59,adr:154,hs:26,fk:0,fd:1},
          {name:"Meiy",photo:"DFM/meiy.png",agent:"jett",r:1.04,acs:218,k:18,d:17,a:2,kdDiff:1,kast:68,adr:133,hs:50,fk:7,fd:2},
          {name:"SSeeS",photo:"DFM/ssees.png",agent:"omen",r:0.86,acs:190,k:14,d:18,a:9,kdDiff:-4,kast:77,adr:115,hs:24,fk:1,fd:0},
          {name:"Akame",photo:"DFM/akame.png",agent:"neon",r:0.80,acs:206,k:14,d:18,a:7,kdDiff:-4,kast:68,adr:131,hs:27,fk:4,fd:7}
        ]
      },
      rounds: [["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t1","ct"],["t2","t"],["t1","ct"],["t1","t"],["t1","t"],["t2","ct"],["t2","ct"],["t2","ct"],["t1","t"],["t1","t"],["t2","ct"],["t1","t"],["t2","ct"]],
      sideBreakdown: [
        {team:"t1",label:"RRQ Defense",note:"First Half · 2 Sentinels กันไม่อยู่",value:"4 / 12"},
        {team:"t2",label:"DFM Attack",note:"First Half · 67% Win · 7 ราวด์ติด rd 1-7",value:"8 / 12"},
        {team:"t1",label:"RRQ Attack",note:"Second Half · ชนะ Pistol แต่ไม่พอ",value:"5 / 10"},
        {team:"t2",label:"DFM Defense",note:"Second Half · ปิดเกม 13-9",value:"5 / 10"}
      ],
      entryDuels: [
        {team:"t2",name:"Meiy",photo:"DFM/meiy.png",agent:"Jett",fk:7,fd:2},
        {team:"t1",name:"xffero",photo:"RRQ/xffero.png",agent:"Chamber",fk:5,fd:3},
        {team:"t2",name:"SSeeS",photo:"DFM/ssees.png",agent:"Omen",fk:1,fd:0},
        {team:"t1",name:"Jemkin",photo:"RRQ/jemkin.png",agent:"Jett",fk:4,fd:4},
        {team:"t1",name:"Kushy",photo:"RRQ/kushy.png",agent:"Sova",fk:0,fd:0},
        {team:"t1",name:"Monyet",photo:"RRQ/monyet.png",agent:"Omen",fk:0,fd:0},
        {team:"t2",name:"yatsuka",photo:"DFM/yatsuka.png",agent:"Sova",fk:0,fd:0},
        {team:"t2",name:"Caedye",photo:"DFM/caedye.png",agent:"Cypher",fk:0,fd:1},
        {team:"t2",name:"Akame",photo:"DFM/akame.png",agent:"Neon",fk:4,fd:7},
        {team:"t1",name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"Vyse",fk:1,fd:5}
      ],
      entryInsight: "Meiy 7 FK สูงสุด · DFM Jett เปิดไซต์ได้ดี · 2 Sentinels RRQ เปิดเกมไม่ได้ (Caedye 0 FK, Vyse 1 FK)"
    },
    {
      name: "Breeze",
      file: "map data/breeze.avif",
      pickedBy: "t1",
      duration: "52:39",
      score: { t1: 13, t2: 11 },
      sectionTitle: "Map 2 · Breeze",
      sectionDesc: "RRQ Pick — กลับบ้านตัวเอง · ครึ่งแรก 7-5 RRQ นำ · ครึ่งหลังเสียวินไปหลายครั้ง รวม Caedye Ace rd 21 · Monyet ปิดเกม rd 23",
      composition: {
        t1: [{name:"Jemkin",agent:"neon"},{name:"Monyet",agent:"harbor"},{name:"crazyguy",agent:"kayo"},{name:"xffero",agent:"viper"},{name:"Kushy",agent:"sova"}],
        t2: [{name:"Caedye",agent:"omen"},{name:"yatsuka",agent:"sova"},{name:"SSeeS",agent:"viper"},{name:"Meiy",agent:"jett"},{name:"Akame",agent:"neon"}]
      },
      stats: {
        t1: [
          {name:"Jemkin",photo:"RRQ/jemkin.png",agent:"neon",r:1.47,acs:269,k:23,d:14,a:4,kdDiff:9,kast:83,adr:176,hs:35,fk:7,fd:2,isTop:true},
          {name:"Monyet",photo:"RRQ/monyet.png",agent:"harbor",r:1.34,acs:245,k:21,d:15,a:13,kdDiff:6,kast:88,adr:146,hs:29,fk:4,fd:1},
          {name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"kayo",r:1.10,acs:200,k:16,d:14,a:10,kdDiff:2,kast:71,adr:129,hs:20,fk:2,fd:3},
          {name:"xffero",photo:"RRQ/xffero.png",agent:"viper",r:0.87,acs:153,k:14,d:14,a:4,kdDiff:0,kast:63,adr:104,hs:19,fk:0,fd:3},
          {name:"Kushy",photo:"RRQ/kushy.png",agent:"sova",r:0.80,acs:142,k:11,d:17,a:8,kdDiff:-6,kast:75,adr:91,hs:16,fk:0,fd:2}
        ],
        t2: [
          {name:"Caedye",photo:"DFM/caedye.png",agent:"omen",r:1.00,acs:187,k:15,d:15,a:6,kdDiff:0,kast:67,adr:116,hs:31,fk:3,fd:3,isTop:true},
          {name:"yatsuka",photo:"DFM/yatsuka.png",agent:"sova",r:0.97,acs:241,k:19,d:19,a:4,kdDiff:0,kast:67,adr:159,hs:38,fk:5,fd:0},
          {name:"SSeeS",photo:"DFM/ssees.png",agent:"viper",r:0.93,acs:164,k:14,d:16,a:7,kdDiff:-2,kast:67,adr:110,hs:31,fk:2,fd:1},
          {name:"Meiy",photo:"DFM/meiy.png",agent:"jett",r:0.84,acs:200,k:16,d:16,a:2,kdDiff:0,kast:63,adr:122,hs:33,fk:0,fd:4},
          {name:"Akame",photo:"DFM/akame.png",agent:"neon",r:0.43,acs:110,k:10,d:19,a:4,kdDiff:-9,kast:63,adr:70,hs:15,fk:1,fd:5}
        ]
      },
      rounds: [["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t1","ct"],["t2","t"],["t1","ct"],["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","t"],["t1","t"],["t2","ct"],["t2","ct"],["t2","ct"],["t2","ct"],["t2","ct"],["t1","t"],["t2","ct"],["t1","t"],["t1","t"],["t1","t"]],
      sideBreakdown: [
        {team:"t1",label:"RRQ Defense",note:"First Half · จบครึ่ง 7-5 RRQ นำ",value:"7 / 12"},
        {team:"t2",label:"DFM Attack",note:"First Half · เกมรุนแรง จังหวะไว",value:"5 / 12"},
        {team:"t1",label:"RRQ Attack",note:"Second Half · ปิดวินไม่ได้ Retake พลาด",value:"6 / 12"},
        {team:"t2",label:"DFM Defense",note:"Second Half · Caedye Ace rd 21 · DFM Rotation ไว",value:"6 / 12"}
      ],
      entryDuels: [
        {team:"t2",name:"yatsuka",photo:"DFM/yatsuka.png",agent:"Sova",fk:5,fd:0},
        {team:"t1",name:"Jemkin",photo:"RRQ/jemkin.png",agent:"Neon",fk:7,fd:2},
        {team:"t1",name:"Monyet",photo:"RRQ/monyet.png",agent:"Harbor",fk:4,fd:1},
        {team:"t2",name:"SSeeS",photo:"DFM/ssees.png",agent:"Viper",fk:2,fd:1},
        {team:"t2",name:"Caedye",photo:"DFM/caedye.png",agent:"Omen",fk:3,fd:3},
        {team:"t1",name:"Kushy",photo:"RRQ/kushy.png",agent:"Sova",fk:0,fd:2},
        {team:"t1",name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"Kayo",fk:2,fd:3},
        {team:"t1",name:"xffero",photo:"RRQ/xffero.png",agent:"Viper",fk:0,fd:3},
        {team:"t2",name:"Akame",photo:"DFM/akame.png",agent:"Neon",fk:1,fd:5},
        {team:"t2",name:"Meiy",photo:"DFM/meiy.png",agent:"Jett",fk:0,fd:4}
      ],
      entryInsight: "Jemkin 7 FK เปิดเกมเทพ · Meiy ตกฟอร์ม (0 FK / 4 FD) ต่างจาก Map 1 ลิบลับ"
    },
    {
      name: "Lotus",
      file: "map data/lotus.avif",
      pickedBy: null,
      duration: "52:31",
      score: { t1: 13, t2: 8 },
      sectionTitle: "Map 3 · Lotus",
      sectionDesc: "Decider — DFM Firepower ดรอปหนัก · yatsuka R 0.35, SSeeS R 0.48 · RRQ ครึ่งหลังบุก 7/9 ปิดเกม 13-8",
      composition: {
        t1: [{name:"crazyguy",agent:"omen"},{name:"Jemkin",agent:"chamber"},{name:"xffero",agent:"viper"},{name:"Monyet",agent:"neon"},{name:"Kushy",agent:"fade"}],
        t2: [{name:"Meiy",agent:"raze"},{name:"Akame",agent:"neon"},{name:"Caedye",agent:"vyse"},{name:"SSeeS",agent:"omen"},{name:"yatsuka",agent:"fade"}]
      },
      stats: {
        t1: [
          {name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"omen",r:1.39,acs:262,k:19,d:11,a:14,kdDiff:8,kast:81,adr:146,hs:13,fk:1,fd:3,isTop:true},
          {name:"Jemkin",photo:"RRQ/jemkin.png",agent:"chamber",r:1.30,acs:242,k:20,d:11,a:0,kdDiff:9,kast:81,adr:149,hs:32,fk:2,fd:2},
          {name:"xffero",photo:"RRQ/xffero.png",agent:"viper",r:1.21,acs:206,k:18,d:11,a:4,kdDiff:7,kast:86,adr:137,hs:17,fk:1,fd:0},
          {name:"Monyet",photo:"RRQ/monyet.png",agent:"neon",r:1.06,acs:190,k:12,d:13,a:9,kdDiff:-1,kast:76,adr:120,hs:28,fk:5,fd:2},
          {name:"Kushy",photo:"RRQ/kushy.png",agent:"fade",r:1.02,acs:193,k:13,d:12,a:6,kdDiff:1,kast:86,adr:126,hs:26,fk:3,fd:2}
        ],
        t2: [
          {name:"Meiy",photo:"DFM/meiy.png",agent:"raze",r:1.11,acs:226,k:17,d:17,a:3,kdDiff:0,kast:81,adr:138,hs:35,fk:6,fd:0,isTop:true},
          {name:"Akame",photo:"DFM/akame.png",agent:"neon",r:0.95,acs:197,k:16,d:16,a:1,kdDiff:0,kast:57,adr:126,hs:33,fk:2,fd:8},
          {name:"Caedye",photo:"DFM/caedye.png",agent:"vyse",r:0.89,acs:194,k:13,d:17,a:4,kdDiff:-4,kast:62,adr:128,hs:60,fk:0,fd:3},
          {name:"SSeeS",photo:"DFM/ssees.png",agent:"omen",r:0.48,acs:110,k:6,d:16,a:7,kdDiff:-10,kast:62,adr:74,hs:16,fk:1,fd:0},
          {name:"yatsuka",photo:"DFM/yatsuka.png",agent:"fade",r:0.35,acs:77,k:6,d:16,a:2,kdDiff:-10,kast:52,adr:54,hs:22,fk:0,fd:1}
        ]
      },
      rounds: [["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t1","ct"],["t2","t"],["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t1","ct"],["t2","t"],["t1","t"],["t1","t"],["t2","ct"],["t1","t"],["t2","ct"],["t1","t"],["t1","t"],["t1","t"],["t1","t"]],
      sideBreakdown: [
        {team:"t1",label:"RRQ Defense",note:"First Half · ดึงจาก 3-5 → 6-6",value:"6 / 12"},
        {team:"t2",label:"DFM Attack",note:"First Half · ได้ Akame นำ Firepower ตอนต้น",value:"6 / 12"},
        {team:"t1",label:"RRQ Attack",note:"Second Half · 78% Win · ปิดเกม",value:"7 / 9"},
        {team:"t2",label:"DFM Defense",note:"Second Half · กันหน้า A ไม่อยู่",value:"2 / 9"}
      ],
      entryDuels: [
        {team:"t2",name:"Meiy",photo:"DFM/meiy.png",agent:"Raze",fk:6,fd:0},
        {team:"t1",name:"Monyet",photo:"RRQ/monyet.png",agent:"Neon",fk:5,fd:2},
        {team:"t1",name:"xffero",photo:"RRQ/xffero.png",agent:"Viper",fk:1,fd:0},
        {team:"t1",name:"Kushy",photo:"RRQ/kushy.png",agent:"Fade",fk:3,fd:2},
        {team:"t2",name:"SSeeS",photo:"DFM/ssees.png",agent:"Omen",fk:1,fd:0},
        {team:"t1",name:"Jemkin",photo:"RRQ/jemkin.png",agent:"Chamber",fk:2,fd:2},
        {team:"t2",name:"yatsuka",photo:"DFM/yatsuka.png",agent:"Fade",fk:0,fd:1},
        {team:"t1",name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"Omen",fk:1,fd:3},
        {team:"t2",name:"Caedye",photo:"DFM/caedye.png",agent:"Vyse",fk:0,fd:3},
        {team:"t2",name:"Akame",photo:"DFM/akame.png",agent:"Neon",fk:2,fd:8}
      ],
      entryInsight: "Akame ตายเปิด 8 ครั้ง สูงสุดในแมตช์ · Meiy ยังเปิดเกมได้ แต่คนอื่นใน DFM ตามไม่ทัน"
    }
  ],
  radar: {
    sectionDesc: "RRQ เหนือกว่าทุกแกน · DFM เด่นเรื่อง HS% (Headshot ratio สูงกว่า) แต่ Firepower ทั่วไปน้อยกว่า",
    t1: { rating: 1.08, acs: 209, kast: 78, adr: 135, hs: 24, kpp: 16.5 },
    t2: { rating: 0.87, acs: 183, kast: 66, adr: 117, hs: 33, kpp: 14.3 },
    insights: [
      {team:"t1",label:"AVG TEAM RATING",value:"1.08",delta:"vs DFM 0.87 · Δ +0.21"},
      {team:"t1",label:"AVG ACS",value:"209",delta:"vs DFM 183 · Δ +26"},
      {team:"t1",label:"AVG KAST",value:"78%",delta:"vs DFM 66% · Δ +12pt"},
      {team:"t2",label:"AVG HS%",value:"33%",delta:"RRQ 24% · DFM แม่นกว่า"},
      {team:"t1",label:"JEMKIN MAP 1+2",value:"+17",delta:"K-D Diff 2 แมพแรก · X Factor"},
      {team:"t2",label:"DFM LOTUS DROP",value:"−0.26",delta:"Rating swing M1 → M3 · Firepower หาย"}
    ],
    note: "DFM HS% 33% เด่นกว่า RRQ — แต่ Firepower โดยรวม (ACS, ADR) ต่ำกว่ามาก สะท้อนสไตล์ \"ยิงแม่นแต่ยิงน้อย\" ของ DFM ที่ PzFx ระบุว่า \"ขาดความบ้าคลั่งในการยึดพื้นที่\""
  },
  killMatrix: {
    desc: "ใครเอาชนะใครรวม 3 แมพ — Jemkin Stomp ทุกคน DFM (X Factor ที่ PzFx ระบุ)",
    cols: [
      {name:"yatsuka",photo:"DFM/yatsuka.png"},
      {name:"Caedye",photo:"DFM/caedye.png"},
      {name:"SSeeS",photo:"DFM/ssees.png"},
      {name:"Akame",photo:"DFM/akame.png"},
      {name:"Meiy",photo:"DFM/meiy.png"}
    ],
    rows: [
      {name:"Jemkin",photo:"RRQ/jemkin.png",values:[{k:8,opK:9,diff:-1},{k:9,opK:7,diff:2},{k:15,opK:4,diff:11},{k:16,opK:7,diff:9},{k:15,opK:10,diff:5}]},
      {name:"xffero",photo:"RRQ/xffero.png",values:[{k:10,opK:9,diff:1},{k:15,opK:8,diff:7},{k:8,opK:10,diff:-2},{k:8,opK:4,diff:4},{k:8,opK:10,diff:-2}]},
      {name:"Monyet",photo:"RRQ/monyet.png",values:[{k:12,opK:10,diff:2},{k:8,opK:12,diff:-4},{k:7,opK:8,diff:-1},{k:13,opK:6,diff:7},{k:7,opK:12,diff:-5}]},
      {name:"crazyguy",photo:"RRQ/crazyguy.png",values:[{k:10,opK:8,diff:2},{k:7,opK:10,diff:-3},{k:10,opK:4,diff:6},{k:9,opK:10,diff:-1},{k:12,opK:11,diff:1}]},
      {name:"Kushy",photo:"RRQ/kushy.png",values:[{k:6,opK:6,diff:0},{k:9,opK:10,diff:-1},{k:10,opK:8,diff:2},{k:7,opK:13,diff:-6},{k:8,opK:8,diff:0}]}
    ],
    statLinks: [
      {value:"+11",label:"Jemkin vs SSeeS · matchup ที่ Stomp หนักสุด"},
      {value:"+9",label:"Jemkin vs Akame · X Factor"},
      {value:"−6",label:"Kushy vs Akame · matchup ที่ DFM ครอง"}
    ]
  },
  analysis: [
    {
      title: "Map 1 · Ascent — DFM Pick แมพใหม่ RRQ เหวอ",
      sub: "เชื่อมโยงกับ Stats: DFM 7 ราวด์ติด rd 1-7 · Meiy 7 FK Jett · Jemkin R 1.40 (RRQ คนเดียวที่ Carry)",
      paragraphs: [
        "RRQ vs DFM ถือว่าไม่คาดหวัง ก็ไม่ผิดหวัง — ทั้งสองทีมไม่ได้แสดงศักยภาพที่น่าสนใจอะไรมาก ต่างคนต่างมีจังหวะสวยๆ และก็มีจังหวะน่าโมโหเหมือนกัน",
        "แมพแรก <b>Ascent</b> ดูเหมือนทำให้ RRQ <b>เหวอ</b>อยู่บ้าง เพราะ Ascent เป็นด่านใหม่ที่เพิ่งเข้ามาใน Map Pool — DFM กลับหยิบใส่หน้า RRQ ส่งผลให้ได้เห็นเกมเพลย์ตะกุกตะกัก เสมือนไม่ได้เตรียมรับมือ · โค้ช Jovi เองให้สัมภาษณ์ว่า \"เซอร์ไพรซ์นิดๆ\"",
        "Ascent ขึ้นชื่อว่าเป็นด่าน<b>กันสุดโต่ง</b> เต็มไปด้วย Choke Point — แต่ DFM กลับบุกได้ง่าย แม้ RRQ หยิบ <b>2 Sentinels</b> (Chamber + Vyse) มาเล่นก็ตาม กันไม่อยู่เลย โดน Meiy (Jett) และ Akame (Neon) ยัดไซต์จนตามไม่ทัน · ตัวเลข: <b>Meiy 7 FK สูงสุด · DFM ครึ่งแรก 8/12 (67%) รวม streak rd 1-7 ที่ DFM ชนะ 7 ราวด์ติด</b>"
      ],
      pull: "\"ก็โดนไป 8-4 แทบจะปิดประตูโอกาสกลับมาเลย\" · Comp 2 Sentinels ที่ควรกันในไซต์มันกลับขาด Utility ตอน Retake — ตัวเลข: <b>xffero (Chamber) FK 5 / FD 3</b> ดี แต่ <b>crazyguy (Vyse) FK 1 / FD 5 · Rating 0.62</b> Bottom สุดในทีม · Vyse กับการ Retake ไม่ใช่ปัญหาทุกครั้ง แต่ในแมพนี้คือใช่",
      stats: [
        {value:"7 ราวด์ติด",label:"DFM streak rd 1-7 · Stomp ตั้งแต่เปิดเกม"},
        {value:"7 FK",label:"Meiy Jett · เปิดเกมสูงสุดในแมพ"},
        {value:"0.62",label:"crazyguy Vyse Rating · Bottom RRQ"}
      ]
    },
    {
      title: "Map 2 · Breeze — RRQ บ้านตัวเอง · Caedye Ace · Monyet 200IQ",
      sub: "เชื่อมโยงกับ Stats: RRQ 7-5 ครึ่งแรก · Jemkin R 1.47 / 23K · Monyet R 1.34 / 21K · Akame ตก R 0.43",
      paragraphs: [
        "มาแมพสองอย่าง <b>Breeze</b> ที่ RRQ หยิบมา — ความตะกุกตะกัก ความมึนๆ ในด่านแรกหายไปอย่างชัดเจน รอบนี้อยู่ในบ้านของ RRQ · DFM สู้ได้ดีกว่าที่คิดด้วยซ้ำ ทำจังหวะสร้างความได้เปรียบให้เห็นในเกมบุก รุนแรง จังหวะไว — แต่ RRQ มี <b>Jemkin (Neon) Operator เบรคเกมไว</b>",
        "ครึ่งแรกจบ <b>7-5 RRQ นำ</b> · แต่ครึ่งหลังเกือบทำให้ RRQ หลับ — ปิดวินไม่ได้หลังจากยึดไซต์ DFM Rotation มา Retake ไว ทำให้ RRQ <b>หลุด Position</b> เสียวินไปหลาย Round · ความผิดพลาดร้ายแรง: <b>Round 21 RRQ บุก A แต่ไม่มีใครระแวง Default ใน Site A</b> ส่งผลให้ Caedye ที่อยู่ในไซต์ออกมายิงเก็บ <b>Ace</b>"
      ],
      pull: "\"ประคองเกมได้อยู่ จาก Monyet ที่ทำจังหวะ <b>200IQ</b> ใน Round 23 Timing 2-2 ดึงโมเมนตัมกลับ ปิดแมพ 2 สำเร็จ\" — ตัวเลข: <b>Monyet (Harbor) Rating 1.34 / 21K / +6 / 13 Assists / KAST 88%</b> ผลงานสูงสุดอันดับ 2 ของแมพ · Jemkin (Neon) Rating 1.47 / 23K / +9 / 7 FK สูงสุดในแมพ · ส่วน DFM <b>Akame ดรอปหนัก Rating 0.43</b>",
      stats: [
        {value:"7-5",label:"RRQ ครึ่งแรก · บ้านตัวเองคุมได้"},
        {value:"+9",label:"Jemkin K-D Diff · X Factor"},
        {value:"0.43",label:"Akame Breeze Rating · DFM อ่อนมาก"}
      ]
    },
    {
      title: "Map 3 · Lotus — DFM Firepower พังยับ",
      sub: "เชื่อมโยงกับ Stats: DFM ครึ่งหลัง 2/9 · yatsuka R 0.35, SSeeS R 0.48 · RRQ 5 คนได้ Rating 1.00+",
      paragraphs: [
        "มาแมพสุดท้าย <b>Lotus</b> ที่ฝั่ง DFM มีปัญหาชัดเจน — เริ่มยิงไม่ได้ <b>yatsuka และ SSeeS เริ่มยิงไม่โดน</b> · แม้ DFM ดึงเกมได้เปรียบช่วงต้น 3-5 อานิสงค์จาก Akame แต่ก็ไม่พอ · ตัวเลข: <b>yatsuka R 0.35 / 6K-16D / ACS 77 (ต่ำสุดทั้งแมตช์)</b> · <b>SSeeS R 0.48 / 6K-16D</b> สองคนนี้พังพร้อมกัน",
        "เมื่อชนกับ <b>Firepower สม่ำเสมอของ RRQ ฝั่งกัน</b> ที่ยิงเฉลี่ยกันค่อนข้างดีเยี่ยม ดึงเกมกลับมาเป็น <b>6-6 จบครึ่งแรก</b> — ตัวเลขยืนยัน: <b>RRQ 5 คน Rating 1.00+ ทุกคน</b> (crazyguy 1.39, Jemkin 1.30, xffero 1.21, Monyet 1.06, Kushy 1.02) ส่วน DFM มีแค่ Meiy 1.11 คนเดียว"
      ],
      pull: "\"DFM มีปัญหาในเกมฝั่งกัน โดยเฉพาะพื้นที่หน้า A ที่ RRQ ยึดเล่นได้หลายครั้ง\" — ตัวเลข: <b>RRQ ครึ่งหลังบุก 7/9 (78%) · DFM ป้องได้แค่ 2/9</b> · \"ผมพูดเสมอถึงความสำคัญของ Site A ใน Lotus\" — RRQ ใช้พื้นที่หน้า A กดเกมจบ 13-8",
      stats: [
        {value:"0.35",label:"yatsuka Rating · ต่ำสุดในแมตช์"},
        {value:"7 / 9",label:"RRQ Attack ครึ่งหลัง · 78% Win"},
        {value:"5 / 5",label:"RRQ ผู้เล่น Rating 1.00+ ทุกคน"}
      ]
    },
    {
      title: "RRQ — Anti-strat Style · X Factor จาก Jemkin/xffero/Monyet",
      sub: "เชื่อมโยงกับ Stats: Jemkin avg 1.39 across 3 maps · Monyet/xffero ทำงานเสริม · ปัญหากับแมพที่ไม่ได้เตรียม",
      paragraphs: [
        "RRQ แม้ชนะ DFM แต่มีจังหวะเกมเพลย์ที่ยังดู<b>รวนๆ มีปัญหา</b> ไม่ได้แสดงออกความแข็งแกร่งชัดเจนมาก · พวกเขายังมีความนิ่ง มี Protocol และ <b>X Factor จาก Jemkin, xffero และ Monyet</b> ให้เห็น",
        "ตัวเลขยืนยัน X Factor: <b>Jemkin Average 1.39 Rating across 3 maps</b> (1.40, 1.47, 1.30) · ผลงานยืนพื้นทุกแมพ · ส่วน xffero Map 3 R 1.21 / Monyet Map 2 R 1.34 — ผลัดกัน step up · ดูเหมือนเน้น <b>Anti-strat / แก้เกม</b> มากกว่ากดดันเอง"
      ],
      pull: "\"แต่ถ้ายังไม่มีแผนกดดันฝ่ายตรงข้าม เน้นเล่นเกมตามอย่างเดียว — หากไม่ได้เตรียมการมาดีๆ เช่น Ascent พวกเขาก็พร้อมที่จะแพ้ได้ตลอดเวลา\" · เป็นจุดน่าเป็นห่วงของ RRQ ที่ Map 1 พิสูจน์แล้ว",
      stats: [
        {value:"1.39",label:"Jemkin Avg Rating · X Factor นิ่งสุด"},
        {value:"3 / 3",label:"Maps ที่ Jemkin ได้ Rating 1.30+"},
        {value:"9 - 13",label:"Ascent · เมื่อไม่ได้เตรียมแผน"}
      ]
    },
    {
      title: "DFM — แผนชัดเจน · ขาดความบ้าคลั่งในการยึดพื้นที่",
      sub: "เชื่อมโยงกับ Stats: DFM ฝั่งบุก ACS Map 1 = 207 · Map 3 ฝั่งกัน 2/9",
      paragraphs: [
        "DFM พวกเขาเล่นได้ดีแล้ว — มีแผน ชั้นเชิง จังหวะเล่นไว ช้า ก็ทำได้ชัดเจน · แต่ผมมองว่าพวกเขาอาจต้องเพิ่ม<b>ความบ้าคลั่งในเชิงการยึดพื้นที่</b>ให้ชัดเจนกว่านี้ · อย่างด่าน Breeze ที่เกมส่วนใหญ่มักเป็นจังหวะ Retake — ต้องแสวงหาพื้นที่ในการเล่น มี Protocol รอบๆ การเล่นเหล่านั้น",
        "ตัวเลขสะท้อน: <b>เกมบุกของ DFM ทำดี Map 1 ACS 207 / 8 ราวด์</b> · แต่<b>เกมกัน Lotus ครึ่งหลังป้อง 2/9 (22%)</b> หนักเกินไป · \"ต้องไม่เคารพการเดินเกมอีกฝั่ง มีแผนในการพังการเดินเกมให้ชัดเจน\""
      ],
      pull: "\"เกมบุกพวกเขาทำดีแล้ว มีแต่เกมกันนี้ละ ที่ผมรู้สึกมาตลอดว่า คู่ต่อสู้ของ DFM มักจะไม่ได้รับแรงกดดันอะไรมากนัก\" — <b>ถ้ามีความเป็นแยงกี้มากกว่านี้</b> ไม่แน่พวกเขาอาจเล่นได้ดีกว่านี้ก็เป็นได้",
      stats: [
        {value:"2 / 9",label:"DFM Defense Lotus ครึ่งหลัง · 22%"},
        {value:"8 / 12",label:"DFM Attack Ascent · เกมบุกที่เด่นสุด"},
        {value:"33%",label:"DFM HS% Avg · ยิงแม่นแต่ไม่ดุดัน"}
      ]
    },
    {
      title: "Verdict",
      paragraphs: [
        "สกอร์ <b>2-1</b> สะท้อนความสูสี — RRQ ชนะด้วย <b>Firepower สม่ำเสมอ</b> และ <b>X Factor (Jemkin)</b> · DFM แพ้เพราะ <b>Firepower ดรอปลงในเกมยาว</b> (yatsuka 1.26 → 0.97 → 0.35 / SSeeS 0.86 → 0.93 → 0.48)",
        "RRQ ต้องเตรียมรับมือแมพใหม่ให้ดีกว่านี้ — Ascent คือบทเรียน · DFM ต้องเพิ่ม <b>Aggression ในเกมกัน</b> · ทั้งสองทีมยังไม่ใช่ Top Tier ของ Pacific แต่ผลแมตช์นี้พา RRQ ไปต่อใน Lower Bracket"
      ]
    }
  ]
};
