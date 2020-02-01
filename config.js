// 
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "致",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "亲爱的小可爱",  // 同上...
        "这已经是我们在一起后你的第四个生日",
        "还记得去年的生日给你写的话",
        "今年没买那么多的礼物",
        "就只能多多抒情",
        "至今日",
        "距离你成为我女朋友已经过去了1184天",
        "",
        "可我觉得一切似乎弹指一挥间",
        "相遇仿佛还在昨天",
        "你我仿佛昨天还在那间影视鉴赏教室",
        "看着《勇敢的心》",
        "看着《碟中谍》",
        "就像此时莫文蔚的这首歌一样",
        "慢慢喜欢你",
        "慢慢的亲密",
        "慢慢聊自己",
        "慢慢和你走在一起",
        "慢慢的，我们也都习惯了彼此",
        "过去的一年",
        "聚少离多",
        "陪伴你的时间还是很少",
        "就我去年写给你的话来看",
        "我算是食言了",
        "",
        "也许承诺只是因为没把握吧",
        "",
        "但是无论再忙",
        "我的心里总是有你的",
        "吃到好吃的 看到好看的",
        "总是想着要是你也在就好了",
        "我的喜怒哀乐总是与你相关",
        "我记得致青春里有句台词",
        "",
        "两个人本是不相同的个体",
        "一个人怎么能这么依赖另一个人呢",
        "",
        "现在想想",
        "当然是因为爱",
        "",
        "",
        "因为这次疫情",
        "本来去看你的计划也被迫搁置了",
        "",
        "本来还想看到我拿出礼物时你的惊喜",
        "",
        "亏我想了那么久呢",
        "",
        "功亏一篑.JPG",
        "",
        "这次见不到你",
        "",
        "不知下次见你是什么时候了",
        "人生难得是欢聚",
        "",
        "唯有别离多",
        "",
        "但是又有句话说得好",
        "",
        "所有的离别都是为了再次重逢",
        "",
        "分别让人更懂得珍惜在一起的时光",
        "",
        "想念你",
        "",
        "每时每刻",
        "",
        "",
        "",
        "太晚得知今天是你的生日",
        "一切都太过仓促",
        "以后一定提前准备",
        "下次一定！下次一定！",
        "",
        "",
        "刚看了姐夫发在微信群里你的许愿视频",
        "我都跟着忍不住鼓了鼓掌",
        "希望新的一年里",
        "小可爱平平安安",
        "万事如意~~~",
        "漂亮可爱~~~",
        "心想事成~~~",
        "生日快乐！！！",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "生日快乐！！！": "./imgs/2020birth.jpg",
        "万事如意~~~":"./imgs/birth2.jpg",
        "漂亮可爱~~~":"./imgs/birth3.jpg",
        "心想事成~~~":"./imgs/birth1.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "准备好了就点我哦",
        play: "慢慢喜欢你 慢慢的老去",
        bannar_coming: "b-ling b-ling",
        balloons_flying: "呼~",
        cake_fadein: "送给你",
        light_candle: "要有光",
        wish_message: "生日快乐",
        story: "从前有座山，山上有座庙，庙里。。。",
    }
};
