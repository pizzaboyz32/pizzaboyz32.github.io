window.matchData = {
  meta: {
    event: "VCT 2026: Pacific Stage 1",
    stage: "Playoffs · Lower Round 3",
    date: "15 May 2026",
    format: "Best of 3"
  },
  teams: {
    t1: {
      name: "T1",
      tag: "KOREA · T1",
      shortTag: "T1",
      logo: "T1/logo.png",
      color: "#ff4655",
      colorRgb: "255,70,85",
      score: 1,
      isWinner: false
    },
    t2: {
      name: "Paper Rex",
      tag: "SINGAPORE · PRX",
      shortTag: "PRX",
      logo: "Paper rex/logo.png",
      color: "#ff8ec6",
      colorRgb: "255,142,198",
      score: 2,
      isWinner: true
    }
  },
  vetoDesc: "PRX ban Pearl → T1 ban Fracture → PRX pick Split → T1 pick Ascent → PRX ban Haven → T1 ban Lotus → Breeze remains. ทั้งสองทีมต่างเลือกแมพถนัด ก่อนตัด Haven/Lotus ออก เหลือ Breeze เป็นด่านชี้ขาด",
  veto: [
    { team: "t2", action: "ban", map: "Pearl" },
    { team: "t1", action: "ban", map: "Fracture" },
    { team: "t2", action: "pick", map: "Split", mapFile: "split.webp", note: "PRX Pick" },
    { team: "t1", action: "pick", map: "Ascent", note: "T1 Pick" },
    { team: "t2", action: "ban", map: "Haven" },
    { team: "t1", action: "ban", map: "Lotus" },
    { team: null, action: "left", map: "Breeze", note: "Decider" }
  ],
  maps: [
    {
      name: "Split",
      file: "map data/split.webp",
      pickedBy: "t2",
      duration: "1:11:12",
      score: { t1: 9, t2: 13 },
      sectionTitle: "Map 1 · Split — เกมแห่งความวุ่นวาย",
      sectionDesc: "PRX เปิดแมพถนัดของตัวเอง เกมเปิดมาด้วยความบ้าระห่ำของทั้งสองฝั่ง T1 เดินเกมบุก Double Duelist ดันครึ่งแรกขึ้นนำ 7-5 แต่พอสลับฝั่ง something เปิด OP ลั่นมือ บวกกับ Meteor ที่หลุดคุมพื้นที่ ทำให้ PRX กดกลับมาปิดแมพไป 13-9",
      composition: {
        t1: [
          { name: "iZu", agent: "Raze" },
          { name: "BuZz", agent: "Neon" },
          { name: "stax", agent: "Fade" },
          { name: "Meteor", agent: "Viper" },
          { name: "Munchkin", agent: "Omen" }
        ],
        t2: [
          { name: "something", agent: "Jett" },
          { name: "Jinggg", agent: "Raze" },
          { name: "f0rsakeN", agent: "Omen" },
          { name: "invy", agent: "Skye" },
          { name: "d4v41", agent: "Viper" }
        ]
      },
      stats: {
        t1: [
          { name: "iZu", photo: "T1/izu.png", agent: "Raze", r: 1.02, acs: 205, k: 18, d: 17, a: 0, kdDiff: 1, kast: 59, adr: 144, hs: 16, fk: 2, fd: 2 },
          { name: "BuZz", photo: "T1/buzz.png", agent: "Neon", r: 0.96, acs: 225, k: 17, d: 18, a: 6, kdDiff: -1, kast: 73, adr: 149, hs: 15, fk: 2, fd: 1 },
          { name: "stax", photo: "T1/stax.png", agent: "Fade", r: 0.93, acs: 166, k: 13, d: 14, a: 7, kdDiff: -1, kast: 73, adr: 103, hs: 15, fk: 1, fd: 0 },
          { name: "Meteor", photo: "T1/meteor.png", agent: "Viper", r: 0.87, acs: 178, k: 12, d: 16, a: 3, kdDiff: -4, kast: 59, adr: 139, hs: 35, fk: 2, fd: 5 },
          { name: "Munchkin", photo: "T1/munchkin.png", agent: "Omen", r: 0.38, acs: 79, k: 5, d: 17, a: 5, kdDiff: -12, kast: 50, adr: 47, hs: 12, fk: 1, fd: 6 }
        ],
        t2: [
          { name: "something", photo: "Paper rex/something.png", agent: "Jett", r: 1.63, acs: 300, k: 25, d: 12, a: 1, kdDiff: 13, kast: 77, adr: 170, hs: 32, fk: 6, fd: 2, isTop: true },
          { name: "Jinggg", photo: "Paper rex/jinggg.png", agent: "Raze", r: 1.20, acs: 214, k: 18, d: 12, a: 5, kdDiff: 6, kast: 77, adr: 148, hs: 20, fk: 1, fd: 3 },
          { name: "f0rsakeN", photo: "Paper rex/f0rsaken.png", agent: "Omen", r: 1.04, acs: 146, k: 13, d: 11, a: 5, kdDiff: 2, kast: 68, adr: 89, hs: 12, fk: 0, fd: 2 },
          { name: "invy", photo: "Paper rex/invy.png", agent: "Skye", r: 0.99, acs: 230, k: 16, d: 16, a: 9, kdDiff: 0, kast: 64, adr: 171, hs: 25, fk: 3, fd: 1 },
          { name: "d4v41", photo: "Paper rex/d4v41.png", agent: "Viper", r: 0.87, acs: 150, k: 10, d: 14, a: 7, kdDiff: -4, kast: 68, adr: 101, hs: 12, fk: 4, fd: 0 }
        ]
      },
      rounds: [
        ["t2","ct"],["t2","ct"],["t1","t"],["t2","ct"],["t1","t"],["t1","t"],
        ["t1","t"],["t1","t"],["t1","t"],["t1","t"],["t2","ct"],["t2","ct"],
        ["t1","ct"],["t2","t"],["t1","ct"],["t2","t"],["t2","t"],["t2","t"],
        ["t2","t"],["t2","t"],["t2","t"],["t2","t"]
      ],
      sideBreakdown: [
        { team: "t1", label: "Attack (Half 1)", note: "Double Duelist บุกชนหน้า iZu+BuZz ฉีก Site ได้ต่อเนื่อง", value: "7 WINS" },
        { team: "t2", label: "Defense (Half 1)", note: "OP ของ something โดน Meteor อ่านเหลี่ยมตัดในจังหวะสำคัญ Thrifty พลิก Momentum ให้ T1", value: "5 WINS" },
        { team: "t1", label: "Defense (Half 2)", note: "Munchkin/Meteor หลุดคุมพื้นที่ ปล่อยให้ PRX Lurk เข้ามาเก็บฟรี", value: "2 WINS" },
        { team: "t2", label: "Attack (Half 2)", note: "something เปิด OP ฝั่งบุก เก็บจุดสำคัญรัวๆ จนทีมไหลเข้า Site ได้สบาย", value: "8 WINS" }
      ],
      entryDuels: [
        { team: "t2", name: "something", photo: "Paper rex/something.png", agent: "Jett", fk: 6, fd: 2 },
        { team: "t2", name: "d4v41", photo: "Paper rex/d4v41.png", agent: "Viper", fk: 4, fd: 0 },
        { team: "t1", name: "BuZz", photo: "T1/buzz.png", agent: "Neon", fk: 2, fd: 1 },
        { team: "t1", name: "iZu", photo: "T1/izu.png", agent: "Raze", fk: 2, fd: 2 },
        { team: "t1", name: "Munchkin", photo: "T1/munchkin.png", agent: "Omen", fk: 1, fd: 6 }
      ],
      entryInsight: "something เก็บ First Kill ไป 6 ครั้งและตายเป็นคนแรกเพียง 2 — เป็นตัวขับเคลื่อน Entry/Anti-entry ของ PRX ทั้งสองฝั่ง ส่วน T1 มี Munchkin ที่ตายขึ้นก่อนถึง 6 ครั้ง ทำให้ Smoke/Util ไม่ลงตำแหน่ง กดดันต่อยากตามไปด้วย"
    },
    {
      name: "Ascent",
      pickedBy: "t1",
      duration: "51:59",
      score: { t1: 13, t2: 10 },
      sectionTitle: "Map 2 · Ascent — Yoru Ultimate ที่เปลี่ยนเกม",
      sectionDesc: "T1 เลือก Ascent กลับมาแก้ทาง เปิดเกมบุกบ้าระห่ำกดนำ 1-6 ก่อน Pause ที่ 2 ปลุก PRX ให้กลับมา something เสกพลังชน 5-7 และพลิกขึ้น 7-5 ในครึ่งหลัง — แต่พอ Yoru Ultimate หมด PRX ก็คุมเกมไม่ได้ ท้ายที่สุด T1 ปิดแมพ 13-10",
      composition: {
        t1: [
          { name: "iZu", agent: "Sova" },
          { name: "BuZz", agent: "Jett" },
          { name: "stax", agent: "Kayo" },
          { name: "Meteor", agent: "Killjoy" },
          { name: "Munchkin", agent: "Omen" }
        ],
        t2: [
          { name: "something", agent: "Yoru" },
          { name: "Jinggg", agent: "Sage" },
          { name: "f0rsakeN", agent: "Omen" },
          { name: "invy", agent: "Sova" },
          { name: "d4v41", agent: "Vyse" }
        ]
      },
      stats: {
        t1: [
          { name: "iZu", photo: "T1/izu.png", agent: "Sova", r: 1.25, acs: 227, k: 21, d: 14, a: 2, kdDiff: 7, kast: 74, adr: 145, hs: 23, fk: 2, fd: 0, isTop: true },
          { name: "Munchkin", photo: "T1/munchkin.png", agent: "Omen", r: 1.02, acs: 189, k: 15, d: 14, a: 8, kdDiff: 1, kast: 74, adr: 116, hs: 19, fk: 1, fd: 4 },
          { name: "stax", photo: "T1/stax.png", agent: "Kayo", r: 1.00, acs: 171, k: 14, d: 14, a: 11, kdDiff: 0, kast: 78, adr: 106, hs: 21, fk: 2, fd: 0 },
          { name: "BuZz", photo: "T1/buzz.png", agent: "Jett", r: 0.99, acs: 239, k: 18, d: 18, a: 6, kdDiff: 0, kast: 57, adr: 141, hs: 20, fk: 6, fd: 5 },
          { name: "Meteor", photo: "T1/meteor.png", agent: "Killjoy", r: 0.96, acs: 194, k: 15, d: 15, a: 5, kdDiff: 0, kast: 70, adr: 151, hs: 31, fk: 0, fd: 3 }
        ],
        t2: [
          { name: "invy", photo: "Paper rex/invy.png", agent: "Sova", r: 1.15, acs: 259, k: 17, d: 17, a: 9, kdDiff: 0, kast: 74, adr: 191, hs: 30, fk: 2, fd: 1 },
          { name: "something", photo: "Paper rex/something.png", agent: "Yoru", r: 1.11, acs: 203, k: 16, d: 14, a: 6, kdDiff: 2, kast: 61, adr: 126, hs: 19, fk: 5, fd: 2 },
          { name: "d4v41", photo: "Paper rex/d4v41.png", agent: "Vyse", r: 1.06, acs: 225, k: 19, d: 20, a: 4, kdDiff: -1, kast: 65, adr: 162, hs: 33, fk: 2, fd: 3 },
          { name: "Jinggg", photo: "Paper rex/jinggg.png", agent: "Sage", r: 0.89, acs: 143, k: 11, d: 14, a: 9, kdDiff: -3, kast: 70, adr: 88, hs: 12, fk: 1, fd: 1 },
          { name: "f0rsakeN", photo: "Paper rex/f0rsaken.png", agent: "Omen", r: 0.72, acs: 147, k: 12, d: 18, a: 8, kdDiff: -6, kast: 70, adr: 91, hs: 17, fk: 2, fd: 4 }
        ]
      },
      rounds: [
        ["t1","t"],["t1","t"],["t2","ct"],["t1","t"],["t1","t"],["t1","t"],
        ["t1","t"],["t2","ct"],["t2","ct"],["t1","t"],["t2","ct"],["t2","ct"],
        ["t1","ct"],["t1","ct"],["t1","ct"],["t2","t"],["t2","t"],["t2","t"],
        ["t2","t"],["t1","ct"],["t1","ct"],["t2","t"],["t1","ct"]
      ],
      sideBreakdown: [
        { team: "t1", label: "Attack (Half 1)", note: "T1 ดันชนซึ่งหน้ารัวๆ Buzz/iZu เปิดทาง PRX รับไม่อยู่ จน Pause สองครั้ง", value: "7 WINS" },
        { team: "t2", label: "Defense (Half 1)", note: "ถูกบีบหนัก 1-6 ก่อน something Make play หน้า A พลิกกลับมาเหลือ 5-7", value: "5 WINS" },
        { team: "t1", label: "Defense (Half 2)", note: "Sova+Killjoy เซ็ตทรัพย์ดักคุมเหลี่ยมในจังหวะ PRX ไม่มี Ult Yoru ใช้", value: "6 WINS" },
        { team: "t2", label: "Attack (Half 2)", note: "เสีย Pistol+Buy แรกจาก No-scope ของ Buzz ก่อน Yoru Ult Round 18 เปิด B รวดเดียวสามจุด", value: "5 WINS" }
      ],
      entryDuels: [
        { team: "t1", name: "BuZz", photo: "T1/buzz.png", agent: "Jett", fk: 6, fd: 5 },
        { team: "t2", name: "something", photo: "Paper rex/something.png", agent: "Yoru", fk: 5, fd: 2 },
        { team: "t1", name: "iZu", photo: "T1/izu.png", agent: "Sova", fk: 2, fd: 0 },
        { team: "t1", name: "stax", photo: "T1/stax.png", agent: "Kayo", fk: 2, fd: 0 },
        { team: "t2", name: "f0rsakeN", photo: "Paper rex/f0rsaken.png", agent: "Omen", fk: 2, fd: 4 }
      ],
      entryInsight: "BuZz เปิดเอนทรี่ 6 ครั้ง เป็นหัวหอกเกมบุกของ T1 ส่วน iZu และ stax เก็บ First Kill ฝั่งกันแต่ไม่เคยตายเป็นคนแรก สะท้อนว่าทรัพย์ Sova/Killjoy ทำงานได้ดีในการดักเหลี่ยมหน้า Site"
    },
    {
      name: "Breeze",
      pickedBy: null,
      duration: "40:38",
      score: { t1: 8, t2: 13 },
      sectionTitle: "Map 3 · Breeze — PRX ปิดงานด้วยพลัง Operator",
      sectionDesc: "ด่านชี้ขาด T1 เปิดเกมเอาเปรียบหลังชนะปืนสั้น แต่ Round 4 BuZz ซื้อ OP มาแล้วทำตกในมือ something — เกมพลิกทันที PRX กดครึ่งแรกขึ้นไป 9-3 ก่อน T1 พยายาม Comeback ขึ้น 8-10 แต่ PRX อ่าน Stack A Main ถูก ตัดโมเมนตั้มไปจบที่ 13-8",
      composition: {
        t1: [
          { name: "BuZz", agent: "Neon" },
          { name: "stax", agent: "Kayo" },
          { name: "iZu", agent: "Sova" },
          { name: "Meteor", agent: "Viper" },
          { name: "Munchkin", agent: "Harbor" }
        ],
        t2: [
          { name: "something", agent: "Jett" },
          { name: "Jinggg", agent: "Omen" },
          { name: "f0rsakeN", agent: "Neon" },
          { name: "invy", agent: "Sova" },
          { name: "d4v41", agent: "Viper" }
        ]
      },
      stats: {
        t1: [
          { name: "BuZz", photo: "T1/buzz.png", agent: "Neon", r: 1.00, acs: 246, k: 19, d: 17, a: 3, kdDiff: 2, kast: 67, adr: 140, hs: 23, fk: 5, fd: 5 },
          { name: "stax", photo: "T1/stax.png", agent: "Kayo", r: 0.88, acs: 191, k: 13, d: 18, a: 8, kdDiff: -5, kast: 62, adr: 132, hs: 24, fk: 1, fd: 2 },
          { name: "iZu", photo: "T1/izu.png", agent: "Sova", r: 0.76, acs: 120, k: 9, d: 15, a: 4, kdDiff: -6, kast: 57, adr: 84, hs: 40, fk: 1, fd: 2 },
          { name: "Meteor", photo: "T1/meteor.png", agent: "Viper", r: 0.70, acs: 145, k: 11, d: 16, a: 7, kdDiff: -5, kast: 48, adr: 97, hs: 27, fk: 1, fd: 1 },
          { name: "Munchkin", photo: "T1/munchkin.png", agent: "Harbor", r: 0.62, acs: 122, k: 9, d: 17, a: 5, kdDiff: -8, kast: 67, adr: 71, hs: 7, fk: 0, fd: 3 }
        ],
        t2: [
          { name: "something", photo: "Paper rex/something.png", agent: "Jett", r: 1.45, acs: 304, k: 22, d: 12, a: 5, kdDiff: 10, kast: 76, adr: 204, hs: 21, fk: 1, fd: 1, isTop: true },
          { name: "Jinggg", photo: "Paper rex/jinggg.png", agent: "Omen", r: 1.27, acs: 213, k: 16, d: 12, a: 6, kdDiff: 4, kast: 71, adr: 150, hs: 48, fk: 4, fd: 2 },
          { name: "d4v41", photo: "Paper rex/d4v41.png", agent: "Viper", r: 1.18, acs: 195, k: 15, d: 12, a: 3, kdDiff: 3, kast: 81, adr: 137, hs: 40, fk: 3, fd: 0 },
          { name: "invy", photo: "Paper rex/invy.png", agent: "Sova", r: 1.06, acs: 160, k: 13, d: 12, a: 4, kdDiff: 1, kast: 86, adr: 136, hs: 54, fk: 3, fd: 1 },
          { name: "f0rsakeN", photo: "Paper rex/f0rsaken.png", agent: "Neon", r: 1.04, acs: 219, k: 17, d: 13, a: 8, kdDiff: 4, kast: 71, adr: 128, hs: 13, fk: 2, fd: 4 }
        ]
      },
      rounds: [
        ["t1","ct"],["t1","ct"],["t2","t"],["t2","t"],["t2","t"],["t1","ct"],
        ["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],["t2","t"],
        ["t2","ct"],["t1","t"],["t1","t"],["t1","t"],["t1","t"],["t1","t"],
        ["t2","ct"],["t2","ct"],["t2","ct"]
      ],
      sideBreakdown: [
        { team: "t1", label: "Defense (Half 1)", note: "ชนะปืนสั้น+Buy แรก แต่หลังจาก BuZz ทำ OP ตกในมือ something เกมไหลจนคุมไม่อยู่", value: "3 WINS" },
        { team: "t2", label: "Attack (Half 1)", note: "something เปิด OP กดจังหวะใหญ่ Round 4 ก่อน W-Gaming โถมเข้า Site แบบไม่ลังเล", value: "9 WINS" },
        { team: "t1", label: "Attack (Half 2)", note: "ชนะปืนสั้น ดึงโมเมนตั้มกลับ + เสีย Anti-eco แต่ก็ตามขึ้นมาได้ 8-10", value: "5 WINS" },
        { team: "t2", label: "Defense (Half 2)", note: "Round 19 Stack A Main อ่าน Timing ถูก ตัดความหวัง Comeback ของ T1 ลง", value: "4 WINS" }
      ],
      entryDuels: [
        { team: "t1", name: "BuZz", photo: "T1/buzz.png", agent: "Neon", fk: 5, fd: 5 },
        { team: "t2", name: "Jinggg", photo: "Paper rex/jinggg.png", agent: "Omen", fk: 4, fd: 2 },
        { team: "t2", name: "d4v41", photo: "Paper rex/d4v41.png", agent: "Viper", fk: 3, fd: 0 },
        { team: "t2", name: "invy", photo: "Paper rex/invy.png", agent: "Sova", fk: 3, fd: 1 },
        { team: "t2", name: "f0rsakeN", photo: "Paper rex/f0rsaken.png", agent: "Neon", fk: 2, fd: 4 }
      ],
      entryInsight: "BuZz เปิด/ตายเป็นคนแรกอย่างละ 5 ครั้ง พยายามจะแบกฝั่งเดียวของ T1 แต่ฝั่ง PRX มี Jinggg/d4v41/invy สลับกันเก็บ First Kill ได้ทั่วทุกตำแหน่ง ไม่ต้องพึ่ง something เพียงคนเดียว"
    }
  ],
  radar: {
    sectionDesc: "เปรียบเทียบค่าเฉลี่ยตลอดทั้งซีรี่ส์ของทั้งสองทีม สะท้อนช่องว่าง Firepower ที่ PRX มีเหนือกว่า T1 ในแทบทุกหมวด",
    t1: { rating: 0.89, acs: 180, kast: 65, adr: 118, hs: 22, kpp: 13.9 },
    t2: { rating: 1.11, acs: 207, kast: 72, adr: 140, hs: 26, kpp: 16.0 },
    insights: [
      { team: "t2", label: "Rating", value: "1.11", delta: "+0.22 vs T1" },
      { team: "t2", label: "ADR", value: "140", delta: "+22 vs T1" },
      { team: "t2", label: "KAST", value: "72%", delta: "+7% vs T1" },
      { team: "t1", label: "Top Performer", value: "iZu", delta: "เฉลี่ย R 1.01 จาก 3 แมพ" }
    ],
    note: "ค่าทั้งหมดเป็นค่าเฉลี่ยทีม (5 ผู้เล่น) ตลอดทั้งซีรี่ส์ — PRX กินขาดทุกหมวด ยกเว้นเสถียรภาพรายตัวที่ T1 มี iZu เป็นเสาหลัก"
  },
  killMatrix: {
    desc: "ตารางการปะทะตลอดทั้งซีรี่ส์ (รวม 3 แมพ) — แถวคือผู้เล่น T1, คอลัมน์คือผู้เล่น PRX, ตัวเลขคือ Kills ของผู้เล่นแถวต่อผู้เล่นคอลัมน์ ตามด้วย Kills ตรงข้าม และ Diff",
    cols: [
      { name: "invy", photo: "Paper rex/invy.png" },
      { name: "f0rsakeN", photo: "Paper rex/f0rsaken.png" },
      { name: "Jinggg", photo: "Paper rex/jinggg.png" },
      { name: "something", photo: "Paper rex/something.png" },
      { name: "d4v41", photo: "Paper rex/d4v41.png" }
    ],
    rows: [
      { name: "BuZz", photo: "T1/buzz.png", values: [
        { k: 13, opK: 12, diff: 1 },
        { k: 12, opK: 8, diff: 4 },
        { k: 6, opK: 9, diff: -3 },
        { k: 11, opK: 13, diff: -2 },
        { k: 12, opK: 11, diff: 1 }
      ]},
      { name: "Munchkin", photo: "T1/munchkin.png", values: [
        { k: 8, opK: 12, diff: -4 },
        { k: 7, opK: 8, diff: -1 },
        { k: 7, opK: 8, diff: -1 },
        { k: 5, opK: 10, diff: -5 },
        { k: 2, opK: 10, diff: -8 }
      ]},
      { name: "Meteor", photo: "T1/meteor.png", values: [
        { k: 6, opK: 11, diff: -5 },
        { k: 6, opK: 5, diff: 1 },
        { k: 8, opK: 7, diff: 1 },
        { k: 8, opK: 16, diff: -8 },
        { k: 10, opK: 8, diff: 2 }
      ]},
      { name: "iZu", photo: "T1/izu.png", values: [
        { k: 10, opK: 6, diff: 4 },
        { k: 6, opK: 12, diff: -6 },
        { k: 9, opK: 8, diff: 1 },
        { k: 11, opK: 9, diff: 2 },
        { k: 12, opK: 11, diff: 1 }
      ]},
      { name: "stax", photo: "T1/stax.png", values: [
        { k: 8, opK: 5, diff: 3 },
        { k: 11, opK: 9, diff: 2 },
        { k: 8, opK: 13, diff: -5 },
        { k: 3, opK: 15, diff: -12 },
        { k: 10, opK: 4, diff: 6 }
      ]}
    ],
    statLinks: [
      { value: "-12", label: "stax vs something — Duel ที่ยับที่สุดของซีรี่ส์" },
      { value: "+13", label: "something K/D Diff (Map 1 Split)" },
      { value: "-8", label: "Meteor vs something — Operator ทำเกมแทบฝ่ายเดียว" },
      { value: "iZu", label: "ผู้เล่น T1 คนเดียวที่ +Diff รวมต่อทุกคน PRX" }
    ]
  },
  analysis: [
    {
      title: "Map 1 · Split — เกมที่บอกทุกอย่างเกี่ยวกับสองทีม",
      sub: "ครึ่งแรก T1 ขึ้นนำ 7-5 — ครึ่งหลัง PRX ดึงโมเมนตั้มคืนรวดเดียวจบ 13-9",
      paragraphs: [
        "เป็นแมทช์ที่ดูไป กุมขมับไปเรื่อยๆ เพราะสไตล์การเล่นของสองทีมนี้ มันคือสาเหตุหลักว่าทำไม Pacific ถึงเป็นภูมิภาคที่น่าปวดหัวที่สุดในบรรดาการแข่งขันทั้งหมดเลยก็ว่าได้ สไตล์การเล่นแบบไว แรง ไม่สนหน้าไหน เกมเพลย์เลยออกมาในแบบที่ ถ้ามันทำได้ มันจะโครตเท่ โครตเฟี้ยว แต่พอพลาด มันก็จะเป็นความผิดพลาดที่ตลก ล้อได้เรื่อยๆ",
        "แมพแรก Split จากฝั่งของ Paper Rex ที่เปิดมาไม่ทันไร ก็เริ่มเห็นความบ้าคลั่งของเกมนี้ขึ้นทันที ใน Round ที่ 4 กับความโกลาหล ปะทะกันใน Buy Round แรกจากทั้งสองฝ่าย ชนกันตรงๆ ต่างฝ่าย ต่างมีจังหวะเวอร์ๆ ใส่กัน เช่น การ Re-Position ความไวแสงจาก something พอเห็นท่าไม่ดี รอดมาได้แบบงงๆ, d4v41 สแปม smoke เก็บไปสอง รวมไปถึงจังหวะ Entry บ้าระห่ำของ iZu ที่เป็นตัวแปรสำคัญในการดึงความได้เปรียบกลับคืนมา BuZz เดินไปแพ้ 50/50 กับ Jinggg และปิด Round ไปได้ — แค่ Round เดียว สามารถเล่าเรื่องได้ครบเลยว่าสไตล์ทั้งสองทีม มันเป็นยังไง",
        { video: "PRXvsT1/hilight1.mp4", title: "Round สุดโกลาหล", caption: "Round 4 — ต่างฝ่ายต่างทำจังหวะรุนแรงจนมองตามแทบไม่ทัน" },
        "Operator ของ something ยังคงเป็นกลยุทธ์ที่ PRX มั่นใจ แต่ไม่ทันไร ก็โดน T1 แก้ไปด้วยการส่ง Meteor ดักเหลี่ยม เหมือนกับที่ Primmie โดน GE ไปก่อนหน้าแทบจะไม่มีผิดเลย จังหวะเหมือนกันเป๊ะ ส่งผลให้พวกเขาเสีย Thrifty Round สำคัญ ที่กลายเป็นจุดเริ่มต้นของการ Snowball ฝั่งบุกของ T1 นั่นเอง",
        { video: "PRXvsT1/hilight2.mp4", title: "Meteor ดักตัด OP", caption: "something โดน Meteor ดักเหลี่ยมตัด OP — เปิด Thrifty Round ให้ T1" },
        "T1 เริ่มเดินเกมบุกที่รุนแรง เข้า Site ด้วยการใช้ Double Duelist โถมเข้ามาใน Site พลังของ iZu และ BuZz ซึ่งก็น่าแปลกใจที่ PRX ดูรับมือเกมบุกตรงๆ ไม่ได้ซะงั้น",
        { video: "PRXvsT1/hilight3.mp4", title: "A Entry ของ T1", caption: "BuZz ไหลเข้ามาในไซต์ ตัดได้ 1 — ฝั่งบุก T1 ยึด A ได้สำเร็จ" },
        { video: "PRXvsT1/hilight4.mp4", title: "B Entry + Munchkin TP", caption: "f0rsakeN พยายามรับคนเดียวแต่ไม่ไหว Munchkin TP หลังไซต์เติมจังหวะจน T1 ปิดได้ B Site" },
        "กลายเป็นว่า PRX ตั้งรับไม่อยู่ จบครึ่งแรก 7-5 แต่พอสลับฝั่ง ภาพเปลี่ยนทิศทันที เพราะกลายเป็น PRX ได้เปรียบคืนมาบ้าง แม้ว่าจะแพ้ปืนสั้นไป แต่ Round eco จู่ๆ something ระเบิดพลัง พุ่งเข้า Site โต้งๆ ได้ Timing แล้วตัด Munchkin ดึง Site B มาให้ทีมได้ซะงั้น",
        { video: "PRXvsT1/hilight5.mp4", title: "something Dash เข้า B", caption: "B Entry โดย something ที่ Dash เข้ามาตรงๆ แต่กลับได้ผลซะงั้น" },
        "แม้ว่า Round หลังจาก Round นี้ก็จะไปแพ้ Thrifty คืนให้ T1 แต่มันทำให้เราได้เห็นว่า เกมนี้ something ลั่นจัดๆ เพราะถัดไปต่อจากนี้ PRX เริ่ม Dominate คืนทันที ด้วยพลัง Operator ที่ something ซื้อมาเล่นในฝั่งบุกนั่นเอง และ something ทำเกมไม่หยุดเลย",
        { video: "PRXvsT1/hilight6.mp4", title: "OP ฝั่งบุก ลั่นรัวๆ", caption: "Round แรกที่ something เริ่มใช้ Operator ฝั่งบุก ทำเกมได้รัวๆ" },
        "แต่ Operator ทำเกมอย่างเดียว คงไม่ได้ทำให้ T1 โดนกดดันหนักขนาดนี้แน่นอน ตัวแปรที่ทำให้เกมกันของ T1 แย่ขนาดนี้ คงไม่พ้น Meteor ที่เขาทำหน้าที่ได้แย่พอสมควรกับการคุมพื้นที่ ถ้าไม่โดนตัดเอง ก็ทิ้ง Position ไปดื้อๆ ไม่แน่ใจว่าทำไมเหมือนกัน",
        { video: "PRXvsT1/hilight7.mp4", title: "Meteor ทิ้งตำแหน่ง", caption: "Meteor จู่ๆ Move ไปที่ A แบบงงๆ ส่งผลให้กลางเปิด PRX เข้ามา Lurk ได้ง่ายๆ" },
        { video: "PRXvsT1/hilight8.mp4", title: "Meteor peek กลางพลาด", caption: "Meteor peek ออกกลางทั้งที่ iZu เพิ่งโดน something เก็บไปไม่กี่วินาทีก่อน" },
        "กลายเป็นว่าเกมกันเละเทะจนกันไม่อยู่ จบไปที่สกอร์ 9-13 ซะงั้น"
      ],
      pull: "\"แค่ Round เดียวก็เล่าสไตล์ของสองทีมได้ครบ — ไว แรง ไม่สนหน้าไหน ถ้ามา มาเหนือ ถ้าพลาด ก็ตลกจนล้อได้\"",
      stats: [
        { value: "25 / 12", label: "something K/D — แบกฝั่งเดียว" },
        { value: "5 / 17", label: "Munchkin K/D — Rating 0.38" },
        { value: "8-0", label: "Run ครึ่งหลังของ PRX ก่อนเกมจบ" }
      ]
    },
    {
      title: "Map 2 · Ascent — Yoru Ultimate ที่เกือบเป็นจุดพลิก",
      sub: "T1 บุกบ้าระห่ำขึ้น 1-6 — PRX ดึงกลับเป็น 5-7 ก่อนเสีย Pistol+Buy หลัง",
      paragraphs: [
        "แมพสอง Ascent ที่แม้ว่า PRX จะเพิ่งชนะมา แต่ T1 ก็ยังกล้าหยิบมาเล่น และมันได้ผล เพราะพวกเขาเอาชนะ PRX ไปได้ในด่านนี้ และผมก็เคยวิเคราะห์ไว้นิดหนึ่งแล้วว่า ผมไม่ค่อยชอบด่านนี้ของ PRX สักเท่าไหร่แม้ชนะ KRX มาได้ก็ตาม",
        "สิ่งที่เกิดขึ้นหลักๆ ในแมพนี้คือ ฝั่งกัน พวกเขากันไม่ได้เช่นเคย เกมบุกของ T1 ก็ไม่มีอะไรต่างกับแมพที่แล้ว — เดินมาชนตรงๆ ซึ่งหน้าเลย แล้ว PRX ก็รับไม่อยู่ซะงั้น",
        { video: "PRXvsT1/hilight9.mp4", title: "BuZz เดินมายิงดื้อๆ", caption: "BuZz เดินจาก A Short มายิง f0rsakeN ดื้อๆ" },
        "เกมเพลย์เข้าทาง T1 จนนำไป 1-6 ได้ 2 Pause จาก PRX ตั้งแต่ครึ่งแรก แต่ Pause ที่สอง เหมือนปลุกพลังของ PRX ให้ฟื้นคืนมา จากจังหวะ Play สวยๆ ของ something ที่เสกวินออกมาให้เห็น โครตจะบ้ากล้าเล่น กับการดักตัด 1 หน้า A แล้วอัลติเซฟตัวเองออกมาได้ พลิกแรงกดดันไปหา T1 ทันที",
        { video: "PRXvsT1/hilight10.mp4", title: "something Make Play หน้า A", caption: "something เสกวินสวยๆ ดักตัด 1 แล้วอัลติเซฟออกมาให้กับ PRX" },
        "พอได้ Momentum กลับคืนมา PRX ก็ทะยานสวนคืนไปบ้าง Operator ของ something แผงฤทธิ์อีกครั้ง พา PRX กลับมา 7-5 ได้สำเร็จ",
        { video: "PRXvsT1/hilight11.mp4", title: "something 2k OP + Shorty", caption: "จังหวะ 2k ตรงกลาง OP + Shorty ของ something" },
        "สลับมาฝั่งบุกของ T1 พวกเขาเอาชนะรอบปืนสั้นไปได้ เลยดึงความได้เปรียบมา แถม Buy Round แรก PRX พยายามเดิน Protocol ส่ง something วาปเข้ากลางพร้อม Recon แต่ความบ้าบิ่นของ BuZz พี่แกเดินทะลุ smoke ออกมาแบบล่กๆ แต่ No-scope ตัด something ได้เฉย เรียกว่าเบรกเกมบุก Buy Round แรก และทำให้ PRX เสีย Round สำคัญทันที",
        { video: "PRXvsT1/hilight12.mp4", title: "BuZz No-scope ใส่ something", caption: "BuZz No-scope ใส่ something แบบล่กๆ แต่ได้เฉย" },
        "T1 ยังพอประคับประคองได้ แต่ Round ที่ 18 คือหนึ่งใน Round ที่สุดยอดที่สุดจากฝั่งของ PRX กับการใช้ Ultimate Yoru ได้ Value สูงมาก เริ่มจากส่งวาปไปกลาง → อัลติไปเช็คข่าวที่ A Short เจอ Sova → วาปไปกลาง เคลียร์กลาง สร้างพื้นที่ให้เพื่อนเดินไปยึด → วิ่งไป B Main เจอ BuZz แม้ตัดไม่ได้และต้องวาปออก แต่ทำให้เพื่อนยึด B Main ได้ — สรุปคือ อัลติเมทเดียว เคลียร์ A Short, เคลียร์กลาง และเคลียร์ B Main รวดเดียว ทำให้การเข้า B ง่ายขึ้นทันที",
        { video: "PRXvsT1/hilight13.mp4", title: "Yoru Ultimate เปิด B", caption: "something Yoru's Ultimate เปิดพื้นที่ให้ PRX เดินเกมกดดัน B ได้อย่างยอดเยี่ยม" },
        "ถึงกระนั้น แม้ว่าจะทำเกมได้สวยงาม แต่พอไม่มี Ultimate ของ Yoru พวกเขาก็ทำเกมได้ลำบากมาก และมักจะโดน T1 ดักเล่นงานใน Site ได้ง่ายๆ ทำให้ไม่สามารถทำเกมได้เปรียบได้เท่าที่ควรจะเป็น ท้ายที่สุด พ่ายแพ้ไปในสกอร์ 10-13"
      ],
      pull: "\"อัลติเมทเดียว เคลียร์ A Short, เคลียร์กลาง และเคลียร์ B Main รวดเดียว — Yoru Ult ที่ได้ Value สูงที่สุดเท่าที่เคยเห็นมา\"",
      stats: [
        { value: "21 / 14", label: "iZu (Sova) — เสาหลักของ T1" },
        { value: "1-6", label: "ช่วง Snowball ของ T1 ในครึ่งแรก" },
        { value: "5-7", label: "PRX ปลุกฟื้นคืนหลัง Pause ที่สอง" }
      ]
    },
    {
      title: "Map 3 · Breeze — PRX ปิดเส้นทาง T1",
      sub: "T1 ทำ OP ตกในมือ something — เกมพลิก PRX กดครึ่งแรก 9-3 จบ 13-8",
      paragraphs: [
        "มาที่แมพ 3 ที่ T1 เปิดมาได้เปรียบหลังจากชนะปืนสั้นไปได้ การแข่งขันดำเนินไปแบบปกติ T1 สกอร์เป็น 2-1 แต่ Full Buy Round แรกของ T1 ใน Round ที่ 4 BuZz ซื้อ OP มาเล่น แล้วดันแพ้ OP ตกไปในมือของปีศาจอย่าง something ที่เก็บ OP มาเล่นเองในฝั่งบุก ก็แผงฤทธิ์เลยครับ — something ใช้ OP Make Play สวยๆ ให้เห็นอีกครั้ง",
        { video: "PRXvsT1/hilight14.mp4", title: "OP Play B Site", caption: "something OP play site B ปิดฉากด้วย Updraft Shorty เก็บไป 3 Kills" },
        "PRX คุมโมเมนตั้มเกมได้ต่อเนื่อง T1 เริ่มหลุดแปลกๆ ทำให้ PRX สร้างความได้เปรียบต่อเนื่อง ปิดฉากครึ่งแรกไปที่ 9-3",
        { video: "PRXvsT1/hilight15.mp4", title: "W-Gaming ชาร์จ Site", caption: "PRX ชาร์จเข้า Site ตรงๆ อย่างรุนแรงจน T1 ต้านทานไม่อยู่" },
        "สลับมาครึ่งหลัง ที่ PRX เป็นฝั่งกัน แม้ว่าชนะปืนสั้น แต่ไม่โยน ไม่ PRX ครับ — รอบ Anti-eco ยังมั่นใจความบ้าคลั่ง ดันออกไปนอก Site หวังล่าปิด Round ไวๆ กลายเป็นโดน T1 สวนคืนแทนซะงั้น",
        { video: "PRXvsT1/hilight16.mp4", title: "PRX เสีย Anti-eco", caption: "PRX เสีย Anti-eco จากการเดินดันมาลึกเกินไป" },
        "กลายเป็น T1 ได้โมเมนตั้มกลับคืนมา ดึงขึ้น 8-10 ได้สำเร็จ ท่าทีเหมือน T1 จะ Comeback กลับมาในเกมนี้ แต่ Round ที่ 19 PRX ตัดสินใจ Gamble Stack A Main แล้วอ่านถูก ดัก Timing ของ T1 ได้สำเร็จ ตัดโมเมนตั้มกลับคืนมาให้กับ PRX",
        { video: "PRXvsT1/hilight17.mp4", title: "Stack A Main สำเร็จ", caption: "PRX Gamble A Main สำเร็จ ดึงขึ้น 8-11 ได้" },
        "และพอ T1 เสียโมเมนตั้มไป พวกเขาเรียกกระแสเกมกลับคืนมาไม่ได้ และท้ายที่สุดก็พ่ายแพ้ให้กับ PRX ไปในสกอร์ 8-13 — ปิดฉากเส้นทางของ T1 ในฐานะอันดับ 4 และอดไป Masters London"
      ],
      pull: "\"BuZz ซื้อ OP มาเล่น แล้วดันทำตกไปในมือของปีศาจอย่าง something — แค่จังหวะเดียว ก็พลิกทั้งแมพ\"",
      stats: [
        { value: "9-3", label: "PRX กดครึ่งแรกบนฝั่งบุก" },
        { value: "22 / 12", label: "something K/D ปิดงาน Map 3" },
        { value: "Round 19", label: "Stack A Main ตัดความหวัง T1" }
      ]
    },
    {
      title: "บทสรุป — ความ Bipolar ของ PRX และ T1 ที่ต้องปรับทัพอีกเยอะ",
      sub: "PRX เข้ารอบต่อ, T1 จบที่อันดับ 4 อดไป Masters London",
      paragraphs: [
        "สรุปภาพรวมเลยคือ PRX ใช้พลังของ Operator ของ something มหาศาลอย่างมาก หลายๆ Play ที่พวกเขาสร้างความได้เปรียบ มาจากตัวของ something ทั้งนั้น Win condition จากคนอื่นๆ เช่น Jinggg และ f0rsakeN มีไม่เยอะเท่าที่ควร ยังดีที่ f0rsakeN มีบทบาทมากขึ้นในแมพ 3",
        "แต่เรียกได้ว่า ถ้าขาด something ไปเนี่ย เกมเพลย์ของ PRX จะดรอปมหาศาลเลย เป็นเรื่องที่น่าเป็นห่วงหาก PRX ยังไม่สามารถเรียก Win Condition จากคนอื่นๆ ได้ — ก็ตามสไตล์ทีม Bipolar เดาฟอร์มได้ยาก ถ้ามา มาอย่างเหนือ แต่ไม่มา ก็หายไปเลย",
        "ส่วน T1 ก็นะ ถ้าไม่ได้ร่างเวอร์ของ BuZz และ stax เนี่ย ก็แทบจะไม่มีอะไรที่ดูยกระดับทีมได้เลย ตัวของ Meteor ที่ Underperform ต่อเนื่อง ชักไม่แน่ใจแล้วว่าพี่ Meteor ของเรายังจะไหวกับการแข่งขันอยู่รึเปล่า",
        "ทั้งทีม T1 เมื่อเผชิญหน้ากับ PRX ดูเหมือนจะมีคนเดียวที่พอไปวัดไปวาได้ นั่นคือ iZu — เป็นคนเดียวที่ดูไม่มีอะไรผิดพลาด ส่วนคนอื่นๆ มีเพียบ: BuZz ยิง OP พลาด, stax เหม่อ วางเป้าไม่ละเอียดจนโดนยิงหลัง, จังหวะ Meteor ด่าน Split ที่แย่ที่สุดเท่าที่เล่นมาในปีนี้, Munchkin ที่แทบไม่มีอะไรโดดเด่นเลย — เรียกว่า T1 ต้องปรับทัพกันอีกเยอะ หากพวกเขาต้องการกลับมาแข็งแกร่งกว่านี้"
      ],
      pull: "\"ถ้าขาด something เกมของ PRX จะดรอปมหาศาล — ตามสไตล์ Bipolar ถ้ามา มาเหนือ ถ้าไม่มา ก็หายไปเลย\"",
      stats: [
        { value: "PRX", label: "ไปต่อ Lower Final" },
        { value: "T1", label: "จบอันดับ 4 — อดไป Masters London" },
        { value: "iZu", label: "ผู้เล่น T1 คนเดียวที่ค่าเฉลี่ยเหนือ 1.00" }
      ]
    }
  ]
};
