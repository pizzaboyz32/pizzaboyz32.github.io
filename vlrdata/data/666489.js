window.matchData = {
  meta: { event: "VCT 2026 · Pacific · Stage 1", stage: "Playoffs · Upper Round 1", date: "7 May 2026", format: "Best of 3" },
  teams: {
    t1: { name: "Kiwoom DRX", tag: "KOREA · KRX", shortTag: "KRX", logo: "Kiwoom DRX/logo.png", color: "#3aa9ff", colorRgb: "58,169,255", score: 0, isWinner: false },
    t2: { name: "FULL SENSE", tag: "THAILAND · FS", shortTag: "FS", logo: "FULLSENSE/logo.png", color: "#ff4655", colorRgb: "255,70,85", score: 2, isWinner: true }
  },
  vetoDesc: "FS เริ่มแบนก่อน คุม Lotus เข้าสนามเพื่อเปิดสับขาหลอกเกมตัวละคร ส่วน KRX เลือก Fracture หวังใช้ Firepower กดเข้าหา",
  veto: [
    { team: "t2", action: "ban", map: "ascent", mapFile: "ascent.jpg" },
    { team: "t1", action: "ban", map: "pearl" },
    { team: "t2", action: "pick", map: "lotus" },
    { team: "t1", action: "pick", map: "fracture" },
    { team: "t2", action: "ban", map: "split", mapFile: "split.webp" },
    { team: "t1", action: "ban", map: "haven", mapFile: "haven.jpg" },
    { team: null, action: "left", map: "breeze", note: "Not played · จบเกมที่แมพ 2" }
  ],
  maps: [
    {
      name: "Lotus",
      file: "map data/lotus.avif",
      pickedBy: "t2",
      duration: "59:19",
      score: { t1: 9, t2: 13 },
      sectionTitle: "Map 1 · Lotus",
      sectionDesc: "FS Pick — สับขาหลอกตัวละคร เลี่ยง Vyse ของ KRX แล้วกดเปิดเกมด้วย Jett + Raze",
      composition: {
        t1: [{name:"MaKo",agent:"omen"},{name:"BeYN",agent:"fade"},{name:"HYUNMIN",agent:"raze"},{name:"free1ng",agent:"neon"},{name:"Hermes",agent:"vyse"}],
        t2: [{name:"primmie",agent:"jett"},{name:"JitBoyS",agent:"raze"},{name:"Leviathan",agent:"omen"},{name:"Crws",agent:"vyse"},{name:"Killua",agent:"skye"}]
      },
      stats: {
        t1: [
          {name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"omen",r:1.31,acs:249,k:19,d:16,a:8,kdDiff:3,kast:68,adr:163,hs:26,fk:4,fd:0,isTop:true},
          {name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"fade",r:1.21,acs:203,k:17,d:15,a:4,kdDiff:2,kast:64,adr:132,hs:31,fk:2,fd:0},
          {name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"raze",r:0.72,acs:157,k:12,d:16,a:2,kdDiff:-4,kast:55,adr:98,hs:32,fk:3,fd:3},
          {name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"neon",r:0.59,acs:183,k:13,d:20,a:5,kdDiff:-7,kast:64,adr:128,hs:16,fk:1,fd:6},
          {name:"Hermes",photo:"noprofile.png",agent:"vyse",r:0.58,acs:131,k:9,d:17,a:4,kdDiff:-8,kast:64,adr:93,hs:32,fk:1,fd:2}
        ],
        t2: [
          {name:"JitBoyS",photo:"FULLSENSE/jitboys.png",agent:"raze",r:1.54,acs:349,k:26,d:15,a:2,kdDiff:11,kast:68,adr:198,hs:18,fk:5,fd:1,isTop:true},
          {name:"Leviathan",photo:"FULLSENSE/leviathan.png",agent:"omen",r:1.19,acs:176,k:13,d:12,a:16,kdDiff:1,kast:86,adr:110,hs:37,fk:2,fd:0},
          {name:"Crws",photo:"FULLSENSE/crws.png",agent:"vyse",r:1.09,acs:175,k:14,d:12,a:7,kdDiff:2,kast:73,adr:108,hs:35,fk:2,fd:2},
          {name:"primmie",photo:"FULLSENSE/primmie.png",agent:"jett",r:0.99,acs:269,k:22,d:16,a:3,kdDiff:6,kast:64,adr:166,hs:19,fk:1,fd:7},
          {name:"Killua",photo:"FULLSENSE/killua.png",agent:"skye",r:0.71,acs:127,k:9,d:15,a:13,kdDiff:-6,kast:68,adr:79,hs:23,fk:1,fd:1}
        ]
      },
      rounds: [["t1","t"],["t1","t"],["t2","ct"],["t1","t"],["t2","ct"],["t2","ct"],["t2","ct"],["t1","t"],["t1","t"],["t1","t"],["t2","ct"],["t1","t"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t1","ct"],["t2","t"],["t2","t"],["t2","t"],["t1","ct"],["t2","t"]],
      sideBreakdown: [
        {team:"t1",label:"KRX Attack",note:"First Half · Rounds 1–12",value:"7 / 12"},
        {team:"t2",label:"FS Defense",note:"First Half · vs KRX Attack",value:"5 / 12"},
        {team:"t1",label:"KRX Defense",note:"Second Half · Rounds 13–22",value:"2 / 10"},
        {team:"t2",label:"FS Attack",note:"Second Half · 80% Win Rate",value:"8 / 10"}
      ],
      entryDuels: [
        {team:"t2",name:"JitBoyS",photo:"FULLSENSE/jitboys.png",agent:"Raze",fk:5,fd:1},
        {team:"t1",name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"Omen",fk:4,fd:0},
        {team:"t1",name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"Fade",fk:2,fd:0},
        {team:"t2",name:"Leviathan",photo:"FULLSENSE/leviathan.png",agent:"Omen",fk:2,fd:0},
        {team:"t1",name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"Raze",fk:3,fd:3},
        {team:"t2",name:"Crws",photo:"FULLSENSE/crws.png",agent:"Vyse",fk:2,fd:2},
        {team:"t2",name:"Killua",photo:"FULLSENSE/killua.png",agent:"Skye",fk:1,fd:1},
        {team:"t1",name:"Hermes",photo:"noprofile.png",agent:"Vyse",fk:1,fd:2},
        {team:"t1",name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"Neon",fk:1,fd:6},
        {team:"t2",name:"primmie",photo:"FULLSENSE/primmie.png",agent:"Jett",fk:1,fd:7}
      ],
      entryInsight: "Primmie โดน Focus-fire เปิดราวด์เยอะสุด (FD 7) — แต่ยังกลับมาคิลรวม 22K ได้ ส่วน free1ng ตายเปิด 6 ครั้ง — สาเหตุที่ KRX เสีย momentum"
    },
    {
      name: "Fracture",
      file: "map data/fracture.avif",
      pickedBy: "t1",
      duration: "44:53",
      score: { t1: 7, t2: 13 },
      sectionTitle: "Map 2 · Fracture",
      sectionDesc: "KRX Pick — แต่กลายเป็น JitBoyS เปิดเกมเดี่ยวสร้าง Space ให้ทีม FS ต่อเนื่อง คุมจังหวะตั้งแต่ฝั่งบุก",
      composition: {
        t1: [{name:"HYUNMIN",agent:"raze"},{name:"MaKo",agent:"brimstone"},{name:"free1ng",agent:"neon"},{name:"Hermes",agent:"cypher"},{name:"BeYN",agent:"breach"}],
        t2: [{name:"primmie",agent:"phoenix"},{name:"JitBoyS",agent:"neon"},{name:"Leviathan",agent:"cypher"},{name:"Killua",agent:"fade"},{name:"Crws",agent:"brimstone"}]
      },
      stats: {
        t1: [
          {name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"raze",r:1.09,acs:272,k:18,d:17,a:3,kdDiff:1,kast:70,adr:210,hs:29,fk:1,fd:2,isTop:true},
          {name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"brimstone",r:1.01,acs:191,k:12,d:13,a:6,kdDiff:-1,kast:70,adr:124,hs:18,fk:4,fd:3},
          {name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"neon",r:0.88,acs:179,k:13,d:14,a:2,kdDiff:-1,kast:70,adr:127,hs:25,fk:4,fd:5},
          {name:"Hermes",photo:"noprofile.png",agent:"cypher",r:0.81,acs:155,k:10,d:13,a:6,kdDiff:-3,kast:60,adr:111,hs:21,fk:1,fd:0},
          {name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"breach",r:0.40,acs:95,k:6,d:16,a:5,kdDiff:-10,kast:50,adr:63,hs:22,fk:0,fd:0}
        ],
        t2: [
          {name:"primmie",photo:"FULLSENSE/primmie.png",agent:"phoenix",r:1.43,acs:266,k:19,d:11,a:7,kdDiff:8,kast:70,adr:154,hs:38,fk:4,fd:3,isTop:true},
          {name:"Leviathan",photo:"FULLSENSE/leviathan.png",agent:"cypher",r:1.21,acs:192,k:15,d:12,a:2,kdDiff:3,kast:80,adr:127,hs:35,fk:1,fd:1},
          {name:"Killua",photo:"FULLSENSE/killua.png",agent:"fade",r:1.21,acs:194,k:15,d:11,a:11,kdDiff:4,kast:75,adr:113,hs:32,fk:0,fd:1},
          {name:"Crws",photo:"FULLSENSE/crws.png",agent:"brimstone",r:1.00,acs:144,k:9,d:10,a:11,kdDiff:-1,kast:90,adr:95,hs:27,fk:0,fd:2},
          {name:"JitBoyS",photo:"FULLSENSE/jitboys.png",agent:"neon",r:0.91,acs:213,k:15,d:15,a:6,kdDiff:0,kast:70,adr:124,hs:21,fk:5,fd:3}
        ]
      },
      rounds: [["t2","t"],["t2","t"],["t1","ct"],["t1","ct"],["t2","t"],["t2","t"],["t2","t"],["t1","ct"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t2","ct"],["t2","ct"],["t2","ct"],["t1","t"],["t1","t"],["t1","t"],["t1","t"],["t2","ct"]],
      sideBreakdown: [
        {team:"t2",label:"FS Attack",note:"First Half · 75% Win Rate",value:"9 / 12"},
        {team:"t1",label:"KRX Defense",note:"First Half · ตามไม่ทัน 3 / 12",value:"3 / 12"},
        {team:"t1",label:"KRX Attack",note:"Second Half · 4–0 streak rd 16–19",value:"4 / 8"},
        {team:"t2",label:"FS Defense",note:"Second Half · ปิดเกมที่ rd 20",value:"4 / 8"}
      ],
      entryDuels: [
        {team:"t2",name:"JitBoyS",photo:"FULLSENSE/jitboys.png",agent:"Neon",fk:5,fd:3},
        {team:"t2",name:"primmie",photo:"FULLSENSE/primmie.png",agent:"Phoenix",fk:4,fd:3},
        {team:"t1",name:"MaKo",photo:"Kiwoom DRX/Mako.png",agent:"Brimstone",fk:4,fd:3},
        {team:"t1",name:"Hermes",photo:"noprofile.png",agent:"Cypher",fk:1,fd:0},
        {team:"t1",name:"BeYN",photo:"Kiwoom DRX/beyn.png",agent:"Breach",fk:0,fd:0},
        {team:"t2",name:"Leviathan",photo:"FULLSENSE/leviathan.png",agent:"Cypher",fk:1,fd:1},
        {team:"t1",name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",agent:"Raze",fk:1,fd:2},
        {team:"t1",name:"free1ng",photo:"Kiwoom DRX/free1ing.png",agent:"Neon",fk:4,fd:5},
        {team:"t2",name:"Killua",photo:"FULLSENSE/killua.png",agent:"Fade",fk:0,fd:1},
        {team:"t2",name:"Crws",photo:"FULLSENSE/crws.png",agent:"Brimstone",fk:0,fd:2}
      ],
      entryInsight: "Fracture เปิดราวด์ดวลกันสูสีกว่า Lotus มาก KRX ชนะ Entry 2 คน (MaKo, Hermes) — แต่จังหวะ mid-round หลังเปิดยังพ่ายให้ FS"
    }
  ],
  radar: {
    sectionDesc: "เปรียบเทียบค่าเฉลี่ยทั้งทีมตลอด 2 แมพ ทุกแกนถูก Normalize เป็นสเกล 0–100 เพื่อให้เห็นรูปทรงของทีมชัดเจน",
    t1: { rating: 0.86, acs: 180, kast: 64, adr: 125, hs: 25, kpp: 12.9 },
    t2: { rating: 1.13, acs: 211, kast: 74, adr: 127, hs: 28, kpp: 15.7 },
    insights: [
      {team:"t2",label:"AVG TEAM RATING",value:"1.13",delta:"vs KRX 0.86 · Δ +0.27"},
      {team:"t2",label:"AVG ACS",value:"211",delta:"vs KRX 180 · Δ +31"},
      {team:"t2",label:"AVG KAST",value:"74%",delta:"vs KRX 64% · Δ +10pt"},
      {team:"t2",label:"AVG HS%",value:"28%",delta:"vs KRX 25% · Δ +3pt"},
      {team:"t1",label:"AVG ADR",value:"125",delta:"FS 127 · เกือบเสมอ"},
      {team:"t1",label:"FIRST KILL TOTAL",value:"21",delta:"FS 21 · เปิดเกมเสมอ แต่จบไม่ได้"}
    ],
    note: "FS เด่นในด้าน <b style=\"color:#fff\">ความมั่นคงของทั้งทีม</b> (KAST/Rating ทุกตำแหน่งสูงสม่ำเสมอ) ขณะที่ KRX มี Top fragger รายตัว แต่ค่าเฉลี่ยทีมตก เพราะผู้เล่น Bottom-Half ทำผลงานต่ำกว่า 1.00 Rating ทั้ง 2 แมพ"
  },
  killMatrix: {
    desc: "ใครเอาชนะใครรวมทั้งแมตช์ — Hermes ดวลกับ FS ทั้ง 5 คน ติดลบหมดทุก matchup",
    cols: [
      {name:"JitBoyS",photo:"FULLSENSE/jitboys.png"},
      {name:"primmie",photo:"FULLSENSE/primmie.png"},
      {name:"Leviathan",photo:"FULLSENSE/leviathan.png"},
      {name:"Crws",photo:"FULLSENSE/crws.png"},
      {name:"Killua",photo:"FULLSENSE/killua.png"}
    ],
    rows: [
      {name:"MaKo",photo:"Kiwoom DRX/Mako.png",values:[{k:5,opK:8,diff:-3},{k:6,opK:9,diff:-3},{k:7,opK:3,diff:4},{k:6,opK:3,diff:3},{k:7,opK:6,diff:1}]},
      {name:"HYUNMIN",photo:"Kiwoom DRX/hyunmin.png",values:[{k:7,opK:9,diff:-2},{k:4,opK:9,diff:-5},{k:7,opK:10,diff:-3},{k:6,opK:3,diff:3},{k:6,opK:2,diff:4}]},
      {name:"BeYN",photo:"Kiwoom DRX/beyn.png",values:[{k:7,opK:3,diff:4},{k:7,opK:11,diff:-4},{k:3,opK:5,diff:-2},{k:2,opK:7,diff:-5},{k:4,opK:5,diff:-1}]},
      {name:"free1ng",photo:"Kiwoom DRX/free1ing.png",values:[{k:5,opK:12,diff:-7},{k:6,opK:6,diff:0},{k:4,opK:4,diff:0},{k:5,opK:5,diff:0},{k:6,opK:7,diff:-1}]},
      {name:"Hermes",photo:"noprofile.png",values:[{k:6,opK:9,diff:-3},{k:4,opK:6,diff:-2},{k:3,opK:6,diff:-3},{k:3,opK:5,diff:-2},{k:3,opK:4,diff:-1}]}
    ],
    statLinks: [
      {value:"−7",label:"free1ng vs JitBoyS · matchup ที่ KRX โดนถล่มหนักสุด"},
      {value:"+4",label:"BeYN vs JitBoyS · matchup ที่ KRX ชนะชัด"},
      {value:"0 / 25",label:"Hermes ไม่ชนะ matchup ใดเลย (5 / 5 ติดลบหมด)"}
    ]
  },
  analysis: [
    {
      title: "Map 1 · Lotus — FS สับขาหลอกตัวละคร เกมจบตั้งแต่ Veto",
      sub: "เชื่อมโยงกับ Stats: JitBoyS Rating 1.54 / 26K · Primmie 22K · Leviathan KAST 86%",
      paragraphs: [
        "ใน <b>Lotus</b> เรียกได้ว่า FS คุม KRX ได้อยู่หมัด เพราะ KRX เลือก <b>Vyse</b> มาหวัง Counter แผน Neon ที่เป็นเมต้าปัจจุบัน — แต่ FS สับขาหลอก หยิบ <b>Jett</b> และ <b>Raze</b> ตัวละครที่ Vyse หยุดอะไรไม่ได้เลย เพราะสองตัวนี้กระโดดข้าม Trap ได้หมด",
        "ผลคือ <b>JitBoyS (Raze)</b> ระเบิดฟอร์มแบบ Hard-Carry — Rating 1.54, ACS 349, 26 Kills, ADR 198 สูงสุดของแมพ ส่วน <b>Primmie (Jett)</b> รับหน้าที่ Operator ซื้อทุกครั้งที่มีโอกาส แม้จะไม่ใช่คนเปิดเกม (FK เพียง 1 ส่วน FD ถึง 7 ครั้ง) แต่หลังจากเสียจังหวะแรก เขาก็ <b>เก็บคิลกลับด้วย Operator จากการ Hold angle</b> ได้รัวๆ จบที่ <b>22K / 16D · +6 K-D</b>",
        "ฝั่ง KRX <b>MaKo (Omen)</b> ทำผลงานดีมาก — Rating 1.31 / 19K / ACS 249 พยายามแบกทีมไว้คนเดียว แต่ Bottom-half ของ KRX อย่าง <b>free1ng (0.59 · −7)</b> และ <b>Hermes (0.58 · −8)</b> Rating ต่ำกว่า 0.60 ทั้งคู่ ทำให้ทีมไม่สามารถกดดันต่อหลังเปิดราวด์ได้สำเร็จ",
        "<b>จุดพลิกเกม</b> อยู่ที่ครึ่งหลัง — KRX จบครึ่งแรกนำ <b>7–5</b> แต่พอสลับมาเป็นฝั่งกัน FS เปิดเกมบุก <b>8 จาก 10 ราวด์ (80% Win Rate)</b> รัวต่อเนื่อง โดยเฉพาะ <b>Streak 13–16 ที่ FS เก็บ 4 ราวด์ติด</b>"
      ],
      pull: "\"Leviathan หลังจากสลับตำแหน่งกลับมาเล่น Controller อย่างเป็นทางการ ก็ทำให้ไม่ผิดหวัง\" — สะท้อนผ่าน <b>KAST 86%</b> สูงสุดของทีม FS และ <b>16 Assists</b> สูงสุดทั้งแมตช์ Setup สโม๊คเปิดทางให้ Primmie และ JitBoyS ได้คิลตลอด",
      stats: [
        {value:"22 / 16",label:"Primmie K / D · เก็บคิลกลับหลังเสียจังหวะแรก"},
        {value:"+11",label:"JitBoyS K-D · สูงสุดของแมตช์"},
        {value:"2",label:"KRX ที่ Rating ต่ำกว่า 0.60"}
      ]
    },
    {
      title: "Map 2 · Fracture — Jit แบก ไม่ใช่ JitBoyS",
      sub: "เชื่อมโยงกับ Stats: JitBoyS 5 FK (เสมอกับ Primmie สูงสุดของแมพ) · Primmie Phoenix Rating 1.43",
      paragraphs: [
        "ใน <b>Fracture</b> เรียกได้ว่า \"Jit แบก ไม่ใช่ JitBoyS\" — เกมเพลย์หลายๆ ครั้งในฝั่งบุก Jit เอาให้หลายครั้งมากๆ มีหลายราวด์ที่เขาทำจังหวะคนเดียว หวังสร้าง Space ให้เพื่อน แต่กลับ <b>ตัดจังหวะสำคัญ</b> สร้างความปั่นป่วนที่ KRX ตามแก้ไม่ทัน",
        "ตัวเลขยืนยันชัด: JitBoyS ทำ <b>5 First Kills เสมอกับ Primmie สูงสุดของแมพ</b> แม้ K/D ส่วนตัวจะแค่ 15/15 (Rating 0.91) แต่จังหวะเปิดของเขาคือสิ่งที่ทำให้ <b>Primmie (Phoenix) Rating 1.43, 19K, HS 38%</b> และ <b>Killua (Fade) Rating 1.21</b> เก็บเกมต่อได้ตลอด",
        "ฝั่งกัน FS ดึงขึ้น <b>12</b> อย่างไว — Round Flow ยืนยันชัด: ครึ่งแรก FS บุก <b>9 จาก 12 ราวด์ (75%)</b> หลังครึ่งสกอร์ <b>9-3 FS นำ</b> KRX กลับมาฝั่งบุกพยายามไล่ — ทำได้ <b>4 ราวด์ติด (rd 16–19)</b> เปลี่ยนสกอร์เป็น <b>9-7</b> แต่ FS ปิดเกมที่ <b>round 20</b>"
      ],
      pull: "\"ตรงกับที่ผมเคยพูดไว้ว่า ควรมีแผนอะไรที่หลากหลาย เช่น ส่ง Duelist เข้าไปตาย เพื่อสร้าง Space\" — JitBoyS ทำหน้าที่นี้ครบสูตร · Crws (Brimstone) <b>KAST 90%</b> สูงสุดของเกม คุมยูทิลิตี้ฝั่งกันได้นิ่งสุด",
      stats: [
        {value:"5 / 5",label:"JitBoyS & Primmie FK · ร่วมสูงสุด"},
        {value:"90%",label:"Crws KAST · คุมฝั่งกันสูงสุดของเกม"},
        {value:"38%",label:"Primmie HS% · กดหัวแม่นจัด"}
      ]
    },
    {
      title: "การตัดสินใจของ KRX — Hermes แทน Yong ในรอบ Playoff",
      sub: "เชื่อมโยงกับ Stats: Hermes Rating 0.58 (Lotus · ต่ำสุดในทีม) / 0.81 (Fracture · อันดับ 4 จาก 5)",
      paragraphs: [
        "ในฝั่งของ KRX สิ่งที่งงที่สุดคือการตัดสินใจนำ <b>Hermes</b> มาลงแทน <b>Yong</b> ในรอบนี้ อาจเป็นเรื่องตัวละคร เพราะ Yong เน้น Chamber ใช้ Firepower เป็นหลัก ขณะที่ Hermes เล่นจำพวก <b>Vyse</b> และ <b>Cypher</b>",
        "ในรอบก่อนหน้า Yong ทำผลงานเป็น <b>Win Condition</b> ในหลายๆ ราวด์ ขณะที่ Hermes เกมนี้ Rating <b>0.58</b> ใน Lotus (ต่ำสุดในทีม) และ <b>0.81</b> ใน Fracture (อันดับ 4/5) — การเปลี่ยนตัวในรอบสำคัญอาจเป็นการตัดสินใจที่ผิดมหันต์"
      ],
      pull: "หลักฐานที่ชัดที่สุดอยู่ใน <b>Kill Matchup Matrix</b> — Hermes ดวลกับ FS ทั้ง 5 คน <b>ติดลบหมดทุก matchup (0 / 5 ชนะ)</b> รวม diff −11 มากที่สุดในทีม สะท้อนว่าเขาไม่สามารถเอาชนะ duel ตรงๆ กับใครได้เลย",
      stats: [
        {value:"0.58",label:"Hermes Rating · Lotus (ต่ำสุดในทีม)"},
        {value:"0 / 5",label:"Matchup ที่ Hermes ชนะ FS (ติดลบหมด)"},
        {value:"−11",label:"Hermes Total Kill Diff vs FS · แย่สุดในทีม"}
      ]
    },
    {
      title: "Verdict",
      paragraphs: [
        "สกอร์ <b>2-0</b> สะท้อน <b>Gap ที่แท้จริง</b> ของทั้งสองทีม — FS ไม่ได้ชนะเพราะดวง แต่ชนะเพราะ <b>การอ่าน Veto</b> (Lotus สับตัวละคร), <b>การกระจาย Firepower</b> (3/5 มี Rating ≥ 1.00 ใน Lotus, 4/5 ใน Fracture) และ <b>การใช้ Duelist สร้าง Space</b>",
        "ฝั่ง KRX ต้องกลับไปแก้สามอย่าง: <b>(1)</b> การคิด Composition ให้เผื่อ Counter-Counter, <b>(2)</b> การพึ่งพาคนเดียว (MaKo / HYUNMIN) ไม่พอในรอบสำคัญ, <b>(3)</b> การตัดสินใจส่งผู้เล่นสำรองในเกม Playoff"
      ]
    }
  ]
};
