const itinerary = [
  {
    label: "Day 1",
    short: "抵达与海滨",
    title: "先认识海岸线，不急着打卡",
    badge: "轻松步行日",
    icon: "footprints",
    summary:
      "住在 Trần Phú 海滨大道附近，第一天只处理换汇、交通和方向感。晚餐选评价量大的越南菜，夜市只逛不重买。",
    slots: [
      ["抵达", "金兰机场 → 市中心", "Grab / Green SM 约 40–50 分钟；机场巴士约 50,000 VND。"],
      ["16:00", "芽庄海滩与 2/4 广场", "沿海散步，顺路看沉香塔外观，把移动范围控制在步行距离。"],
      ["18:30", "第一顿越南菜", "Ăn Thôi、NHÀ BẾP NHA TRANG 或 Cơm Nhà Nha Trang。"],
      ["20:00", "芽庄夜市", "先比价再买，商品重复度较高；小纪念品适合最后一天集中采购。"],
      ["21:00", "椰奶咖啡", "Cộng Cà Phê、CAFE DEP 或 CCCP Coffee。"],
    ],
  },
  {
    label: "Day 2",
    short: "北城文化线",
    title: "从占婆塔走到温热泥浆",
    badge: "文化与放松",
    icon: "landmark",
    summary:
      "Hòn Chồng、婆那加占婆塔和 Tháp Bà 泥浆浴都在北城方向，放在同一天能减少往返。下雨时取消湿滑的海岬。",
    slots: [
      ["06:30", "Hòn Chồng 海岬", "参考开放 06:00–18:00，门票约 30,000 VND；雨天岩石湿滑。"],
      ["08:30", "婆那加占婆塔", "参考开放 06:00–17:30；进入祭祀区域需遮肩、过膝。"],
      ["11:30", "本地简餐", "Cà-mèn 海鱼饭，或 Phở bò / Bún bò Cây Bồng。"],
      ["13:30", "Tháp Bà 泥浆浴", "参考开放 07:30–17:00；私人泥浆浴约 350,000 VND 起。"],
      ["18:00", "海鲜晚餐", "Ngoc Trai 或 Hoang Sa。先确认公斤价、加工费和总重。"],
    ],
  },
  {
    label: "Day 3",
    short: "VinWonders",
    title: "把一整天留给 Hon Tre 岛",
    badge: "全日乐园",
    icon: "ferris-wheel",
    summary:
      "上午优先户外热门项目，午后转入水族馆和水上乐园。带泳衣、防水袋和轻便雨衣，强降雨时部分项目会暂停。",
    slots: [
      ["08:15", "从市中心出发", "预留排队和过海时间；标准成人票参考约 1,050,000 VND。"],
      ["09:00", "高空与热门项目", "入园后先处理排队项目，再去 King's Garden。"],
      ["13:00", "Sea World", "午后最热或下雨时转室内水族馆。"],
      ["15:00", "Water World", "提前换好泳衣，确认寄存柜与毛巾是否另收费。"],
      ["19:00", "喷泉与 Tata Show", "音乐喷泉后看夜间秀，结束再集中离园。"],
    ],
  },
  {
    label: "Day 4",
    short: "海岛或雨天线",
    title: "由海况决定，不由预订绑架",
    badge: "机动天气日",
    icon: "waves",
    summary:
      "海况好则去 Hòn Mun 浮潜；风浪大时改走寺庙、市场、咖啡厅和商场。抵达后再根据未来 48 小时预报决定。",
    slots: [
      ["晴天", "Hòn Mun 跳岛 / 浮潜", "参考 500,000–900,000 VND，确认船型、保险、装备和取消规则。"],
      ["雨天 09:00", "Long Sơn Pagoda", "随后看芽庄大教堂开放区域，再去 Xóm Mới Market。"],
      ["雨天 12:00", "越南家常午餐", "NHÀ BẾP NHA TRANG 或 Cơm Nhà Nha Trang。"],
      ["雨天 14:00", "咖啡与商场", "Nha He / Stockholm → Vincom Plaza Trần Phú / Gold Coast。"],
      ["18:30", "高分晚餐", "NHÀ HÀNG CẢM ĐỘNG、Green Home 或 MaXi's。"],
    ],
  },
  {
    label: "Day 5",
    short: "市场与返程",
    title: "最后一天只买能顺利带走的",
    badge: "采购与返程",
    icon: "shopping-bag",
    summary:
      "早上看本地市场，中午前集中买伴手礼。湿货先确认航司和入境规定，国际航班至少提前三小时到机场。",
    slots: [
      ["06:30", "Xóm Mới / Đầm Market", "本地生活选 Xóm Mới；集中买干货和纪念品选 Đầm Market。"],
      ["09:00", "伴手礼采购", "Ngọc Linh、Xóm Biển、SEAVY 或 Sáu Ngọ，要求真空包装。"],
      ["11:00", "最后一杯咖啡", "Ola、P2 或 Nha He，按酒店和机场方向选择。"],
      ["返程", "市中心 → CXR", "车程约 45–60 分钟；雨天和晚高峰额外留 30 分钟。"],
    ],
  },
];

