window.matchData = {
  meta: { event: "VCT 2026 · Pacific · Stage 1", stage: "Playoffs · Lower Round 1", date: "10 May 2026", format: "Best of 3" },
  teams: {
    t1: { name: "Kiwoom DRX", tag: "KOREA · KRX", shortTag: "KRX", logo: "Kiwoom DRX/logo.png", color: "#3aa9ff", colorRgb: "58,169,255", score: 2, isWinner: true },
    t2: { name: "Nongshim RedForce", tag: "KOREA · NS", shortTag: "NS", logo: "NS/logo.png", color: "#ff4655", colorRgb: "255,70,85", score: 1, isWinner: false }
  },
  vetoDesc: "NS แบน Fracture เปิดเกมแบน · KRX ตอบกลับด้วยการแบน Breeze · NS เลือก Pearl ที่พวกเขาคุมได้ในเมต้านี้ · KRX เลือก Split · เหลือ Haven เป็นแมพ Decider",
  veto: [
    { team: "t2", action: "ban", map: "fracture", mapFile: "fracture.avif" },
    { team: "t1", action: "ban", map: "breeze", mapFile: "breeze.avif" },
    { team: "t2", action: "pick", map: "pearl" },
    { team: "t1", action: "pick", map: "split", mapFile: "split.webp" },
    { team: "t2", action: "ban", map: "lotus", mapFile: "lotus.avif" },
    { team: "t1", action: "ban", map: "ascent", mapFile: "ascent.jpg" },
    { team: null, action: "left", map: "haven", note: "Decider · เกมยาว 22 round จบที่ KRX 13-9" }
  ],
  maps: [
    {
      name: "Pearl",
      file: "map data/pearl.avif",
      pickedBy: "t2",
      duration: "1:01:51",
      score: { t1: 11, t2: 13 },
      sectionTitle: "Map 1 · Pearl",
      sectionDesc: "NS Pick — กลับสู่แผนเดิม Dambi Phoenix + Francis Neon ใช้ความโกลาหลฝั่งกันถล่ม KRX จบครึ่งแรก 8-4 NS นำ",
      composition: {
        t1: [{name:"HYUNMIN",agent:"jett"},{name:"free1ng",agent:"tejo"},{name:"yong",agent:"killjoy"},{name:"BeYN",agent:"kayo"},{name:"MaKo",agent:"astra"}],
        t2: [{name:"Dambi",agent:"phoenix"},{name:"Francis",agent:"neon"},{name:"Ivy",agent:"chamber"},{name:"Rb",agent:"astra"},{name:"Xross",agent:"fade"}]
      },
      stats: {
        t1: [
          {name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"jett",r:1.35,acs:277,k:25,d:18,a:1,kdDiff:7,kast:75,adr:172,hs:34,fk:6,fd:1,isTop:true},
          {name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"tejo",r:1.07,acs:200,k:16,d:16,a:6,kdDiff:0,kast:83,adr:145,hs:23,fk:1,fd:2},
          {name:"yong",photo:"noprofile.png",agent:"killjoy",r:1.00,acs:214,k:17,d:17,a:8,kdDiff:0,kast:79,adr:157,hs:28,fk:2,fd:3},
          {name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"kayo",r:0.90,acs:158,k:12,d:17,a:17,kdDiff:-5,kast:92,adr:102,hs:35,fk:2,fd:3},
          {name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"astra",r:0.88,acs:150,k:12,d:15,a:13,kdDiff:-3,kast:79,adr:109,hs:28,fk:2,fd:2}
        ],
        t2: [
          {name:"Dambi",photo:"NS/dambi.png",agent:"phoenix",r:1.30,acs:267,k:24,d:18,a:8,kdDiff:6,kast:54,adr:172,hs:27,fk:3,fd:4,isTop:true},
          {name:"Ivy",photo:"NS/ivy.png",agent:"chamber",r:1.20,acs:186,k:17,d:14,a:4,kdDiff:3,kast:71,adr:123,hs:22,fk:2,fd:2},
          {name:"Rb",photo:"NS/rb.png",agent:"astra",r:0.99,acs:120,k:9,d:10,a:14,kdDiff:-1,kast:83,adr:71,hs:21,fk:0,fd:1},
          {name:"Francis",photo:"NS/francis.png",agent:"neon",r:0.79,acs:264,k:21,d:22,a:3,kdDiff:-1,kast:67,adr:151,hs:11,fk:5,fd:2},
          {name:"Xross",photo:"NS/xcross.png",agent:"fade",r:0.68,acs:150,k:12,d:18,a:6,kdDiff:-6,kast:71,adr:112,hs:26,fk:1,fd:4}
        ]
      },
      rounds: [["t2","ct"],["t2","ct"],["t2","ct"],["t2","ct"],["t1","t"],["t1","t"],["t1","t"],["t2","ct"],["t2","ct"],["t1","t"],["t2","ct"],["t2","ct"],["t2","t"],["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"],["t2","t"],["t2","t"]],
      sideBreakdown: [
        {team:"t1",label:"KRX Attack",note:"First Half · Rounds 1–12",value:"4 / 12"},
        {team:"t2",label:"NS Defense",note:"First Half · 67% Win Rate",value:"8 / 12"},
        {team:"t1",label:"KRX Defense",note:"Second Half · 7-streak rd 16–22",value:"7 / 12"},
        {team:"t2",label:"NS Attack",note:"Second Half · จาก 11 ถึง 13 หืดขึ้นคอ",value:"5 / 12"}
      ],
      entryDuels: [
        {team:"t1",name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"Jett",fk:6,fd:1},
        {team:"t2",name:"Francis",photo:"NS/francis.png",agent:"Neon",fk:5,fd:2},
        {team:"t2",name:"Dambi",photo:"NS/dambi.png",agent:"Phoenix",fk:3,fd:4},
        {team:"t1",name:"yong",photo:"noprofile.png",agent:"Killjoy",fk:2,fd:3},
        {team:"t1",name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"Kayo",fk:2,fd:3},
        {team:"t1",name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"Astra",fk:2,fd:2},
        {team:"t2",name:"Ivy",photo:"NS/ivy.png",agent:"Chamber",fk:2,fd:2},
        {team:"t1",name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"Tejo",fk:1,fd:2},
        {team:"t2",name:"Xross",photo:"NS/xcross.png",agent:"Fade",fk:1,fd:4},
        {team:"t2",name:"Rb",photo:"NS/rb.png",agent:"Astra",fk:0,fd:1}
      ],
      entryInsight: "HYUNMIN Jett เปิดเกมเก่งสุดของแมทช์ (6 FK / 1 FD) แต่เปิดราวด์ฝั่งบุก KRX เก็บได้แค่ 4 / 12 — สะท้อนว่า Post-plant ของ NS (Astra + Chamber + Fade) แน่นเกินกว่าจะปลดล็อกได้ Francis Neon เปิดราวด์ 5 ครั้ง ก่อนสร้างความโกลาหลฝั่งกันให้ทีม"
    },
    {
      name: "Split",
      file: "map data/split.webp",
      pickedBy: "t1",
      duration: "42:22",
      score: { t1: 13, t2: 6 },
      sectionTitle: "Map 2 · Split",
      sectionDesc: "KRX Pick — Hyunmin Jett ระเบิดฟอร์ม R 1.75 ACS 298 · NS หวนสู่ Francis Yoru เกมจบเร็ว 13-6 ครึ่งแรก 8-4 KRX",
      composition: {
        t1: [{name:"HYUNMIN",agent:"jett"},{name:"MaKo",agent:"astra"},{name:"BeYN",agent:"skye"},{name:"free1ng",agent:"raze"},{name:"yong",agent:"vyse"}],
        t2: [{name:"Francis",agent:"yoru"},{name:"Dambi",agent:"neon"},{name:"Ivy",agent:"viper"},{name:"Rb",agent:"omen"},{name:"Xross",agent:"fade"}]
      },
      stats: {
        t1: [
          {name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"jett",r:1.75,acs:298,k:21,d:10,a:7,kdDiff:11,kast:79,adr:225,hs:38,fk:6,fd:0,isTop:true},
          {name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"astra",r:1.42,acs:247,k:17,d:10,a:11,kdDiff:7,kast:84,adr:139,hs:27,fk:1,fd:1},
          {name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"skye",r:1.29,acs:212,k:15,d:11,a:12,kdDiff:4,kast:84,adr:120,hs:33,fk:1,fd:2},
          {name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"raze",r:1.17,acs:197,k:15,d:10,a:3,kdDiff:5,kast:79,adr:120,hs:16,fk:2,fd:1},
          {name:"yong",photo:"noprofile.png",agent:"vyse",r:0.80,acs:152,k:9,d:11,a:5,kdDiff:-2,kast:74,adr:106,hs:22,fk:2,fd:3}
        ],
        t2: [
          {name:"Francis",photo:"NS/francis.png",agent:"yoru",r:1.02,acs:214,k:15,d:14,a:4,kdDiff:1,kast:63,adr:141,hs:31,fk:4,fd:5,isTop:true},
          {name:"Xross",photo:"NS/xcross.png",agent:"fade",r:0.77,acs:155,k:8,d:16,a:8,kdDiff:-8,kast:58,adr:113,hs:21,fk:0,fd:1},
          {name:"Rb",photo:"NS/rb.png",agent:"omen",r:0.67,acs:124,k:9,d:14,a:3,kdDiff:-5,kast:68,adr:80,hs:16,fk:0,fd:0},
          {name:"Ivy",photo:"NS/ivy.png",agent:"viper",r:0.66,acs:150,k:11,d:14,a:1,kdDiff:-3,kast:63,adr:105,hs:30,fk:1,fd:3},
          {name:"Dambi",photo:"NS/dambi.png",agent:"neon",r:0.47,acs:154,k:9,d:19,a:5,kdDiff:-10,kast:58,adr:102,hs:10,fk:2,fd:3}
        ]
      },
      rounds: [["t1","t"],["t1","t"],["t2","ct"],["t1","t"],["t2","ct"],["t2","ct"],["t1","t"],["t1","t"],["t1","t"],["t1","t"],["t1","t"],["t2","ct"],["t1","ct"],["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t1","ct"],["t1","ct"]],
      sideBreakdown: [
        {team:"t1",label:"KRX Attack",note:"First Half · 67% Win Rate",value:"8 / 12"},
        {team:"t2",label:"NS Defense",note:"First Half · ตามไม่ทันแผน Jett",value:"4 / 12"},
        {team:"t1",label:"KRX Defense",note:"Second Half · ปิดเกม rd 19",value:"5 / 7"},
        {team:"t2",label:"NS Attack",note:"Second Half · 2 / 7 — จบเร็ว",value:"2 / 7"}
      ],
      entryDuels: [
        {team:"t1",name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"Jett",fk:6,fd:0},
        {team:"t2",name:"Francis",photo:"NS/francis.png",agent:"Yoru",fk:4,fd:5},
        {team:"t1",name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"Raze",fk:2,fd:1},
        {team:"t1",name:"yong",photo:"noprofile.png",agent:"Vyse",fk:2,fd:3},
        {team:"t2",name:"Dambi",photo:"NS/dambi.png",agent:"Neon",fk:2,fd:3},
        {team:"t1",name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"Astra",fk:1,fd:1},
        {team:"t1",name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"Skye",fk:1,fd:2},
        {team:"t2",name:"Ivy",photo:"NS/ivy.png",agent:"Viper",fk:1,fd:3},
        {team:"t2",name:"Xross",photo:"NS/xcross.png",agent:"Fade",fk:0,fd:1},
        {team:"t2",name:"Rb",photo:"NS/rb.png",agent:"Omen",fk:0,fd:0}
      ],
      entryInsight: "HYUNMIN ระเบิด FK 6 / FD 0 — ไม่ตายเปิดราวด์เลย! Francis Yoru เปิดราวด์ 4 ครั้ง แต่ FD 5 ครั้ง (ติดลบครั้งแรกของแมทช์) สะท้อนว่า KRX อ่าน Gatecrash 15s ออก เดินจังหวะหลังวาปหมดทุกครั้ง"
    },
    {
      name: "Haven (Decider)",
      file: "map data/haven.jpg",
      pickedBy: null,
      duration: "49:35",
      score: { t1: 13, t2: 9 },
      sectionTitle: "Map 3 · Haven (Decider)",
      sectionDesc: "Yong Cypher กลับมาแก้ตัว R 1.38 / 21K · KRX ครึ่งแรก 10-2 ก่อนปล่อย NS ตี 7 ราวด์ติด Rb (Omen) แบกเดี่ยวจน 9-10 ก่อน KRX ปิดเกมที่ rd 22",
      composition: {
        t1: [{name:"HYUNMIN",agent:"jett"},{name:"MaKo",agent:"omen"},{name:"free1ng",agent:"neon"},{name:"BeYN",agent:"sova"},{name:"yong",agent:"cypher"}],
        t2: [{name:"Dambi",agent:"neon"},{name:"Francis",agent:"yoru"},{name:"Rb",agent:"omen"},{name:"Ivy",agent:"killjoy"},{name:"Xross",agent:"sova"}]
      },
      stats: {
        t1: [
          {name:"yong",photo:"noprofile.png",agent:"cypher",r:1.38,acs:225,k:21,d:11,a:1,kdDiff:10,kast:77,adr:149,hs:39,fk:2,fd:3,isTop:true},
          {name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"omen",r:1.30,acs:232,k:17,d:12,a:8,kdDiff:5,kast:91,adr:139,hs:17,fk:4,fd:3},
          {name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"neon",r:1.14,acs:219,k:18,d:14,a:4,kdDiff:4,kast:86,adr:140,hs:28,fk:1,fd:1},
          {name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"jett",r:0.96,acs:211,k:15,d:16,a:5,kdDiff:-1,kast:77,adr:141,hs:18,fk:2,fd:2},
          {name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"sova",r:0.87,acs:152,k:12,d:14,a:6,kdDiff:-2,kast:68,adr:94,hs:29,fk:1,fd:3}
        ],
        t2: [
          {name:"Rb",photo:"NS/rb.png",agent:"omen",r:1.39,acs:239,k:20,d:14,a:10,kdDiff:6,kast:73,adr:139,hs:19,fk:1,fd:1,isTop:true},
          {name:"Dambi",photo:"NS/dambi.png",agent:"neon",r:0.98,acs:227,k:15,d:19,a:12,kdDiff:-4,kast:86,adr:153,hs:28,fk:4,fd:3},
          {name:"Xross",photo:"NS/xcross.png",agent:"sova",r:0.87,acs:156,k:12,d:14,a:7,kdDiff:-2,kast:73,adr:103,hs:27,fk:0,fd:2},
          {name:"Francis",photo:"NS/francis.png",agent:"yoru",r:0.56,acs:158,k:10,d:20,a:8,kdDiff:-10,kast:50,adr:102,hs:9,fk:4,fd:3},
          {name:"Ivy",photo:"NS/ivy.png",agent:"killjoy",r:0.53,acs:136,k:10,d:16,a:4,kdDiff:-6,kast:68,adr:89,hs:21,fk:3,fd:1}
        ]
      },
      rounds: [["t1","t"],["t1","t"],["t1","t"],["t1","t"],["t1","t"],["t1","t"],["t2","ct"],["t1","t"],["t1","t"],["t1","t"],["t2","ct"],["t1","t"],["t1","ct"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t1","ct"],["t1","ct"]],
      sideBreakdown: [
        {team:"t1",label:"KRX Attack",note:"First Half · 83% Win Rate (10/12)",value:"10 / 12"},
        {team:"t2",label:"NS Defense",note:"First Half · พังทั้งฝั่ง · 2 / 12",value:"2 / 12"},
        {team:"t1",label:"KRX Defense",note:"Second Half · เสีย 7 ราวด์ติดให้ Rb",value:"3 / 10"},
        {team:"t2",label:"NS Attack",note:"Second Half · ไล่จาก 2 ถึง 9 · Rb แบก",value:"7 / 10"}
      ],
      entryDuels: [
        {team:"t2",name:"Dambi",photo:"NS/dambi.png",agent:"Neon",fk:4,fd:3},
        {team:"t1",name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"Omen",fk:4,fd:3},
        {team:"t2",name:"Francis",photo:"NS/francis.png",agent:"Yoru",fk:4,fd:3},
        {team:"t2",name:"Ivy",photo:"NS/ivy.png",agent:"Killjoy",fk:3,fd:1},
        {team:"t1",name:"yong",photo:"noprofile.png",agent:"Cypher",fk:2,fd:3},
        {team:"t1",name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"Jett",fk:2,fd:2},
        {team:"t1",name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"Neon",fk:1,fd:1},
        {team:"t2",name:"Rb",photo:"NS/rb.png",agent:"Omen",fk:1,fd:1},
        {team:"t1",name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"Sova",fk:1,fd:3},
        {team:"t2",name:"Xross",photo:"NS/xcross.png",agent:"Sova",fk:0,fd:2}
      ],
      entryInsight: "Haven เปิดราวด์สูสีกว่ามาก ทั้งสองทีมแบ่ง FK ใกล้เคียง — แต่ Francis Yoru อีกแล้วที่ FD ดึงจังหวะ KRX ฝั่งบุกครึ่งแรก 10/12 = 83% สะท้อนว่า Setup ของ NS ฝั่งกัน ไม่ work เลยเมื่อ Francis Yoru อยู่ในระบบ"
    }
  ],
  radar: {
    sectionDesc: "เปรียบเทียบค่าเฉลี่ยทั้งทีม 3 แมพ — KRX มี Firepower เหนือกว่าชัดในทุกแกน ยกเว้น KAST ที่ NS ตามใกล้เคียง · HS% สะท้อนภาพคนที่ตัดเด็ดได้แม่น (KRX 28% vs NS 21%)",
    t1: { rating: 1.15, acs: 209, kast: 80, adr: 137, hs: 28, kpp: 16.1 },
    t2: { rating: 0.86, acs: 180, kast: 67, adr: 117, hs: 21, kpp: 13.5 },
    insights: [
      {team:"t1",label:"AVG TEAM RATING",value:"1.15",delta:"vs NS 0.86 · Δ +0.29"},
      {team:"t1",label:"AVG ACS",value:"209",delta:"vs NS 180 · Δ +29"},
      {team:"t1",label:"AVG KAST",value:"80%",delta:"vs NS 67% · Δ +13pt"},
      {team:"t1",label:"AVG ADR",value:"137",delta:"vs NS 117 · Δ +20"},
      {team:"t1",label:"AVG HS%",value:"28%",delta:"vs NS 21% · Δ +7pt"},
      {team:"t1",label:"KILLS / PLAYER / MAP",value:"16.1",delta:"vs NS 13.5 · Δ +2.6"}
    ],
    note: "<b style=\"color:#fff\">KRX เหนือกว่าทุกแกน</b> — Rating Δ +0.29 / KAST Δ +13pt บ่งชี้ว่าเล่นเป็นทีมสม่ำเสมอกว่า NS · ฝั่ง NS รายตัวที่ดึงค่าเฉลี่ยลงคือ <b>Francis (Yoru)</b> และ <b>Xross (Fade)</b> ที่ Rating ต่ำกว่า 0.80 ทั้ง 3 แมพ ขณะที่ <b>Dambi</b> และ <b>Rb</b> มีจังหวะระเบิดได้บางแมพแต่ไม่พอแบกทีม"
  },
  killMatrix: {
    desc: "ทั้งแมตช์รวม 3 แมพ — Hyunmin คือคนที่ KRX ปั้นได้ดีสุด คุม matchup สำคัญติดบวก 4 / 5 รวม +17 · Francis (Yoru/Neon) แพ้ทุก matchup กับ KRX ติดลบหมด",
    cols: [
      {name:"Dambi",photo:"NS/dambi.png"},
      {name:"Xross",photo:"NS/xcross.png"},
      {name:"Rb",photo:"NS/rb.png"},
      {name:"Francis",photo:"NS/francis.png"},
      {name:"Ivy",photo:"NS/ivy.png"}
    ],
    rows: [
      {name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",values:[{k:14,opK:10,diff:4},{k:8,opK:5,diff:3},{k:12,opK:13,diff:-1},{k:18,opK:9,diff:9},{k:9,opK:7,diff:2}]},
      {name:"MaKo",photo:"Kiwoom DRX/Mako.png",values:[{k:9,opK:11,diff:-2},{k:9,opK:5,diff:4},{k:7,opK:7,diff:0},{k:7,opK:6,diff:1},{k:14,opK:8,diff:6}]},
      {name:"free1ng",photo:"Kiwoom DRX/free1ing.png",values:[{k:13,opK:12,diff:1},{k:13,opK:9,diff:4},{k:8,opK:7,diff:1},{k:7,opK:8,diff:-1},{k:8,opK:4,diff:4}]},
      {name:"yong",photo:"noprofile.png",values:[{k:9,opK:5,diff:4},{k:13,opK:5,diff:8},{k:5,opK:8,diff:-3},{k:12,opK:12,diff:0},{k:8,opK:9,diff:-1}]},
      {name:"BeYN",photo:"Kiwoom DRX/beyn.png",values:[{k:11,opK:10,diff:1},{k:5,opK:8,diff:-3},{k:6,opK:3,diff:3},{k:12,opK:11,diff:1},{k:5,opK:10,diff:-5}]}
    ],
    statLinks: [
      {value:"+17",label:"HYUNMIN total diff vs NS · ดีสุดในทีม KRX"},
      {value:"+9",label:"HYUNMIN vs Francis · matchup ที่กดเด็ดสุด"},
      {value:"+8",label:"yong vs Xross · กลับมาแก้ตัวได้สมราคา"},
      {value:"−6",label:"Francis (Yoru/Neon) total diff · แย่สุดของ NS"}
    ]
  },
  analysis: [
    {
      title: "Map 1 · Pearl — NS เกือบชนะแบบสบาย แต่ Choke ใส่บอม B",
      sub: "เชื่อมโยงกับ Stats: Dambi 24K Phoenix · Hyunmin 25K Jett · KRX 7-streak rd 16–22 ตี 11-11 ก่อนปล่อย NS ปิดที่ rd 24",
      paragraphs: [
        "ใน <b>Pearl (NS Pick)</b> NS เลือกกลับสู่แผนเดิม <b>Dambi Phoenix + Francis Neon</b> และเล่นแผน 4-1 ดันออกมาทุกครั้ง อาศัยความโกลาหลของฝั่งกัน — และมันได้ผลระดับหนึ่ง <b>Dambi (Phoenix) Rating 1.30 / 24K / ACS 267</b> ระเบิดเปิดเกมหนัก KAST 54% สะท้อนว่ายอมแลกเพื่อสร้างความปั่นป่วน",
        "KRX พยายามใช้ Post-plant setup จาก <b>Tejo + Killjoy + Astra + Kayo</b> แต่ NS เก็บของหนักได้เยอะ ทำให้ทีมต้องจ่ายของก่อนถึงไซต์มหาศาล โอกาสวินส่วนใหญ่มาจาก <b>Hyunmin (Jett) 25K / +7 K-D / ACS 277</b> ที่ยิงชนะเฉยๆ แต่ก็น้อยครั้งที่จะสำเร็จ — KRX ฝั่งบุกครึ่งแรกได้แค่ <b>4 / 12 (33%)</b> จบครึ่งแรก 4-8 NS นำ",
        "ครึ่งหลังคือฉาก <b>NS Choke</b> สุดคลาสสิก — NS ดันไปถึง 11-4 (พื้นที่ตั้ง Match Point) แต่ Round Flow บอกชัด: <b>R16-22 KRX กันได้ 7 ราวด์ติด</b> ตี 11-11 เพราะ NS เจาะแต่ <b>B site ไม่หยุด</b> ให้ KRX อ่านแผน Defensive setup เดิมๆ ออก",
        "พอ <b>Round 24</b> NS เพิ่งนึกได้ว่ามีสองบอมไซต์ จึงสลับไปตี <b>A site</b> และตีเข้าได้ในที่สุด — ปิด Pearl ที่ <b>13-11</b> แบบลากเลือด"
      ],
      pull: "\"NS choke หนักมาก ขึ้น 11-4 ก่อนปล่อย KRX กลับมา 11-11\" — สะท้อนผ่าน Round Flow: <b>NS Attack ทำได้ 5 / 12</b> แต่ 4 ใน 5 ราวด์มาก่อน KRX สลับฝั่งกัน · KRX Defense ไล่ <b>7 ราวด์ติด</b> ก่อน NS หาทางตี A เจอ",
      stats: [
        {value:"+7",label:"Hyunmin K-D · เดอะแบก KRX ใน Pearl"},
        {value:"7-streak",label:"KRX Defense rd 16-22 ตี 11-11"},
        {value:"54%",label:"Dambi KAST · ยอมแลกเพื่อสร้างโอกาส"}
      ]
    },
    {
      title: "Map 2 + Map 3 · Francis Yoru คือสาเหตุที่ NS แพ้",
      sub: "เชื่อมโยงกับ Stats: Francis Yoru — Split R 1.02 (FD 5), Haven R 0.56 (FD 3 / KAST 50%) · KRX อ่าน Gatecrash 15s ออกหมด",
      paragraphs: [
        "ทั้ง <b>Split (KRX Pick)</b> และ <b>Haven (Decider)</b> NS หวนคืนสู่ <b>Francis Yoru</b> Meta ดั้งเดิมที่เคยพาพวกเขาได้แชมป์ Master — ปัญหาคือ Yoru โดน Riot เนิฟ <b>Gatecrash เหลือ 15 วินาที</b> ตั้งสร้างเสร็จแค่เดินมาหน้าไซต์ก็หมดแล้ว",
        "ใน <b>Split</b> Hyunmin Jett ระเบิดฟอร์ม <b>Rating 1.75 / ACS 298 / 21K-10D / 38% HS / FK 6 FD 0</b> — ไม่ตายเปิดราวด์เลยทั้งแมพ! ส่วน <b>MaKo (Astra) 1.42</b>, <b>BeYN (Skye) 1.29</b>, <b>free1ng (Raze) 1.17</b> ดึง <b>3 / 5 ของทีมเป็น Rating ≥ 1.17</b> KRX ฝั่งบุกครึ่งแรก 8 / 12 (67%) ปิดเกมที่ Round 19 ได้สบาย",
        "<b>Haven</b> ยิ่งหนัก — Francis Yoru ตก <b>Rating 0.56 / 10K-20D / KAST แค่ 50% / HS 9%</b> สถิติแย่สุดของแมตช์ KRX อ่าน Yoru ออกแล้ว: <b>รอ 15-20 วินาที ให้ Gatecrash หมด ก่อนเดินเกม</b> — แค่นี้ Francis ก็ทำอะไรไม่ได้",
        "หลักฐานเชิงสถิติชัดที่สุดอยู่ใน <b>Kill Matchup Matrix</b> — Francis (รวม Yoru + Neon ทั้ง 3 แมพ) <b>ติดลบรวม −6</b> แพ้ matchup กับ Hyunmin ถึง <b>−9</b>, MaKo <b>+1</b>, free1ng <b>−1</b>, BeYN <b>+1</b>, yong <b>0</b>"
      ],
      pull: "<b>\"Yoru เนิฟจมดิน Value impact ไม่เหมือนแต่ก่อน\"</b> — สะท้อนผ่าน Francis Haven 50% KAST ต่ำที่สุดในแมตช์ · Split FD 5 ครั้ง (สูงสุดในเกม) · ในขณะที่ <b>Primmie (FS Jett-Op)</b> รอบที่แล้วพิสูจน์ว่า Op + Jett ยังคงทรงพลังกว่า Yoru เยอะ",
      stats: [
        {value:"0.56",label:"Francis Rating Haven · ต่ำสุดของแมตช์"},
        {value:"50%",label:"Francis KAST Haven · สถิติของผู้เล่นที่ไม่มี impact"},
        {value:"−6",label:"Francis Total Kill Diff · แย่สุดของ NS"}
      ]
    },
    {
      title: "การกลับมาของ Yong + Hyunmin Jett-spam",
      sub: "เชื่อมโยงกับ Stats: Yong Cypher Haven R 1.38 / 21K · Hyunmin Jett 3 maps avg R 1.35 / FK 14",
      paragraphs: [
        "หลังจากเกม FS รอบก่อน <b>Termi</b> ทดลองเอา <b>Hermes</b> ลงสนาม (Rating 0.58 / 0.81) ผลออกมาน่าผิดหวัง — รอบนี้ KRX กลับไปใช้ <b>Yong</b> ตามเดิม และเขา <b>ไม่ทำให้ผิดหวัง</b> โดยเฉพาะใน Haven ที่เล่น <b>Cypher Rating 1.38 / 21K-11D / +10 K-D / 39% HS</b> เป็น Top Fragger ของแมตช์",
        "เรื่อง <b>Firepower ของ Yong เหนือกว่า Hermes ชัด</b> — Hermes รอบที่แล้ว 5 / 5 matchup ติดลบ vs FS รวม −11 · รอบนี้ Yong matchup กับ NS ได้ <b>+8 (vs Xross)</b>, <b>+4 (vs Dambi)</b>, รวมทั้งทีม +8 — มีจังหวะให้คมเยอะมาก",
        "อีกการปรับคือให้ <b>Hyunmin เล่น Jett ทุกแมพ</b> — Pearl (1.35), Split (1.75), Haven (0.96) แม้ Haven จะตก แต่ค่าเฉลี่ยทั้งแมตช์ <b>Rating ≈ 1.35 / FK รวม 14 ครั้ง</b> สูงสุดของทีม Hyunmin คือคนที่สร้างจังหวะได้เปรียบให้ KRX ทุกแมตช์ของ Stage 1 นี้"
      ],
      pull: "\"การกลับมาของ Yong ที่รอบที่แล้วโดน Hermes แทน — Yong ไม่ทำให้ผิดหวัง\" · KRX มาถูกทางแล้ว แต่ยังพูดอะไรได้ยาก เพราะ <b>ชัยชนะครั้งนี้มาจาก NS เล่นแย่เสียเอง</b> มากกว่า KRX แสดงฟอร์มเหนือชั้น",
      stats: [
        {value:"1.38",label:"Yong Cypher Rating Haven · Top Fragger"},
        {value:"+8",label:"Yong vs Xross · matchup ระเบิด"},
        {value:"14 FK",label:"Hyunmin Jett รวม 3 แมพ · เปิดเกมสูงสุดทีม"}
      ]
    },
    {
      title: "Verdict — NS ไม่เข้าใจผู้เล่นในทีมตัวเอง",
      paragraphs: [
        "สกอร์ <b>2-1</b> สะท้อนว่า NS Choke จริงๆ — Pearl เกือบเอาชนะแบบสบาย แต่ปล่อย KRX กลับมา · Split + Haven หวนสู่ <b>Francis Yoru</b> Meta ที่ Riot เนิฟไปนาน ผลคือ Francis Rating <b>1.02 → 0.56</b> ลดลงเรื่อยๆ ตามจำนวนแมพ",
        "คำถามใหญ่ของ NS คือ — ทำไมไม่ลอง <b>Francis + Operator + Chamber/Jett</b> ตามแบบ <b>Primmie ของ FS</b> ที่พิสูจน์ไปแล้วว่า Op-Jett ยังเป็น Win Condition? Francis ก่อนหน้านี้ใช้ Op ได้แม่นและน่ากลัวมาก แต่ NS กลับให้เขาเล่น Neon / Yoru ที่จุดอ่อนชัดเจน",
        "<b>กรณีศึกษา Paper Rex</b> — ช่วงหนึ่ง Sliggy เคยทักว่าทำไมเอามือ Op ระดับโลกอย่าง <b>Something</b> ไปเล่น Breach / Brimstone? ปัจจุบัน PRX ปรับให้ Something เล่น <b>Jett + Operator</b> เป็นหลัก และเขากลายเป็น <b>Key Man</b> ของ PRX ยุคใหม่ทันที — NS ควรลองคิดในมุมนี้กับ Francis",
        "KRX ไปต่อ Lower Round 2 พร้อมการกลับมาของ <b>Yong</b> และ <b>Hyunmin Jett-spam</b> ที่เริ่มเข้ารูปเข้ารอย · NS ตกรอบ Stage 1 แบบ <b>Irony</b> — ทีมแชมป์ Master ที่ติดอยู่กับ Meta ของตัวเอง"
      ]
    }
  ]
};
