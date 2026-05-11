window.matchData = {
  meta: { event: "VCT 2026 · Pacific · Stage 1", stage: "Playoffs · Lower Round 2", date: "11 May 2026", format: "Best of 3" },
  teams: {
    t1: { name: "T1", tag: "KOREA · T1", shortTag: "T1", logo: "T1/logo.png", color: "#ff4655", colorRgb: "255,70,85", score: 2, isWinner: true },
    t2: { name: "Rex Regum Qeon", tag: "INDONESIA · RRQ", shortTag: "RRQ", logo: "RRQ/logo.png", color: "#ff8c2a", colorRgb: "255,140,42", score: 1, isWinner: false }
  },
  vetoDesc: "RRQ แบน Split เปิดเกม · T1 ตอบกลับด้วย Fracture · RRQ เลือก Haven ที่ตัวเองคุมแผนได้ · T1 เลือก Lotus · RRQ แบน Pearl · T1 แบน Ascent · เหลือ Breeze เป็นแมพ Decider",
  veto: [
    { team: "t2", action: "ban", map: "split", mapFile: "split.webp" },
    { team: "t1", action: "ban", map: "fracture", mapFile: "fracture.avif" },
    { team: "t2", action: "pick", map: "haven", mapFile: "haven.avif" },
    { team: "t1", action: "pick", map: "lotus", mapFile: "lotus.avif" },
    { team: "t2", action: "ban", map: "pearl", mapFile: "pearl.avif" },
    { team: "t1", action: "ban", map: "ascent", mapFile: "ascent.avif" },
    { team: null, action: "left", map: "breeze", mapFile: "breeze.avif", note: "Decider · stax ระเบิดฟอร์ม R 1.79 / 22K / ACS 318 ปิดเกม 13-5" }
  ],
  maps: [
    {
      name: "Haven",
      file: "map data/haven.avif",
      pickedBy: "t2",
      duration: "1:04:33",
      score: { t1: 13, t2: 6 },
      sectionTitle: "Map 1 · Haven",
      sectionDesc: "RRQ Pick — BuZz ระเบิดฟอร์มเดี่ยว Rating 1.55 / 23K Neon · ครึ่งแรกฝั่งบุก T1 8-4 ก่อนปิดเกมแบบสบาย — RRQ ตามไม่ทันแรงกดดันจาก Buzz เลย",
      composition: {
        t1: [{name:"BuZz",agent:"neon"},{name:"iZu",agent:"chamber"},{name:"stax",agent:"sova"},{name:"Munchkin",agent:"omen"},{name:"Meteor",agent:"phoenix"}],
        t2: [{name:"xffero",agent:"cypher"},{name:"Kushy",agent:"sova"},{name:"Jemkin",agent:"waylay"},{name:"Monyet",agent:"neon"},{name:"crazyguy",agent:"omen"}]
      },
      stats: {
        t1: [
          {name:"BuZz",photo:"T1/buzz.png",agent:"neon",r:1.55,acs:300,k:23,d:9,a:4,kdDiff:14,kast:84,adr:171,hs:24,fk:6,fd:2,isTop:true},
          {name:"iZu",photo:"T1/izu.png",agent:"chamber",r:1.24,acs:178,k:14,d:6,a:1,kdDiff:8,kast:89,adr:112,hs:19,fk:2,fd:1},
          {name:"stax",photo:"T1/stax.png",agent:"sova",r:1.21,acs:162,k:11,d:7,a:7,kdDiff:4,kast:84,adr:129,hs:38,fk:1,fd:0},
          {name:"Munchkin",photo:"T1/munchkin.png",agent:"omen",r:0.92,acs:163,k:11,d:12,a:8,kdDiff:-1,kast:79,adr:102,hs:15,fk:0,fd:1},
          {name:"Meteor",photo:"T1/meteor.png",agent:"phoenix",r:0.89,acs:211,k:12,d:15,a:6,kdDiff:-3,kast:79,adr:135,hs:30,fk:4,fd:2}
        ],
        t2: [
          {name:"xffero",photo:"RRQ/xffero.png",agent:"cypher",r:1.09,acs:183,k:13,d:12,a:2,kdDiff:1,kast:68,adr:125,hs:31,fk:0,fd:2,isTop:true},
          {name:"Kushy",photo:"RRQ/kushy.png",agent:"sova",r:0.97,acs:192,k:12,d:14,a:7,kdDiff:-2,kast:63,adr:145,hs:31,fk:0,fd:0},
          {name:"Jemkin",photo:"RRQ/jemkin.png",agent:"waylay",r:0.90,acs:146,k:9,d:13,a:6,kdDiff:-4,kast:63,adr:106,hs:28,fk:2,fd:5},
          {name:"Monyet",photo:"RRQ/monyet.png",agent:"neon",r:0.83,acs:211,k:11,d:16,a:6,kdDiff:-5,kast:68,adr:146,hs:21,fk:2,fd:5},
          {name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"omen",r:0.49,acs:109,k:4,d:16,a:11,kdDiff:-12,kast:53,adr:80,hs:22,fk:2,fd:1}
        ]
      },
      rounds: [["t1","t"],["t1","t"],["t1","t"],["t1","t"],["t2","ct"],["t1","t"],["t2","ct"],["t1","t"],["t1","t"],["t2","ct"],["t2","ct"],["t1","t"],["t1","ct"],["t1","ct"],["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t1","ct"]],
      sideBreakdown: [
        {team:"t1",label:"T1 Attack",note:"First Half · 67% Win Rate (8/12)",value:"8 / 12"},
        {team:"t2",label:"RRQ Defense",note:"First Half · พังเกมรับฝั่งกัน · 4 / 12",value:"4 / 12"},
        {team:"t1",label:"T1 Defense",note:"Second Half · ปิดเกมที่ rd 19",value:"5 / 7"},
        {team:"t2",label:"RRQ Attack",note:"Second Half · ตี 2 รอบติดก่อนถูกล็อก",value:"2 / 7"}
      ],
      entryDuels: [
        {team:"t1",name:"BuZz",photo:"T1/buzz.png",agent:"Neon",fk:6,fd:2},
        {team:"t1",name:"Meteor",photo:"T1/meteor.png",agent:"Phoenix",fk:4,fd:2},
        {team:"t1",name:"iZu",photo:"T1/izu.png",agent:"Chamber",fk:2,fd:1},
        {team:"t2",name:"Jemkin",photo:"RRQ/jemkin.png",agent:"Waylay",fk:2,fd:5},
        {team:"t2",name:"Monyet",photo:"RRQ/monyet.png",agent:"Neon",fk:2,fd:5},
        {team:"t2",name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"Omen",fk:2,fd:1},
        {team:"t1",name:"stax",photo:"T1/stax.png",agent:"Sova",fk:1,fd:0},
        {team:"t1",name:"Munchkin",photo:"T1/munchkin.png",agent:"Omen",fk:0,fd:1},
        {team:"t2",name:"xffero",photo:"RRQ/xffero.png",agent:"Cypher",fk:0,fd:2},
        {team:"t2",name:"Kushy",photo:"RRQ/kushy.png",agent:"Sova",fk:0,fd:0}
      ],
      entryInsight: "BuZz เปิดราวด์ 6 ครั้ง — มากสุดในแมตช์ · RRQ ฝั่ง Duelists (Jemkin Waylay + Monyet Neon) FD รวม 10 ครั้ง พังเกมเปิดแทบทุกราวด์ ตอกย้ำว่า T1 ครองจังหวะเปิดเกมเด็ดขาด"
    },
    {
      name: "Lotus",
      file: "map data/lotus.avif",
      pickedBy: "t1",
      duration: "1:02:09",
      score: { t1: 10, t2: 13 },
      sectionTitle: "Map 2 · Lotus",
      sectionDesc: "T1 Pick — Monyet ระเบิดฟอร์ม R 1.56 / 29K Neon พา RRQ ตีกลับ · เกิดเหตุ PC ของ BuZz มีปัญหากลางราวด์ 21 ตอนสกอร์ 10-10 จังหวะ 2-2 · RRQ Snowball ปิดเกมที่ rd 23",
      composition: {
        t1: [{name:"stax",agent:"fade"},{name:"Meteor",agent:"viper"},{name:"BuZz",agent:"neon"},{name:"Munchkin",agent:"omen"},{name:"iZu",agent:"killjoy"}],
        t2: [{name:"Monyet",agent:"neon"},{name:"crazyguy",agent:"omen"},{name:"xffero",agent:"viper"},{name:"Jemkin",agent:"chamber"},{name:"Kushy",agent:"fade"}]
      },
      stats: {
        t1: [
          {name:"stax",photo:"T1/stax.png",agent:"fade",r:1.07,acs:200,k:16,d:15,a:8,kdDiff:1,kast:70,adr:122,hs:21,fk:2,fd:1,isTop:true},
          {name:"Meteor",photo:"T1/meteor.png",agent:"viper",r:1.03,acs:190,k:16,d:15,a:4,kdDiff:1,kast:74,adr:129,hs:55,fk:2,fd:1},
          {name:"BuZz",photo:"T1/buzz.png",agent:"neon",r:0.89,acs:211,k:17,d:18,a:3,kdDiff:-1,kast:48,adr:128,hs:38,fk:3,fd:4},
          {name:"Munchkin",photo:"T1/munchkin.png",agent:"omen",r:0.75,acs:155,k:11,d:17,a:6,kdDiff:-6,kast:70,adr:99,hs:13,fk:3,fd:4},
          {name:"iZu",photo:"T1/izu.png",agent:"killjoy",r:0.65,acs:139,k:11,d:17,a:2,kdDiff:-6,kast:61,adr:94,hs:14,fk:2,fd:1}
        ],
        t2: [
          {name:"Monyet",photo:"RRQ/monyet.png",agent:"neon",r:1.56,acs:324,k:29,d:14,a:8,kdDiff:15,kast:83,adr:197,hs:24,fk:3,fd:1,isTop:true},
          {name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"omen",r:1.02,acs:143,k:10,d:12,a:13,kdDiff:-2,kast:78,adr:101,hs:38,fk:0,fd:3},
          {name:"xffero",photo:"RRQ/xffero.png",agent:"viper",r:1.01,acs:171,k:12,d:14,a:7,kdDiff:-2,kast:83,adr:125,hs:22,fk:0,fd:1},
          {name:"Jemkin",photo:"RRQ/jemkin.png",agent:"chamber",r:0.91,acs:207,k:18,d:15,a:0,kdDiff:3,kast:57,adr:117,hs:36,fk:7,fd:7},
          {name:"Kushy",photo:"RRQ/kushy.png",agent:"fade",r:0.91,acs:165,k:13,d:16,a:5,kdDiff:-3,kast:87,adr:104,hs:18,fk:1,fd:0}
        ]
      },
      rounds: [["t1","ct"],["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t2","t"],["t1","ct"],["t1","ct"],["t1","ct"],["t2","t"],["t2","ct"],["t2","ct"],["t1","t"],["t2","ct"],["t2","ct"],["t2","ct"],["t1","t"],["t2","ct"],["t2","ct"],["t2","ct"],["t2","ct"]],
      sideBreakdown: [
        {team:"t1",label:"T1 Defense",note:"First Half · 67% Win Rate (8/12)",value:"8 / 12"},
        {team:"t2",label:"RRQ Attack",note:"First Half · ตามแผน Stax ไม่ทัน",value:"4 / 12"},
        {team:"t1",label:"T1 Attack",note:"Second Half · 2 / 11 — BuZz PC มีปัญหา rd 21",value:"2 / 11"},
        {team:"t2",label:"RRQ Defense",note:"Second Half · Monyet Snowball ปิดเกม",value:"9 / 11"}
      ],
      entryDuels: [
        {team:"t2",name:"Jemkin",photo:"RRQ/jemkin.png",agent:"Chamber",fk:7,fd:7},
        {team:"t1",name:"BuZz",photo:"T1/buzz.png",agent:"Neon",fk:3,fd:4},
        {team:"t1",name:"Munchkin",photo:"T1/munchkin.png",agent:"Omen",fk:3,fd:4},
        {team:"t2",name:"Monyet",photo:"RRQ/monyet.png",agent:"Neon",fk:3,fd:1},
        {team:"t1",name:"stax",photo:"T1/stax.png",agent:"Fade",fk:2,fd:1},
        {team:"t1",name:"Meteor",photo:"T1/meteor.png",agent:"Viper",fk:2,fd:1},
        {team:"t1",name:"iZu",photo:"T1/izu.png",agent:"Killjoy",fk:2,fd:1},
        {team:"t2",name:"Kushy",photo:"RRQ/kushy.png",agent:"Fade",fk:1,fd:0},
        {team:"t2",name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"Omen",fk:0,fd:3},
        {team:"t2",name:"xffero",photo:"RRQ/xffero.png",agent:"Viper",fk:0,fd:1}
      ],
      entryInsight: "Jemkin Chamber เปิดราวด์ 7 ครั้ง แต่ FD ก็ 7 ครั้ง (net 0) สะท้อนการเล่นแบบ All-or-nothing · Monyet Neon ใน Map 2 สวนภาพจาก Map 1: FK 3 / FD 1 (เปิดราวด์เก่ง) — เป็นจุดเริ่มต้นของ X-factor ที่พา RRQ ตีกลับ"
    },
    {
      name: "Breeze (Decider)",
      file: "map data/breeze.avif",
      pickedBy: null,
      duration: "37:24",
      score: { t1: 13, t2: 5 },
      sectionTitle: "Map 3 · Breeze (Decider)",
      sectionDesc: "stax กลับมาแก้แค้น Rating 1.79 / ACS 318 / 22K / FK 3 — ครึ่งแรกฝั่งกัน T1 9-3 ก่อนปิดเกมที่ rd 18 · iZu (Sova) 1.60 + BuZz (Neon) 1.42 รวมเป็น Triple Threat",
      composition: {
        t1: [{name:"stax",agent:"kayo"},{name:"iZu",agent:"sova"},{name:"BuZz",agent:"neon"},{name:"Munchkin",agent:"harbor"},{name:"Meteor",agent:"viper"}],
        t2: [{name:"Monyet",agent:"harbor"},{name:"Kushy",agent:"sova"},{name:"crazyguy",agent:"kayo"},{name:"xffero",agent:"viper"},{name:"Jemkin",agent:"neon"}]
      },
      stats: {
        t1: [
          {name:"stax",photo:"T1/stax.png",agent:"kayo",r:1.79,acs:318,k:22,d:10,a:8,kdDiff:12,kast:89,adr:207,hs:35,fk:3,fd:1,isTop:true},
          {name:"iZu",photo:"T1/izu.png",agent:"sova",r:1.60,acs:271,k:17,d:7,a:9,kdDiff:10,kast:94,adr:191,hs:32,fk:1,fd:2},
          {name:"BuZz",photo:"T1/buzz.png",agent:"neon",r:1.42,acs:324,k:21,d:11,a:4,kdDiff:10,kast:72,adr:183,hs:16,fk:5,fd:1},
          {name:"Munchkin",photo:"T1/munchkin.png",agent:"harbor",r:0.89,acs:124,k:8,d:9,a:10,kdDiff:-1,kast:61,adr:85,hs:10,fk:0,fd:1},
          {name:"Meteor",photo:"T1/meteor.png",agent:"viper",r:0.59,acs:122,k:8,d:12,a:3,kdDiff:-4,kast:78,adr:82,hs:35,fk:2,fd:2}
        ],
        t2: [
          {name:"Monyet",photo:"RRQ/monyet.png",agent:"harbor",r:1.01,acs:173,k:11,d:14,a:5,kdDiff:-3,kast:61,adr:111,hs:24,fk:0,fd:1,isTop:true},
          {name:"Kushy",photo:"RRQ/kushy.png",agent:"sova",r:0.78,acs:150,k:9,d:14,a:5,kdDiff:-5,kast:67,adr:107,hs:25,fk:0,fd:1},
          {name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"kayo",r:0.77,acs:184,k:10,d:16,a:7,kdDiff:-6,kast:61,adr:120,hs:29,fk:2,fd:3},
          {name:"xffero",photo:"RRQ/xffero.png",agent:"viper",r:0.67,acs:152,k:8,d:16,a:6,kdDiff:-8,kast:56,adr:100,hs:35,fk:4,fd:1},
          {name:"Jemkin",photo:"RRQ/jemkin.png",agent:"neon",r:0.61,acs:142,k:11,d:16,a:0,kdDiff:-5,kast:39,adr:103,hs:30,fk:1,fd:5}
        ]
      },
      rounds: [["t2","t"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t2","ct"],["t2","ct"],["t1","t"],["t1","t"],["t1","t"],["t1","t"]],
      sideBreakdown: [
        {team:"t1",label:"T1 Defense",note:"First Half · 75% Win Rate (9/12)",value:"9 / 12"},
        {team:"t2",label:"RRQ Attack",note:"First Half · stax เบรกเกมบุก",value:"3 / 12"},
        {team:"t1",label:"T1 Attack",note:"Second Half · 4 รอบติดปิดเกม",value:"4 / 6"},
        {team:"t2",label:"RRQ Defense",note:"Second Half · ต้านบอสแมพไม่ไหว",value:"2 / 6"}
      ],
      entryDuels: [
        {team:"t1",name:"BuZz",photo:"T1/buzz.png",agent:"Neon",fk:5,fd:1},
        {team:"t2",name:"xffero",photo:"RRQ/xffero.png",agent:"Viper",fk:4,fd:1},
        {team:"t1",name:"stax",photo:"T1/stax.png",agent:"Kayo",fk:3,fd:1},
        {team:"t1",name:"Meteor",photo:"T1/meteor.png",agent:"Viper",fk:2,fd:2},
        {team:"t2",name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"Kayo",fk:2,fd:3},
        {team:"t1",name:"iZu",photo:"T1/izu.png",agent:"Sova",fk:1,fd:2},
        {team:"t2",name:"Jemkin",photo:"RRQ/jemkin.png",agent:"Neon",fk:1,fd:5},
        {team:"t1",name:"Munchkin",photo:"T1/munchkin.png",agent:"Harbor",fk:0,fd:1},
        {team:"t2",name:"Monyet",photo:"RRQ/monyet.png",agent:"Harbor",fk:0,fd:1},
        {team:"t2",name:"Kushy",photo:"RRQ/kushy.png",agent:"Sova",fk:0,fd:1}
      ],
      entryInsight: "BuZz เปิดราวด์ 5 ครั้ง · stax 3 ครั้ง · รวมแล้ว T1 เปิด 11 ครั้งจาก 18 ราวด์ (61%) · Jemkin Neon รับบทเปิดราวด์ ทำได้แค่ FK 1 / FD 5 · ตัวเดียวกินรอบเข้าตรงหน้า stax/iZu ครึ่งแรกหมดทุกครั้ง"
    }
  ],
  radar: {
    sectionDesc: "เปรียบเทียบค่าเฉลี่ยทั้งทีม 3 แมพ — T1 ครอบทุกแกน · ที่น่าสนใจคือ HS% ใกล้เคียงกัน (T1 26% vs RRQ 28%) แสดงว่าฝั่ง RRQ ก็ยิงแม่นอยู่ แต่จังหวะการเข้าปะทะและจังหวะ Trade ที่ต่างกัน ทำให้ Rating ห่างกัน +0.20",
    t1: { rating: 1.10, acs: 205, kast: 76, adr: 131, hs: 26, kpp: 14.5 },
    t2: { rating: 0.90, acs: 177, kast: 66, adr: 119, hs: 28, kpp: 12.0 },
    insights: [
      {team:"t1",label:"AVG TEAM RATING",value:"1.10",delta:"vs RRQ 0.90 · Δ +0.20"},
      {team:"t1",label:"AVG ACS",value:"205",delta:"vs RRQ 177 · Δ +28"},
      {team:"t1",label:"AVG KAST",value:"76%",delta:"vs RRQ 66% · Δ +10pt"},
      {team:"t1",label:"AVG ADR",value:"131",delta:"vs RRQ 119 · Δ +12"},
      {team:"t2",label:"AVG HS%",value:"28%",delta:"vs T1 26% · Δ +2pt"},
      {team:"t1",label:"KILLS / PLAYER / MAP",value:"14.5",delta:"vs RRQ 12.0 · Δ +2.5"}
    ],
    note: "<b style=\"color:#fff\">T1 เหนือกว่า 5 ใน 6 แกน</b> — Rating Δ +0.20 / KAST Δ +10pt บ่งชี้ว่าเข้าปะทะแล้ว Trade ได้ดีกว่ามาก · HS% RRQ สูงกว่าเล็กน้อย (Δ +2pt) บอกว่าไม่ใช่เรื่องเล็งไม่แม่น แต่เป็นเรื่อง <b>จังหวะตัดสินใจเข้า/ออก</b> ที่ T1 ทำได้ดีกว่า · ฝั่ง RRQ ที่ดึงค่าเฉลี่ยลงคือ <b>crazyguy</b> (R 0.49 ใน Haven · 0.77 ใน Breeze) และ <b>Jemkin</b> (Breeze 0.61) ขณะที่ <b>Monyet</b> เป็นคนเดียวที่ยืน Rating &gt; 1.00 ทั้ง 3 แมพ"
  },
  killMatrix: {
    desc: "ทั้งแมตช์รวม 3 แมพ — BuZz คือคนที่ T1 ปั้นได้ดีสุด คุม matchup สำคัญติดบวก 4 / 5 รวม +23 · Monyet เป็นผู้เล่นเดียวของ RRQ ที่ทำ matchup ติดบวกได้ (vs T1 +7) · crazyguy ติดลบทุก matchup รวม −20 แย่สุดของแมตช์",
    cols: [
      {name:"Monyet",photo:"RRQ/monyet.png"},
      {name:"Jemkin",photo:"RRQ/jemkin.png"},
      {name:"Kushy",photo:"RRQ/kushy.png"},
      {name:"crazyguy",photo:"RRQ/crazyguy.png"},
      {name:"xffero",photo:"RRQ/xffero.png"}
    ],
    rows: [
      {name:"BuZz",photo:"T1/buzz.png",values:[{k:13,opK:8,diff:5},{k:14,opK:11,diff:3},{k:12,opK:6,diff:6},{k:13,opK:4,diff:9},{k:9,opK:9,diff:0}]},
      {name:"stax",photo:"T1/stax.png",values:[{k:13,opK:10,diff:3},{k:8,opK:8,diff:0},{k:7,opK:4,diff:3},{k:11,opK:4,diff:7},{k:10,opK:6,diff:4}]},
      {name:"iZu",photo:"T1/izu.png",values:[{k:4,opK:6,diff:-2},{k:6,opK:6,diff:0},{k:10,opK:7,diff:3},{k:11,opK:5,diff:6},{k:11,opK:6,diff:5}]},
      {name:"Meteor",photo:"T1/meteor.png",values:[{k:8,opK:14,diff:-6},{k:10,opK:7,diff:3},{k:6,opK:8,diff:-2},{k:4,opK:6,diff:-2},{k:8,opK:7,diff:1}]},
      {name:"Munchkin",photo:"T1/munchkin.png",values:[{k:6,opK:13,diff:-7},{k:6,opK:6,diff:0},{k:9,opK:9,diff:0},{k:5,opK:5,diff:0},{k:4,opK:5,diff:-1}]}
    ],
    statLinks: [
      {value:"+23",label:"BuZz total diff vs RRQ · ดีสุดในทีม T1"},
      {value:"+9",label:"BuZz vs crazyguy · matchup ที่ T1 กดสุด"},
      {value:"+7",label:"Monyet vs T1 total · X-factor เดี่ยวของ RRQ"},
      {value:"−20",label:"crazyguy total diff · แย่สุดของแมตช์"}
    ]
  },
  analysis: [
    {
      title: "Map 1 · Haven — BuZz แค้น FS มาระบายกับ RRQ",
      sub: "เชื่อมโยงกับ Stats: BuZz Neon R 1.55 / 23K / FK 6 — ระเบิดเดี่ยวพอที่แผนการเล่นไม่ต้องเด่นก็ชนะได้",
      paragraphs: [
        "<b>Haven (RRQ Pick)</b> RRQ เลือกแมพที่ตัวเองคุมแผนได้ แต่กลับเจอกับ <b>BuZz ทรงพิโรธ</b> — <b>Rating 1.55 / ACS 300 / 23K-9D / +14 K-D / KAST 84% / ADR 171 / FK 6 FD 2</b> สถิติทุกแกนของแมพนำในทีมหมด ตามที่ PzFx เกริ่นว่า \"เมื่อ Buzz ทรงพิโรธขนาดนี้ จะมีเพื่อนร่วมทีมไว้ทำไม\"",
        "ความผิดพลาดที่ BuZz ทำตอนเจอกับ FS รอบก่อน (UR Semifinals แพ้ 0-2) เขามาระบายกับ RRQ อย่างชัดเจน — <b>FK 6 ครั้ง</b> สูงสุดของแมตช์ นั่นหมายความว่าทุกๆ 3 ราวด์ BuZz เปิดเกมเอาคีย์แมนของ RRQ ลงไป 1 ครั้ง โดยที่เพื่อนร่วมทีมยังไม่ต้องทำอะไรเลย",
        "ฝั่ง RRQ พังที่ <b>Duelists ทั้งสอง</b> — <b>Jemkin (Waylay) FK 2 FD 5</b> และ <b>Monyet (Neon) FK 2 FD 5</b> รวม FD 10 ครั้ง คือยิ่งเปิดราวด์เท่าไหร่ ยิ่งจ่ายของฟรีให้ T1 · <b>crazyguy (Omen) R 0.49 / 4K-16D / -12 K-D</b> ติดลบเดี่ยวที่สุดของแมพ · เกมรับฝั่งกันครึ่งแรกได้แค่ <b>4/12 (33%)</b>",
        "Round Flow บอกชัด: <b>T1 บุก 8/12 ครึ่งแรก</b> ก่อนปิดเกมตอน rd 19 — ตามที่ PzFx สรุปว่า \"ตลอดทั้ง Match ไม่ต้องวิเคราะห์อะไร นอกจาก RRQ ยิงสวนคืนไม่ได้ Aim Diff จบการวิเคราะห์แมพแรก\""
      ],
      pull: "\"BuZz ทรงพิโรธ พังเกมรับของ RRQ จนเละตุ้มเป๊ะ\" — สะท้อนผ่าน Kill Matrix: <b>BuZz vs crazyguy +9 / vs Kushy +6 / vs Jemkin +3</b> · matchup ติดบวก 4 / 5 รายชื่อ · รวม +23 — สูงสุดในแมตช์",
      stats: [
        {value:"+14",label:"BuZz K-D Haven · เดอะแบกล้วน"},
        {value:"6 FK",label:"BuZz เปิดราวด์เด็ดทำลายแผน RRQ"},
        {value:"−12",label:"crazyguy K-D · พังเดี่ยวที่สุดของ Haven"}
      ]
    },
    {
      title: "Map 2 · Lotus — Monyet X-factor + PC Buzz หลุดจังหวะคีย์",
      sub: "เชื่อมโยงกับ Stats: Monyet Neon R 1.56 / 29K · BuZz Lotus R 0.89 (ตกฮวบจาก 1.55) — Round 21 ที่สกอร์ 10-10 BuZz PC มีปัญหา ส่ง RRQ Snowball ปิดเกม",
      paragraphs: [
        "<b>Lotus (T1 Pick)</b> เปิดเกม T1 ยังเล่นแบบเดิม — ครึ่งแรกฝั่งกัน <b>stax (Fade) 1.07 + Meteor (Viper) 1.03</b> ประคองได้ดี · BuZz เล่นรุนแรงเหมือนเดิมแต่จังหวะการเข้า/ออกแย่ลง <b>R 0.89 / KAST 48%</b> (ต่ำสุดในทีม) · T1 กดไป <b>8-4</b> ฝั่งกัน",
        "พลิกเกมตอนสลับฝั่งคือ <b>Monyet</b> — Map 1 เล่น Neon แล้วล้ม Rating 0.83 / 11K · Map 2 ระเบิดพลังเต็มเครื่อง <b>R 1.56 / ACS 324 / 29K-14D / +15 K-D / ADR 197 / KAST 83% / FK 3 FD 1</b> สถิติทุกแกนของแมพ Monyet ครองคนเดียว ตามที่ PzFx ชี้ว่า \"มันคือพลังของ Monyet ที่พา RRQ ไปถึงเส้นชัย\"",
        "Round Flow เห็นชัด: <b>r13-r18 RRQ ตี 5/6 รอบ</b> ไล่จาก 8-4 ขึ้นมา 9-8 ก่อนกลับมาสูสีต่อเนื่อง — <b>r19 T1 ตีคืน, r20 RRQ, r21 RRQ</b> ที่นี่คือจุดที่ <b>BuZz PC มีปัญหา</b> ที่สกอร์ 10-10 จังหวะ 2-2 (น่าจะเริ่มก่อนรอบ 21) · ผลคือ <b>r21-r23 RRQ ตี 3 รอบติด</b> ปิดเกม 10-13",
        "หลักฐาน Stats สนับสนุน: ดู Side Breakdown ฝั่ง T1 Attack ครึ่งหลัง <b>2/11 (18%)</b> — ปกติทีมระดับนี้ฝั่งบุกจะได้อย่างน้อย 4-5 รอบ การที่ T1 ตีได้แค่ 2 รอบสะท้อนทั้ง Monyet สวนคืน + ผลกระทบจาก PC ปัญหา · <b>Jemkin Chamber FK 7 FD 7</b> = net 0 บอกว่าเกม Lotus ทั้งสองทีมเปิดราวด์สูสีกว่า Map 1 มาก"
      ],
      pull: "<b>\"ดวงจะซวย ช่วยไม่ได้\"</b> — สะท้อนผ่าน T1 Attack 2/11 ครึ่งหลังที่ผิดสถิติของทีมระดับนี้ · BuZz Rating ตกจาก 1.55 → 0.89 (KAST ต่ำสุด 48%) — Monyet R 1.56 · X-factor ที่ PzFx เตือนไว้ ระเบิดออกมาแค่ครึ่งเดียวของแมตช์",
      stats: [
        {value:"1.56",label:"Monyet Rating · X-factor ระเบิด"},
        {value:"29 K",label:"Monyet Kills Lotus · สูงสุดทั้งแมตช์"},
        {value:"2/11",label:"T1 Attack 2nd half · PC ปัญหา rd 21"}
      ]
    },
    {
      title: "Map 3 · Breeze — stax Boss Bar ขึ้นจอ RRQ",
      sub: "เชื่อมโยงกับ Stats: stax Kayo R 1.79 / 22K / ACS 318 / FK 3 + iZu Sova 1.60 + BuZz Neon 1.42 = Triple Threat · ครึ่งแรกฝั่งกัน 9-3",
      paragraphs: [
        "<b>Breeze (Decider)</b> เปลี่ยนภาพจาก Map 2 ทันที — รอบนี้ <b>stax</b> เสมือนแก้แค้น Lotus ที่แพ้เพราะปัญหาเทคนิค ระเบิดฟอร์ม Kayo <b>R 1.79 / ACS 318 / 22K-10D / +12 K-D / KAST 89% / ADR 207 / HS 35% / FK 3</b> — Top Fragger ของแมพและของทั้งแมตช์",
        "PzFx ชี้ว่าครึ่งแรก stax คนเดียวกด Rating 2.16 / Kill 17 — สถิติเฉพาะครึ่งแรก ตามที่ Side Breakdown ยืนยัน <b>T1 Defense ครึ่งแรก 9/12 (75% Win Rate)</b> เกมรับล็อกแน่นจนแผนบุกของ RRQ ไม่มีอะไรทำงานเลย",
        "ที่สำคัญคือ T1 มี <b>Triple Threat</b> ใน Breeze — stax 1.79 + iZu (Sova) 1.60 + BuZz (Neon) 1.42 รวม <b>3 คนยืน Rating ≥ 1.42</b> และทั้งสามคน <b>+10 K-D ทุกคน</b> (stax +12, iZu +10, BuZz +10) — เกมแบบนี้ RRQ พยายามอะไรก็ไม่ได้ผล",
        "หลักฐาน Stats: <b>RRQ ฝ่ายบุกครึ่งแรก 3/12 (25%)</b> · <b>Jemkin (Neon) R 0.61 / KAST 39%</b> — KAST 39% หมายความว่า 61% ของรอบ Jemkin ไม่ได้ Kill, Assist, Survive, หรือ Trade เลย คือ \"ตายเปล่า\" ติดต่อกัน · <b>xffero (Viper) +4 FK</b> ดูเหมือนเก่ง แต่ Rating 0.67 / K-D −8 บอกว่าเปิดราวด์แล้วก็ตายต่อเอง · เกมจบเร็วที่ rd 18 (13-5) — เป็นเกม Stomp อีกครั้งของ T1"
      ],
      pull: "\"stax แม่งก็มีหลอดเลือดบอสขึ้นบนจอของ RRQ — RRQ พยายามเปลี่ยนแผนบุกก็แล้ว มันก็ไม่ได้ผล\" · สะท้อนผ่าน Side Breakdown: <b>RRQ Attack ครึ่งแรก 3/12 (25%)</b> และ <b>stax KAST 89%</b> (เกือบทุกรอบมีส่วน)",
      stats: [
        {value:"1.79",label:"stax Rating Breeze · Top Fragger แมตช์"},
        {value:"+10",label:"K-D Diff ของ 3 คน T1 (stax/iZu/BuZz)"},
        {value:"39%",label:"Jemkin KAST · เกม Decider ที่หายตัวที่สุด"}
      ]
    },
    {
      title: "Verdict — T1 พลังดิบครองเกม · RRQ ยังย่ำอยู่กับที่",
      paragraphs: [
        "สกอร์ <b>2-1</b> สะท้อนภาพรวมที่ T1 ไม่ได้ชนะด้วยแผน แต่ชนะด้วย <b>Individual Firepower</b> ตามที่ PzFx เกริ่นซ้ำมาหลายครั้ง — <b>BuZz Map 1 (1.55), Monyet สวนคืน Map 2 (1.56), stax Map 3 (1.79)</b> · ทุกแมพมี Top Fragger ที่ Rating ≥ 1.55 — แต่ของ T1 มี 2 ใน 3 แมพ",
        "<b>Triple Threat ของ T1 ใน Breeze</b> (stax 1.79 + iZu 1.60 + BuZz 1.42) คือสัญญาณว่าทีมนี้ระเบิดได้พร้อมกัน 3 คน · ไม่จำเป็นต้องใช้แผนการเล่นซับซ้อน ใช้ <b>พลังดิบ</b> ปิดตายเกมรับของ RRQ ได้ตลอด · นี่ไม่ใช่ครั้งแรก เพราะตอน Group Stage T1 ก็ภาพนี้เลย — RRQ แพ้ T1 ติดต่อ 2 ครั้งแล้วในรูปแบบเดียวกัน",
        "<b>RRQ Verdict</b> — <b>Monyet เป็นผู้เล่นเดียวของ RRQ ที่ Kill Matrix ติดบวก (+7)</b> · เป็น X-factor จริงตามคำที่ PzFx เตือนไว้ตอนเจอ DFM แต่ผู้เล่นที่เหลือยังไม่นิ่ง: <b>crazyguy total −20</b> (แย่สุดของแมตช์), <b>Jemkin Breeze KAST 39%</b>, <b>Kushy total −10</b> · ทีมยังตะกุกตะกัก เดียวมาเดียวไม่มา · พ่ายแพ้ครั้งนี้ ตกรอบ Stage 1 พร้อมโจทย์ใหญ่ — ทำความเข้าใจกับทีมมากกว่านี้ คิดค้นการเล่นที่ Creative กว่านี้",
        "<b>T1 Verdict</b> — ไปต่อเจอผู้แพ้จาก Upper Final · ยังคงสไตล์ Egoist เหมือนตอนคว้าแชมป์ Master · จุดอ่อนที่ยังไม่ได้แสดงคือ <b>ความ Creative ในแผนการเล่น</b> · ถ้าเจอทีมที่อ่านสไตล์ Firepower ออก (เช่น FS ที่ทำให้ T1 Ego Shock ไปแล้วใน Semifinals) อาจจะลำบาก · แต่ตอนนี้ยังไม่มีทีมไหนต้านพลังดิบของ T1 ได้ ยกเว้น FS"
      ]
    }
  ]
};