const places = [
  {
    id: "r01",
    category: "restaurant",
    type: "越南菜",
    name: "Ăn Thôi",
    rating: 4.8,
    reviews: 11348,
    address: "03 Ng. Đức Kế",
    note: "高评价量越南菜，适合作为抵达后的第一顿。",
  },
  {
    id: "r02",
    category: "restaurant",
    type: "海鲜餐厅",
    name: "Ngoc Trai Seafood Restaurant - Since 2004",
    rating: 4.8,
    reviews: 5216,
    address: "97 Nguyễn Thị Minh Khai",
    note: "适合多人海鲜晚餐；下单前确认重量和加工费。",
  },
  {
    id: "r03",
    category: "restaurant",
    type: "海鲜餐厅",
    name: "Hoang Sa restaurant",
    rating: 4.8,
    reviews: 4102,
    address: "64 Trần Phú",
    note: "位于海滨大道，交通方便。",
  },
  {
    id: "r04",
    category: "restaurant",
    type: "越南菜",
    name: "NHÀ BẾP NHA TRANG",
    rating: 4.8,
    reviews: 3569,
    address: "01 Ng. Đức Kế",
    note: "越南家常口味，适合家庭用餐。",
  },
  {
    id: "r05",
    category: "restaurant",
    type: "综合餐厅",
    name: "NHÀ HÀNG CẢM ĐỘNG",
    rating: 4.9,
    reviews: 3437,
    address: "Chung cư 09",
    note: "高分综合餐厅，晚餐和夜宵时段均可考虑。",
  },
  {
    id: "r06",
    category: "restaurant",
    type: "海鲜餐厅",
    name: "TOM79 / 똠79",
    rating: 4.8,
    reviews: 3274,
    address: "79 Võ Trứ",
    note: "偏高预算海鲜，点餐前先确认总价。",
  },
  {
    id: "r07",
    category: "restaurant",
    type: "连锁快餐",
    name: "Texas Chicken Nha Trang Center",
    rating: 4.8,
    reviews: 2666,
    address: "20 Trần Phú, Nha Trang Center",
    note: "亲子或雨天备用，不属于本地特色。",
  },
  {
    id: "r08",
    category: "restaurant",
    type: "韩餐",
    name: "Nhà Hàng Hàn Quốc Jejuga",
    rating: 4.8,
    reviews: 2638,
    address: "131 Nguyễn Thị Minh Khai",
    note: "需要换口味时的韩餐备选。",
  },
  {
    id: "r09",
    category: "restaurant",
    type: "综合餐厅",
    name: "Nhà Hàng Chang Tho",
    rating: 4.8,
    reviews: 2568,
    address: "3 Tôn Đản",
    note: "位于游客区，晚饭后方便继续步行。",
  },
  {
    id: "r10",
    category: "restaurant",
    type: "越南家常菜",
    name: "Cơm Nhà Nha Trang",
    rating: 4.8,
    reviews: 1876,
    address: "45 Lê Đại Hành",
    note: "适合想吃米饭和家常菜的正餐。",
  },
  {
    id: "r11",
    category: "restaurant",
    type: "俄式餐厅",
    name: "Oh, Pelmeshki!",
    rating: 4.8,
    reviews: 1600,
    address: "34/2 Nguyễn Thiện Thuật",
    note: "俄式饺子，连续吃越南菜后的换口味选择。",
  },
  {
    id: "r12",
    category: "restaurant",
    type: "综合餐厅",
    name: "Nhà hàng Green Home",
    rating: 4.9,
    reviews: 1492,
    address: "42/17 Hùng Vương",
    note: "高分综合餐厅，位置在市中心。",
  },
  {
    id: "r13",
    category: "restaurant",
    type: "西餐简餐",
    name: "MaXi's",
    rating: 4.9,
    reviews: 1245,
    address: "120/33 Nguyễn Thiện Thuật",
    note: "游客区内的综合西餐与简餐。",
  },
  {
    id: "r14",
    category: "restaurant",
    type: "连锁火锅",
    name: "Kichi-Kichi Lotte Mart Nha Trang",
    rating: 4.8,
    reviews: 1184,
    address: "Lotte Mart Phương Sơn",
    note: "旋转火锅，适合雨天和多人用餐。",
  },
  {
    id: "r15",
    category: "restaurant",
    type: "韩餐",
    name: "Nhà hàng Hàn Quốc Bắp Độc",
    rating: 4.9,
    reviews: 1042,
    address: "4A Ngô Thời Nhiệm",
    note: "评价量较大的高分韩餐备选。",
  },
  {
    id: "r16",
    category: "restaurant",
    type: "韩式炸鸡",
    name: "Vons Chicken",
    rating: 4.8,
    reviews: 699,
    address: "109A Nguyễn Thị Minh Khai",
    note: "适合夜宵或外带。",
  },
  {
    id: "r17",
    category: "restaurant",
    type: "夜宵小吃",
    name: "CHÂN GÀ CHỜ NHA TRANG",
    rating: 4.9,
    reviews: 533,
    address: "26 Nguyễn Chánh",
    note: "鸡脚和小吃，适合夜宵。",
  },
  {
    id: "r18",
    category: "restaurant",
    type: "本地简餐",
    name: "Cà-mèn - Cơm cá biển",
    rating: 4.8,
    reviews: 532,
    address: "04 Đường Đề Pô",
    note: "海鱼饭，适合 Day 2 北城文化线午餐。",
  },
  {
    id: "r19",
    category: "restaurant",
    type: "越南粉面",
    name: "Phở bò, Bún bò Cây Bồng",
    rating: 4.9,
    reviews: 282,
    address: "18 Nguyễn Biểu",
    note: "牛肉粉与顺化牛肉粉，适合早餐。",
  },
  {
    id: "r20",
    category: "restaurant",
    type: "综合餐厅",
    name: "TITO restaurant",
    rating: 4.9,
    reviews: 179,
    address: "30A Nguyễn Thiện Thuật",
    note: "评分高但评价量相对少，作为附近备选。",
  },
  {
    id: "c01",
    category: "cafe",
    type: "越南咖啡",
    name: "Cộng Cà Phê",
    rating: 4.9,
    reviews: 7095,
    address: "22 Nguyễn Thiện Thuật",
    note: "椰奶咖啡和复古主题；游客多，高峰可能等位。",
  },
  {
    id: "c02",
    category: "cafe",
    type: "早午餐咖啡",
    name: "Alpaca",
    rating: 4.8,
    reviews: 6729,
    address: "10/1B Nguyễn Thiện Thuật",
    note: "早午餐和咖啡质量稳定，有儿童菜单。",
  },
  {
    id: "c03",
    category: "cafe",
    type: "咖啡厅",
    name: "CAFE DEP CORNER",
    rating: 4.9,
    reviews: 5548,
    address: "120 Hồng Bàng",
    note: "高评分与高评价量兼具，适合早餐或下午休息。",
  },
  {
    id: "c04",
    category: "cafe",
    type: "越南咖啡",
    name: "CCCP Coffee — 22 Tô Hiến Thành",
    rating: 4.5,
    reviews: 4367,
    address: "22 Tô Hiến Thành",
    note: "营业时间长，蛋奶咖啡较受欢迎。",
  },
  {
    id: "c05",
    category: "cafe",
    type: "烘焙咖啡",
    name: "Gạch Đỏ Bakery & Coffee",
    rating: 4.6,
    reviews: 2431,
    address: "22 Ng. Đức Kế",
    note: "面包甜点强，饮品可主动要求少冰。",
  },
  {
    id: "c06",
    category: "cafe",
    type: "景观咖啡",
    name: "Ola Cafe",
    rating: 4.7,
    reviews: 2385,
    address: "31 Nguyễn Hữu Huân",
    note: "夜间灯光和空间感好，雨天户外座位受影响。",
  },
  {
    id: "c07",
    category: "cafe",
    type: "办公咖啡",
    name: "Stockholm Bistro & Co-working",
    rating: 4.7,
    reviews: 2198,
    address: "43 Lý Tự Trọng",
    note: "桌面宽、环境安静，适合办公或雨天停留。",
  },
  {
    id: "c08",
    category: "cafe",
    type: "音乐咖啡",
    name: "Hòn Kiến Coffee — Live Music",
    rating: 4.8,
    reviews: 2107,
    address: "56 Đống Đa",
    note: "贝壳主题空间，周末可能有现场音乐。",
  },
  {
    id: "c09",
    category: "cafe",
    type: "越南咖啡",
    name: "CCCP Coffee — 112 Hồng Bàng",
    rating: 4.6,
    reviews: 1600,
    address: "112 Hồng Bàng",
    note: "相对安静，适合聊天或电脑办公。",
  },
  {
    id: "c10",
    category: "cafe",
    type: "轻食咖啡",
    name: "Sweet Secret",
    rating: 4.6,
    reviews: 1532,
    address: "35/97-35/99 Nguyễn Thiện Thuật",
    note: "轻食、松饼和素食选择较多，约 18:00 关门。",
  },
  {
    id: "c11",
    category: "cafe",
    type: "精品咖啡",
    name: "P2 Café",
    rating: 4.7,
    reviews: 1461,
    address: "3 Hùng Vương",
    note: "设备与空间好，店内烘焙；部分饮品评价不稳定。",
  },
  {
    id: "c12",
    category: "cafe",
    type: "花园咖啡",
    name: "Nha He Coffee Shop",
    rating: 4.8,
    reviews: 1283,
    address: "120/8 Nguyễn Thiện Thuật",
    note: "植物、陶艺与安静办公空间；入口位于巷内。",
  },
  {
    id: "c13",
    category: "cafe",
    type: "连锁茶咖",
    name: "PHÚC LONG COFFEE & TEA",
    rating: 4.7,
    reviews: 1125,
    address: "Lô TM01 Khu Biệt Thự Biển, Trần Phú",
    note: "出品稳定，适合海滨行程顺路休息。",
  },
  {
    id: "c14",
    category: "cafe",
    type: "餐厅咖啡",
    name: "Moka restaurant cafe",
    rating: 4.5,
    reviews: 1117,
    address: "100 Hùng Vương",
    note: "早餐、糕点和咸咖啡，也适合办公。",
  },
  {
    id: "c15",
    category: "cafe",
    type: "独立咖啡",
    name: "Lekima",
    rating: 4.9,
    reviews: 799,
    address: "6/2 Lê Đại Hành",
    note: "市中心高分小店，适合避开大型网红店。",
  },
  {
    id: "c16",
    category: "cafe",
    type: "花园餐咖",
    name: "Yên Garden Bistro",
    rating: 4.8,
    reviews: 748,
    address: "1 Trần Nguyên Hãn",
    note: "花园风格，适合早午餐和安静聊天。",
  },
  {
    id: "c17",
    category: "cafe",
    type: "复古咖啡",
    name: "Cafe 1975",
    rating: 4.9,
    reviews: 690,
    address: "7A Lê Đại Hành",
    note: "复古氛围，市中心步行方便。",
  },
  {
    id: "c18",
    category: "cafe",
    type: "咖啡与茶",
    name: "KAT Coffee & Tea",
    rating: 4.7,
    reviews: 576,
    address: "37 Ba Làng",
    note: "适合 Hòn Chồng 行程后休息。",
  },
  {
    id: "c19",
    category: "cafe",
    type: "咖啡厅",
    name: "LA:DO COFFEE",
    rating: 4.8,
    reviews: 504,
    address: "97B Nguyễn Thiện Thuật",
    note: "游客区位置方便，适合晚饭后。",
  },
  {
    id: "c20",
    category: "cafe",
    type: "独立咖啡",
    name: "LIVIN Coffee",
    rating: 5.0,
    reviews: 318,
    address: "77 Phong Châu",
    note: "满分但评价量相对少，适合想尝试新店时备选。",
  },
  {
    id: "s01",
    category: "shopping",
    type: "大型商场",
    name: "Nha Trang Center",
    rating: 4.2,
    reviews: 11877,
    address: "20 Trần Phú",
    note: "海边商场，有影院与餐饮；设施相对较旧。",
  },
  {
    id: "s02",
    category: "shopping",
    type: "商场",
    name: "Vincom Plaza Trần Phú",
    rating: 4.4,
    reviews: 2804,
    address: "78-80 Trần Phú",
    note: "WinMart、影院和餐饮齐全，雨天方便。",
  },
  {
    id: "s03",
    category: "shopping",
    type: "商场",
    name: "Gold Coast Mall Nha Trang",
    rating: 4.3,
    reviews: 1376,
    address: "01 Trần Hưng Đạo",
    note: "有 Lotte Mart、影院与 KTV。",
  },
  {
    id: "s04",
    category: "shopping",
    type: "商场",
    name: "Vincom Plaza Nha Trang",
    rating: 4.2,
    reviews: 1370,
    address: "60 Thái Nguyên",
    note: "靠近车站，本地顾客相对更多。",
  },
  {
    id: "s05",
    category: "shopping",
    type: "商场",
    name: "Vincom Plaza Lê Thánh Tôn",
    rating: 4.5,
    reviews: 804,
    address: "44-46 Lê Thánh Tôn",
    note: "规模较小但位置方便。",
  },
  {
    id: "s06",
    category: "shopping",
    type: "商场",
    name: "AB Central Square",
    rating: 4.2,
    reviews: 675,
    address: "44 Trần Phú",
    note: "游客区内，有快餐和进口超市。",
  },
  {
    id: "s07",
    category: "shopping",
    type: "商场 / 大卖场",
    name: "GO! Nha Trang",
    rating: 4.2,
    reviews: 6090,
    address: "Đường 19/5, Vĩnh Điềm Trung",
    note: "大卖场与 CGV，距离海滨酒店区较远。",
  },
  {
    id: "s08",
    category: "shopping",
    type: "大型超市",
    name: "LOTTE MART Nha Trang",
    rating: 4.3,
    reviews: 7538,
    address: "58 đường 23 Tháng 10",
    note: "货品齐全，适合一次性采购。",
  },
  {
    id: "s09",
    category: "shopping",
    type: "大型超市",
    name: "Lotte Mart Nha Trang Gold Coast",
    rating: 4.5,
    reviews: 4256,
    address: "01 Trần Hưng Đạo",
    note: "海滨酒店区最方便的大型超市之一。",
  },
  {
    id: "s10",
    category: "shopping",
    type: "大型超市",
    name: "Siêu thị Co.opmart Nha Trang",
    rating: 4.2,
    reviews: 3050,
    address: "02 Lê Hồng Phong",
    note: "适合买越南本地食品与日用品。",
  },
  {
    id: "s11",
    category: "shopping",
    type: "批发超市",
    name: "MM Mega Market Nha Trang",
    rating: 4.5,
    reviews: 1359,
    address: "10 đường 23 Tháng 10",
    note: "适合多人或大量采购，不适合只买几件。",
  },
  {
    id: "s12",
    category: "shopping",
    type: "超市",
    name: "WinMart Vincom Trần Phú",
    rating: 4.1,
    reviews: 341,
    address: "78-80 Trần Phú",
    note: "通常比商场更早开门，适合补给。",
  },
  {
    id: "s13",
    category: "shopping",
    type: "进口便利超市",
    name: "J24 Mart — Hồng Bàng",
    rating: 4.9,
    reviews: 500,
    address: "92B Hồng Bàng",
    note: "地图显示全天营业，深夜前往仍应再次核对。",
  },
  {
    id: "s14",
    category: "shopping",
    type: "超市 / 纪念品",
    name: "4U Mart & Souvenirs",
    rating: 5.0,
    reviews: 316,
    address: "09 Nguyễn Thiện Thuật",
    note: "游客区内，营业时间相对较晚。",
  },
  {
    id: "s15",
    category: "shopping",
    type: "便利市场",
    name: "Cham Market",
    rating: 5.0,
    reviews: 259,
    address: "02 Nguyễn Thị Minh Khai",
    note: "靠近 2/4 广场，适合顺路补给。",
  },
  {
    id: "s16",
    category: "shopping",
    type: "韩式食品超市",
    name: "K-MART Nha Trang",
    rating: 4.5,
    reviews: 117,
    address: "124 Bạch Đằng",
    note: "泡面、泡菜和冷冻食品较齐全。",
  },
  {
    id: "s17",
    category: "shopping",
    type: "便利超市",
    name: "COASTAL MART",
    rating: 5.0,
    reviews: 83,
    address: "30C Nguyễn Thiện Thuật",
    note: "游客区内，营业到较晚时段。",
  },
  {
    id: "s18",
    category: "shopping",
    type: "特产店",
    name: "Đặc Sản Nha Trang Ngọc Linh",
    rating: 5.0,
    reviews: 4303,
    address: "Đầm Market G17",
    note: "干海鲜、鱼饼、发酵猪肉与坚果选择集中。",
  },
  {
    id: "s19",
    category: "shopping",
    type: "特产店",
    name: "Xóm Biển — Cô em nem chả",
    rating: 5.0,
    reviews: 1289,
    address: "60 Phan Bội Châu",
    note: "包装整齐，适合购买送礼。",
  },
  {
    id: "s20",
    category: "shopping",
    type: "干海鲜店",
    name: "SEAVY — hải sản khô",
    rating: 4.8,
    reviews: 769,
    address: "104 Nguyễn Thị Minh Khai",
    note: "游客区步行方便，可要求真空包装。",
  },
  {
    id: "s21",
    category: "shopping",
    type: "干海鲜批发店",
    name: "Hải sản khô Sáu Ngọ",
    rating: 5.0,
    reviews: 316,
    address: "41-43 Ngô Gia Tự",
    note: "适合大量采购，先问清零售价与批发价。",
  },
];

