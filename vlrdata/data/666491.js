window.matchData = {
  meta: { event: "VCT 2026 · Pacific · Stage 1", stage: "Playoffs · Upper Semifinals", date: "8 May 2026", format: "Best of 3" },
  teams: {
    t1: { name: "T1", tag: "KOREA · T1", shortTag: "T1", logo: "T1/logo.png", color: "#6cc4ff", colorRgb: "108,196,255", score: 0, isWinner: false },
    t2: { name: "Full Sense", tag: "THAILAND · FS", shortTag: "FS", logo: "FULLSENSE/logo.png", color: "#ff4655", colorRgb: "255,70,85", score: 2, isWinner: true }
  },
  vetoDesc: "FS เลือก Pearl ส่ง Primmie กด Operator · T1 เลือก Lotus หวังใช้ Tactical แต่กลับเจอ Leviathan แผงฤทธิ์ กระโดดจุ่มอัลติ Viper",
  veto: [
    { team: "t2", action: "ban", map: "ascent", mapFile: "ascent.jpg" },
    { team: "t1", action: "ban", map: "fracture" },
    { team: "t2", action: "pick", map: "pearl" },
    { team: "t1", action: "pick", map: "lotus" },
    { team: "t2", action: "ban", map: "split", mapFile: "split.webp" },
    { team: "t1", action: "ban", map: "haven", mapFile: "haven.jpg" },
    { team: null, action: "left", map: "breeze", note: "Not played · จบเกมที่แมพ 2" }
  ],
  maps: [
    {
      name: "Pearl", file: "map data/pearl.avif", pickedBy: "t2", duration: "1:16:39",
      score: { t1: 9, t2: 13 },
      sectionTitle: "Map 1 · Pearl",
      sectionDesc: "FS Pick — Absolute Cinema จาก Primmie คุม Operator แทบทุกเหลี่ยม T1 ตามเกมไม่ทันตั้งแต่ครึ่งแรก",
      composition: {
        t1: [{name:"Meteor",agent:"killjoy"},{name:"iZu",agent:"tejo"},{name:"stax",agent:"sova"},{name:"BuZz",agent:"neon"},{name:"Munchkin",agent:"astra"}],
        t2: [{name:"Killua",agent:"fade"},{name:"primmie",agent:"jett"},{name:"JitBoyS",agent:"phoenix"},{name:"Crws",agent:"vyse"},{name:"Leviathan",agent:"astra"}]
      },
      stats: {
        t1: [
          {name:"Meteor",photo:"T1/meteor.png",agent:"killjoy",r:1.12,acs:287,k:20,d:18,a:4,kdDiff:2,kast:77,adr:190,hs:36,fk:2,fd:4,isTop:true},
          {name:"iZu",photo:"T1/izu.png",agent:"tejo",r:1.06,acs:170,k:15,d:15,a:2,kdDiff:0,kast:59,adr:108,hs:21,fk:1,fd:1},
          {name:"stax",photo:"T1/stax.png",agent:"sova",r:0.80,acs:148,k:10,d:15,a:4,kdDiff:-5,kast:64,adr:117,hs:33,fk:1,fd:0},
          {name:"BuZz",photo:"T1/buzz.png",agent:"neon",r:0.78,acs:191,k:13,d:18,a:5,kdDiff:-5,kast:68,adr:136,hs:27,fk:5,fd:5},
          {name:"Munchkin",photo:"T1/munchkin.png",agent:"astra",r:0.74,acs:116,k:8,d:16,a:7,kdDiff:-8,kast:68,adr:83,hs:23,fk:0,fd:3}
        ],
        t2: [
          {name:"Killua",photo:"FULLSENSE/killua.png",agent:"fade",r:1.25,acs:221,k:19,d:10,a:4,kdDiff:9,kast:86,adr:141,hs:26,fk:1,fd:2,isTop:true},
          {name:"primmie",photo:"FULLSENSE/primmie.png",agent:"jett",r:1.21,acs:269,k:20,d:17,a:4,kdDiff:3,kast:82,adr:147,hs:11,fk:8,fd:5},
          {name:"JitBoyS",photo:"FULLSENSE/jitboys.png",agent:"phoenix",r:1.16,acs:239,k:19,d:14,a:5,kdDiff:5,kast:77,adr:162,hs:27,fk:1,fd:0},
          {name:"Crws",photo:"FULLSENSE/crws.png",agent:"vyse",r:0.97,acs:191,k:14,d:13,a:9,kdDiff:1,kast:77,adr:130,hs:19,fk:3,fd:2},
          {name:"Leviathan",photo:"FULLSENSE/leviathan.png",agent:"astra",r:0.75,acs:117,k:10,d:12,a:5,kdDiff:-2,kast:77,adr:80,hs:47,fk:0,fd:0}
        ]
      },
      rounds: [["t1","t"],["t1","t"],["t2","ct"],["t2","ct"],["t2","ct"],["t2","ct"],["t2","ct"],["t2","ct"],["t1","t"],["t2","ct"],["t1","t"],["t2","ct"],["t2","t"],["t2","t"],["t2","t"],["t1","ct"],["t2","t"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t2","t"]],
      sideBreakdown: [
        {team:"t1",label:"T1 Attack",note:"First Half · ตามเกมไม่ทัน Primmie",value:"4 / 12"},
        {team:"t2",label:"FS Defense",note:"First Half · 67% Win · Absolute Cinema",value:"8 / 12"},
        {team:"t1",label:"T1 Defense",note:"Second Half · 4 ราวด์ติด rd 18-21",value:"5 / 10"},
        {team:"t2",label:"FS Attack",note:"Second Half · ขึ้น 12 ค้างนิดๆ ก่อนปิด 13",value:"5 / 10"}
      ],
      entryDuels: [
        {team:"t2",name:"primmie",photo:"FULLSENSE/primmie.png",agent:"Jett",fk:8,fd:5},
        {team:"t2",name:"Crws",photo:"FULLSENSE/crws.png",agent:"Vyse",fk:3,fd:2},
        {team:"t2",name:"JitBoyS",photo:"FULLSENSE/jitboys.png",agent:"Phoenix",fk:1,fd:0},
        {team:"t1",name:"stax",photo:"T1/stax.png",agent:"Sova",fk:1,fd:0},
        {team:"t1",name:"iZu",photo:"T1/izu.png",agent:"Tejo",fk:1,fd:1},
        {team:"t1",name:"BuZz",photo:"T1/buzz.png",agent:"Neon",fk:5,fd:5},
        {team:"t2",name:"Leviathan",photo:"FULLSENSE/leviathan.png",agent:"Astra",fk:0,fd:0},
        {team:"t2",name:"Killua",photo:"FULLSENSE/killua.png",agent:"Fade",fk:1,fd:2},
        {team:"t1",name:"Meteor",photo:"T1/meteor.png",agent:"Killjoy",fk:2,fd:4},
        {team:"t1",name:"Munchkin",photo:"T1/munchkin.png",agent:"Astra",fk:0,fd:3}
      ],
      entryInsight: "Primmie 8 FK สูงสุดในแมตช์ ≈ 9 OP Kills · BuZz เปิด/ตายเท่ากัน 5/5 — ตามที่ PzFx ระบุ \"วัด Firepower\""
    },
    {
      name: "Lotus", file: "map data/lotus.avif", pickedBy: "t1", duration: "48:02",
      score: { t1: 8, t2: 13 },
      sectionTitle: "Map 2 · Lotus",
      sectionDesc: "T1 Pick — แต่ T1 ยังเมาหมัด BuZz โหม่งกระสุนไม่หยุด เกมพังยับ Leviathan โชว์ Ultimate Viper ปิดเกม",
      composition: {
        t1: [{name:"stax",agent:"fade"},{name:"Munchkin",agent:"omen"},{name:"Meteor",agent:"viper"},{name:"iZu",agent:"killjoy"},{name:"BuZz",agent:"neon"}],
        t2: [{name:"Leviathan",agent:"omen"},{name:"primmie",agent:"jett"},{name:"JitBoyS",agent:"raze"},{name:"Killua",agent:"skye"},{name:"Crws",agent:"vyse"}]
      },
      stats: {
        t1: [
          {name:"stax",photo:"T1/stax.png",agent:"fade",r:1.00,acs:226,k:17,d:16,a:2,kdDiff:1,kast:62,adr:135,hs:32,fk:3,fd:1,isTop:true},
          {name:"Munchkin",photo:"T1/munchkin.png",agent:"omen",r:0.96,acs:175,k:14,d:15,a:8,kdDiff:-1,kast:76,adr:110,hs:13,fk:2,fd:2},
          {name:"Meteor",photo:"T1/meteor.png",agent:"viper",r:0.72,acs:187,k:12,d:19,a:10,kdDiff:-7,kast:62,adr:122,hs:21,fk:3,fd:2},
          {name:"iZu",photo:"T1/izu.png",agent:"killjoy",r:0.70,acs:148,k:10,d:14,a:4,kdDiff:-4,kast:62,adr:99,hs:17,fk:3,fd:3},
          {name:"BuZz",photo:"T1/buzz.png",agent:"neon",r:0.67,acs:168,k:12,d:18,a:4,kdDiff:-6,kast:62,adr:100,hs:15,fk:1,fd:1}
        ],
        t2: [
          {name:"Leviathan",photo:"FULLSENSE/leviathan.png",agent:"omen",r:1.48,acs:277,k:21,d:11,a:6,kdDiff:10,kast:81,adr:172,hs:37,fk:2,fd:1,isTop:true},
          {name:"primmie",photo:"FULLSENSE/primmie.png",agent:"jett",r:1.47,acs:302,k:23,d:13,a:2,kdDiff:10,kast:81,adr:164,hs:34,fk:5,fd:2},
          {name:"JitBoyS",photo:"FULLSENSE/jitboys.png",agent:"raze",r:1.21,acs:237,k:19,d:14,a:2,kdDiff:5,kast:76,adr:149,hs:21,fk:1,fd:3},
          {name:"Killua",photo:"FULLSENSE/killua.png",agent:"skye",r:0.84,acs:158,k:11,d:14,a:13,kdDiff:-3,kast:95,adr:104,hs:31,fk:1,fd:3},
          {name:"Crws",photo:"FULLSENSE/crws.png",agent:"vyse",r:0.70,acs:111,k:8,d:13,a:4,kdDiff:-5,kast:62,adr:90,hs:25,fk:0,fd:3}
        ]
      },
      rounds: [["t2","t"],["t2","t"],["t2","t"],["t1","ct"],["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t2","t"],["t1","ct"],["t2","t"],["t2","t"],["t1","t"],["t1","t"],["t2","ct"],["t1","t"],["t2","ct"],["t2","ct"],["t1","t"],["t2","ct"],["t2","ct"]],
      sideBreakdown: [
        {team:"t1",label:"T1 Defense",note:"First Half · ฝั่งกันเละเทะ",value:"4 / 12"},
        {team:"t2",label:"FS Attack",note:"First Half · 67% Win · Stomp",value:"8 / 12"},
        {team:"t1",label:"T1 Attack",note:"Second Half · เจอ Ultimate Viper Leviathan",value:"4 / 9"},
        {team:"t2",label:"FS Defense",note:"Second Half · ปิดเกมที่ rd 21",value:"5 / 9"}
      ],
      entryDuels: [
        {team:"t2",name:"primmie",photo:"FULLSENSE/primmie.png",agent:"Jett",fk:5,fd:2},
        {team:"t1",name:"stax",photo:"T1/stax.png",agent:"Fade",fk:3,fd:1},
        {team:"t2",name:"Leviathan",photo:"FULLSENSE/leviathan.png",agent:"Omen",fk:2,fd:1},
        {team:"t1",name:"Meteor",photo:"T1/meteor.png",agent:"Viper",fk:3,fd:2},
        {team:"t1",name:"Munchkin",photo:"T1/munchkin.png",agent:"Omen",fk:2,fd:2},
        {team:"t1",name:"iZu",photo:"T1/izu.png",agent:"Killjoy",fk:3,fd:3},
        {team:"t1",name:"BuZz",photo:"T1/buzz.png",agent:"Neon",fk:1,fd:1},
        {team:"t2",name:"Killua",photo:"FULLSENSE/killua.png",agent:"Skye",fk:1,fd:3},
        {team:"t2",name:"JitBoyS",photo:"FULLSENSE/jitboys.png",agent:"Raze",fk:1,fd:3},
        {team:"t2",name:"Crws",photo:"FULLSENSE/crws.png",agent:"Vyse",fk:0,fd:3}
      ],
      entryInsight: "T1 4/5 เปิดเกมเป็นบวกหรือเสมอ Map 2 — แต่ mid-round ตามไม่ทัน Leviathan และ primmie ที่ระเบิดฟอร์ม"
    }
  ],
  radar: {
    sectionDesc: "FS เหนือกว่า T1 ทุกแกนสำคัญ — Rating, ACS, KAST, ADR · ยืนยันว่าไม่ใช่แค่แพ้ดวง แต่ FS เล่นเหนือกว่าจริง",
    t1: { rating: 0.86, acs: 182, kast: 66, adr: 120, hs: 24, kpp: 13.1 },
    t2: { rating: 1.10, acs: 212, kast: 79, adr: 134, hs: 28, kpp: 16.4 },
    insights: [
      {team:"t2",label:"AVG TEAM RATING",value:"1.10",delta:"vs T1 0.86 · Δ +0.24"},
      {team:"t2",label:"AVG ACS",value:"212",delta:"vs T1 182 · Δ +30"},
      {team:"t2",label:"AVG KAST",value:"79%",delta:"vs T1 66% · Δ +13pt"},
      {team:"t2",label:"AVG K / Player",value:"16.4",delta:"vs T1 13.1 · Firepower gap"},
      {team:"t1",label:"stax LOTUS",value:"1.00",delta:"เพื่อนรอบข้างไม่ถึง 1.00 ทั้งทีม"},
      {team:"t2",label:"PRIMMIE FK PEARL",value:"8",delta:"9 OP Kills (PzFx ระบุ) · ตัดเปิดเก่ง"}
    ],
    note: "FS Masterpiece — KAST 79% (สูงสุด across recent matches) ผู้เล่นทั้ง 5 คนทำงานเป็นทีม ส่วน T1 มีคน Step up ได้แค่ 1-2 คนต่อแมพ ที่เหลือ <b style=\"color:#fff\">Solo play / Hero play</b> ตามที่ PzFx ระบุ"
  },
  killMatrix: {
    desc: "ใครเอาชนะใครรวมทั้งแมตช์ — Primmie ครองเกือบทุก matchup, Crws ตกหนัก",
    cols: [
      {name:"primmie",photo:"FULLSENSE/primmie.png"},
      {name:"Crws",photo:"FULLSENSE/crws.png"},
      {name:"Leviathan",photo:"FULLSENSE/leviathan.png"},
      {name:"JitBoyS",photo:"FULLSENSE/jitboys.png"},
      {name:"Killua",photo:"FULLSENSE/killua.png"}
    ],
    rows: [
      {name:"BuZz",photo:"T1/buzz.png",values:[{k:13,opK:10,diff:3},{k:2,opK:7,diff:-5},{k:3,opK:4,diff:-1},{k:3,opK:8,diff:-5},{k:4,opK:7,diff:-3}]},
      {name:"Meteor",photo:"T1/meteor.png",values:[{k:4,opK:8,diff:-4},{k:9,opK:3,diff:6},{k:9,opK:11,diff:-2},{k:9,opK:9,diff:0},{k:1,opK:6,diff:-5}]},
      {name:"stax",photo:"T1/stax.png",values:[{k:4,opK:5,diff:-1},{k:4,opK:5,diff:-1},{k:3,opK:6,diff:-3},{k:6,opK:10,diff:-4},{k:10,opK:5,diff:5}]},
      {name:"iZu",photo:"T1/izu.png",values:[{k:5,opK:10,diff:-5},{k:6,opK:4,diff:2},{k:3,opK:3,diff:0},{k:6,opK:5,diff:1},{k:5,opK:7,diff:-2}]},
      {name:"Munchkin",photo:"T1/munchkin.png",values:[{k:4,opK:10,diff:-6},{k:5,opK:3,diff:2},{k:5,opK:7,diff:-2},{k:4,opK:6,diff:-2},{k:4,opK:5,diff:-1}]}
    ],
    statLinks: [
      {value:"+6",label:"Meteor vs Crws · เกมเดียวที่ T1 ครอง"},
      {value:"+5",label:"stax vs Killua · stax โชว์ฟอร์ม Lotus"},
      {value:"−6",label:"Munchkin vs primmie · Primmie ครองเกือบทุกคน"}
    ]
  },
  analysis: [
    {
      title: "Map 1 · Pearl — Absolute Cinema จาก Primmie",
      sub: "เชื่อมโยงกับ Stats: Primmie 8 FK / 20K / Rating 1.21 · FS Defense 8/12 (67%) · Killua R 1.25 ตัวคุมไซต์",
      paragraphs: [
        "นี่คือหนึ่งใน <b>Masterpiece ของ Full Sense</b> เลยก็ว่าได้ — ฝั่งกันครึ่งแรกเรียกว่า <b>Absolute Cinema</b> จาก Primmie ที่โหดมาก ท่านประทาน <b>Operator</b> ให้ T1 จนพรุน แทบไม่มี Round ไหนที่ T1 ได้เปรียบ",
        "ตัวเลขยืนยัน: <b>Primmie (Jett) Rating 1.21 / 20K / 8 First Kills</b> สูงสุดในแมตช์ · PzFx ระบุ \"9 OP Kill\" — สอดคล้องกับ FK 8 (เกือบทั้งหมดน่าจะเป็น OP) · สำคัญคือ <b>FS Defense ครึ่งแรกชนะ 8/12 (67%)</b> สกอร์ครึ่งครึ่งแรกจบ T1 4-8 FS",
        "พอสลับมาเป็นฝั่งบุก FS ก็ไปชนะ Bonus เพิ่มจาก Phoenix Meta แท็คทีมเอาพลัง <b>JitBoyS Phoenix Rating 1.16 / 19K / +5</b> ไป Entry แรงๆ แทน — แม้จะมีช่วง <b>\"พอขึ้น 12 ชอบค้างนิดๆ\"</b> ตามประเพณี FS ก็ปิด 13 ได้ที่ rd 22 (T1 ดึงสกอร์เป็น 9-12 จาก 5-12 ใน 4 ราวด์ติด rd 18-21 แต่ไม่ทันแล้ว)"
      ],
      pull: "\"Primmie ตามไปตัดได้ทุกเหลี่ยม เสมือนสิงโตไล่ล่าเหยื่อกวางน้อย\" · Round ที่ T1 ได้ ก็มักเป็นที่ FS โยนเสียเอง — ตัวเลขชัด: <b>Killua (Fade) Rating 1.25 / +9 K-D / KAST 86%</b> สูงสุดในทีม FS — Killua คือ \"ปิดทองหลังพระ\" ที่ PzFx ระบุ ทำจังหวะปิดให้เพื่อนได้ตลอด",
      stats: [
        {value:"8 FK",label:"Primmie · 9 OP Kills (PzFx)"},
        {value:"8 / 12",label:"FS Defense ครึ่งแรก · 67%"},
        {value:"+9",label:"Killua K-D · MVP ฝั่ง Setup"}
      ]
    },
    {
      title: "Map 2 · Lotus — BuZz โหม่งกระสุน · Leviathan Ultimate Viper",
      sub: "เชื่อมโยงกับ Stats: BuZz R 0.67 (แย่สุดในแมตช์) · Leviathan R 1.48 / 21K / +10 · primmie R 1.47 / 23K",
      paragraphs: [
        "มาแมพสองอย่าง <b>Lotus</b> ที่ T1 ยังเมาหมัดไม่หาย — โดยเฉพาะ <b>BuZz ที่ก็โหม่งกระสุนไม่หยุด</b> เรียกว่า Perform แย่ที่สุดในแมตช์ เพราะเขาเข้าไปตายคนเดียวบ่อยมาก จนเหมือนตั้งใจโยน เป็นสายลับของ FS",
        "ตัวเลขโหด: <b>BuZz Rating 0.67 ต่ำสุดในทีม T1</b> · 12K/18D · ACS 168 · HS 15% (ต่ำสุดในแมตช์) — ตัวเลขสะท้อน \"โหม่งกระสุน\" ตามที่ PzFx ระบุ · เกมฝั่งกัน เห็นมีแต่ <b>stax (Fade) Rating 1.00</b> โชว์ฟอร์ม T1 ที่เหลือ 4 คน Rating ต่ำกว่า 1.00 ทั้งหมด",
        "สลับมาครึ่งหลัง T1 บุก เจอ <b>Leviathan แก้ตัวจากแมพแรก</b> ที่ Map 1 R 0.75 (ต่ำสุดในทีม FS) → Map 2 R <b>1.48 / 21K / +10 / ACS 277</b> สูงสุดในแมตช์ — Leviathan โชว์อภินิหาร <b>กระโดดเข้า Ultimate Viper ปิด Round</b> ดับเครื่อง T1 · ส่วน <b>primmie ก็ไม่หยุด R 1.47 / 23K (สูงสุด) / FK 5</b> ฟอร์มเสริม Leviathan"
      ],
      pull: "\"T1 พังยับ ต่างคนต่าง Hero Play พยายามสร้างความได้เปรียบด้วยตัวเอง ทำให้จังหวะ Desync\" — สถิติยืนยัน: <b>T1 Defense ครึ่งแรกชนะแค่ 4/12 (33%)</b> · FS attack 8/12 — ฝั่งกันเละเทะตามที่ PzFx ว่าจริง",
      stats: [
        {value:"0.67",label:"BuZz Rating · ต่ำสุดในแมตช์"},
        {value:"+0.73",label:"Leviathan Rating Swing M1 → M2"},
        {value:"+10",label:"Leviathan & primmie K-D · ทั้งคู่"}
      ]
    },
    {
      title: "FS Masterpiece — Firepower + Operator + Setup ผสานกัน",
      sub: "เชื่อมโยงกับ Stats: FS KAST avg 79% · Killua Map 1 KAST 86% · Map 2 95% · Crws 9A/13A หลังพระ",
      paragraphs: [
        "FS ในครั้งนี้ใช้พลัง <b>Firepower เป็นหลัก</b> ผสมผสานกับการแก้เกมที่พวกเขาทำผิดพลาดมาก่อนหน้า มารอบนี้เน้น <b>เล่นเกมเชิงพื้นที่</b> หาวิธีดึงพื้นที่มาในมือให้ได้มากที่สุด จังหวะเดินเทรดกันก็ดี",
        "คนที่ <b>\"ปิดทองหลังพระ\"</b> ก็คงเป็น <b>Killua</b> ที่มักทำจังหวะปิดให้เพื่อนได้ตลอดเวลา พลาดน้อยมาก — ตัวเลขยืนยัน: <b>Killua Map 1 KAST 86% · Map 2 KAST 95%!</b> · 13 Assists ใน Map 2 (สูงสุดทั้งทีม) · ผลงาน Initiator ระดับ MVP"
      ],
      pull: "\"ภูมิใจที่ FS มองถึงคุณค่าของ Operator ที่ในรอบ Group Stage มองข้าม มาครั้งนี้แสดงพลัง Operator ออกมาได้โครตจะโหด\" — Stats เปรียบเทียบ: <b>Primmie FK Map 1 = 8 (Jett+OP)</b> เทียบกับเกม KRX Map 1 Lotus ที่ FK = 1 — เปลี่ยน mindset Operator ชัดเจน",
      stats: [
        {value:"79%",label:"FS KAST avg · ทำงานเป็นทีมระดับสูง"},
        {value:"95%",label:"Killua KAST Lotus · Setup ระดับเทพ"},
        {value:"13",label:"Killua Assists Lotus · Hero สนับสนุน"}
      ]
    },
    {
      title: "T1 — Ego สูง · Hero Play · BuZz / stax วัด",
      sub: "เชื่อมโยงกับ Stats: BuZz Map 1 FK 5/FD 5 (เปิด/ตายเท่ากัน) · stax Pearl R 0.80 → Lotus R 1.00 (วัดเก่งขึ้น)",
      paragraphs: [
        "ในส่วนของ T1 ผมว่า <b>เทียบกับ Paper Rex ได้</b> — แต่ต้นตอความไม่สม่ำเสมออาจต่างกัน · ฝั่ง PRX อาจเป็นการที่เสีย Mental ส่วนตัว · แต่สำหรับ T1 มันเหมือน <b>มี Ego มากเกินไป</b> แผนหลายอย่างเต็มไปด้วย <b>ความเสี่ยง</b> ใช้จังหวะที่ต้องอาศัยทักษะที่สูงลิ่ว เล่น Solo Play",
        "โดยเฉพาะการส่ง <b>BuZz ทำจังหวะเสี่ยงๆ</b> มารอบนี้ BuZz ทำมันไม่ได้ ตัวเลขยืนยัน: <b>BuZz Map 1 FK 5 / FD 5 (เปิดเท่ากับตาย)</b> Map 2 FK 1/FD 1 — Entry duel ขาดทุน · กลายเป็นจุดอ่อนที่เป็นแผลใหญ่ ทำให้ T1 เล่นเป๋ไปมหาศาล"
      ],
      pull: "หรือจะเป็น <b>stax</b> เองที่พอเกมกดดัน เขาก็ดันไปวัดเรื่อยๆ — <b>\"ให้มันหน่อย มันทำได้นะ มันตัดได้ แล้วไง\"</b> · เกมเพลย์เสียหายเพราะเสีย Initiator ไป ทำให้การเล่นเป็นทีมเป็นเรื่องยาก · stax FK Map 2 = 3 (สูงสุดในทีม) — เป็น Initiator แต่ไปตัดเอง ขัดบทบาท",
      stats: [
        {value:"5 / 5",label:"BuZz Pearl FK / FD · Entry ขาดทุน"},
        {value:"3 FK",label:"stax Lotus · Initiator ไปตัดเอง"},
        {value:"0 / 5",label:"T1 ผู้เล่นที่ Rating ≥ 1.00 ใน Lotus"}
      ]
    },
    {
      title: "Verdict",
      paragraphs: [
        "สกอร์ <b>0-2</b> สะท้อน Gap ที่ <b>FS เหนือกว่าจริง</b> ในทุกแกน — Rating, ACS, KAST, ADR · ที่สำคัญที่สุดคือ <b>Teamwork</b> · FS ทั้ง 5 คนทำงานด้วยกัน ส่วน T1 ต่างคนต่างทำ Hero play",
        "T1 ต้องแก้สามอย่าง: <b>(1)</b> ลด Ego ลง · BuZz ไม่ใช่ทุก Round ที่ต้องเสี่ยง · stax ต้องอยู่ในบทบาท Initiator, <b>(2)</b> Mental ในเกมกดดัน · พอแพ้ครึ่งแรกเริ่ม Solo play เร็ว, <b>(3)</b> ฟื้นฟู Synergy · KAST 66% บอกว่าทีมไม่ได้ทำงานร่วมกันเท่าที่ควร · FS อยู่ที่ 79% เห็นต่างชัด"
      ]
    }
  ]
};
