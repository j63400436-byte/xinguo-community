const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

// 新國社區動態與公告資料
const communityData = {
    alerts: [
        { id: 1, type: "danger", message: "⚠️【緊急通知】明日 (10/20) 上午 09:00 - 12:00 新國街三段將進行管線維修，暫停供水！" }
    ],
    announcements: [
        {
            id: 1,
            category: "行政",
            title: "115 年度重陽節長者健康檢查與免費禮品發放",
            date: "2026-10-18",
            content: "為關懷社區長輩健康，新國社區發展協會特別邀請衛生所醫療團隊進駐社區活動中心，提供免費血壓、血糖測量及健康諮詢。",
            details: "時間：10月25日 (六) 08:30-11:30\n地點：新國社區活動中心大堂\n對象：設籍本社區 65 歲以上居民\n攜帶物品：健保卡與印章。"
        },
        {
            id: 2,
            category: "活動",
            title: "【秋季親子手作】烘焙與環保袋 DIY 體驗營",
            date: "2026-10-15",
            content: "歡迎家長帶著小朋友一起來創作屬於自己的環保購物袋，並體驗手工餅乾製作！名額有限，請盡速線上報名。",
            details: "時間：11月01日 (日) 14:00-16:30\n地點：社區二樓烹飪教室\n費用：免費（由社區發展基金全額贊助）\n名額：限 20 組家庭。"
        },
        {
            id: 3,
            category: "維修",
            title: "社區東側公園溜滑梯與路燈維護公告",
            date: "2026-10-12",
            content: "東側兒童遊戲場路燈與兒童溜滑梯已完成定檢與零件更換，今日起重新開放使用，歡迎居民前往休閒。",
            details: "感謝志工團隊歷時兩天的修繕，若居民後續發現任何公共設施異常，歡迎使用網頁『線上報修』功能回報。"
        },
        {
            id: 4,
            category: "福利",
            title: "新國特約店家優惠地圖上線！出示社區數位卡享折扣",
            date: "2026-10-10",
            content: "社區周邊已有 12 家特約藥局、早餐店與文具店加入，居民出示本網站畫面即可享有 9 折專屬優惠。",
            details: "特約店家清單：新國大藥局、阿嬤古早味早餐、陽光文具房、幸福簡餐館。完整地圖請至活動中心領取或線上查看。"
        }
    ]
};

// 取得社區資料 API
app.get('/api/community', (req, res) => {
    res.json(communityData);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`新國社區網頁伺服器已啟動：http://localhost:${PORT}`);
});