const categoryMeta = {
  restaurant: { label: "餐厅", icon: "utensils" },
  cafe: { label: "咖啡", icon: "coffee" },
  shopping: { label: "购物", icon: "shopping-bag" },
};

const state = {
  activeDay: 0,
  category: "all",
  query: "",
  sort: "recommended",
  favoritesOnly: false,
  visibleCount: 12,
  favorites: loadFavorites(),
};

const elements = {
  header: document.querySelector("[data-header]"),
  dayTabs: document.querySelector("[data-day-tabs]"),
  dayPanel: document.querySelector("[data-day-panel]"),
  search: document.querySelector("[data-place-search]"),
  sort: document.querySelector("[data-place-sort]"),
  categoryButtons: [...document.querySelectorAll("[data-category]")],
  favoriteFilter: document.querySelector("[data-favorite-filter]"),
  favoriteShortcut: document.querySelector("[data-favorite-shortcut]"),
  favoriteCounts: [...document.querySelectorAll("[data-favorite-count]")],
  placeList: document.querySelector("[data-place-list]"),
  resultCount: document.querySelector("[data-result-count]"),
  emptyState: document.querySelector("[data-empty-state]"),
  loadMore: document.querySelector("[data-load-more]"),
  clearFilters: document.querySelector("[data-clear-filters]"),
  toast: document.querySelector("[data-toast]"),
  dayJumps: [...document.querySelectorAll("[data-day-jump]")],
};

