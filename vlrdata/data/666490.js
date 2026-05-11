window.matchData = {
  meta: { event: "VCT 2026 · Pacific · Stage 1", stage: "Playoffs · Upper Semifinals", date: "8 May 2026", format: "Best of 3" },
  teams: {
    t1: { name: "Paper Rex", tag: "SINGAPORE · PRX", shortTag: "PRX", logo: "Paper rex/logo.png", color: "#ff5252", colorRgb: "255,82,82", score: 1, isWinner: false },
    t2: { name: "Global Esports", tag: "INDIA · GE", shortTag: "GE", logo: "GE/logo.png", color: "#4cc9f0", colorRgb: "76,201,240", score: 2, isWinner: true }
  },
  vetoDesc: "GE เลือก Breeze · PRX เลือก Lotus · Pearl คือ Decider — สามแมพที่บอกเล่าเรื่อง \"PRX สวิงฟอร์มซ้ายขวา\"",
  veto: [
    { team: "t2", action: "ban", map: "fracture" },
    { team: "t1", action: "ban", map: "haven", mapFile: "haven.jpg" },
    { team: "t2", action: "pick", map: "breeze" },
    { team: "t1", action: "pick", map: "lotus" },
    { team: "t2", action: "ban", map: "split", mapFile: "split.webp" },
    { team: "t1", action: "ban", map: "ascent", mapFile: "ascent.jpg" },
    { team: null, action: "left", map: "pearl", note: "Decider · 5–13 GE" }
  ],
  maps: [
    {
      name: "Breeze", file: "map data/breeze.avif", pickedBy: "t2", duration: "1:05:48",
      score: { t1: 9, t2: 13 },
      sectionTitle: "Map 1 · Breeze",
      sectionDesc: "GE Pick — PRX ครีเอทแผน 2 Operator ฝั่งกัน แต่พอสลับมาบุก Firepower Vandal/Phantom หายไปเยอะ Sage ของ xavi8k ปิดตายเกมบุก",
      composition: {
        t1: [{name:"d4v41",agent:"viper"},{name:"invy",agent:"sova"},{name:"something",agent:"jett"},{name:"f0rsakeN",agent:"neon"},{name:"Jinggg",agent:"omen"}],
        t2: [{name:"Autumn",agent:"chamber"},{name:"UdoTan",agent:"neon"},{name:"xavi8k",agent:"sage"},{name:"Kr1stal",agent:"sova"},{name:"PatMen",agent:"viper"}]
      },
      stats: {
        t1: [
          {name:"d4v41",photo:"Paper rex/d4v41.png",agent:"viper",r:1.18,acs:287,k:22,d:17,a:2,kdDiff:5,kast:55,adr:201,hs:41,fk:3,fd:0,isTop:true},
          {name:"invy",photo:"Paper rex/invy.png",agent:"sova",r:0.97,acs:170,k:12,d:17,a:5,kdDiff:-5,kast:82,adr:107,hs:30,fk:1,fd:1},
          {name:"something",photo:"Paper rex/something.png",agent:"jett",r:0.97,acs:193,k:14,d:15,a:2,kdDiff:-1,kast:50,adr:139,hs:16,fk:2,fd:3},
          {name:"f0rsakeN",photo:"Paper rex/f0rsaken.png",agent:"neon",r:0.76,acs:174,k:14,d:16,a:0,kdDiff:-2,kast:55,adr:101,hs:18,fk:4,fd:6},
          {name:"Jinggg",photo:"Paper rex/jinggg.png",agent:"omen",r:0.54,acs:123,k:10,d:17,a:3,kdDiff:-7,kast:59,adr:83,hs:23,fk:1,fd:1}
        ],
        t2: [
          {name:"Autumn",photo:"GE/Autumn.png",agent:"chamber",r:1.39,acs:250,k:22,d:13,a:1,kdDiff:9,kast:77,adr:148,hs:24,fk:7,fd:1,isTop:true},
          {name:"UdoTan",photo:"GE/Udotan.png",agent:"neon",r:1.19,acs:272,k:22,d:17,a:3,kdDiff:5,kast:82,adr:163,hs:16,fk:3,fd:3},
          {name:"xavi8k",photo:"GE/Xavi8k.png",agent:"sage",r:1.17,acs:201,k:16,d:12,a:5,kdDiff:4,kast:59,adr:132,hs:28,fk:0,fd:0},
          {name:"Kr1stal",photo:"GE/Krystal.png",agent:"sova",r:0.85,acs:152,k:10,d:13,a:6,kdDiff:-3,kast:77,adr:111,hs:16,fk:0,fd:1},
          {name:"PatMen",photo:"GE/Patmen.png",agent:"viper",r:0.68,acs:167,k:12,d:17,a:4,kdDiff:-5,kast:64,adr:122,hs:36,fk:1,fd:6}
        ]
      },
      rounds: [["t2","t"],["t2","t"],["t1","ct"],["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t2","t"],["t2","t"],["t1","t"],["t1","t"],["t2","ct"],["t2","ct"],["t2","ct"],["t1","t"],["t2","ct"],["t2","ct"],["t2","ct"],["t2","ct"]],
      sideBreakdown: [
        {team:"t1",label:"PRX Defense",note:"First Half · 2 Operators แผนครีเอท",value:"6 / 12"},
        {team:"t2",label:"GE Attack",note:"First Half",value:"6 / 12"},
        {team:"t1",label:"PRX Attack",note:"Second Half · ยิงไม่ออก Rifle หาย",value:"3 / 10"},
        {team:"t2",label:"GE Defense",note:"Second Half · 70% Win · ปิดเกมบุก PRX",value:"7 / 10"}
      ],
      entryDuels: [
        {team:"t2",name:"Autumn",photo:"GE/Autumn.png",agent:"Chamber",fk:7,fd:1},
        {team:"t1",name:"d4v41",photo:"Paper rex/d4v41.png",agent:"Viper",fk:3,fd:0},
        {team:"t2",name:"xavi8k",photo:"GE/Xavi8k.png",agent:"Sage",fk:0,fd:0},
        {team:"t2",name:"UdoTan",photo:"GE/Udotan.png",agent:"Neon",fk:3,fd:3},
        {team:"t1",name:"Jinggg",photo:"Paper rex/jinggg.png",agent:"Omen",fk:1,fd:1},
        {team:"t1",name:"invy",photo:"Paper rex/invy.png",agent:"Sova",fk:1,fd:1},
        {team:"t1",name:"something",photo:"Paper rex/something.png",agent:"Jett",fk:2,fd:3},
        {team:"t2",name:"Kr1stal",photo:"GE/Krystal.png",agent:"Sova",fk:0,fd:1},
        {team:"t1",name:"f0rsakeN",photo:"Paper rex/f0rsaken.png",agent:"Neon",fk:4,fd:6},
        {team:"t2",name:"PatMen",photo:"GE/Patmen.png",agent:"Viper",fk:1,fd:6}
      ],
      entryInsight: "Autumn (Chamber) +6 FK Diff สูงสุด — เปิดเกมให้ GE ทุกครั้ง · PatMen FD 6 โดนเปิดเยอะสุด"
    },
    {
      name: "Lotus", file: "map data/lotus.avif", pickedBy: "t1", duration: "39:50",
      score: { t1: 13, t2: 6 },
      sectionTitle: "Map 2 · Lotus",
      sectionDesc: "PRX Pick — คืนฟอร์ม Firepower เต็มสูบ Stomp GE 13-6 ในแมพเดียว GE เมาหมัดหนัก",
      composition: {
        t1: [{name:"invy",agent:"skye"},{name:"Jinggg",agent:"raze"},{name:"something",agent:"jett"},{name:"d4v41",agent:"vyse"},{name:"f0rsakeN",agent:"omen"}],
        t2: [{name:"Kr1stal",agent:"vyse"},{name:"Autumn",agent:"viper"},{name:"UdoTan",agent:"neon"},{name:"xavi8k",agent:"fade"},{name:"PatMen",agent:"omen"}]
      },
      stats: {
        t1: [
          {name:"invy",photo:"Paper rex/invy.png",agent:"skye",r:1.43,acs:203,k:15,d:8,a:11,kdDiff:7,kast:84,adr:128,hs:26,fk:1,fd:1,isTop:true},
          {name:"Jinggg",photo:"Paper rex/jinggg.png",agent:"raze",r:1.43,acs:257,k:18,d:10,a:3,kdDiff:8,kast:89,adr:172,hs:20,fk:4,fd:0},
          {name:"something",photo:"Paper rex/something.png",agent:"jett",r:1.36,acs:232,k:16,d:10,a:4,kdDiff:6,kast:89,adr:154,hs:20,fk:3,fd:2},
          {name:"d4v41",photo:"Paper rex/d4v41.png",agent:"vyse",r:1.23,acs:214,k:14,d:11,a:11,kdDiff:3,kast:74,adr:149,hs:56,fk:3,fd:1},
          {name:"f0rsakeN",photo:"Paper rex/f0rsaken.png",agent:"omen",r:0.84,acs:171,k:11,d:13,a:13,kdDiff:-2,kast:74,adr:123,hs:21,fk:2,fd:2}
        ],
        t2: [
          {name:"Kr1stal",photo:"GE/Krystal.png",agent:"vyse",r:1.13,acs:262,k:17,d:15,a:2,kdDiff:2,kast:68,adr:173,hs:22,fk:3,fd:1,isTop:true},
          {name:"Autumn",photo:"GE/Autumn.png",agent:"viper",r:0.91,acs:176,k:10,d:15,a:6,kdDiff:-5,kast:58,adr:115,hs:37,fk:2,fd:1},
          {name:"UdoTan",photo:"GE/Udotan.png",agent:"neon",r:0.69,acs:126,k:9,d:13,a:2,kdDiff:-4,kast:53,adr:80,hs:50,fk:0,fd:5},
          {name:"xavi8k",photo:"GE/Xavi8k.png",agent:"fade",r:0.63,acs:130,k:9,d:15,a:2,kdDiff:-6,kast:63,adr:84,hs:36,fk:0,fd:2},
          {name:"PatMen",photo:"GE/Patmen.png",agent:"omen",r:0.47,acs:124,k:7,d:16,a:4,kdDiff:-9,kast:42,adr:78,hs:41,fk:1,fd:4}
        ]
      },
      rounds: [["t2","t"],["t1","ct"],["t1","ct"],["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t2","ct"],["t2","ct"],["t1","t"],["t1","t"],["t1","t"],["t2","ct"],["t1","t"]],
      sideBreakdown: [
        {team:"t1",label:"PRX Defense",note:"First Half · 75% Win · Stomp",value:"9 / 12"},
        {team:"t2",label:"GE Attack",note:"First Half · เสียจังหวะหมด",value:"3 / 12"},
        {team:"t1",label:"PRX Attack",note:"Second Half · ปิดเกมเร็ว",value:"4 / 7"},
        {team:"t2",label:"GE Defense",note:"Second Half",value:"3 / 7"}
      ],
      entryDuels: [
        {team:"t1",name:"Jinggg",photo:"Paper rex/jinggg.png",agent:"Raze",fk:4,fd:0},
        {team:"t1",name:"d4v41",photo:"Paper rex/d4v41.png",agent:"Vyse",fk:3,fd:1},
        {team:"t2",name:"Kr1stal",photo:"GE/Krystal.png",agent:"Vyse",fk:3,fd:1},
        {team:"t1",name:"something",photo:"Paper rex/something.png",agent:"Jett",fk:3,fd:2},
        {team:"t2",name:"Autumn",photo:"GE/Autumn.png",agent:"Viper",fk:2,fd:1},
        {team:"t1",name:"invy",photo:"Paper rex/invy.png",agent:"Skye",fk:1,fd:1},
        {team:"t1",name:"f0rsakeN",photo:"Paper rex/f0rsaken.png",agent:"Omen",fk:2,fd:2},
        {team:"t2",name:"xavi8k",photo:"GE/Xavi8k.png",agent:"Fade",fk:0,fd:2},
        {team:"t2",name:"PatMen",photo:"GE/Patmen.png",agent:"Omen",fk:1,fd:4},
        {team:"t2",name:"UdoTan",photo:"GE/Udotan.png",agent:"Neon",fk:0,fd:5}
      ],
      entryInsight: "PRX 4/5 เปิดเกมเป็นบวก · UdoTan ตายเปิดราวด์ 5 ครั้ง โดนกดหนักสุด"
    },
    {
      name: "Pearl", file: "map data/pearl.avif", pickedBy: null, duration: "40:48",
      score: { t1: 5, t2: 13 },
      sectionTitle: "Map 3 · Pearl",
      sectionDesc: "Decider — GE Reset เกม PRX สวิงกลับสู่ฟอร์มแย่ ใจร้อน Firepower ไม่ถึง — Alecks ยังอุทาน \"It's over\"",
      composition: {
        t1: [{name:"f0rsakeN",agent:"astra"},{name:"something",agent:"jett"},{name:"Jinggg",agent:"phoenix"},{name:"d4v41",agent:"vyse"},{name:"invy",agent:"fade"}],
        t2: [{name:"Autumn",agent:"phoenix"},{name:"PatMen",agent:"fade"},{name:"Kr1stal",agent:"killjoy"},{name:"UdoTan",agent:"neon"},{name:"xavi8k",agent:"astra"}]
      },
      stats: {
        t1: [
          {name:"f0rsakeN",photo:"Paper rex/f0rsaken.png",agent:"astra",r:1.16,acs:230,k:15,d:14,a:11,kdDiff:1,kast:78,adr:135,hs:21,fk:1,fd:1,isTop:true},
          {name:"something",photo:"Paper rex/something.png",agent:"jett",r:0.81,acs:202,k:13,d:15,a:0,kdDiff:-2,kast:56,adr:131,hs:32,fk:5,fd:2},
          {name:"Jinggg",photo:"Paper rex/jinggg.png",agent:"phoenix",r:0.75,acs:181,k:10,d:15,a:6,kdDiff:-5,kast:44,adr:125,hs:21,fk:2,fd:2},
          {name:"d4v41",photo:"Paper rex/d4v41.png",agent:"vyse",r:0.61,acs:163,k:9,d:17,a:6,kdDiff:-8,kast:61,adr:104,hs:20,fk:1,fd:2},
          {name:"invy",photo:"Paper rex/invy.png",agent:"fade",r:0.37,acs:95,k:4,d:16,a:6,kdDiff:-12,kast:44,adr:61,hs:21,fk:2,fd:0}
        ],
        t2: [
          {name:"Autumn",photo:"GE/Autumn.png",agent:"phoenix",r:1.58,acs:271,k:18,d:10,a:8,kdDiff:8,kast:83,adr:173,hs:33,fk:2,fd:0,isTop:true},
          {name:"PatMen",photo:"GE/Patmen.png",agent:"fade",r:1.49,acs:302,k:20,d:12,a:6,kdDiff:8,kast:78,adr:208,hs:29,fk:2,fd:3},
          {name:"Kr1stal",photo:"GE/Krystal.png",agent:"killjoy",r:1.33,acs:228,k:16,d:10,a:1,kdDiff:6,kast:83,adr:160,hs:33,fk:0,fd:1},
          {name:"UdoTan",photo:"GE/Udotan.png",agent:"neon",r:1.14,acs:241,k:15,d:10,a:5,kdDiff:5,kast:89,adr:162,hs:30,fk:1,fd:3},
          {name:"xavi8k",photo:"GE/Xavi8k.png",agent:"astra",r:0.91,acs:137,k:8,d:9,a:6,kdDiff:-1,kast:67,adr:85,hs:28,fk:2,fd:4}
        ]
      },
      rounds: [["t2","ct"],["t2","ct"],["t1","t"],["t2","ct"],["t2","ct"],["t1","t"],["t2","ct"],["t2","ct"],["t2","ct"],["t1","t"],["t2","ct"],["t2","ct"],["t1","ct"],["t1","ct"],["t2","t"],["t2","t"],["t2","t"],["t2","t"]],
      sideBreakdown: [
        {team:"t1",label:"PRX Attack",note:"First Half · 25% Win · ใจร้อน Firepower ไม่ถึง",value:"3 / 12"},
        {team:"t2",label:"GE Defense",note:"First Half · 75% Win · Stomp กลับ",value:"9 / 12"},
        {team:"t1",label:"PRX Defense",note:"Second Half · \"It's over\"",value:"2 / 6"},
        {team:"t2",label:"GE Attack",note:"Second Half · ปิดเกม 13-5",value:"4 / 6"}
      ],
      entryDuels: [
        {team:"t1",name:"something",photo:"Paper rex/something.png",agent:"Jett",fk:5,fd:2},
        {team:"t2",name:"Autumn",photo:"GE/Autumn.png",agent:"Phoenix",fk:2,fd:0},
        {team:"t1",name:"invy",photo:"Paper rex/invy.png",agent:"Fade",fk:2,fd:0},
        {team:"t1",name:"Jinggg",photo:"Paper rex/jinggg.png",agent:"Phoenix",fk:2,fd:2},
        {team:"t1",name:"f0rsakeN",photo:"Paper rex/f0rsaken.png",agent:"Astra",fk:1,fd:1},
        {team:"t2",name:"Kr1stal",photo:"GE/Krystal.png",agent:"Killjoy",fk:0,fd:1},
        {team:"t1",name:"d4v41",photo:"Paper rex/d4v41.png",agent:"Vyse",fk:1,fd:2},
        {team:"t2",name:"PatMen",photo:"GE/Patmen.png",agent:"Fade",fk:2,fd:3},
        {team:"t2",name:"xavi8k",photo:"GE/Xavi8k.png",agent:"Astra",fk:2,fd:4},
        {team:"t2",name:"UdoTan",photo:"GE/Udotan.png",agent:"Neon",fk:1,fd:3}
      ],
      entryInsight: "PRX เปิดเกมยังพอดู (something +3) แต่ mid-round ตามมา PRX พังหมด · จบเกม 5-13"
    }
  ],
  radar: {
    sectionDesc: "เปรียบเทียบค่าเฉลี่ยทั้งทีมตลอด 3 แมพ — GE สม่ำเสมอกว่าเล็กน้อย แต่ค่าเฉลี่ยใกล้เคียงกัน บอกได้ชัดว่าแพ้-ชนะอยู่ที่ \"consistency\"",
    t1: { rating: 0.96, acs: 193, kast: 66, adr: 128, hs: 26, kpp: 13.1 },
    t2: { rating: 1.04, acs: 203, kast: 70, adr: 133, hs: 31, kpp: 14.1 },
    insights: [
      {team:"t2",label:"AVG TEAM RATING",value:"1.04",delta:"vs PRX 0.96 · Δ +0.08"},
      {team:"t2",label:"AVG ACS",value:"203",delta:"vs PRX 193 · Δ +10"},
      {team:"t2",label:"AVG KAST",value:"70%",delta:"vs PRX 66% · สม่ำเสมอกว่า"},
      {team:"t2",label:"AVG HS%",value:"31%",delta:"vs PRX 26% · แม่นกว่า"},
      {team:"t1",label:"MAP 2 LOTUS",value:"+0.52",delta:"PRX Rating 1.26 vs GE 0.77 · Stomp"},
      {team:"t2",label:"MAP 3 PEARL",value:"+0.55",delta:"GE Rating 1.29 vs PRX 0.74 · Counter-Stomp"}
    ],
    note: "PRX มีจุดสูงสุด <b style=\"color:#fff\">Stomp Lotus 13-6</b> แต่ก็มีจุดต่ำสุด <b style=\"color:#fff\">Pearl 5-13</b> — ขาด consistency อย่างที่ PzFx ระบุ \"ฟอร์มสวิงซ้ายๆ ขวาๆ แย่ๆ ดีๆ สลับกัน\""
  },
  killMatrix: {
    desc: "ใครเอาชนะใครรวมทั้งแมตช์ 3 แมพ — Autumn ครอง matchup vs f0rsakeN และคุม PRX ได้ทุกแมพ",
    cols: [
      {name:"Autumn",photo:"GE/Autumn.png"},
      {name:"PatMen",photo:"GE/Patmen.png"},
      {name:"Kr1stal",photo:"GE/Krystal.png"},
      {name:"UdoTan",photo:"GE/Udotan.png"},
      {name:"xavi8k",photo:"GE/Xavi8k.png"}
    ],
    rows: [
      {name:"something",photo:"Paper rex/something.png",values:[{k:11,opK:5,diff:6},{k:9,opK:11,diff:-2},{k:7,opK:9,diff:-2},{k:11,opK:9,diff:2},{k:5,opK:6,diff:-1}]},
      {name:"d4v41",photo:"Paper rex/d4v41.png",values:[{k:9,opK:9,diff:0},{k:10,opK:9,diff:1},{k:9,opK:9,diff:0},{k:9,opK:12,diff:-3},{k:8,opK:6,diff:2}]},
      {name:"f0rsakeN",photo:"Paper rex/f0rsaken.png",values:[{k:4,opK:13,diff:-9},{k:11,opK:7,diff:4},{k:6,opK:10,diff:-4},{k:10,opK:6,diff:4},{k:9,opK:7,diff:2}]},
      {name:"Jinggg",photo:"Paper rex/jinggg.png",values:[{k:7,opK:12,diff:-5},{k:10,opK:6,diff:4},{k:8,opK:8,diff:0},{k:7,opK:10,diff:-3},{k:6,opK:6,diff:0}]},
      {name:"invy",photo:"Paper rex/invy.png",values:[{k:7,opK:11,diff:-4},{k:5,opK:6,diff:-1},{k:8,opK:7,diff:1},{k:3,opK:9,diff:-6},{k:8,opK:8,diff:0}]}
    ],
    statLinks: [
      {value:"−9",label:"f0rsakeN vs Autumn · Autumn ครองคู่นี้หนักที่สุด"},
      {value:"+6",label:"something vs Autumn · เกมเดียวที่ PRX กดได้ (Map 2)"},
      {value:"−6",label:"invy vs UdoTan · UdoTan โหด"}
    ]
  },
  analysis: [
    {
      title: "Map 1 · Breeze — สอง Operator ครีเอท แต่บุก Vandal/Phantom หาย",
      sub: "เชื่อมโยงกับ Stats: PRX Defense 6/12 (50%) · PRX Attack 3/10 (30%) · Jinggg R 0.54 / 10K-17D",
      paragraphs: [
        "ครึ่งแรกที่ PRX เล่นฝั่งกัน พวกเขามี <b>ความ Creative</b> ในการต่อกร GE อย่างมาก กับแผนใช้ <b>2 Operator</b> ทวีคูณเกมกัน · PRX defense first half ชนะ 6/12 (50%) สูสี 6-6 พักครึ่ง",
        "แต่เมื่อไรที่ PRX กลับมาเล่น Rifle ก็กลายเป็น GE คุมเกมได้ และพอ PRX สลับมาเป็น<b>ฝั่งบุก ก็ยากเลย</b> — Firepower Vandal/Phantom หายเยอะ <b>f0rsakeN, Jinggg, something แทบยิงสู้ GE คืนไม่ได้</b>"
      ],
      pull: "\"โดยเฉพาะ Jinggg หนักมากๆ ยิงไม่ตาย ยิงไม่โดน\" — สถิติยืนยัน <b>Jinggg Map 1 Rating 0.54 ต่ำสุดในทีม</b> 10K/17D/-7 K-D · ฝั่ง GE <b>xavi8k (Sage) Rating 1.17 / 16K / +4 / KAST 59%</b> เล่น Sentinel-Initiator คุมเกมบุก PRX ได้นิ่งสุด — \"Sage ของ xavi8k ปิดตายเกมบุก\"",
      stats: [
        {value:"3 / 10",label:"PRX Attack Win Rate ครึ่งหลัง · 30%"},
        {value:"0.54",label:"Jinggg Rating · ต่ำสุดในแมตช์"},
        {value:"+9",label:"Autumn Chamber K-D · Top fragger"}
      ]
    },
    {
      title: "Map 2 · Lotus — PRX คืนฟอร์ม Stomp GE 13-6",
      sub: "เชื่อมโยงกับ Stats: PRX Defense 9/12 (75%) · 4 ผู้เล่น Rating 1.20+ · GE 5 คน Rating ต่ำกว่า 1.20",
      paragraphs: [
        "มาแมพสองอย่าง <b>Lotus</b> ที่ PRX ดูเหมือนคืนฟอร์ม Firepower เพราะหลายจังหวะที่ GE พยายามปะทะ <b>แพ้เกือบทุกรอบ</b> เป็นเกมที่ PRX <b>Stomp GE</b> ด้วย Firepower",
        "ตัวเลขยืนยันชัดเจน: <b>4 ผู้เล่น PRX มี Rating 1.20+</b> (Jinggg & invy 1.43, something 1.36, d4v41 1.23) · ฝั่ง GE <b>top fragger Kr1stal R 1.13</b> สูงสุดในทีม รองลงมาทุกคนต่ำกว่า 1.00 (Autumn 0.91, UdoTan 0.69, xavi8k 0.63, PatMen 0.47!)",
        "ที่น่าสนใจคือ <b>Jinggg พลิกจาก Map 1 (0.54) → Map 2 (1.43)</b> ผลต่างถึง +0.89 Rating — สะท้อน \"Firepower Swing\" ของ PRX"
      ],
      pull: "\"GE เมาหมัดหนักจนทำอะไรไม่ได้ Flawless Round ของ PRX ต่อเนื่อง\" — Round Flow แสดง <b>PRX defense first half 9/12 (75%)</b> รวมถึง streak rd 6-12 ที่ PRX ป้องไซต์ได้ 7 ราวด์ติด · สกอร์ครึ่ง 9-3 PRX นำ",
      stats: [
        {value:"9 / 12",label:"PRX Defense ครึ่งแรก · 75% Stomp"},
        {value:"+0.89",label:"Jinggg Rating Swing Map 1 → Map 2"},
        {value:"0.47",label:"PatMen Lotus Rating · ต่ำสุดทั้งแมตช์"}
      ]
    },
    {
      title: "Map 3 · Pearl — \"It's over\" PRX สวิงกลับสู่ฟอร์มแย่",
      sub: "เชื่อมโยงกับ Stats: PRX Attack 3/12 (25%) · invy R 0.37 · Autumn 1.58 / PatMen 1.49 / Kr1stal 1.33",
      paragraphs: [
        "มาแมพสามอย่าง <b>Pearl</b> เหมือน GE Reset จากที่เมาหมัดมา — แต่กลายเป็น PRX ที่<b>สวิงกลับสู่ฟอร์มแย่ แย่กว่าเดิมด้วยซ้ำ</b> เต็มไปด้วยความใจร้อน ติดวัด Firepower ไม่ถึง",
        "ตัวเลขโครตชัด: <b>PRX attack first half ชนะแค่ 3/12 (25%)</b> · <b>invy พังหนัก Rating 0.37</b> 4K/16D เป็นสถิติแย่ที่สุดในแมตช์ · d4v41 ดรอปจาก 1.23 → 0.61 · Jinggg 1.43 → 0.75 — ทุกคนแกว่งทั้งหมด"
      ],
      pull: "\"มีจังหวะแพ้ 1v3 ให้ Kr1stal เป็นหลักฐานชิ้นสำคัญว่า PRX หลุดไปแล้ว ถึงขั้นที่โค้ช Alecks ยังอุทาน 'It's over'\" — ตัวเลข <b>Kr1stal Killjoy R 1.33 / +6 K-D</b> · GE 4 คนได้ Rating 1.14+ พร้อมกัน เป็นการ Counter-Stomp คืนสมบูรณ์",
      stats: [
        {value:"3 / 12",label:"PRX Attack ครึ่งแรก · 25% Win Rate"},
        {value:"0.37",label:"invy Rating · ต่ำสุดในแมตช์"},
        {value:"1.58",label:"Autumn Phoenix · MVP ของแมพ"}
      ]
    },
    {
      title: "Paper Rex — ปัญหาเรื้อรังเรื่อง \"Consistency\"",
      sub: "เชื่อมโยงกับ Stats: Team Rating swing 0.88 (M1) → 1.26 (M2) → 0.74 (M3) · ความเหวี่ยง ±0.52",
      paragraphs: [
        "สิ่งที่ PRX แก้ยังไง ก็แก้ไม่หายสักที กับเรื่อง<b>ฟอร์มสวิงซ้ายๆ ขวาๆ แย่ๆ ดีๆ สลับกันไป</b> ผมก็ไม่รู้จะอธิบายยังไงเหมือนกัน ถ้ามันเกิดขึ้นชั่วคราว ก็คงไม่ว่าอะไร แต่นี้ <b>เป็นมาทุกยุค ทุกสมัย</b>",
        "ตัวเลขยืนยัน: <b>Team Rating M1=0.88 → M2=1.26 → M3=0.74</b> swing ±0.52 ระหว่างแมพ ทั้งที่เป็นทีมเดียวกัน วันเดียวกัน"
      ],
      pull: "ผมคิดว่าจุดเปลี่ยนของ PRX คงเป็นเอา <b>Panda</b> ที่เป็น Performance Coach กลับมานั่งอีกครั้ง · PRX ต้องหาวิธีทำให้เล่นได้สม่ำเสมอ — Lotus 13-6 พิสูจน์ ceiling แล้ว แต่ floor ก็ต่ำได้สุดๆ เช่นกัน"
    },
    {
      title: "Global Esports — Step-up ของ Autumn และ Kr1stal",
      sub: "เชื่อมโยงกับ Stats: Autumn 50K รวม 3 แมพ · Kr1stal Map 2 R 1.13 (เกมที่ทีมพ่าย) · PatMen Map 3 R 1.49",
      paragraphs: [
        "ในส่วนของ GE มารอบนี้ก็ตอกย้ำว่าความสม่ำเสมอไม่พอ — มันทำให้เห็นว่า <b>ถ้า PatMen ไม่มา ยังพอมีคน Step up เล่นแบกแทนได้</b> เช่น <b>Autumn</b> และ <b>Kr1stal</b>",
        "ตัวเลขยืนยัน: <b>Autumn รวม 3 แมพได้ 50K (22+10+18) Rating เฉลี่ย 1.29</b> สม่ำเสมอกว่าทุกคน · ที่น่าตกใจคือ <b>Kr1stal</b> เพราะถ้าพูดด้วย Firepower เพียวๆ เขาเป็นคนยิงไม่แม่นมาก (HS% 16% ใน Map 1) แต่ใน Map 2 ที่ทีมพ่ายแพ้ Kr1stal กลับเป็น <b>top fragger ของ GE Rating 1.13 / 17K</b>"
      ],
      pull: "เขาคือคีย์แมนหลักในการแข่งวันนี้ ไม่แปลกใจที่ผมกล้าพูดเต็มปาก — <b>การไป London รอบนี้ของ GE สมควรแล้ว</b>",
      stats: [
        {value:"50K",label:"Autumn รวม 3 แมพ · top fragger ทั้งทีม"},
        {value:"1.49",label:"PatMen Map 3 · Counter-Stomp Pearl"},
        {value:"2-1",label:"GE → London · Step up เป็นทีมเหนียวแน่น"}
      ]
    },
    {
      title: "Verdict",
      paragraphs: [
        "สกอร์ <b>1-2</b> สะท้อน Gap ที่แท้จริง — ไม่ใช่เรื่อง Skill แต่เรื่อง <b>Consistency</b> · PRX มี ceiling สูงพอจะ Stomp GE ใน Lotus แต่ floor ต่ำพอจะแพ้ 5-13 ใน Pearl ในวันเดียวกัน",
        "PRX ต้องแก้สามอย่าง: <b>(1)</b> Performance Coach กลับมา, <b>(2)</b> Mental ของผู้เล่น เมื่อแพ้ ใจร้อน วัด Firepower แทน Teamwork, <b>(3)</b> Floor — เพดานสูงไม่พอ ถ้าพื้นต่ำเกินไป"
      ]
    }
  ]
};
