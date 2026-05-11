window.matchData = {
  meta: { event: "VCT 2026 · Pacific · Stage 1", stage: "Playoffs · Upper Round 1", date: "7 May 2026", format: "Best of 3" },
  teams: {
    t1: { name: "Rex Regum Qeon", tag: "INDONESIA · RRQ", shortTag: "RRQ", logo: "RRQ/logo.png", color: "#ff8b3d", colorRgb: "255,139,61", score: 0, isWinner: false },
    t2: { name: "Global Esports", tag: "INDIA · GE", shortTag: "GE", logo: "GE/logo.png", color: "#4cc9f0", colorRgb: "76,201,240", score: 2, isWinner: true }
  },
  vetoDesc: "GE เลือก Breeze เปิดเกมหวังใช้ระยะไกลเล่นเชิงกลยุทธ์ ส่วน RRQ เลือก Pearl เพื่อใช้ Firepower กดดัน",
  veto: [
    { team: "t2", action: "ban", map: "fracture" },
    { team: "t1", action: "ban", map: "split", mapFile: "split.webp" },
    { team: "t2", action: "pick", map: "breeze" },
    { team: "t1", action: "pick", map: "pearl" },
    { team: "t2", action: "ban", map: "lotus" },
    { team: "t1", action: "ban", map: "haven", mapFile: "haven.jpg" },
    { team: null, action: "left", map: "ascent", mapFile: "ascent.jpg", note: "Not played · จบเกมที่แมพ 2" }
  ],
  maps: [
    {
      name: "Breeze", file: "map data/breeze.avif", pickedBy: "t2", duration: "1:16:37",
      score: { t1: 11, t2: 13 },
      sectionTitle: "Map 1 · Breeze",
      sectionDesc: "GE Pick — เกมยาว 24 ราวด์ RRQ นำครึ่งแรก 7-5 แต่ GE คุม Mid-Round เก็บได้ 8/12 ในครึ่งหลังพลิกกลับมาชนะ",
      composition: {
        t1: [{name:"Kushy",agent:"sova"},{name:"xffero",agent:"viper"},{name:"crazyguy",agent:"kayo"},{name:"Jemkin",agent:"neon"},{name:"Monyet",agent:"harbor"}],
        t2: [{name:"UdoTan",agent:"neon"},{name:"PatMen",agent:"viper"},{name:"xavi8k",agent:"sage"},{name:"Kr1stal",agent:"sova"},{name:"Autumn",agent:"chamber"}]
      },
      stats: {
        t1: [
          {name:"Kushy",photo:"RRQ/kushy.png",agent:"sova",r:1.42,acs:271,k:23,d:15,a:7,kdDiff:8,kast:79,adr:199,hs:65,fk:3,fd:2,isTop:true},
          {name:"xffero",photo:"RRQ/xffero.png",agent:"viper",r:1.40,acs:314,k:26,d:18,a:8,kdDiff:8,kast:83,adr:201,hs:36,fk:2,fd:2},
          {name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"kayo",r:0.85,acs:195,k:16,d:19,a:10,kdDiff:-3,kast:67,adr:139,hs:20,fk:1,fd:2},
          {name:"Jemkin",photo:"RRQ/jemkin.png",agent:"neon",r:0.68,acs:160,k:13,d:19,a:3,kdDiff:-6,kast:58,adr:102,hs:42,fk:6,fd:6},
          {name:"Monyet",photo:"RRQ/monyet.png",agent:"harbor",r:0.65,acs:112,k:9,d:17,a:9,kdDiff:-8,kast:75,adr:74,hs:31,fk:0,fd:0}
        ],
        t2: [
          {name:"UdoTan",photo:"GE/Udotan.png",agent:"neon",r:1.26,acs:250,k:23,d:16,a:5,kdDiff:7,kast:79,adr:167,hs:30,fk:2,fd:1,isTop:true},
          {name:"PatMen",photo:"GE/Patmen.png",agent:"viper",r:1.19,acs:245,k:22,d:17,a:3,kdDiff:5,kast:71,adr:175,hs:43,fk:2,fd:2},
          {name:"xavi8k",photo:"GE/Xavi8k.png",agent:"sage",r:1.00,acs:164,k:14,d:15,a:8,kdDiff:-1,kast:71,adr:117,hs:19,fk:1,fd:2},
          {name:"Kr1stal",photo:"GE/Krystal.png",agent:"sova",r:0.80,acs:161,k:12,d:17,a:6,kdDiff:-5,kast:67,adr:118,hs:25,fk:2,fd:2},
          {name:"Autumn",photo:"GE/Autumn.png",agent:"chamber",r:0.70,acs:192,k:17,d:22,a:4,kdDiff:-5,kast:58,adr:111,hs:22,fk:5,fd:5}
        ]
      },
      rounds: [["t1","t"],["t1","t"],["t2","ct"],["t1","t"],["t2","ct"],["t1","t"],["t2","ct"],["t1","t"],["t1","t"],["t2","ct"],["t2","ct"],["t1","t"],["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t2","t"]],
      sideBreakdown: [
        {team:"t1",label:"RRQ Attack",note:"First Half · Rounds 1–12",value:"7 / 12"},
        {team:"t2",label:"GE Defense",note:"First Half · vs RRQ Attack",value:"5 / 12"},
        {team:"t1",label:"RRQ Defense",note:"Second Half · Rounds 13–24",value:"4 / 12"},
        {team:"t2",label:"GE Attack",note:"Second Half · 5-Round Streak rd 17–21",value:"8 / 12"}
      ],
      entryDuels: [
        {team:"t1",name:"Kushy",photo:"RRQ/kushy.png",agent:"Sova",fk:3,fd:2},
        {team:"t2",name:"UdoTan",photo:"GE/Udotan.png",agent:"Neon",fk:2,fd:1},
        {team:"t1",name:"xffero",photo:"RRQ/xffero.png",agent:"Viper",fk:2,fd:2},
        {team:"t2",name:"PatMen",photo:"GE/Patmen.png",agent:"Viper",fk:2,fd:2},
        {team:"t1",name:"Jemkin",photo:"RRQ/jemkin.png",agent:"Neon",fk:6,fd:6},
        {team:"t2",name:"Autumn",photo:"GE/Autumn.png",agent:"Chamber",fk:5,fd:5},
        {team:"t1",name:"Monyet",photo:"RRQ/monyet.png",agent:"Harbor",fk:0,fd:0},
        {team:"t1",name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"Kayo",fk:1,fd:2},
        {team:"t2",name:"xavi8k",photo:"GE/Xavi8k.png",agent:"Sage",fk:1,fd:2},
        {team:"t2",name:"Kr1stal",photo:"GE/Krystal.png",agent:"Sova",fk:2,fd:2}
      ],
      entryInsight: "Entry Duel สูสีมาก ไม่มีใครครองชัดเจน · Jemkin (Neon) เปิด/ตาย 6/6 — เน้นเข้าโถมแต่ไม่ได้ผล"
    },
    {
      name: "Pearl", file: "map data/pearl.avif", pickedBy: "t1", duration: "55:42",
      score: { t1: 10, t2: 13 },
      sectionTitle: "Map 2 · Pearl",
      sectionDesc: "RRQ Pick — แต่ Firepower เริ่มดรอป หาจังหวะบุกยาก ครึ่งแรกเสมอ 6-6 แล้ว GE คุมครึ่งหลังปิดเกม",
      composition: {
        t1: [{name:"Monyet",agent:"neon"},{name:"Kushy",agent:"skye"},{name:"Jemkin",agent:"chamber"},{name:"xffero",agent:"killjoy"},{name:"crazyguy",agent:"astra"}],
        t2: [{name:"Kr1stal",agent:"killjoy"},{name:"PatMen",agent:"fade"},{name:"Autumn",agent:"phoenix"},{name:"xavi8k",agent:"astra"},{name:"UdoTan",agent:"neon"}]
      },
      stats: {
        t1: [
          {name:"Monyet",photo:"RRQ/monyet.png",agent:"neon",r:1.20,acs:269,k:19,d:18,a:9,kdDiff:1,kast:65,adr:183,hs:21,fk:4,fd:3,isTop:true},
          {name:"Kushy",photo:"RRQ/kushy.png",agent:"skye",r:1.18,acs:213,k:15,d:15,a:14,kdDiff:0,kast:74,adr:150,hs:27,fk:0,fd:2},
          {name:"Jemkin",photo:"RRQ/jemkin.png",agent:"chamber",r:0.95,acs:161,k:14,d:15,a:3,kdDiff:-1,kast:78,adr:101,hs:25,fk:3,fd:3},
          {name:"xffero",photo:"RRQ/xffero.png",agent:"killjoy",r:0.89,acs:187,k:16,d:17,a:2,kdDiff:-1,kast:65,adr:127,hs:19,fk:2,fd:0},
          {name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"astra",r:0.85,acs:145,k:11,d:14,a:2,kdDiff:-3,kast:74,adr:91,hs:27,fk:3,fd:3}
        ],
        t2: [
          {name:"Kr1stal",photo:"GE/Krystal.png",agent:"killjoy",r:1.12,acs:246,k:21,d:15,a:1,kdDiff:6,kast:61,adr:171,hs:33,fk:1,fd:1,isTop:true},
          {name:"PatMen",photo:"GE/Patmen.png",agent:"fade",r:1.04,acs:209,k:17,d:16,a:5,kdDiff:1,kast:78,adr:136,hs:24,fk:3,fd:1},
          {name:"Autumn",photo:"GE/Autumn.png",agent:"phoenix",r:1.03,acs:180,k:14,d:13,a:3,kdDiff:1,kast:65,adr:128,hs:37,fk:3,fd:2},
          {name:"xavi8k",photo:"GE/Xavi8k.png",agent:"astra",r:0.94,acs:173,k:13,d:13,a:7,kdDiff:0,kast:70,adr:112,hs:15,fk:2,fd:2},
          {name:"UdoTan",photo:"GE/Udotan.png",agent:"neon",r:0.70,acs:183,k:14,d:18,a:5,kdDiff:-4,kast:57,adr:120,hs:18,fk:2,fd:6}
        ]
      },
      rounds: [["t1","t"],["t1","t"],["t2","ct"],["t2","ct"],["t2","ct"],["t1","t"],["t2","ct"],["t2","ct"],["t2","ct"],["t1","t"],["t1","t"],["t1","t"],["t2","t"],["t2","t"],["t1","ct"],["t2","t"],["t2","t"],["t2","t"],["t1","ct"],["t2","t"],["t1","ct"],["t1","ct"],["t2","t"]],
      sideBreakdown: [
        {team:"t1",label:"RRQ Attack",note:"First Half · Rounds 1–12",value:"6 / 12"},
        {team:"t2",label:"GE Defense",note:"First Half · ปิด Site ดี",value:"6 / 12"},
        {team:"t1",label:"RRQ Defense",note:"Second Half · 4–7 Rounds 13–23",value:"4 / 11"},
        {team:"t2",label:"GE Attack",note:"Second Half · เจาะ Site B rd 16 พลิกเกม",value:"7 / 11"}
      ],
      entryDuels: [
        {team:"t2",name:"PatMen",photo:"GE/Patmen.png",agent:"Fade",fk:3,fd:1},
        {team:"t1",name:"xffero",photo:"RRQ/xffero.png",agent:"Killjoy",fk:2,fd:0},
        {team:"t1",name:"Monyet",photo:"RRQ/monyet.png",agent:"Neon",fk:4,fd:3},
        {team:"t2",name:"Autumn",photo:"GE/Autumn.png",agent:"Phoenix",fk:3,fd:2},
        {team:"t1",name:"Jemkin",photo:"RRQ/jemkin.png",agent:"Chamber",fk:3,fd:3},
        {team:"t1",name:"crazyguy",photo:"RRQ/crazyguy.png",agent:"Astra",fk:3,fd:3},
        {team:"t2",name:"xavi8k",photo:"GE/Xavi8k.png",agent:"Astra",fk:2,fd:2},
        {team:"t2",name:"Kr1stal",photo:"GE/Krystal.png",agent:"Killjoy",fk:1,fd:1},
        {team:"t1",name:"Kushy",photo:"RRQ/kushy.png",agent:"Skye",fk:0,fd:2},
        {team:"t2",name:"UdoTan",photo:"GE/Udotan.png",agent:"Neon",fk:2,fd:6}
      ],
      entryInsight: "UdoTan ตายเปิดราวด์ 6 ครั้ง สูงสุดในแมพ — RRQ ทำได้ดีในการเปิด แต่จบราวด์ไม่ได้เพราะ GE Mid-Round adaptation"
    }
  ],
  radar: {
    sectionDesc: "เปรียบเทียบค่าเฉลี่ยทั้งทีมตลอด 2 แมพ — RRQ มี Firepower เหนือกว่าจริง แต่ KAST/ความสม่ำเสมอเสียเปรียบ GE",
    t1: { rating: 1.01, acs: 203, kast: 72, adr: 137, hs: 31, kpp: 16.2 },
    t2: { rating: 0.98, acs: 200, kast: 68, adr: 135, hs: 27, kpp: 16.7 },
    insights: [
      {team:"t1",label:"AVG TEAM RATING",value:"1.01",delta:"vs GE 0.98 · Δ +0.03"},
      {team:"t1",label:"AVG ACS",value:"203",delta:"vs GE 200 · Firepower edge"},
      {team:"t1",label:"AVG HS%",value:"31%",delta:"vs GE 27% · ยิงแม่นกว่า"},
      {team:"t2",label:"AVG KAST",value:"68%",delta:"RRQ 72% · GE สม่ำเสมอเล็กน้อย"},
      {team:"t2",label:"PEARL FIREPOWER GAP",value:"−3 ACS",delta:"RRQ ดรอปจาก Map 1 ชัด"},
      {team:"t2",label:"SERIES RESULT",value:"2–0",delta:"Strategy beat raw Firepower"}
    ],
    note: "RRQ มี <b style=\"color:#fff\">Firepower สูงกว่าจริง</b> (Rating, ACS, HS% เหนือกว่าทุกแมพ) แต่ GE ใช้ <b style=\"color:#fff\">การเดินเกมและ Mid-Round adaptation</b> ทำให้ผลลัพธ์ราวด์ตกเป็นของ GE"
  },
  killMatrix: {
    desc: "ใครเอาชนะใครรวมทั้งแมตช์ — Jemkin Stomp ทุกคน DFM",
    cols: [
      {name:"PatMen",photo:"GE/Patmen.png"},
      {name:"UdoTan",photo:"GE/Udotan.png"},
      {name:"Autumn",photo:"GE/Autumn.png"},
      {name:"Kr1stal",photo:"GE/Krystal.png"},
      {name:"xavi8k",photo:"GE/Xavi8k.png"}
    ],
    rows: [
      {name:"xffero",photo:"RRQ/xffero.png",values:[{k:8,opK:7,diff:1},{k:11,opK:6,diff:5},{k:11,opK:8,diff:3},{k:6,opK:11,diff:-5},{k:6,opK:3,diff:3}]},
      {name:"Kushy",photo:"RRQ/kushy.png",values:[{k:8,opK:7,diff:1},{k:6,opK:9,diff:-3},{k:7,opK:4,diff:3},{k:9,opK:7,diff:2},{k:8,opK:3,diff:5}]},
      {name:"Monyet",photo:"RRQ/monyet.png",values:[{k:5,opK:11,diff:-6},{k:6,opK:8,diff:-2},{k:4,opK:3,diff:1},{k:8,opK:6,diff:2},{k:5,opK:7,diff:-2}]},
      {name:"crazyguy",photo:"RRQ/crazyguy.png",values:[{k:6,opK:6,diff:0},{k:5,opK:7,diff:-2},{k:6,opK:9,diff:-3},{k:5,opK:4,diff:1},{k:5,opK:7,diff:-2}]},
      {name:"Jemkin",photo:"RRQ/jemkin.png",values:[{k:6,opK:8,diff:-2},{k:6,opK:7,diff:-1},{k:7,opK:7,diff:0},{k:4,opK:5,diff:-1},{k:4,opK:7,diff:-3}]}
    ],
    statLinks: [
      {value:"+5",label:"xffero vs UdoTan · matchup ที่ RRQ ชนะหนักสุด"},
      {value:"−6",label:"Monyet vs PatMen · PatMen ครอง matchup นี้"},
      {value:"−5",label:"xffero vs Kr1stal · Kr1stal counter ตัวแบกของ RRQ"}
    ]
  },
  analysis: [
    {
      title: "Map 1 · Breeze — Strategy ของ GE ชน Firepower ของ RRQ",
      sub: "เชื่อมโยงกับ Stats: xffero Rating 1.40 / 26K / ACS 314 · Kushy HS 65% · GE Mid-Round adapt",
      paragraphs: [
        "Global Esports เป็นทีม<b>ขึ้นชื่อเรื่องการเดินเกมและกลยุทธ์</b> มารอบนี้ก็ไม่ทำให้ผิดหวัง สามารถต่อกรกับสถานการณ์กดดันได้ต่อเนื่อง สิ่งเดียวที่ RRQ มีเหนือกว่าคือ <b>Firepower</b>",
        "ใน <b>Breeze</b> หลายครั้ง GE เดินเกมถูกจังหวะในเกมฝั่งกัน <b>ดันออกมาหาตัด เจอ xffero คนเดียว</b> — แต่กลายเป็นว่าไอ้คนเดียวนั้นละ ยิงสวนคืนหน้าหงาย ตัวเลขยืนยันชัด: <b>xffero (Viper) ACS 314 / 26K / +8 K-D / ADR 201 / KAST 83%</b> สูงสุดทั้งแมตช์",
        "แต่ Dynamic ของแมพคือ ถ้า RRQ ปิดราวด์ไม่ได้ไว ใช้ Firepower ไม่ได้ผล GE จะแก้เกม Mid-Round ดึงความได้เปรียบกลับ — ตัวเลขยืนยัน: <b>ครึ่งหลัง GE บุก 8/12 ราวด์ (67%)</b> รวม 5-Round Streak rd 17–21 ที่พลิกสกอร์จาก 9-7 → 13-9 ทันใด"
      ],
      pull: "\"เช็ค Stats เกมบุกของ RRQ ได้เลย จะเห็นว่า xffero Impact สูงโคตร\" — RRQ ฝั่งบุกชนะ 7/12 ราวด์ (58%) นำจบครึ่ง 7-5 มาจากการที่ xffero และ Kushy (Sova HS 65%!) ทำคิลรวมกัน 49 จาก 87 ของทีม",
      stats: [
        {value:"314",label:"xffero ACS · สูงสุดทั้งแมตช์"},
        {value:"5 ราวด์ติด",label:"GE Comeback Streak rd 17–21"},
        {value:"+5",label:"xffero vs UdoTan · matchup ที่กดดันที่สุด"}
      ]
    },
    {
      title: "Map 2 · Pearl — Firepower ของ RRQ เริ่มหาย",
      sub: "เชื่อมโยงกับ Stats: RRQ ACS ดรอป 210 → 195 · xffero ดรอปจาก 1.40 → 0.89 · GE บุกครึ่งหลัง 7/11",
      paragraphs: [
        "เข้าสู่แมพสองอย่าง <b>Pearl</b> ที่ต้องบอกเลยว่า อาวุธหลักของ RRQ อย่าง Firepower เริ่ม<b>ดรอปลงอย่างเห็นได้ชัด</b> — เริ่มยิงไม่ออก เริ่มมีจังหวะแปลกๆ เกมฝั่งบุกของ RRQ หาจังหวะบุกได้ยากพอสมควร",
        "ตัวเลขยืนยัน: <b>xffero ดรอปจาก Rating 1.40 → 0.89</b> และ <b>ACS ทีมรวมดรอปจาก 210 → 195</b> · แม้สกอร์สูสี <b>10-13</b> ก็เพราะ Firepower ของ RRQ ยังออกฤทธิ์อยู่บ้าง — Monyet (Neon) <b>Rating 1.20 / ACS 269 / 19K</b>"
      ],
      pull: "\"Round ที่ 16 ที่ Xavi กับ Autumn เจาะเข้า Site B ได้ดื้อๆ แม้ทีมจะเสียเปรียบ สถานการณ์ 5-3 ตอกย้ำว่า Firepower ของ RRQ เริ่มหาย\" — Round Flow แสดงว่าหลัง rd 15 RRQ ตีเสมอ 7-8 แต่ rd 16 GE บุก B ดื้อๆ ทั้งที่ตัวน้อยกว่า",
      stats: [
        {value:"1.40 → 0.89",label:"xffero Rating ดรอป Map 1 → Map 2"},
        {value:"7/11",label:"GE Attack Win Rate ครึ่งหลัง Pearl"},
        {value:"−4",label:"UdoTan FK-FD · ตายเปิด 6 ครั้ง"}
      ]
    },
    {
      title: "PatMen — Ace ประจำทีม Global Esports",
      sub: "เชื่อมโยงกับ Stats: PatMen Rating 1.19 (Map 1) / 1.04 (Map 2) · vs Monyet diff +6",
      paragraphs: [
        "<b>PatMen</b> เป็นหนึ่งในผู้เล่นที่มี Firepower สูง และหวังผลได้เสมอ หลายครั้ง PatMen เอาให้ และเป็น <b>Main Firepower หลักของ Global Esports</b> ที่แบกรับจังหวะให้เพื่อนรวมทีม",
        "ผมยกให้เป็น <b>Ace ประจำทีมเลยช่วงนี้</b> · ตัวเลขยืนยัน: รวม 2 แมพ <b>PatMen 39K · Rating เฉลี่ย 1.12</b> สูงสุดในทีม GE และ <b>matchup vs Monyet PatMen ชนะ +6</b> ครอง core duelist ของ RRQ ได้สนิท"
      ],
      pull: "หาก GE ดึงฟอร์มเพื่อนร่วมทีมให้ทัดเทียบกับ PatMen ได้ ไม่แน่ เราอาจได้เห็นสุดยอดทีมจาก Line up นี้",
      stats: [
        {value:"1.19",label:"PatMen Breeze Rating · #2 ในทีม GE"},
        {value:"+6",label:"PatMen vs Monyet · Lock down ตัวแบก RRQ"},
        {value:"39 / 33",label:"PatMen K · สูงสุดในทีม GE"}
      ]
    },
    {
      title: "RRQ ตามเกม GE ไม่ทัน — Jemkin Chamber ปิดตาย",
      sub: "เชื่อมโยงกับ Stats: Jemkin Map 2 Rating 0.95 / FK-FD 0",
      paragraphs: [
        "ฝั่ง RRQ ผมรู้สึกว่ามารอบนี้พวกเขา<b>ตามเกม GE ไม่ทันเลย</b> ก่อนหน้านี้ที่ชนะ Full Sense มา พวกเขาแก้เกม FS ยับ แต่พอเจอ GE ทีมที่ขึ้นชื่อเรื่องกลยุทธ์ ก็ไม่แปลกใจที่จะตามเกมไม่ทัน",
        "แผน <b>Jemkin Chamber</b> ที่เคยเป็นตัวแปรหลักตอนเอาชนะ FS ในด่าน Pearl ได้ — แต่พอเจอ GE ที่<b>บุกอย่างมีมิติ ค่อยๆ เดินเกม</b> ทำให้ Jemkin ไม่ได้สร้าง Space ได้กว้างเหมือนก่อนหน้า"
      ],
      pull: "ตัวเลขยืนยัน: Jemkin Map 2 (Pearl/Chamber) <b>Rating 0.95 · 14K/15D · FK-FD 0</b> ผลงานปานกลาง ไม่ได้เป็น win condition เหมือนแมตช์ก่อน — GE ปิดทาง Setup-anchor ของเขา",
      stats: [
        {value:"0.95",label:"Jemkin Pearl Rating · ปานกลางผิดวิสัย"},
        {value:"−6",label:"Jemkin K-D Diff Breeze · เปิด/ตาย 6/6"},
        {value:"10 / 13",label:"Pearl ที่ RRQ Pick — แต่แพ้แมพตัวเอง"}
      ]
    },
    {
      title: "Verdict",
      paragraphs: [
        "สกอร์ <b>2-0</b> สะท้อน Gap ที่ <b>กลยุทธ์ชนะ Firepower</b> — แม้ Stats ค่าเฉลี่ยของ RRQ จะนำ GE เกือบทุกแกน แต่ผลลัพธ์ราวด์ตกเป็นของ GE เพราะการเดินเกมและ Mid-Round adaptation",
        "RRQ ต้องกลับไปแก้สามอย่าง: <b>(1)</b> การพึ่งพา xffero ใน Map 1 มากเกินไป, <b>(2)</b> ความใจร้อนของ Monyet, <b>(3)</b> แผนที่หลากหลายกว่า Jemkin Chamber Setup"
      ]
    }
  ]
};