function loadFavorites() {
  try {
    return new Set(JSON.parse(localStorage.getItem("nha-trang-favorites") || "[]"));
  } catch {
    return new Set();
  }
}

function saveFavorites() {
  try {
    localStorage.setItem("nha-trang-favorites", JSON.stringify([...state.favorites]));
  } catch {
    // The page remains fully usable when storage is unavailable.
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatReviews(value) {
  return new Intl.NumberFormat("zh-CN").format(value);
}

function googleMapsUrl(place) {
  const query = `${place.name}, ${place.address}, Nha Trang, Vietnam`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
  }
}

function renderDayTabs() {
  elements.dayTabs.innerHTML = itinerary
    .map(
      (day, index) => `
        <button
          type="button"
          class="day-tab ${index === state.activeDay ? "is-active" : ""}"
          role="tab"
          id="day-tab-${index}"
          aria-selected="${index === state.activeDay}"
          aria-controls="day-panel-${index}"
          tabindex="${index === state.activeDay ? "0" : "-1"}"
          data-day-index="${index}"
        >
          <strong>${escapeHtml(day.label)}</strong>
          <span>${escapeHtml(day.short)}</span>
        </button>
      `,
    )
    .join("");
}

function renderDayPanel() {
  const day = itinerary[state.activeDay];
  elements.dayPanel.id = `day-panel-${state.activeDay}`;
  elements.dayPanel.setAttribute("role", "tabpanel");
  elements.dayPanel.setAttribute("aria-labelledby", `day-tab-${state.activeDay}`);
  elements.dayPanel.innerHTML = `
    <div class="day-summary">
      <span class="day-badge"><i data-lucide="${day.icon}" aria-hidden="true"></i>${escapeHtml(day.badge)}</span>
      <h3>${escapeHtml(day.title)}</h3>
      <p>${escapeHtml(day.summary)}</p>
    </div>
    <ol class="day-timeline">
      ${day.slots
        .map(
          ([time, title, detail]) => `
            <li>
              <time>${escapeHtml(time)}</time>
              <div class="timeline-copy">
                <strong>${escapeHtml(title)}</strong>
                <p>${escapeHtml(detail)}</p>
              </div>
            </li>
          `,
        )
        .join("")}
    </ol>
  `;
  refreshIcons();
}

function setActiveDay(index, options = {}) {
  state.activeDay = Number(index);
  renderDayTabs();
  renderDayPanel();
  if (options.focus) {
    document.querySelector(`[data-day-index="${state.activeDay}"]`)?.focus();
  }
}

function getFilteredPlaces() {
  const normalizedQuery = state.query.trim().toLocaleLowerCase("zh-CN");
  const result = places.filter((place) => {
    const categoryMatch = state.category === "all" || place.category === state.category;
    const favoriteMatch = !state.favoritesOnly || state.favorites.has(place.id);
    const searchText = `${place.name} ${place.address} ${place.note} ${place.type}`.toLocaleLowerCase("zh-CN");
    const queryMatch = !normalizedQuery || searchText.includes(normalizedQuery);
    return categoryMatch && favoriteMatch && queryMatch;
  });

  if (state.sort === "rating") {
    result.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
  } else if (state.sort === "reviews") {
    result.sort((a, b) => b.reviews - a.reviews || b.rating - a.rating);
  }
  return result;
}

function renderPlaceCard(place) {
  const meta = categoryMeta[place.category];
  const isFavorite = state.favorites.has(place.id);
  return `
    <article class="place-card" data-place-id="${place.id}">
      <div class="place-card-head">
        <div>
          <span class="place-type"><i data-lucide="${meta.icon}" aria-hidden="true"></i>${escapeHtml(meta.label)} · ${escapeHtml(place.type)}</span>
          <h3>${escapeHtml(place.name)}</h3>
        </div>
        <button
          class="favorite-button"
          type="button"
          aria-label="${isFavorite ? "取消收藏" : "收藏"} ${escapeHtml(place.name)}"
          aria-pressed="${isFavorite}"
          title="${isFavorite ? "取消收藏" : "收藏"}"
          data-favorite-id="${place.id}"
        >
          <i data-lucide="heart" aria-hidden="true"></i>
        </button>
      </div>
      <div>
        <div class="place-meta">
          <span class="rating"><i data-lucide="star" aria-hidden="true"></i>${place.rating.toFixed(1)}</span>
          <span class="review-count">${formatReviews(place.reviews)} 条 Google 评价</span>
        </div>
        <p class="place-note">${escapeHtml(place.note)}</p>
        <p class="place-address"><i data-lucide="map-pin" aria-hidden="true"></i><span>${escapeHtml(place.address)}</span></p>
      </div>
      <div class="place-actions">
        <a class="map-link" href="${googleMapsUrl(place)}" target="_blank" rel="noreferrer">
          <i data-lucide="map" aria-hidden="true"></i>在 Google Maps 查看
        </a>
      </div>
    </article>
  `;
}

function updateFavoriteCount() {
  elements.favoriteCounts.forEach((element) => {
    element.textContent = String(state.favorites.size);
  });
}

function renderPlaces() {
  const filtered = getFilteredPlaces();
  const visible = filtered.slice(0, state.visibleCount);
  elements.placeList.innerHTML = visible.map(renderPlaceCard).join("");
  elements.resultCount.textContent = `显示 ${visible.length} / ${filtered.length} 个地点`;
  elements.emptyState.hidden = filtered.length > 0;
  elements.loadMore.hidden = visible.length >= filtered.length;
  elements.favoriteFilter.setAttribute("aria-pressed", String(state.favoritesOnly));
  updateFavoriteCount();
  refreshIcons();
}

let toastTimer;
function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 1800);
}

