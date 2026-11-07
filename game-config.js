// 離線（直接雙擊打開）時使用的定義檔，內容與 game-config.json 相同
window.GAME_CONFIG = {
 "meta": {
  "name": "浮島農場",
  "configVersion": "2.59",
  "saveFormatVersion": 1,
  "units": {
   "time": "seconds",
   "money": "coins",
   "water": "drops"
  },
  "gameName": {
   "zh": "浮島農場",
   "en": "SkyFarm",
   "formerly": "綠丘小農場"
  },
  "icon": {
   "variant": "A",
   "sizes": [
    32,
    180,
    192,
    512
   ]
  },
  "nameEn": "SkyFarm"
 },
 "rules": {
  "startCoins": 200,
  "plowCost": 5,
  "plowXp": 0,
  "waterPerTap": 1,
  "waterXp": 0,
  "moistMaxLevel": 4,
  "moistLevelSeconds": 3600,
  "moistGrowthRate": 1.0,
  "dryGrowthRate": 0.5,
  "droughtWitherSeconds": 14400,
  "reviveWaterSameAsNormal": true,
  "witheredHarvestRate": 0.8,
  "treeCanWither": false,
  "cropClearRefund": 0,
  "xpDivisor": 10,
  "bigBucketFillsTo": 4,
  "animalSellRate": 0.5,
  "decoSellRate": 0.5,
  "decoStorable": true,
  "animalStorable": false,
  "treeRemoveRefund": 0,
  "waterMerge": true,
  "bonusStacking": {
   "growth": "max",
   "moisture": "max",
   "storage": "sum"
  },
  "animalStackMax": 0,
  "animalOldWarningRatio": 0.2,
  "meatAdultLifespanSeconds": 172800,
  "autoScope": "allMaps",
  "autoMaxHours": 48,
  "blockSize": 10,
  "maxBlocksPerMap": 4,
  "maxMaps": 5,
  "maxLevel": 50,
  "autosaveSeconds": 30,
  "produceStorage": true,
  "produceFullAction": "ask",
  "produceFullChoices": [
   "sell",
   "discard"
  ],
  "xpOnHarvest": true,
  "autoBuyFeedDefault": true,
  "machineSellRate": 0.5,
  "machineStorable": false,
  "plantXp": 1
 },
 "weather": {
  "slotSeconds": 3600,
  "timezone": "Asia/Taipei",
  "utcOffsetHours": 8,
  "rainChancePerSlot": 0.05,
  "rainStartMinuteMax": 45,
  "rainMinutes": 15,
  "rainFillsBucket": true,
  "rainMoistLevel": 4,
  "rainRevivesWithered": true,
  "forecastHours": 24,
  "version": 1,
  "cloudyChancePerSlot": 0.25,
  "rainImpliesCloudy": true
 },
 "crops": {
  "pasture": {
   "name": "牧草",
   "growSeconds": 60,
   "seedCost": 2,
   "sellPrice": 1,
   "yield": 5,
   "xp": 0,
   "waterUse": 1.0,
   "isFeed": true,
   "group": "forage",
   "feedValue": 1,
   "note_feed": "吃牧草的動物也可以吃苜蓿草（1 份抵 2 份）、提摩西草（1 份抵 3 份），先用牧草"
  },
  "wheat": {
   "name": "小麥",
   "growSeconds": 120,
   "seedCost": 5,
   "sellPrice": 15,
   "xp": 1,
   "waterUse": 1.0,
   "yield": 1,
   "group": "grain"
  },
  "tomato": {
   "name": "番茄",
   "growSeconds": 600,
   "seedCost": 15,
   "sellPrice": 45,
   "xp": 3,
   "waterUse": 1.0,
   "yield": 1,
   "group": "fruitveg"
  },
  "potato": {
   "name": "馬鈴薯",
   "growSeconds": 1200,
   "seedCost": 25,
   "sellPrice": 80,
   "xp": 6,
   "waterUse": 0.75,
   "yield": 1,
   "group": "root"
  },
  "corn": {
   "name": "玉米",
   "growSeconds": 1800,
   "seedCost": 30,
   "sellPrice": 105,
   "xp": 8,
   "waterUse": 1.0,
   "yield": 1,
   "group": "grain"
  },
  "peanut": {
   "name": "花生",
   "growSeconds": 2700,
   "seedCost": 45,
   "sellPrice": 150,
   "xp": 11,
   "waterUse": 0.75,
   "yield": 1,
   "group": "bean"
  },
  "strawberry": {
   "name": "草莓",
   "growSeconds": 3600,
   "seedCost": 50,
   "sellPrice": 180,
   "xp": 13,
   "waterUse": 1.0,
   "yield": 1,
   "group": "melon"
  },
  "cabbage": {
   "name": "高麗菜",
   "growSeconds": 7200,
   "seedCost": 80,
   "sellPrice": 310,
   "xp": 23,
   "waterUse": 1.0,
   "yield": 1,
   "group": "leafy"
  },
  "rice": {
   "name": "水稻",
   "growSeconds": 10800,
   "seedCost": 120,
   "sellPrice": 510,
   "xp": 39,
   "waterUse": 2.0,
   "yield": 1,
   "group": "grain"
  },
  "pumpkin": {
   "name": "南瓜",
   "growSeconds": 14400,
   "seedCost": 140,
   "sellPrice": 580,
   "xp": 44,
   "waterUse": 1.0,
   "yield": 1,
   "group": "fruitveg"
  },
  "watermelon": {
   "name": "西瓜",
   "growSeconds": 21600,
   "seedCost": 200,
   "sellPrice": 800,
   "xp": 60,
   "waterUse": 1.5,
   "yield": 1,
   "group": "melon"
  },
  "sunflower": {
   "name": "向日葵",
   "growSeconds": 28800,
   "seedCost": 220,
   "sellPrice": 940,
   "xp": 72,
   "waterUse": 1.0,
   "yield": 1
  },
  "alfalfa": {
   "name": "苜蓿草",
   "growSeconds": 180,
   "seedCost": 4,
   "sellPrice": 2,
   "yield": 5,
   "xp": 0,
   "waterUse": 1.0,
   "isFeed": true,
   "feedAs": "pasture",
   "feedValue": 2,
   "group": "forage",
   "unlockLevel": 3
  },
  "timothy": {
   "name": "提摩西草",
   "growSeconds": 300,
   "seedCost": 6,
   "sellPrice": 3,
   "yield": 5,
   "xp": 0,
   "waterUse": 1.0,
   "isFeed": true,
   "feedAs": "pasture",
   "feedValue": 3,
   "group": "forage",
   "unlockLevel": 6
  },
  "oats": {
   "name": "燕麥",
   "growSeconds": 900,
   "seedCost": 15,
   "sellPrice": 65,
   "xp": 5,
   "waterUse": 1.0,
   "yield": 1,
   "group": "grain",
   "unlockLevel": 2
  },
  "barley": {
   "name": "大麥",
   "growSeconds": 1500,
   "seedCost": 25,
   "sellPrice": 100,
   "xp": 7,
   "waterUse": 1.0,
   "yield": 1,
   "group": "grain",
   "unlockLevel": 4
  },
  "rye": {
   "name": "黑麥",
   "growSeconds": 2400,
   "seedCost": 40,
   "sellPrice": 155,
   "xp": 11,
   "waterUse": 0.75,
   "yield": 1,
   "group": "grain",
   "unlockLevel": 8
  },
  "millet": {
   "name": "小米",
   "growSeconds": 3000,
   "seedCost": 50,
   "sellPrice": 190,
   "xp": 14,
   "waterUse": 0.75,
   "yield": 1,
   "group": "grain",
   "unlockLevel": 11
  },
  "sorghum": {
   "name": "高粱",
   "growSeconds": 5400,
   "seedCost": 80,
   "sellPrice": 315,
   "xp": 23,
   "waterUse": 0.75,
   "yield": 1,
   "group": "grain",
   "unlockLevel": 14
  },
  "soybean": {
   "name": "黃豆",
   "growSeconds": 1500,
   "seedCost": 25,
   "sellPrice": 100,
   "xp": 7,
   "waterUse": 1.0,
   "yield": 1,
   "group": "bean",
   "unlockLevel": 3
  },
  "pea": {
   "name": "豌豆",
   "growSeconds": 1200,
   "seedCost": 20,
   "sellPrice": 85,
   "xp": 6,
   "waterUse": 1.0,
   "yield": 1,
   "group": "bean",
   "unlockLevel": 5
  },
  "mung_bean": {
   "name": "綠豆",
   "growSeconds": 2400,
   "seedCost": 40,
   "sellPrice": 150,
   "xp": 11,
   "waterUse": 1.0,
   "yield": 1,
   "group": "bean",
   "unlockLevel": 6
  },
  "green_bean": {
   "name": "四季豆",
   "growSeconds": 1800,
   "seedCost": 30,
   "sellPrice": 120,
   "xp": 9,
   "waterUse": 1.0,
   "yield": 1,
   "group": "bean",
   "unlockLevel": 7
  },
  "red_bean": {
   "name": "紅豆",
   "growSeconds": 3600,
   "seedCost": 55,
   "sellPrice": 215,
   "xp": 16,
   "waterUse": 1.0,
   "yield": 1,
   "group": "bean",
   "unlockLevel": 9
  },
  "carrot": {
   "name": "胡蘿蔔",
   "growSeconds": 900,
   "seedCost": 15,
   "sellPrice": 65,
   "xp": 5,
   "waterUse": 1.0,
   "yield": 1,
   "group": "root",
   "unlockLevel": 2
  },
  "sweet_potato": {
   "name": "地瓜",
   "growSeconds": 3600,
   "seedCost": 55,
   "sellPrice": 210,
   "xp": 16,
   "waterUse": 0.75,
   "yield": 1,
   "group": "root",
   "unlockLevel": 8
  },
  "daikon": {
   "name": "白蘿蔔",
   "growSeconds": 2700,
   "seedCost": 45,
   "sellPrice": 175,
   "xp": 13,
   "waterUse": 1.0,
   "yield": 1,
   "group": "root",
   "unlockLevel": 10
  },
  "beet": {
   "name": "甜菜根",
   "growSeconds": 4800,
   "seedCost": 75,
   "sellPrice": 280,
   "xp": 21,
   "waterUse": 1.0,
   "yield": 1,
   "group": "root",
   "unlockLevel": 12
  },
  "taro": {
   "name": "芋頭",
   "growSeconds": 9000,
   "seedCost": 125,
   "sellPrice": 480,
   "xp": 36,
   "waterUse": 2.0,
   "yield": 1,
   "group": "root",
   "unlockLevel": 16
  },
  "lettuce": {
   "name": "生菜",
   "growSeconds": 300,
   "seedCost": 8,
   "sellPrice": 30,
   "xp": 2,
   "waterUse": 1.25,
   "yield": 1,
   "group": "leafy",
   "unlockLevel": 2
  },
  "spinach": {
   "name": "菠菜",
   "growSeconds": 600,
   "seedCost": 15,
   "sellPrice": 50,
   "xp": 4,
   "waterUse": 1.25,
   "yield": 1,
   "group": "leafy",
   "unlockLevel": 4
  },
  "bok_choy": {
   "name": "青江菜",
   "growSeconds": 900,
   "seedCost": 20,
   "sellPrice": 70,
   "xp": 5,
   "waterUse": 1.25,
   "yield": 1,
   "group": "leafy",
   "unlockLevel": 6
  },
  "napa_cabbage": {
   "name": "大白菜",
   "growSeconds": 5400,
   "seedCost": 80,
   "sellPrice": 310,
   "xp": 23,
   "waterUse": 1.25,
   "yield": 1,
   "group": "leafy",
   "unlockLevel": 13
  },
  "cucumber": {
   "name": "小黃瓜",
   "growSeconds": 1800,
   "seedCost": 30,
   "sellPrice": 120,
   "xp": 9,
   "waterUse": 1.5,
   "yield": 1,
   "group": "fruitveg",
   "unlockLevel": 7
  },
  "eggplant": {
   "name": "茄子",
   "growSeconds": 3600,
   "seedCost": 55,
   "sellPrice": 215,
   "xp": 16,
   "waterUse": 1.0,
   "yield": 1,
   "group": "fruitveg",
   "unlockLevel": 9
  },
  "okra": {
   "name": "秋葵",
   "growSeconds": 2700,
   "seedCost": 45,
   "sellPrice": 175,
   "xp": 13,
   "waterUse": 1.0,
   "yield": 1,
   "group": "fruitveg",
   "unlockLevel": 11
  },
  "bell_pepper": {
   "name": "甜椒",
   "growSeconds": 5400,
   "seedCost": 80,
   "sellPrice": 305,
   "xp": 23,
   "waterUse": 1.0,
   "yield": 1,
   "group": "fruitveg",
   "unlockLevel": 12
  },
  "chili": {
   "name": "辣椒",
   "growSeconds": 7200,
   "seedCost": 105,
   "sellPrice": 400,
   "xp": 30,
   "waterUse": 0.75,
   "yield": 1,
   "group": "fruitveg",
   "unlockLevel": 15
  },
  "muskmelon": {
   "name": "香瓜",
   "growSeconds": 10800,
   "seedCost": 140,
   "sellPrice": 540,
   "xp": 40,
   "waterUse": 1.5,
   "yield": 1,
   "group": "melon",
   "unlockLevel": 14
  },
  "honeydew": {
   "name": "哈密瓜",
   "growSeconds": 18000,
   "seedCost": 220,
   "sellPrice": 840,
   "xp": 62,
   "waterUse": 1.5,
   "yield": 1,
   "group": "melon",
   "unlockLevel": 18
  },
  "sugarcane": {
   "name": "甘蔗",
   "growSeconds": 25200,
   "seedCost": 320,
   "sellPrice": 1230,
   "xp": 91,
   "waterUse": 1.5,
   "yield": 1,
   "group": "cash",
   "unlockLevel": 20
  },
  "cotton": {
   "name": "棉花",
   "growSeconds": 21600,
   "seedCost": 290,
   "sellPrice": 1115,
   "xp": 83,
   "waterUse": 0.75,
   "yield": 1,
   "group": "cash",
   "unlockLevel": 22
  },
  "tea": {
   "name": "茶樹",
   "growSeconds": 32400,
   "seedCost": 410,
   "sellPrice": 1580,
   "xp": 117,
   "waterUse": 1.0,
   "yield": 1,
   "group": "cash",
   "unlockLevel": 25
  },
  "coffee": {
   "name": "咖啡",
   "growSeconds": 36000,
   "seedCost": 460,
   "sellPrice": 1770,
   "xp": 131,
   "waterUse": 1.0,
   "yield": 1,
   "group": "cash",
   "unlockLevel": 28
  },
  "mint": {
   "name": "薄荷",
   "growSeconds": 1200,
   "seedCost": 25,
   "sellPrice": 95,
   "xp": 7,
   "waterUse": 1.25,
   "yield": 1,
   "group": "herb",
   "unlockLevel": 10
  },
  "basil": {
   "name": "羅勒",
   "growSeconds": 1800,
   "seedCost": 35,
   "sellPrice": 130,
   "xp": 10,
   "waterUse": 1.0,
   "yield": 1,
   "group": "herb",
   "unlockLevel": 13
  },
  "thyme": {
   "name": "百里香",
   "growSeconds": 3600,
   "seedCost": 60,
   "sellPrice": 240,
   "xp": 18,
   "waterUse": 0.5,
   "yield": 1,
   "group": "herb",
   "unlockLevel": 17
  },
  "rosemary": {
   "name": "迷迭香",
   "growSeconds": 4800,
   "seedCost": 75,
   "sellPrice": 295,
   "xp": 22,
   "waterUse": 0.5,
   "yield": 1,
   "group": "herb",
   "unlockLevel": 16
  },
  "sage": {
   "name": "鼠尾草",
   "growSeconds": 6000,
   "seedCost": 95,
   "sellPrice": 365,
   "xp": 27,
   "waterUse": 0.5,
   "yield": 1,
   "group": "herb",
   "unlockLevel": 19
  }
 },
 "trees": {
  "lemon": {
   "name": "檸檬",
   "saplingCost": 600,
   "firstFruitSeconds": 43200,
   "fruitIntervalSeconds": 14400,
   "harvestPrice": 120,
   "xp": 12,
   "waterUse": 1.0
  },
  "papaya": {
   "name": "木瓜",
   "saplingCost": 900,
   "firstFruitSeconds": 64800,
   "fruitIntervalSeconds": 21600,
   "harvestPrice": 210,
   "xp": 21,
   "waterUse": 1.0
  },
  "mango": {
   "name": "芒果",
   "saplingCost": 1200,
   "firstFruitSeconds": 86400,
   "fruitIntervalSeconds": 28800,
   "harvestPrice": 300,
   "xp": 30,
   "waterUse": 1.0
  },
  "banana": {
   "name": "香蕉",
   "saplingCost": 1600,
   "firstFruitSeconds": 86400,
   "fruitIntervalSeconds": 28800,
   "harvestPrice": 380,
   "xp": 38,
   "waterUse": 1.0
  },
  "apple": {
   "name": "蘋果",
   "saplingCost": 2400,
   "firstFruitSeconds": 129600,
   "fruitIntervalSeconds": 43200,
   "harvestPrice": 640,
   "xp": 64,
   "waterUse": 1.0
  },
  "orange": {
   "name": "柳丁",
   "saplingCost": 450,
   "firstFruitSeconds": 36000,
   "fruitIntervalSeconds": 10800,
   "harvestPrice": 85,
   "xp": 8,
   "waterUse": 1.0
  },
  "peach": {
   "name": "桃子",
   "saplingCost": 700,
   "firstFruitSeconds": 50400,
   "fruitIntervalSeconds": 18000,
   "harvestPrice": 150,
   "xp": 15,
   "waterUse": 1.0,
   "bloomSeason": "spring"
  },
  "persimmon": {
   "name": "柿子",
   "saplingCost": 1000,
   "firstFruitSeconds": 64800,
   "fruitIntervalSeconds": 21600,
   "harvestPrice": 220,
   "xp": 22,
   "waterUse": 0.8,
   "autumnLeaves": true
  },
  "lychee": {
   "name": "荔枝",
   "saplingCost": 1100,
   "firstFruitSeconds": 72000,
   "fruitIntervalSeconds": 25200,
   "harvestPrice": 260,
   "xp": 26,
   "waterUse": 1.2
  },
  "longan": {
   "name": "龍眼",
   "saplingCost": 1300,
   "firstFruitSeconds": 86400,
   "fruitIntervalSeconds": 28800,
   "harvestPrice": 320,
   "xp": 32,
   "waterUse": 1.0
  },
  "pear": {
   "name": "梨子",
   "saplingCost": 1400,
   "firstFruitSeconds": 86400,
   "fruitIntervalSeconds": 28800,
   "harvestPrice": 340,
   "xp": 34,
   "waterUse": 1.0
  },
  "coconut": {
   "name": "椰子",
   "saplingCost": 1800,
   "firstFruitSeconds": 108000,
   "fruitIntervalSeconds": 36000,
   "harvestPrice": 450,
   "xp": 45,
   "waterUse": 0.6
  },
  "cherry": {
   "name": "櫻桃",
   "saplingCost": 2200,
   "firstFruitSeconds": 108000,
   "fruitIntervalSeconds": 36000,
   "harvestPrice": 560,
   "xp": 56,
   "waterUse": 1.0,
   "bloomSeason": "spring"
  },
  "avocado": {
   "name": "酪梨",
   "saplingCost": 2800,
   "firstFruitSeconds": 129600,
   "fruitIntervalSeconds": 43200,
   "harvestPrice": 720,
   "xp": 72,
   "waterUse": 1.5
  },
  "grape": {
   "name": "葡萄",
   "saplingCost": 3200,
   "firstFruitSeconds": 129600,
   "fruitIntervalSeconds": 43200,
   "harvestPrice": 820,
   "xp": 82,
   "waterUse": 1.2,
   "look": "trellis"
  }
 },
 "animals": {
  "egg_hen": {
   "name": "蛋雞",
   "type": "producer",
   "youngCost": 80,
   "growStages": 2,
   "stageSeconds": 1800,
   "product": "雞蛋",
   "cycleSeconds": 1800,
   "productPrice": 30,
   "xpPerCycle": 3,
   "lifespanCycles": 40,
   "productItem": "egg",
   "feedItem": "corn_cake",
   "stageFeedQty": 1,
   "cycleFeedQty": 1
  },
  "wool_sheep": {
   "name": "毛羊",
   "type": "producer",
   "youngCost": 300,
   "growStages": 2,
   "stageSeconds": 7200,
   "product": "羊毛",
   "cycleSeconds": 7200,
   "productPrice": 120,
   "xpPerCycle": 10,
   "lifespanCycles": 30,
   "productItem": "wool",
   "feedItem": "pasture",
   "stageFeedQty": 5,
   "cycleFeedQty": 5
  },
  "dairy_goat": {
   "name": "乳羊",
   "type": "producer",
   "youngCost": 400,
   "growStages": 3,
   "stageSeconds": 7200,
   "product": "羊奶",
   "cycleSeconds": 10800,
   "productPrice": 190,
   "xpPerCycle": 16,
   "lifespanCycles": 24,
   "productItem": "goat_milk",
   "feedItem": "pasture",
   "stageFeedQty": 5,
   "cycleFeedQty": 8
  },
  "dairy_cow": {
   "name": "乳牛",
   "type": "producer",
   "youngCost": 800,
   "growStages": 3,
   "stageSeconds": 14400,
   "product": "牛奶",
   "cycleSeconds": 14400,
   "productPrice": 280,
   "xpPerCycle": 24,
   "lifespanCycles": 24,
   "productItem": "cow_milk",
   "feedItem": "pasture",
   "stageFeedQty": 8,
   "cycleFeedQty": 10
  },
  "broiler": {
   "name": "肉雞",
   "type": "meat",
   "youngCost": 60,
   "growStages": 3,
   "stageSeconds": 3600,
   "product": "雞肉",
   "salePrice": 220,
   "xp": 13,
   "productItem": "chicken_meat",
   "feedItem": "corn_cake",
   "stageFeedQty": 2
  },
  "meat_sheep": {
   "name": "肉羊",
   "type": "meat",
   "youngCost": 300,
   "growStages": 4,
   "stageSeconds": 10800,
   "product": "羊肉",
   "salePrice": 1000,
   "xp": 58,
   "productItem": "mutton",
   "feedItem": "pasture",
   "stageFeedQty": 8
  },
  "pig": {
   "name": "肉豬",
   "type": "meat",
   "youngCost": 500,
   "growStages": 4,
   "stageSeconds": 14400,
   "product": "豬肉",
   "salePrice": 1600,
   "xp": 90,
   "productItem": "pork",
   "feedItem": "corn_cake",
   "stageFeedQty": 8
  },
  "beef_cattle": {
   "name": "肉牛",
   "type": "meat",
   "youngCost": 800,
   "growStages": 4,
   "stageSeconds": 21600,
   "product": "牛肉",
   "salePrice": 2600,
   "xp": 156,
   "productItem": "beef",
   "feedItem": "pasture",
   "stageFeedQty": 15
  },
  "meat_duck": {
   "name": "肉鴨",
   "type": "meat",
   "youngCost": 120,
   "growStages": 3,
   "stageSeconds": 5400,
   "product": "鴨肉",
   "salePrice": 480,
   "xp": 28,
   "productItem": "duck_meat",
   "feedItem": "corn_cake",
   "stageFeedQty": 3,
   "badge": "duck"
  },
  "down_duck": {
   "name": "羽鴨",
   "type": "producer",
   "youngCost": 150,
   "growStages": 2,
   "stageSeconds": 3600,
   "product": "羽毛",
   "cycleSeconds": 5400,
   "productPrice": 70,
   "productQty": 1,
   "xpPerCycle": 6,
   "lifespanCycles": 30,
   "productItem": "feather",
   "feedItem": "corn_cake",
   "stageFeedQty": 1,
   "cycleFeedQty": 2,
   "badge": "duck"
  },
  "meat_goose": {
   "name": "肉鵝",
   "type": "meat",
   "youngCost": 250,
   "growStages": 4,
   "stageSeconds": 7200,
   "product": "鵝肉",
   "salePrice": 1050,
   "xp": 62,
   "productItem": "goose_meat",
   "feedItem": "pasture",
   "stageFeedQty": 6,
   "badge": "goose"
  },
  "down_goose": {
   "name": "羽鵝",
   "type": "producer",
   "youngCost": 300,
   "growStages": 3,
   "stageSeconds": 5400,
   "product": "羽毛",
   "cycleSeconds": 7200,
   "productPrice": 70,
   "productQty": 2,
   "xpPerCycle": 12,
   "lifespanCycles": 30,
   "productItem": "feather",
   "feedItem": "pasture",
   "stageFeedQty": 4,
   "cycleFeedQty": 5,
   "badge": "goose"
  },
  "egg_duck": {
   "name": "蛋鴨",
   "type": "producer",
   "youngCost": 120,
   "growStages": 2,
   "stageSeconds": 2700,
   "product": "鴨蛋",
   "cycleSeconds": 2700,
   "productPrice": 45,
   "xpPerCycle": 4,
   "lifespanCycles": 40,
   "productItem": "duck_egg",
   "feedItem": "corn_cake",
   "stageFeedQty": 1,
   "cycleFeedQty": 1,
   "trait258": {
    "type": "rainFast",
    "speed": 1.5,
    "name": "愛下雨",
    "text": "下雨時產蛋快 1/3（每輪時間 ×2/3）"
   }
  },
  "meat_rabbit": {
   "name": "肉兔",
   "type": "meat",
   "youngCost": 100,
   "growStages": 3,
   "stageSeconds": 5400,
   "product": "兔肉",
   "salePrice": 420,
   "xp": 24,
   "productItem": "rabbit_meat",
   "feedItem": "pasture",
   "stageFeedQty": 2,
   "trait258": {
    "type": "litter",
    "chance": 0.2,
    "name": "生得多",
    "text": "收成後有 20% 機率原地留下一隻幼兔（不用再買）",
    "toast": "原地多了一隻幼兔！"
   }
  },
  "mallard": {
   "name": "綠頭鴨",
   "type": "producer",
   "youngCost": 350,
   "growStages": 2,
   "stageSeconds": 5400,
   "product": "羽毛",
   "cycleSeconds": 7200,
   "productPrice": 70,
   "xpPerCycle": 8,
   "lifespanCycles": 30,
   "productItem": "feather",
   "feedItem": "corn_cake",
   "stageFeedQty": 1,
   "cycleFeedQty": 2,
   "trait258": {
    "type": "pestEater",
    "name": "田間除蟲",
    "text": "跟蛋雞一樣，會走到附近的田吃蟲"
   }
  },
  "angora_rabbit": {
   "name": "毛兔",
   "type": "producer",
   "youngCost": 450,
   "growStages": 2,
   "stageSeconds": 7200,
   "product": "兔毛",
   "cycleSeconds": 10800,
   "productPrice": 160,
   "xpPerCycle": 14,
   "lifespanCycles": 30,
   "productItem": "angora_wool",
   "feedItem": "pasture",
   "stageFeedQty": 3,
   "cycleFeedQty": 4,
   "trait258": {
    "type": "winterExtra",
    "extra": 1,
    "name": "冬毛",
    "text": "冬天（12～2 月，南半球相反）每輪產 2 個"
   }
  },
  "alpaca": {
   "name": "毛駝",
   "type": "producer",
   "youngCost": 1200,
   "growStages": 3,
   "stageSeconds": 14400,
   "product": "駝毛",
   "cycleSeconds": 21600,
   "productPrice": 420,
   "xpPerCycle": 36,
   "lifespanCycles": 24,
   "productItem": "alpaca_fiber",
   "feedItem": "pasture",
   "stageFeedQty": 8,
   "cycleFeedQty": 10,
   "trait258": {
    "type": "guard",
    "mult": 0.7,
    "name": "護衛",
    "text": "同一座島有成年毛駝，天敵出現機率 −30%（多隻不疊加）"
   }
  },
  "ostrich": {
   "name": "肉鴕",
   "type": "meat",
   "youngCost": 1500,
   "growStages": 4,
   "stageSeconds": 28800,
   "product": "鴕鳥肉",
   "salePrice": 4600,
   "xp": 300,
   "productItem": "ostrich_meat",
   "feedItem": "pasture",
   "stageFeedQty": 18,
   "trait258": {
    "type": "bonusItem",
    "item": "feather",
    "qty": 3,
    "name": "附贈羽毛",
    "text": "收成時另得 3 根羽毛"
   }
  }
 },
 "fishPool": {
  "buildCostPerTile": 400,
  "sellRate": 0.5,
  "sizeBonus": [
   {
    "minTiles": 1,
    "bonus": 0
   },
   {
    "minTiles": 4,
    "bonus": 0.1
   },
   {
    "minTiles": 9,
    "bonus": 0.2
   }
  ],
  "perTile": true,
  "look": "clear",
  "swim": {
   "perTile": 2,
   "speed": 6,
   "margin": 0.18
  },
  "note": "v2.24 起每一格各放一種（點空格放魚苗、點有魚的格子餵／收成整池）；水面半透明看得到魚，池底與水面分兩層畫（batch35）",
  "nightGrowthRate": 0.5,
  "litGrowthRate": 1.0,
  "move": {
   "modes": [
    "one",
    "multi"
   ],
   "note": "點魚池小選單：搬移這一格／多選搬移（整池全選），魚和水底燈跟著格子走"
  }
 },
 "fish": {
  "tilapia": {
   "name": "吳郭魚",
   "fryCostPerTile": 50,
   "stages": 2,
   "stageSeconds": 10800,
   "harvestPerTile": 200,
   "xpPerTile": 13,
   "feedItem": "fish_feed",
   "stageFeedQtyPerTile": 2,
   "swimScale": 2.0
  },
  "milkfish": {
   "name": "虱目魚",
   "fryCostPerTile": 100,
   "stages": 3,
   "stageSeconds": 14400,
   "harvestPerTile": 450,
   "xpPerTile": 31,
   "feedItem": "fish_feed",
   "stageFeedQtyPerTile": 3,
   "swimScale": 2.0
  },
  "seabass": {
   "name": "鱸魚",
   "fryCostPerTile": 200,
   "stages": 4,
   "stageSeconds": 21600,
   "harvestPerTile": 1000,
   "xpPerTile": 70,
   "feedItem": "fish_feed",
   "stageFeedQtyPerTile": 5,
   "swimScale": 2.0
  },
  "goldfish": {
   "name": "金魚",
   "fryCostPerTile": 30,
   "stages": 2,
   "stageSeconds": 7200,
   "harvestPerTile": 110,
   "xpPerTile": 8,
   "feedItem": "fish_feed",
   "stageFeedQtyPerTile": 1,
   "swimScale": 2.0
  },
  "shrimp": {
   "name": "蝦子",
   "fryCostPerTile": 40,
   "stages": 2,
   "stageSeconds": 9000,
   "harvestPerTile": 150,
   "xpPerTile": 10,
   "feedItem": "fish_feed",
   "stageFeedQtyPerTile": 1,
   "swimScale": 2.0
  },
  "carp": {
   "name": "鯉魚",
   "fryCostPerTile": 120,
   "stages": 3,
   "stageSeconds": 14400,
   "harvestPerTile": 560,
   "xpPerTile": 38,
   "feedItem": "fish_feed",
   "stageFeedQtyPerTile": 3,
   "swimScale": 2.0
  },
  "crab": {
   "name": "螃蟹",
   "fryCostPerTile": 150,
   "stages": 3,
   "stageSeconds": 18000,
   "harvestPerTile": 750,
   "xpPerTile": 50,
   "feedItem": "fish_feed",
   "stageFeedQtyPerTile": 3,
   "swimScale": 1.8,
   "walker": true
  },
  "piranha": {
   "name": "食人魚",
   "fryCostPerTile": 300,
   "stages": 3,
   "stageSeconds": 21600,
   "harvestPerTile": 1500,
   "xpPerTile": 100,
   "feedItem": "fish_feed",
   "stageFeedQtyPerTile": 4,
   "swimScale": 2.0,
   "eats": {
    "everySeconds": 7200,
    "tilesPerBite": 1,
    "note": "同一個魚池（相連的格子）有食人魚時，每 2 小時吃掉一格別種的魚／蝦／蟹（那格變空），直到吃光；鯊魚不吃"
   }
  },
  "cat_shark": {
   "name": "貓鯊",
   "fryCostPerTile": 450,
   "stages": 4,
   "stageSeconds": 25200,
   "harvestPerTile": 2600,
   "xpPerTile": 170,
   "feedItem": "fish_feed",
   "stageFeedQtyPerTile": 6,
   "swimScale": 1.4
  },
  "bamboo_shark": {
   "name": "竹鯊",
   "fryCostPerTile": 550,
   "stages": 4,
   "stageSeconds": 28800,
   "harvestPerTile": 3300,
   "xpPerTile": 210,
   "feedItem": "fish_feed",
   "stageFeedQtyPerTile": 6,
   "swimScale": 1.4
  },
  "blacktip_shark": {
   "name": "黑鰭鯊",
   "fryCostPerTile": 750,
   "stages": 4,
   "stageSeconds": 36000,
   "harvestPerTile": 4800,
   "xpPerTile": 300,
   "feedItem": "fish_feed",
   "stageFeedQtyPerTile": 8,
   "swimScale": 1.4
  },
  "hammerhead": {
   "name": "雙髻鯊",
   "fryCostPerTile": 1100,
   "stages": 5,
   "stageSeconds": 36000,
   "harvestPerTile": 7600,
   "xpPerTile": 470,
   "feedItem": "fish_feed",
   "stageFeedQtyPerTile": 10,
   "swimScale": 1.4
  }
 },
 "automation": {
  "drone_1": {
   "name": "初級澆水無人機",
   "kind": "water",
   "hours": 4,
   "cost": 150
  },
  "drone_2": {
   "name": "中級澆水無人機",
   "kind": "water",
   "hours": 12,
   "cost": 500
  },
  "drone_3": {
   "name": "高級澆水無人機",
   "kind": "water",
   "hours": 24,
   "cost": 1000
  },
  "feeder_1": {
   "name": "初級餵食機器人",
   "kind": "feed",
   "hours": 4,
   "cost": 150
  },
  "feeder_2": {
   "name": "中級餵食機器人",
   "kind": "feed",
   "hours": 12,
   "cost": 500
  },
  "feeder_3": {
   "name": "高級餵食機器人",
   "kind": "feed",
   "hours": 24,
   "cost": 1000
  }
 },
 "decos": {
  "maple": {
   "name": "楓樹",
   "source": "shop",
   "cost": 30,
   "sellable": true
  },
  "pine": {
   "name": "松樹",
   "source": "shop",
   "cost": 30,
   "sellable": true
  },
  "fence": {
   "name": "木柵欄",
   "source": "shop",
   "cost": 5,
   "autotile": true,
   "sellable": true,
   "fenceStyle": true,
   "note": "有 fenceStyle 的都是柵欄：放在地圖上一律存成 { t:\"deco\", id:\"fence\", style:<款式> }（木柵欄沒有 style），所以圍欄、龍捲風吹倒、扶起來都和木柵欄一樣，不同款式也會連在一起"
  },
  "flowers": {
   "name": "花圃",
   "source": "shop",
   "cost": 20,
   "sellable": true
  },
  "hay": {
   "name": "乾草堆",
   "source": "shop",
   "cost": 40,
   "sellable": true
  },
  "scarecrow": {
   "name": "稻草人",
   "source": "shop",
   "cost": 120,
   "effect": {
    "type": "growth",
    "value": 0.1,
    "range": 1
   },
   "sellable": true
  },
  "pond": {
   "name": "小池塘",
   "source": "shop",
   "cost": 300,
   "merge": true,
   "autotile": true,
   "effect": {
    "type": "moisture",
    "value": 0.5,
    "range": 2
   },
   "sellable": true
  },
  "water_tower": {
   "name": "大型儲水槽",
   "source": "shop",
   "cost": 1200,
   "effect": {
    "type": "storage",
    "value": 1500,
    "range": "global"
   },
   "sellable": true
  },
  "windmill": {
   "name": "風車",
   "source": "shop",
   "cost": 800,
   "effect": {
    "type": "growth",
    "value": 0.15,
    "range": 3
   },
   "sellable": true
  },
  "rain_barrel": {
   "name": "雨水桶",
   "source": "levelReward",
   "effect": {
    "type": "storage",
    "value": 300,
    "range": "global"
   },
   "sellable": false
  },
  "gold_scarecrow": {
   "name": "金色稻草人",
   "source": "levelReward",
   "effect": {
    "type": "growth",
    "value": 0.2,
    "range": 1
   },
   "sellable": false
  },
  "stone_well": {
   "name": "石砌水井",
   "source": "levelReward",
   "effect": {
    "type": "storage",
    "value": 500,
    "range": "global",
    "groundwaterPerHour": 30
   },
   "sellable": false
  },
  "rainbow_windmill": {
   "name": "彩虹風車",
   "source": "levelReward",
   "effect": {
    "type": "growth",
    "value": 0.25,
    "range": 3
   },
   "sellable": false
  },
  "road_gravel": {
   "name": "碎石路",
   "source": "shop",
   "cost": 5,
   "autotile": true,
   "flat": true,
   "walkable": true,
   "noWeeds": true,
   "sellable": true,
   "kind": "road"
  },
  "road_dirt": {
   "name": "泥土小徑",
   "source": "shop",
   "cost": 3,
   "autotile": true,
   "flat": true,
   "walkable": true,
   "noWeeds": true,
   "sellable": true,
   "kind": "road"
  },
  "road_stone": {
   "name": "石板路",
   "source": "shop",
   "cost": 15,
   "autotile": true,
   "flat": true,
   "walkable": true,
   "noWeeds": true,
   "sellable": true,
   "kind": "road"
  },
  "road_asphalt": {
   "name": "柏油路",
   "source": "shop",
   "cost": 25,
   "autotile": true,
   "flat": true,
   "walkable": true,
   "noWeeds": true,
   "sellable": true,
   "kind": "road"
  },
  "road_boardwalk": {
   "name": "木棧道",
   "source": "shop",
   "cost": 20,
   "autotile": true,
   "flat": true,
   "walkable": true,
   "noWeeds": true,
   "sellable": true,
   "kind": "road"
  },
  "windbreak": {
   "name": "防風網",
   "source": "shop",
   "cost": 80,
   "effect": {
    "type": "windbreak",
    "range": 2
   },
   "sellable": true
  },
  "bamboo": {
   "name": "竹叢",
   "source": "shop",
   "cost": 40,
   "sellable": true
  },
  "birch": {
   "name": "白樺",
   "source": "shop",
   "cost": 40,
   "sellable": true
  },
  "sakura": {
   "name": "櫻花樹",
   "source": "shop",
   "cost": 60,
   "sellable": true
  },
  "palm": {
   "name": "棕櫚樹",
   "source": "shop",
   "cost": 50,
   "sellable": true
  },
  "willow": {
   "name": "垂柳",
   "source": "shop",
   "cost": 50,
   "sellable": true
  },
  "ginkgo": {
   "name": "銀杏",
   "source": "shop",
   "cost": 60,
   "sellable": true
  },
  "oak": {
   "name": "橡樹",
   "source": "shop",
   "cost": 70,
   "sellable": true
  },
  "banyan": {
   "name": "榕樹",
   "source": "shop",
   "cost": 80,
   "sellable": true
  },
  "dog_house": {
   "name": "狗屋",
   "source": "shop",
   "cost": 800,
   "sellable": true,
   "den": "dog",
   "via": "animal"
  },
  "cat_tree": {
   "name": "貓跳台",
   "source": "shop",
   "cost": 600,
   "sellable": true,
   "den": "cat",
   "via": "animal"
  },
  "dog_house_gold": {
   "name": "金色狗屋",
   "source": "levelReward",
   "sellable": false,
   "den": "dog",
   "effect": {
    "type": "den",
    "driveBonus": 0.05
   }
  },
  "cat_tree_gold": {
   "name": "豪華貓跳台",
   "source": "levelReward",
   "sellable": false,
   "den": "cat",
   "effect": {
    "type": "den",
    "rangeBonus": 2
   }
  },
  "fountain": {
   "name": "噴水池",
   "source": "levelReward",
   "sellable": false
  },
  "weather_rooster": {
   "name": "風向雞",
   "source": "levelReward",
   "sellable": false
  },
  "hot_air_balloon": {
   "name": "熱氣球",
   "source": "levelReward",
   "sellable": false
  },
  "lighthouse": {
   "name": "燈塔",
   "source": "levelReward",
   "sellable": false
  },
  "observatory": {
   "name": "天文台",
   "source": "levelReward",
   "sellable": false
  },
  "golden_farmhouse": {
   "name": "金色農舍",
   "source": "levelReward",
   "sellable": false,
   "skinOf": "farmhouse",
   "note": "農舍換成金色外觀（設定可切換），不另外佔格子"
  },
  "fence_picket": {
   "name": "白色尖頭柵欄",
   "source": "shop",
   "cost": 10,
   "autotile": true,
   "sellable": true,
   "fenceStyle": true
  },
  "fence_bamboo": {
   "name": "竹籬笆",
   "source": "shop",
   "cost": 12,
   "autotile": true,
   "sellable": true,
   "fenceStyle": true
  },
  "fence_stone": {
   "name": "石牆",
   "source": "shop",
   "cost": 20,
   "autotile": true,
   "sellable": true,
   "fenceStyle": true
  },
  "fence_hedge": {
   "name": "樹籬",
   "source": "shop",
   "cost": 25,
   "autotile": true,
   "sellable": true,
   "fenceStyle": true
  },
  "fence_iron": {
   "name": "鐵欄杆",
   "source": "shop",
   "cost": 35,
   "autotile": true,
   "sellable": true,
   "fenceStyle": true
  },
  "bench_wood": {
   "name": "木頭長椅",
   "source": "shop",
   "cost": 120,
   "sellable": true,
   "turnable": true,
   "snowArt": true,
   "note": "再點一下轉向（左右翻轉）"
  },
  "bench_park": {
   "name": "公園鑄鐵長椅",
   "source": "shop",
   "cost": 180,
   "sellable": true,
   "turnable": true,
   "snowArt": true,
   "note": "再點一下轉向（左右翻轉）"
  },
  "bench_log": {
   "name": "原木長凳",
   "source": "shop",
   "cost": 90,
   "sellable": true,
   "turnable": true,
   "snowArt": true,
   "note": "再點一下轉向（左右翻轉）"
  },
  "bench_stone": {
   "name": "石椅",
   "source": "shop",
   "cost": 150,
   "sellable": true,
   "turnable": true,
   "snowArt": true,
   "note": "再點一下轉向（左右翻轉）"
  },
  "oxalis": {
   "name": "酢漿草",
   "source": "shop",
   "cost": 80,
   "sellable": true,
   "butterflyHost": true,
   "plantKind": "herb"
  },
  "rumex": {
   "name": "羊蹄",
   "source": "shop",
   "cost": 80,
   "sellable": true,
   "butterflyHost": true,
   "plantKind": "herb"
  },
  "senna": {
   "name": "鐵刀木",
   "source": "shop",
   "cost": 200,
   "sellable": true,
   "butterflyHost": true,
   "plantKind": "tree"
  },
  "asclepias": {
   "name": "馬利筋",
   "source": "shop",
   "cost": 120,
   "sellable": true,
   "butterflyHost": true,
   "plantKind": "shrub"
  },
  "alpinia": {
   "name": "月桃",
   "source": "shop",
   "cost": 150,
   "sellable": true,
   "butterflyHost": true,
   "plantKind": "shrub"
  },
  "cinnamomum": {
   "name": "樟樹",
   "source": "shop",
   "cost": 300,
   "sellable": true,
   "butterflyHost": true,
   "plantKind": "tree"
  },
  "acacia": {
   "name": "相思樹",
   "source": "shop",
   "cost": 300,
   "sellable": true,
   "butterflyHost": true,
   "plantKind": "tree"
  },
  "aristolochia": {
   "name": "馬兜鈴",
   "source": "shop",
   "cost": 180,
   "sellable": true,
   "butterflyHost": true,
   "plantKind": "vine"
  },
  "heterostemma": {
   "name": "布朗藤",
   "source": "shop",
   "cost": 180,
   "sellable": true,
   "butterflyHost": true,
   "plantKind": "vine"
  },
  "crateva": {
   "name": "魚木",
   "source": "shop",
   "cost": 300,
   "sellable": true,
   "butterflyHost": true,
   "plantKind": "tree"
  },
  "parsonsia": {
   "name": "爬森藤",
   "source": "shop",
   "cost": 200,
   "sellable": true,
   "butterflyHost": true,
   "plantKind": "vine"
  },
  "mallotus": {
   "name": "白匏子",
   "source": "shop",
   "cost": 350,
   "sellable": true,
   "butterflyHost": true,
   "plantKind": "tree"
  },
  "strobilanthes": {
   "name": "馬藍",
   "source": "shop",
   "cost": 220,
   "sellable": true,
   "butterflyHost": true,
   "plantKind": "shrub"
  },
  "bird_house": {
   "name": "鳥屋",
   "source": "shop",
   "cost": 700,
   "sellable": true,
   "via": "animal"
  },
  "rail": {
   "name": "軌道",
   "source": "build",
   "cost": 30,
   "autotile": true,
   "flat": true,
   "walkable": false,
   "noWeeds": true,
   "sellable": false,
   "kind": "road",
   "railway": true,
   "note": "v2.45：1×1，每格 30 金幣＋1 份石材（這座島的建材小屋沒石材就付 40 金幣）；收回倉庫 S.buildStore.rail，拿出來免費。v2.46：機器人、動物不能走上軌道（鋪通行板的格子才能從側面橫越）；新鋪的軌道只接旁邊還沒接滿的末端（每格記自己的接法 T.cm）"
  }
 },
 "expansion": {
  "blocks": [
   {
    "index": 1,
    "map": 1,
    "level": 1,
    "cost": 0
   },
   {
    "index": 2,
    "map": 1,
    "level": 3,
    "cost": 2400
   },
   {
    "index": 3,
    "map": 1,
    "level": 5,
    "cost": 6000
   },
   {
    "index": 4,
    "map": 1,
    "level": 7,
    "cost": 12000
   },
   {
    "index": 5,
    "map": 2,
    "level": 8,
    "cost": 18000
   },
   {
    "index": 6,
    "map": 2,
    "level": 10,
    "cost": 24000
   },
   {
    "index": 7,
    "map": 2,
    "level": 12,
    "cost": 30000
   },
   {
    "index": 8,
    "map": 2,
    "level": 14,
    "cost": 36000
   },
   {
    "index": 9,
    "map": 3,
    "level": 16,
    "cost": 45000
   },
   {
    "index": 10,
    "map": 3,
    "level": 18,
    "cost": 54000
   },
   {
    "index": 11,
    "map": 3,
    "level": 20,
    "cost": 63000
   },
   {
    "index": 12,
    "map": 3,
    "level": 22,
    "cost": 75000
   },
   {
    "index": 13,
    "map": 4,
    "level": 25,
    "cost": 90000
   },
   {
    "index": 14,
    "map": 4,
    "level": 28,
    "cost": 105000
   },
   {
    "index": 15,
    "map": 4,
    "level": 31,
    "cost": 120000
   },
   {
    "index": 16,
    "map": 4,
    "level": 34,
    "cost": 140000
   },
   {
    "index": 17,
    "map": 5,
    "level": 37,
    "cost": 160000
   },
   {
    "index": 18,
    "map": 5,
    "level": 40,
    "cost": 185000
   },
   {
    "index": 19,
    "map": 5,
    "level": 44,
    "cost": 210000
   },
   {
    "index": 20,
    "map": 5,
    "level": 48,
    "cost": 240000
   }
  ],
  "beyondCostStep": 12000,
  "note257": "v2.57：5 座島 × 4 塊，開地等級錯開到 Lv 48；已經開的地不受影響，還沒開的照這張表"
 },
 "levels": [
  {
   "level": 1,
   "xpToReach": 0,
   "coinReward": 0,
   "specialDeco": null,
   "unlocks": [
    "pasture",
    "wheat",
    "tomato",
    "egg_hen",
    "maple",
    "pine",
    "fence",
    "hand_crank",
    "road_gravel",
    "road_dirt",
    "bamboo"
   ],
   "animalCap": 3,
   "fishPoolTileCap": 0,
   "produceCapacity": 300,
   "rainStorage": 500
  },
  {
   "level": 2,
   "xpToReach": 30,
   "coinReward": 50,
   "specialDeco": "rain_barrel",
   "unlocks": [
    "potato",
    "corn",
    "broiler",
    "flowers",
    "corn_cake_machine",
    "doll_sun",
    "fert_chem",
    "birch",
    "sakura",
    "oats",
    "carrot",
    "lettuce"
   ],
   "animalCap": 4,
   "fishPoolTileCap": 0,
   "produceCapacity": 400,
   "rainStorage": 600
  },
  {
   "level": 3,
   "xpToReach": 100,
   "coinReward": 100,
   "specialDeco": "gold_scarecrow",
   "unlocks": [
    "peanut",
    "strawberry",
    "wool_sheep",
    "hay",
    "drone_1",
    "grow_lamp",
    "battery_s",
    "doll_rain",
    "drone_pad",
    "road_stone",
    "sweeper",
    "care",
    "pesticide",
    "compost_bin",
    "organic_fert",
    "orange",
    "palm",
    "willow",
    "fence_picket",
    "alfalfa",
    "soybean",
    "dynamite",
    "terrain_clear",
    "river_fill",
    "river_dig",
    "bridge_wood",
    "bridge_stone",
    "material_shed",
    "lumberbot",
    "gradebot",
    "block:2"
   ],
   "animalCap": 5,
   "fishPoolTileCap": 0,
   "produceCapacity": 500,
   "rainStorage": 750
  },
  {
   "level": 4,
   "xpToReach": 300,
   "coinReward": 200,
   "specialDeco": null,
   "unlocks": [
    "cabbage",
    "lemon",
    "dairy_goat",
    "scarecrow",
    "fish_pool",
    "tilapia",
    "feeder_1",
    "fish_feed_machine",
    "biomass_gen",
    "robot_charger",
    "windbreak",
    "beehive",
    "queen_bee",
    "rapeseed",
    "milk_vetch",
    "well",
    "solar_panel",
    "peach",
    "ginkgo",
    "sprinkler_s",
    "trashbot",
    "recyclebot",
    "truck_pad",
    "fence_bamboo",
    "goldfish",
    "barley",
    "spinach",
    "flower_white",
    "flower_yellow",
    "anemone",
    "tulip",
    "lily_of_valley",
    "bellflower",
    "cosmos",
    "thistle",
    "marigold",
    "narcissus",
    "blue_eyed_daisy",
    "minebot"
   ],
   "animalCap": 6,
   "fishPoolTileCap": 4,
   "produceCapacity": 650,
   "rainStorage": 900
  },
  {
   "level": 5,
   "xpToReach": 1000,
   "coinReward": 300,
   "specialDeco": null,
   "unlocks": [
    "rice",
    "pumpkin",
    "papaya",
    "meat_sheep",
    "dairy_cow",
    "battery_m",
    "road_asphalt",
    "snow_melter",
    "water_tower_extra",
    "snowbot",
    "poopbot",
    "buckwheat",
    "wellbot",
    "doll_snow",
    "persimmon",
    "lychee",
    "oak",
    "street_lamp_garden",
    "shrimp",
    "pea",
    "flower_red",
    "flower_blue",
    "hyacinth",
    "forget_me_not",
    "cyclamen",
    "snowdrop",
    "block:3"
   ],
   "animalCap": 8,
   "fishPoolTileCap": 4,
   "produceCapacity": 800,
   "rainStorage": 1100,
   "rewardFree": {
    "beehive": 1
   }
  },
  {
   "level": 6,
   "xpToReach": 12000,
   "coinReward": 1000,
   "specialDeco": null,
   "unlocks": [
    "watermelon",
    "mango",
    "pig",
    "milkfish",
    "pond",
    "drone_2",
    "big_bucket",
    "grow_lamp_large",
    "road_boardwalk",
    "greenhouse",
    "lavender",
    "honeybot",
    "longan",
    "pear",
    "banyan",
    "bumble_hive",
    "bumble_colony",
    "butterfly_egg",
    "snowbot_2",
    "rent_snow_1",
    "sweeper_2",
    "rent_sweep_1",
    "wellbot_2",
    "rent_wellbot_1",
    "trashbot_2",
    "rent_trashbot_1",
    "recyclebot_2",
    "rent_recyclebot_1",
    "fence_stone",
    "gh_lamp",
    "street_lamp_classic",
    "pool_lamp",
    "timothy",
    "mung_bean",
    "bok_choy",
    "sweet_pea",
    "parrot_tulip",
    "carnation",
    "night_cereus",
    "canna",
    "dianthus",
    "freesia",
    "oxalis",
    "bf:papilio_demoleus"
   ],
   "animalCap": 9,
   "fishPoolTileCap": 8,
   "produceCapacity": 1000,
   "rainStorage": 1300
  },
  {
   "level": 7,
   "xpToReach": 40000,
   "coinReward": 2000,
   "specialDeco": "stone_well",
   "unlocks": [
    "sunflower",
    "banana",
    "beef_cattle",
    "feeder_2",
    "battery_l",
    "rose",
    "coconut",
    "sprinkler_l",
    "poopbot_2",
    "rent_poop_1",
    "rent_honey_1",
    "carp",
    "green_bean",
    "cucumber",
    "calla_lily",
    "lily",
    "gentian",
    "schisandra",
    "poinsettia",
    "hellebore",
    "doll_thunder",
    "rumex",
    "senna",
    "bf:pieris_rapae",
    "lumberbot_2",
    "rent_lumber_1",
    "minebot_2",
    "rent_mine_1",
    "gradebot_2",
    "rent_grade_1",
    "block:4"
   ],
   "animalCap": 10,
   "fishPoolTileCap": 8,
   "produceCapacity": 1250,
   "rainStorage": 1550
  },
  {
   "level": 8,
   "xpToReach": 75000,
   "coinReward": 3000,
   "specialDeco": null,
   "unlocks": [
    "apple",
    "seabass",
    "water_tower",
    "cherry",
    "dog_shiba",
    "cat_orange",
    "dog_house",
    "cat_tree",
    "dog_food",
    "cat_food",
    "honeybot_2",
    "fence_hedge",
    "rye",
    "sweet_potato",
    "meat_duck",
    "cherry_blossom",
    "dahlia",
    "asclepias",
    "alpinia",
    "cinnamomum",
    "bf:zizeeria_maha",
    "block:5"
   ],
   "animalCap": 12,
   "fishPoolTileCap": 12,
   "produceCapacity": 1500,
   "rainStorage": 1800
  },
  {
   "level": 9,
   "xpToReach": 120000,
   "coinReward": 4000,
   "specialDeco": null,
   "unlocks": [
    "windmill",
    "drone_3",
    "avocado",
    "snowbot_3",
    "rent_snow_2",
    "sweeper_3",
    "rent_sweep_2",
    "honeybot_3",
    "rent_honey_2",
    "wellbot_3",
    "rent_wellbot_2",
    "trashbot_3",
    "rent_trashbot_2",
    "recyclebot_3",
    "rent_recyclebot_2",
    "crab",
    "red_bean",
    "eggplant",
    "down_duck",
    "hydrangea",
    "hibiscus",
    "chrysanthemum",
    "camellia",
    "acacia",
    "bird_budgie",
    "bird_house",
    "bird_food",
    "bf:papilio_polytes",
    "dog_chihuahua"
   ],
   "animalCap": 14,
   "fishPoolTileCap": 12,
   "produceCapacity": 1800,
   "rainStorage": 2100
  },
  {
   "level": 10,
   "xpToReach": 180000,
   "coinReward": 5000,
   "specialDeco": "rainbow_windmill",
   "unlocks": [
    "feeder_3",
    "grape",
    "poopbot_3",
    "rent_poop_2",
    "fence_iron",
    "street_lamp_modern",
    "daikon",
    "mint",
    "plumeria",
    "clematis",
    "plum_blossom",
    "aristolochia",
    "heterostemma",
    "bird_java_white",
    "bf:ypthima_multistriata",
    "lumberbot_3",
    "rent_lumber_2",
    "minebot_3",
    "rent_mine_2",
    "gradebot_3",
    "rent_grade_2",
    "dog_beagle",
    "cat_tabby",
    "block:6",
    "egg_duck"
   ],
   "animalCap": 16,
   "fishPoolTileCap": 16,
   "produceCapacity": 2200,
   "rainStorage": 2500
  },
  {
   "level": 11,
   "xpToReach": 240600,
   "coinReward": 6000,
   "specialDeco": null,
   "unlocks": [
    "dog_maltese",
    "millet",
    "okra",
    "crateva",
    "parsonsia",
    "bird_java_black",
    "bf:danaus_chrysippus",
    "meat_rabbit"
   ],
   "animalCap": 17,
   "fishPoolTileCap": 17,
   "produceCapacity": 2450,
   "rainStorage": 2750
  },
  {
   "level": 12,
   "xpToReach": 301800,
   "coinReward": 7000,
   "specialDeco": null,
   "unlocks": [
    "cat_calico",
    "street_lamp_double",
    "beet",
    "bell_pepper",
    "meat_goose",
    "moth_orchid",
    "mallotus",
    "strobilanthes",
    "bird_canary",
    "bf:eurema_blanda",
    "dog_shihtzu",
    "block:7"
   ],
   "animalCap": 18,
   "fishPoolTileCap": 18,
   "produceCapacity": 2700,
   "rainStorage": 3000
  },
  {
   "level": 13,
   "xpToReach": 363600,
   "coinReward": 8000,
   "specialDeco": null,
   "unlocks": [
    "dog_pomeranian",
    "piranha",
    "napa_cabbage",
    "basil",
    "bf:suastus_gremius"
   ],
   "animalCap": 19,
   "fishPoolTileCap": 19,
   "produceCapacity": 2950,
   "rainStorage": 3250
  },
  {
   "level": 14,
   "xpToReach": 426000,
   "coinReward": 9000,
   "specialDeco": null,
   "unlocks": [
    "sorghum",
    "muskmelon",
    "down_goose",
    "bird_gouldian",
    "bf:papilio_protenor",
    "dog_yorkie",
    "cat_tuxedo",
    "block:8"
   ],
   "animalCap": 20,
   "fishPoolTileCap": 20,
   "produceCapacity": 3200,
   "rainStorage": 3500
  },
  {
   "level": 15,
   "xpToReach": 489000,
   "coinReward": 20000,
   "specialDeco": "dog_house_gold",
   "unlocks": [
    "dog_corgi",
    "cat_shark",
    "chili",
    "bird_lovebird",
    "bf:catopsilia_pomona"
   ],
   "animalCap": 21,
   "fishPoolTileCap": 21,
   "produceCapacity": 3450,
   "rainStorage": 3750
  },
  {
   "level": 16,
   "xpToReach": 552600,
   "coinReward": 11000,
   "specialDeco": null,
   "unlocks": [
    "taro",
    "rosemary",
    "bf:pieris_canidia",
    "dog_pug",
    "block:9",
    "mallard"
   ],
   "animalCap": 22,
   "fishPoolTileCap": 22,
   "produceCapacity": 3700,
   "rainStorage": 4000
  },
  {
   "level": 17,
   "xpToReach": 616800,
   "coinReward": 12000,
   "specialDeco": null,
   "unlocks": [
    "cat_black",
    "bamboo_shark",
    "thyme",
    "bird_cockatiel",
    "bird_cockatiel_white",
    "bf:erionota_torus",
    "dog_papillon"
   ],
   "animalCap": 23,
   "fishPoolTileCap": 23,
   "produceCapacity": 3950,
   "rainStorage": 4250
  },
  {
   "level": 18,
   "xpToReach": 681600,
   "coinReward": 13000,
   "specialDeco": null,
   "unlocks": [
    "dog_border",
    "honeydew",
    "bf:graphium_sarpedon",
    "block:10",
    "angora_rabbit"
   ],
   "animalCap": 24,
   "fishPoolTileCap": 24,
   "produceCapacity": 4200,
   "rainStorage": 4500
  },
  {
   "level": 19,
   "xpToReach": 747000,
   "coinReward": 14000,
   "specialDeco": null,
   "unlocks": [
    "sage",
    "dog_schnauzer",
    "cat_british"
   ],
   "animalCap": 25,
   "fishPoolTileCap": 25,
   "produceCapacity": 4450,
   "rainStorage": 4750
  },
  {
   "level": 20,
   "xpToReach": 813000,
   "coinReward": 30000,
   "specialDeco": "cat_tree_gold",
   "unlocks": [
    "blacktip_shark",
    "sugarcane",
    "bird_sun_conure",
    "bf:papilio_memnon",
    "dog_akita",
    "block:11"
   ],
   "animalCap": 26,
   "fishPoolTileCap": 26,
   "produceCapacity": 4700,
   "rainStorage": 5000
  },
  {
   "level": 21,
   "xpToReach": 879600,
   "coinReward": 16000,
   "specialDeco": null,
   "unlocks": [
    "dog_dachshund",
    "bf:cyrestis_thyodamas",
    "cat_siamese"
   ],
   "animalCap": 27,
   "fishPoolTileCap": 27,
   "produceCapacity": 4950,
   "rainStorage": 5250
  },
  {
   "level": 22,
   "xpToReach": 946800,
   "coinReward": 17000,
   "specialDeco": null,
   "unlocks": [
    "cotton",
    "bf:heliophorus_ila",
    "dog_dalmatian",
    "block:12"
   ],
   "animalCap": 28,
   "fishPoolTileCap": 28,
   "produceCapacity": 5200,
   "rainStorage": 5500
  },
  {
   "level": 23,
   "xpToReach": 1014600,
   "coinReward": 18000,
   "specialDeco": null,
   "unlocks": [
    "cat_ragdoll",
    "bird_quaker",
    "bf:jamides_alecto",
    "dog_bullterrier"
   ],
   "animalCap": 29,
   "fishPoolTileCap": 29,
   "produceCapacity": 5450,
   "rainStorage": 5750
  },
  {
   "level": 24,
   "xpToReach": 1083000,
   "coinReward": 19000,
   "specialDeco": null,
   "unlocks": [
    "dog_poodle",
    "bf:prosotas_nora",
    "alpaca"
   ],
   "animalCap": 30,
   "fishPoolTileCap": 30,
   "produceCapacity": 5700,
   "rainStorage": 6000
  },
  {
   "level": 25,
   "xpToReach": 1152000,
   "coinReward": 40000,
   "specialDeco": "fountain",
   "unlocks": [
    "hammerhead",
    "tea",
    "bf:bamboo_skipper",
    "dog_chowchow",
    "block:13"
   ],
   "animalCap": 31,
   "fishPoolTileCap": 31,
   "produceCapacity": 5950,
   "rainStorage": 6250
  },
  {
   "level": 26,
   "xpToReach": 1221600,
   "coinReward": 21000,
   "specialDeco": null,
   "unlocks": [
    "bf:ideopsis_similis",
    "dog_samoyed",
    "cat_russianblue"
   ],
   "animalCap": 32,
   "fishPoolTileCap": 32,
   "produceCapacity": 6200,
   "rainStorage": 6500
  },
  {
   "level": 27,
   "xpToReach": 1291800,
   "coinReward": 22000,
   "specialDeco": null,
   "unlocks": [
    "dog_labrador",
    "bird_african_grey",
    "bf:appias_lyncida"
   ],
   "animalCap": 33,
   "fishPoolTileCap": 33,
   "produceCapacity": 6450,
   "rainStorage": 6750
  },
  {
   "level": 28,
   "xpToReach": 1362600,
   "coinReward": 23000,
   "specialDeco": null,
   "unlocks": [
    "coffee",
    "bf:tagiades_dagai",
    "dog_shepherd",
    "block:14",
    "ostrich"
   ],
   "animalCap": 34,
   "fishPoolTileCap": 34,
   "produceCapacity": 6700,
   "rainStorage": 7000
  },
  {
   "level": 29,
   "xpToReach": 1434000,
   "coinReward": 24000,
   "specialDeco": null,
   "unlocks": [
    "cat_persian",
    "bf:danaus_genutia"
   ],
   "animalCap": 35,
   "fishPoolTileCap": 35,
   "produceCapacity": 6950,
   "rainStorage": 7250
  },
  {
   "level": 30,
   "xpToReach": 1506000,
   "coinReward": 50000,
   "specialDeco": "weather_rooster",
   "unlocks": [
    "dog_bulldog"
   ],
   "animalCap": 36,
   "fishPoolTileCap": 36,
   "produceCapacity": 7200,
   "rainStorage": 7500
  },
  {
   "level": 31,
   "xpToReach": 1578600,
   "coinReward": 26000,
   "specialDeco": null,
   "unlocks": [
    "dog_doberman",
    "block:15"
   ],
   "animalCap": 37,
   "fishPoolTileCap": 37,
   "produceCapacity": 7450,
   "rainStorage": 7750
  },
  {
   "level": 32,
   "xpToReach": 1651800,
   "coinReward": 27000,
   "specialDeco": null,
   "unlocks": [
    "dog_husky",
    "bird_white_cockatoo",
    "bf:pachliopta_aristolochiae",
    "cat_scottishfold"
   ],
   "animalCap": 38,
   "fishPoolTileCap": 38,
   "produceCapacity": 7700,
   "rainStorage": 8000
  },
  {
   "level": 33,
   "xpToReach": 1725600,
   "coinReward": 28000,
   "specialDeco": null,
   "unlocks": [
    "dog_rottweiler"
   ],
   "animalCap": 39,
   "fishPoolTileCap": 39,
   "produceCapacity": 7950,
   "rainStorage": 8250
  },
  {
   "level": 34,
   "xpToReach": 1800000,
   "coinReward": 29000,
   "specialDeco": null,
   "unlocks": [
    "dog_golden",
    "block:16"
   ],
   "animalCap": 40,
   "fishPoolTileCap": 40,
   "produceCapacity": 8200,
   "rainStorage": 8500
  },
  {
   "level": 35,
   "xpToReach": 1875000,
   "coinReward": 60000,
   "specialDeco": "hot_air_balloon",
   "unlocks": [
    "bf:kallima_inachus"
   ],
   "animalCap": 41,
   "fishPoolTileCap": 41,
   "produceCapacity": 8450,
   "rainStorage": 8750
  },
  {
   "level": 36,
   "xpToReach": 1950600,
   "coinReward": 31000,
   "specialDeco": null,
   "unlocks": [
    "dog_malamute"
   ],
   "animalCap": 42,
   "fishPoolTileCap": 42,
   "produceCapacity": 8700,
   "rainStorage": 9000
  },
  {
   "level": 37,
   "xpToReach": 2026800,
   "coinReward": 32000,
   "specialDeco": null,
   "unlocks": [
    "cat_silvershade",
    "block:17"
   ],
   "animalCap": 43,
   "fishPoolTileCap": 43,
   "produceCapacity": 8950,
   "rainStorage": 9250
  },
  {
   "level": 38,
   "xpToReach": 2103600,
   "coinReward": 33000,
   "specialDeco": null,
   "unlocks": [
    "bf:spindasis_lohita"
   ],
   "animalCap": 44,
   "fishPoolTileCap": 44,
   "produceCapacity": 9200,
   "rainStorage": 9500
  },
  {
   "level": 39,
   "xpToReach": 2181000,
   "coinReward": 34000,
   "specialDeco": null,
   "unlocks": [],
   "animalCap": 45,
   "fishPoolTileCap": 45,
   "produceCapacity": 9450,
   "rainStorage": 9750
  },
  {
   "level": 40,
   "xpToReach": 2259000,
   "coinReward": 70000,
   "specialDeco": "lighthouse",
   "unlocks": [
    "bf:seseria_formosana",
    "dog_stbernard",
    "block:18"
   ],
   "animalCap": 46,
   "fishPoolTileCap": 46,
   "produceCapacity": 9700,
   "rainStorage": 10000
  },
  {
   "level": 41,
   "xpToReach": 2337600,
   "coinReward": 36000,
   "specialDeco": null,
   "unlocks": [],
   "animalCap": 47,
   "fishPoolTileCap": 47,
   "produceCapacity": 9950,
   "rainStorage": 10250
  },
  {
   "level": 42,
   "xpToReach": 2416800,
   "coinReward": 37000,
   "specialDeco": null,
   "unlocks": [
    "cat_mainecoon"
   ],
   "animalCap": 48,
   "fishPoolTileCap": 48,
   "produceCapacity": 10200,
   "rainStorage": 10500
  },
  {
   "level": 43,
   "xpToReach": 2496600,
   "coinReward": 38000,
   "specialDeco": null,
   "unlocks": [],
   "animalCap": 49,
   "fishPoolTileCap": 49,
   "produceCapacity": 10450,
   "rainStorage": 10750
  },
  {
   "level": 44,
   "xpToReach": 2577000,
   "coinReward": 39000,
   "specialDeco": null,
   "unlocks": [
    "block:19"
   ],
   "animalCap": 50,
   "fishPoolTileCap": 50,
   "produceCapacity": 10700,
   "rainStorage": 11000
  },
  {
   "level": 45,
   "xpToReach": 2658000,
   "coinReward": 80000,
   "specialDeco": "observatory",
   "unlocks": [
    "dog_mastiff"
   ],
   "animalCap": 51,
   "fishPoolTileCap": 51,
   "produceCapacity": 10950,
   "rainStorage": 11250
  },
  {
   "level": 46,
   "xpToReach": 2739600,
   "coinReward": 41000,
   "specialDeco": null,
   "unlocks": [],
   "animalCap": 52,
   "fishPoolTileCap": 52,
   "produceCapacity": 11200,
   "rainStorage": 11500
  },
  {
   "level": 47,
   "xpToReach": 2821800,
   "coinReward": 42000,
   "specialDeco": null,
   "unlocks": [],
   "animalCap": 53,
   "fishPoolTileCap": 53,
   "produceCapacity": 11450,
   "rainStorage": 11750
  },
  {
   "level": 48,
   "xpToReach": 2904600,
   "coinReward": 43000,
   "specialDeco": null,
   "unlocks": [
    "block:20"
   ],
   "animalCap": 54,
   "fishPoolTileCap": 54,
   "produceCapacity": 11700,
   "rainStorage": 12000
  },
  {
   "level": 49,
   "xpToReach": 2988000,
   "coinReward": 44000,
   "specialDeco": null,
   "unlocks": [],
   "animalCap": 55,
   "fishPoolTileCap": 55,
   "produceCapacity": 11950,
   "rainStorage": 12250
  },
  {
   "level": 50,
   "xpToReach": 3072000,
   "coinReward": 90000,
   "specialDeco": "golden_farmhouse",
   "unlocks": [],
   "animalCap": 56,
   "fishPoolTileCap": 56,
   "produceCapacity": 12200,
   "rainStorage": 12500
  }
 ],
 "items": {
  "pasture": {
   "name": "牧草",
   "category": "feed",
   "sellPrice": 1
  },
  "wheat": {
   "name": "小麥",
   "category": "crop",
   "sellPrice": 15
  },
  "tomato": {
   "name": "番茄",
   "category": "crop",
   "sellPrice": 45
  },
  "potato": {
   "name": "馬鈴薯",
   "category": "crop",
   "sellPrice": 80
  },
  "corn": {
   "name": "玉米",
   "category": "crop",
   "sellPrice": 105
  },
  "peanut": {
   "name": "花生",
   "category": "crop",
   "sellPrice": 150
  },
  "strawberry": {
   "name": "草莓",
   "category": "crop",
   "sellPrice": 180
  },
  "cabbage": {
   "name": "高麗菜",
   "category": "crop",
   "sellPrice": 310
  },
  "rice": {
   "name": "水稻",
   "category": "crop",
   "sellPrice": 510
  },
  "pumpkin": {
   "name": "南瓜",
   "category": "crop",
   "sellPrice": 580
  },
  "watermelon": {
   "name": "西瓜",
   "category": "crop",
   "sellPrice": 800
  },
  "sunflower": {
   "name": "向日葵",
   "category": "crop",
   "sellPrice": 940
  },
  "lemon": {
   "name": "檸檬",
   "category": "fruit",
   "sellPrice": 120
  },
  "papaya": {
   "name": "木瓜",
   "category": "fruit",
   "sellPrice": 210
  },
  "mango": {
   "name": "芒果",
   "category": "fruit",
   "sellPrice": 300
  },
  "banana": {
   "name": "香蕉",
   "category": "fruit",
   "sellPrice": 380
  },
  "apple": {
   "name": "蘋果",
   "category": "fruit",
   "sellPrice": 640
  },
  "egg": {
   "name": "雞蛋",
   "category": "product",
   "sellPrice": 30
  },
  "wool": {
   "name": "羊毛",
   "category": "product",
   "sellPrice": 120
  },
  "goat_milk": {
   "name": "羊奶",
   "category": "product",
   "sellPrice": 190
  },
  "cow_milk": {
   "name": "牛奶",
   "category": "product",
   "sellPrice": 280
  },
  "chicken_meat": {
   "name": "雞肉",
   "category": "meat",
   "sellPrice": 220
  },
  "mutton": {
   "name": "羊肉",
   "category": "meat",
   "sellPrice": 1000
  },
  "pork": {
   "name": "豬肉",
   "category": "meat",
   "sellPrice": 1600
  },
  "beef": {
   "name": "牛肉",
   "category": "meat",
   "sellPrice": 2600
  },
  "tilapia": {
   "name": "吳郭魚",
   "category": "fish",
   "sellPrice": 200
  },
  "milkfish": {
   "name": "虱目魚",
   "category": "fish",
   "sellPrice": 450
  },
  "seabass": {
   "name": "鱸魚",
   "category": "fish",
   "sellPrice": 1000
  },
  "corn_cake": {
   "name": "玉米餅",
   "category": "feed",
   "sellPrice": 2
  },
  "fish_feed": {
   "name": "魚飼料",
   "category": "feed",
   "sellPrice": 2
  },
  "weed": {
   "name": "雜草",
   "category": "feed",
   "sellPrice": 1
  },
  "poop": {
   "name": "糞便",
   "category": "material",
   "sellPrice": 0
  },
  "organic_fert": {
   "name": "有機肥",
   "category": "material",
   "sellPrice": 5
  },
  "org_wheat": {
   "name": "有機小麥",
   "category": "crop",
   "sellPrice": 21,
   "organicOf": "wheat"
  },
  "org_tomato": {
   "name": "有機番茄",
   "category": "crop",
   "sellPrice": 63,
   "organicOf": "tomato"
  },
  "org_potato": {
   "name": "有機馬鈴薯",
   "category": "crop",
   "sellPrice": 112,
   "organicOf": "potato"
  },
  "org_corn": {
   "name": "有機玉米",
   "category": "crop",
   "sellPrice": 147,
   "organicOf": "corn"
  },
  "org_peanut": {
   "name": "有機花生",
   "category": "crop",
   "sellPrice": 210,
   "organicOf": "peanut"
  },
  "org_strawberry": {
   "name": "有機草莓",
   "category": "crop",
   "sellPrice": 252,
   "organicOf": "strawberry"
  },
  "org_cabbage": {
   "name": "有機高麗菜",
   "category": "crop",
   "sellPrice": 434,
   "organicOf": "cabbage"
  },
  "org_rice": {
   "name": "有機水稻",
   "category": "crop",
   "sellPrice": 714,
   "organicOf": "rice"
  },
  "org_pumpkin": {
   "name": "有機南瓜",
   "category": "crop",
   "sellPrice": 812,
   "organicOf": "pumpkin"
  },
  "org_watermelon": {
   "name": "有機西瓜",
   "category": "crop",
   "sellPrice": 1120,
   "organicOf": "watermelon"
  },
  "org_sunflower": {
   "name": "有機向日葵",
   "category": "crop",
   "sellPrice": 1316,
   "organicOf": "sunflower"
  },
  "org_lemon": {
   "name": "有機檸檬",
   "category": "fruit",
   "sellPrice": 168,
   "organicOf": "lemon"
  },
  "org_papaya": {
   "name": "有機木瓜",
   "category": "fruit",
   "sellPrice": 294,
   "organicOf": "papaya"
  },
  "org_mango": {
   "name": "有機芒果",
   "category": "fruit",
   "sellPrice": 420,
   "organicOf": "mango"
  },
  "org_banana": {
   "name": "有機香蕉",
   "category": "fruit",
   "sellPrice": 532,
   "organicOf": "banana"
  },
  "org_apple": {
   "name": "有機蘋果",
   "category": "fruit",
   "sellPrice": 896,
   "organicOf": "apple"
  },
  "honey_wild": {
   "name": "野蜂蜜",
   "category": "honey",
   "sellPrice": 20
  },
  "honey_rapeseed": {
   "name": "油菜花蜜",
   "category": "honey",
   "sellPrice": 40
  },
  "honey_vetch": {
   "name": "紫雲英蜜",
   "category": "honey",
   "sellPrice": 45
  },
  "honey_hundred": {
   "name": "百花蜜",
   "category": "honey",
   "sellPrice": 50
  },
  "honey_buckwheat": {
   "name": "蕎麥蜜",
   "category": "honey",
   "sellPrice": 60
  },
  "honey_lavender": {
   "name": "薰衣草蜜",
   "category": "honey",
   "sellPrice": 90
  },
  "honey_rose": {
   "name": "玫瑰花蜜",
   "category": "honey",
   "sellPrice": 120
  },
  "orange": {
   "name": "柳丁",
   "category": "fruit",
   "sellPrice": 85
  },
  "org_orange": {
   "name": "有機柳丁",
   "category": "fruit",
   "sellPrice": 119,
   "organicOf": "orange"
  },
  "peach": {
   "name": "桃子",
   "category": "fruit",
   "sellPrice": 150
  },
  "org_peach": {
   "name": "有機桃子",
   "category": "fruit",
   "sellPrice": 210,
   "organicOf": "peach"
  },
  "persimmon": {
   "name": "柿子",
   "category": "fruit",
   "sellPrice": 220
  },
  "org_persimmon": {
   "name": "有機柿子",
   "category": "fruit",
   "sellPrice": 308,
   "organicOf": "persimmon"
  },
  "lychee": {
   "name": "荔枝",
   "category": "fruit",
   "sellPrice": 260
  },
  "org_lychee": {
   "name": "有機荔枝",
   "category": "fruit",
   "sellPrice": 364,
   "organicOf": "lychee"
  },
  "longan": {
   "name": "龍眼",
   "category": "fruit",
   "sellPrice": 320
  },
  "org_longan": {
   "name": "有機龍眼",
   "category": "fruit",
   "sellPrice": 448,
   "organicOf": "longan"
  },
  "pear": {
   "name": "梨子",
   "category": "fruit",
   "sellPrice": 340
  },
  "org_pear": {
   "name": "有機梨子",
   "category": "fruit",
   "sellPrice": 476,
   "organicOf": "pear"
  },
  "coconut": {
   "name": "椰子",
   "category": "fruit",
   "sellPrice": 450
  },
  "org_coconut": {
   "name": "有機椰子",
   "category": "fruit",
   "sellPrice": 630,
   "organicOf": "coconut"
  },
  "cherry": {
   "name": "櫻桃",
   "category": "fruit",
   "sellPrice": 560
  },
  "org_cherry": {
   "name": "有機櫻桃",
   "category": "fruit",
   "sellPrice": 784,
   "organicOf": "cherry"
  },
  "avocado": {
   "name": "酪梨",
   "category": "fruit",
   "sellPrice": 720
  },
  "org_avocado": {
   "name": "有機酪梨",
   "category": "fruit",
   "sellPrice": 1008,
   "organicOf": "avocado"
  },
  "grape": {
   "name": "葡萄",
   "category": "fruit",
   "sellPrice": 820
  },
  "org_grape": {
   "name": "有機葡萄",
   "category": "fruit",
   "sellPrice": 1148,
   "organicOf": "grape"
  },
  "part_roller": {
   "name": "滾筒",
   "category": "part",
   "sellPrice": 0,
   "part": true
  },
  "part_brush": {
   "name": "清潔刷",
   "category": "part",
   "sellPrice": 0,
   "part": true
  },
  "part_dustbag": {
   "name": "集塵袋",
   "category": "part",
   "sellPrice": 0,
   "part": true
  },
  "part_wheel": {
   "name": "輪子",
   "category": "part",
   "sellPrice": 0,
   "part": true
  },
  "part_propeller": {
   "name": "螺旋槳",
   "category": "part",
   "sellPrice": 0,
   "part": true
  },
  "dog_food": {
   "name": "狗飼料",
   "category": "feed",
   "sellPrice": 4,
   "shopOnly": true
  },
  "cat_food": {
   "name": "貓飼料",
   "category": "feed",
   "sellPrice": 3,
   "shopOnly": true
  },
  "goldfish": {
   "name": "金魚",
   "category": "fish",
   "sellPrice": 110
  },
  "shrimp": {
   "name": "蝦子",
   "category": "fish",
   "sellPrice": 150
  },
  "carp": {
   "name": "鯉魚",
   "category": "fish",
   "sellPrice": 560
  },
  "crab": {
   "name": "螃蟹",
   "category": "fish",
   "sellPrice": 750
  },
  "piranha": {
   "name": "食人魚",
   "category": "fish",
   "sellPrice": 1500
  },
  "cat_shark": {
   "name": "貓鯊",
   "category": "fish",
   "sellPrice": 2600
  },
  "bamboo_shark": {
   "name": "竹鯊",
   "category": "fish",
   "sellPrice": 3300
  },
  "blacktip_shark": {
   "name": "黑鰭鯊",
   "category": "fish",
   "sellPrice": 4800
  },
  "hammerhead": {
   "name": "雙髻鯊",
   "category": "fish",
   "sellPrice": 7600
  },
  "alfalfa": {
   "name": "苜蓿草",
   "category": "feed",
   "sellPrice": 2
  },
  "timothy": {
   "name": "提摩西草",
   "category": "feed",
   "sellPrice": 3
  },
  "oats": {
   "name": "燕麥",
   "category": "crop",
   "sellPrice": 65
  },
  "org_oats": {
   "name": "有機燕麥",
   "category": "crop",
   "sellPrice": 91,
   "organicOf": "oats"
  },
  "barley": {
   "name": "大麥",
   "category": "crop",
   "sellPrice": 100
  },
  "org_barley": {
   "name": "有機大麥",
   "category": "crop",
   "sellPrice": 140,
   "organicOf": "barley"
  },
  "rye": {
   "name": "黑麥",
   "category": "crop",
   "sellPrice": 155
  },
  "org_rye": {
   "name": "有機黑麥",
   "category": "crop",
   "sellPrice": 217,
   "organicOf": "rye"
  },
  "millet": {
   "name": "小米",
   "category": "crop",
   "sellPrice": 190
  },
  "org_millet": {
   "name": "有機小米",
   "category": "crop",
   "sellPrice": 266,
   "organicOf": "millet"
  },
  "sorghum": {
   "name": "高粱",
   "category": "crop",
   "sellPrice": 315
  },
  "org_sorghum": {
   "name": "有機高粱",
   "category": "crop",
   "sellPrice": 441,
   "organicOf": "sorghum"
  },
  "soybean": {
   "name": "黃豆",
   "category": "crop",
   "sellPrice": 100
  },
  "org_soybean": {
   "name": "有機黃豆",
   "category": "crop",
   "sellPrice": 140,
   "organicOf": "soybean"
  },
  "pea": {
   "name": "豌豆",
   "category": "crop",
   "sellPrice": 85
  },
  "org_pea": {
   "name": "有機豌豆",
   "category": "crop",
   "sellPrice": 119,
   "organicOf": "pea"
  },
  "mung_bean": {
   "name": "綠豆",
   "category": "crop",
   "sellPrice": 150
  },
  "org_mung_bean": {
   "name": "有機綠豆",
   "category": "crop",
   "sellPrice": 210,
   "organicOf": "mung_bean"
  },
  "green_bean": {
   "name": "四季豆",
   "category": "crop",
   "sellPrice": 120
  },
  "org_green_bean": {
   "name": "有機四季豆",
   "category": "crop",
   "sellPrice": 168,
   "organicOf": "green_bean"
  },
  "red_bean": {
   "name": "紅豆",
   "category": "crop",
   "sellPrice": 215
  },
  "org_red_bean": {
   "name": "有機紅豆",
   "category": "crop",
   "sellPrice": 301,
   "organicOf": "red_bean"
  },
  "carrot": {
   "name": "胡蘿蔔",
   "category": "crop",
   "sellPrice": 65
  },
  "org_carrot": {
   "name": "有機胡蘿蔔",
   "category": "crop",
   "sellPrice": 91,
   "organicOf": "carrot"
  },
  "sweet_potato": {
   "name": "地瓜",
   "category": "crop",
   "sellPrice": 210
  },
  "org_sweet_potato": {
   "name": "有機地瓜",
   "category": "crop",
   "sellPrice": 294,
   "organicOf": "sweet_potato"
  },
  "daikon": {
   "name": "白蘿蔔",
   "category": "crop",
   "sellPrice": 175
  },
  "org_daikon": {
   "name": "有機白蘿蔔",
   "category": "crop",
   "sellPrice": 245,
   "organicOf": "daikon"
  },
  "beet": {
   "name": "甜菜根",
   "category": "crop",
   "sellPrice": 280
  },
  "org_beet": {
   "name": "有機甜菜根",
   "category": "crop",
   "sellPrice": 392,
   "organicOf": "beet"
  },
  "taro": {
   "name": "芋頭",
   "category": "crop",
   "sellPrice": 480
  },
  "org_taro": {
   "name": "有機芋頭",
   "category": "crop",
   "sellPrice": 672,
   "organicOf": "taro"
  },
  "lettuce": {
   "name": "生菜",
   "category": "crop",
   "sellPrice": 30
  },
  "org_lettuce": {
   "name": "有機生菜",
   "category": "crop",
   "sellPrice": 42,
   "organicOf": "lettuce"
  },
  "spinach": {
   "name": "菠菜",
   "category": "crop",
   "sellPrice": 50
  },
  "org_spinach": {
   "name": "有機菠菜",
   "category": "crop",
   "sellPrice": 70,
   "organicOf": "spinach"
  },
  "bok_choy": {
   "name": "青江菜",
   "category": "crop",
   "sellPrice": 70
  },
  "org_bok_choy": {
   "name": "有機青江菜",
   "category": "crop",
   "sellPrice": 98,
   "organicOf": "bok_choy"
  },
  "napa_cabbage": {
   "name": "大白菜",
   "category": "crop",
   "sellPrice": 310
  },
  "org_napa_cabbage": {
   "name": "有機大白菜",
   "category": "crop",
   "sellPrice": 434,
   "organicOf": "napa_cabbage"
  },
  "cucumber": {
   "name": "小黃瓜",
   "category": "crop",
   "sellPrice": 120
  },
  "org_cucumber": {
   "name": "有機小黃瓜",
   "category": "crop",
   "sellPrice": 168,
   "organicOf": "cucumber"
  },
  "eggplant": {
   "name": "茄子",
   "category": "crop",
   "sellPrice": 215
  },
  "org_eggplant": {
   "name": "有機茄子",
   "category": "crop",
   "sellPrice": 301,
   "organicOf": "eggplant"
  },
  "okra": {
   "name": "秋葵",
   "category": "crop",
   "sellPrice": 175
  },
  "org_okra": {
   "name": "有機秋葵",
   "category": "crop",
   "sellPrice": 245,
   "organicOf": "okra"
  },
  "bell_pepper": {
   "name": "甜椒",
   "category": "crop",
   "sellPrice": 305
  },
  "org_bell_pepper": {
   "name": "有機甜椒",
   "category": "crop",
   "sellPrice": 427,
   "organicOf": "bell_pepper"
  },
  "chili": {
   "name": "辣椒",
   "category": "crop",
   "sellPrice": 400
  },
  "org_chili": {
   "name": "有機辣椒",
   "category": "crop",
   "sellPrice": 560,
   "organicOf": "chili"
  },
  "muskmelon": {
   "name": "香瓜",
   "category": "crop",
   "sellPrice": 540
  },
  "org_muskmelon": {
   "name": "有機香瓜",
   "category": "crop",
   "sellPrice": 756,
   "organicOf": "muskmelon"
  },
  "honeydew": {
   "name": "哈密瓜",
   "category": "crop",
   "sellPrice": 840
  },
  "org_honeydew": {
   "name": "有機哈密瓜",
   "category": "crop",
   "sellPrice": 1176,
   "organicOf": "honeydew"
  },
  "sugarcane": {
   "name": "甘蔗",
   "category": "crop",
   "sellPrice": 1230
  },
  "org_sugarcane": {
   "name": "有機甘蔗",
   "category": "crop",
   "sellPrice": 1722,
   "organicOf": "sugarcane"
  },
  "cotton": {
   "name": "棉花",
   "category": "crop",
   "sellPrice": 1115
  },
  "org_cotton": {
   "name": "有機棉花",
   "category": "crop",
   "sellPrice": 1561,
   "organicOf": "cotton"
  },
  "tea": {
   "name": "茶樹",
   "category": "crop",
   "sellPrice": 1580
  },
  "org_tea": {
   "name": "有機茶樹",
   "category": "crop",
   "sellPrice": 2212,
   "organicOf": "tea"
  },
  "coffee": {
   "name": "咖啡",
   "category": "crop",
   "sellPrice": 1770
  },
  "org_coffee": {
   "name": "有機咖啡",
   "category": "crop",
   "sellPrice": 2478,
   "organicOf": "coffee"
  },
  "mint": {
   "name": "薄荷",
   "category": "crop",
   "sellPrice": 95
  },
  "org_mint": {
   "name": "有機薄荷",
   "category": "crop",
   "sellPrice": 133,
   "organicOf": "mint"
  },
  "basil": {
   "name": "羅勒",
   "category": "crop",
   "sellPrice": 130
  },
  "org_basil": {
   "name": "有機羅勒",
   "category": "crop",
   "sellPrice": 182,
   "organicOf": "basil"
  },
  "thyme": {
   "name": "百里香",
   "category": "crop",
   "sellPrice": 240
  },
  "org_thyme": {
   "name": "有機百里香",
   "category": "crop",
   "sellPrice": 336,
   "organicOf": "thyme"
  },
  "rosemary": {
   "name": "迷迭香",
   "category": "crop",
   "sellPrice": 295
  },
  "org_rosemary": {
   "name": "有機迷迭香",
   "category": "crop",
   "sellPrice": 413,
   "organicOf": "rosemary"
  },
  "sage": {
   "name": "鼠尾草",
   "category": "crop",
   "sellPrice": 365
  },
  "org_sage": {
   "name": "有機鼠尾草",
   "category": "crop",
   "sellPrice": 511,
   "organicOf": "sage"
  },
  "feather": {
   "name": "羽毛",
   "category": "product",
   "sellPrice": 70
  },
  "duck_meat": {
   "name": "鴨肉",
   "category": "meat",
   "sellPrice": 480
  },
  "goose_meat": {
   "name": "鵝肉",
   "category": "meat",
   "sellPrice": 1050
  },
  "honey_spring": {
   "name": "春花蜜",
   "category": "honey",
   "sellPrice": 60
  },
  "honey_summer": {
   "name": "夏花蜜",
   "category": "honey",
   "sellPrice": 65
  },
  "honey_autumn": {
   "name": "秋花蜜",
   "category": "honey",
   "sellPrice": 70
  },
  "honey_winter": {
   "name": "冬花蜜",
   "category": "honey",
   "sellPrice": 80
  },
  "bird_food": {
   "name": "鳥飼料",
   "category": "feed",
   "sellPrice": 3,
   "shopOnly": true
  },
  "wood": {
   "name": "木材",
   "category": "buildMat",
   "sellPrice": 3,
   "store": "material_shed"
  },
  "stone": {
   "name": "石材",
   "category": "buildMat",
   "sellPrice": 3,
   "store": "material_shed"
  },
  "soil": {
   "name": "土",
   "category": "buildMat",
   "sellPrice": 1,
   "store": "material_shed"
  },
  "iron_ore": {
   "name": "鐵礦",
   "category": "buildMat",
   "sellPrice": 15,
   "store": "material_shed"
  },
  "copper_ore": {
   "name": "銅礦",
   "category": "buildMat",
   "sellPrice": 20,
   "store": "material_shed"
  },
  "crystal": {
   "name": "水晶",
   "category": "buildMat",
   "sellPrice": 60,
   "store": "material_shed",
   "legacy242": "水晶拆成紫水晶、粉晶、黃水晶（v2.42），這個 id 不再產生"
  },
  "dynamite": {
   "name": "炸藥",
   "category": "consumable",
   "sellPrice": 0,
   "shopOnly": true,
   "buyPrice": 120
  },
  "part_saw_chain": {
   "name": "鋸鏈",
   "category": "part",
   "sellPrice": 0,
   "part": true
  },
  "part_drill": {
   "name": "鑽頭",
   "category": "part",
   "sellPrice": 0,
   "part": true
  },
  "part_blade": {
   "name": "鏟刃",
   "category": "part",
   "sellPrice": 0,
   "part": true
  },
  "coal": {
   "name": "煤礦",
   "category": "buildMat",
   "sellPrice": 8,
   "store": "material_shed"
  },
  "amethyst": {
   "name": "紫水晶",
   "category": "buildMat",
   "sellPrice": 60,
   "store": "material_shed"
  },
  "rose_quartz": {
   "name": "粉晶",
   "category": "buildMat",
   "sellPrice": 60,
   "store": "material_shed"
  },
  "citrine": {
   "name": "黃水晶",
   "category": "buildMat",
   "sellPrice": 60,
   "store": "material_shed"
  },
  "smoky_quartz": {
   "name": "茶晶",
   "category": "buildMat",
   "sellPrice": 60,
   "store": "material_shed"
  },
  "duck_egg": {
   "name": "鴨蛋",
   "category": "product",
   "sellPrice": 45
  },
  "rabbit_meat": {
   "name": "兔肉",
   "category": "meat",
   "sellPrice": 420
  },
  "angora_wool": {
   "name": "兔毛",
   "category": "product",
   "sellPrice": 160
  },
  "alpaca_fiber": {
   "name": "駝毛",
   "category": "product",
   "sellPrice": 420
  },
  "ostrich_meat": {
   "name": "鴕鳥肉",
   "category": "meat",
   "sellPrice": 4600
  }
 },
 "feedShop": {
  "pasture": 4,
  "corn_cake": 6,
  "fish_feed": 5,
  "dog_food": 8,
  "cat_food": 6,
  "bird_food": 6
 },
 "machines": {
  "corn_cake_machine": {
   "name": "玉米餅機",
   "buildCost": 500,
   "input": {
    "corn": 1
   },
   "output": {
    "corn_cake": 20
   },
   "seconds": 600,
   "batchesAtOnce": 1,
   "collect": "manual",
   "outputShow": {
    "plate": true,
    "maxStacks": 3,
    "oneStackPerBatch": true,
    "container": "fx_cake_plate"
   }
  },
  "fish_feed_machine": {
   "name": "魚飼料機",
   "buildCost": 800,
   "input": {
    "wheat": 1
   },
   "output": {
    "fish_feed": 8
   },
   "seconds": 900,
   "batchesAtOnce": 1,
   "collect": "manual",
   "outputShow": {
    "container": "fx_feed_cans",
    "maxStacks": 3,
    "oneStackPerBatch": true
   }
  },
  "compost_bin": {
   "name": "堆肥桶",
   "buildCost": 600,
   "input": {
    "poop": 4,
    "weed": 2
   },
   "output": {
    "organic_fert": 2
   },
   "seconds": 3600,
   "batchesAtOnce": 1,
   "collect": "manual",
   "outputShow": {
    "container": "fx_fert_sacks",
    "maxStacks": 3,
    "oneStackPerBatch": true
   }
  }
 },
 "tutorial": {
  "reward": {
   "coins": 100
  },
  "gift": {
   "corn_cake": 10
  },
  "steps": [
   {
    "id": "welcome",
    "title": "歡迎來到浮島農場",
    "text": "上面是你的等級、金幣和水桶。跟著幾個步驟，學會怎麼經營農場。",
    "target": "hud"
   },
   {
    "id": "harvest",
    "title": "收成",
    "text": "選「收成」，點一下已經成熟的小麥。收成會先放進農產倉庫，不會直接變金幣。",
    "target": "tool:hand",
    "done": "harvestCrop"
   },
   {
    "id": "plow",
    "title": "開墾",
    "text": "選「開墾」，把框起來的草地翻成田。有雜草的話先拔掉，拔下的雜草可以賣錢或當燃料。",
    "target": "tool:plow",
    "done": "plow"
   },
   {
    "id": "seed",
    "title": "播種",
    "text": "選「播種」和牧草，種在剛開墾的田。牧草是牛羊的飼料，長得最快也最便宜。",
    "target": "tool:seed",
    "done": "plantCrop:pasture"
   },
   {
    "id": "water",
    "title": "澆水",
    "text": "選「澆水」，把這格澆到 4 級。現在用的是免費的雨水。濕的時候作物正常長，乾了只長一半速度，乾太久會枯萎；枯萎了澆水就能救回來。",
    "target": "tool:water",
    "done": "moistFull"
   },
   {
    "id": "utilities",
    "title": "接水接電",
    "text": "農舍旁的水塔存著雨水，澆水都從這裡拿。接上自來水後會自動把水塔補到你設定的補水線，水錶轉動時才計費；晚上開生長燈要接電。按右上角的水電圖示就能設定。",
    "target": "button:utilities"
   },
   {
    "id": "storage",
    "title": "農產倉庫",
    "text": "打開農產倉庫，把小麥賣掉換金幣。倉庫滿了就不能收成，記得常常整理。",
    "target": "button:storage",
    "done": "sellItem"
   },
   {
    "id": "feed",
    "title": "餵動物",
    "text": "雞頭上出現「餓了」，點牠餵食。飼料從倉庫扣，不夠會用金幣買。先送你 10 個玉米餅。動物不餵就不會生產，也不會長大。",
    "target": "animal",
    "done": "feedAnimal"
   },
   {
    "id": "done",
    "title": "完成",
    "text": "圖鑑、天氣、帳單、自動化、擴地都在右上角。祝你農場豐收！",
    "target": "hud"
   }
  ]
 },
 "settingsDefaults": {
  "animation": "system",
  "location": "auto",
  "tapWater": false,
  "grid": false,
  "billingCycle": "d7",
  "autoPay": true,
  "powerPriority": "battery",
  "batteryGridCharge": "night",
  "tapFillLine": 0.5,
  "sfx": true,
  "sfxVolume": 0.7,
  "music": true,
  "musicVolume": 0.4,
  "dailyForecast": true
 },
 "cities": [
  {
   "id": "taipei",
   "name": "台北",
   "lat": 25.033,
   "lon": 121.565,
   "tz": [
    "Asia/Taipei"
   ]
  },
  {
   "id": "taichung",
   "name": "台中",
   "lat": 24.147,
   "lon": 120.674
  },
  {
   "id": "tainan",
   "name": "台南",
   "lat": 22.999,
   "lon": 120.227
  },
  {
   "id": "kaohsiung",
   "name": "高雄",
   "lat": 22.627,
   "lon": 120.301
  },
  {
   "id": "hualien",
   "name": "花蓮",
   "lat": 23.987,
   "lon": 121.601
  },
  {
   "id": "hongkong",
   "name": "香港",
   "lat": 22.319,
   "lon": 114.169,
   "tz": [
    "Asia/Hong_Kong",
    "Asia/Macau"
   ]
  },
  {
   "id": "tokyo",
   "name": "東京",
   "lat": 35.676,
   "lon": 139.65,
   "tz": [
    "Asia/Tokyo"
   ]
  },
  {
   "id": "seoul",
   "name": "首爾",
   "lat": 37.566,
   "lon": 126.978,
   "tz": [
    "Asia/Seoul"
   ]
  },
  {
   "id": "singapore",
   "name": "新加坡",
   "lat": 1.352,
   "lon": 103.82,
   "tz": [
    "Asia/Singapore",
    "Asia/Kuala_Lumpur"
   ]
  },
  {
   "id": "shanghai",
   "name": "上海",
   "lat": 31.23,
   "lon": 121.474,
   "tz": [
    "Asia/Shanghai"
   ]
  },
  {
   "id": "sydney",
   "name": "雪梨",
   "lat": -33.869,
   "lon": 151.209,
   "tz": [
    "Australia/Sydney",
    "Australia/Melbourne"
   ]
  },
  {
   "id": "losangeles",
   "name": "洛杉磯",
   "lat": 34.052,
   "lon": -118.244,
   "tz": [
    "America/Los_Angeles",
    "America/Vancouver"
   ]
  },
  {
   "id": "newyork",
   "name": "紐約",
   "lat": 40.713,
   "lon": -74.006,
   "tz": [
    "America/New_York",
    "America/Toronto"
   ]
  },
  {
   "id": "london",
   "name": "倫敦",
   "lat": 51.507,
   "lon": -0.128,
   "tz": [
    "Europe/London"
   ]
  }
 ],
 "dayNight": {
  "twilightMinutes": 30,
  "nightGrowthRate": 0.7,
  "cloudyDayGrowthRate": 0.85,
  "animalsAffected": false,
  "nightTint": {
   "appliesTo": "drawnPixelsOnly",
   "noSkyHalo": true,
   "coversUnderside": true,
   "tileGapsAtNight": "filledDark"
  }
 },
 "seasons": {
  "north": {
   "summerMonths": [
    6,
    7,
    8,
    9
   ]
  },
  "south": {
   "summerMonths": [
    12,
    1,
    2,
    3
   ]
  }
 },
 "electricity": {
  "pricePerKwh": {
   "summer": {
    "day": 6,
    "night": 3
   },
   "winter": {
    "day": 5,
    "night": 2.5
   }
  },
  "baseFeePerDay": 1,
  "dayNightSplit": "sunriseSunset"
 },
 "water": {
  "sources": [
   "rain",
   "groundwater",
   "tap"
  ],
  "useOrder": [
   "tower",
   "tap"
  ],
  "tapTiersPerDay": [
   {
    "upTo": 100,
    "price": 0.05
   },
   {
    "upTo": 330,
    "price": 0.08
   },
   {
    "upTo": null,
    "price": 0.12
   }
  ],
  "baseFeePerDay": 0.7,
  "rainFillsStorage": true,
  "droneDropsPerLevel": 1,
  "startStorageFull": true,
  "baseFeeOnlyDaysWithFlow": true,
  "tower": {
   "name": "農場水塔",
   "map": 0,
   "tile": [
    2,
    0
   ],
   "size": [
    1,
    1
   ],
   "removable": false,
   "levelFrames": [
    0,
    0.25,
    0.5,
    0.75,
    1.0
   ],
   "tapFlowPerSecond": 10,
   "fillLines": [
    null,
    0.3,
    0.5,
    0.8,
    1.0
   ],
   "defaultFillLine": 0.5,
   "relocateIfOccupied": "nearestFreeGrassToHouse"
  },
  "meterStates": {
   "off": "沒接水或金幣是負的",
   "idle": "有接水但沒在注水，不計量",
   "flowing": "正在注水或直接供水，計量"
  }
 },
 "billing": {
  "cycles": {
   "half": {
    "name": "半日結",
    "hours": 12,
    "closeAt": [
     "11:59",
     "23:59"
    ]
   },
   "d3": {
    "name": "三日結",
    "days": 3
   },
   "d7": {
    "name": "七日結",
    "days": 7
   },
   "d30": {
    "name": "30 日結",
    "days": 30
   }
  },
  "anchor": "localMidnightOfSelection",
  "dueFractionOfCycle": 0.5,
  "dueMaxDays": 7,
  "discounts": [
   {
    "withinHours": 1,
    "rate": 0.95
   },
   {
    "withinFractionOfDue": 0.5,
    "rate": 0.98
   },
   {
    "withinDue": true,
    "rate": 1.0
   }
  ],
  "lateFeeRate": 0.05,
  "autoPayRate": 0.95,
  "historyKeep": 12,
  "negative": {
   "firstNegativeAllowedAtBilling": true,
   "whileNegative": {
    "buy": false,
    "build": false,
    "gridPower": false,
    "tapWater": false,
    "baseFees": false
   }
  }
 },
 "devices": {
  "grow_lamp": {
   "name": "植物生長燈",
   "kind": "lamp",
   "buildCost": 600,
   "range": 1,
   "kwhPerHour": 0.5,
   "modes": [
    "manual",
    "auto",
    "schedule"
   ]
  },
  "grow_lamp_large": {
   "name": "大型生長燈",
   "kind": "lamp",
   "buildCost": 2000,
   "range": 2,
   "kwhPerHour": 1.5,
   "modes": [
    "manual",
    "auto",
    "schedule"
   ]
  },
  "battery_s": {
   "name": "小型電池",
   "kind": "battery",
   "buildCost": 400,
   "capacityKwh": 2,
   "maxRateKwhPerHour": 1
  },
  "battery_m": {
   "name": "中型電池",
   "kind": "battery",
   "buildCost": 1200,
   "capacityKwh": 6,
   "maxRateKwhPerHour": 2
  },
  "battery_l": {
   "name": "大型電池",
   "kind": "battery",
   "buildCost": 3000,
   "capacityKwh": 15,
   "maxRateKwhPerHour": 4
  },
  "hand_crank": {
   "name": "手搖發電機",
   "kind": "crank",
   "buildCost": 200,
   "sessionSeconds": 10,
   "kwhPerTap": 0.01,
   "maxTaps": 50,
   "cooldownSeconds": 60,
   "bufferKwh": 0.5
  },
  "biomass_gen": {
   "name": "生質發電機（充電機）",
   "kind": "generator",
   "buildCost": 1500,
   "kwhPerHour": 1,
   "fuelSlots": 50
  },
  "snow_melter": {
   "name": "融雪機",
   "kind": "melter",
   "buildCost": 1200,
   "kwhPerHour": 0.3,
   "capacityTiles": 30
  },
  "beehive": {
   "name": "蜂箱",
   "kind": "hive",
   "buildCost": 600,
   "replacesDeco": "beehive"
  },
  "well": {
   "name": "水井",
   "kind": "well",
   "buildCost": 800,
   "limitTotal": 4,
   "onlyOn": "grass",
   "dropsPerHour": 20,
   "maxDrops": 100,
   "rainMult": 2,
   "bucketDrops": 20,
   "pumpTool": "hand",
   "autoToTower": false
  },
  "solar_panel": {
   "name": "太陽能板",
   "kind": "solar",
   "buildCost": 900,
   "limitTotal": 8,
   "onlyOn": "grass",
   "kwhPerHourSunny": 0.25,
   "cloudyMult": 0.3,
   "rainSnowMult": 0.1,
   "nightMult": 0,
   "snowCoveredStops": true
  },
  "sprinkler_s": {
   "name": "小型自動灑水器",
   "kind": "sprinkler",
   "buildCost": 800,
   "range": 1,
   "kwhPerTile": 0.005,
   "waterLikeManualFull": true,
   "actions": [
    "auto",
    "off"
   ]
  },
  "sprinkler_l": {
   "name": "大型自動灑水器",
   "kind": "sprinkler",
   "buildCost": 2000,
   "range": 2,
   "kwhPerTile": 0.005,
   "waterLikeManualFull": true,
   "actions": [
    "auto",
    "off"
   ]
  },
  "bumble_hive": {
   "name": "熊蜂箱",
   "kind": "hive",
   "buildCost": 800,
   "species": "bumble"
  },
  "gh_lamp": {
   "name": "溫室生長燈",
   "kind": "lamp",
   "buildCost": 500,
   "range": 1,
   "kwhPerHour": 0.4,
   "modes": [
    "manual",
    "auto",
    "schedule"
   ],
   "hang": true,
   "drawLift": 25,
   "onlyInGreenhouse": true,
   "perTile": 1,
   "storable": true,
   "mount": "ceiling",
   "note": "吸頂式，裝在溫室棚頂內側，不往下吊（不會碰到作物）；不佔格子，只能裝在溫室格上"
  },
  "street_lamp_classic": {
   "name": "經典鑄鐵路燈",
   "kind": "lamp",
   "street": true,
   "buildCost": 650,
   "range": 1,
   "kwhPerHour": 0.4,
   "unlockLevel": 6,
   "modes": [
    "auto",
    "manual",
    "schedule"
   ],
   "defaultMode": "auto",
   "storable": true,
   "snowArt": true,
   "note": "路燈：天黑自動亮（耗電，走電力順序並計入帳單），照到的作物晚上照常生長，和生長燈一樣"
  },
  "street_lamp_garden": {
   "name": "花園矮燈",
   "kind": "lamp",
   "street": true,
   "buildCost": 500,
   "range": 1,
   "kwhPerHour": 0.35,
   "unlockLevel": 5,
   "modes": [
    "auto",
    "manual",
    "schedule"
   ],
   "defaultMode": "auto",
   "storable": true,
   "snowArt": true,
   "note": "路燈：天黑自動亮（耗電，走電力順序並計入帳單），照到的作物晚上照常生長，和生長燈一樣"
  },
  "street_lamp_double": {
   "name": "雙頭歐式路燈",
   "kind": "lamp",
   "street": true,
   "buildCost": 2200,
   "range": 2,
   "kwhPerHour": 1.4,
   "unlockLevel": 12,
   "modes": [
    "auto",
    "manual",
    "schedule"
   ],
   "defaultMode": "auto",
   "storable": true,
   "snowArt": true,
   "note": "路燈：天黑自動亮（耗電，走電力順序並計入帳單），照到的作物晚上照常生長，和生長燈一樣"
  },
  "street_lamp_modern": {
   "name": "現代 LED 路燈",
   "kind": "lamp",
   "street": true,
   "buildCost": 2000,
   "range": 2,
   "kwhPerHour": 1.2,
   "unlockLevel": 10,
   "modes": [
    "auto",
    "manual",
    "schedule"
   ],
   "defaultMode": "auto",
   "storable": true,
   "snowArt": true,
   "note": "路燈：天黑自動亮（耗電，走電力順序並計入帳單），照到的作物晚上照常生長，和生長燈一樣"
  },
  "pool_lamp": {
   "name": "魚池水底燈",
   "kind": "lamp",
   "buildCost": 500,
   "range": 1,
   "kwhPerHour": 0.3,
   "unlockLevel": 6,
   "modes": [
    "auto",
    "manual",
    "schedule"
   ],
   "defaultMode": "auto",
   "onlyOnPool": true,
   "perTile": 1,
   "mount": "poolFloor",
   "storable": true,
   "note": "裝在魚池池底，不佔格子（格子有魚池、有魚也能裝），一格最多一盞；晚上亮，照自己和周圍 8 格的魚池，照到的魚晚上照常長",
   "glow": {
    "color": [
     120,
     200,
     255
    ],
    "alpha": 0.5,
    "core": [
     255,
     244,
     210
    ],
    "coreAlpha": 0.35,
    "radius": 1.7,
    "note": "晚上的光：一整片從燈往外淡出的藍白光，只畫在範圍內的魚池格（含島邊玻璃側面）"
   }
  }
 },
 "power": {
  "batteryEfficiency": 0.9,
  "priorityOrder": {
   "battery": [
    "battery",
    "crankBuffer",
    "generator",
    "grid"
   ],
   "grid": [
    "grid",
    "battery",
    "crankBuffer",
    "generator"
   ]
  },
  "fuels": {
   "weed": 0.2,
   "pasture": 0.1
  },
  "deviceSellRate": 0.5,
  "lampEffect": "nightOrCloudyDay",
  "solarSell": {
   "enabled": true,
   "needsGrid": true,
   "priceRate": 0.5,
   "onlyAfterBatteryFull": true,
   "creditOnlyNoCashback": true
  }
 },
 "weeds": {
  "growsOn": "emptyGrass",
  "minutesPerWeedPerBlock": 20,
  "maxPerBlock": 12,
  "item": "weed",
  "fullStorageCoins": 1,
  "xp": 0,
  "clearBeforePlow": true
 },
 "buildings": {
  "barn": {
   "name": "農產倉庫",
   "size": [
    2,
    2
   ],
   "limit": 1,
   "cost": 0,
   "opens": "produce",
   "sellable": false,
   "startIn": "decoStorage",
   "fullnessFrames": [
    {
     "below": 0.3,
     "frame": "empty"
    },
    {
     "below": 0.8,
     "frame": "half"
    },
    {
     "below": null,
     "frame": "full"
    }
   ],
   "fullBubble": true,
   "storable": true,
   "movable": true
  },
  "shed": {
   "name": "飾品倉庫",
   "size": [
    1,
    1
   ],
   "limit": 1,
   "cost": 0,
   "opens": "deco",
   "sellable": false,
   "startIn": "decoStorage",
   "storable": true,
   "movable": true
  },
  "farmhouse": {
   "name": "農舍",
   "size": [
    2,
    2
   ],
   "limit": 1,
   "cost": 0,
   "sellable": false,
   "storable": true,
   "movable": true,
   "attached": "utilityPole",
   "builtIn": true
  },
  "water_tower": {
   "name": "農場水塔",
   "size": [
    1,
    1
   ],
   "limit": 1,
   "cost": 0,
   "sellable": false,
   "storable": true,
   "movable": true,
   "attached": "waterMeter",
   "builtIn": true,
   "storedStillWorks": true
  },
  "drone_pad": {
   "name": "無人機停機坪",
   "size": [
    1,
    1
   ],
   "limit": 3,
   "cost": 500,
   "unlockLevel": 3,
   "buyWith": "build",
   "sellable": true,
   "sellRate": 0.5,
   "storable": true,
   "movable": true,
   "serves": "water",
   "chargeSourceDefault": "solar",
   "perMapLimit": 3,
   "slotsMax": 2,
   "slots": 1
  },
  "robot_charger": {
   "name": "機器人充電站",
   "size": [
    1,
    1
   ],
   "limit": 3,
   "cost": 800,
   "unlockLevel": 4,
   "buyWith": "build",
   "sellable": true,
   "sellRate": 0.5,
   "storable": true,
   "movable": true,
   "serves": "feed",
   "chargeSourceDefault": "solar",
   "perMapLimit": 3,
   "slotsMax": 2,
   "slots": 1
  },
  "water_tower_extra": {
   "name": "加掛水塔",
   "size": [
    1,
    1
   ],
   "limit": 3,
   "cost": 1500,
   "unlockLevel": 5,
   "buyWith": "build",
   "capacity": 1000,
   "sellable": true,
   "sellRate": 0.5,
   "storable": true,
   "movable": true,
   "linksToMainTower": true
  },
  "sweeper_dock": {
   "name": "掃地基座",
   "size": [
    1,
    1
   ],
   "limit": 3,
   "cost": 300,
   "comesWith": "sweeper",
   "sellable": false,
   "storable": true,
   "movable": true,
   "perMapLimit": 3,
   "slotsMax": 2,
   "slots": 1,
   "firstComesWithSweeper": true
  },
  "trash_station": {
   "name": "垃圾站",
   "size": [
    1,
    1
   ],
   "limit": 3,
   "cost": 300,
   "freeFirst": true,
   "startIn": "decoStorage",
   "storable": true,
   "movable": true,
   "opens": "trash",
   "capacity": {
    "general": 5,
    "recycle": 5,
    "sewageDrops": 200
   },
   "limitScope": "island"
  },
  "truck_pad": {
   "name": "垃圾車停車場",
   "size": [
    4,
    2
   ],
   "limit": 1,
   "cost": 1500,
   "unlockLevel": 4,
   "movable": true,
   "sellRate": 0.5,
   "note": "2×4 platform docked on the invisible 2-cell rim around the island (never on island tiles); any of the 4 sides; move along the edge for free; expansion pushes it out automatically; trucks land on its two 2×2 bays 16:00-16:30",
   "placement": "rim",
   "rimDepth": 2,
   "sides": [
    "sw",
    "se",
    "ne",
    "nw"
   ],
   "bay": [
    2,
    2
   ],
   "art": {
    "pad": "truckpad_{sw|se|ne|nw}",
    "garbage": "truck_garbage_{dir}",
    "recycle": "truck_recycle_{dir}",
    "source": "art/src_truckpad/truckpad.json → node art/render25.js",
    "truckRearFaces": "island"
   },
   "limitPerIsland": 1,
   "storable": true,
   "note234": "v2.34：每座島最多 limitPerIsland 座（limit 只給舊程式看）；每座都 cost 金幣；「收回」放進建設倉庫，拿出來免費、放到任何一座還沒有停車場的島；剷除退 sellRate；垃圾車到哪座島就停那座島的停車場，沒有就停在島邊空中"
  },
  "material_shed": {
   "name": "建材小屋",
   "size": [
    2,
    2
   ],
   "limit": 3,
   "perMapLimit": 1,
   "cost": 1500,
   "unlockLevel": 3,
   "buyWith": "build",
   "sellable": true,
   "sellRate": 0.5,
   "storable": true,
   "movable": true,
   "opens": "materials",
   "perIsland": true,
   "capacity": {
    "baseLevel": 3,
    "base": 200,
    "perLevel": 40
   },
   "noShedSoilToCoins": true,
   "sellInPanel": true,
   "note": "每座島最多 1 間，建材只屬於這座島；Lv3 200 份、每升一級 +40；這座島沒小屋時容量 0（清地形機器人不出動，挖河道的土直接換金幣）"
  },
  "heavy_charger": {
   "name": "重型充電樁",
   "size": [
    1,
    1
   ],
   "limit": 6,
   "cost": 1200,
   "unlockLevel": 3,
   "buyWith": "build",
   "sellable": true,
   "sellRate": 0.5,
   "storable": true,
   "movable": true,
   "serves": "mine",
   "chargeSourceDefault": "farm",
   "slots": 1,
   "slotsMax": 1,
   "baseMax": 6,
   "note": "v2.45.1：一座充一台、不能擴充，最多 6 座（跟一般充電站、停機坪、掃地基座的各 3 座分開算）；機器人可以比充電樁多（輪流充電），自己那座島有重型充電樁就會出門；預設用農場電力，耗電是一般機器人的 3 倍"
  }
 },
 "weatherDolls": {
  "types": {
   "sun": {
    "name": "晴天娃娃",
    "unlockLevel": 2,
    "usableWhen": "rainingOrCloudyNow",
    "effect": "clearSky",
    "nightEffect": "noRainOnly"
   },
   "rain": {
    "name": "雨天娃娃",
    "unlockLevel": 3,
    "usableWhen": "notRainingNow",
    "effect": "rain",
    "rainEffects": [
     "moistFull",
     "reviveWithered",
     "fillTowerFree",
     "dronePause",
     "countsAsCloudy"
    ]
   },
   "snow": {
    "name": "雪女娃娃",
    "unlockLevel": 5,
    "usableWhen": "notSnowingNow",
    "effect": "snow",
    "anyClimate": true,
    "dayAndNight": true,
    "sameAsNaturalSnow": true
   },
   "thunder": {
    "name": "雷神娃娃",
    "unlockLevel": 7,
    "usableWhen": "notRainingNow",
    "effect": "rain",
    "rainEffects": [
     "moistFull",
     "reviveWithered",
     "fillTowerFree",
     "dronePause",
     "countsAsCloudy"
    ],
    "minutes": {
     "s": 10,
     "m": 15,
     "l": 20
    },
    "sizeNames": {
     "s": "小雷雨",
     "m": "雷雨",
     "l": "強烈雷暴"
    },
    "charge": {
     "s": 0.2,
     "m": 0.5,
     "l": 1
    },
    "lightning": {
     "everySecondsMin": 5,
     "everySecondsMax": 14,
     "flash": true
    },
    "note": "v2.40：補水同雨天娃娃；充電＝放下時全部電池合計容量 × charge，在娃娃時間內隨每道雷慢慢充進電池（免費、不算電費、滿了就浪費）；中途收回就停，下次放出來接著充。沒有電池也照樣打雷下雨，只是不充電"
   }
  },
  "sizes": {
   "s": {
    "name": "小",
    "minutes": 10
   },
   "m": {
    "name": "中",
    "minutes": 60
   },
   "l": {
    "name": "大",
    "minutes": 120
   }
  },
  "prices": {
   "sun": {
    "s": 30,
    "m": 120,
    "l": 220
   },
   "rain": {
    "s": 60,
    "m": 200,
    "l": 350
   },
   "snow": {
    "s": 50,
    "m": 180,
    "l": 300
   },
   "thunder": {
    "s": 90,
    "m": 280,
    "l": 480
   }
  },
  "rules": {
   "maxActive": 1,
   "conditionCheckedAt": "placement",
   "scope": "allMaps",
   "onReplace": "askThenReturnOldToStorageKeepRemaining",
   "timerRunsOnlyWhilePlaced": true,
   "offlineCounts": true,
   "exhaustedStaysAsDeco": true,
   "rechargeable": false,
   "sellPrice": 1,
   "placeOrder": "leastRemainingFirst"
  }
 },
 "automationUnits": {
  "water": {
   "name": "無人機",
   "base": "drone_pad",
   "workMinutes": 15,
   "kwhPerCharge": 0.1,
   "tankDrops": 60,
   "refillSeconds": 30
  },
  "feed": {
   "name": "機器人",
   "base": "robot_charger",
   "workMinutes": 20,
   "kwhPerCharge": 0.15
  },
  "chargeSources": {
   "solar": {
    "name": "太陽能",
    "clearDayMinutes": 20,
    "cloudyMinutes": 40,
    "night": null,
    "cost": 0
   },
   "farm": {
    "name": "農場電力",
    "minutes": 5,
    "order": "powerPriority"
   }
  },
  "requireBaseToBuy": true,
  "noBase": {
   "behaviour": "useRemainingThenRest",
   "restAt": [
    "farmhouseRoof",
    "mapCorner"
   ],
   "expiryKeepsCounting": true
  },
  "sellBase": {
   "anytime": true,
   "leftoverLost": true
  },
  "buyFromBasePanel": true
 },
 "move": {
  "tool": true,
  "longPressMs": 400,
  "slopPx": 6,
  "sameMapOnly": true,
  "autoPullWeeds": true,
  "free": true,
  "movable": [
   "deco",
   "doll",
   "building",
   "pool",
   "pond",
   "device",
   "machine",
   "animal"
  ],
  "notMovable": [
   "soil",
   "tree"
  ],
  "poolMovesWhole": true,
  "dropToStore": {
   "targets": [
    "building:shed",
    "building:barn",
    "hud:storageBtn"
   ],
   "storable": [
    "deco",
    "doll",
    "building",
    "house",
    "tower"
   ],
   "into": "decoStorage"
  }
 },
 "animalRoam": {
  "walkable": [
   "grass",
   "weed",
   "animal"
  ],
  "walls": [
   "fence",
   "mapEdge"
  ],
  "avoid": [
   "soil",
   "tree",
   "pool",
   "pond",
   "building",
   "house",
   "tower",
   "machine",
   "device",
   "deco",
   "doll"
  ],
  "tilesPerSecond": 0.35,
  "pauseSeconds": [
   2,
   6
  ],
  "hitTest": "drawnPosition"
 },
 "sky": {
  "folder": "sprites",
  "keyframes": [
   {
    "id": "starry",
    "file": "sky_starry.jpg",
    "name": "星空",
    "at": "sunset+150m",
    "holdUntil": "sunrise-60m"
   },
   {
    "id": "dawn",
    "file": "sky_dawn.jpg",
    "name": "清晨",
    "at": "sunrise"
   },
   {
    "id": "noon",
    "file": "sky_noon.jpg",
    "name": "中午",
    "at": "solarNoon-60m",
    "holdUntil": "solarNoon+60m"
   },
   {
    "id": "afternoon",
    "file": "sky_afternoon.jpg",
    "name": "下午",
    "at": "sunset-150m"
   },
   {
    "id": "evening",
    "file": "sky_evening.jpg",
    "name": "傍晚",
    "at": "sunset-60m"
   },
   {
    "id": "dusk",
    "file": "sky_dusk.jpg",
    "name": "黃昏",
    "at": "sunset+10m"
   },
   {
    "id": "night",
    "file": "sky_night.jpg",
    "name": "晚上",
    "at": "sunset+60m"
   }
  ],
  "blend": "linearBetweenKeyframes",
  "layers": {
   "stars": {
    "file": "sky_stars.png",
    "twinkle": true,
    "visibleWhenDarkness": ">0.3"
   },
   "milkyway": {
    "file": "sky_milkyway.png",
    "everyNight": true,
    "visibleWhenDarkness": ">0.6"
   },
   "moon": {
    "file": "sky_moon.png",
    "frames": 24,
    "realPhase": true,
    "synodicDays": 29.530588,
    "refNewMoonUtc": "2000-01-06T18:14:00Z",
    "dayVisibleAlpha": 0.35,
    "position": "ephemeris",
    "limbFacesSun": true,
    "drawUnlitSide": false
   },
   "clouds": {
    "files": [
     "bg_cloud_a.png",
     "bg_cloud_b.png",
     "bg_cloud_c.png"
    ],
    "count": 4
   },
   "sun": {
    "file": "sky_sun.png",
    "path": "ephemeris",
    "hiddenWhenOvercast": true
   }
  },
  "overcast": {
   "tint": "rgba(120,130,140,.45)",
   "hideSun": true
  },
  "view": {
   "faces": "south (north hemisphere) / north (south hemisphere)",
   "fovDeg": 150,
   "horizonY": 0.8,
   "topY": 0.04,
   "altitudeCurve": 0.55
  },
  "daytimePainted": {
   "keys": [
    "dawn",
    "noon",
    "afternoon",
    "evening",
    "dusk"
   ],
   "source": "player-provided illustrations",
   "cartoonClouds": false,
   "movingSun": true,
   "portraitAlign": 0.8
  }
 },
 "easterEggs": {
  "rooster": {
   "enabled": true,
   "needsChicken": false,
   "window": "06:00..09:00 local",
   "oncePerDay": true,
   "needsHouseOnMap": true,
   "flyInSeconds": 3,
   "crowSeconds": 3,
   "flyOutSeconds": 3,
   "bubble": "喔喔喔～",
   "sfx": "rooster",
   "clickable": false,
   "saved": false,
   "localStart": "06:00",
   "localEnd": "09:00",
   "trigger": "enter farm or open game inside the window"
  }
 },
 "audio": {
  "folder": "audio",
  "sfx": {
   "rooster": "audio/sfx/rooster.mp3",
   "coin": "audio/sfx/coin.mp3",
   "harvest": "audio/sfx/harvest.mp3",
   "water": "audio/sfx/water.mp3",
   "plow": "audio/sfx/plow.mp3",
   "place": "audio/sfx/place.mp3",
   "levelup": "audio/sfx/levelup.mp3",
   "click": "audio/sfx/click.mp3",
   "spray": "audio/sfx/spray.mp3"
  },
  "bgm": {
   "rain": [
    "audio/bgm/rain.mp3"
   ],
   "sleep": [
    "audio/bgm/sleep.mp3"
   ],
   "night": [
    "audio/bgm/night.mp3"
   ],
   "morning": [
    "audio/bgm/morning.mp3"
   ],
   "afternoon": [
    "audio/bgm/afternoon.mp3"
   ]
  },
  "bgmRules": [
   {
    "ctx": "rain",
    "when": "raining"
   },
   {
    "ctx": "sleep",
    "when": "sky:starry"
   },
   {
    "ctx": "night",
    "when": "sky:dusk..starry"
   },
   {
    "ctx": "morning",
    "when": "sunrise-60m..solarNoon"
   },
   {
    "ctx": "afternoon",
    "when": "solarNoon..dusk"
   }
  ],
  "crossfadeSeconds": 2,
  "shuffle": true,
  "missingFiles": "skipSilently",
  "startAfterFirstTap": true,
  "sfxUse": {
   "water": "澆水、除雪倒雪：只有水滴聲",
   "spray": "噴農藥",
   "place": "施化肥、有機肥"
  }
 },
 "forecast": {
  "dailyPopup": true,
  "blockHours": 3,
  "days": 2,
  "showSun": true,
  "showMoon": true,
  "events": [
   "rain",
   "snow",
   "tornado",
   "quake",
   "meteorShower"
  ],
  "tips": true,
  "rainSnowExactTimes": true,
  "disasterRiskOnly": true,
  "riskLevels": [
   "低",
   "中",
   "高"
  ],
  "riskMeaning": "higher risk makes the event more likely but never certain",
  "noAdvanceAlert": true
 },
 "meteors": {
  "showers": [
   {
    "name": "象限儀座流星雨",
    "peak": "01-03"
   },
   {
    "name": "天琴座流星雨",
    "peak": "04-22"
   },
   {
    "name": "寶瓶座η流星雨",
    "peak": "05-06"
   },
   {
    "name": "英仙座流星雨",
    "peak": "08-12"
   },
   {
    "name": "獵戶座流星雨",
    "peak": "10-21"
   },
   {
    "name": "獅子座流星雨",
    "peak": "11-17"
   },
   {
    "name": "雙子座流星雨",
    "peak": "12-14"
   }
  ],
  "showerWindowDays": 1,
  "showerPerMinute": 6,
  "sporadicPerHour": 20,
  "needsDarkness": 0.6,
  "hiddenWhenRaining": true,
  "wish": {
   "maxPerNight": 10,
   "rewards": [
    {
     "type": "coins",
     "min": 5,
     "max": 20,
     "weight": 6
    },
    {
     "type": "xp",
     "min": 3,
     "max": 8,
     "weight": 3
    },
    {
     "type": "seed",
     "item": "random_unlocked_crop",
     "qty": 3,
     "weight": 1
    }
   ]
  },
  "tap": {
   "radius": 60,
   "radiusTouch": 72,
   "graceSeconds": 0.3,
   "downMemoryMs": 900,
   "note": "判斷整條流星（頭到尾巴的線段），按下時就判斷"
  }
 },
 "scale": {
  "metersPerTile": 2,
  "note": "machines x1.2, generator x1.15, barn x1.1 redrawn for consistent scale"
 },
 "climate": {
  "regionGridDeg": 0.5,
  "zones": [
   {
    "id": "tropical",
    "name": "熱帶",
    "maxLat": 23.5
   },
   {
    "id": "subtropical",
    "name": "亞熱帶",
    "maxLat": 35
   },
   {
    "id": "temperate",
    "name": "溫帶",
    "maxLat": 55
   },
   {
    "id": "polar",
    "name": "寒帶",
    "maxLat": 90
   }
  ],
  "precipPerSlot": {
   "tropical": {
    "wet": 0.1,
    "dry": 0.04
   },
   "subtropical": {
    "summer": 0.08,
    "other": 0.05
   },
   "temperate": {
    "all": 0.05
   },
   "polar": {
    "all": 0.04
   }
  },
  "cloudyPerSlot": {
   "tropical": 0.3,
   "subtropical": 0.25,
   "temperate": 0.25,
   "polar": 0.3
  },
  "snowShare": {
   "temperate": {
    "winter": 0.6
   },
   "polar": {
    "winter": 1.0,
    "shoulder": 0.5
   }
  },
  "tropicalWetMonthsNorth": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "seasonsNorth": {
   "winter": [
    12,
    1,
    2
   ],
   "spring": [
    3,
    4,
    5
   ],
   "summer": [
    6,
    7,
    8
   ],
   "autumn": [
    9,
    10,
    11
   ]
  }
 },
 "snow": {
  "minutes": 45,
  "coverMeltHours": 3,
  "coverMeltHoursSunnyDay": 1.5,
  "growthRate": 0.3,
  "growthRateLit": 0.7,
  "soilDries": false,
  "fillsTower": false,
  "meltRefillTowerPct": 0.3,
  "shovel": {
   "tool": "shovel",
   "toolOnlyWhenSnow": true,
   "tilesPerTap": 1,
   "bucketMax": 10,
   "dragToShovel": true,
   "clearedTilesGrowNormal": true
  },
  "towerStore": {
   "dropsPerTile": 8,
   "meltPctPerMinute": 0.02,
   "maxPctOfCapacity": 0.2,
   "clogPerTile": 0.1,
   "clearTaps": 5,
   "clogBlocksTowerWater": true
  },
  "melter": {
   "id": "snow_melter",
   "dropsPerTile": 10,
   "secondsPerTile": 20,
   "kwhPerHour": 0.3,
   "capacityTiles": 30,
   "bottles": {
    "sprite": "fx_pet_bottle",
    "maxRow": 6,
    "rollSeconds": 1.5,
    "note": "每融好一格雪（dropsPerTile 滴）滾出一瓶寶特瓶水，排在出口旁（最多 maxRow 瓶），再自動加進水塔；水塔滿了瓶子停著、融雪暫停"
   }
  },
  "cover": {
   "fullTile": true,
   "objects": [
    "tree_",
    "building_",
    "animal_",
    "deco_tree",
    "device_beehive",
    "device_bumble",
    "device_street_lamp_",
    "deco_bench_"
   ],
   "capDepth": [
    4,
    9
   ],
   "fieldScale": 0.84,
   "fieldLift": 2.5,
   "roofArt": "batch31 snow_<sprite>",
   "shovelRoofs": true,
   "snowBlocksBaseSolar": true,
   "animalsCosmeticOnly": true,
   "note": "田的積雪蓋住整個田面、外圈田埂露出一點土；樹、屋頂、充電站、動物背上積雪；屋頂與充電站可用鏟雪除雪（動物、樹不能鏟），充電站頂上有雪時太陽能不充電"
  }
 },
 "tornado": {
  "zones": [
   "temperate"
  ],
  "seasons": [
   "spring",
   "summer"
  ],
  "daytimeOnly": true,
  "chancePerDay": 0.03,
  "minutes": 5,
  "tiltsDecos": true,
  "tiltsCrops": true,
  "tiltedDecoEffectPaused": true,
  "tapToStraighten": true,
  "cropYieldEffect": 0,
  "weedsToBall": true,
  "ballRollsToCorner": true,
  "debrisPieces": [
   3,
   6
  ],
  "dronePaused": true,
  "immune": [
   "building",
   "house",
   "tower",
   "animal",
   "device",
   "machine",
   "road",
   "fence",
   "soil-land",
   "tree-trunk"
  ],
  "protection": "windbreak"
 },
 "earthquake": {
  "seismicBoxes": [
   {
    "name": "台灣",
    "lat": [
     21.5,
     25.5
    ],
    "lon": [
     119.5,
     122.5
    ],
    "chancePerDay": 0.04
   },
   {
    "name": "日本",
    "lat": [
     24,
     46
    ],
    "lon": [
     123,
     146
    ],
    "chancePerDay": 0.03
   },
   {
    "name": "菲律賓",
    "lat": [
     5,
     19
    ],
    "lon": [
     117,
     127
    ],
    "chancePerDay": 0.02
   },
   {
    "name": "印尼",
    "lat": [
     -11,
     6
    ],
    "lon": [
     95,
     141
    ],
    "chancePerDay": 0.02
   },
   {
    "name": "紐西蘭",
    "lat": [
     -47,
     -34
    ],
    "lon": [
     166,
     179
    ],
    "chancePerDay": 0.02
   },
   {
    "name": "美洲西岸",
    "lat": [
     -56,
     61
    ],
    "lon": [
     -125,
     -66
    ],
    "chancePerDay": 0.02,
    "westCoastOnly": true
   },
   {
    "name": "地中海到喜馬拉雅",
    "lat": [
     30,
     45
    ],
    "lon": [
     10,
     95
    ],
    "chancePerDay": 0.02
   }
  ],
  "levels": {
   "small": {
    "name": "小",
    "weight": 0.6,
    "shakeSeconds": 2
   },
   "medium": {
    "name": "中",
    "weight": 0.3,
    "shakeSeconds": 3,
    "towerLossPct": 0.1,
    "machineDelayMinutes": 5
   },
   "large": {
    "name": "大",
    "weight": 0.1,
    "shakeSeconds": 3,
    "towerLossPct": 0.1,
    "machineDelayMinutes": 5,
    "fencesFall": [
     1,
     3
    ]
   }
  },
  "fallenFence": {
   "tapToRaise": true,
   "animalsPassThrough": true
  },
  "towerReinforce": {
   "name": "耐震加固",
   "cost": 800,
   "appliesToAllTowers": true
  }
 },
 "news": {
  "onReturn": true,
  "items": [
   "rain",
   "snow",
   "tornado",
   "quake",
   "death",
   "bill",
   "meteor",
   "ratAttack",
   "predator",
   "petGrown",
   "petGift"
  ],
  "maxItems": 12,
  "robotLog": true,
  "robotLogMinOfflineSeconds": 120
 },
 "robots": {
  "ownOrRent": true,
  "kinds": {
   "water": {
    "name": "澆水無人機",
    "base": "drone_pad",
    "tiers": [
     {
      "id": "drone_1",
      "name": "初級",
      "buy": 1500,
      "workHours": 4,
      "kwh": 0.4,
      "chargeHours": 1
     },
     {
      "id": "drone_2",
      "name": "中級",
      "buy": 4000,
      "workHours": 12,
      "kwh": 1.2,
      "chargeHours": 2
     },
     {
      "id": "drone_3",
      "name": "高級",
      "buy": 9000,
      "workHours": 24,
      "kwh": 2.4,
      "chargeHours": 3
     }
    ],
    "tankDrops": 60
   },
   "feed": {
    "name": "餵食機器人",
    "base": "robot_charger",
    "tiers": [
     {
      "id": "feeder_1",
      "name": "初級",
      "buy": 1500,
      "workHours": 4,
      "kwh": 0.4,
      "chargeHours": 1
     },
     {
      "id": "feeder_2",
      "name": "中級",
      "buy": 4000,
      "workHours": 12,
      "kwh": 1.2,
      "chargeHours": 2
     },
     {
      "id": "feeder_3",
      "name": "高級",
      "buy": 9000,
      "workHours": 24,
      "kwh": 2.4,
      "chargeHours": 3
     }
    ],
    "walk": {
     "tilesPerSecond": 1.2,
     "feedSeconds": 1.2
    },
    "pool2362": {
     "scatterSeconds": 2.5,
     "bucketPerPool": 1,
     "noFeedRetrySeconds": 60,
     "throwsPerSecond": 1.6,
     "grains": 9,
     "splashStaggerMs": 90,
     "note": "v2.36.2：餵食機器人走到魚池任何一格旁邊（站得到的那格）就把同一池所有餓的格子一起撒飼料，撒 scatterSeconds 秒（動物照舊 walk.feedSeconds）；飼料照每格扣，扣不到的格子跳過；飼料桶一池用 bucketPerPool 份；整池都扣不到飼料時 noFeedRetrySeconds 秒內先去做別的；畫面：每秒丟 throwsPerSecond 把、每把 grains 粒，餵完每一格依序濺起水花（間隔 splashStaggerMs）"
    }
   },
   "snow": {
    "name": "除雪機器人",
    "base": "robot_charger",
    "unlockLevel": 5,
    "tiers": [
     {
      "id": "snowbot",
      "name": "初級",
      "buy": 1200,
      "workHours": 2,
      "kwh": 0.3,
      "chargeHours": 0.667
     },
     {
      "id": "snowbot_2",
      "name": "中級",
      "buy": 3200,
      "workHours": 6,
      "kwh": 0.9,
      "chargeHours": 1.334
     },
     {
      "id": "snowbot_3",
      "name": "高級",
      "buy": 6800,
      "workHours": 12,
      "kwh": 1.8,
      "chargeHours": 2.001
     }
    ],
    "rent": [
     {
      "hours": 2,
      "cost": 80
     },
     {
      "hours": 12,
      "cost": 300,
      "unlock": "rent_snow_1"
     },
     {
      "hours": 24,
      "cost": 600,
      "unlock": "rent_snow_2"
     }
    ],
    "walk": {
     "tilesPerSecond": 1,
     "clearSeconds": 5,
     "note": "沿格子走到有雪的格子清雪（田、建物站在旁邊清）；收工走回充電站"
    }
   },
   "sweep": {
    "name": "掃地機器人",
    "base": "sweeper_dock",
    "unlockLevel": 3,
    "tiers": [
     {
      "id": "sweeper",
      "name": "初級",
      "buy": 800,
      "workHours": 0.5,
      "kwh": 0.05,
      "chargeHours": 0.167
     },
     {
      "id": "sweeper_2",
      "name": "中級",
      "buy": 2200,
      "workHours": 1,
      "kwh": 0.1,
      "chargeHours": 0.334
     },
     {
      "id": "sweeper_3",
      "name": "高級",
      "buy": 4800,
      "workHours": 2,
      "kwh": 0.2,
      "chargeHours": 0.501
     }
    ],
    "rent": [
     {
      "hours": 2,
      "cost": 40
     },
     {
      "hours": 12,
      "cost": 150,
      "unlock": "rent_sweep_1"
     },
     {
      "hours": 24,
      "cost": 320,
      "unlock": "rent_sweep_2"
     }
    ],
    "tilesPerMinute": 15,
    "report": {
     "heatmapHours": 24
    }
   },
   "poop": {
    "name": "鏟屎官機器人",
    "base": "robot_charger",
    "unlockLevel": 5,
    "tiers": [
     {
      "id": "poopbot",
      "name": "初級",
      "buy": 1500,
      "workHours": 4,
      "kwh": 0.4,
      "chargeHours": 1
     },
     {
      "id": "poopbot_2",
      "name": "中級",
      "buy": 4000,
      "workHours": 12,
      "kwh": 1.2,
      "chargeHours": 2
     },
     {
      "id": "poopbot_3",
      "name": "高級",
      "buy": 8500,
      "workHours": 24,
      "kwh": 2.4,
      "chargeHours": 3
     }
    ],
    "rent": [
     {
      "hours": 4,
      "cost": 120
     },
     {
      "hours": 12,
      "cost": 400,
      "unlock": "rent_poop_1"
     },
     {
      "hours": 24,
      "cost": 900,
      "unlock": "rent_poop_2"
     }
    ],
    "perMinute": 4,
    "storesToBarn": true,
    "waitsWhenFull": true,
    "walk": {
     "tilesPerSecond": 1,
     "shovelSeconds": 1.5,
     "note": "從充電站沿格子走到糞便那格才鏟；收工走回充電站"
    }
   },
   "honey": {
    "name": "採蜜機器人",
    "base": "drone_pad",
    "unlockLevel": 6,
    "tiers": [
     {
      "id": "honeybot",
      "name": "初級",
      "buy": 1800,
      "workHours": 4,
      "kwh": 0.4,
      "chargeHours": 1
     },
     {
      "id": "honeybot_2",
      "name": "中級",
      "buy": 4500,
      "workHours": 8,
      "kwh": 0.8,
      "chargeHours": 2
     },
     {
      "id": "honeybot_3",
      "name": "高級",
      "buy": 8800,
      "workHours": 24,
      "kwh": 2.4,
      "chargeHours": 3
     }
    ],
    "rent": [
     {
      "hours": 4,
      "cost": 150
     },
     {
      "hours": 12,
      "cost": 500,
      "unlock": "rent_honey_1"
     },
     {
      "hours": 24,
      "cost": 1000,
      "unlock": "rent_honey_2"
     }
    ],
    "collectAtJars": 10,
    "flies": true
   },
   "wellbot": {
    "name": "水井機器人",
    "base": "robot_charger",
    "unlockLevel": 5,
    "tiers": [
     {
      "id": "wellbot",
      "name": "初級",
      "buy": 1200,
      "workHours": 2,
      "kwh": 0.2,
      "chargeHours": 1
     },
     {
      "id": "wellbot_2",
      "name": "中級",
      "buy": 3500,
      "workHours": 8,
      "kwh": 0.8,
      "chargeHours": 2
     },
     {
      "id": "wellbot_3",
      "name": "高級",
      "buy": 7800,
      "workHours": 24,
      "kwh": 2.4,
      "chargeHours": 3
     }
    ],
    "rent": [
     {
      "hours": 4,
      "cost": 80
     },
     {
      "hours": 12,
      "cost": 300,
      "unlock": "rent_wellbot_1"
     },
     {
      "hours": 24,
      "cost": 600,
      "unlock": "rent_wellbot_2"
     }
    ],
    "bucketDrops": 20,
    "tilesPerSecond": 1,
    "fillSeconds": 2,
    "pourSeconds": 2,
    "minWellDrops": 20,
    "look": "cute tracked cart with a mini crane holding a bucket, no humanoid head"
   },
   "trashbot": {
    "name": "倒垃圾機器人",
    "base": "robot_charger",
    "unlockLevel": 4,
    "tiers": [
     {
      "id": "trashbot",
      "name": "初級",
      "buy": 1200,
      "workHours": 2,
      "kwh": 0.2,
      "chargeHours": 1
     },
     {
      "id": "trashbot_2",
      "name": "中級",
      "buy": 3500,
      "workHours": 8,
      "kwh": 0.8,
      "chargeHours": 2
     },
     {
      "id": "trashbot_3",
      "name": "高級",
      "buy": 7800,
      "workHours": 24,
      "kwh": 2.4,
      "chargeHours": 3
     }
    ],
    "rent": [
     {
      "hours": 4,
      "cost": 80
     },
     {
      "hours": 12,
      "cost": 300,
      "unlock": "rent_trashbot_1"
     },
     {
      "hours": 24,
      "cost": 600,
      "unlock": "rent_trashbot_2"
     }
    ],
    "carries": [
     "general",
     "sewage"
    ],
    "tilesPerSecond": 1,
    "worksWhen": "trucks are here"
   },
   "recyclebot": {
    "name": "資源回收機器人",
    "base": "robot_charger",
    "unlockLevel": 4,
    "tiers": [
     {
      "id": "recyclebot",
      "name": "初級",
      "buy": 1200,
      "workHours": 2,
      "kwh": 0.2,
      "chargeHours": 1
     },
     {
      "id": "recyclebot_2",
      "name": "中級",
      "buy": 3500,
      "workHours": 8,
      "kwh": 0.8,
      "chargeHours": 2
     },
     {
      "id": "recyclebot_3",
      "name": "高級",
      "buy": 7800,
      "workHours": 24,
      "kwh": 2.4,
      "chargeHours": 3
     }
    ],
    "rent": [
     {
      "hours": 4,
      "cost": 80
     },
     {
      "hours": 12,
      "cost": 300,
      "unlock": "rent_recyclebot_1"
     },
     {
      "hours": 24,
      "cost": 600,
      "unlock": "rent_recyclebot_2"
     }
    ],
    "carries": [
     "recycle"
    ],
    "tilesPerSecond": 1,
    "worksWhen": "trucks are here"
   },
   "lumber": {
    "name": "伐木機器人",
    "base": "heavy_charger",
    "unlockLevel": 3,
    "tiers": [
     {
      "id": "lumberbot",
      "name": "初級",
      "buy": 2500,
      "workHours": 4,
      "kwh": 1.2,
      "chargeHours": 1,
      "unitsPerHour": 60,
      "bag": 20,
      "kwh245": 0.4
     },
     {
      "id": "lumberbot_2",
      "name": "中級",
      "buy": 6500,
      "workHours": 12,
      "kwh": 3.6,
      "chargeHours": 2,
      "unitsPerHour": 100,
      "bag": 35,
      "kwh245": 1.2
     },
     {
      "id": "lumberbot_3",
      "name": "高級",
      "buy": 14000,
      "workHours": 24,
      "kwh": 7.2,
      "chargeHours": 3,
      "unitsPerHour": 160,
      "bag": 60,
      "kwh245": 2.4
     }
    ],
    "rent": [
     {
      "hours": 4,
      "cost": 250
     },
     {
      "hours": 12,
      "cost": 800,
      "unlock": "rent_lumber_1"
     },
     {
      "hours": 24,
      "cost": 1600,
      "unlock": "rent_lumber_2"
     }
    ],
    "terrain": true,
    "part": "saw_chain",
    "walk": {
     "tilesPerSecond": 1,
     "note": "v2.45：沿格子走、站在目標旁邊工作；背袋滿了走到最近一格接到建材小屋的軌道，把建材倒在軌道旁（軌道車來載）；只回重型充電樁充電"
    },
    "shedFull": "idle",
    "ignores": [
     "river",
     "bridge"
    ],
    "banner": "ui_pg_rb_lumber"
   },
   "mine": {
    "name": "採礦機器人",
    "base": "heavy_charger",
    "unlockLevel": 4,
    "tiers": [
     {
      "id": "minebot",
      "name": "初級",
      "buy": 3000,
      "workHours": 4,
      "kwh": 1.2,
      "chargeHours": 1,
      "unitsPerHour": 60,
      "bag": 20,
      "kwh245": 0.4
     },
     {
      "id": "minebot_2",
      "name": "中級",
      "buy": 7500,
      "workHours": 12,
      "kwh": 3.6,
      "chargeHours": 2,
      "unitsPerHour": 100,
      "bag": 35,
      "kwh245": 1.2
     },
     {
      "id": "minebot_3",
      "name": "高級",
      "buy": 16000,
      "workHours": 24,
      "kwh": 7.2,
      "chargeHours": 3,
      "unitsPerHour": 160,
      "bag": 60,
      "kwh245": 2.4
     }
    ],
    "rent": [
     {
      "hours": 4,
      "cost": 300
     },
     {
      "hours": 12,
      "cost": 900,
      "unlock": "rent_mine_1"
     },
     {
      "hours": 24,
      "cost": 1800,
      "unlock": "rent_mine_2"
     }
    ],
    "terrain": true,
    "part": "drill",
    "walk": {
     "tilesPerSecond": 1,
     "note": "v2.45：沿格子走、站在目標旁邊工作；背袋滿了走到最近一格接到建材小屋的軌道，把建材倒在軌道旁（軌道車來載）；只回重型充電樁充電"
    },
    "shedFull": "idle",
    "ignores": [
     "river",
     "bridge"
    ],
    "banner": "ui_pg_rb_mine"
   },
   "grade": {
    "name": "整地機器人",
    "base": "heavy_charger",
    "unlockLevel": 3,
    "tiers": [
     {
      "id": "gradebot",
      "name": "初級",
      "buy": 2000,
      "workHours": 4,
      "kwh": 1.2,
      "chargeHours": 1,
      "unitsPerHour": 120,
      "bag": 20,
      "kwh245": 0.4
     },
     {
      "id": "gradebot_2",
      "name": "中級",
      "buy": 5500,
      "workHours": 12,
      "kwh": 3.6,
      "chargeHours": 2,
      "unitsPerHour": 200,
      "bag": 35,
      "kwh245": 1.2
     },
     {
      "id": "gradebot_3",
      "name": "高級",
      "buy": 12000,
      "workHours": 24,
      "kwh": 7.2,
      "chargeHours": 3,
      "unitsPerHour": 320,
      "bag": 60,
      "kwh245": 2.4
     }
    ],
    "rent": [
     {
      "hours": 4,
      "cost": 200
     },
     {
      "hours": 12,
      "cost": 700,
      "unlock": "rent_grade_1"
     },
     {
      "hours": 24,
      "cost": 1400,
      "unlock": "rent_grade_2"
     }
    ],
    "terrain": true,
    "part": "blade",
    "walk": {
     "tilesPerSecond": 1,
     "note": "v2.45：沿格子走、站在目標旁邊工作；背袋滿了走到最近一格接到建材小屋的軌道，把建材倒在軌道旁（軌道車來載）；只回重型充電樁充電"
    },
    "shedFull": "idle",
    "ignores": [
     "river",
     "bridge"
    ],
    "clearsDebris": true,
    "banner": "ui_pg_rb_grade"
   }
  },
  "solarChargeMultiplier": 2,
  "solarNight": false,
  "upgradeTradeInRate": 0.5,
  "onePerKind": true,
  "rent": {
   "noChargingNeeded": true,
   "noBaseNeeded": true,
   "leavesWhenDone": true,
   "rentalTakesOverOwned": true,
   "rentedDroneUsesTowerWater": true
  },
  "sharedChargerQueue": "firstComeFirstServed",
  "sharedPadQueue": "firstComeFirstServed",
  "tierNote": "每種機器人都有初／中／高三級，只差工作時數（耗電照初級每小時的用電比例、充電時間 1／2／3 倍）。舊存檔的「標準」機＝初級（tier id 不變）。rent[].unlock 沒寫＝和初級一起解鎖",
  "storeSellRate": 0.5,
  "storeNote": "收回倉庫的機器人不算台數；賣掉＝該級購買價 × storeSellRate",
  "sweepStart": {
   "default": 5,
   "min": 1,
   "max": 10,
   "note": "掃地機器人在家時，同一張地圖待清的雜草＋垃圾滿 n 格才出發（已出門的照常做完）"
  },
  "dispatch": {
   "perUnit": {
    "water": 6,
    "sweep": 4,
    "wellbot": 1,
    "trashbot": 1,
    "recyclebot": 1
   },
   "note": "同種輪流出勤：一次只派「工作量 ÷ perUnit（無條件進位）」台，其餘留在機座充電；工作量＝待澆的格數／待清格數／有水的井／有東西的垃圾站"
  },
  "walkers229": {
   "poopBag": 5,
   "feedBucket": 10,
   "bowlSeconds": 90,
   "note": "鏟屎官背袋可裝 poopBag 坨、餵食機器人飼料桶 feedBucket 份；小飼料盆在地上留 bowlSeconds 秒"
  },
  "report": {
   "kinds": [
    "sweep",
    "water",
    "poop"
   ],
   "hours": 24,
   "note": "v2.35：每台機器人自己的報告（S.rep71），放在掃地基座／停機坪／機器人充電站面板；熱區圖畫最近 hours 小時；今天／累計：掃地＝雜草、垃圾，無人機＝格、滴水，鏟屎官＝坨"
  },
  "status236": {
   "idleTopUpPct": 0.95,
   "besideOffsets": [
    [
     -46,
     14
    ],
    [
     44,
     14
    ],
    [
     -12,
     28
    ],
    [
     28,
     28
    ],
    [
     -62,
     2
    ],
    [
     60,
     2
    ]
   ],
   "note": "v2.36：待命的機器人電量 ≥ idleTopUpPct 就不佔充電位子（不再整晚顯示「充電」）；位子不夠時排在充電站旁 besideOffsets（像素，對格子中心）；每台那一列顯示這次充電後已工作／今天累計工作時間與待命原因"
  }
 },
 "pests": {
  "startLevel": 3,
  "appliesTo": [
   "crop",
   "tree"
  ],
  "minProgress": 0.15,
  "perHour": 0.03,
  "seasonMult": {
   "summer": 2,
   "spring": 1,
   "autumn": 1,
   "winter": 0.3
  },
  "tropicalMult": 1.5,
  "spreadPerHour": 0.2,
  "growthRate": 0.5,
  "yieldMult": 0.6,
  "greenhouseMult": 0.2,
  "snowKills": true,
  "catchTaps": 3,
  "newsReport": true
 },
 "care": {
  "tool": "care",
  "drag": true,
  "oneFertPerPlanting": true,
  "options": {
   "catch": {
    "name": "捉蟲",
    "unlock": "care",
    "price": 0
   },
   "chem": {
    "name": "化肥",
    "unlock": "fert_chem",
    "pricePctSeed": 0.4,
    "minPrice": 2,
    "growth": 0.2,
    "yield": 0.2,
    "organicOK": false
   },
   "org": {
    "name": "有機肥",
    "unlock": "organic_fert",
    "item": "organic_fert",
    "growth": 0.1,
    "yield": 0.1,
    "organicOK": true
   },
   "pesticide": {
    "name": "農藥",
    "unlock": "pesticide",
    "pricePctSeed": 0.1,
    "minPrice": 1,
    "treePctSapling": 0.02,
    "protectHours": 12,
    "safePctOfGrow": 0.5,
    "safeMaxMinutes": 10,
    "organicOK": false
   }
  },
  "askBeforeLosingOrganic": true
 },
 "organic": {
  "auto": true,
  "yieldMult": 0.8,
  "priceMult": 1.4,
  "itemPrefix": "org_",
  "legacyCropsNormal": true,
  "machinesPreferNormal": true
 },
 "fractionalYield": {
  "mode": "carry",
  "note": "fractional yield accumulates per item id; each whole unit is paid out"
 },
 "poop": {
  "everyHours": 2,
  "maxPerRegion": 8,
  "penalty": null,
  "item": "poop",
  "anyToolShovels": true
 },
 "greenhouse": {
  "name": "溫室",
  "perTileCost": 350,
  "unlockLevel": 6,
  "capByLevel": {
   "6": 9,
   "7": 18,
   "8": 27,
   "9": 36,
   "11": 39,
   "12": 42,
   "13": 45,
   "14": 48,
   "15": 51,
   "16": 54,
   "17": 57,
   "18": 60,
   "19": 63,
   "20": 66,
   "21": 69,
   "22": 72,
   "23": 75,
   "24": 78,
   "25": 81,
   "26": 84,
   "27": 87,
   "28": 90,
   "29": 93,
   "30": 96,
   "31": 99,
   "32": 102,
   "33": 105,
   "34": 108,
   "35": 111,
   "36": 114,
   "37": 117,
   "38": 120,
   "39": 123,
   "40": 126,
   "41": 129,
   "42": 132,
   "43": 135,
   "44": 138,
   "45": 141,
   "46": 144,
   "47": 147,
   "48": 150,
   "49": 153,
   "50": 156
  },
  "sellRate": 0.5,
  "placeOn": [
   "soil",
   "grass"
  ],
  "connectsLikePool": true,
  "rainBlocked": true,
  "snowFree": true,
  "tornadoFree": true,
  "pestMult": 0,
  "nightGrowthRate": 0.85,
  "animalsBlocked": true,
  "storable": false,
  "moveWholeComponent": false,
  "dragBuild": true,
  "pestSpreadIn": false,
  "look": {
   "glassAlpha": 0.22,
   "frameMinRGB": 200,
   "frameMinAlpha": 150,
   "note": "只畫骨架（亮白的框）＋很淡的玻璃，作物看得清楚"
  },
  "move": {
   "modes": [
    "one",
    "multi"
   ],
   "note": "溫室棚小選單：搬移這一格／多選搬移（點溫室格加選、再點取消，拿起後一起移動，點的格子對應第一個選的格子）"
  }
 },
 "flowers": {
  "rapeseed": {
   "name": "油菜花",
   "seedCost": 10,
   "growSeconds": 600,
   "nectar": 4,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_rapeseed",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    5
   ],
   "season": "spring"
  },
  "milk_vetch": {
   "name": "紫雲英",
   "seedCost": 12,
   "growSeconds": 900,
   "nectar": 5,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_vetch",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    4
   ],
   "season": "spring"
  },
  "wildflower": {
   "name": "野花",
   "seedCost": 20,
   "growSeconds": 1800,
   "nectar": 3,
   "blooms": 4,
   "regrowSeconds": 1800,
   "honey": "honey_hundred",
   "waterUse": 1.0,
   "hidden": true,
   "migrateTo": "flower_white",
   "note": "v2.32：野花拆成白／紅／黃／藍花；不再出現在選項列，舊存檔田裡的野花變白花（進度、剩餘次數不變）"
  },
  "buckwheat": {
   "name": "蕎麥花",
   "seedCost": 25,
   "growSeconds": 2400,
   "nectar": 6,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_buckwheat",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    9
   ],
   "season": "autumn"
  },
  "lavender": {
   "name": "薰衣草",
   "seedCost": 60,
   "growSeconds": 7200,
   "nectar": 4,
   "blooms": 6,
   "regrowSeconds": 3600,
   "honey": "honey_lavender",
   "waterUse": 0.75,
   "group": "month",
   "months": [
    4
   ],
   "season": "spring"
  },
  "rose": {
   "name": "玫瑰",
   "seedCost": 120,
   "growSeconds": 14400,
   "nectar": 4,
   "blooms": 8,
   "regrowSeconds": 7200,
   "honey": "honey_rose",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    5
   ],
   "season": "spring"
  },
  "flower_white": {
   "name": "白花",
   "seedCost": 20,
   "growSeconds": 1800,
   "nectar": 3,
   "blooms": 4,
   "regrowSeconds": 1800,
   "honey": "honey_hundred",
   "waterUse": 1.0,
   "group": "allYear",
   "order": 0,
   "color": "#ffffff"
  },
  "flower_yellow": {
   "name": "黃花",
   "seedCost": 20,
   "growSeconds": 1800,
   "nectar": 3,
   "blooms": 4,
   "regrowSeconds": 1800,
   "honey": "honey_hundred",
   "waterUse": 1.0,
   "group": "allYear",
   "order": 1,
   "color": "#ffd23a"
  },
  "flower_red": {
   "name": "紅花",
   "seedCost": 20,
   "growSeconds": 1800,
   "nectar": 3,
   "blooms": 4,
   "regrowSeconds": 1800,
   "honey": "honey_hundred",
   "waterUse": 1.0,
   "group": "allYear",
   "order": 2,
   "color": "#e2483d"
  },
  "flower_blue": {
   "name": "藍花",
   "seedCost": 20,
   "growSeconds": 1800,
   "nectar": 3,
   "blooms": 4,
   "regrowSeconds": 1800,
   "honey": "honey_hundred",
   "waterUse": 1.0,
   "group": "allYear",
   "order": 3,
   "color": "#4f7fd6"
  },
  "cherry_blossom": {
   "name": "櫻花",
   "seedCost": 150,
   "growSeconds": 14400,
   "nectar": 4,
   "blooms": 8,
   "regrowSeconds": 7200,
   "honey": "honey_spring",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    3
   ],
   "season": "spring"
  },
  "anemone": {
   "name": "銀蓮花",
   "seedCost": 15,
   "growSeconds": 900,
   "nectar": 5,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_spring",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    3
   ],
   "season": "spring"
  },
  "hyacinth": {
   "name": "風信子",
   "seedCost": 25,
   "growSeconds": 1800,
   "nectar": 6,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_spring",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    3
   ],
   "season": "spring"
  },
  "tulip": {
   "name": "鬱金香",
   "seedCost": 15,
   "growSeconds": 900,
   "nectar": 5,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_spring",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    4
   ],
   "season": "spring"
  },
  "sweet_pea": {
   "name": "香豌豆",
   "seedCost": 50,
   "growSeconds": 3600,
   "nectar": 3,
   "blooms": 5,
   "regrowSeconds": 2700,
   "honey": "honey_spring",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    4
   ],
   "season": "spring"
  },
  "parrot_tulip": {
   "name": "鸚鵡鬱金香",
   "seedCost": 35,
   "growSeconds": 2400,
   "nectar": 7,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_spring",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    4
   ],
   "season": "spring"
  },
  "carnation": {
   "name": "康乃馨",
   "seedCost": 60,
   "growSeconds": 5400,
   "nectar": 4,
   "blooms": 5,
   "regrowSeconds": 3600,
   "honey": "honey_spring",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    5
   ],
   "season": "spring"
  },
  "lily_of_valley": {
   "name": "鈴蘭",
   "seedCost": 12,
   "growSeconds": 600,
   "nectar": 4,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_spring",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    5
   ],
   "season": "spring"
  },
  "forget_me_not": {
   "name": "勿忘我",
   "seedCost": 20,
   "growSeconds": 1200,
   "nectar": 5,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_spring",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    5
   ],
   "season": "spring"
  },
  "hydrangea": {
   "name": "繡球花",
   "seedCost": 160,
   "growSeconds": 14400,
   "nectar": 4,
   "blooms": 8,
   "regrowSeconds": 7200,
   "honey": "honey_summer",
   "waterUse": 1.25,
   "group": "month",
   "months": [
    6
   ],
   "season": "summer"
  },
  "calla_lily": {
   "name": "海芋",
   "seedCost": 70,
   "growSeconds": 7200,
   "nectar": 4,
   "blooms": 5,
   "regrowSeconds": 3600,
   "honey": "honey_summer",
   "waterUse": 1.25,
   "group": "month",
   "months": [
    6
   ],
   "season": "summer"
  },
  "bellflower": {
   "name": "風鈴草",
   "seedCost": 15,
   "growSeconds": 900,
   "nectar": 5,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_summer",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    6
   ],
   "season": "summer"
  },
  "lily": {
   "name": "百合",
   "seedCost": 80,
   "growSeconds": 7200,
   "nectar": 4,
   "blooms": 6,
   "regrowSeconds": 3600,
   "honey": "honey_summer",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    7
   ],
   "season": "summer"
  },
  "plumeria": {
   "name": "雞蛋花",
   "seedCost": 180,
   "growSeconds": 18000,
   "nectar": 5,
   "blooms": 8,
   "regrowSeconds": 7200,
   "honey": "honey_summer",
   "waterUse": 0.75,
   "group": "month",
   "months": [
    7
   ],
   "season": "summer"
  },
  "night_cereus": {
   "name": "曇花",
   "seedCost": 40,
   "growSeconds": 3600,
   "nectar": 10,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_summer",
   "waterUse": 0.75,
   "group": "month",
   "months": [
    7
   ],
   "season": "summer"
  },
  "hibiscus": {
   "name": "扶桑花",
   "seedCost": 150,
   "growSeconds": 14400,
   "nectar": 4,
   "blooms": 8,
   "regrowSeconds": 7200,
   "honey": "honey_summer",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    8
   ],
   "season": "summer"
  },
  "canna": {
   "name": "美人蕉",
   "seedCost": 50,
   "growSeconds": 3600,
   "nectar": 3,
   "blooms": 5,
   "regrowSeconds": 2700,
   "honey": "honey_summer",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    8
   ],
   "season": "summer"
  },
  "cosmos": {
   "name": "大波斯菊",
   "seedCost": 15,
   "growSeconds": 900,
   "nectar": 5,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_autumn",
   "waterUse": 0.75,
   "group": "month",
   "months": [
    9
   ],
   "season": "autumn"
  },
  "dianthus": {
   "name": "石竹",
   "seedCost": 50,
   "growSeconds": 3600,
   "nectar": 3,
   "blooms": 5,
   "regrowSeconds": 2700,
   "honey": "honey_autumn",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    9
   ],
   "season": "autumn"
  },
  "dahlia": {
   "name": "大麗花",
   "seedCost": 90,
   "growSeconds": 7200,
   "nectar": 4,
   "blooms": 6,
   "regrowSeconds": 3600,
   "honey": "honey_autumn",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    9
   ],
   "season": "autumn"
  },
  "gentian": {
   "name": "龍膽",
   "seedCost": 70,
   "growSeconds": 5400,
   "nectar": 4,
   "blooms": 5,
   "regrowSeconds": 3600,
   "honey": "honey_autumn",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    10
   ],
   "season": "autumn"
  },
  "chrysanthemum": {
   "name": "菊花",
   "seedCost": 140,
   "growSeconds": 10800,
   "nectar": 4,
   "blooms": 8,
   "regrowSeconds": 5400,
   "honey": "honey_autumn",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    10
   ],
   "season": "autumn"
  },
  "thistle": {
   "name": "薊花",
   "seedCost": 12,
   "growSeconds": 900,
   "nectar": 5,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_autumn",
   "waterUse": 0.75,
   "group": "month",
   "months": [
    10
   ],
   "season": "autumn"
  },
  "clematis": {
   "name": "鐵線蓮",
   "seedCost": 180,
   "growSeconds": 18000,
   "nectar": 5,
   "blooms": 8,
   "regrowSeconds": 7200,
   "honey": "honey_autumn",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    11
   ],
   "season": "autumn"
  },
  "marigold": {
   "name": "萬壽菊",
   "seedCost": 15,
   "growSeconds": 900,
   "nectar": 5,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_autumn",
   "waterUse": 0.75,
   "group": "month",
   "months": [
    11
   ],
   "season": "autumn"
  },
  "schisandra": {
   "name": "五味子",
   "seedCost": 70,
   "growSeconds": 5400,
   "nectar": 4,
   "blooms": 5,
   "regrowSeconds": 3600,
   "honey": "honey_autumn",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    11
   ],
   "season": "autumn"
  },
  "poinsettia": {
   "name": "一品紅",
   "seedCost": 80,
   "growSeconds": 7200,
   "nectar": 4,
   "blooms": 5,
   "regrowSeconds": 3600,
   "honey": "honey_winter",
   "waterUse": 0.75,
   "group": "month",
   "months": [
    12
   ],
   "season": "winter"
  },
  "cyclamen": {
   "name": "仙客來",
   "seedCost": 25,
   "growSeconds": 1800,
   "nectar": 6,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_winter",
   "waterUse": 0.75,
   "group": "month",
   "months": [
    12
   ],
   "season": "winter"
  },
  "moth_orchid": {
   "name": "蝴蝶蘭",
   "seedCost": 220,
   "growSeconds": 21600,
   "nectar": 5,
   "blooms": 10,
   "regrowSeconds": 10800,
   "honey": "honey_winter",
   "waterUse": 0.75,
   "group": "month",
   "months": [
    12
   ],
   "season": "winter"
  },
  "camellia": {
   "name": "山茶花",
   "seedCost": 160,
   "growSeconds": 14400,
   "nectar": 4,
   "blooms": 8,
   "regrowSeconds": 7200,
   "honey": "honey_winter",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    1
   ],
   "season": "winter"
  },
  "narcissus": {
   "name": "水仙花",
   "seedCost": 15,
   "growSeconds": 900,
   "nectar": 5,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_winter",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    1
   ],
   "season": "winter"
  },
  "snowdrop": {
   "name": "雪花蓮",
   "seedCost": 20,
   "growSeconds": 1200,
   "nectar": 6,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_winter",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    1
   ],
   "season": "winter"
  },
  "hellebore": {
   "name": "聖誕玫瑰",
   "seedCost": 70,
   "growSeconds": 5400,
   "nectar": 4,
   "blooms": 5,
   "regrowSeconds": 3600,
   "honey": "honey_winter",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    1
   ],
   "season": "winter"
  },
  "plum_blossom": {
   "name": "梅花",
   "seedCost": 170,
   "growSeconds": 18000,
   "nectar": 5,
   "blooms": 8,
   "regrowSeconds": 7200,
   "honey": "honey_winter",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    2
   ],
   "season": "winter"
  },
  "blue_eyed_daisy": {
   "name": "藍眼菊",
   "seedCost": 15,
   "growSeconds": 900,
   "nectar": 5,
   "blooms": 1,
   "regrowSeconds": null,
   "honey": "honey_winter",
   "waterUse": 0.75,
   "group": "month",
   "months": [
    2
   ],
   "season": "winter"
  },
  "freesia": {
   "name": "小蒼蘭",
   "seedCost": 50,
   "growSeconds": 3600,
   "nectar": 3,
   "blooms": 5,
   "regrowSeconds": 2700,
   "honey": "honey_winter",
   "waterUse": 1.0,
   "group": "month",
   "months": [
    2
   ],
   "season": "winter"
  }
 },
 "flowerRules": {
  "plantOn": "soil",
  "needsWater": true,
  "dryNectarMult": 0.5,
  "dryAfterBloomSeconds": 3600,
  "pests": false,
  "organic": false,
  "sellable": false,
  "seedTabs": [
   "crops",
   "flowers"
  ],
  "season": {
   "monthSource": "farmLocal",
   "southShiftMonths": 6,
   "keepAfterMonth": true,
   "snow": "sameAsCrops",
   "note": "v2.32：group=month 的花只有 months 裡的月份能種（農場當地日期；南半球月份 +6）；種下後跨月照常長、開、採完才謝。下雪照一般戶外作物（長 30%）"
  },
  "tray": {
   "order": [
    "facilities",
    "allYear",
    "month",
    "nextMonth"
   ],
   "showNextMonth": true,
   "nextLabel": "{m} 月開放",
   "allYearLabel": "全年",
   "monthLabel": "{m} 月限定",
   "leftLabel": "本月還剩 {n} 天",
   "expiredToast": "{name} 是 {m} 月的花，這個月不能種了",
   "note": "v2.32：花苗分頁＝設施 → 全年 4 色 → 本月的花（依解鎖等級）→ 下個月的花（灰色、寫「4 月開放」、不能選）"
  },
  "codex": {
   "groupBy": "month",
   "note": "v2.32：圖鑑花苗分頁依月份分組（全年、1 月…12 月），本月那組標「本月」"
  }
 },
 "bees": {
  "hive": "beehive",
  "queen": {
   "id": "queen_bee",
   "name": "蜂王",
   "cost": 300,
   "category": "insect",
   "lifespan": null
  },
  "startFrames": 1,
  "maxFrames": 10,
  "hoursPerFrame": 2,
  "range": 4,
  "jarsPerFramePerHour": 0.2,
  "noFlowerMult": 0.1,
  "wildHoney": "honey_wild",
  "storeMax": 30,
  "noFlyWhen": [
   "night",
   "rain",
   "snow"
  ],
  "starveAfterHours": 72,
  "starveJarsPer10FramesPerHour": 1,
  "starveWildOnlyBeforeStarving": true,
  "pollinationGrowth": 0.15,
  "pesticideFrameLoss": 2,
  "pesticideMinFrames": 1,
  "collectTool": "hand",
  "bumble": {
   "colony": {
    "id": "bumble_colony",
    "name": "熊蜂群",
    "cost": 450,
    "category": "insect"
   },
   "honeyMult": 1.5,
   "sameRulesAsBees": true,
   "pollinates": true,
   "beesPerFrame": 100
  },
  "beesPerFrame": 100,
  "hiveLevels": [
   {
    "range": 2
   },
   {
    "range": 3,
    "cost": 1500,
    "unlockLevel": 8
   },
   {
    "range": 4,
    "cost": 4000,
    "unlockLevel": 12
   }
  ],
  "bumbleLevelCostMult": 1.5,
  "hiveLevelsNote": "蜂箱、熊蜂箱的等級：range＝以蜂箱為中心向外幾格（2＝5×5），cost＝升到這一級的金幣（熊蜂箱 ×bumbleLevelCostMult），unlockLevel＝玩家要到幾級。舊存檔的蜂箱算 1 級",
  "note_pollination": "授粉範圍＝採蜜範圍，跟著蜂箱等級（hiveLevels 的 range）；熊蜂箱相同",
  "forage": {
   "mode": "spread",
   "showFlowers": 4,
   "note": "spread＝每罐輪流採最久沒被這個蜂箱採的花（一樣久挑近的）；nearest＝舊的一直採最近那朵"
  },
  "bubbleOnlyWithHoney": true
 },
 "migrations": {
  "2.0.0": {
   "decoBeehiveToDevice": true,
   "storedDecoBeehiveToFreeHive": true
  }
 },
 "chickenPest": {
  "animals": [
   "egg_hen",
   "broiler",
   "mallard"
  ],
  "minutesPerTile": 10,
  "needsAdjacentTo": [
   "crop",
   "tree"
  ],
  "noNight": true,
  "noGreenhouse": true,
  "keepsOrganic": true,
  "newsReport": true,
  "walk236": {
   "tilesPerSecond": 1.0,
   "peckSeconds": 2,
   "maxSeconds": 40,
   "note": "v2.36：畫面上看得到的島，雞要吃蟲時沿活動範圍走到貼著那格田的格子（tilesPerSecond），啄 peckSeconds 秒才吃掉；maxSeconds 內走不到就直接吃掉；離線或別座島照舊直接算"
  },
  "info241": {
   "countPerChicken": true,
   "reasons": [
    "night",
    "noField",
    "noPest",
    "resting",
    "walking"
   ],
   "text": {
    "night": "晚上休息",
    "noField": "碰不到田：活動範圍沒有貼著任何田或果樹",
    "noPest": "附近的田沒有蟲",
    "resting": "休息中，下次可以吃：{mmss}",
    "walking": "正在走過去吃蟲"
   },
   "note": "點雞（查看動物）多兩行：「吃蟲：今天 N 格・累計 N 格」＋現在沒在吃的原因（依序取第一個符合的）；規則本身不變"
  },
  "connected242": {
   "maxWalk": 8,
   "fieldsOnly": true,
   "walkOnFields": true,
   "text": {
    "tooFar": "有蟲的田太遠（超過 {n} 格）"
   },
   "note": "雞碰得到的那塊田，以及跟它上下左右相連的田，都吃得到（只算田，果樹不串連）；雞沿著田走過去啄，啄完走回雞圈；只吃走路距離 8 格內的田"
  },
  "bugFeed2462": {
   "creditPerTile": 1,
   "speedup": 0.25,
   "feederSkip": true,
   "text": "蟲食 {n} 份：先吃蟲再吃飼料，吃蟲那一輪快 {p}%",
   "note": "雞每吃掉 1 格田的蟲存 creditPerTile 份蟲食；要吃東西時先用 1 份蟲食（不扣飼料），那一輪倒數縮短 speedup；feederSkip：還有蟲食或正走過去啄蟲的雞，餵食機器人先跳過"
  }
 },
 "ui": {
  "trayWheelScroll": true,
  "trayHideScrollbar": true,
  "trayEdgeArrows": true,
  "trayTextFit": {
   "minFontPx": 11,
   "ellipsis": true
  },
  "idleZzz": true,
  "layoutV25": {
   "theme": "glass; dark when daylight < 0.5",
   "topRow": [
    "player",
    "coins",
    "utilitiesBar"
   ],
   "secondRow": [
    "timeWeather",
    "storage",
    "automation"
   ],
   "moreMenu": [
    "book",
    "expand",
    "news",
    "forecast",
    "automation",
    "bills",
    "save",
    "settings",
    "slots",
    "help",
    "hideAll"
   ],
   "toolbar": [
    "hand",
    "plow",
    "water",
    "seed",
    "animal",
    "fish",
    "build",
    "deco",
    "move",
    "store",
    "remove",
    "care"
   ],
   "collapse": "handle hides top panels and robot chips; toolbar shows only the current tool",
   "hideAll": "everything hidden except a small show button; taps only pan/zoom",
   "redDot": [
    "unreadNews",
    "robotsNeedHelp",
    "unpaidBills"
   ],
   "phonePortrait": "current-tool button + slide-up 4x3 tool sheet; panels as bottom sheets",
   "pagesAndTraysFollowTheme": true
  },
  "pagesV26": {
   "hero": true,
   "storageSections": true,
   "basePanelCards": true,
   "utilitiesCards": true,
   "settingsWorldMap": true,
   "saveCards": true,
   "pickerIslandThumbs": true,
   "bookSearchFilterSortDetail": true
  },
  "toolGroups": {
   "tidy": {
    "label": "整理",
    "icon": "ui_tool_tidy",
    "tools": [
     "move",
     "store",
     "remove"
    ]
   }
  },
  "toolToggle": {
   "tapAgainCloses": true,
   "defaultTool": "hand",
   "note": "tap an open tool again: submenu closes and the tool goes back to 收成"
  },
  "trayTabs": {
   "seed": [
    {
     "id": "facility",
     "label": "設施",
     "icon": "ui_lamp",
     "ids": [
      "grow_lamp",
      "grow_lamp_large",
      "greenhouse",
      "gh_lamp"
     ],
     "via": "build"
    },
    {
     "id": "crops",
     "label": "作物",
     "icon": "ui_tab_crops"
    },
    {
     "id": "trees",
     "label": "果樹",
     "icon": "ui_tab_trees"
    },
    {
     "id": "flowers",
     "label": "花苗",
     "icon": "ui_tab_flowers"
    },
    {
     "id": "bfgarden",
     "label": "蝴蝶園",
     "icon": "ui_tab_bf_garden",
     "ids": [
      "oxalis",
      "rumex",
      "senna",
      "asclepias",
      "alpinia",
      "cinnamomum",
      "acacia",
      "aristolochia",
      "heterostemma",
      "crateva",
      "parsonsia",
      "mallotus",
      "strobilanthes"
     ],
     "via": "deco"
    }
   ],
   "deco": [
    {
     "id": "trees",
     "label": "樹木",
     "icon": "ui_tab_deco_trees",
     "ids": [
      "maple",
      "pine",
      "bamboo",
      "birch",
      "sakura",
      "palm",
      "willow",
      "ginkgo",
      "oak",
      "banyan"
     ]
    },
    {
     "id": "fences",
     "label": "柵欄",
     "icon": "ui_tab_fences",
     "ids": [
      "fence",
      "fence_picket",
      "fence_bamboo",
      "fence_stone",
      "fence_hedge",
      "fence_iron"
     ]
    },
    {
     "id": "scenery",
     "label": "造景",
     "icon": "ui_tab_scenery",
     "ids": [
      "flowers",
      "hay",
      "pond",
      "fountain",
      "weather_rooster",
      "hot_air_balloon",
      "lighthouse",
      "observatory"
     ]
    },
    {
     "id": "boost",
     "label": "加成",
     "icon": "ui_tab_boost",
     "ids": [
      "scarecrow",
      "windmill",
      "water_tower",
      "windbreak",
      "rain_barrel",
      "gold_scarecrow",
      "stone_well",
      "rainbow_windmill"
     ]
    },
    {
     "id": "paths",
     "label": "道路",
     "icon": "ui_tab_paths",
     "ids": [
      "road_gravel",
      "road_dirt",
      "road_stone",
      "road_asphalt",
      "road_boardwalk"
     ]
    },
    {
     "id": "buildings",
     "label": "建築",
     "icon": "ui_tab_buildings",
     "from": "buildStore",
     "ids": [
      "street_lamp_classic",
      "street_lamp_garden",
      "street_lamp_double",
      "street_lamp_modern",
      "bench_wood",
      "bench_park",
      "bench_log",
      "bench_stone"
     ],
     "note": "路燈走「建設」的放置（是會耗電的燈），長椅是一般裝飾；後面接倉庫裡收起來的建築"
    },
    {
     "id": "dolls",
     "label": "娃娃",
     "icon": "ui_tab_dolls",
     "from": "dolls"
    }
   ],
   "animal": [
    {
     "id": "facility",
     "label": "設施",
     "icon": "ui_tab_fac_animal",
     "ids": [
      "fence",
      "fence_picket",
      "fence_bamboo",
      "fence_stone",
      "fence_hedge",
      "fence_iron",
      "compost_bin",
      "dog_house",
      "cat_tree",
      "bird_house"
     ],
     "via": {
      "compost_bin": "build"
     }
    },
    {
     "id": "poultry",
     "label": "家禽",
     "icon": "ui_tab_poultry",
     "ids": [
      "egg_hen",
      "broiler",
      "meat_duck",
      "down_duck",
      "egg_duck",
      "meat_goose",
      "down_goose",
      "mallard",
      "ostrich"
     ]
    },
    {
     "id": "livestock",
     "label": "家畜",
     "icon": "ui_tab_livestock",
     "ids": [
      "wool_sheep",
      "meat_sheep",
      "dairy_goat",
      "dairy_cow",
      "beef_cattle",
      "pig",
      "meat_rabbit",
      "angora_rabbit",
      "alpaca"
     ]
    },
    {
     "id": "pet_dog",
     "label": "寵物犬",
     "icon": "ui_tab_pet_dog",
     "ids": [
      "dog_shiba",
      "dog_chihuahua",
      "dog_beagle",
      "dog_maltese",
      "dog_shihtzu",
      "dog_pomeranian",
      "dog_yorkie",
      "dog_corgi",
      "dog_pug",
      "dog_papillon",
      "dog_border",
      "dog_schnauzer",
      "dog_akita",
      "dog_dachshund",
      "dog_dalmatian",
      "dog_bullterrier",
      "dog_poodle",
      "dog_chowchow",
      "dog_samoyed",
      "dog_labrador",
      "dog_shepherd",
      "dog_bulldog",
      "dog_doberman",
      "dog_husky",
      "dog_rottweiler",
      "dog_golden",
      "dog_malamute",
      "dog_stbernard",
      "dog_mastiff"
     ]
    },
    {
     "id": "pet_cat",
     "label": "寵物貓",
     "icon": "ui_tab_pet_cat",
     "ids": [
      "cat_orange",
      "cat_tabby",
      "cat_calico",
      "cat_tuxedo",
      "cat_black",
      "cat_british",
      "cat_siamese",
      "cat_ragdoll",
      "cat_russianblue",
      "cat_persian",
      "cat_scottishfold",
      "cat_silvershade",
      "cat_mainecoon"
     ]
    },
    {
     "id": "pet_bird",
     "label": "寵物鳥",
     "icon": "ui_tab_pet_bird",
     "ids": [
      "bird_budgie",
      "bird_java_white",
      "bird_java_black",
      "bird_canary",
      "bird_gouldian",
      "bird_lovebird",
      "bird_cockatiel",
      "bird_cockatiel_white",
      "bird_sun_conure",
      "bird_quaker",
      "bird_african_grey",
      "bird_white_cockatoo"
     ]
    }
   ],
   "fish": [
    {
     "id": "facility",
     "label": "設施",
     "icon": "ui_tab_fac_fish",
     "ids": [
      "pool",
      "fish_feed_machine",
      "pool_lamp"
     ],
     "via": {
      "fish_feed_machine": "build",
      "pool_lamp": "build"
     }
    },
    {
     "id": "fish",
     "label": "魚",
     "icon": "ui_tab_fish",
     "ids": [
      "tilapia",
      "milkfish",
      "seabass",
      "goldfish",
      "shrimp",
      "carp",
      "crab",
      "piranha",
      "cat_shark",
      "bamboo_shark",
      "blacktip_shark",
      "hammerhead"
     ]
    }
   ],
   "insect": [
    {
     "id": "facility",
     "label": "設施",
     "icon": "ui_tab_fac_insect",
     "ids": [
      "beehive",
      "bumble_hive"
     ]
    },
    {
     "id": "bees",
     "label": "蜜蜂",
     "icon": "ui_tab_bees",
     "ids": [
      "queen_bee",
      "bumble_colony"
     ]
    },
    {
     "id": "butterflies",
     "label": "蝴蝶",
     "icon": "ui_tab_bf",
     "ids": [
      "bf:graphium_sarpedon",
      "bf:papilio_demoleus",
      "bf:papilio_memnon",
      "bf:pachliopta_aristolochiae",
      "bf:papilio_protenor",
      "bf:papilio_polytes",
      "bf:pieris_rapae",
      "bf:pieris_canidia",
      "bf:eurema_blanda",
      "bf:appias_lyncida",
      "bf:catopsilia_pomona",
      "bf:kallima_inachus",
      "bf:cyrestis_thyodamas",
      "bf:danaus_chrysippus",
      "bf:ideopsis_similis",
      "bf:ypthima_multistriata",
      "bf:danaus_genutia",
      "bf:zizeeria_maha",
      "bf:heliophorus_ila",
      "bf:spindasis_lohita",
      "bf:prosotas_nora",
      "bf:jamides_alecto",
      "bf:suastus_gremius",
      "bf:tagiades_dagai",
      "bf:erionota_torus",
      "bf:bamboo_skipper",
      "bf:seseria_formosana"
     ]
    }
   ],
   "build": [
    {
     "id": "robots",
     "label": "機器人",
     "icon": "ui_robot_charger",
     "ids": [
      "drone_pad",
      "robot_charger",
      "sweeper_dock",
      "heavy_charger"
     ],
     "note241": "伐木／採礦／整地機器人用機器人充電站"
    },
    {
     "id": "process",
     "label": "加工",
     "icon": "ui_compost_bin",
     "ids": [
      "corn_cake_machine",
      "fish_feed_machine",
      "compost_bin",
      "snow_melter"
     ]
    },
    {
     "id": "grow",
     "label": "種植",
     "icon": "ui_lamp",
     "ids": [
      "grow_lamp",
      "grow_lamp_large",
      "greenhouse",
      "gh_lamp",
      "sprinkler_s",
      "sprinkler_l",
      "street_lamp_classic",
      "street_lamp_garden",
      "street_lamp_double",
      "street_lamp_modern",
      "pool_lamp"
     ]
    },
    {
     "id": "water",
     "label": "水",
     "icon": "ui_water_drop",
     "ids": [
      "well",
      "water_tower_extra"
     ]
    },
    {
     "id": "power",
     "label": "電力",
     "icon": "ui_electric",
     "ids": [
      "solar_panel",
      "battery_s",
      "battery_m",
      "battery_l",
      "hand_crank",
      "biomass_gen"
     ]
    },
    {
     "id": "env",
     "label": "環境",
     "icon": "ui_trash_station",
     "ids": [
      "trash_station",
      "truck_pad"
     ]
    },
    {
     "id": "rail",
     "label": "鐵道",
     "icon": "ui_rail",
     "ids": [
      "material_shed",
      "rail",
      "rail_cross",
      "rail_station",
      "rail_fence",
      "rail_lamp",
      "collect_point",
      "garage"
     ]
    },
    {
     "id": "bridge",
     "label": "橋",
     "icon": "ui_bridge_wood",
     "ids": [
      "bridge_wood",
      "bridge_stone"
     ]
    },
    {
     "id": "terrain",
     "label": "地形",
     "icon": "ui_river_dig",
     "ids": [
      "river_dig",
      "river_fill",
      "dynamite"
     ]
    }
   ],
   "seedDefault": "crops",
   "animalDefault": "poultry"
  },
  "book": {
   "sidebarIsTabs": true,
   "desktop": "fixed left list",
   "mobile": "floating drawer from the left; button shows the current category",
   "icon": "ui_pg_book_icon",
   "headers": {
    "crops": "bookbg_crops",
    "trees": "bookbg_trees",
    "animals": "bookbg_animals",
    "fish": "bookbg_fish",
    "machines": "bookbg_devices",
    "devices": "bookbg_devices",
    "bills": "bookbg_devices",
    "auto": "bookbg_devices",
    "default": "bookbg_crops",
    "flowers": "bookbg_crops",
    "pets": "bookbg_animals",
    "birds": "bookbg_animals",
    "insects": "bookbg_animals",
    "preds": "bookbg_animals",
    "buildings": "bookbg_devices",
    "terrain": "bookbg_crops"
   }
  },
  "tools": {
   "fish": {
    "label": "魚"
   },
   "insect": {
    "label": "昆蟲",
    "icon": "ui_tool_insect",
    "new": true
   },
   "fenceMovedTo": "animal/facility"
  },
  "hud": {
   "desktop": "name card spans 2 rows; coins + water/power bar on row 1 top-aligned; weather/storage/auto on row 2; rent tag under the name card"
  },
  "noZoom": {
   "touchAction": "manipulation",
   "viewport": "maximum-scale=1, user-scalable=no",
   "iosGestureBlock": true,
   "inputMinFontPx": 16
  },
  "truckPadBack": {
   "outTiles": 0,
   "upPx": 0,
   "note": "v2.31：停車場改成和島齊平的玩家圖，後側不再往外推、往上抬"
  },
  "auto": {
   "note": "自動化面板：每種機器人的主色、淺色與一句說明（v2.18）",
   "water": {
    "c": "#1f6fb2",
    "cl": "#e4f0fb",
    "sub": "會自動到田區上方灑水"
   },
   "feed": {
    "c": "#a8601f",
    "cl": "#fbefe3",
    "sub": "會自動到畜舍投放飼料"
   },
   "poop": {
    "c": "#2f8a5c",
    "cl": "#e3f4ea",
    "sub": "自動清理便便，保持農場衛生"
   },
   "snow": {
    "c": "#4a74a8",
    "cl": "#e6eef8",
    "sub": "自動清除積雪，保持場地暢通"
   },
   "sweep": {
    "c": "#2f8a5c",
    "cl": "#e3f4ea",
    "sub": "自動打掃地面，維持環境整潔"
   },
   "honey": {
    "c": "#a8601f",
    "cl": "#fbefe3",
    "sub": "自動採集蜂蜜，增加蜂箱產量"
   },
   "wellbot": {
    "c": "#1f6fb2",
    "cl": "#e4f0fb",
    "sub": "提水灌溉，維持農作生長"
   },
   "trashbot": {
    "c": "#2f8a5c",
    "cl": "#e3f4ea",
    "sub": "收集垃圾，維持環境整潔"
   },
   "recyclebot": {
    "c": "#1f6fb2",
    "cl": "#e4f0fb",
    "sub": "自動回收資源，保持環境整潔"
   },
   "lumber": {
    "c": "#3f7d32",
    "cl": "#e6f2df",
    "sub": "伐木：把野樹變成木材"
   },
   "mine": {
    "c": "#6b6f78",
    "cl": "#eceef2",
    "sub": "採礦：石材、礦石和水晶"
   },
   "grade": {
    "c": "#9a6a33",
    "cl": "#f5ece0",
    "sub": "整地：把土丘剷平成土"
   }
  },
  "buyConfirm": {
   "note": "購買前確認視窗（v2.18）：除了播種作物以外，花金幣都先問。地圖放置類在選品項時問一次，之後連續放同一種不再問。玩家可以勾「這類以後不再詢問」，記在 S.settings.noAsk",
   "cats": {
    "robot": "買機器人",
    "upgrade": "升級機器人",
    "rent": "租機器人",
    "base": "擴充機座",
    "boost": "金幣擴充",
    "shop": "商店買東西",
    "doll": "買天氣娃娃",
    "pet": "買寵物",
    "animal": "買動物",
    "build": "蓋建設",
    "deco": "買裝飾",
    "plant": "種樹苗、花苗",
    "plow": "開墾",
    "care": "施化肥、噴農藥",
    "fish": "蓋魚池",
    "insect": "昆蟲",
    "expand": "擴地",
    "other": "其他購買",
    "move": "搬移田或果樹"
   }
  },
  "ach": {
   "note": "成就面板（v2.19）：徽章圖 ui_badge_<id>（彩色）與 ui_badge_<id>_off（灰色），分組圖示用該組第一個徽章，groupIcon 可以另外指定",
   "groupIcon": {
    "作物專家": "ui_badge_cropgroup"
   }
  },
  "worldMap": {
   "w": 1589,
   "h": 990,
   "note": "設定 · 地點的世界地圖（玩家提供，art/src_ui/world_map.png → batch32）。ctrl = [經度, 緯度, 圖上 x, 圖上 y] 對位點，其他地點用最近對位點內插；labels = 城市名稱標籤放的位置（圖上座標），用延伸線連到城市的點",
   "ctrl": [
    [
     121.0,
     23.7,
     1333,
     443
    ],
    [
     127.0,
     37.5,
     1347,
     373
    ],
    [
     131.0,
     32.5,
     1372,
     402
    ],
    [
     139.7,
     35.7,
     1407,
     383
    ],
    [
     121.5,
     31.2,
     1332,
     405
    ],
    [
     109.7,
     19.2,
     1275,
     467
    ],
    [
     114.2,
     22.3,
     1300,
     452
    ],
    [
     103.8,
     1.35,
     1247,
     578
    ],
    [
     142.5,
     -10.7,
     1455,
     625
    ],
    [
     151.2,
     -33.9,
     1500,
     755
    ],
    [
     146.5,
     -42,
     1450,
     810
    ],
    [
     175,
     -39,
     1557,
     785
    ],
    [
     -118.2,
     34.05,
     192,
     380
    ],
    [
     -122.4,
     37.8,
     180,
     352
    ],
    [
     -110,
     23,
     227,
     430
    ],
    [
     -74,
     40.7,
     420,
     335
    ],
    [
     -63,
     45,
     485,
     300
    ],
    [
     -0.13,
     51.5,
     732,
     290
    ],
    [
     -8,
     53.4,
     690,
     273
    ],
    [
     121.56,
     25.03,
     1336,
     437
    ],
    [
     120.3,
     22.6,
     1330,
     450
    ],
    [
     121.6,
     24.0,
     1338,
     443
    ]
   ],
   "labels": {
    "taipei": [
     1400,
     408
    ],
    "taichung": [
     1400,
     456
    ],
    "hualien": [
     1400,
     504
    ],
    "tainan": [
     1400,
     552
    ],
    "kaohsiung": [
     1400,
     600
    ],
    "tokyo": [
     1432,
     352
    ],
    "seoul": [
     1262,
     336
    ],
    "shanghai": [
     1262,
     398
    ],
    "hongkong": [
     1250,
     478
    ],
    "singapore": [
     1200,
     612
    ],
    "sydney": [
     1470,
     842
    ],
    "losangeles": [
     160,
     446
    ],
    "newyork": [
     470,
     384
    ],
    "london": [
     655,
     250
    ]
   }
  },
  "levelCumulative": false,
  "animalSellOnTap": true,
  "nightRangeMaps": {
   "pickBanner": "filter",
   "lamp": true,
   "hive": true
  },
  "fenceTurnSingle": true,
  "entryOrder": {
   "order": [
    "levelUp",
    "checkin",
    "news",
    "forecast",
    "rooster"
   ],
   "note": "進入農場或從背景回來時一次一個，前一個關掉才出下一個；公雞只在畫面上沒有視窗時才飛，過了 09:00 就不飛"
  },
  "input": {
   "dragPans": true,
   "paintDrag": false,
   "note": "一按就拖＝移動地圖；長按（longPressMs）＝拖物品；點一下放開＝原本的動作。照顧、開墾、道路、溫室不再拖曳連續塗刷，要一格一格點"
  },
  "iosStandalone": {
   "enabled": true,
   "hudTopPad": "env(safe-area-inset-top)",
   "fixViewport": true,
   "note": "iPhone 加到主畫面時（navigator.standalone）：頁面高度跟著實際視窗、旋轉／回到前景後捲回頂端，HUD 往下讓出動態島與狀態列"
  },
  "menuTitle": "我的浮島農場",
  "cropGroups": {
   "groups": [
    {
     "id": "forage",
     "label": "牧草",
     "icon": "ui_cg_forage",
     "ids": [
      "pasture",
      "alfalfa",
      "timothy"
     ]
    },
    {
     "id": "grain",
     "label": "穀物",
     "icon": "ui_cg_grain",
     "ids": [
      "wheat",
      "corn",
      "rice",
      "oats",
      "barley",
      "rye",
      "millet",
      "sorghum"
     ]
    },
    {
     "id": "bean",
     "label": "豆類",
     "icon": "ui_cg_bean",
     "ids": [
      "peanut",
      "soybean",
      "red_bean",
      "mung_bean",
      "pea",
      "green_bean"
     ]
    },
    {
     "id": "root",
     "label": "根莖",
     "icon": "ui_cg_root",
     "ids": [
      "potato",
      "carrot",
      "sweet_potato",
      "daikon",
      "beet",
      "taro"
     ]
    },
    {
     "id": "leafy",
     "label": "葉菜",
     "icon": "ui_cg_leafy",
     "ids": [
      "cabbage",
      "lettuce",
      "spinach",
      "bok_choy",
      "napa_cabbage"
     ]
    },
    {
     "id": "fruitveg",
     "label": "果菜",
     "icon": "ui_cg_fruitveg",
     "ids": [
      "tomato",
      "pumpkin",
      "eggplant",
      "cucumber",
      "bell_pepper",
      "chili",
      "okra"
     ]
    },
    {
     "id": "melon",
     "label": "瓜果",
     "icon": "ui_cg_melon",
     "ids": [
      "strawberry",
      "watermelon",
      "honeydew",
      "muskmelon"
     ]
    },
    {
     "id": "cash",
     "label": "經濟作物",
     "icon": "ui_cg_cash",
     "ids": [
      "sugarcane",
      "cotton",
      "tea",
      "coffee",
      "sunflower"
     ]
    },
    {
     "id": "herb",
     "label": "香草",
     "icon": "ui_cg_herb",
     "ids": [
      "mint",
      "basil",
      "rosemary",
      "thyme",
      "sage"
     ]
    }
   ],
   "ungrouped": [],
   "note": "播種 → 作物分頁裡再分 9 類（照 ids 順序排）；v2.32 向日葵併入經濟作物，沒有「其他」分類"
  },
  "worldClocks": {
   "cities": [
    "taipei",
    "tokyo",
    "singapore",
    "sydney",
    "london",
    "newyork",
    "losangeles"
   ],
   "size": 62,
   "note": "v2.31：天氣預報最下面一排世界時鐘（指針＋下方文字時間），第一個是農場所在地；cities 用 cities 的 id"
  },
  "loading": {
   "minMs": 400,
   "maxMs": 20000,
   "note": "v2.31：打開遊戲時的進度條，圖都載好、第一個畫面畫完才收起（最多 maxMs）"
  },
  "levelRing": {
   "fill": "#7ee36a",
   "track": "#2f6e33",
   "note": "v2.31：抬頭等級圓圈外的經驗環，從正上方順時針，亮綠＝這一級已得的經驗比例"
  },
  "snapshot": {
   "buttonPos": "aboveZoomIn",
   "lib": "lib/html-to-image.min.js",
   "libVersion": "1.11.13",
   "fileSnapDir": "snap/",
   "pixelRatioMax": 2,
   "islandPad": 24,
   "alphaCut": 64,
   "flashMs": 200,
   "fileName": "浮島農場_{island}_{date}-{time}",
   "fullSuffix": "_全畫面",
   "defaultMode": "island",
   "defaultBg": "transparent",
   "note": "v2.33：拍照。全畫面＝html-to-image 把整頁轉 PNG（倍率最多 pixelRatioMax）；只拍浮島＝遊戲另外畫一張目前畫面（不畫天空、提示泡泡、游標框、拿著的東西、流星），只留浮島的像素（alpha < alphaCut 的當背景），四周留 islandPad；背景選「天空」時同一範圍保留天空。雙擊版（file://）的圖從 fileSnapDir 的 data: 網址載入，畫面才能輸出"
  },
  "fieldInfo236": {
   "stages": [
    [
     0.25,
     "幼苗",
     "g"
    ],
    [
     0.6,
     "成長中",
     "b"
    ],
    [
     1,
     "成熟中",
     "y"
    ]
   ],
   "ready": [
    "可收成",
    "r"
   ],
   "wither": [
    "枯萎",
    "x"
   ],
   "fishStages": [
    "魚苗",
    "小魚",
    "中魚",
    "大魚",
    "成魚"
   ],
   "mobileWidth": 720,
   "note": "v2.36：查看田地（收成工具點還沒熟的田、長按田的小選單）與查看魚池的新版面：左邊作物／魚種，右邊每格一列；stages＝生長比例 < 門檻時的階段名稱與顏色；畫面寬度 < mobileWidth 時左邊改成上方橫排"
  },
  "storageArt236": {
   "fish": "st_fish",
   "note": "v2.36：倉庫「魚」分類的大圖（batch41 ui_pg_st_fish）；水果、蜂蜜換成新圖（同名覆蓋）"
  },
  "fieldInfo238": {
   "flowerStages": {
    "seed": [
     "幼苗",
     "g"
    ],
    "bud": [
     "含苞",
     "b"
    ],
    "bloom": [
     "盛開",
     "y"
    ],
    "rest": [
     "休息中",
     "b"
    ],
    "spent": [
     "謝了",
     "x"
    ]
   },
   "pill": "花",
   "note": "v2.38：查看田地也列出花（收成工具點花＝開面板，長按田的小選單照舊）。左側作物後面接花種；右側每格：階段、開花倒數／再開倒數、花蜜剩餘／滿額、這次開花被採幾份、累計被採幾份、上次被誰採（蜜蜂／熊蜂、多久前）、還能開幾次、濕度。開花中但沒有蜂箱的範圍蓋到時標「附近沒蜂箱」"
  },
  "fieldInfo239": {
   "mobileMapWidth": 72,
   "note": "v2.39：rules.animalStackMax = 0 表示不設上限（生產型動物沒收產物也照吃飼料、照生產，直到壽命輪數用完；黃鼠狼一次偷光那隻雞堆著的蛋）。手機版（寬度 ≤ ui.fieldInfo236.mobileWidth）查看田地、花、查看魚池：每列拿掉作物／花／魚的小圖，改放位置小圖（寬 mobileMapWidth px）"
  },
  "levelUp240": {
   "desktopMinWidth": 900,
   "desktopCardWidth": 680,
   "note": "升級視窗只有按「太好了」才收起；新解鎖全部列出（卡片內捲動）；電腦版寬、手機直拿一列 4 個、橫拿左右兩欄。流星許願視窗相同"
  },
  "trayPick2522": {
   "enabled": true,
   "tools": [
    "seed",
    "animal",
    "fish",
    "insect",
    "build",
    "deco",
    "care"
   ],
   "more": "換一個",
   "note": "玩家點了選項列的品項（選起來）後，分類列、分頁、選項列收起來，改成一條「目前：品項 · 價錢 ▲ 換一個」小膠囊；點膠囊、換工具、換分頁時展開"
  },
  "fade2523": {
   "alpha": 0.45,
   "rows": {
    "1": 3,
    "2": 4
   },
   "skip": [
    "truck_pad",
    "drone_pad"
   ],
   "note": "農舍、倉庫、儲藏屋、建材小屋、水塔、垃圾站、基座、車庫：滑鼠／手指指到它後面 rows 排以內的格子時，整座畫成 alpha 透明度；rows 依佔地 1×1 或 2×2；skip 是平的不用透明"
  },
  "v253": {
   "note": "狗屋／貓跳台與產出效能面板的說明文字；denTip 留空就用預設（會帶入一格最多幾隻）；machineTips 依機器 id，結尾不用加句號",
   "denTip": "",
   "pickPet": "",
   "machineTips": {
    "corn_cake_machine": "把玉米做成玉米餅，拿來餵動物",
    "fish_feed_machine": "把小麥磨成魚飼料，拿來餵魚池的魚",
    "compost_bin": "把動物便便和雜草堆成有機肥料，施在田裡",
    "biomass_gen": "燒雜草、牧草發電，用不完的電存進電池或賣給電網",
    "snow_melter": "用電把周圍的積雪融成水，裝瓶後倒進水塔"
   }
  },
  "v254": {
   "note": "建材小屋轉向（面板最下面）與沿邊柵欄（選了柵欄後的「整格｜沿邊」切換、選邊小選單、搬移／剷除／收回先選要動哪一個）的文字",
   "texts": {
    "doorHead": "門的方向",
    "doorNote": "軌道從門口那兩格接進去",
    "rotBtn": "轉向",
    "rotated": "轉好了",
    "rotCut": "；原本接進門口的軌道已經斷開，到新的門口鋪軌道接進去",
    "efMode": "柵欄放法",
    "efTile": "整格",
    "efEdge": "沿邊",
    "efOn": "沿邊放：點格子選要放在哪一邊",
    "efOff": "整格放：一格一段柵欄",
    "efHead": "放在哪一邊？",
    "efAll": "四邊都圍",
    "efBack": "島的後面邊緣不能放",
    "efInside": "同一個建物裡面",
    "mvHint": "點另一格，柵欄放在同一邊"
   }
  },
  "v2541": {
   "note": "圖鑑分頁清單「清單／圖示」切換（記在這台裝置）；iconSideWidth＝電腦版圖示模式左側欄寬；離開多久列幾名 planTop",
   "listLabel": "清單",
   "iconLabel": "圖示",
   "iconSideWidth": 260,
   "planTop": 3,
   "bestLabel": "建議種",
   "planIntro": "離開這段時間，現在種什麼最賺？輸入幾小時後回來，從已解鎖、來得及成熟的作物裡，照每格淨利排出前 3 名。",
   "noDrone": "沒有無人機：照不澆水計算（乾了長得慢，太久會枯萎）"
  },
  "v2542": {
   "note": "點建材小屋先跳的小選單文字；接軌小選單第一行「現在：」",
   "open": "查看內容（建材、擴充、軌道）",
   "rot": "轉向",
   "store": "收回倉庫",
   "now": "現在"
  },
  "v2543": {
   "note": "v2.54.3 修正。markSeconds：「在地圖上標出要過的軌道」閃幾秒；herb.radius：香草驅蟲半徑（1 = 3×3，0 = 只有自己那格，-1 = 關掉附近）；poultry：算「家禽」的動物，其他算家畜",
   "markSeconds": 12,
   "herb": {
    "enabled": true,
    "radius": 1,
    "trayLine": true
   },
   "poultry": [
    "egg_hen",
    "broiler",
    "meat_duck",
    "down_duck",
    "meat_goose",
    "down_goose",
    "egg_duck",
    "mallard",
    "ostrich"
   ],
   "bridgeFlipY": true,
   "insects": {
    "note": "昆蟲資訊面板（選項列的 i）。feats＝[圖示精靈, 文字]；hive＝「採蜜相關設定」打開哪一種蜂箱",
    "queen_bee": {
     "name": "蜜蜂",
     "img": "ui_queen_bee",
     "hive": "beehive",
     "cat": "昆蟲・採蜜蜂",
     "trait": "群居、勤勞採蜜",
     "adv": "採蜂箱範圍內的花釀蜂蜜，不同的花釀出不同口味；同時幫範圍內的作物、花、果樹授粉。",
     "know": "一個蜂群只有一隻蜂王，負責產卵；採蜜、築巢、照顧幼蜂都是工蜂的工作。蜜蜂會跳「搖擺舞」告訴同伴花在哪個方向、有多遠。",
     "feats": [
      [
       "ui_honey_wild",
       "放進蜂箱後巢框慢慢變多，巢框越多釀蜜越快"
      ],
      [
       "ui_hv_bees",
       "範圍內作物、花、果樹生長 +15%"
      ],
      [
       "ui_honey_lavender",
       "不同的花釀出 11 種口味的蜂蜜"
      ]
     ],
     "button": "採蜜相關設定"
    },
    "bumble_colony": {
     "name": "熊蜂",
     "img": "ui_bumble_colony",
     "hive": "bumble_hive",
     "cat": "昆蟲・採蜜蜂",
     "trait": "授粉能手、振動授粉",
     "adv": "住熊蜂箱，規則跟蜜蜂一樣；蜂蜜產量是蜜蜂的 1.5 倍，也一樣幫範圍內的作物授粉。",
     "know": "熊蜂（Bumblebee）身體大、毛多，冷一點的天氣也能出門。牠們會用翅膀肌肉「振動授粉」，把番茄、茄子這類花裡的花粉抖出來，是很多蔬果和溫室作物的重要授粉昆蟲。",
     "feats": [
      [
       "ui_honey_wild",
       "蜂蜜產量是蜜蜂的 1.5 倍"
      ],
      [
       "ui_hv_bees",
       "範圍內作物、花、果樹生長 +15%"
      ]
     ],
     "button": "採蜜相關設定"
    }
   },
   "texts": {
    "markRail": "在地圖上標出要過的軌道",
    "notBlocked": "現在沒有被軌道擋住了",
    "markToast": "閃黃框的 {n} 格軌道擋住了路{where}：在上面鋪通行板（建設 · 鐵道）就過得去",
    "markCurve": "。其中有彎道或分叉，通行板只能鋪在直線，那段要繞過去或改軌道",
    "wildTitle": "野生植物",
    "wildText": "這株{name}是自己長出來的，不用花錢；蝴蝶會來產卵。不想要可以拔掉（不退錢）。",
    "wildBusy": "上面還有蝴蝶，等牠們離開才能拔",
    "wildPull": "拔掉",
    "denCard": "住的窩",
    "residents": "住客詳細",
    "moveBtn": "換一個窩…",
    "pickIntro": "選一個要搬去的{word}：小圖橘色那格就是它的位置。搬過去後守護範圍以新窩為中心。",
    "animalInfo": "查看資訊",
    "batTitle": "收回的電池電量",
    "herbLine": "驅蟲：附近 {n}×{n} 不長蟲",
    "trashBoost": "擴充這座垃圾站",
    "trashWhere": "垃圾站容量改成每座各自擴充：點那座垃圾站，在面板裡擴充",
    "efHint": "藍框是這一格，粗線就是柵欄會放的那一邊",
    "whole": "整格",
    "turn": "轉向",
    "toEdge": "改成沿邊（不用再付錢）：選要放哪一邊",
    "storeFence": "收回倉庫",
    "editEdges": "改這格已經有的沿邊柵欄…",
    "edgeHead": "這格的沿邊柵欄",
    "swapEdge": "換到這格的另一邊：",
    "pickTitle": "更換{word}的窩",
    "noHive": "還沒有{hive}：到「昆蟲 · 設施」蓋一個",
    "batUseBat": "燈先用電池，電池沒電才用市電；陰天白天開燈、晚上電價貴時，用電池比較省。",
    "batUseGrid": "燈先用市電，市電停掉或沒接時才用電池。"
   }
  },
  "v255": {
   "note": "v2.55。maxLocalSlots／maxCloudSlots：這台裝置／雲端最多幾組存檔；stuckRetrySeconds：沒路可走時隔幾秒再找一次路；paintTools：手機「連續」模式可以用的工具",
   "maxLocalSlots": 10,
   "maxCloudSlots": 10,
   "stuckRetrySeconds": 3,
   "paintTools": [
    "seed",
    "hand",
    "water",
    "care"
   ],
   "zap": {
    "color": "#ffd400",
    "edge": "#7a4a00",
    "lift": 30
   },
   "texts": {
    "stuck": "沒路可走，幫幫我",
    "stuckWhy": "沒路可走，幫幫我：回充電樁的路被擋住了（軌道上鋪通行板，或清出一條路）",
    "stuckFetch": "沒路可走，幫幫我：走不到建材小屋去開礦車（軌道上鋪通行板，或清出一條路）",
    "noCar": "沒有礦車：到建材小屋「軌道與列車」加掛車廂",
    "storeCar": "收回最後一節（第 {n} 節）",
    "storeCarNote": "森林、礦山採完了，列車可以一節一節收回車庫；整列收完就離開軌道，要用時再加掛（車庫有車廂時先用車庫的）。",
    "carMoving": "列車在路上，等它停好再收",
    "carDriving": "機器人正在開這列車，等它停好再收",
    "carUnload": "車上的 {n} 份建材直接送進建材小屋",
    "shedFull": "建材小屋放不下車上的建材，先賣掉一些再收",
    "carStored": "收回一節車廂（車庫剩餘 {n} 節）",
    "trainGone": "整列車廂都收回車庫了，列車離開軌道",
    "addFirst": "加掛第 1 節",
    "noCarTitle": "這列車沒有車廂",
    "noCarText": "車廂都收回車庫了。加掛一節，機器人就會再去採（車庫有車廂先用車庫的；沒有的話第 1 節免費）。",
    "tsPile": "垃圾站裡的垃圾留在原地，倒垃圾機器人會搬到其他垃圾站，垃圾車來也會收",
    "tsBlocked": "這格還有一堆垃圾：放垃圾站會裝回去，或等垃圾清走",
    "daysNoDump": "已 {n} 天未倒垃圾",
    "paintMove": "✋",
    "paintOn": "🖌",
    "paintTipOn": "連續模式：一指滑過的格子都做，兩指移動、縮放地圖",
    "paintTipOff": "移動模式：拖曳移動地圖",
    "reload": "重新載入",
    "reloadSub": "強迫刷新，拿最新版",
    "reloadAsk": "會先存檔，再重新下載遊戲檔案（拿最新版）。要重新載入嗎？",
    "cloudTitle": "雲端存檔總表",
    "cloudIntro": "這台裝置和 Google Drive 上的全部農場存檔。兩邊都有的已標出哪份「較新」，每一列選好要怎麼處理，再按「照這樣處理」。",
    "slotFull": "這台裝置最多 {n} 座農場：先刪一座才能再建立或下載",
    "cloudFull": "雲端最多 {n} 座農場：先到雲端存檔總表刪一座"
   }
  },
  "v257": {
   "note": "atlas 有 trim（圖案範圍）的小圖示：iconCanvas 把圖案縮進框裡，寬最多 w、高最多 h（框的比例），底部對齊 bottom，上方留給「i」和 Lv 標籤",
   "iconFit": {
    "w": 0.84,
    "h": 0.66,
    "bottom": 0.97
   },
   "baseTray": {
    "store": "倉庫還有 {st} 座（免費擺）",
    "storeLine": "島上 {on}・倉庫 {st}（{n}/{max}）",
    "free": "{n}/{max} 座 · 可加到 2 位",
    "fullSome": "{n}/{max} 座 · {k} 座可加位",
    "fullAll": "{n}/{max} 座 · 都是 2 位",
    "toastFull": "{name}最多 {max} 座。要多一個位子：點地圖上的{name}，在面板按「擴充」（每座最多 2 位）",
    "note": "v2.57：選單只寫短的一行，完整說明在點了之後的提示；倉庫有就能免費擺回島上"
   },
   "fenceWhole": {
    "btn": "整格（原本的放法）",
    "busy": "這格有東西",
    "done": "改成整格",
    "head": "或是：",
    "note": "v2.57：沿邊柵欄「改方向／改樣子」和放沿邊柵欄的小選單多一個整格；這一段直接拿來用，這格其他沿邊的段收回倉庫"
   }
  },
  "v258": {
   "note": "v2.58 動物資訊面板（照寵物面板 ipHead2543）：左邊頭像 ui_pt_an_<id>[_young|_mid]，名字＝種類＋編號（照放上去的順序，存在 T.no258，賣掉不重編、不能改名），下面同一座島同種名單",
   "rosterScope": "island",
   "numberPad": 2,
   "text": {
    "roster": "這座島的{name}",
    "rosterSub": "{n} 隻・點一下切換",
    "trait": "特性",
    "young": "幼年",
    "mid": "中年",
    "adult": "成年",
    "buyFeed": "買{feed}",
    "gone": "這隻動物已經不在了。",
    "litter": "原地多了一隻幼兔！",
    "bonus": "另得 {qty} 根{item}"
   },
   "bubbleBase": 21
  },
  "v259": {
   "note": "v2.59 農產倉庫批次賣出：每列勾選、分類「全選」（noSelectAll 的分類沒有）、底部結帳列、確認視窗可改數量／保留 N 個",
   "noSelectAll": [
    "feed",
    "material",
    "part"
   ],
   "keepDefault": 1,
   "text": {
    "selAll": "全選",
    "selNone": "取消全選",
    "bar": "已選 {n} 種",
    "barSum": "預估 +{coin}",
    "barHint": "下一步可調整數量，確認後才會賣出",
    "clear": "清除",
    "sellAll": "確認數量 ›",
    "title": "批次賣出",
    "sub": "勾選商品，或直接修改數量。",
    "stock": "庫存 {n}",
    "max": "全部",
    "fillMax": "全部最大",
    "keep": "每種保留",
    "keepUnit": "個",
    "apply": "套用",
    "total": "共 {n} 個",
    "cancel": "取消",
    "ok": "確定賣出",
    "done": "賣掉 {k} 種共 {n} 個，+{coin} 金幣"
   }
  }
 },
 "droneWatering": {
  "dryThreshold": 2,
  "targets": [
   "planted soil",
   "tree"
  ],
  "tilesPerSecond": 3,
  "spraySeconds": 2,
  "oneTileAtATime": true,
  "noFlyInRain": true,
  "ownedSource": "tank",
  "rentedSource": "tower",
  "ownedReturnToRefillWhenTankShort": true,
  "keepLeftoverTank": true,
  "currentMapFirst": true,
  "idleAt": {
   "owned": "drone_pad",
   "rented": "house"
  },
  "note": "濕度掉到 dryThreshold（0～4 級）以下就去澆，一次補到全濕"
 },
 "houseLight": {
  "needsPower": true,
  "kwhPerHour": 0.05,
  "sources": [
   "grid",
   "battery",
   "crankBuffer"
  ],
  "whenLightBelow": 0.5
 },
 "islandUnderside": {
  "depthRatio": 0.5,
  "minRatio": 0.08,
  "bumps": 9,
  "taper": 0.8,
  "roundness": 0.55,
  "decorOnly": true,
  "strata": [
   "topsoil",
   "clay",
   "sandstone",
   "bedrock"
  ],
  "fossils": [
   "ammonite",
   "skull",
   "spine",
   "leg"
  ],
  "fossilsPerIsland": "3-9 by width",
  "grassLip": false,
  "rock": {
   "depthRatio": 0.2,
   "taper": 0.86,
   "roundness": 0.5,
   "spikeEvery": 70,
   "colors": {
    "rockLight": [
     "#97806a",
     "#76604d",
     "#4f3f33"
    ],
    "rockDark": [
     "#76604f",
     "#5a4839",
     "#3a2e25"
    ]
   },
   "soil": [
    [
     0,
     0.1,
     [
      "#6b4528",
      "#573720"
     ]
    ],
    [
     0.1,
     0.2,
     [
      "#8f5a35",
      "#74462a"
     ]
    ]
   ],
   "vines": {
    "threshold": 0.9,
    "minLen": 16,
    "maxLen": 70,
    "color": "#4f8a3a",
    "leaf": "#6fae45"
   },
   "note": "v2.30：島底改成岩石：上面兩層土、下面岩石往下收、有幾個垂下的尖角（spikeEvery 像素一個，依島的位置固定）、草邊垂下藤蔓（threshold 越小藤蔓越多）"
  },
  "parking": {
   "colors": {
    "slab": "#bdb5a8",
    "edge": "#8d8579",
    "paint": "rgba(255,255,255,.85)"
   },
   "inset": 0.12,
   "note": "v2.30：停車的地＝島凸出去的 2×4 草地，兩個 2×2 石板車位"
  },
  "image": {
   "sprite": "bg_island_body",
   "corner": 842,
   "topStep": 4,
   "top": [
    0,
    11,
    5,
    4,
    4,
    4,
    2,
    3,
    3,
    3,
    5,
    11,
    10,
    12,
    15,
    15,
    13,
    14,
    16,
    16,
    16,
    19,
    19,
    18,
    19,
    20,
    25,
    28,
    29,
    31,
    33,
    35,
    36,
    37,
    38,
    39,
    40,
    44,
    50,
    51,
    50,
    53,
    55,
    56,
    57,
    58,
    60,
    61,
    62,
    63,
    64,
    65,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    78,
    78,
    76,
    76,
    77,
    78,
    77,
    77,
    78,
    81,
    81,
    81,
    81,
    81,
    81,
    83,
    84,
    84,
    84,
    84,
    84,
    83,
    84,
    92,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    109,
    110,
    111,
    111,
    111,
    110,
    110,
    110,
    111,
    110,
    108,
    108,
    108,
    111,
    113,
    113,
    114,
    115,
    115,
    116,
    116,
    116,
    117,
    117,
    122,
    126,
    128,
    129,
    134,
    136,
    137,
    138,
    139,
    140,
    141,
    142,
    143,
    144,
    145,
    146,
    147,
    148,
    149,
    150,
    150,
    149,
    149,
    148,
    148,
    145,
    146,
    146,
    146,
    149,
    149,
    148,
    148,
    149,
    151,
    157,
    158,
    160,
    161,
    163,
    164,
    163,
    165,
    164,
    165,
    165,
    165,
    164,
    164,
    166,
    169,
    171,
    171,
    171,
    177,
    177,
    177,
    181,
    182,
    184,
    188,
    189,
    190,
    191,
    192,
    193,
    195,
    195,
    196,
    197,
    198,
    199,
    200,
    200,
    199,
    199,
    199,
    199,
    197,
    199,
    198,
    196,
    196,
    196,
    195,
    195,
    197,
    198,
    199,
    201,
    201,
    200,
    199,
    198,
    197,
    196,
    195,
    194,
    193,
    192,
    191,
    190,
    188,
    187,
    187,
    185,
    183,
    180,
    178,
    176,
    173,
    174,
    176,
    177,
    175,
    177,
    177,
    176,
    175,
    175,
    174,
    173,
    172,
    171,
    169,
    168,
    168,
    167,
    166,
    165,
    164,
    164,
    163,
    162,
    161,
    161,
    160,
    159,
    158,
    158,
    157,
    156,
    155,
    155,
    154,
    154,
    153,
    152,
    151,
    150,
    150,
    150,
    149,
    148,
    148,
    148,
    148,
    147,
    145,
    145,
    144,
    143,
    142,
    141,
    140,
    139,
    138,
    137,
    136,
    135,
    134,
    133,
    132,
    131,
    130,
    130,
    129,
    128,
    127,
    126,
    125,
    124,
    122,
    121,
    118,
    115,
    115,
    114,
    112,
    110,
    107,
    106,
    106,
    103,
    99,
    99,
    99,
    98,
    96,
    97,
    96,
    94,
    90,
    90,
    87,
    87,
    86,
    85,
    84,
    85,
    85,
    85,
    85,
    86,
    85,
    85,
    86,
    85,
    84,
    83,
    82,
    81,
    80,
    78,
    77,
    76,
    74,
    73,
    72,
    71,
    69,
    68,
    67,
    65,
    64,
    62,
    61,
    60,
    58,
    57,
    56,
    54,
    53,
    52,
    51,
    49,
    48,
    46,
    45,
    43,
    42,
    40,
    38,
    34,
    32,
    28,
    23,
    22,
    20,
    18,
    16,
    16,
    14,
    14,
    9,
    7,
    6,
    5,
    3,
    4,
    5,
    6,
    5,
    9,
    10,
    13
   ],
   "depthScale": 0.82,
   "topOffset": 0,
   "columnPx": 2,
   "cacheScale": 2,
   "note": "v2.31：島身用玩家圖（art/src_island/island_body.png → batch39 bg_island_body）。圖的上緣一欄一欄貼在島的外形（草地邊）上，corner＝圖上最低的轉角欄位，左半貼島的左下邊、右半貼右下邊；depthScale＝高度相對寬度的比例（1＝照原圖比例），topOffset＝往下移幾像素；top＝每 topStep 欄圖上緣的 y（art/v231_39.py 產生）"
  },
  "parkingImage": {
   "sides": {
    "nw": {
     "sprite": "bg_parking_pad_nw",
     "right": [
      1014.2,
      130.8
     ],
     "front": [
      331.0,
      449.3
     ],
     "back": [
      687.7,
      4.4
     ]
    },
    "ne": {
     "sprite": "bg_parking_pad_ne",
     "left": [
      1.8,
      122.9
     ],
     "front": [
      666.1,
      449.7
     ],
     "back": [
      311.7,
      4.5
     ]
    },
    "sw": {
     "sprite": "bg_parking_pad_sw",
     "left": [
      10.4,
      128.2
     ],
     "front": [
      671.6,
      441.9
     ],
     "back": [
      329.3,
      4.3
     ]
    },
    "se": {
     "sprite": "bg_parking_pad_se",
     "right": [
      990.5,
      128.2
     ],
     "front": [
      327.6,
      441.9
     ],
     "back": [
      669.8,
      4.3
     ]
    }
   },
   "note": "v2.31：停車場用玩家的四方向圖（art/src_island/parking_pad_4dir.png → batch39 bg_parking_pad_<方向>，方向＝停車場貼在島的哪一邊：sw 左下、se 右下、ne 右上、nw 左上；ne／nw 在島後面，貼著島的那面是切開的）。每個方向給圖上草地外圍的三個角（像素）：沿 x 的（sw／ne）left、front、back，沿 y 的（se／nw）right、front、back，遊戲用仿射變換把它們對到 4×2 停車格的外角"
  }
 },
 "sweeperWalk": {
  "tilesPerSecond": 1,
  "cleanSeconds": 2,
  "fourWay": true,
  "rentedHome": "house door",
  "ownedHome": "sweeper_dock",
  "cannotCross": [
   "soil",
   "building",
   "deco",
   "tree",
   "fence",
   "pool",
   "pond",
   "greenhouse"
  ],
  "nearestByWalk": true,
  "ownedReturnBeforeBatteryOut": true,
  "lowBatteryChargeFirst": 0.25,
  "ownedNeedsDockPlaced": true,
  "dockCleanSeconds": 30,
  "dockCleanNoCharge": true,
  "afterCleanIdleZzzWhenFull": true,
  "dockWater": {
   "tankDrops": 100,
   "dropsPerClean": 10,
   "refillWhenEmpty": true,
   "pumpKwhPerTank": 0.01,
   "battery": {
    "kwh": 0.05,
    "solarKwhPerHourSunny": 0.01,
    "cloudyMult": 0.5,
    "night": 0
   },
   "manualRefill": "hand tool tap when empty, or panel button; free",
   "emptySkipsCleaning": true,
   "lowWarn": 0.2,
   "dirtyTank": {
    "cleanShare": 0.6666666666666666,
    "dirtyShare": 0.3333333333333333,
    "dirtyFromClean": true,
    "refillDrainsDirty": true,
    "perSlotTank": true
   },
   "gaugeBar": false
  },
  "drawDepthSorted": true,
  "noTeleport": true,
  "sweepsPoop": false,
  "avoidPoopTiles": true,
  "avoidMovingAnimals": true,
  "blockedWaitSeconds": 2
 },
 "cloudSave": {
  "provider": "googleDrive",
  "clientId": "838768484038-kkc878gqrmiv3hspt5eccqkhq2p4e3tc.apps.googleusercontent.com",
  "scope": "https://www.googleapis.com/auth/drive.appdata",
  "allowedOrigins": [
   "https://phoenixruby.github.io",
   "http://localhost:8765",
   "http://localhost:8766"
  ],
  "siteUrl": "https://phoenixruby.github.io/skyfarm/",
  "intervalMinutes": 5,
  "perSlotToggle": true,
  "localCopyAlways": true,
  "askWhenCloudNewer": true,
  "uploadWhenLocalNewer": true,
  "backupLoser": true,
  "noClientSecret": true,
  "accounts": {
   "loginOnStartScreen": true,
   "farmOwnerByEmail": true,
   "pickerShows": [
    "currentAccount",
    "unbound"
   ],
   "otherAccountsFarms": "hiddenNotUploaded",
   "afterLoginAskAdoptUnbound": true,
   "cloudFarmsListToPick": true,
   "newFarmWhileLoggedIn": "ownedBySyncOn",
   "logoutHidesAccountFarms": true,
   "tokenExpiryKeepsLoggedIn": true
  }
 },
 "fleet": {
  "maxPerKind": 5,
  "perLevelAfterUnlock": 1,
  "firstUnitAtUnlockLevel": true,
  "samePricePerUnit": true,
  "baseMax": 3,
  "slotsMax": 2,
  "expandRate": 0.5,
  "dockBuildCost": 300,
  "lowBatteryStay": 0.25,
  "rentIsExtraUnit": true,
  "firstSweeperFreeDock": true,
  "eachUnitOwnTier": true,
  "baseTypes": [
   "drone_pad",
   "robot_charger",
   "sweeper_dock"
  ],
  "twoSlotLayout": {
   "drone_pad": "stacked: ground pad + upper deck on one post (F shape); slot 1 lower, slot 2 upper",
   "robot_charger": "taller post, plug on left and right",
   "sweeper_dock": "taller post, bay on left and right"
  },
  "shrinkRefundRate": 0.5,
  "pump": {
   "kwhPerDrop": 0.00016666666666666666,
   "droneOwnBatteryWhenNoFarmPower": true,
   "farmPowerFirst": true
  }
 },
 "decoSeasons": {
  "note": "decoration trees follow the farm's local season (spring/summer/autumn/winter); missing seasons use the summer look",
  "sakura": [
   "spring",
   "summer",
   "autumn",
   "winter"
  ],
  "ginkgo": [
   "summer",
   "autumn",
   "winter"
  ],
  "oak": [
   "summer",
   "autumn"
  ],
  "birch": [
   "summer",
   "autumn"
  ],
  "maple": [
   "summer",
   "autumn",
   "winter"
  ]
 },
 "storageLight": {
  "buildings": [
   "shed",
   "barn"
  ],
  "kwhPerHourEach": 0.02,
  "onlyWhenDark": true,
  "needsFarmPower": true,
  "flicker": false
 },
 "eggNest": {
  "animals": [
   "egg_hen"
  ],
  "onGroundWhereLaid": true,
  "tapEggOrHen": true
 },
 "soilLook": {
  "raisedPx": 5,
  "ridges": 3,
  "ridgeDir": "+x",
  "joinNeighbours": true
 },
 "trash": {
  "sources": {
   "houseDailyGeneralBags": 1,
   "houseDailyRecycleBags": 0.5,
   "feedItemsPerRecycleBag": 20,
   "machineBatchRecycleBags": 0.2,
   "sweptTilesPerGeneralBag": 10,
   "dockSewage": "sweeper dock dirty water drained on refill",
   "solarWashSewageDrops": 10,
   "wornParts": "see consumables.parts[].wasteKind/wasteBags"
  },
  "trucks": {
   "arrive": "16:00",
   "stayMinutes": 30,
   "localTime": true,
   "garbageTruck": "飛天垃圾車 (general + sewage)",
   "recycleTruck": "飛天資源回收車 (recycle)",
   "art": {
    "garbage": "player art: yellow hover truck (45°)",
    "recycle": "player art: white hover truck with 4-colour sorting labels (45°)",
    "panel": "player side views"
   }
  },
  "fees": {
   "generalPerBag": 5,
   "sewagePer100Drops": 1,
   "recycleRewardPerBag": 5
  },
  "overdue": {
   "daysWithoutDumping": 3,
   "orFullForDays": 1,
   "multiplier": 3,
   "recycleFeePerBag": 10,
   "collectors": "the trucks send their own robots"
  },
  "overflow": "bags pile on the ground beside the station until dumped",
  "dumpByHand": "tap a trash station with 收成 while the trucks are here",
  "perIsland": {
   "on": true,
   "note": "每座島的垃圾自己管：垃圾放進同一座島的垃圾站，裝不下或沒有垃圾站就堆在那座島的地上；倒垃圾、逾期代收都各島分開算；飼料袋算在吃飼料的動物或魚所在的島；垃圾站上限、價格不變（整座農場 3 座，第 1 座免費）"
  },
  "route": {
   "singleIslandMinutes": 30,
   "stayMinutes": 15,
   "maxExtraWaitMinutes": 15,
   "flyMinutes": 1,
   "overdueAfterMinutes": 10,
   "arriveSeconds": 15,
   "besideOffsets": [
    [
     96,
     -4
    ],
    [
     76,
     46
    ]
   ],
   "note": "每天 trucks.arrive（16:00）從第 1 座島開始輪流：每座島停 stayMinutes（只有 1 座島時 singleIslandMinutes），沒有垃圾站也沒堆垃圾的島跳過；停滿時間後，這座島的倒垃圾／資源回收機器人還在搬就多等，最多 maxExtraWaitMinutes；島和島之間飛 flyMinutes；停下 overdueAfterMinutes 分鐘後檢查逾期代收",
   "look236": {
    "openAfterLandSeconds": 2,
    "closeBeforeLeaveSeconds": 3,
    "note": "v2.36：降落時後車斗關著，停好 openAfterLandSeconds 秒後打開（truck_*_open_*，batch41）；要走時先關上停 closeBeforeLeaveSeconds 秒，再車頭朝外飛走（進場圖左右翻）"
   },
   "stayByIslands": {
    "1": 30,
    "2": 15,
    "3": 10
   },
   "note257": "v2.57：每座島停留分鐘依島的數量 stayByIslands（沒列到的用最大那一項，3 座以上都是 10 分）；singleIslandMinutes／stayMinutes 只是舊的備用值"
  }
 },
 "consumables": {
  "bulkDiscount": [
   {
    "qty": 5,
    "rate": 0.9
   },
   {
    "qty": 10,
    "rate": 0.8
   }
  ],
  "whenOut": "robot goes home and stops, bubble 換耗材; auto-fits a spare from storage",
  "parts": {
   "roller": {
    "name": "滾筒",
    "for": [
     "sweep"
    ],
    "lifeWorkHours": 120,
    "price": 40,
    "waste": "general",
    "wasteBags": 0.2
   },
   "brush": {
    "name": "清潔刷",
    "for": [
     "sweep"
    ],
    "lifeWorkHours": 60,
    "price": 15,
    "waste": "general",
    "wasteBags": 0.1
   },
   "dustbag": {
    "name": "集塵袋",
    "for": [
     "sweeper_dock"
    ],
    "lifeCleans": 40,
    "price": 8,
    "waste": "general",
    "wasteBags": 0.5
   },
   "wheel": {
    "name": "輪子",
    "for": [
     "feed",
     "snow",
     "poop",
     "wellbot",
     "trashbot",
     "recyclebot"
    ],
    "lifeWorkHours": 240,
    "price": 50,
    "waste": "recycle",
    "wasteBags": 0.3
   },
   "propeller": {
    "name": "螺旋槳",
    "for": [
     "water",
     "honey"
    ],
    "lifeWorkHours": 200,
    "price": 60,
    "waste": "recycle",
    "wasteBags": 0.3
   },
   "saw_chain": {
    "name": "鋸鏈",
    "for": [
     "lumber"
    ],
    "lifeWorkHours": 20,
    "price": 150,
    "waste": "recycle",
    "wasteBags": 0.3,
    "manualSwap": true
   },
   "drill": {
    "name": "鑽頭",
    "for": [
     "mine"
    ],
    "lifeWorkHours": 20,
    "price": 250,
    "waste": "recycle",
    "wasteBags": 0.3,
    "manualSwap": true
   },
   "blade": {
    "name": "鏟刃",
    "for": [
     "grade"
    ],
    "lifeWorkHours": 30,
    "price": 100,
    "waste": "recycle",
    "wasteBags": 0.3,
    "manualSwap": true
   }
  },
  "later": "mop (抹布) for a wiping function",
  "manualSwap241": "鋸鏈／鑽頭／鏟刃磨完就停工回充電站、頭上「換耗材」，玩家點機器人按「換耗材」才換（倉庫有備品也不自動換、不自動買）；租用的附耗材"
 },
 "solarDust": {
  "perSunnyDay": 0.05,
  "max": 0.5,
  "outputMult": "1 - dust",
  "rainWashesHalf": true,
  "washByHand": "tap with 收成",
  "washDrops": 10,
  "washSewageDrops": 10,
  "droneWash": {
   "by": "water drone (shared)",
   "when": "idle, tank has water, dust >= 0.2"
  }
 },
 "butterflies": {
  "egg": {
   "id": "butterfly_egg",
   "name": "蝴蝶卵",
   "cost": 80,
   "category": "insect"
  },
  "unlockLevel": 6,
  "hostTrees": [
   "avocado",
   "banana",
   "coconut",
   "lemon",
   "orange"
  ],
  "maxPerTree": 2,
  "stagesDays": {
   "egg": 1,
   "larva": 3,
   "pupa": 3,
   "adult": 7
  },
  "larvaTreeSlow": 0.1,
  "adultRange": 2,
  "adultGrowthBoost": 0.1,
  "noNectar": true,
  "selfBreed": "before dying an adult lays 1 egg on a citrus tree with room (any map); none if no citrus left",
  "pesticideKills": [
   "egg",
   "larva"
  ],
  "families": {
   "papilio": "鳳蝶科",
   "pieris": "粉蝶科",
   "nymph": "蛺蝶科",
   "lycaena": "灰蝶科",
   "hesper": "弄蝶科"
  },
  "rarity": {
   "common": {
    "name": "常見",
    "eggCost": 80,
    "specimenPrice": 120,
    "wildWeight": 6
   },
   "uncommon": {
    "name": "少見",
    "eggCost": 150,
    "specimenPrice": 300,
    "wildWeight": 3
   },
   "rare": {
    "name": "稀有",
    "eggCost": 300,
    "specimenPrice": 800,
    "wildWeight": 1
   }
  },
  "species": {
   "graphium_sarpedon": {
    "name": "青帶鳳蝶",
    "family": "papilio",
    "rarity": "common",
    "hosts": [
     "avocado",
     "cinnamomum"
    ],
    "level": 18
   },
   "papilio_demoleus": {
    "name": "無尾鳳蝶",
    "family": "papilio",
    "rarity": "common",
    "hosts": [
     "lemon",
     "orange"
    ],
    "level": 6
   },
   "papilio_memnon": {
    "name": "大鳳蝶",
    "family": "papilio",
    "rarity": "uncommon",
    "hosts": [
     "lemon",
     "orange"
    ],
    "level": 20
   },
   "pachliopta_aristolochiae": {
    "name": "紅紋鳳蝶",
    "family": "papilio",
    "rarity": "rare",
    "hosts": [
     "aristolochia"
    ],
    "level": 32
   },
   "papilio_protenor": {
    "name": "黑鳳蝶",
    "family": "papilio",
    "rarity": "common",
    "hosts": [
     "lemon",
     "orange"
    ],
    "level": 14
   },
   "papilio_polytes": {
    "name": "玉帶鳳蝶",
    "family": "papilio",
    "rarity": "common",
    "hosts": [
     "lemon",
     "orange"
    ],
    "level": 9
   },
   "pieris_rapae": {
    "name": "紋白蝶",
    "family": "pieris",
    "rarity": "common",
    "hosts": [
     "cabbage",
     "napa_cabbage",
     "bok_choy",
     "daikon"
    ],
    "level": 7
   },
   "pieris_canidia": {
    "name": "臺灣紋白蝶",
    "family": "pieris",
    "rarity": "common",
    "hosts": [
     "cabbage",
     "napa_cabbage",
     "bok_choy",
     "daikon"
    ],
    "level": 16
   },
   "eurema_blanda": {
    "name": "臺灣黃蝶",
    "family": "pieris",
    "rarity": "common",
    "hosts": [
     "senna"
    ],
    "level": 12
   },
   "appias_lyncida": {
    "name": "異色尖粉蝶",
    "family": "pieris",
    "rarity": "uncommon",
    "hosts": [
     "crateva"
    ],
    "level": 27
   },
   "catopsilia_pomona": {
    "name": "遷粉蝶（淡黃蝶）",
    "family": "pieris",
    "rarity": "common",
    "hosts": [
     "senna"
    ],
    "level": 15
   },
   "kallima_inachus": {
    "name": "枯葉蝶",
    "family": "nymph",
    "rarity": "rare",
    "hosts": [
     "strobilanthes"
    ],
    "level": 35
   },
   "cyrestis_thyodamas": {
    "name": "石牆蝶",
    "family": "nymph",
    "rarity": "uncommon",
    "hosts": [
     "banyan"
    ],
    "level": 21
   },
   "danaus_chrysippus": {
    "name": "樺斑蝶",
    "family": "nymph",
    "rarity": "common",
    "hosts": [
     "asclepias"
    ],
    "level": 11
   },
   "ideopsis_similis": {
    "name": "琉球青斑蝶",
    "family": "nymph",
    "rarity": "uncommon",
    "hosts": [
     "heterostemma"
    ],
    "level": 26
   },
   "ypthima_multistriata": {
    "name": "臺灣波紋蛇目蝶",
    "family": "nymph",
    "rarity": "common",
    "hosts": [
     "pasture",
     "rice",
     "wheat",
     "oats",
     "barley",
     "timothy"
    ],
    "level": 10
   },
   "danaus_genutia": {
    "name": "黑脈樺斑蝶",
    "family": "nymph",
    "rarity": "uncommon",
    "hosts": [
     "parsonsia"
    ],
    "level": 29
   },
   "zizeeria_maha": {
    "name": "藍灰蝶（沖繩小灰蝶）",
    "family": "lycaena",
    "rarity": "common",
    "hosts": [
     "oxalis"
    ],
    "level": 8
   },
   "heliophorus_ila": {
    "name": "紅邊黃小灰蝶",
    "family": "lycaena",
    "rarity": "uncommon",
    "hosts": [
     "rumex"
    ],
    "level": 22
   },
   "spindasis_lohita": {
    "name": "雙尾燕蝶",
    "family": "lycaena",
    "rarity": "rare",
    "hosts": [
     "mallotus"
    ],
    "level": 38
   },
   "prosotas_nora": {
    "name": "波灰蝶",
    "family": "lycaena",
    "rarity": "uncommon",
    "hosts": [
     "acacia"
    ],
    "level": 24
   },
   "jamides_alecto": {
    "name": "淡青雅波灰蝶",
    "family": "lycaena",
    "rarity": "uncommon",
    "hosts": [
     "alpinia"
    ],
    "level": 23
   },
   "suastus_gremius": {
    "name": "黑星弄蝶",
    "family": "hesper",
    "rarity": "common",
    "hosts": [
     "palm",
     "coconut"
    ],
    "level": 13
   },
   "tagiades_dagai": {
    "name": "大蓋弄蝶",
    "family": "hesper",
    "rarity": "uncommon",
    "hosts": [
     "avocado",
     "cinnamomum"
    ],
    "level": 28
   },
   "erionota_torus": {
    "name": "香蕉弄蝶",
    "family": "hesper",
    "rarity": "common",
    "hosts": [
     "banana"
    ],
    "level": 17
   },
   "bamboo_skipper": {
    "name": "竹弄蝶",
    "family": "hesper",
    "rarity": "uncommon",
    "hosts": [
     "bamboo"
    ],
    "level": 25
   },
   "seseria_formosana": {
    "name": "臺灣瑟弄蝶",
    "family": "hesper",
    "rarity": "rare",
    "hosts": [
     "avocado",
     "cinnamomum"
    ],
    "level": 40
   }
  },
  "v240": {
   "wildDailyChancePerHost": 0.15,
   "wildCatchUpDays": 7,
   "deadHours": 24,
   "specimenChance": 0.4,
   "oldEggsBecome": [
    "papilio_demoleus",
    "papilio_memnon",
    "papilio_protenor",
    "papilio_polytes"
   ],
   "note": "v2.40：蝴蝶依寄主植物；自己放的卵知道品種，野生的羽化才揭曉；成蝶死前產 1 顆同種卵在同種寄主上，死後掉在寄主下面 24 小時，用「收成」撿起來記進圖鑑，40% 做成標本（倉庫「標本」可賣）",
   "levelNote": "v2.40.1：常見 Lv 6～18、少見 Lv 20～29、稀有 Lv 32～40，大約一級一種；選項列已解鎖的排左邊、依等級排序"
  },
  "harvestAsk242": {
   "title": "這格有蝴蝶",
   "harvest": "採收",
   "cancel": "先不要",
   "warn": "按「採收」會同時移除這格還沒羽化成蝴蝶的 {list}，共 {n} 隻。",
   "note": "用收成點到有卵／幼蟲／蛹的成熟作物，先跳蝴蝶面板（生長狀況）＋採收按鈕＋警告，不直接收成"
  }
 },
 "coinLog": {
  "keepDays": 7,
  "maxEntries": 3000,
  "pageSize": 100,
  "group": [
   "day",
   "reason",
   "entry"
  ],
  "note": "一次顯示一天（左右箭頭切換，最舊／最新那天箭頭變灰）；上方日曆、收入、支出、淨變動；表格依原因合併，展開看每一筆（時間、內容、金幣變動、結餘）",
  "reasonNames": {
   "fish:pool": "蓋魚池",
   "fish:stock": "放魚苗",
   "note": "金幣歷程依原因合併時，「第 n 天」「+n」這類數字會拿掉；魚工具蓋池顯示「蓋魚池」、放魚苗顯示「放魚苗：魚名」"
  },
  "layout": "dayPage",
  "dayNav": {
   "arrows": true,
   "disableAtEnds": true
  },
  "columns": [
   "time",
   "what",
   "count",
   "delta",
   "balance",
   "expand"
  ],
  "summary": [
   "calendar",
   "income",
   "expense",
   "net"
  ],
  "icons": {
   "store": "ui_cl_store",
   "ranch": "ui_cl_ranch",
   "crop": "ui_cl_crop",
   "feed": "ui_cl_feed",
   "build": "ui_cl_build",
   "bill": "ui_cl_bill",
   "fish": "ui_cl_fish",
   "robot": "ui_cl_robot",
   "checkin": "ui_cl_checkin",
   "other": "ui_cl_other",
   "note": "每一列的圖示照原因分類；作物的那列用作物本身的圖示"
  },
  "detail240": "每筆可多一行明細（紀錄第 6 欄）：賣出品項與數量、垃圾車收了什麼、升到哪一級"
 },
 "pets": {
  "unlockLevel": 8,
  "capBase": 10,
  "capMax": 30,
  "sellRate": 0.5,
  "nameMaxChars": 8,
  "youngDays": 2,
  "youngFoodMult": 0.5,
  "storable": false,
  "movable": true,
  "dogs": {
   "shiba": {
    "name": "柴犬",
    "size": "M",
    "level": 8,
    "price": 2000,
    "range": 7,
    "drive": {
     "weasel": 0.85,
     "fox": 0.85,
     "wolf": 0.6
    },
    "skill": "chicken",
    "skillText": "守雞：對黃鼠狼、狐狸特別兇",
    "book": {
     "origin": "日本",
     "trait": "獨立、愛乾淨、有點固執",
     "know": "日本最古老的犬種之一，原本在山區獵鳥和小動物；招牌是捲起來的尾巴和「柴犬笑」。"
    }
   },
   "chihuahua": {
    "name": "吉娃娃",
    "size": "S",
    "level": 9,
    "price": 2200,
    "range": 5,
    "drive": {
     "weasel": 0.6,
     "fox": 0.5,
     "wolf": 0.3
    },
    "skill": "bark",
    "skillText": "大嗓門：天敵進範圍時叫一聲，範圍內其他狗這次驅趕率 +10%",
    "book": {
     "origin": "墨西哥",
     "trait": "勇敢、警覺、很黏主人",
     "know": "世界上體型最小的狗，膽子卻很大，看到陌生人會大聲吠叫。"
    }
   },
   "beagle": {
    "name": "米格魯",
    "size": "M",
    "level": 10,
    "price": 2400,
    "range": 7,
    "drive": {
     "weasel": 0.7,
     "fox": 0.65,
     "wolf": 0.5
    },
    "skill": "sniff",
    "skillText": "嗅覺：範圍內被黃鼠狼偷走的蛋，50% 機率找回來",
    "book": {
     "origin": "英國",
     "trait": "活潑、好奇、愛吃",
     "know": "嗅覺非常靈敏，機場常用米格魯當檢疫犬，聞行李裡的水果和肉品。"
    }
   },
   "maltese": {
    "name": "馬爾濟斯",
    "size": "S",
    "level": 11,
    "price": 2500,
    "range": 5,
    "drive": {
     "weasel": 0.6,
     "fox": 0.6,
     "wolf": 0.4
    },
    "skill": "alarm",
    "skillText": "警報：範圍內天敵得手時間從 60 秒延到 3 分鐘，並發通知",
    "book": {
     "origin": "地中海馬爾他島",
     "trait": "溫柔、愛撒嬌",
     "know": "有兩千多年歷史的玩賞犬，白色長毛不太會掉毛。"
    }
   },
   "shihtzu": {
    "name": "西施犬",
    "size": "S",
    "level": 12,
    "price": 2800,
    "range": 5,
    "drive": {
     "weasel": 0.55,
     "fox": 0.55,
     "wolf": 0.35
    },
    "skill": "buddy",
    "skillText": "陪伴：同一間狗屋的室友驅趕率 +8%",
    "book": {
     "origin": "中國（西藏、宮廷）",
     "trait": "友善、穩定、愛陪伴",
     "know": "名字來自「獅子狗」，曾是宮廷裡的寵物；臉上的毛要綁起來才看得到路。"
    }
   },
   "pomeranian": {
    "name": "博美",
    "size": "S",
    "level": 13,
    "price": 3000,
    "range": 5,
    "drive": {
     "weasel": 0.95,
     "fox": 0.7,
     "wolf": 0.4
    },
    "skill": "weasel",
    "skillText": "抓黃鼠狼高手",
    "book": {
     "origin": "德國、波蘭（波美拉尼亞）",
     "trait": "活潑、勇敢、愛叫",
     "know": "祖先是大型的雪橇犬，後來被培育得越來越小。"
    }
   },
   "yorkie": {
    "name": "約克夏犬",
    "size": "S",
    "level": 14,
    "price": 3500,
    "range": 5,
    "drive": {
     "weasel": 0.8,
     "fox": 0.55,
     "wolf": 0.35
    },
    "skill": "ratter2",
    "skillText": "捕鼠㹴：範圍內倉庫、垃圾站的老鼠也會抓，每 30 分 1 隻（跟貓一樣快）",
    "catchMinutes": 30,
    "book": {
     "origin": "英國",
     "trait": "精力旺盛、膽大",
     "know": "原本是工廠和礦坑裡抓老鼠的㹴犬，現在是很受歡迎的小型犬。"
    }
   },
   "corgi": {
    "name": "柯基",
    "size": "M",
    "level": 15,
    "price": 4000,
    "range": 7,
    "drive": {
     "weasel": 0.6,
     "fox": 0.6,
     "wolf": 0.8
    },
    "skill": "cattle",
    "skillText": "牧牛：範圍內受驚的牛恢復時間減半",
    "book": {
     "origin": "英國威爾斯",
     "trait": "聰明、開朗、愛指揮",
     "know": "腿短跑得快，會咬牛的腳跟把牛趕回家，牛踢腳時正好從頭上掠過。"
    }
   },
   "pug": {
    "name": "巴哥犬",
    "size": "S",
    "level": 16,
    "price": 4500,
    "range": 5,
    "drive": {
     "weasel": 0.55,
     "fox": 0.55,
     "wolf": 0.45
    },
    "skill": "lazy",
    "skillText": "愛睡：每 9 小時才吃 1 份狗飼料（一般 6 小時）",
    "foodEveryHours": 9,
    "book": {
     "origin": "中國",
     "trait": "隨和、愛睡、愛黏人",
     "know": "一天可以睡上十幾個小時；臉上的皺紋要常常清潔。"
    }
   },
   "papillon": {
    "name": "蝴蝶犬",
    "size": "S",
    "level": 17,
    "price": 4800,
    "range": 5,
    "drive": {
     "weasel": 0.75,
     "fox": 0.6,
     "wolf": 0.4
    },
    "skill": "butterfly",
    "skillText": "賞蝶：範圍內死掉的蝴蝶自動撿起來（記進圖鑑、翅膀完整的做成標本）",
    "book": {
     "origin": "法國、西班牙",
     "trait": "機靈、好學",
     "know": "大大的耳朵張開像蝴蝶翅膀，所以叫 Papillon（法文的蝴蝶）。"
    }
   },
   "border": {
    "name": "邊境牧羊犬",
    "size": "L",
    "level": 18,
    "price": 5000,
    "range": 9,
    "drive": {
     "weasel": 0.6,
     "fox": 0.7,
     "wolf": 0.9
    },
    "skill": "sheep",
    "skillText": "牧羊：範圍內的羊不會受驚",
    "book": {
     "origin": "英國、蘇格蘭邊境",
     "trait": "非常聰明、精力旺盛",
     "know": "常被評為最聰明的狗，用眼神就能把羊群趕到指定的地方。"
    }
   },
   "schnauzer": {
    "name": "雪納瑞犬",
    "size": "M",
    "level": 19,
    "price": 5200,
    "range": 7,
    "drive": {
     "weasel": 0.8,
     "fox": 0.7,
     "wolf": 0.6
    },
    "skill": "ratDeter",
    "skillText": "驅鼠：範圍內倉庫、垃圾站老鼠出現機率 −30%",
    "book": {
     "origin": "德國",
     "trait": "警覺、勇敢、有活力",
     "know": "名字來自德文的「鬍鬚」；原本在農場抓老鼠、看家。"
    }
   },
   "akita": {
    "name": "秋田犬",
    "size": "M",
    "level": 20,
    "price": 5400,
    "range": 7,
    "drive": {
     "weasel": 0.8,
     "fox": 0.8,
     "wolf": 0.7
    },
    "skill": "loyal",
    "skillText": "忠犬：你離線時驅趕率 +15%",
    "book": {
     "origin": "日本",
     "trait": "忠心、沉穩、有尊嚴",
     "know": "「忠犬小八」就是秋田犬，在車站等過世的主人等了將近十年。"
    }
   },
   "dachshund": {
    "name": "臘腸犬",
    "size": "S",
    "level": 21,
    "price": 5500,
    "range": 5,
    "drive": {
     "weasel": 0.7,
     "fox": 0.6,
     "wolf": 0.4
    },
    "skill": "ratter",
    "skillText": "獵鼠：範圍內的倉庫、垃圾站老鼠也會抓（速度是貓的一半）",
    "book": {
     "origin": "德國",
     "trait": "勇敢、固執、愛挖洞",
     "know": "身體長、腿短，原本是鑽進洞裡抓獾的獵犬。"
    }
   },
   "dalmatian": {
    "name": "大麥町",
    "size": "L",
    "level": 22,
    "price": 6000,
    "range": 11,
    "drive": {
     "weasel": 0.65,
     "fox": 0.7,
     "wolf": 0.75
    },
    "skill": "runner",
    "skillText": "長跑：守護範圍 11×11，狗裡面最大",
    "book": {
     "origin": "克羅埃西亞",
     "trait": "精力旺盛、愛跑",
     "know": "以前跟著馬車跑、替消防車開路；剛出生時全身白色，斑點是後來才長出來的。"
    }
   },
   "bullterrier": {
    "name": "牛頭梗",
    "size": "M",
    "level": 23,
    "price": 6200,
    "range": 7,
    "drive": {
     "weasel": 0.75,
     "fox": 0.75,
     "wolf": 0.75
    },
    "skill": "retry",
    "skillText": "不放棄：驅趕失敗會再追一次（第二次機率減半）",
    "book": {
     "origin": "英國",
     "trait": "頑皮、黏人、不服輸",
     "know": "頭從側面看像一顆蛋，眼睛是小小的三角形。"
    }
   },
   "poodle": {
    "name": "貴賓犬",
    "size": "M",
    "level": 24,
    "price": 6500,
    "range": 7,
    "drive": {
     "weasel": 0.75,
     "fox": 0.75,
     "wolf": 0.7
    },
    "skill": "double",
    "skillText": "機警：同時應付 2 隻天敵（其他狗一次 1 隻）",
    "book": {
     "origin": "德國、法國",
     "trait": "聰明、反應快",
     "know": "原本是在水裡撿獵物的獵犬，招牌造型是為了游泳時保暖關節。"
    }
   },
   "chowchow": {
    "name": "鬆獅犬",
    "size": "M",
    "level": 25,
    "price": 7000,
    "range": 7,
    "drive": {
     "weasel": 0.7,
     "fox": 0.75,
     "wolf": 0.8
    },
    "skill": "barnGuard",
    "skillText": "看家：範圍內農產倉庫的老鼠偷吃量減半",
    "book": {
     "origin": "中國",
     "trait": "獨立、穩重、護家",
     "know": "舌頭是藍黑色的；毛很厚，像一頭小獅子，怕熱。"
    }
   },
   "samoyed": {
    "name": "薩摩耶犬",
    "size": "L",
    "level": 26,
    "price": 7500,
    "range": 9,
    "drive": {
     "weasel": 0.7,
     "fox": 0.75,
     "wolf": 0.85
    },
    "skill": "calmAll",
    "skillText": "微笑天使：範圍內受驚的羊、牛、豬恢復時間減半",
    "book": {
     "origin": "俄羅斯西伯利亞",
     "trait": "友善、愛笑、愛熱鬧",
     "know": "嘴角上揚的「薩摩耶微笑」很有名，原本幫遊牧民族放馴鹿、拉雪橇。"
    }
   },
   "labrador": {
    "name": "拉布拉多",
    "size": "L",
    "level": 27,
    "price": 8000,
    "range": 9,
    "drive": {
     "weasel": 0.8,
     "fox": 0.8,
     "wolf": 0.8
    },
    "skill": "balanced",
    "skillText": "均衡、範圍大",
    "book": {
     "origin": "加拿大",
     "trait": "友善、溫和、愛吃",
     "know": "常當導盲犬和搜救犬；很愛玩水。"
    }
   },
   "shepherd": {
    "name": "德國狼犬",
    "size": "L",
    "level": 28,
    "price": 8500,
    "range": 9,
    "drive": {
     "weasel": 0.85,
     "fox": 0.85,
     "wolf": 0.85
    },
    "skill": "police",
    "skillText": "警犬：趕走的天敵當晚不會再來同一塊地",
    "book": {
     "origin": "德國",
     "trait": "忠心、聰明、勇敢",
     "know": "最常見的警犬和軍犬，學東西又快又穩。"
    }
   },
   "bulldog": {
    "name": "鬥牛犬",
    "size": "M",
    "level": 30,
    "price": 9000,
    "range": 7,
    "drive": {
     "weasel": 0.6,
     "fox": 0.7,
     "wolf": 0.85
    },
    "skill": "deter",
    "skillText": "嚇阻：範圍內天敵出現機率 −50%，守豬",
    "book": {
     "origin": "英國",
     "trait": "穩重、溫和、有點懶",
     "know": "外表兇、個性其實很溫和；鼻子短，怕熱。"
    }
   },
   "doberman": {
    "name": "杜賓犬",
    "size": "L",
    "level": 31,
    "price": 10000,
    "range": 9,
    "drive": {
     "weasel": 0.8,
     "fox": 0.85,
     "wolf": 0.88
    },
    "skill": "storm",
    "skillText": "雨夜哨兵：陰雨天驅趕率 +15%",
    "book": {
     "origin": "德國",
     "trait": "機警、忠心、敏捷",
     "know": "一位收稅員為了保護自己而培育的護衛犬，名字就是他的姓。"
    }
   },
   "husky": {
    "name": "哈士奇",
    "size": "L",
    "level": 32,
    "price": 10500,
    "range": 9,
    "drive": {
     "weasel": 0.7,
     "fox": 0.75,
     "wolf": 0.9
    },
    "skill": "cold",
    "skillText": "耐寒：冬天和下雪時驅趕率再 +15%",
    "book": {
     "origin": "俄羅斯西伯利亞",
     "trait": "活潑、愛跑、很會「說話」",
     "know": "雪橇犬，耐寒耐跑；常常會嗷嗷叫，很少真的吠。"
    }
   },
   "rottweiler": {
    "name": "羅威納犬",
    "size": "L",
    "level": 33,
    "price": 11000,
    "range": 9,
    "drive": {
     "weasel": 0.7,
     "fox": 0.8,
     "wolf": 0.9
    },
    "skill": "cattleGuard",
    "skillText": "護牧：範圍內的牛、豬不會受驚",
    "book": {
     "origin": "德國",
     "trait": "沉穩、護主、有自信",
     "know": "以前跟著屠夫趕牛群到市場，還會揹著錢袋回家。"
    }
   },
   "golden": {
    "name": "黃金獵犬",
    "size": "L",
    "level": 34,
    "price": 12000,
    "range": 9,
    "drive": {
     "weasel": 0.75,
     "fox": 0.75,
     "wolf": 0.75
    },
    "skill": "medic",
    "skillText": "救護：範圍內被咬傷的家禽會自動救護好",
    "book": {
     "origin": "英國蘇格蘭",
     "trait": "溫柔、耐心、愛人",
     "know": "嘴巴很軟，叼獵物不會咬傷；也是常見的導盲犬和治療犬。"
    }
   },
   "malamute": {
    "name": "阿拉斯加雪橇犬",
    "size": "L",
    "level": 36,
    "price": 13500,
    "range": 9,
    "drive": {
     "weasel": 0.75,
     "fox": 0.8,
     "wolf": 0.92
    },
    "skill": "polar",
    "skillText": "極地：冬天和下雪時驅趕率 +20%，下雪時守護範圍 +2",
    "book": {
     "origin": "美國阿拉斯加",
     "trait": "力氣大、友善、獨立",
     "know": "最古老的雪橇犬之一，拉的是重貨，比哈士奇更大更壯。"
    }
   },
   "stbernard": {
    "name": "聖伯納犬",
    "size": "L",
    "level": 40,
    "price": 16000,
    "range": 9,
    "drive": {
     "weasel": 0.75,
     "fox": 0.8,
     "wolf": 0.85
    },
    "skill": "rescue",
    "skillText": "救難：範圍內被咬傷的家禽、受驚的家畜都馬上恢復",
    "book": {
     "origin": "瑞士、義大利（阿爾卑斯山）",
     "trait": "溫和、有耐心",
     "know": "在山上的修道院救過兩千多位迷路的旅人；脖子上的小酒桶是後來畫家畫出來的形象。"
    }
   },
   "mastiff": {
    "name": "藏獒",
    "size": "L",
    "level": 45,
    "price": 20000,
    "range": 9,
    "drive": {
     "weasel": 0.92,
     "fox": 0.92,
     "wolf": 0.95
    },
    "skill": "guardian",
    "skillText": "鎮守：範圍內天敵出現機率 −70%",
    "book": {
     "origin": "中國西藏",
     "trait": "獨立、護家、警戒心強",
     "know": "在高原上替牧民守護羊群和帳篷，厚厚的鬃毛能擋風雪。"
    }
   }
  },
  "cats": {
   "orange": {
    "name": "橘貓",
    "level": 8,
    "price": 1500,
    "range": 7,
    "catchMinutes": 20,
    "catchMinutesNight": 20,
    "skill": "glutton",
    "skillText": "貪吃：每 6 小時就吃 1 份貓飼料",
    "book": {
     "origin": "世界各地（毛色）",
     "trait": "親人、愛吃",
     "know": "「橘貓」是毛色不是品種；橘貓大多是公的。"
    }
   },
   "tabby": {
    "name": "虎斑貓",
    "level": 10,
    "price": 1800,
    "range": 7,
    "catchMinutes": 25,
    "catchMinutesNight": 25,
    "skill": "combo",
    "skillText": "獵手：抓到老鼠時 25% 機率順便多抓 1 隻",
    "book": {
     "origin": "世界各地（毛色）",
     "trait": "活潑、好奇、獵性強",
     "know": "虎斑是最原始的貓毛色，額頭上常有「M」字紋路。"
    }
   },
   "calico": {
    "name": "三花貓",
    "level": 12,
    "price": 2500,
    "range": 7,
    "catchMinutes": 30,
    "catchMinutesNight": 30,
    "skill": "lucky",
    "skillText": "招財：每天 10% 機率叼回小禮物（20～200 金幣）",
    "book": {
     "origin": "世界各地（毛色）",
     "trait": "有主見、愛撒嬌",
     "know": "三花貓幾乎都是母的；在日本被當成招財貓的原型。"
    }
   },
   "tuxedo": {
    "name": "奶牛貓",
    "level": 14,
    "price": 2800,
    "range": 7,
    "catchMinutes": 30,
    "catchMinutesNight": 30,
    "skill": "multi",
    "skillText": "好動：同時顧 2 個地方，倉庫和垃圾站一起抓",
    "book": {
     "origin": "世界各地（毛色）",
     "trait": "調皮、精力旺盛",
     "know": "黑白相間像乳牛，英文叫 Tuxedo（燕尾服）貓。"
    }
   },
   "black": {
    "name": "黑貓",
    "level": 17,
    "price": 3500,
    "range": 7,
    "catchMinutes": 30,
    "catchMinutesNight": 15,
    "skill": "night",
    "skillText": "夜貓：晚上抓鼠快一倍",
    "book": {
     "origin": "世界各地（毛色）",
     "trait": "安靜、聰明",
     "know": "在日本和英國，黑貓被當成會帶來好運的貓。"
    }
   },
   "british": {
    "name": "英國短毛貓",
    "level": 19,
    "price": 4000,
    "range": 9,
    "catchMinutes": 30,
    "catchMinutesNight": 30,
    "skill": "calm",
    "skillText": "沉穩：每 12 小時才吃 1 份貓飼料（一般 8 小時）",
    "foodEveryHours": 12,
    "book": {
     "origin": "英國",
     "trait": "穩重、獨立、好相處",
     "know": "圓臉圓眼、毛很厚很密；《愛麗絲夢遊仙境》的柴郡貓就是以牠為原型。"
    }
   },
   "siamese": {
    "name": "暹羅貓",
    "level": 21,
    "price": 4500,
    "range": 7,
    "catchMinutes": 25,
    "catchMinutesNight": 25,
    "skill": "talk",
    "skillText": "愛講話：範圍內一有老鼠就叫並發通知，老鼠進來 30 分鐘內偷吃不到東西",
    "book": {
     "origin": "泰國",
     "trait": "愛講話、黏人",
     "know": "臉、耳朵、腳和尾巴顏色比較深，叫聲很多變化，像在跟人聊天。"
    }
   },
   "ragdoll": {
    "name": "布偶貓",
    "level": 23,
    "price": 5000,
    "range": 11,
    "catchMinutes": 30,
    "catchMinutesNight": 30,
    "skill": "wide",
    "skillText": "黏人：範圍最大，一隻顧得到倉庫和好幾座垃圾站",
    "book": {
     "origin": "美國",
     "trait": "溫柔、放鬆、黏人",
     "know": "被抱起來時全身放鬆像布偶，所以叫 Ragdoll。"
    }
   },
   "russianblue": {
    "name": "俄羅斯藍貓",
    "level": 26,
    "price": 6000,
    "range": 9,
    "catchMinutes": 20,
    "catchMinutesNight": 20,
    "skill": "tidy",
    "skillText": "愛乾淨：範圍內垃圾站的老鼠不會咬破垃圾袋",
    "book": {
     "origin": "俄羅斯",
     "trait": "安靜、害羞、愛乾淨",
     "know": "銀藍色的雙層毛和綠眼睛；嘴角微微上揚，像在微笑。"
    }
   },
   "persian": {
    "name": "波斯貓",
    "level": 29,
    "price": 7000,
    "range": 7,
    "catchMinutes": 60,
    "catchMinutesNight": 60,
    "skill": "deter",
    "skillText": "嚇阻：範圍內老鼠出現機率 −60%",
    "book": {
     "origin": "伊朗（波斯）",
     "trait": "安靜、優雅、愛睡",
     "know": "長毛又扁臉，要天天梳毛；是很古老的長毛貓品種。"
    }
   },
   "scottishfold": {
    "name": "折耳貓",
    "level": 32,
    "price": 8000,
    "range": 7,
    "catchMinutes": 30,
    "catchMinutesNight": 30,
    "skill": "cuddle",
    "skillText": "療癒：每天第一次摸摸牠 +50 經驗",
    "book": {
     "origin": "英國蘇格蘭",
     "trait": "溫和、愛撒嬌",
     "know": "耳朵向前折是基因突變造成的，會坐成「佛像坐」。"
    }
   },
   "silvershade": {
    "name": "銀漸層貓",
    "level": 37,
    "price": 9500,
    "range": 9,
    "catchMinutes": 15,
    "catchMinutesNight": 15,
    "skill": "pro",
    "skillText": "捕鼠專家：每 15 分抓 1 隻，貓裡面最快",
    "book": {
     "origin": "英國（毛色）",
     "trait": "溫和、安靜、親人",
     "know": "「銀漸層」是毛色：毛根白、毛尖銀灰，看起來閃閃發亮，配上綠眼睛最經典；常見於英國短毛貓和金吉拉。"
    }
   },
   "mainecoon": {
    "name": "緬因貓",
    "level": 42,
    "price": 12000,
    "range": 13,
    "catchMinutes": 20,
    "catchMinutesNight": 20,
    "skill": "giant",
    "skillText": "大塊頭：巡邏範圍 13×13，還會嚇跑黃鼠狼（範圍內黃鼠狼出現機率 −50%）",
    "book": {
     "origin": "美國緬因州",
     "trait": "溫柔的大個子",
     "know": "體型最大的家貓之一，耳尖有長毛、尾巴蓬鬆，能適應寒冷的冬天。"
    }
   }
  },
  "food": {
   "dog": {
    "item": "dog_food",
    "everyHours": 6
   },
   "cat": {
    "item": "cat_food",
    "everyHours": 8,
    "gluttonEveryHours": 6
   }
  },
  "dens": {
   "dog_house": {
    "name": "狗屋",
    "for": "dog",
    "level": 8,
    "cost": 800,
    "expandCost": [
     400,
     400
    ],
    "maxSlots": 3
   },
   "cat_tree": {
    "name": "貓跳台",
    "for": "cat",
    "level": 8,
    "cost": 600,
    "expandCost": [
     300,
     300
    ],
    "maxSlots": 3
   },
   "dog_house_gold": {
    "name": "金色狗屋",
    "for": "dog",
    "reward": 15,
    "maxSlots": 1,
    "driveBonus": 0.05
   },
   "cat_tree_gold": {
    "name": "豪華貓跳台",
    "for": "cat",
    "reward": 20,
    "maxSlots": 1,
    "rangeBonus": 2
   }
  },
  "shrinkRefundRate": 0.5,
  "skills": {
   "alarmSeconds": 180,
   "cattleRecoverMult": 0.5,
   "ratterSpeedMult": 0.5,
   "deterSpawnMult": 0.5,
   "coldBonus": 0.15,
   "catDeterRatMult": 0.4,
   "luckyChancePerDay": 0.1,
   "luckyCoins": [
    20,
    200
   ],
   "doubleTargets": 2,
   "barkBonus": 0.1,
   "sniffReturn": 0.5,
   "buddyBonus": 0.08,
   "ratDeterMult": 0.7,
   "loyalBonus": 0.15,
   "retryMult": 0.5,
   "barnGuardMult": 0.5,
   "stormBonus": 0.15,
   "polarBonus": 0.2,
   "polarRange": 2,
   "guardianSpawnMult": 0.3,
   "policeHours": 10,
   "comboChance": 0.25,
   "talkMinutes": 30,
   "cuddleXp": 50,
   "weaselDeterMult": 0.5
  },
  "tapToPet": true,
  "nightSleepsInDen": true,
  "drawScale": 1.5,
  "v256": {
   "note": "v2.56 品種介紹面板文字。專長數值在 pets.skills；品種介紹在 pets.dogs/cats.<代號>.book",
   "texts": {
    "origin": "原產地",
    "trait": "個性",
    "skill": "專長",
    "know": "小知識",
    "farm": "在農場",
    "button": "品種介紹",
    "bookHint": "點品種那一列看介紹",
    "talk": "{name}喵喵叫：{where}跑進老鼠了！",
    "barn": "倉庫",
    "trash": "垃圾站",
    "cuddle": "{name}好療癒：+{xp} 經驗",
    "sniff": "{name}把蛋找回來了",
    "police": "{name}守住了這塊地，今晚{pred}不會再來"
   }
  }
 },
 "predators": {
  "weasel": {
   "name": "黃鼠狼",
   "level": 9,
   "when": "night",
   "target": "eggs",
   "chancePerBlockPerHour": 0.05,
   "needsEggs": true
  },
  "fox": {
   "name": "狐狸",
   "level": 10,
   "when": "night",
   "target": "poultry",
   "chancePerBlockPerNight": 0.2,
   "injureSeconds": 3600
  },
  "wolf": {
   "name": "野狼",
   "level": 12,
   "when": "nightOrRain",
   "target": "livestock",
   "chancePerBlockPerNight": 0.15,
   "scareSeconds": 14400,
   "scareRange": 2
  },
  "approachSeconds": 60,
  "chaseTaps": 3,
  "fencesStop": false,
  "greenhouseSafe": true,
  "poultry": [
   "egg_hen",
   "broiler"
  ],
  "livestock": [
   "wool_sheep",
   "meat_sheep",
   "dairy_goat",
   "dairy_cow",
   "beef_cattle",
   "pig",
   "meat_rabbit",
   "angora_rabbit",
   "alpaca"
  ],
  "sheep": [
   "wool_sheep",
   "meat_sheep",
   "dairy_goat"
  ],
  "cattle": [
   "dairy_cow",
   "beef_cattle"
  ],
  "nightHours": 10,
  "rescueTools": [
   "hand",
   "care"
  ],
  "newsReport": true,
  "drawScale": 1.5
 },
 "rats": {
  "startLevel": 9,
  "catchTaps": 3,
  "winterMult": 1.5,
  "barn": {
   "chancePerHour": 0.1,
   "fullnessBase": 0.5,
   "max": 5,
   "eatsPerHour": {
    "crop": 1,
    "feed": 1
   },
   "eats": [
    "crop",
    "feed"
   ]
  },
  "trash": {
   "chancePerHour": 0.15,
   "needsBags": true,
   "overdueDays": 3,
   "overdueMult": 2,
   "max": 3,
   "chewHoursPerBag": 2
  },
  "oldSaveGraceHours": 24,
  "newsReport": true
 },
 "boost": {
  "roundTo": 10,
  "kinds": {
   "produce": {
    "name": "農產倉庫容量",
    "add": 100,
    "unit": "格",
    "price": 2000,
    "mult": 1.5,
    "max": 20
   },
   "water": {
    "name": "雨水儲量",
    "add": 200,
    "unit": "滴",
    "price": 1000,
    "mult": 1.4,
    "max": 10
   },
   "animal": {
    "name": "動物上限",
    "add": 1,
    "unit": "隻",
    "price": 3000,
    "mult": 1.6,
    "max": 10
   },
   "pool": {
    "name": "魚池格數",
    "add": 2,
    "unit": "格",
    "price": 2000,
    "mult": 1.5,
    "max": 10,
    "needs": "fish_pool"
   },
   "greenhouse": {
    "name": "溫室格數",
    "add": 3,
    "unit": "格",
    "price": 3000,
    "mult": 1.5,
    "max": 10,
    "needs": "greenhouse"
   },
   "pet": {
    "name": "寵物上限",
    "add": 1,
    "unit": "隻",
    "price": 3000,
    "mult": 1.15,
    "max": 20,
    "needs": "dog_house"
   },
   "trash": {
    "name": "垃圾站容量",
    "add": {
     "general": 2,
     "recycle": 2,
     "sewageDrops": 100
    },
    "unit": "",
    "price": 500,
    "mult": 1.5,
    "max": 5
   },
   "material": {
    "name": "建材小屋容量",
    "add": 100,
    "unit": "份",
    "price": 2000,
    "mult": 1.5,
    "max": 20,
    "needs": "material_shed",
    "perIsland": true
   }
  }
 },
 "achievements": {
  "tierRewards": {
   "bronze": 200,
   "silver": 1000,
   "gold": 5000,
   "platinum": 20000,
   "single": 5000
  },
  "tierNames": {
   "bronze": "銅",
   "silver": "銀",
   "gold": "金",
   "platinum": "白金",
   "single": "一階"
  },
  "list": [
   {
    "id": "level",
    "name": "升級之路",
    "group": "升級",
    "stat": "level",
    "tiers": [
     10,
     20,
     35,
     50
    ],
    "desc": "到達等級"
   },
   {
    "id": "harvest",
    "name": "勤勞農夫",
    "group": "種菜",
    "stat": "harvest",
    "tiers": [
     100,
     1000,
     10000,
     100000
    ],
    "desc": "收成田作物次數"
   },
   {
    "id": "veggies",
    "name": "百菜園",
    "group": "種菜",
    "stat": "veggies",
    "tiers": null,
    "desc": "收過全部 49 種田作物"
   },
   {
    "id": "orchard",
    "name": "果園主人",
    "group": "種菜",
    "stat": "orchard",
    "tiers": null,
    "desc": "收過全部 15 種水果"
   },
   {
    "id": "organic",
    "name": "有機農夫",
    "group": "種菜",
    "stat": "organic",
    "tiers": [
     50,
     500,
     5000,
     50000
    ],
    "desc": "收成有機作物次數"
   },
   {
    "id": "crop_pasture",
    "name": "牧草專家",
    "group": "作物專家",
    "stat": "crop:pasture",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成牧草個數"
   },
   {
    "id": "crop_wheat",
    "name": "小麥專家",
    "group": "作物專家",
    "stat": "crop:wheat",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成小麥個數"
   },
   {
    "id": "crop_tomato",
    "name": "番茄專家",
    "group": "作物專家",
    "stat": "crop:tomato",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成番茄個數"
   },
   {
    "id": "crop_potato",
    "name": "馬鈴薯專家",
    "group": "作物專家",
    "stat": "crop:potato",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成馬鈴薯個數"
   },
   {
    "id": "crop_corn",
    "name": "玉米專家",
    "group": "作物專家",
    "stat": "crop:corn",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成玉米個數"
   },
   {
    "id": "crop_peanut",
    "name": "花生專家",
    "group": "作物專家",
    "stat": "crop:peanut",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成花生個數"
   },
   {
    "id": "crop_strawberry",
    "name": "草莓專家",
    "group": "作物專家",
    "stat": "crop:strawberry",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成草莓個數"
   },
   {
    "id": "crop_cabbage",
    "name": "高麗菜專家",
    "group": "作物專家",
    "stat": "crop:cabbage",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成高麗菜個數"
   },
   {
    "id": "crop_rice",
    "name": "水稻專家",
    "group": "作物專家",
    "stat": "crop:rice",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成水稻個數"
   },
   {
    "id": "crop_pumpkin",
    "name": "南瓜專家",
    "group": "作物專家",
    "stat": "crop:pumpkin",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成南瓜個數"
   },
   {
    "id": "crop_watermelon",
    "name": "西瓜專家",
    "group": "作物專家",
    "stat": "crop:watermelon",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成西瓜個數"
   },
   {
    "id": "crop_sunflower",
    "name": "向日葵專家",
    "group": "作物專家",
    "stat": "crop:sunflower",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成向日葵個數"
   },
   {
    "id": "ranch",
    "name": "牧場主人",
    "group": "動物",
    "stat": "ranch",
    "tiers": [
     100,
     1000,
     10000,
     50000
    ],
    "desc": "收動物產物次數"
   },
   {
    "id": "ship",
    "name": "出貨高手",
    "group": "動物",
    "stat": "ship",
    "tiers": [
     10,
     100,
     1000,
     5000
    ],
    "desc": "肉用型出貨隻數"
   },
   {
    "id": "allAnimals",
    "name": "全員到齊",
    "group": "動物",
    "stat": "allAnimals",
    "tiers": null,
    "desc": "養過全部 18 種動物"
   },
   {
    "id": "fisher",
    "name": "漁夫",
    "group": "魚",
    "stat": "fisher",
    "tiers": [
     50,
     500,
     5000,
     50000
    ],
    "desc": "收成魚的格數"
   },
   {
    "id": "bigPond",
    "name": "大池塘",
    "group": "魚",
    "stat": "bigPond",
    "tiers": [
     4,
     9,
     16,
     25
    ],
    "desc": "一次收成的整池格數"
   },
   {
    "id": "honey",
    "name": "蜜蜂大王",
    "group": "昆蟲",
    "stat": "honey",
    "tiers": [
     100,
     1000,
     10000,
     100000
    ],
    "desc": "累計產蜜罐數"
   },
   {
    "id": "honeyAll",
    "name": "百蜜品嘗",
    "group": "昆蟲",
    "stat": "honeyAll",
    "tiers": null,
    "desc": "收過全部 11 種蜂蜜",
    "keepIfEarned": true
   },
   {
    "id": "butterfly",
    "name": "蝴蝶園",
    "group": "昆蟲",
    "stat": "butterfly",
    "tiers": [
     10,
     50,
     200,
     1000
    ],
    "desc": "撿到的蝴蝶隻數"
   },
   {
    "id": "specimen",
    "name": "標本收藏家",
    "group": "昆蟲",
    "stat": "specimenKinds",
    "tiers": [
     5,
     10,
     20,
     27
    ],
    "desc": "做成標本的蝴蝶種類"
   },
   {
    "id": "guard",
    "name": "忠實守護",
    "group": "狗",
    "stat": "guard",
    "tiers": [
     10,
     100,
     1000,
     5000
    ],
    "desc": "狗趕走天敵次數"
   },
   {
    "id": "allDogs",
    "name": "狗狗大全",
    "group": "狗",
    "stat": "allDogs",
    "tiers": null,
    "desc": "養過全部 29 種狗"
   },
   {
    "id": "nurse",
    "name": "救護犬",
    "group": "狗",
    "stat": "nurse",
    "tiers": [
     10,
     100,
     500
    ],
    "desc": "救護受傷動物次數"
   },
   {
    "id": "mouser",
    "name": "捕鼠高手",
    "group": "貓",
    "stat": "mouser",
    "tiers": [
     10,
     100,
     1000,
     5000
    ],
    "desc": "貓抓老鼠隻數"
   },
   {
    "id": "allCats",
    "name": "貓咪大全",
    "group": "貓",
    "stat": "allCats",
    "tiers": null,
    "desc": "養過全部 13 種貓"
   },
   {
    "id": "robots",
    "name": "機器人大軍",
    "group": "機器人",
    "stat": "robots",
    "tiers": [
     3,
     7,
     12,
     16
    ],
    "desc": "買過的機器人型號數",
    "note241": "型號 16 種（多了伐木、採礦、整地）"
   },
   {
    "id": "hours",
    "name": "勤快助手",
    "group": "機器人",
    "stat": "hours",
    "tiers": [
     100,
     1000,
     10000,
     50000
    ],
    "desc": "機器人累計工作時數"
   },
   {
    "id": "fullFleet",
    "name": "滿編",
    "group": "機器人",
    "stat": "fullFleet",
    "tiers": null,
    "desc": "同一種機器人買滿 5 台"
   },
   {
    "id": "crop_alfalfa",
    "name": "苜蓿草專家",
    "group": "作物專家",
    "stat": "crop:alfalfa",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成苜蓿草個數"
   },
   {
    "id": "crop_timothy",
    "name": "提摩西草專家",
    "group": "作物專家",
    "stat": "crop:timothy",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成提摩西草個數"
   },
   {
    "id": "crop_oats",
    "name": "燕麥專家",
    "group": "作物專家",
    "stat": "crop:oats",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成燕麥個數"
   },
   {
    "id": "crop_barley",
    "name": "大麥專家",
    "group": "作物專家",
    "stat": "crop:barley",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成大麥個數"
   },
   {
    "id": "crop_rye",
    "name": "黑麥專家",
    "group": "作物專家",
    "stat": "crop:rye",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成黑麥個數"
   },
   {
    "id": "crop_millet",
    "name": "小米專家",
    "group": "作物專家",
    "stat": "crop:millet",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成小米個數"
   },
   {
    "id": "crop_sorghum",
    "name": "高粱專家",
    "group": "作物專家",
    "stat": "crop:sorghum",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成高粱個數"
   },
   {
    "id": "crop_soybean",
    "name": "黃豆專家",
    "group": "作物專家",
    "stat": "crop:soybean",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成黃豆個數"
   },
   {
    "id": "crop_pea",
    "name": "豌豆專家",
    "group": "作物專家",
    "stat": "crop:pea",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成豌豆個數"
   },
   {
    "id": "crop_mung_bean",
    "name": "綠豆專家",
    "group": "作物專家",
    "stat": "crop:mung_bean",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成綠豆個數"
   },
   {
    "id": "crop_green_bean",
    "name": "四季豆專家",
    "group": "作物專家",
    "stat": "crop:green_bean",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成四季豆個數"
   },
   {
    "id": "crop_red_bean",
    "name": "紅豆專家",
    "group": "作物專家",
    "stat": "crop:red_bean",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成紅豆個數"
   },
   {
    "id": "crop_carrot",
    "name": "胡蘿蔔專家",
    "group": "作物專家",
    "stat": "crop:carrot",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成胡蘿蔔個數"
   },
   {
    "id": "crop_sweet_potato",
    "name": "地瓜專家",
    "group": "作物專家",
    "stat": "crop:sweet_potato",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成地瓜個數"
   },
   {
    "id": "crop_daikon",
    "name": "白蘿蔔專家",
    "group": "作物專家",
    "stat": "crop:daikon",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成白蘿蔔個數"
   },
   {
    "id": "crop_beet",
    "name": "甜菜根專家",
    "group": "作物專家",
    "stat": "crop:beet",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成甜菜根個數"
   },
   {
    "id": "crop_taro",
    "name": "芋頭專家",
    "group": "作物專家",
    "stat": "crop:taro",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成芋頭個數"
   },
   {
    "id": "crop_lettuce",
    "name": "生菜專家",
    "group": "作物專家",
    "stat": "crop:lettuce",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成生菜個數"
   },
   {
    "id": "crop_spinach",
    "name": "菠菜專家",
    "group": "作物專家",
    "stat": "crop:spinach",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成菠菜個數"
   },
   {
    "id": "crop_bok_choy",
    "name": "青江菜專家",
    "group": "作物專家",
    "stat": "crop:bok_choy",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成青江菜個數"
   },
   {
    "id": "crop_napa_cabbage",
    "name": "大白菜專家",
    "group": "作物專家",
    "stat": "crop:napa_cabbage",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成大白菜個數"
   },
   {
    "id": "crop_cucumber",
    "name": "小黃瓜專家",
    "group": "作物專家",
    "stat": "crop:cucumber",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成小黃瓜個數"
   },
   {
    "id": "crop_eggplant",
    "name": "茄子專家",
    "group": "作物專家",
    "stat": "crop:eggplant",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成茄子個數"
   },
   {
    "id": "crop_okra",
    "name": "秋葵專家",
    "group": "作物專家",
    "stat": "crop:okra",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成秋葵個數"
   },
   {
    "id": "crop_bell_pepper",
    "name": "甜椒專家",
    "group": "作物專家",
    "stat": "crop:bell_pepper",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成甜椒個數"
   },
   {
    "id": "crop_chili",
    "name": "辣椒專家",
    "group": "作物專家",
    "stat": "crop:chili",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成辣椒個數"
   },
   {
    "id": "crop_muskmelon",
    "name": "香瓜專家",
    "group": "作物專家",
    "stat": "crop:muskmelon",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成香瓜個數"
   },
   {
    "id": "crop_honeydew",
    "name": "哈密瓜專家",
    "group": "作物專家",
    "stat": "crop:honeydew",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成哈密瓜個數"
   },
   {
    "id": "crop_sugarcane",
    "name": "甘蔗專家",
    "group": "作物專家",
    "stat": "crop:sugarcane",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成甘蔗個數"
   },
   {
    "id": "crop_cotton",
    "name": "棉花專家",
    "group": "作物專家",
    "stat": "crop:cotton",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成棉花個數"
   },
   {
    "id": "crop_tea",
    "name": "茶樹專家",
    "group": "作物專家",
    "stat": "crop:tea",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成茶樹個數"
   },
   {
    "id": "crop_coffee",
    "name": "咖啡專家",
    "group": "作物專家",
    "stat": "crop:coffee",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成咖啡個數"
   },
   {
    "id": "crop_mint",
    "name": "薄荷專家",
    "group": "作物專家",
    "stat": "crop:mint",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成薄荷個數"
   },
   {
    "id": "crop_basil",
    "name": "羅勒專家",
    "group": "作物專家",
    "stat": "crop:basil",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成羅勒個數"
   },
   {
    "id": "crop_thyme",
    "name": "百里香專家",
    "group": "作物專家",
    "stat": "crop:thyme",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成百里香個數"
   },
   {
    "id": "crop_rosemary",
    "name": "迷迭香專家",
    "group": "作物專家",
    "stat": "crop:rosemary",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成迷迭香個數"
   },
   {
    "id": "crop_sage",
    "name": "鼠尾草專家",
    "group": "作物專家",
    "stat": "crop:sage",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成鼠尾草個數"
   },
   {
    "id": "fish_tilapia",
    "name": "吳郭魚專家",
    "group": "魚類專家",
    "stat": "fish:tilapia",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成吳郭魚條數"
   },
   {
    "id": "fish_milkfish",
    "name": "虱目魚專家",
    "group": "魚類專家",
    "stat": "fish:milkfish",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成虱目魚條數"
   },
   {
    "id": "fish_seabass",
    "name": "鱸魚專家",
    "group": "魚類專家",
    "stat": "fish:seabass",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成鱸魚條數"
   },
   {
    "id": "fish_goldfish",
    "name": "金魚專家",
    "group": "魚類專家",
    "stat": "fish:goldfish",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成金魚條數"
   },
   {
    "id": "fish_shrimp",
    "name": "蝦子專家",
    "group": "魚類專家",
    "stat": "fish:shrimp",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成蝦子條數"
   },
   {
    "id": "fish_carp",
    "name": "鯉魚專家",
    "group": "魚類專家",
    "stat": "fish:carp",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成鯉魚條數"
   },
   {
    "id": "fish_crab",
    "name": "螃蟹專家",
    "group": "魚類專家",
    "stat": "fish:crab",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成螃蟹條數"
   },
   {
    "id": "fish_piranha",
    "name": "食人魚專家",
    "group": "魚類專家",
    "stat": "fish:piranha",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成食人魚條數"
   },
   {
    "id": "fish_cat_shark",
    "name": "貓鯊專家",
    "group": "魚類專家",
    "stat": "fish:cat_shark",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成貓鯊條數"
   },
   {
    "id": "fish_bamboo_shark",
    "name": "竹鯊專家",
    "group": "魚類專家",
    "stat": "fish:bamboo_shark",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成竹鯊條數"
   },
   {
    "id": "fish_blacktip_shark",
    "name": "黑鰭鯊專家",
    "group": "魚類專家",
    "stat": "fish:blacktip_shark",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成黑鰭鯊條數"
   },
   {
    "id": "fish_hammerhead",
    "name": "雙髻鯊專家",
    "group": "魚類專家",
    "stat": "fish:hammerhead",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收成雙髻鯊條數"
   },
   {
    "id": "animal_egg_hen",
    "name": "蛋雞專家",
    "group": "動物專家",
    "stat": "animal:egg_hen",
    "statIds": [
     "egg_hen"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收雞蛋個數"
   },
   {
    "id": "animal_broiler",
    "name": "肉雞專家",
    "group": "動物專家",
    "stat": "animal:broiler",
    "statIds": [
     "broiler"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計出貨肉雞隻數"
   },
   {
    "id": "animal_duck",
    "name": "鴨專家",
    "group": "動物專家",
    "stat": "animal:duck",
    "statIds": [
     "meat_duck",
     "down_duck"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收鴨產物個數（羽毛＋出貨肉鴨）"
   },
   {
    "id": "animal_goose",
    "name": "鵝專家",
    "group": "動物專家",
    "stat": "animal:goose",
    "statIds": [
     "meat_goose",
     "down_goose"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收鵝產物個數（羽毛＋出貨肉鵝）"
   },
   {
    "id": "animal_wool_sheep",
    "name": "毛羊專家",
    "group": "動物專家",
    "stat": "animal:wool_sheep",
    "statIds": [
     "wool_sheep"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收羊毛個數"
   },
   {
    "id": "animal_dairy_goat",
    "name": "乳羊專家",
    "group": "動物專家",
    "stat": "animal:dairy_goat",
    "statIds": [
     "dairy_goat"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收羊奶個數"
   },
   {
    "id": "animal_meat_sheep",
    "name": "草飼羊專家",
    "group": "動物專家",
    "stat": "animal:meat_sheep",
    "statIds": [
     "meat_sheep"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計出貨肉羊隻數"
   },
   {
    "id": "animal_dairy_cow",
    "name": "乳牛專家",
    "group": "動物專家",
    "stat": "animal:dairy_cow",
    "statIds": [
     "dairy_cow"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收牛奶個數"
   },
   {
    "id": "animal_beef_cattle",
    "name": "草飼牛專家",
    "group": "動物專家",
    "stat": "animal:beef_cattle",
    "statIds": [
     "beef_cattle"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計出貨肉牛隻數"
   },
   {
    "id": "animal_pig",
    "name": "豬專家",
    "group": "動物專家",
    "stat": "animal:pig",
    "statIds": [
     "pig"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計出貨肉豬隻數"
   },
   {
    "id": "animal_egg_duck",
    "name": "蛋鴨專家",
    "group": "動物專家",
    "stat": "animal:egg_duck",
    "statIds": [
     "egg_duck"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收鴨蛋個數"
   },
   {
    "id": "animal_meat_rabbit",
    "name": "肉兔專家",
    "group": "動物專家",
    "stat": "animal:meat_rabbit",
    "statIds": [
     "meat_rabbit"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計出貨肉兔隻數"
   },
   {
    "id": "animal_mallard",
    "name": "綠頭鴨專家",
    "group": "動物專家",
    "stat": "animal:mallard",
    "statIds": [
     "mallard"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收綠頭鴨羽毛個數"
   },
   {
    "id": "animal_angora_rabbit",
    "name": "毛兔專家",
    "group": "動物專家",
    "stat": "animal:angora_rabbit",
    "statIds": [
     "angora_rabbit"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收兔毛個數"
   },
   {
    "id": "animal_alpaca",
    "name": "毛駝專家",
    "group": "動物專家",
    "stat": "animal:alpaca",
    "statIds": [
     "alpaca"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計收駝毛個數"
   },
   {
    "id": "animal_ostrich",
    "name": "肉鴕專家",
    "group": "動物專家",
    "stat": "animal:ostrich",
    "statIds": [
     "ostrich"
    ],
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計出貨肉鴕隻數"
   },
   {
    "id": "bee_honey",
    "name": "蜜蜂專家",
    "group": "昆蟲",
    "stat": "hive:beehive",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "蜜蜂蜂箱累計產蜜罐數"
   },
   {
    "id": "bee_bumble",
    "name": "熊蜂專家",
    "group": "昆蟲",
    "stat": "hive:bumble_hive",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "熊蜂箱累計產蜜罐數"
   },
   {
    "id": "flower_lavender",
    "name": "薰衣草專家",
    "group": "昆蟲",
    "stat": "honey:honey_lavender",
    "tiers": [
     100,
     1000,
     5000,
     10000
    ],
    "desc": "累計採到薰衣草蜜罐數"
   },
   {
    "id": "bird_watcher",
    "name": "賞鳥達人",
    "group": "寵物鳥",
    "stat": "birdKinds",
    "tiers": [
     2,
     4,
     7,
     11
    ],
    "desc": "養過幾種寵物鳥"
   },
   {
    "id": "bug_squad",
    "name": "除蟲小隊",
    "group": "寵物鳥",
    "stat": "birdBugs",
    "tiers": [
     10,
     50,
     200,
     1000
    ],
    "desc": "寵物鳥累計抓蟲（棵次）"
   },
   {
    "id": "pioneer_wood",
    "name": "森林探險家",
    "group": "開拓",
    "stat": "mat:wood",
    "tiers": [
     100,
     1000,
     10000,
     50000
    ],
    "desc": "累計得到木材份數",
    "since": "2.41"
   },
   {
    "id": "pioneer_crystal",
    "name": "水晶收藏家",
    "group": "開拓",
    "stat": "mat:amethyst+rose_quartz+citrine+smoky_quartz",
    "tiers": [
     10,
     100,
     500,
     2000
    ],
    "desc": "累計得到水晶份數（紫水晶、粉晶、黃水晶、茶晶合計）",
    "since": "2.41"
   },
   {
    "id": "pioneer_flatten",
    "name": "大地改造家",
    "group": "開拓",
    "stat": "terrainCleared",
    "tiers": [
     20,
     100,
     500,
     2000
    ],
    "desc": "地形格變成平地的格數",
    "since": "2.41"
   },
   {
    "id": "pioneer_iron",
    "name": "鋼鐵之心",
    "group": "開拓",
    "stat": "mat:iron_ore",
    "tiers": [
     20,
     200,
     2000,
     10000
    ],
    "desc": "累計得到鐵礦份數",
    "since": "2.41"
   },
   {
    "id": "pioneer_copper",
    "name": "赤銅之手",
    "group": "開拓",
    "stat": "mat:copper_ore",
    "tiers": [
     10,
     100,
     1000,
     6000
    ],
    "desc": "累計得到銅礦份數",
    "since": "2.41"
   },
   {
    "id": "pioneer_stone",
    "name": "鑿石高手",
    "group": "開拓",
    "stat": "mat:stone",
    "tiers": [
     100,
     1000,
     10000,
     50000
    ],
    "desc": "累計得到石材份數",
    "since": "2.41"
   },
   {
    "id": "pioneer_soil",
    "name": "掘土高手",
    "group": "開拓",
    "stat": "mat:soil",
    "tiers": [
     50,
     500,
     5000,
     20000
    ],
    "desc": "累計得到土的份數（土丘、挖河道）",
    "since": "2.41"
   },
   {
    "id": "pioneer_blast",
    "name": "爆破專家",
    "group": "開拓",
    "stat": "dynamited",
    "tiers": [
     10,
     50,
     200,
     1000
    ],
    "desc": "用炸藥炸掉的格數",
    "since": "2.41"
   },
   {
    "id": "pioneer_river",
    "name": "河道造型師",
    "group": "開拓",
    "stat": "riverEdits",
    "tiers": [
     20,
     100,
     500,
     2000
    ],
    "desc": "填平和挖河道的格數",
    "since": "2.41"
   },
   {
    "id": "pioneer_bridge",
    "name": "造橋大師",
    "group": "開拓",
    "stat": "bridges",
    "tiers": [
     5,
     20,
     50,
     100
    ],
    "desc": "放過的橋格數",
    "since": "2.41"
   },
   {
    "id": "pioneer_rainbow",
    "name": "彩虹奇遇",
    "group": "開拓",
    "stat": "rainbows",
    "tiers": [
     1,
     10,
     50,
     200
    ],
    "desc": "點到彩虹的次數",
    "since": "2.41"
   },
   {
    "id": "pioneer_amethyst",
    "name": "紫晶貴人",
    "group": "開拓",
    "stat": "mat:amethyst",
    "tiers": [
     10,
     100,
     500,
     2000
    ],
    "desc": "累計得到紫水晶份數",
    "since": "2.42"
   },
   {
    "id": "pioneer_rose_quartz",
    "name": "粉晶桃花",
    "group": "開拓",
    "stat": "mat:rose_quartz",
    "tiers": [
     10,
     100,
     500,
     2000
    ],
    "desc": "累計得到粉晶份數",
    "since": "2.42"
   },
   {
    "id": "pioneer_citrine",
    "name": "黃晶聚財",
    "group": "開拓",
    "stat": "mat:citrine",
    "tiers": [
     10,
     100,
     500,
     2000
    ],
    "desc": "累計得到黃水晶份數",
    "since": "2.42"
   },
   {
    "id": "pioneer_smoky_quartz",
    "name": "茶晶辟邪",
    "group": "開拓",
    "stat": "mat:smoky_quartz",
    "tiers": [
     10,
     100,
     500,
     2000
    ],
    "desc": "累計得到茶晶份數",
    "since": "2.44"
   },
   {
    "id": "pioneer_coal",
    "name": "黑金礦工",
    "group": "開拓",
    "stat": "mat:coal",
    "tiers": [
     20,
     200,
     2000,
     10000
    ],
    "desc": "累計得到煤礦份數",
    "since": "2.42"
   }
  ],
  "badgeSources227": {
   "art/src_ui/v227/7_badges_crops_30.png": {
    "cols": 5,
    "rows": 6,
    "ids": [
     "crop_alfalfa",
     "crop_timothy",
     "crop_oats",
     "crop_barley",
     "crop_rye",
     "crop_millet",
     "crop_sorghum",
     "crop_red_bean",
     "crop_mung_bean",
     "crop_pea",
     "crop_green_bean",
     "crop_carrot",
     "crop_sweet_potato",
     "crop_daikon",
     "crop_beet",
     "crop_taro",
     "crop_lettuce",
     "crop_spinach",
     "crop_bok_choy",
     "crop_napa_cabbage",
     null,
     "crop_eggplant",
     "crop_cucumber",
     "crop_bell_pepper",
     "crop_chili",
     "crop_okra",
     "crop_honeydew",
     "crop_muskmelon",
     "crop_sugarcane",
     "crop_cotton"
    ]
   },
   "art/src_ui/v227/8_badges_herbs_fish_animals_30.png": {
    "cols": 5,
    "rows": 6,
    "ids": [
     "crop_tea",
     "crop_coffee",
     "crop_mint",
     "crop_basil",
     "crop_rosemary",
     "crop_thyme",
     "flower_lavender",
     "fish_tilapia",
     "fish_milkfish",
     "fish_seabass",
     "fish_goldfish",
     "fish_shrimp",
     "fish_carp",
     "fish_crab",
     "fish_piranha",
     "fish_cat_shark",
     "fish_bamboo_shark",
     "fish_blacktip_shark",
     "fish_hammerhead",
     null,
     "animal_duck",
     "animal_goose",
     "animal_wool_sheep",
     "animal_dairy_goat",
     "animal_meat_sheep",
     "animal_dairy_cow",
     "animal_beef_cattle",
     "animal_pig",
     "bee_honey",
     "bee_bumble"
    ]
   },
   "art/src_ui/v227/9_badges_hen_broiler_soybean_sage_4.png": {
    "cols": 4,
    "rows": 1,
    "ids": [
     "animal_egg_hen",
     "animal_broiler",
     "crop_soybean",
     "crop_sage"
    ]
   },
   "note": "裁成 art/batch37/ui_badge_<成就 id>.png（160×160），灰色版 _off；第 7 張的南瓜不用（v2.19 已有）、第 8 張的「雞」不用（改用第 9 張的蛋雞、肉雞）"
  },
  "groupIcons241": {
   "開拓": "ui_badge_pioneer_wood"
  },
  "badgeSources241": {
   "art/src_ui/v241/badges_terrain_11.png": {
    "rows": [
     4,
     4,
     3
    ],
    "ids": [
     "pioneer_wood",
     "pioneer_crystal",
     "pioneer_flatten",
     "pioneer_iron",
     "pioneer_copper",
     "pioneer_stone",
     "pioneer_soil",
     "pioneer_blast",
     "pioneer_river",
     "pioneer_bridge",
     "pioneer_rainbow"
    ],
    "note": "透明背景；art/v241_48.py 依透明度找出 11 塊、裁切置中；灰色由彩色轉換"
   }
  },
  "badgeSources242": {
   "art/src_ui/v242/badges_minerals_4.png": {
    "ids": [
     "pioneer_amethyst",
     "pioneer_rose_quartz",
     "pioneer_citrine",
     "pioneer_coal"
    ],
    "note": "一列 4 個、緞帶相連；art/v242_50.py 在中間透明最少的欄切開"
   }
  }
 },
 "pwa": {
  "serviceWorker": "sw.js",
  "skipOnFile": true,
  "updatePrompt": "有新版本，重新整理",
  "noCache": [
   "accounts.google.com",
   "googleapis.com",
   "gstatic.com"
  ],
  "installButton": true,
  "iosHint": "Safari「分享」→「加入主畫面」",
  "themeColorDay": "#7fd0f5",
  "themeColorNight": "#1d2a44",
  "maskableIcon": "icons/icon-maskable-512.png",
  "autoUpdate": {
   "checkOnForeground": true,
   "applyWhenHidden": true,
   "applyOnLaunch": true,
   "note": "（v2.33.1 起不用，改看 pwa.update）iPhone 主畫面 App 沒有重新整理鈕：回到前景就檢查新版；下載好之後在切到背景或下次打開時自動存檔並換新版；☰ 選單與設定有「檢查更新」，有新版時 ☰ 亮紅點"
  },
  "update": {
   "versionFile": "version.json",
   "checkMinutes": 30,
   "navigateTimeoutMs": 4000,
   "warmAfterSec": 20,
   "note": "v2.33.1：打開、回到前景、每 checkMinutes 分鐘向網站問 version.json（不經快取）；版本不同就在下方跳「有新版本」＋「更新」「稍後」。按更新：存檔、清掉離線快取、重新載入。頁面有網路時一律先拿最新（navigateTimeoutMs 內拿不到才用快取），圖片和定義檔網址帶版本號；整包離線檔改在打開 warmAfterSec 秒後於背景慢慢補。取代 autoUpdate",
   "swUpdateViaCache": "none"
  }
 },
 "checkin": {
  "rewards": [
   100,
   150,
   200,
   250,
   300,
   350,
   400
  ],
  "utcOffsetHours": 8,
  "popup": true,
  "note": "每日簽到：七天一輪，rewards＝第 1～7 天的金幣；換日用 utcOffsetHours（台北 +8）的午夜；漏掉一天以上回到第 1 天；簽完第 7 天隔天回到第 1 天；每座農場各自簽（存檔 S.checkin）"
 },
 "storeFirst": {
  "askWhenOut": true,
  "note": "倉庫優先：裝飾、柵欄、狗屋／貓跳台、收回倉庫的建設、天氣娃娃、機器人（同等級）放置或購買時先用倉庫的；倉庫沒有時第一次要花金幣先問一次（askWhenOut：用完時問；askNoStock：本來就沒有也問），確定後連續放置不再問，換品項或工具重算",
  "askNoStock": true
 },
 "moveFees": {
  "soil": 30,
  "soilCrop": 60,
  "treeRate": 0.3,
  "treeMin": 50,
  "note": "田和果樹本來不能搬；要搬時付移墾費（田 30、有作物 60）或移植費（樹苗價 30%，最少 50）；魚池每格遷移費空池 30、有魚 60；先跳確認，放好才扣",
  "pool": 30,
  "poolFish": 60
 },
 "utilityLog": {
  "bucketMinutes": 60,
  "keepDays": 14,
  "fields": [
   "water",
   "kwhDay",
   "kwhNight",
   "elecCost",
   "sellKwh",
   "sellCredit"
  ],
  "note": "每小時一筆：自來水注入滴數、白天／夜間市電度數、電費、賣電度數與折抵；依日分組可展開；每張帳單可點開看它涵蓋的每小時用量，合計與帳單對得起來"
 },
 "storeBack": {
  "devices": true,
  "machines": true,
  "decos": true,
  "blockIf": {
   "machineBusy": "機器裡還有東西，先收成品或等它做完",
   "hiveColony": "蜂箱裡還有蜂群，先收蜜並等蜂群離開（或送走蜂群）才能收"
  },
  "keep": {
   "generatorFuel": true,
   "batteryCharge": false,
   "wellWater": false
  },
  "note": "植物生長燈、路燈、灑水器、電池、太陽能板、發電機、手搖發電、融雪機、水井、加工機、空的蜂箱都能用「收回」或長按拖到倉庫；收回後放在建設倉庫（S.buildStore），之後用建設或裝飾 → 建築放回，免費"
 },
 "machineUpgrade": {
  "maxLevel": 5,
  "batchesPerLevel": 1,
  "speedPerLevel": 0.15,
  "costMultOfBuild": [
   1,
   2,
   3,
   4
  ],
  "appliesTo": [
   "fish_feed_machine",
   "corn_cake_machine",
   "compost_bin",
   "biomass_gen",
   "snow_melter"
  ],
  "note": "Lv1→Lv5：每升一級一次多放 1 批、速度快 15%（每批時間 ÷ (1+0.15×(Lv-1))）；升到 Lv2～Lv5 的費用是蓋機器價 ×1～4",
  "perKind": {
   "biomass_gen": {
    "menu": [
     "load",
     "collect",
     "stats",
     "upgrade"
    ],
    "collectOff": "電直接送進電網",
    "speedAffects": "kwhPerHour",
    "fuelSlotsPerLevel": 10,
    "buildCost": 1500
   },
   "snow_melter": {
    "menu": [
     "load",
     "collect",
     "stats",
     "upgrade"
    ],
    "loadOff": "雪桶是空的：先用「鏟雪」鏟雪",
    "loadIs": "dumpBucket",
    "collectOff": "寶特瓶自動加進水塔",
    "speedAffects": "secondsPerTile",
    "buildCost": 1200
   },
   "note": "速度每級 +15%（發電量 ×、融雪每格秒數 ÷ (1+0.15×(Lv-1))），耗電不變；生質發電機燃料格每級 +10（50→90）；費用同 costMultOfBuild"
  }
 },
 "animals_note227": "productQty：生產型每次收幾個（沒寫＝1）；羽鵝一次 2 根羽毛。肉／羽共用一個徽章（badge）",
 "islands": {
  "nameMaxLen": 8,
  "names": [
   "晨霧島",
   "雲杉島",
   "蜂蜜島",
   "星砂島",
   "薄荷島",
   "楓葉島",
   "月光島",
   "彩虹島",
   "棉花島",
   "風鈴島",
   "橡實島",
   "蘋果島",
   "白鷺島",
   "琥珀島",
   "青苔島",
   "麥穗島",
   "櫻花島",
   "海鹽島",
   "松果島",
   "晴空島"
  ],
  "welcomeText": "歡迎主人回到 {name}",
  "welcomeSeconds": 1.6,
  "newIslandText": "開了新的島：{name}（可以在小地圖或「我的浮島農場」改名）",
  "renameHintText": "你的島叫「{name}」，可以在「我的浮島農場」裡改名",
  "miniMap": {
   "sizes": {
    "2": [
     132,
     96
    ],
    "3": [
     140,
     132
    ]
   },
   "mobileScale": 0.92,
   "slotsByCount": {
    "2": [
     [
      0.3,
      0.4
     ],
     [
      0.72,
      0.56
     ]
    ],
    "3": [
     [
      0.28,
      0.27
     ],
     [
      0.72,
      0.38
     ],
     [
      0.4,
      0.7
     ]
    ]
   },
   "thumbByCount": {
    "2": [
     0.42,
     0.4
    ],
    "3": [
     0.38,
     0.27
    ]
   },
   "thumbRefreshSeconds": 5,
   "longPressMs": 500,
   "gap": 8,
   "colors": {
    "sea": [
     "#4aa3d6",
     "#2f7bb3"
    ],
    "seaNight": [
     "#1b3358",
     "#0e1f3c"
    ]
   },
   "note": "v2.28.1：小地圖大小依島的數量（sizes，手機乘 mobileScale）；每座島用選擇農場同款的等角縮圖（thumbByCount＝縮圖佔小地圖寬高的比例），slotsByCount＝每座島中心位置（0～1）；縮圖每 thumbRefreshSeconds 秒更新；只有 2 座島以上才出現",
   "undersideRatio": 0.2,
   "truckIcon": 18
  },
  "newsGlobalKinds": [
   "rain",
   "snow",
   "melt",
   "bill",
   "billLate",
   "dollEnd",
   "rentEnd",
   "tornado",
   "quake",
   "v216intro"
  ],
  "note": "島＝原本的「地圖」（S.maps[i]），名字存在 S.maps[i].name；農場新聞只在 2 座島以上時，替跟某座島有關的事加上【島名】",
  "hideSwitchChip": true,
  "switcher": {
   "cardW": 132,
   "cardH": 92,
   "mobileScale": 0.9,
   "longPressMs": 500,
   "note": "v2.31：浮島切換鈕和 ☰ 一樣大、放在 ☰ 正下方（gap＝間距像素），下面一行小字是目前這座島的名字（nameGap）；點開是兩欄卡片（只列已有的島），點卡片換島、長按或右鍵改名；取代 v2.28 的小地圖",
   "gap": 8,
   "nameGap": 3,
   "showWithOneIsland": true
  }
 },
 "performance": {
  "powerSaveFps": 30,
  "normalFps": 0,
  "phoneMaxShortSide": 820,
  "imageUnloadMinutes": 5,
  "warmPrefixes": [
   "ground_",
   "building_farmhouse",
   "utility_",
   "fossil_",
   "deco_fence",
   "water_",
   "road_",
   "island"
  ],
  "note": "省電模式（手機預設開，設定可改，存在這台裝置 localStorage skyfarm-power）：畫面每秒最多 powerSaveFps 張；normalFps 0＝不限。圖片用到才載入，imageUnloadMinutes 分鐘沒畫到的圖檔會放掉；精靈圖依種類拼成 1024×1024 的小張（game/sheetpack.py）",
  "settings": {
   "storageKey": "skyfarm-perf",
   "options": {
    "res": [
     1,
     1.25,
     1.5,
     2,
     "screen"
    ],
    "fps": [
     24,
     30,
     60
    ],
    "idleFps": [
     0,
     15,
     10
    ],
    "idleSec": [
     5,
     10,
     30
    ],
    "effects": [
     "all",
     "less"
    ]
   },
   "phone": {
    "res": 1.5,
    "fps": 30,
    "idleFps": 15,
    "idleSec": 10,
    "effects": "all"
   },
   "desktop": {
    "res": "screen",
    "fps": 60,
    "idleFps": 0,
    "idleSec": 10,
    "effects": "all"
   },
   "screenMax": 3,
   "layoutLoopMs": 250,
   "note": "v2.33.1：設定「手機與效能」，每台裝置各自記（localStorage storageKey，不跟存檔）。res＝畫布解析度倍率（screen＝跟螢幕，最多 screenMax）；fps＝每秒最多畫幾張；idleFps＝idleSec 秒沒操作時降到每秒幾張（0＝不降）；effects less＝不畫雲影和下雨下雪的落下動畫。舊的 skyfarm-power：on → phone、off → 跟螢幕／60／不降、auto → 依裝置。選項列分頁、作物分類列的定位每 layoutLoopMs 毫秒算一次（原本每個畫面更新都算）"
  }
 },
 "hostWeeds240": {
  "ids": [
   "oxalis",
   "rumex"
  ],
  "dailyChancePerMap": 0.3,
  "maxPerMap": 4,
  "note": "酢漿草、羊蹄偶爾像雜草一樣自己長出來（每座島每天 30%，最多 4 株，有解鎖才長）；用「收成」點會拔掉，上面有卵、幼蟲或蛹時先問"
 },
 "birds240": {
  "house": {
   "id": "bird_house",
   "level": 9,
   "cost": 700,
   "expandCost": [
    350,
    350
   ],
   "maxSlots": 3,
   "nestMax": 4,
   "shrinkRefundRate": 0.5
  },
  "food": {
   "item": "bird_food",
   "everyHours": 8
  },
  "sellRate": 0.5,
  "nameMaxChars": 8,
  "peckSeconds": 1.2,
  "skills": {
   "flockMult": 0.8,
   "earlyHours": 1,
   "songRecoverMult": 0.7,
   "luckyFruitBoost": 0.05,
   "pairRangeBonus": 2,
   "preventPestMult": 0.8,
   "loudRatMult": 0.7,
   "talkExtraSeconds": 120
  },
  "stayHomeWhen": [
   "night",
   "rain",
   "snow"
  ],
  "species": {
   "budgie": {
    "name": "虎皮鸚鵡",
    "level": 9,
    "price": 600,
    "range": 9,
    "catchSeconds": 60,
    "skill": "flock",
    "skillText": "成群：同一間鳥屋有 2 隻以上虎皮鸚鵡時，抓蟲時間 −20%",
    "range241": true
   },
   "java_white": {
    "name": "白文鳥",
    "level": 10,
    "price": 800,
    "range": 9,
    "catchSeconds": 60,
    "skill": "extra",
    "skillText": "順便：抓完再清掉範圍內另一棵果樹的蟲",
    "range241": true
   },
   "java_black": {
    "name": "黑文鳥",
    "level": 11,
    "price": 900,
    "range": 9,
    "catchSeconds": 50,
    "skill": "early",
    "skillText": "早起：天亮前 1 小時就出門",
    "range241": true
   },
   "canary": {
    "name": "金絲雀",
    "level": 12,
    "price": 1000,
    "range": 9,
    "catchSeconds": 60,
    "skill": "song",
    "skillText": "歌聲：範圍內受驚的動物恢復快 30%",
    "range241": true
   },
   "gouldian": {
    "name": "七彩文鳥（胡錦鳥）",
    "level": 14,
    "price": 1500,
    "range": 9,
    "catchSeconds": 50,
    "skill": "lucky",
    "skillText": "吉祥：範圍內果樹結果 +5%",
    "range241": true
   },
   "lovebird": {
    "name": "牡丹鸚鵡",
    "level": 15,
    "price": 1800,
    "range": 11,
    "catchSeconds": 50,
    "skill": "pair",
    "skillText": "形影不離：同一間鳥屋有另一隻牡丹鸚鵡時範圍 +2",
    "range241": true
   },
   "cockatiel": {
    "name": "玄鳳鸚鵡",
    "level": 17,
    "price": 2200,
    "range": 11,
    "catchSeconds": 45,
    "skill": "prevent",
    "skillText": "預防：範圍內果樹長蟲機率 −20%",
    "colors": {
     "grey": "灰",
     "white": "白"
    },
    "range241": true
   },
   "sun_conure": {
    "name": "小太陽鸚鵡",
    "level": 20,
    "price": 3000,
    "range": 11,
    "catchSeconds": 40,
    "skill": "loud",
    "skillText": "大嗓門：範圍內的倉庫、垃圾站老鼠出現機率 −30%",
    "range241": true
   },
   "quaker": {
    "name": "和尚鸚鵡",
    "level": 23,
    "price": 3800,
    "range": 13,
    "catchSeconds": 45,
    "skill": "nest",
    "skillText": "築巢高手：住的那間鳥屋多 1 位（最多 4）",
    "range241": true
   },
   "african_grey": {
    "name": "非洲灰鸚鵡",
    "level": 27,
    "price": 6000,
    "range": 13,
    "catchSeconds": 40,
    "skill": "talk",
    "skillText": "學說話：範圍內有天敵靠近時大叫，天敵得手時間延長並發通知",
    "range241": true
   },
   "white_cockatoo": {
    "name": "白鳳頭鸚鵡",
    "level": 32,
    "price": 9000,
    "range": 15,
    "catchSeconds": 35,
    "skill": "double",
    "skillText": "範圍最大、一次可以同時抓 2 棵",
    "range241": true
   }
  },
  "rangeIsFlight": true,
  "status241": {
   "reasons": [
    "hungry",
    "home",
    "noTree",
    "patrol",
    "catching"
   ],
   "text": {
    "hungry": "餓了：倉庫沒有鳥飼料",
    "home": "{why}，待在鳥屋",
    "noTree": "範圍內沒有果樹",
    "patrol": "範圍內的果樹沒有蟲（巡邏中）",
    "catching": "抓蟲中：{tree}・還要 {sec} 秒"
   },
   "rangeOverlay": {
    "alpha": 0.16,
    "lineAlpha": 0.55,
    "bugIcon": "ui_pest",
    "colors": [
     "#ff7a59",
     "#4aa3ff",
     "#ffc53d",
     "#7bd16a",
     "#c17dff",
     "#ff6fb1",
     "#3fd0c9",
     "#a5a5ff"
    ]
   },
   "note": "範圍各 +4（邊長）；飛的範圍＝抓蟲範圍＝小技能的「範圍內」；牡丹鸚鵡 +2 同時加在兩者；打開鳥屋面板時地圖淡色框出每隻鳥的範圍（顏色跟面板名字一樣），範圍內有蟲的果樹標小蟲"
  },
  "miniMap242": {
   "cell": [
    30,
    15
   ],
   "maxCells": 17,
   "legend": [
    "果樹",
    "有蟲的果樹",
    "鳥屋"
   ],
   "note": "鳥屋面板裡的範圍小圖：畫法跟蜂箱採蜜範圍小圖一樣，每隻鳥一個同色框"
  }
 },
 "terrain241": {
  "blocks": {
   "flatFirstBlock": true,
   "coverage": [
    0.3,
    0.6
   ],
   "minKinds": 1,
   "maxRivers": 1,
   "oldBlocksUnchanged": true,
   "note": "只有建立農場時的第一塊地全平；之後每一塊（含第 2、3 座島的第一塊）地形格佔 30%～60%；已開的地塊不變"
  },
  "dice": {
   "freePerDay": 3,
   "perFarm": true,
   "reset": "localMidnight",
   "rerollCostRate": 0.05,
   "askBeforePay": true,
   "savedInState": true,
   "note": "選好擴地方向先擲一次看預覽（小圖＋地形 %），按「確定擴地」付擴地費才生效；重擲每天免費 3 次，用完每次付這塊擴地費 × 5%"
  },
  "unitsPerMaterial": 10,
  "stages": [
   0.6666666666666666,
   0.3333333333333333
  ],
  "regrow": false,
  "types": {
   "forest": {
    "name": "小森林",
    "cellName": "野樹",
    "cells": [
     3,
     15
    ],
    "reserve": [
     600,
     900
    ],
    "yields": {
     "wood": 1
    },
    "robot": "lumber",
    "dynamite": 1,
    "debris": "logs",
    "looks": [
     "oak",
     "pine",
     "camphor",
     "birch"
    ],
    "seasonal": true
   },
   "mine": {
    "name": "小礦山",
    "cellName": "岩石",
    "cells": [
     2,
     12
    ],
    "reserve": [
     800,
     1200
    ],
    "yields": {
     "stone": 0.65,
     "iron_ore": 0.2,
     "copper_ore": 0.12,
     "crystal": 0.03
    },
    "veins": [
     "iron_ore",
     "copper_ore",
     "crystal"
    ],
    "veinMult": 2,
    "robot": "mine",
    "dynamite": 2,
    "debris": "rubble",
    "looks": [
     "granite",
     "slate",
     "sandstone"
    ],
    "note": "每座礦山（相連的岩石格）開地時抽一種礦脈，那種比例 ×2，其餘依比例縮小"
   },
   "mound": {
    "name": "土丘",
    "cellName": "土丘",
    "cells": [
     3,
     15
    ],
    "contiguous": true,
    "reserve": [
     200,
     300
    ],
    "yields": {
     "soil": 1
    },
    "robot": "grade",
    "dynamite": 1,
    "debris": "dirt",
    "draw": "contour"
   },
   "river": {
    "name": "河流",
    "cellName": "河流",
    "width": [
     1,
     2
    ],
    "draw": "contour",
    "notRobot": true,
    "notDynamite": true
   }
  },
  "blocking": {
   "walk": false,
   "build": false,
   "weeds": false,
   "disasterDebris": false,
   "movable": false,
   "storable": false
  },
  "dynamite": {
   "item": "dynamite",
   "price": 120,
   "unlockLevel": 3,
   "fuseSeconds": 3,
   "xp": 0,
   "keepsReserve": false,
   "debris": {
    "logs": "斷木堆",
    "rubble": "碎石堆",
    "dirt": "土堆"
   },
   "clear": {
    "manualTaps": 3,
    "coinCost": 30,
    "robotUnits": 30,
    "robot": "grade"
   }
  },
  "river": {
   "moistRange": 1,
   "moistBonus": 0.5,
   "sameAs": "pond",
   "fillSoil": 2,
   "soilBuyPrice": 5,
   "digCost": 20,
   "digSoil": 2,
   "digAnyGrass": true,
   "mergeWithPools": false,
   "note": "相鄰的河流格連成一條；擲出來的從一邊流到另一邊或島邊；玩家挖的接上就跟著流，沒接上的是靜水小溪"
  },
  "bridges": {
   "bridge_wood": {
    "name": "木橋",
    "materials": {
     "wood": 6
    },
    "cost": 30
   },
   "bridge_stone": {
    "name": "石橋",
    "materials": {
     "stone": 8
    },
    "cost": 60
   },
   "storable": true,
   "autoDirection": "perpendicularToRiver",
   "robotsIgnore": true
  },
  "draw": {
   "riverDepth": 5,
   "bankWidth": 0.22,
   "jitter": 0.12,
   "cornerRound": 0.35,
   "flowSpeed": 0.25,
   "moundHeight": 9,
   "shoreDecoPerCell": 0.6,
   "note": "marching squares 外形＋依格子座標固定擾動；河床下降、岸坡、土丘隆起都畫在自己格子裡"
  },
  "rainbow": {
   "waterfall": {
    "chancePerHour": 0.1,
    "minutes": 10
   },
   "afterRain": {
    "minutes": [
     30,
     60
    ],
    "waterfallAlways": true
   },
   "fadeSeconds": 20,
   "notWhen": [
    "night",
    "snow",
    "cloudy",
    "rain"
   ],
   "tapCoins": 10,
   "tapOnce": true
  },
  "inspect": {
   "tapWithNoTool": true,
   "title": "查看地形"
  },
  "ui": {
   "toolGroup": "tidy",
   "tools": [
    "dynamite",
    "clear",
    "fill",
    "dig",
    "bridge"
   ],
   "note": "炸藥、清理、填平、挖河道、橋併進「整理」工具組，排在搬移、收回、剷除後面（玩家 2026-10-29）；由程式在載入時接到 ui.toolGroups.tidy.tools 後面"
  },
  "materials": {
   "ids": [
    "wood",
    "stone",
    "soil",
    "iron_ore",
    "coal",
    "copper_ore",
    "amethyst",
    "rose_quartz",
    "citrine",
    "smoky_quartz"
   ],
   "groupName": "建材",
   "storeName": "建材小屋",
   "phase": 1,
   "later": {
    "stone": "鋪路、石橋、圍牆、建築升級",
    "iron_ore": "工具、加工機器、灑水設備",
    "copper_ore": "電線、發電設備、自動化設施",
    "crystal": "水底燈、特殊裝飾、進階設備",
    "coal": "燃料（發電、煉鐵）",
    "amethyst": "水底燈、特殊裝飾、進階設備",
    "rose_quartz": "水底燈、特殊裝飾、進階設備",
    "citrine": "水底燈、特殊裝飾、進階設備",
    "smoky_quartz": "水底燈、特殊裝飾、進階設備"
   }
  },
  "renameCategory": {
   "material": "耗材",
   "note": "農產倉庫原本的「材料」分類改名「耗材」"
  }
 },
 "terrain242": {
  "note": "v2.42 地形第一段：生成、擲骰子、畫法、查看地形。數值沿用 terrain241，這裡是新增或改掉的部分。",
  "gen": {
   "coverage": [
    0.3,
    0.6
   ],
   "kindsWeights": {
    "forest": 1,
    "mine": 0.8,
    "mound": 0.8
   },
   "riverChance": 0.45,
   "extraKindChance": 0.55,
   "forestClusters": [
    1,
    3
   ],
   "note": "每塊地先決定河流（最多 1 條）、再放礦山、土丘、森林，直到地形格達到 30%～60%；至少 1 種地形"
  },
  "mine": {
   "core": [
    2,
    3
   ],
   "coreBigChance": 0.5,
   "extra": [
    0,
    0
   ],
   "cells": [
    4,
    9
   ],
   "yields": {
    "stone": 0.6,
    "iron_ore": 0.18,
    "coal": 0.12,
    "copper_ore": 0.08,
    "crystal": 0.02
   },
   "crystalSplit": [
    "amethyst",
    "rose_quartz",
    "citrine",
    "smoky_quartz"
   ],
   "stoneMin": 0.3,
   "veins": [
    {
     "id": "coal",
     "name": "煤礦脈",
     "p": 0.25,
     "mult": {
      "coal": 2
     }
    },
    {
     "id": "iron_ore",
     "name": "鐵礦脈",
     "p": 0.25,
     "mult": {
      "iron_ore": 2
     }
    },
    {
     "id": "copper_ore",
     "name": "銅礦脈",
     "p": 0.2,
     "mult": {
      "copper_ore": 2
     }
    },
    {
     "id": "amethyst",
     "name": "紫水晶礦脈",
     "p": 0.075,
     "mult": {
      "amethyst": 3
     }
    },
    {
     "id": "rose_quartz",
     "name": "粉晶礦脈",
     "p": 0.075,
     "mult": {
      "rose_quartz": 3
     }
    },
    {
     "id": "citrine",
     "name": "黃水晶礦脈",
     "p": 0.075,
     "mult": {
      "citrine": 3
     }
    },
    {
     "id": "smoky_quartz",
     "name": "茶晶礦脈",
     "p": 0.075,
     "mult": {
      "smoky_quartz": 3
     }
    }
   ],
   "sprite": "terrain_mine_{vein}",
   "wildSuffix": "_wild",
   "noWild": [],
   "squash": [
    1,
    0.8,
    0.6
   ],
   "note": "正方形核心 2×2 或 3×3 用玩家的礦山圖（v2.44 batch53）蓋滿，核心外不再有小岩石（extra 0）；整座一起採（合計蘊藏量），剩 2/3、1/3 時整張圖往下壓矮；還沒開採是天然版（_wild），開採後換有礦坑的",
   "drawScale": 0.75,
   "bigScale": 1.15,
   "scaleNote": "v2.44.2：礦山圖整張乘 drawScale（2×2 約 1.3～1.5 棵樹高），3×3 核心再乘 bigScale（原本放大 1.5 倍）；之後玩家給多版本的圖再換"
  },
  "mound": {
   "treeH": 69,
   "heightByCells": [
    [
     3,
     0.65
    ],
    [
     6,
     0.95
    ],
    [
     8,
     1.1
    ],
    [
     14,
     1.45
    ]
   ],
   "renderScale": 1.25,
   "note": "高度用「幾棵樹高」（一般樹 69 單位）：3 格 0.65、6 格 0.95、8 格 1.1、14 格以上 1.45，中間內插"
  },
  "river": {
   "waterDrop": 6.4,
   "bedDepth": 9,
   "renderScale": 2,
   "shoreDecoChance": 0.35,
   "waterfall": {
    "sprite": "terrain_waterfall3w_ab",
    "skew": 0.162,
    "note": "v2.44 玩家選第三組只留水 10 格（batch53 terrain_waterfall3w_ab，每秒 8 格）。atlas 的 faces＝圖本來對的邊（se 右下／sw 左下，預設 sw），另一條邊左右翻轉；skew 用 atlas 的（沒有才用這裡的），翻轉時變號；河寬 2 格放大 2 倍"
   },
   "note": "水面比草地低 0.2 格（6.4 單位），河床中間再深約 0.3 格；只畫在河流格自己裡面"
  },
  "fade": {
   "alpha": 0.45,
   "rows": 4,
   "note": "礦山、土丘後方（畫面上方）幾格內有田、樹、動物、建物，或滑鼠指到那裡時，整座變半透明"
  },
  "dice": {
   "title": "擴地：看看這塊地",
   "confirm": "確定擴地",
   "reroll": "重擲",
   "freeLeft": "今天還能免費重擲 {n} 次",
   "paid": "今天的免費次數用完了：重擲一次 {cost} 金幣"
  },
  "kindNames": {
   "forest": "小森林",
   "mine": "小礦山",
   "mound": "土丘",
   "river": "河流"
  },
  "kindColors": {
   "forest": "#3f8a3c",
   "mine": "#8d8a84",
   "mound": "#9ccc5a",
   "river": "#4a9ad8",
   "grass": "#8ccb5c"
  },
  "inspect": {
   "title": "查看地形",
   "later": "炸藥在「建設 · 地形」（森林、土丘一格 1 支，礦山整座「格數 × 2」支）；炸完變碎屑，用「整理 · 清理」敲 3 下、付 30 金幣，或讓整地機器人清。"
  }
 },
 "terrain243": {
  "shed": {
   "boost": {
    "add": 100,
    "price": 2000,
    "mult": 1.5,
    "max": 20
   },
   "sellRows": [
    1,
    10
   ],
   "texts": {
    "noShed": "這座島還沒有建材小屋：在「建設」蓋一間（每座島 1 間），清地形機器人才會出動",
    "one": "每座島只能蓋 1 間建材小屋",
    "later": "第一階段建材只能賣錢、算成就；之後會拿來蓋橋、鋪路、做工具和設備。"
   },
   "fill": [
    [
     0.34,
     "empty"
    ],
    [
     0.67,
     "half"
    ],
    [
     9,
     "full"
    ]
   ],
   "nightLight": true
  },
  "robots": {
   "kinds": {
    "lumber": "forest",
    "mine": "mine",
    "grade": "mound"
   },
   "tilesPerSecond": 1,
   "unloadSeconds": 2,
   "texts": {
    "needPart": "{part}磨完了：點「換耗材」",
    "noShed": "待命：這座島還沒有建材小屋",
    "shedFull": "待命：建材小屋滿了",
    "noTerrain": "待命：這座島沒有{what}",
    "noReach": "走不到：{what}旁邊沒有可以走的路",
    "noRail": "待命：沒有軌道連到建材小屋"
   },
   "what": {
    "lumber": "野樹",
    "mine": "礦山",
    "grade": "土丘"
   }
  }
 },
 "terrain2431": {
  "fade": {
   "moundRiver": false,
   "riverRows": 4,
   "note": "土丘：後面（畫面上方）riverRows 格內有河流就一直半透明（透明度用 terrain242.fade.alpha），滑鼠指到土丘後面的格子也半透明；礦山只在指到後面時半透明；v2.46：森林跟礦山一樣，指到被擋住的後面時整片半透明（forest）",
   "forest": true
  }
 },
 "terrain244": {
  "rainbow": {
   "sprite": "fx_rainbow_fall",
   "fps": 6,
   "in": [
    0,
    6
   ],
   "hold": [
    6,
    11
   ],
   "out": [
    11,
    18
   ],
   "chancePerHour": 0.1,
   "minutes": 10,
   "coins": 10,
   "width": 48,
   "drop": 0.5,
   "dx": -5,
   "note": "瀑布彩虹：白天（dayPhase light ≥ .5）、沒下雨、沒有陰天、沒下雪時，每座瀑布每小時 chancePerHour 機率（依島、位置、小時固定）在那小時裡隨機一段出現 minutes 分鐘；淡入 in 格、在 hold 格之間來回、淡出 out 格（fps 每秒格數）。width＝遊戲裡的寬度（單位），drop＝放在瀑布長度的幾成處（水霧），dx＝往水那邊偏移。點一下 +coins 金幣（每道一次），算「彩虹奇遇」徽章"
  },
  "note": "v2.44：礦山新圖、水晶四款、瀑布第三組、瀑布彩虹"
 },
 "terrain2441": {
  "river": {
   "fallBlend": {
    "color": [
     104,
     200,
     242
    ],
    "radius": 2.2,
    "curve": 1.4,
    "strength": 0.9,
    "note": "河流接到島邊的瀑布口（格子邊中點）radius 格內，水面顏色依距離混進 color（瀑布上緣的淺藍）；混合比例＝(1 − 平滑距離)^curve × strength"
   }
  }
 },
 "terrain245": {
  "rail": {
   "cost": 30,
   "stone": 1,
   "costNoStone": 40,
   "exit": [
    0,
    2
   ],
   "unlockLevel": 3,
   "refund": 15,
   "note": "小屋 2×2 四周（上下左右相鄰的 8 格）任何一格有軌道都算從小屋接出去；exit 是建議的出口格（沒鋪時畫黃黑斜紋）；某一片地形任何一格旁邊有接上的軌道，機器人才會去採"
  },
  "cart": {
   "capacity": 40,
   "tilesPerSecond": 2,
   "waitSeconds": 60,
   "free": 1,
   "buy": [
    800,
    1500
   ],
   "note": "v2.46 起：礦車不會自己動，每台伐木／採礦／整地機器人各自一列，裝滿時機器人變身車頭拉回小屋（看 terrain246.train）；buy 是第 2、3 節車廂的價格"
  },
  "texts": {
   "noRail": "待命：沒有軌道連到建材小屋",
   "noCharger": "待命：這座島還沒有重型充電樁",
   "noExit": "建材小屋前面（出口格）不在島上，鋪不了軌道",
   "railHint": "點草地鋪軌道 · 每格 30 金幣＋1 份石材（沒石材 40）· 要從建材小屋前面的出口格接出去，連到森林、礦山、土丘旁邊"
  },
  "note": "v2.45 地形第 3 段"
 },
 "terrain246": {
  "crossing": {
   "name": "通行板",
   "cost": 20,
   "unlockLevel": 3,
   "note": "鋪在一格直線軌道上（m05／m10），機器人、動物可以從側面橫越；不立鐵道柵欄；車照常通過；收回倉庫 S.buildStore.rail_cross"
  },
  "station": {
   "name": "待命站",
   "cost": 200,
   "unlockLevel": 3,
   "carBack": 0.2,
   "note": "放在軌道的盡頭（只接一邊）；一座停一列車；迎面遇到時空車退進待命站讓滿車先過；carBack＝礦車停在站格往軌道開口退幾格；收回倉庫 S.buildStore.rail_station；v2.46.1（玩家選）：夠長的尾軌（只接一邊、支線放得下整列）也能讓路，一樣近時待命站先；沒有待命站也沒有夠長的尾軌，才一次只放一列車出去；v2.46.1：在待命站後面鋪軌道＝把支線加長，待命站跟著移到新的盡頭；可以用「搬移 → 只搬待命站」單獨搬"
  },
  "fence": {
   "name": "鐵道柵欄",
   "cost": 10,
   "unlockLevel": 3,
   "note": "鋪在軌道同一格，沒有接軌的每一邊都立柵欄；可以拆單邊（不退錢）、補回（免費）；造景，軌道本身就擋路"
  },
  "train": {
   "loadSeconds": 2,
   "unloadSeconds": 3,
   "carsByLevel": [
    [
     3,
     1
    ],
    [
     10,
     2
    ],
    [
     20,
     3
    ]
   ],
   "ghostSeconds": 40,
   "note": "每台機器人一列：裝滿時機器人變身車頭（loco_<種類>_<方向>）拉回小屋卸貨（一車 3 秒），再拉空車回裝填點、變回機器人；車廂第 1 節免費，第 2、3 節照 terrain245.cart.buy 的價格（倉庫有就免費），每列最多掛的節數看等級；每節容量 terrain245.cart.capacity；一格軌道只停一台車；迎面時滿車優先、空車退進最近的待命站；沒有待命站的線一次只放一列車出去（其他的塞在出口）；ghostSeconds：卡住超過這麼久就直接穿過去（避免永遠卡死）；giveUpSeconds：機器人變身後列車一直出不了小屋（塞在出口）超過這麼久，就先回去挖或充電",
   "giveUpSeconds": 60
  },
  "stops": {
   "list": [
    "red",
    "yellow",
    "hump"
   ],
   "names": {
    "red": "紅白",
    "yellow": "黃色鋼構",
    "hump": "彎軌"
   },
   "note": "軌道末端（只接一邊）的車擋造型，免費、每格各自記；新鋪的末端用上次選的造型"
  },
  "joinTool": {
   "id": "railjoin",
   "label": "接軌",
   "icon": "ui_tool_railjoin",
   "note": "整理工具組最後面（由 g90 程式在載入時接上去，不寫進 ui.toolGroups.tidy.tools）；點軌道格選要接上或斷開哪一邊"
  },
  "texts": {
   "blocked": "被軌道擋住：鋪通行板才過得去",
   "waitCart": "等礦車",
   "jam": "等礦車：這條線沒有待命站，車塞在出口",
   "shedFull": "小屋滿了：礦車停在小屋前等",
   "noStation": "這條線沒有待命站：一次只能放一列車出去，其他的會塞在出口",
   "joinHint": "點一格軌道，選要接上或斷開哪一邊（做分叉、把兩條雙軌接起來）",
   "crossHint": "點一格直線軌道鋪通行板 · 每格 20 金幣 · 機器人、動物可以從側面橫越",
   "stationHint": "點軌道的盡頭（只接一邊的那格）放待命站 · 200 金幣 · 空車在這裡讓滿車先過",
   "fenceHint": "點軌道鋪鐵道柵欄 · 每格 10 金幣 · 沒接軌的每一邊都會立柵欄",
   "carMoving": "車在上面，等車開走再搬",
   "stuck": "卡住了・{s} 秒後自動通過",
   "yielding": "讓路中・最多再等 {s} 秒",
   "shortSiding": "這條支線只有 {n} 格，最長的列車要 {need} 格（含車頭），讓路時車尾會擋到主線：把支線再鋪長一點",
   "shortBubble": "支線太短 {n}/{need} 格",
   "askJoin": "旁邊是軌道的中段，要接上去嗎？",
   "askJoin2": "旁邊還有別的軌道，要也接上去嗎？",
   "blockedHere": "被軌道擋住：走不到地形，要在軌道上鋪通行板才過得去（只能鋪在直線軌道）",
   "stationWhere": "待命站要放在支線上：軌道的盡頭，或通到盡頭的那段直線軌道（分叉、彎道不行）"
  },
  "note": "v2.46 軌道第二段（規則文件「v2.46 軌道第二段」）"
 },
 "terrain247": {
  "point": {
   "name": "採集點",
   "cost": 150,
   "unlockLevel": 3,
   "refund": 75,
   "note": "1×1，放在貼著森林／礦山／土丘的草地；機器人站在上面倒建材，從這裡出發採範圍內離它最近的格子；同一片地形照放的順序編號 1、2、3…（小選單可改順序），每格歸最近的採集點"
  },
  "garage": {
   "name": "車庫",
   "cost": 1200,
   "unlockLevel": 3,
   "upgrade": [
    800,
    1500,
    2500,
    4000
   ],
   "maxLevel": 5,
   "refund": 600,
   "note": "2×1，dir x（兩格沿 x，門在 +x 那頭）／y（沿 y，門在 +y 那頭）；門口那格軌道接到小屋的線才算接上；一級停一列，最高 5 級；沒事的空列車開進最近有空位的車庫，滿了或沒有就收進建材小屋"
  },
  "lamp": {
   "name": "鐵軌小路燈",
   "cost": 40,
   "unlockLevel": 3,
   "lightRadius": 26,
   "note": "立在軌道格沒接軌的一邊，一格一盞；天黑自動亮（不耗電）；只是照明造景"
  },
  "bridge": {
   "name": "鐵道橋",
   "cost": 120,
   "wood": 2,
   "costNoWood": 160,
   "unlockLevel": 3,
   "note": "簡單版：把軌道鋪在河上就是鐵道橋（木橋圖 bridge_wood_<x|y>_one＋軌道），只有列車過得去（機器人、動物不能走）；收回或剷除後河照舊；之後第 4 段再做正式的橋"
  },
  "texts": {
   "noPoint": "待命：這片地形還沒有採集點（建設 · 鐵道）",
   "noPointRail": "待命：採集點旁邊沒有接到建材小屋的軌道",
   "pointWhere": "採集點要放在貼著森林、礦山、土丘的草地上",
   "garageWhere": "車庫要放在兩格空草地上",
   "garageBusy": "車庫裡還有列車，等它開出來再收",
   "bridgeMove": "橋上的軌道不能搬，可以收回或剷除"
  },
  "note": "v2.47（規則文件「v2.47 採集點、車庫、鐵軌小路燈」）"
 },
 "terrain248": {
  "steelBridge": {
   "name": "鐵軌專用鐵橋",
   "cost": 150,
   "stone": 2,
   "coal": 1,
   "stonePrice": 15,
   "coalPrice": 20,
   "unlockLevel": 3,
   "note": "拿軌道點河格＝蓋鐵橋（取代 v2.47 的木造鐵道橋，舊存檔直接換圖）；建材不夠的部分照 stonePrice／coalPrice 換算金幣，付錢前跳購買確認；只給礦車走"
  },
  "walkBridge": {
   "unlockLevel": 3,
   "maxWidth": 2,
   "wood": {
    "name": "木橋",
    "mat": "wood",
    "qty": 6,
    "cost": 30
   },
   "stone": {
    "name": "石橋",
    "mat": "stone",
    "qty": 8,
    "cost": 60
   },
   "note": "人走的橋：放在河格，方向自動跟河流垂直；河寬 2 格一次放 2 格（費用 ×2），拼成一座；建材要在這座島的建材小屋；可以收回倉庫（再放免費）；上面不能鋪軌道"
  },
  "dig": {
   "name": "挖河道",
   "cost": 20,
   "soil": 2,
   "soilSell": 1,
   "unlockLevel": 3,
   "note": "空草地才能挖；挖出的土進建材小屋，滿了照 soilSell 換金幣；碰到河就接上、跟著那條河的流向，沒碰到是獨立的靜水小溪；魚池是建築，要先移走"
  },
  "fill": {
   "name": "填平",
   "soil": 2,
   "soilPrice": 5,
   "unlockLevel": 3,
   "note": "每格 2 份土，小屋有土先用，不夠的照 soilPrice 買（付錢前跳購買確認）；有橋（人走的橋或鐵橋）的河格不能填"
  },
  "moisture": {
   "value": 0.5,
   "range": 1,
   "note": "河岸往外 1 格保濕 +50%（跟小池塘同一種，同一格只取最高）"
  },
  "texts": {
   "steelOnWalk": "這座是人走的橋，上面不能鋪軌道：先把橋收回",
   "fillSteel": "這格是鐵軌專用鐵橋，先把軌道收回",
   "fillBridge": "這格有橋，先把橋收回",
   "digPool": "魚池是建築，先把魚池移走才能挖河道",
   "digWhere": "挖河道要在空草地上",
   "tooWide": "這裡的河太寬（超過 2 格），放不了橋",
   "notRiver": "橋要放在河上",
   "chickenHungry": "餓了",
   "feed": "餵食"
  },
  "note": "v2.48（規則文件「v2.48 修正與地形第 4 段：河流玩法」）"
 },
 "terrain249": {
  "priority": {
   "order": [
    "iron_ore",
    "copper_ore",
    "coal",
    "amethyst",
    "rose_quartz",
    "citrine",
    "smoky_quartz",
    "wood",
    "soil"
   ],
   "kindMaterial": {
    "lumber": "wood",
    "grade": "soil"
   },
   "note": "會車誰先走：① 要回小屋的 ② 種類（採礦看採集點那座礦山的礦脈；伐木＝wood、整地＝soil）③ 先建立的列車（機器人收回倉庫再放出來排到最後）"
  },
  "rps": {
   "enabled": true,
   "seconds": 1.6,
   "revealAt": 0.45,
   "cooldownSeconds": 20,
   "note": "彩蛋：決定讓路時兩車中間猜拳；贏家照優先順序先定，再隨機挑贏的拳；同一對列車 cooldownSeconds 內只猜一次；手勢圖 fx_rps_<rock|paper|scissors>（玩家圖）"
  },
  "texts": {
   "title": "礦車資訊",
   "button": "礦車資訊",
   "resting": "機器人回去充電了，充好電才會繼續裝",
   "note": "會車時：要回小屋的先走，再看種類（鐵、銅、煤、紫水晶、粉晶、黃水晶、茶晶、木材、土），同一種先建立的先走。"
  },
  "note": "v2.49（規則文件「v2.49 礦車資訊面板、休息時讓出主線、會車優先順序、剪刀石頭布彩蛋」）"
 },
 "ui250": {
  "bigTitles": [
   "建材小屋",
   "查看地形",
   "礦車資訊",
   "鳥屋",
   "蝴蝶"
  ],
  "logMax": 20,
  "pollenLogMinutes": 60,
  "mapColors": {
   "day": {
    "grass": "#5d9a54",
    "mine": "#9a948c",
    "forest": "#2f6b3a",
    "mound": "#a07a4a",
    "river": "#3f78b0",
    "rail": "#6b5a48",
    "other": "#7d8a92",
    "debris": "#8a7c6c"
   },
   "night": {
    "grass": "#2f5a3c",
    "mine": "#6f6a64",
    "forest": "#1f4a2a",
    "mound": "#6f5636",
    "river": "#2c5b8c",
    "rail": "#4b4034",
    "other": "#4b5560",
    "debris": "#5c5248"
   }
  },
  "note": "v2.50：大抬頭的面板、記錄筆數（鳥、寄主植物各自最近 logMax 筆；成蝶授粉每 pollenLogMinutes 分鐘記一筆）、等角小圖顏色"
 },
 "terrain251": {
  "dynamite": {
   "tool": "build",
   "after": "river_fill",
   "icon": "ui_tool_dynamite",
   "fuseSprite": "item_dynamite",
   "boomSprite": "fx_dynamite_boom",
   "mineWhole": true,
   "perCell": {
    "forest": 1,
    "mound": 1,
    "mine": 2
   },
   "shake": {
    "seconds": 0.45,
    "amp": 3
   },
   "storeCategory": "consumable",
   "buyPacks": [
    1,
    5,
    10
   ],
   "note": "礦山點任一格整座一起炸（格數 × 2 支），森林、土丘一格 1 支；倉庫有先用倉庫的，不夠的當場照 terrain241.dynamite.price 買（付錢前跳購買確認，礦山一次問合計）；引信 fuseSeconds 秒，離開頁面回來直接算炸完"
  },
  "clear": {
   "tool": "clear",
   "label": "清理",
   "icon": "ui_tool_clear",
   "group": "tidy",
   "after": "remove",
   "note": "整理工具組：點碎屑敲一下（3 → 2 → 1 → 平地）；沒選工具點碎屑跳小選單；數字在 terrain241.dynamite.clear"
  },
  "robot": {
   "kind": "grade",
   "needRail": false,
   "first": true,
   "note": "整地機器人走得到碎屑旁邊就清（不用軌道、不用建材小屋），碎屑優先於土丘，每格 terrain241.dynamite.clear.robotUnits 單位"
  },
  "storage": {
   "danger": {
    "category": "consumable",
    "label": "危險物品",
    "art": "st_danger",
    "color": "r",
    "note": "炸藥（v2.51.1 玩家圖 batch61 ui_pg_st_danger）"
   },
   "part": {
    "category": "part",
    "label": "耗材",
    "art": "st_material",
    "color": "o",
    "after": "material",
    "note": "機器人換用的鋸鏈、鑽頭、鏟刃、滾筒…（原本放在「材料」）；「材料」只剩糞便、有機肥"
   }
  },
  "shed": {
   "note": "v2.51.1 建材小屋換玩家圖（art/src_ui/v251/material_shed.png → batch61，兩股軌道朝左下＝出口那一邊；空／一半／滿同一張）；門口兩格的軌道 T.sj251 可以接進小屋（新鋪自動接，小選單／接軌工具可斷開）",
   "inside": {
    "shade": "rgba(24,14,6,.18)",
    "cartDepth": 0.3,
    "cartSlots": [
     0.62,
     0.2
    ],
    "twoUnload": true,
    "fullToYard": true,
    "note": "小屋裡（atlas door 那塊地板）由程式畫兩股軌道、停在小屋的礦車、屋裡陰影"
   },
   "texts": {
    "head": "建材小屋",
    "linkBtn": "接進建材小屋（門口的軌道）",
    "cutBtn": "跟建材小屋斷開",
    "joined": "接進建材小屋了",
    "cut": "跟建材小屋斷開了"
   }
  },
  "texts": {
   "pick": "炸藥要點森林、礦山、土丘",
   "river": "河流不能炸",
   "lit": "引信已經點燃了",
   "debrisTap": "清理要點碎石堆、斷木堆、土堆",
   "lv": "炸藥 Lv {lv} 解鎖",
   "menuTap": "清理一下",
   "menuPay": "付 {c} 金幣馬上清好",
   "menuInfo": "查看",
   "buyQ": "倉庫有 {have} 支，不夠的 {buy} 支照 {p} 金幣／支買",
   "robotDoing": "清碎屑中",
   "robotWalk": "走去清碎屑",
   "hint": "點森林、土丘炸一格（1 支），點礦山整座一起炸（格數 × 2 支）· 倉庫有先用倉庫的，不夠每支 {p} 金幣 · 引信 {s} 秒 · 炸掉不回收建材",
   "clearHint": "點碎石堆、斷木堆、土堆敲一下（敲 {n} 下變平地，免費）· 沒選工具點碎屑可以付 {c} 金幣馬上清好 · 整地機器人也會自己去清"
  },
  "note": "v2.51（規則文件「v2.51 地形第 5 段：炸藥＋清理」）；清理工具由 g96 程式接到 ui.toolGroups.tidy 後面，設定檔不放"
 },
 "book252": {
  "note": "圖鑑分頁順序、分組、分頁小圖示（現有圖）；key 是 openBook 的分頁代號",
  "groups": {
   "grow": "種植",
   "animal": "動物",
   "build": "物品與建設",
   "ops": "營運",
   "misc": "其他"
  },
  "tabs": [
   [
    "crops",
    "田作物",
    "ui_tab_crops",
    "grow"
   ],
   [
    "trees",
    "果樹",
    "ui_tab_trees",
    "grow"
   ],
   [
    "flowers",
    "花苗",
    "ui_tab_flowers",
    "grow"
   ],
   [
    "animals",
    "動物",
    "ui_tab_livestock",
    "animal"
   ],
   [
    "pets",
    "寵物",
    "ui_tab_pet_dog",
    "animal"
   ],
   [
    "birds",
    "寵物鳥",
    "ui_tab_pet_bird",
    "animal"
   ],
   [
    "insects",
    "昆蟲",
    "ui_tab_insects",
    "animal"
   ],
   [
    "fish",
    "魚池",
    "ui_tab_fish",
    "animal"
   ],
   [
    "preds",
    "天敵與害獸",
    "ui_pred_fox",
    "animal"
   ],
   [
    "items",
    "物品",
    "ui_hd_st_produce",
    "build"
   ],
   [
    "machines",
    "機器與飼料",
    "ui_hd_mc_corn_cake_machine",
    "build"
   ],
   [
    "decos",
    "裝飾",
    "ui_tab_scenery",
    "build"
   ],
   [
    "devices",
    "設備",
    "ui_hd_lamp",
    "build"
   ],
   [
    "buildings",
    "建築",
    "ui_tab_buildings",
    "build"
   ],
   [
    "terrain",
    "地形",
    "ui_hd_terrain",
    "build"
   ],
   [
    "bills",
    "水電費",
    "ui_hd_bill",
    "ops"
   ],
   [
    "auto",
    "自動化",
    "ui_hd_auto",
    "ops"
   ],
   [
    "levels",
    "等級",
    "ui_hd_level",
    "misc"
   ],
   [
    "expand",
    "擴地",
    "ui_shed",
    "misc"
   ],
   [
    "weather",
    "天氣",
    "ui_hd_forecast",
    "misc"
   ],
   [
    "rules",
    "規則",
    "ui_tool_book",
    "misc"
   ],
   [
    "plan",
    "離開多久",
    "ui_hd_checkin",
    "misc"
   ]
  ],
  "listTabs": [
   "birds",
   "insects",
   "preds",
   "buildings",
   "terrain"
  ],
  "catNames": {
   "crop": "作物",
   "fruit": "水果",
   "product": "動物產物",
   "meat": "肉",
   "fish": "魚",
   "feed": "飼料",
   "material": "材料",
   "honey": "蜂蜜",
   "buildMat": "建材",
   "part": "耗材",
   "consumable": "危險物品"
  },
  "intro": {
   "birds": "寵物鳥住在鳥屋，白天飛到範圍內的果樹抓蟲，晚上和下雨時待在鳥屋。鳥吃鳥飼料，倉庫有就自己吃。",
   "insects": "蜜蜂和熊蜂住在蜂箱，採範圍內的花產蜂蜜、幫作物授粉；蝴蝶在寄主植物上產卵，長大後幫附近的作物長快一點，撿起來可以做標本。",
   "preds": "天敵晚上（野狼陰雨天也會）摸進農場，老鼠一整天都會來。點牠幾下可以趕走；狗會趕天敵、貓會抓老鼠，有些寵物鳥也幫得上忙。",
   "buildings": "建築用「建設」工具蓋，大多可以收回倉庫或搬移。",
   "terrain": "擴地後的新地塊會有小森林、小礦山、土丘、河流。森林、礦山、土丘不能走也不能蓋，要靠伐木／採礦／整地機器人慢慢採成建材，或用炸藥炸平再清理。",
   "auto": "機器人和無人機都住在自己的基座，工作一段時間要回去充電；可以買（初／中／高級）或租用（不用充電、不用基座，時間到就離開）。",
   "dolls": "天氣娃娃放在草地上，點一下就照效果改變天氣，用完會留下空殼。"
  },
  "when": {
   "night": "晚上",
   "nightOrRain": "晚上、陰雨天",
   "allDay": "全天"
  },
  "usableWhen": {
   "rainingOrCloudyNow": "下雨或陰天時",
   "notRainingNow": "沒下雨時",
   "notSnowingNow": "沒下雪時"
  },
  "effects": {
   "clearSky": "變晴天（晚上只是停雨）",
   "rain": "下雨：田全濕、枯萎的救回來、水塔免費補水",
   "snow": "下雪（任何氣候都可以，白天晚上都行）"
  }
 },
 "animals_note258": "v2.58：新增 egg_duck／meat_rabbit／mallard／angora_rabbit／alpaca／ostrich；trait258 是特性（rainFast、litter、pestEater、winterExtra、guard、bonusItem），面板「特性」列顯示 name＋text"
};