function toggleFavorite(id) {
  const place = places.find((item) => item.id === id);
  if (!place) return;
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast(`已取消收藏：${place.name}`);
  } else {
    state.favorites.add(id);
    showToast(`已收藏：${place.name}`);
  }
  saveFavorites();
  renderPlaces();
}

function resetFilters() {
  state.category = "all";
  state.query = "";
  state.sort = "recommended";
  state.favoritesOnly = false;
  state.visibleCount = 12;
  elements.search.value = "";
  elements.sort.value = "recommended";
  elements.categoryButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === "all");
  });
  renderPlaces();
}

elements.dayTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-day-index]");
  if (!button) return;
  setActiveDay(button.dataset.dayIndex);
});

elements.dayTabs.addEventListener("keydown", (event) => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  let next = state.activeDay;
  if (event.key === "ArrowLeft") next = (next - 1 + itinerary.length) % itinerary.length;
  if (event.key === "ArrowRight") next = (next + 1) % itinerary.length;
  if (event.key === "Home") next = 0;
  if (event.key === "End") next = itinerary.length - 1;
  setActiveDay(next, { focus: true });
});

elements.dayJumps.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveDay(button.dataset.dayJump);
    document.querySelector("#itinerary")?.scrollIntoView({ behavior: "smooth" });
  });
});

elements.categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    state.visibleCount = 12;
    elements.categoryButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderPlaces();
  });
});

elements.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.visibleCount = 12;
  renderPlaces();
});

elements.sort.addEventListener("change", (event) => {
  state.sort = event.target.value;
  state.visibleCount = 12;
  renderPlaces();
});

elements.favoriteFilter.addEventListener("click", () => {
  state.favoritesOnly = !state.favoritesOnly;
  state.visibleCount = 12;
  renderPlaces();
});

elements.favoriteShortcut.addEventListener("click", () => {
  state.favoritesOnly = true;
  state.visibleCount = 12;
  renderPlaces();
  document.querySelector("#places")?.scrollIntoView({ behavior: "smooth" });
});

elements.placeList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-favorite-id]");
  if (!button) return;
  toggleFavorite(button.dataset.favoriteId);
});

elements.loadMore.addEventListener("click", () => {
  state.visibleCount += 12;
  renderPlaces();
});

elements.clearFilters.addEventListener("click", resetFilters);

function updateHeader() {
  elements.header.classList.toggle("is-solid", window.scrollY > 40);
}

window.addEventListener("scroll", updateHeader, { passive: true });

renderDayTabs();
renderDayPanel();
renderPlaces();
updateHeader();
refreshIcons();
